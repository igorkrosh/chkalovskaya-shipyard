$(document).ready(Core);

function Core()
{
    InitWow();
    InitPlyr();
    InitSimpleLightbox();
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