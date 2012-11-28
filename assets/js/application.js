$(function() {
    function a() {
        $("body, html").animate({scrollTop: 0}, 400)
    }
    $("html, body").dblclick(function() {
        a();
        return false
    });
    $("#content, #sidebar").dblclick(function(b) {
        b.stopPropagation()
    });
    $("a#backtop").click(function() {
        a();
        return false
    });
    $(window).scroll(function() {
        var b = $("a#backtop");
        if ($(this).scrollTop() > 600) {
            b.fadeIn(400)
        } else {
            b.fadeOut(400)
        }
        if ($.browser.msie && $.browser.version == "6.0") {
            b.css({position: "absolute",top: ($(this).scrollTop() + $(window).height() - 150)})
        }
    })
});