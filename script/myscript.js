$(function(){

    // 移除背景影片
    if($(window).width() < 769){
        $(".bg_video").remove();
        }

    // 滑動至指定位置
    $(".menu a").click(function(){
        btn = $(this).attr("href"); //返回取得屬性與值
        var pos = $(btn).offset(); //抓取相對的座標位置
    $("html,body").animate({ scrollTop: pos.top }, 1500);
    //變數pos的top(y軸)
    });

    // 置頂按鈕
    $("#gotop").click(function(){

        $("html,body").animate({ scrollTop: 0 }, 1000);
    });

    // 淡出淡入
    $(window).scroll(function(){
        if($(this).scrollTop() > 200){
            $("#gotop").stop().fadeIn("fast");
        }
        else{
            $("#gotop").stop().fadeOut("fast");
        }
    });

    // 滾動滑入
    $(".block").smoove({
        
        offset: '25%',
        moveX: '100px',
        moveY: '100px'
    });

});