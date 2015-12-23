$(function () {
    $(".record-like").on("tap",function () {
        var hadLike = $(this).find(".like").hasClass("icon-like");
        var total = $(this).find("p").text();
        if(hadLike){
            $(this).find(".like").addClass("icon-unlike").removeClass("icon-like");
            $(this).find("p").text(parseInt(total) - 1);
        }
        else{
            $(this).find(".like").addClass("icon-like").removeClass("icon-unlike");
            $(this).find("p").text(parseInt(total) + 1);
        }
    });

    /*$(".record,.un-record").tap(function () {
     var audio = $(this).find(".audio");
     var dot = $(this).find(".dot");
     if(audio.paused){
     audio.play();
     dot.addClass("hide").removeClass("show");
     $(this).css("background-color","#e5e5e5")
     }else{
     audio.pause();
     }
     });*/

    $(".slip-down").swipe(function () {
        var html = '';
        html += '<section class="flex">';
        html +=    '<a href="record.html">';
        html +=         '<img src="../img/head2.png" alt="" class="user-header"/>';
        html +=    '</a>';
        html +=    '<div class="user-record">';
        html +=         '<div class="user-title">';
        html +=             '<span class="user-name">222222</span>';
        html +=             '<span class="time fr">2015-08-16 15:28</span>';
        html +=         '</div>';
        html +=         '<div class="record-bg"></div>';
        html +=         '<div class="user-record-like">';
        html +=             '<div class="record fl">';
        html +=                 '<audio src=""></audio>';
        html +=                 '<div class="dot hide"></div>';
        html +=                 '<label class="icon-recording cording-time"><span>18</span>&Prime;</label>';
        html +=             '</div>';
        html +=             '<div class="record-like fr">';
        html +=                 '<div class="like iconfont icon-unlike"></div>';
        html +=                 '<p class="total">3477</p>';
        html +=             '</div>';
        html +=         '</div>';
        html +=    '</div>';
        html += '</section>'

        for(var i=0; i<10; i++){
            $(".main-wrap").append(html);
        }
    });
});