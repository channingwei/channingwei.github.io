
// 1、left-panel setup background image
var imageWidth = 1920;
var leftPanelWidth = $(".left-panel").width();
$(".left-panel").css({'background': 'url(./images/consuegra.jpg) ' + -(imageWidth - leftPanelWidth) + 'px 0 no-repeat'})
$(".rigth-panel").css({'background': 'url(./images/consuegra.jpg) 0 0 no-repeat'})
