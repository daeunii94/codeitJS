var list = $('.playlist');


/*//for문 버전
var len = list.length;
for(var i = 0; i < len; i++) {
    if(($(list[i]).offset().top + $(list[i]).height()) <= $(window).height()) {
        $(list[i]).animate({opacity: '1'}, 1000);
    }
}

$(window).scroll(function() {
    //브라우저의 위아래 길이
    var pageLength = $(window).height();

    for(var i = 0; i < len; i++) {
        if(pageLength + $(window).scrollTop() >= $(list[i]).offset().top + $(list[i]).height() / 2 ) {
            $(list[i]).animate({opacity: '1'}, 1000);
            
        }
    }

    if(Math.ceil($(window).scrollTop()) == $(document).height()-$(window).height()) {
        $(".to-top-btn").show("slow");
        $(".to-top-btn").on('click', function() {
            $('html, body').animate({scrollTop : 0}, 500);
            $(".to-top-btn").hide();//display속성을 none으로 바꾼다
        });
    }
    
});
*/


//each문 버전
//첫 로드시 스크롤 없이 처리하기 위해
$(".playlist").each(function(){
    if(($(this).offset().top + $(this).height()) <= $(window).height()) {
        $(this).animate({opacity: '1'}, 1000);
    }
}); 

//스크롤 시 각 playlist 처리 위해
$(window).scroll(function() {
    //브라우저의 위아래 길이
    var pageLength = $(window).height();
    
    $(".playlist").each(function(){
        if(pageLength + $(window).scrollTop() >= $(this).offset().top + $(this).height() / 2 ) {
            $(this).animate({opacity: '1'}, 1000);
        }
    });
    
    //맨 아래에 도달 시 버튼이 천천히 보이게
    //
    if(Math.ceil($(window).scrollTop()) == $(document).height()-$(window).height()) {
        $(".to-top-btn").show("slow");
        $(".to-top-btn").on('click', function() {
            $('html, body').animate({scrollTop : 0}, 500);
            $(".to-top-btn").hide();
        });
    }
    
});
