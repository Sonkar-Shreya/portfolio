// import React from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import images from "../../constants/images";

// const Carousel = ({
//     dots = true,
//     centerMode = true,
//     infinite = true,
//     speed = 500,
//     slidesToShow = 1,
//     slidesToScroll = 1,
//     initialSlide = 0,
//     fade = false,
//     lazyLoad = true,
//     autoplay = true,
//     autoplaySpeed = 2000,
//     pauseOnHover = false,
//     focusOnSelect = true,
//     data = [],
//     size1024 = {
//         slidesToScroll: 1,
//         slidesToShow: 1
//     },
//     size600 = {
//         slidesToScroll: 1,
//         slidesToShow: 1
//     },
//     size480 = {
//         slidesToScroll: 1,
//         slidesToShow: 1
//     },
// }) => {
//     let settings = {
//         dots: dots,
//         className: "center",
//         centerMode: centerMode,
//         centerPadding: "60px",
//         infinite: infinite,
//         speed: speed,
//         slidesToShow: slidesToShow,
//         slidesToScroll: slidesToScroll,
//         initialSlide: initialSlide,
//         fade: fade,
//         lazyLoad: lazyLoad,
//         autoplay: autoplay,
//         autoplaySpeed: autoplaySpeed,
//         cssEase: "linear",
//         pauseOnHover: pauseOnHover,
//         focusOnSelect: focusOnSelect,
//         responsive: [
//             {
//                 breakpoint: 1024,
//                 settings: {
//                     slidesToShow: size1024.slidesToShow,
//                     slidesToScroll: size1024.slidesToScroll,
//                     infinite: true,
//                     dots: true
//                 }
//             },
//             {
//                 breakpoint: 600,
//                 settings: {
//                     slidesToShow: size600.slidesToShow,
//                     slidesToScroll: size600.slidesToScroll,
//                     initialSlide: 2
//                 }
//             },
//             {
//                 breakpoint: 480,
//                 settings: {
//                     slidesToShow: size480.slidesToShow,
//                     slidesToScroll: size480.slidesToScroll
//                 }
//             }
//         ]
//     };

//     return (

//         <Slider {...settings} className="m-0 p-0 w-screen">
//             {data.map((bannerImage, ind) => {
//                 return (
//                     <div key={ind + '_banner_image_'} className="mx-0 px-0">
//                         <img src={(bannerImage)} />
//                     </div>
//                 )
//             })}
//         </Slider>

//     )
// }

// export default Carousel