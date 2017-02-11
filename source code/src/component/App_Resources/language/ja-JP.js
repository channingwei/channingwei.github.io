/**
 * Created by lvdongbo on 2016/5/23.
 */
/*global xrmApp*/

(function () {
    "use strict";
    xrmApp.config(['$translateProvider', function ($translateProvider) {
        $translateProvider.translations('ja-JP', {
            'component_OK': 'OK',
            'component_Cancel': 'キャンセル',
            'component_Search': '検索',
            'component_Delete':'削除',
            'component_Reset':"リセット",
            'component_Confirm':'確認',
            
            'component_Loading': 'ローディング',

            'component_Image_Preview':'写真プレビュー',
            'component_ChooseImage_Title': 'ご操作を選択してください',
            'component_ChooseImage_TakePhoto': '写真取り',
            'component_ChooseImage_Album': '携帯のアルバムから選択',

            'component_PleaseEnter':'入力してください',
            'component_PleaseSelect':'選んでください'
        });
    }]);
})();