$(document).ready(Core);

function Core()
{
    InitWow();
    InitPlyr();
    InitSimpleLightbox();
    InitOwl();

    SetMobileMenu();
    SetCardSwitcher();
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
    $('.about_slider_wrapper .slider_item').simpleLightbox();
}

function InitOwl()
{
    $('.sect_our_partners .owl-carousel').owlCarousel({
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
    $('.about_slider_wrapper').owlCarousel({
        items: 1,
        dots: true
    })
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

function SetCardSwitcher()
{
    $('.btn_card_switch').on('click', function() {
        if ($(this).hasClass('active'))
        {
            return;
        }

        $('.btn_card_switch').removeClass('active');
        $(this).addClass('active');

        let targetCard = $(this).attr('target');

        SwitchCard(targetCard)
    });
}

function SwitchCard(target)
{
    $('.card.active').animate({
        opacity: 0
    }, 500, function() {
        $('.card.active').removeClass('active');

        $(`[card-name="${target}"]`).css('opacity', 0);
        $(`[card-name="${target}"]`).addClass('active');
        $(`[card-name="${target}"]`).animate({
            opacity: 1
        }, 500)
    });
}

