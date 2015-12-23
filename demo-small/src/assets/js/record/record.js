$(function () {
    $("#btn-recording").on('touchstart MSPointerDown pointerdown',function () {
        $(this).text("").addClass("btn-recording");
        $(".tip").css("display","block");
    });
    $("#btn-recording").on('touchend MSPointerUp pointerup',function () {
        var duration = $("#myaudio").duration;
        console.log(duration);
        $(".duration").text(duration).css({"font-size":"2em"});
        $(".record-less-than").css("display","none");
        $(this).css("display","none");
        $(".btn-commit").addClass("show");
        $(".btn-reset").addClass("show").removeClass("hide");
        $(".tip").css("display","none");
        $(".audio-wrap").css("display","inline-block");
    });
});