$(document).ready(function() {

    var introHeight = $(window).height() - $("#header").outerHeight();
    $('#intro').height(introHeight);

    $('#navbar-btn').on('click', toggleSidebar);
    $(window).on('scroll', () => {
        posY = $(window).scrollTop();
        setHeader();
        fnUpdateFrame();
    });
    $(window).on('resize', () => {
        introHeight = $(window).height() - $("#header").outerHeight();
        $('#intro').height(introHeight);

        posY = $(window).scrollTop();
        windowHeight = $(window).height();
        fnUpdateFrame();
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
        

    function fnUpdateFrame() {
        flag || requestAnimationFrame(fnUpdateWindow);
        flag = true;
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

    
    function setHeader(){
        if (posY > introHeight) {
            $("#header").addClass("sticky");
            $('#intro').height(introHeight + $("#header").outerHeight());
        } else{
            $("#header").removeClass("sticky");
            $('#intro').height(introHeight);
        }
    }
});




document.onclick = (e) => {
    if(e.target.id!='navbar-btn' && $('#navbar').hasClass('sidebar-active')){
        toggleSidebar();
    }
};

function toggleSidebar(){
    $('#navbar').toggleClass("sidebar-active");
    $('#navbar').toggleClass("sidebar-inactive");
}