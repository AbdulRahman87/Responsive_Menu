window.addEventListener('resize', () => {
    let width = parseInt(window.innerWidth);

    if (width <= 520) {
        $('#list').css('justify-content', 'center');
        $('#list').css('align-items', 'center');
        $('#list').css('flex-direction', 'column');
        $('#logo').css('pointer-events', 'all');
        $('.links').slideUp(1500);
    }
    else if (width > 520) {
        $('#list').css('justify-content', '');
        $('#list').css('align-items', '');
        $('#list').css('flex-direction', '');
        $('#logo').css('pointer-events', 'none')
        $('.links').slideDown(1500);
    }
});

$(document).ready(() => {
    if (parseInt(window.innerWidth) <= 520) {
        $('#list').css('justify-content', 'center');
        $('#list').css('align-items', 'center');
        $('#list').css('flex-direction', 'column');
        $('#logo').css('pointer-events', 'all');
        $('.links').slideUp(1500);
    }

    $('#logo').click(() => {
        $('.links').slideToggle(2000);
    });
})