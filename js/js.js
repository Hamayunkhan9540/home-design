$('.owl-carousel').owlCarousel({
    autoHeight:true,
      sfluidSpeed:true,
        loop: true,
        // margin: 50,
        // padding:5,
        dots:true,
        nav: true,
        navText: [
          "<i class='fa fa-caret-left'></i>",
          "<i class='fa fa-caret-right'></i>"
        ],
        autoplay: true,
        autoplayHoverPause: true,
        responsive: {
          0: {
            items: 1,
          },
          600: {
            items: 1,
          },
          1000: {
            items: 1,
          }
        }
      })