$(document).ready(Core);

function Core()
{
    InitWow();
}

function InitWow()
{
    let wow = new WOW({
        animateClass: 'animate__animated',
    })
    wow.init();
}