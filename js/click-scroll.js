// تأكد إن السكريبت بينفذ بعد تحميل الصفحة
$(document).ready(function () {
    // لازم يتعرف هنا داخل الـ ready
    var sectionArray = [1, 2, 3, 4, 5, 6];

    // Scroll event واحدة فقط
    $(document).scroll(function () {
        var docScroll = $(document).scrollTop() + 1;

        sectionArray.forEach(function (value, index) {
            var section = $('#section_' + value);
            if (section.length) {
                var offsetSection = section.offset().top - 90;

                if (docScroll >= offsetSection) {
                    $('.navbar-nav .nav-item .nav-link').removeClass('active');
                    $('.navbar-nav .nav-item .nav-link:link').addClass('inactive');
                    $('.navbar-nav .nav-item .nav-link').eq(index).addClass('active');
                    $('.navbar-nav .nav-item .nav-link').eq(index).removeClass('inactive');
                }
            }
        });
    });

    // click scroll
    sectionArray.forEach(function (value, index) {
        $('.click-scroll').eq(index).click(function (e) {
            var section = $('#section_' + value);
            if (section.length) {
                var offsetClick = section.offset().top - 90;
                e.preventDefault();
                $('html, body').animate({
                    scrollTop: offsetClick
                }, 300);
            }
        });
    });

    // initial state
    $('.navbar-nav .nav-item .nav-link:link').addClass('inactive');
    $('.navbar-nav .nav-item .nav-link').eq(0).addClass('active');
    $('.navbar-nav .nav-item .nav-link:link').eq(0).removeClass('inactive');
});
