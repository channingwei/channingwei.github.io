/*global ckApp*/

(function () {
    "use strict";
    ckApp.config(['$translateProvider', function ($translateProvider) {
        $translateProvider.translations('en-US', {
            'component_OK': 'OK',
            'component_Cancel': 'Cancel',
            'component_Search': 'Search',
            'component_Delete':'Delete',
            'component_Reset':"Reset",
            'component_Confirm':'Confirm',

            'component_Loading': 'Loading...',

            'component_Image_Preview':'Preview',
            'component_ChooseImage_Title': 'Please choose the operation you need',
            'component_ChooseImage_TakePhoto': 'Take Photo',
            'component_ChooseImage_Album': 'Choose from Photos',

            'component_PleaseEnter':'Please Enter ',
            'component_PleaseSelect':'Please Select '
        });
    }]);
})();
