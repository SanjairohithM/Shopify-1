$(document).ready(function () {
    // Highlight effect on hover for navigation links
    $('.nav-link').hover(
        function () {
            $(this).addClass('text-danger');
        },
        function () {
            $(this).removeClass('text-danger');
        }
    );

    // Pop-up form for 'Contact us' button
    $('.contact-button').click(function () {
        $('html, body').animate({
            scrollTop: $('#contact').offset().top
        }, 1000);
    });

    // Sliding 'What we do' section
    $('#servicesCarousel').carousel({
        interval: 3000
    });

    // Interactive 'Our Project' section
    $('#projects .list-group-item').hover(function () {
        $(this).addClass('active').siblings().removeClass('active');
        $('#project-image').attr('src', $(this).data('img'));
    });
});