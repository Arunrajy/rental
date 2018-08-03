// media query event handler
if (matchMedia) {
    var mq = window.matchMedia("(min-width: 700px)");
    mq.addListener(WidthChange);
    WidthChange(mq);
}

// media query change
function WidthChange(mq) {
    if (mq.matches) {

        $('ul.nav li.dropdown').hover(function() {
            $(this).children('.dropdown-menu').stop(true, false, true).fadeToggle(500);
        });
    } else {
        $('ul.nav li.dropdown > a').click(function() {
            $(this).parent().siblings().find('.dropdown-menu').slideUp(300);
            $(this).next('.dropdown-menu').stop(true, false, true).slideToggle(300);
            return false;
        });
    }

}

$('#owl-demo').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    navText: [
        "<i class=' fa fa-chevron-left fa-2x' style='margin-left:-1px'></i>",
        "<i class=' fa fa-chevron-right fa-2x' style='margin-right:-1px'></i>"
    ],
    dots: false,
    autoplay: true,
    animateIn: 'fadeIn',
    animateOut: 'fadeOut',
    autoplayHoverPause: false,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
})
$('#owl-demo11,#owl-demo12,#owl-demo13,#owl-demo14').owlCarousel({
    loop: true,
    nav: true,
    navText: [
        "<i class=' fa fa-chevron-left fa-1x' style='margin-left:-1px'></i>",
        "<i class=' fa fa-chevron-right fa-1x' style='margin-right:-1px'></i>"
    ],
    dots: true,
    autoplay: true,
    animateIn: 'fadeIn',
    animateOut: 'fadeOut',
    autoplayHoverPause: false,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 3
        }
    }
})

$('#owl-demo2').owlCarousel({
    loop: true,
    nav: false,
    dots: false,
    autoplay: true,
    animateIn: 'fadeIn',
    animateOut: 'fadeOut',
    autoplayHoverPause: false,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 5
        }
    }
})
$('#owl-demo3').owlCarousel({
    loop: true,
    nav: true,
    navText: [
        "<i class=' fa fa-chevron-left fa-2x' style='margin-left:-6px'></i>",
        "<i class=' fa fa-chevron-right fa-2x' style='margin-right:-6px'></i>"
    ],
    dots: false,
    autoplay: true,
    animateIn: 'fadeIn',
    animateOut: 'fadeOut',
    autoplayHoverPause: false,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 5
        }
    }
})
$(window).scroll(function() {
    if ($(this).scrollTop() > 50) {
        $('#user-comment:hidden').stop(true, true).fadeIn();
    } else {
        $('#user-comment').stop(true, true).fadeOut();
    }
});
$('#scroll-top1').click(function() {
    $("html, body").animate({
        scrollTop: 0
    }, 2000);
    return false;
});
/*datepicker*/
$(function() {
    $('#datetimepicker1').datetimepicker();
});
/*google maps*/

function myMap() {
    var maps1 = new google.maps.LatLng(13.0388, 80.2505)
    var mapOptions1 = {
        center: maps1,
        zoom: 15,
        draggable: false,
        scrollwheel: false,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    var map1 = new google.maps.Map(document.getElementById("googleMap1"), mapOptions1);
    var marker = new google.maps.Marker({
        position: maps1
    });
    marker.setMap(map1);

    var infowindow = new google.maps.InfoWindow({
        content: "PayRentz"
    });
    infowindow.open(map1, marker);
}
