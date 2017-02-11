# <div align=center>微信拍照示例及文档</div>

- [HTML](#html)
- [JavaScript](#javascript)
- [照片的保存(提交到服务器关联表单)](#照片的保存)

## HTML
```HTML
<ion-item>
   <div class="rt-choose-image" ng-click="choosePhotoes()">
      <i style="font-size: 80px;" class="ion-ios-camera-outline wx-camera"></i>
      <!-- <img style="width: 60px;" src="component/img//audio_record.png" /> -->
   </div>
   <div class="rt-thumbnail" ng-repeat="pic in wx.ScenePhotoes">
      <img class="thumbnail" ng-src="{{pic}}" ng-click="previewImage(pic, $index)" />
   </div>
</ion-item>
```
| **未选择过照片或未拍过照片的界面** | **选择过照片或拍过照片后的界面** |
|---|---|
|![](un-takephoto.png)|![](tookphoto.png)|

## JavaScript
- **function init**

```JavaScript
$scope.wx = {};
$scope.wx.ServerId = [];
$scope.wx.ScenePhotoes = [];

/**
 * 微信拍照功能
 * @pritive
 */
$scope.choosePhotoes = function() {
 if($scope.wx.ScenePhotoes.length < 9){
     rt.chooseImage({
        count: 9 - $scope.wx.ScenePhotoes.length,
        sizeType: ['compressed'],
        sourceType: ['album', 'camera']
     }).then(function(res){
       if(res.errMsg == "chooseImage:ok"){
          _uploadImage(0, res.localIds);
       }
     });
 }else{
     rt.showErrorToast("最多允许拍摄选择9张照片!");
 }
};

/**
* 微信照片预览
* @param localId        本地照片
* @param index          本地照片当前下标
* @pritive
*/
$scope.previewImage = function(localId, index){
 wx.previewImage({
      current: localId,
      urls: $scope.wx.ScenePhotoes
 });
};
```
- **function _uploadImage**

```JavaScript
/**
* 微信照片上传到微信服务器
* @param
* @pritive
*/
function _uploadImage(index, localIds){
   var imgLength = localIds.length;
   var i = index;
   rt.uploadImage({
     localId: localIds[i],   // 需要上传的图片的本地ID，由chooseImage接口获得
     isShowProgressTips: 1   // 默认为1，显示进度提示
   }).then(function(res){
     $scope.wx.ScenePhotoes.push(localIds[i]);
     $ionicScrollDelegate.scrollBottom(true);
     $scope.wx.ServerId.push(res.serverId);
     i++;
     if(i < imgLength){
        _uploadImage(i, localIds);
     }
   }, function(err){
     rt.showErrorToast(err);
   });
}
```
## 照片的保存
- **ApiController**

```C#
public void SaveData(FormData formData)
{
    // 处理表单数据的保存
    // ......

    // 表单中微信照片的保存
    foreach (var imageData in formData.WxImageData)
    {
       //------------------当前表单对应的实体      当前表单的主档Id   当前表单的Id      照片的serverId
       this.WxUploadImage("TheCurrentEntityName", "TheMasterFormId", "TheDetailFormId", imageData);
    }
}
```
```C#
private void WxUploadImage(string entityName, string mainFormDataId, string formDataId, string wxImageServerId)
{
    // 从微信服务器下载照片
    var imageFileFullName = WeChatService.DownloadImage(wxImageServerId);
    var imageFileName = Path.GetFileName(imageFileFullName);
    if (imageFileName == null)
       throw new Exception("获取下载的微信图片照片名出错！");
    var destImageFileFullName = Path.Combine(GetMobilePhotoDir(entityName,  DateTime.Now), imageFileName);
    // 拷贝照片到目标文件夹
    // 这里只是提供一种存放照片的方法，照片可以存放到任意位置，比如阿里云OSS、又拍云等
    // 只需把照片存放的位置对应到实体表单的记录中即可
    File.Copy(imageFileFullName, destImageFileFullName);

    var timeForNow = DateTime.Now;
    // 照片的路径
    var imageUrl= Path.Combine(timeForNow.Year.ToString(),timeForNow.ToString("M-d"),entityName,imageFileName);
    //var imageUrl= "\\"+timeForNow.Year+"\\"+timeForNow.ToString("M-d")+"\\"+entityName+"\\"+imageFileName;

    // 在数据库中的实体表单中记录照片的路径
    // ......

    // 删除临时文件
    if (File.Exists(imageFileFullName))
       File.Delete(imageFileFullName);
}
```
```C#
// 获取从微信服务器上下载的照片的存放位置
private static string GetMobilePhotoDir(string entityName, DateTime timeForNow)
{
    string XN_Dir = HttpContext.Current.Server.MapPath("~/WeChat_Photoes");

    if (!Directory.Exists(XN_Dir))
    {
      Directory.CreateDirectory(XN_Dir);
    }

    XN_Dir = Path.Combine(XN_Di timeForNow.Year.ToString());
    if (!Directory.Exists(XN_Dir))
    {
        Directory.CreateDirectory(XN_Dir);
    }

    XN_Dir = Path.Combine(XN_Di timeForNow.ToString("M-d"));
    if (!Directory.Exists(XN_Dir))
    {
        Directory.CreateDirectory(XN_Dir);
    }

    XN_Dir = Path.Combine(XN_Dir, entityName);
    if (!Directory.Exists(XN_Dir))
    {
        Directory.CreateDirectory(XN_Dir);
    }

    return XN_Dir;
}
```
```C#
public class FormData
{
    [JsonProperty("otherData")]
    public object OtherData { get; set; }

    [JsonProperty("wxImageData")]
    public List<string> WxImageData { get; set; }
}
```
