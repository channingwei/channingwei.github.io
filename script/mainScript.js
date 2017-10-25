

$(".middle-panel")[0].onmouseenter = function(event) {
    $(".left-panel").css({'filter': 'blur(1px)'})
    $(".rigth-panel").css({'filter': 'blur(1px)'})

    $(".left-panel").css({'width': '50%', 'transition': '2s'})
    $(".rigth-panel").css({'width': '50%', 'transition': '2s'})

    $(".middle-panel")[0].onmouseout = function(event) {
        $(".left-panel").css({'filter': 'blur(5px)'})
        $(".rigth-panel").css({'filter': 'blur(5px)'})

        $(".left-panel").css({'width': '20%', 'transition': '2s'})
        $(".rigth-panel").css({'width': '20%', 'transition': '2s'})
    }
}
