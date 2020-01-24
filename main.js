// disabledBtn();
// function moreText() {
//         let dots = document.getElementById("dots");
//         let moreText = document.getElementById("more");
//         let btnText = document.getElementById("myBtn");
//
//         if (dots.style.display === "none") {
//             dots.style.display = "inline";
//             btnText.innerHTML = "Read more";
//             moreText.style.display = "none";
//         } else {
//             dots.style.display = "none";
//             btnText.innerHTML = "Read less";
//             moreText.style.display = "inline";
//         }
//     }

$(document).ready(function () {
    $('.services_slider').slick({
        arrows: false,
        dots: false,
        infinite: true,
        speed: 1000,
        autoplaySpeed: 5000,
        autoplay: false,
        slidesToShow: 4,
        prevArrow: "<i class='fas fa-chevron-left prev'></i>",
        nextArrow: "<i class='fas fa-chevron-right next'></i>",
        responsive: [
            {
                breakpoint: 769,
                settings: {
                    arrows: true,
                    dots: true,
                    autoplay: true,
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    adaptiveHeight: true
                }
            },
            {
                breakpoint: 500,
                settings: {
                    arrows: true,
                    dots: true,
                    autoplay: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    adaptiveHeight: true
                }
            }
        ]
    });
});


$(document).ready(function () {
    $('.clients_slider').slick({
        arrows: false,
        dots: false,
        infinite: true,
        speed: 1000,
        autoplaySpeed: 5000,
        autoplay: false,
        slidesToShow: 8,
        prevArrow: "<i class='fas fa-chevron-left prev'></i>",
        nextArrow: "<i class='fas fa-chevron-right next'></i>",
        responsive: [
            {
                breakpoint: 769,
                settings: {
                    arrows: true,
                    dots: true,
                    autoplay: true,
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    adaptiveHeight: true
                }
            },
            {
                breakpoint: 500,
                settings: {
                    arrows: true,
                    dots: true,
                    autoplay: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    adaptiveHeight: true
                }
            }
        ]
    });
});

 //
 // function disabledBtn() {
 //     let sel = document.getElementById("selectItem");
 //     let selectedValue = sel.options[sel.selectedIndex].value;
 //     let btn = document.getElementsByClassName("submitBtn")[0];
 //     if (selectedValue == "null"){
 //         btn.setAttribute("disabled", "disabled");
 //     }
 //     else {
 //         btn.removeAttribute('disabled');
 //     }
 // }
 //
 //
 //
 //
