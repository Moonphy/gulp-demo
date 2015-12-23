$(function () {
    $("#btn-recording").on('touchstart MSPointerDown pointerdown',function () {
        $(this).text("").css({"background":"#999999","color":"#4d4d4d"});
        $(".tip").css("display","block");
    });
    $("#btn-recording").on('touchend MSPointerUp pointerup',function () {
        var duration = $("#myaudio").duration;
        console.log(duration);
        $(".duration").text(duration).css({"font-size":"2em"});
        $(this).css("display","none");
        $(".btn-commit").addClass("show");
        $(".btn-reset").addClass("show").removeClass("hide");
        $(".tip").css("display","none");
        $(".audio-wrap").css("display","inline-block");
    });
});