var img=$("#slide img");
var max=img.length-1;
var cnt=0;

function slide(){
    $(img[cnt]).animate({"left":"100%"},function () {
        $(this).css({"left":"-100%"});
    })
    cnt++
    if(cnt > max) cnt=0;
    $(img[cnt]).animate({"left":"0"});
}

setInterval(slide,2000)
