
// 1、left-panel setup background image
var imageWidth = 962;
var documentWidth = $(document.body).width();
var leftPanelWidth = $(".left-panel").width();
$(".left-panel").css({'background': 'url(./images/consuegra-left.jpg) ' + -(documentWidth / 2 - leftPanelWidth) + 'px 0 no-repeat'})
$(".rigth-panel").css({'background': 'url(./images/consuegra-right.jpg) 0 0 no-repeat'})

setInterval(function(){
    // TODO change background

}, 1000);
