/*global ckApp*/

(function () {
    "use strict";
    ckApp.config(['$translateProvider', function ($translateProvider) {
        $translateProvider.translations('zh-CN', {
            'component_OK': '确定',
            'component_Cancel': '取消',
            'component_Search': '搜索',
            'component_Delete': '删除',
            'component_Reset': "重置",
            'component_Confirm': '确认',

            'component_Loading': '正在加载...',

            'component_Image_Preview':'照片预览',
            'component_ChooseImage_Title': '选择您需要进行的操作',
            'component_ChooseImage_TakePhoto': '拍照',
            'component_ChooseImage_Album': '从手机相册选择',

            'component_PleaseEnter':'请输入',
            'component_PleaseSelect':'请选择'
        });
    }]);
})();
