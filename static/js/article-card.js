$(document).ready(() => {
    var x,y,top,left,down;

    $("#articles").mousedown(function(e){
        e.preventDefault();
        down=true;
        x=e.pageX;
        y=e.pageY;
        top=$(this).scrollTop();
        left=$(this).scrollLeft();
    });

    $("body").mousemove(function(e){
        if(down){
            var newX=e.pageX;
            var newY=e.pageY;
            
            $("#articles").scrollTop(top-newY+y);    
            $("#articles").scrollLeft(left-newX+x);    
        }
    });

    $("body").mouseup(function (e) { down = false; });
    $(".scrollbar-macosx").scrollbar();
})