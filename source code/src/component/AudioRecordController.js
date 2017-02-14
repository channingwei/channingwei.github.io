(function() {
    'use strict';
    ckApp.controller("audioRecordController", ['$scope', 'rt', '$timeout', '$rootScope', audioRecordController]);
    function audioRecordController($scope, rt, $timeout, $rootScope) {
      //  还未录音         录音中         结束录音        正在播放录音
      var STARTRECOR = 0, RECORDING = 1, RECORDEND = 2, AUDIOPLAYING = 3;
      var interval;         // 时间动画控制变量
      var audioLocalId;     // 音频的本地ID

      function init() {
          $scope.recordButtonState = STARTRECOR;
          $scope.timeSpan = "";
          $scope.titleMessage = "点击按钮，开始录制你想说的话吧。";
          $scope.recordButtonState = STARTRECOR;
          wx.stopRecord({
              success: function (res) {
                audioLocalId = "";
                $scope.$apply();
              }
          });
          $scope.startRecord = _startRecord;
          $scope.cancelClick = _cancelClick;
          $scope.commit = _commit;

          wx.onVoiceRecordEnd({
              // 录音时间超过一分钟没有停止的时候会执行 complete 回调
              complete: function (res) {
                  $scope.titleMessage = "点击按钮，试听一下吧。";
                  $scope.recordButtonState = RECORDEND;
                  clearInterval(interval);
                  interval = null;
                  audioLocalId = res.localId;
                  $scope.$apply();
              }
          });

          wx.onVoicePlayEnd({
              success: function (res) {
                  $scope.titleMessage = "点击按钮，试听一下吧。";
                  $scope.recordButtonState = RECORDEND;
                  audioLocalId = res.localId; // 返回音频的本地ID
                  $scope.$apply();
              }
          });
      }

      /**
      * 取消，回到开始录音界面
      */
      function _cancelClick(){
          $scope.timeSpan = "";
          // 先停止当前正在播放的录音
          wx.stopVoice({
              localId: audioLocalId // 需要停止的音频的本地ID，由stopRecord接口获得
          });
          $scope.titleMessage = "点击按钮，开始录制你想说的话吧。";
          $scope.recordButtonState = STARTRECOR;
          wx.stopRecord({
              success: function (res) {
                audioLocalId = "";
                $scope.$apply();
              }
          });
      }

      /**
      * 提交录音到微信服务器，并返回服务器端ID和时长
      */
      function _commit(){
          if(!rt.isNullOrEmptyString(audioLocalId)){
              // 先停止当前正在播放的录音
              wx.stopVoice({
                  localId: audioLocalId // 需要停止的音频的本地ID，由stopRecord接口获得
              });
              // 然后把录音上传到微信服务器
              wx.uploadVoice({
                  localId: audioLocalId,      // 需要上传的音频的本地ID，由stopRecord接口获得
                  isShowProgressTips: 1,             // 默认为1，显示进度提示
                  success: function (res) {
                      var serverId = res.serverId;   // 返回音频的服务器端ID
                      var audio = {};
                      audio.serverId = serverId;
                      audio.timeSpan = $scope.timeSpan;
                      $scope.closeDialog();
                      if (rt.isFunction($scope.onDataSelected) && !rt.isNull(audio)) {
                          $scope.onDataSelected(audio);
                      }
                  }
              });
          }else{
              rt.showErrorToast("音频文件本地ID丢失，请确认已经录音完毕！");
          }
      }

      /**
      * 开始录音、结束录音、播放录音、暂停播放
      */
      function _startRecord(){
          switch ($scope.recordButtonState){
              case STARTRECOR:
                  $scope.titleMessage = "点击按钮，结束录音。";
                  $scope.recordButtonState = RECORDING;
                  // 调用微信接口开始录音
                  wx.startRecord();
                  timeRun();
                  break;
              case RECORDING:
                  $scope.titleMessage = "点击按钮，试听一下吧。";
                  $scope.recordButtonState = RECORDEND;
                  clearInterval(interval);
                  interval = null;
                  // 调用微信接口结束录音
                  wx.stopRecord({
                      success: function (res) {
                        audioLocalId = res.localId;
                        //$scope.$apply();
                      }
                  });
                  break;
              case RECORDEND:
                  $scope.titleMessage = "点击按钮，停止播放录音。";
                  $scope.recordButtonState = AUDIOPLAYING;
                  // 调用微信接口播放录音
                  if(!rt.isNullOrEmptyString(audioLocalId)){
                      wx.playVoice({
                          localId: audioLocalId // 需要播放的音频的本地ID，由stopRecord接口获得
                      });
                  }else{
                      rt.showErrorToast("音频文件本地ID丢失，请确认已经录音完毕！");
                  }
                  break;
              case AUDIOPLAYING:
                  $scope.titleMessage = "点击按钮，试听一下吧。";
                  $scope.recordButtonState = RECORDEND;
                  // 调用微信接口暂停播放录音
                  if(!rt.isNullOrEmptyString(audioLocalId)){
                      wx.stopVoice({
                          localId: audioLocalId // 需要停止的音频的本地ID，由stopRecord接口获得
                      });
                  }else{
                      rt.showErrorToast("音频文件本地ID丢失，请确认已经录音完毕！");
                  }
                  break;
          }
      }

      /**
      * 时间动画
      */
      function timeRun(){
          var reg = /^\d$/, step = 1000, sum = 0;
          if (!interval) {
            interval = setInterval(function() {
                sum += 1;
                var d = new Date("1111/1/1,0:0");
                d.setSeconds(sum);
                var m = d.getMinutes();
                m = reg.test(m) ? "0" + m + "\'" : m + "\'"
                var s = d.getSeconds();
                s = reg.test(s) ? "0" + s + "\"" : s + "\"";
                $scope.timeSpan = m + s;
                $scope.$apply();
              }, step);
            }
      }

      init();
    }
})();
