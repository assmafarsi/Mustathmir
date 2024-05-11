$(document).ready(function () {
    // Animation on scroll
    $(window).scroll(function () {
        // Hero section
        if ($(window).scrollTop() > $('#hero').offset().top - ($(window).height() / 2)) {
            $('.animated-text').css({
                'opacity': '1',
                'transform': 'translateY(0)'
            });
            $('.animated-button').css({
                'opacity': '1',
                'transform': 'translateY(0)'
            });
        }

        // Guiding words section
        if ($(window).scrollTop() > $('#guiding-words').offset().top - ($(window).height() / 2)) {
            $('.animated-image').css({
                'opacity': '1',
                'transform': 'translateX(0)'
            });
        }
    });
});
$(document).ready(function () {
    // Animation on scroll
    function playAnimations() {
        // Hero section
        if ($('#hero').length > 0 && $(window).scrollTop() > $('#hero').offset().top - ($(window).height() / 2)) {
            $('.animated-text, .animated-button').addClass('play-animation');
        }

        // Guiding words section
        if ($('#guiding-words').length > 0 && $(window).scrollTop() > $('#guiding-words').offset().top - ($(window).height() / 2)) {
            $('.animated-text, .animated-image').addClass('play-animation');
        }
    }

    // Play animations on scroll
    $(window).scroll(function () {
        playAnimations();
    });

    // Play animations on page load
    playAnimations();

    // Toggle visibility of extended info
    $('#toggle-info').click(function (e) {
        e.preventDefault();
        $('#extended-info').slideToggle();
        var buttonText = $(this).text() === 'Show More' ? 'Show Less' : 'Show More';
        $(this).text(buttonText);
    });
});
// JS code for hover effect on the explore button
document.querySelector('.explore-button').addEventListener('mouseenter', function() {
    this.style.backgroundColor = '#f0f0f0';
});

document.querySelector('.explore-button').addEventListener('mouseleave', function() {
    this.style.backgroundColor = '#fff';
});
