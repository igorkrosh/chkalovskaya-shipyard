$(document).ready(Core);

function Core()
{
    InitWow();
    InitPlyr();
    SetMediaGallerySect();
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

function SetMediaGallerySect()
{
    $('.sect_gallery .gallery_grid .gallery_item').simpleLightbox();
}