var num = 1;

$(document).ready(function(){
    setlnterval(slide_right,2000);
})
function slide_right(){
    $("#slide li").eq(num).animate({left:-1100,opacity:0},0);
    $("#slide li").eq(num-1).animate({left:1100,opacity:0},1000);
    $("#slide li").eq(num).animate({left:0,opacity:1},1000);

    num++;
    if(num>=3){
        num=0;
    }
}