$(function(){

    $('.depth2').hide();
    
    $('.depth1 > li').on('mouseover',function(){
        $(this).find('.depth2').stop().slideDown();
    }).on('mouseleave',function(){
        $(this).find('.depth2').stop().slideUp();
    })

    // $('.section > img').mouseover(function(){
    //     $(this).css('margin','-4px');
    //     $(this).css('border','3px solid #999');
    // }).mouseout(function(){
    //     $(this).css('border','');
    // })



    //이벤트 중첩을 막으려면 중간에 stop를 넣어주면됨!!

 
    
    //퀵메뉴
    var q_left = $(".menu>ul:first-child").position().left + 1200;
    var q_top = $(".menu>ul:first-child").position().top;
    $('#quickMenu').css({
        left:q_left,
        top:q_top
    })
   
    //퀵메뉴 따라가게하기 
    $(window).scroll(function(){
        var scrollTop = $(window).scrollTop();
        var q_top_new = scrollTop + q_top;
        // $("#quickMenu").css('top',q_top_new);
        $("#quickMenu").stop().animate({
            top:q_top_new
        },500);
    })

    $("#quickMenu > img[src='img/quick_05.jpg']").on('click',function(){
        alert(1);
    })
    
    $('#goTop').click(function(){
        $('html').animate({scrollTop:0},300);
    })




   
       
    //    $('.board_title').click(function(){
    //     $('board_title').removeClass("on");
    //     $(this).addClass("on");

    //     if($(this).text() == '공지사항'){
    //         $("#board_data").hide();
    //         $("#board_notice").show();
    //     }else if($(this).text()=="자료실"){
    //         $("#board_data").show();
    //         $("#board_notice").hide();
    //     }

       //})
    })
    
   
