$(function () {


    //#region Initialize On Scroll Animations
    if (!Modernizr.touch && Modernizr.cssanimations) {
        $('[data-animation-delay]').each(function () {
            var animationDelay = $(this).data("animation-delay");
            $(this).css({
                "-webkit-animation-delay": animationDelay,
                "-moz-animation-delay": animationDelay,
                "-o-animation-delay": animationDelay,
                "-ms-animation-delay": animationDelay,
                "animation-delay": animationDelay
            });

        });
        $("[data-animation]").waypoint(function (direction) {
            if (direction == "down") {
                $(this).addClass("animated " + $(this).data("animation"));
            }
        }, { offset: '90%' }).waypoint(function (direction) {
            if (direction == "up") {
                $(this).removeClass("animated " + $(this).data("animation"));
            }
        }, {
            offset: $(window).height() + 1
        });
    }
    //#endregion Initialize On Scroll Animations



    //#region Navbar Link highlighter on scroll
    $("body>section[id]").waypoint(function (direction) {
        var $links = $('.site-navigation a[href="#' + this.id + '"]').parent("li");
        $links.toggleClass('active');
    }, {
        offset: 50
    }).waypoint(function (direction) {
        var $links = $('.site-navigation a[href="#' + this.id + '"]').parent("li");
        $links.toggleClass('active');
    }, {
        offset: function () {
            return -$(this).outerHeight() + 50;
        }
    });
    //#endregion Navbar Link highlighter on scroll



    //#region Scroll On Navbar-Link Click
    $(".site-navigation a[href^='#'],.next-screen").click(function (evt) {
        var scrollToElm = $($(this).attr("href"));
        if (scrollToElm.length) {
            evt.preventDefault();
            $("body,html").animate({ scrollTop: scrollToElm.offset().top }, 500);
        }
    });
    //#endregion Scroll On Navbar-Link Click



    //#region Navbar Show/Hide On Scroll
    /* var navScrollTarget = $("#services");
    var siteNav = $(".site-navigation");
    navScrollTarget.waypoint(function (direction) {
        if (direction == "down") {
            siteNav.addClass("nav-visible");
        }
    }).waypoint(function (direction) {
        if (direction == "up") {
            siteNav.removeClass("nav-visible");
        }
    }); */
    //#endregion Navbar Show/Hide On Scroll

   
    //#region Portfolio Sorting And Filtering
    /* $(".portfolio-container").mixitup({
        targetSelector: ".portfolio-item",
        filterSelector: ".portfolio-filtering a",
        onMixEnd: function () {
            $.waypoints('refresh');
        }
    });
    $(".portfolio-filtering a").on("click", function (evt) { evt.preventDefault(); });
    
    $(".portfolio-item").on("click", function(evt) { evt.preventDefault(); });
    */
    //#endregion Portfolio Sorting And Filtering


    var galleryData = [
        {
            video: "http://static.placeholder-software.co.uk/gallery/images/90.png",
            title: "Floor Plan MK1",
            description: "The very first test of basic floor plan generation"
        },
        {
            video: "https://www.youtube.com/watch?v=5qJYM0XvFi8",
            title: "Changelog 4",
            description: "Changelog 4, Interactive objects and plugin documentation"
        },
        {
            video: "https://www.youtube.com/watch?v=VcK_x2cOicM",
            title: "Changelog 3",
            description: "Changelog 3, Overhauled UI plugin system"
        },
        {
            image: "http://static.placeholder-software.co.uk/gallery/images/88.png",
            title: "Heist tutorial 2",
            description: "The very first test of the tutorial level for the heist gamemode",
            link: "http://static.placeholder-software.co.uk/gallery/images/88.png",
        },
        {
            image: "http://static.placeholder-software.co.uk/gallery/images/87.png",
            title: "Heist tutorial 1",
            description: "The very first test of the tutorial level for the heist gamemode",
            link: "http://static.placeholder-software.co.uk/gallery/images/87.png",
        },
        {
            video: "https://www.youtube.com/watch?v=5zwg_D75NdU",
            title: "Changelog 2",
            description: "Changelog 2, Unified inventory system and plugin cleanup"
        },
        {
            video: "https://www.youtube.com/watch?v=ke00kU7H4IY",
            title: "Changelog 1",
            description: "Changelog 1, introducing stable multiplayer for Heist"
        },
        {
            video: "https://www.youtube.com/watch?v=72o0LWwPkx0",
            title: "Changelog 0",
            description: "The first introductory video for Heist"
        },
        {
            image: "http://static.placeholder-software.co.uk/gallery/images/86.png",
            title: "It's Aliiiiive",
            description: "Testing out the new character movement and aniamtion system",
            link: "http://static.placeholder-software.co.uk/gallery/images/86.png",
        },
        {
            image: "http://static.placeholder-software.co.uk/gallery/images/18 - tWu6nwI.jpg",
            title: "A New Type Of City",
            description: "A much bigger and more complex city using the new generation system",
            link: "http://static.placeholder-software.co.uk/gallery/images/18 - tWu6nwI.jpg",
        },
        {
            image: "http://static.placeholder-software.co.uk/gallery/images/85 - J8JxH.png",
            title: "Prototype Skyscrapers",
            description: "A test of generating lots of buildings in the original city generator prototype",
            link: "http://static.placeholder-software.co.uk/gallery/images/85 - J8JxH.png",
        },
        {
            image: "http://static.placeholder-software.co.uk/gallery/images/83 - kq9oN.png",
            title: "Early City Block",
            description: "A city block in the original city generator prototype",
            link: "http://static.placeholder-software.co.uk/gallery/images/83 - kq9oN.png",
        },
        {
            image: "http://static.placeholder-software.co.uk/gallery/images/72 - 4IJHF.png",
            title: "It's A Long Way Down",
            description: "Looking down a very tall elevator shaft in an office block",
            link: "http://static.placeholder-software.co.uk/gallery/images/72 - 4IJHF.png",
        },
        {
            image: "http://static.placeholder-software.co.uk/gallery/images/57 - KFSmb.png",
            title: "Circular City",
            description: "Prototyping block layout in city generation",
            link: "http://static.placeholder-software.co.uk/gallery/images/57 - KFSmb.png",
        },
        {
            image: "http://static.placeholder-software.co.uk/gallery/images/36 - ctrqP.png",
            title: "The Mysterious Box",
            description: "A physically simulated box hitting the city floor is an early test of the physics engine",
            link: "http://static.placeholder-software.co.uk/gallery/images/36 - ctrqP.png",
        },
        {
            image: "http://static.placeholder-software.co.uk/gallery/images/28 - OgozJJH.png",
            title: "Building Designer",
            description: "A simple floor plan, hand designed in the building designer",
            link: "http://static.placeholder-software.co.uk/gallery/images/28 - OgozJJH.png",
        },
        {
            image: "http://static.placeholder-software.co.uk/gallery/images/22 - gZaEdtM.png",
            title: "Are You Happy To See Me?",
            description: "A truly massive 600 floor skyscraper",
            link: "http://static.placeholder-software.co.uk/gallery/images/22 - gZaEdtM.png",
        },
        {
            image: "http://static.placeholder-software.co.uk/gallery/images/01%20-%2083s78An.png",
            title: "Block Layout",
            description: "Experimenting with a new block subdivision algorithm",
            link: "http://static.placeholder-software.co.uk/gallery/images/01%20-%2083s78An.png",
        },
    ];

    Galleria.run(".galleria", { dataSource: galleryData });
    

    //#region Show/hide Google Map
    //$("a[href='#map-toggle']").click(function (evt) {
    //    evt.preventDefault();
    //    $(".map-holder").toggleClass("map-visible");
    //});
    //#endregion Show/hide Google Map



    //#region Home Screen Sliders

    //Text Rotator In Homescreen
    var flexSlider = $('.flexslider').flexslider({
        animation: "slide",
        direction: "vertical",
        controlNav: false,
        directionNav: false,
        touch: false,
        keyboard: false,
        pauseOnAction: false,
        slideshow: false,
        animationSpeed: 1000

    }).data('flexslider');


    //Icon Slider In Homescreen
    var SliderOptions = {
        autoPlay: true,
        autoPlayDelay: 3000,
        pauseOnHover: false,
        animateStartingFrameIn: true,
        transitionThreshold: true,
        fadeFrameWhenSkipped: false,
        reverseAnimationsWhenNavigatingBackwards: false,
        nextButton: ".next-slide.home-screen-slider-nav",
        prevButton: ".prev-slide.home-screen-slider-nav",
        //pauseButton:".play-pause-home-screen-slider",
        preloader: true
    }

    //Slider Text On Icon Slide 
    var sequence = $(".home-screen-slider").sequence(SliderOptions).data("sequence");
    sequence.beforeNextFrameAnimatesIn = function () {
        flexSlider.flexAnimate(sequence.nextFrameID - 1);
    };

    //Prevent Scrolling On Slider Next/Prev Navigation
    $(SliderOptions.nextButton + "," + SliderOptions.prevButton).click(function (evt) {
        evt.preventDefault();
    });

    //#endregion Home Screen Sliders
});

/* $(window).load(function () {

    //#region Initilize Google Map
    if ($("#gmap").length) {

        var myLatlng = new google.maps.LatLng(-33.82629, 151.05678);//Defines Location
        var mapOptions = {
            zoom: 15,//Defines Zoom Level
            center: myLatlng,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        }
        var map = new google.maps.Map(document.getElementById('gmap'), mapOptions);

        var marker = new google.maps.Marker({
            position: myLatlng,  //Map Marker
            map: map,
            title: 'We Are Here'  //Marker Title
        });
    }
    //#endregion Initilize Google Map
}); */