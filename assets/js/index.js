$(document).ready(Core);

function Core()
{
    InitWow();
    InitPlyr();
    InitSimpleLightbox();
    InitOwl();
    SetMobileMenu();
}

function InitWow()
{
    let wow = new WOW({
        animateClass: 'animate__animated',
    })
    wow.init();
}

function InitPlyr()
{
    const player = new Plyr('#player', {
        controls: ['play-large', 'restart', 'play', 'progress', 'current-time', 'mute', 'volume', 'captions']
    });

    player.on('playing', event => {
        if ($('.sect_video .video_wrapper').hasClass('hide_controls'))
        {
            $('.sect_video .video_wrapper').removeClass('hide_controls');
        }
    })
}

function InitSimpleLightbox()
{
    $('.sect_gallery .gallery_grid .gallery_item').simpleLightbox();
    $('.sect_news .lats_news .news_image').simpleLightbox();
    $('.sect_news .news_list .news_item .news_image').simpleLightbox();
}

function InitOwl()
{
    $(".sect_our_partners .owl-carousel").owlCarousel({
        items: 6,
        loop: true,
        autoplay: true,
        nav: true,
        navContainer: '.sect_our_partners .slider_navs',
        navText: ['', ''],
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 4
            },
            1024: {
                items: 6
            },
            1200: {
                items:6
            }
        }
    });
}

function SetMobileMenu()
{
    $('.btn_menu').on('click', function() {
        if ($('.menu').hasClass('active'))
        {
            $('.menu').removeClass('active');
            $(this).removeClass('active');
        }
        else
        {
            $('.menu').addClass('active');
            $(this).addClass('active');
        }
    })
}
