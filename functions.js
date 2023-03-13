
var header = $("#header"),
    headerHeight = header.outerHeight(),
    intro = $('#intro'),
    introHeight = $(window).outerHeight() - headerHeight,
    headerOffsetTop = introHeight;

intro.height(introHeight);


function setHeader(){
    if (window.pageYOffset > introHeight) {
        header.addClass("sticky");
        intro.height(introHeight + headerHeight);
    } else{
        header.removeClass("sticky");
        intro.height(introHeight);
    }
}

$('#navbar-btn').on('click', () => {
    $('#navbar').toggleClass("sidebar-active");
    $('#navbar').toggleClass("sidebar-inactive");
});




$(window).on('scroll', () => {
    setHeader();
    fnOnScroll();
});

$(window).on('resize', () => {
    fnOnResize();
});


var timeline = $('.timeline'),
    timelineLine = $('.timeline_line'),
    lineProgress = $('.line_progress'),
    cardLogo = $('.card_logo'),
    timelineItem = $('.timeline_item'),
    windowOuterHeight = $(window).outerHeight(),
    windowHeight = $(window).height(),
    f = -1,
    flag = false;
    

function fnOnScroll() {
    posY = $(window).scrollTop();
    fnUpdateFrame();
}
function fnOnResize() {
    posY = $(window).scrollTop();
    windowHeight = $(window).height();
    fnUpdateFrame();
}

function fnUpdateWindow() {
    flag = false;

    timelineLine.css({
        top: timelineItem.first().find(cardLogo).offset().top - timelineItem.first().offset().top,
        bottom: timeline.offset().top + timeline.outerHeight() - timelineItem.last().find(cardLogo).offset().top
    });

    f !== posY && (f = posY, windowHeight, fnUpdateProgress());
}

function fnUpdateProgress() {
    var agTop = timelineItem.last().find(cardLogo).offset().top;

    i = agTop + posY - $(window).scrollTop();
    a = lineProgress.offset().top + posY - $(window).scrollTop();
    n = posY - a + windowOuterHeight / 2;
    i <= posY + windowOuterHeight / 2 && (n = i - a);
    lineProgress.css({height: n + "px"});

    timelineItem.each(function () {
        var agTop = $(this).find(cardLogo).offset().top;
        (agTop + posY - $(window).scrollTop()) < posY + .5 * windowOuterHeight ? $(this).addClass('timeline_item_active') : $(this).removeClass('timeline_item_active');
    })
}

function fnUpdateFrame() {
    flag || requestAnimationFrame(fnUpdateWindow);
    flag = true;
} 