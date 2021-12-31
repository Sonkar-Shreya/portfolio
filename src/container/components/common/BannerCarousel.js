// import React from "react";
// import images from "../../constants/images";

// const BannerCarousel = () => {

//     const styleSheet = `
//         .carousel-open:checked + .carousel-item {
//             position: static;
//             opacity: 100;
//         }
//         .carousel-item {
//             -webkit-transition: opacity 0.6s ease-out;
//             transition: opacity 0.6s ease-out;
//         }
//         #carousel-1:checked ~ .control-1,
//         #carousel-2:checked ~ .control-2,
//         #carousel-3:checked ~ .control-3 {
//             display: block;
//         }
//         .carousel-indicators {
//             list-style: none;
//             margin: 0;
//             padding: 0;
//             position: absolute;
//             bottom: 2%;
//             left: 0;
//             right: 0;
//             text-align: center;
//             z-index: 10;
//         }
//         #carousel-1:checked ~ .control-1 ~ .carousel-indicators li:nth-child(1) .carousel-bullet,
//         #carousel-2:checked ~ .control-2 ~ .carousel-indicators li:nth-child(2) .carousel-bullet,
//         #carousel-3:checked ~ .control-3 ~ .carousel-indicators li:nth-child(3) .carousel-bullet {
//             color: #2b6cb0;  /*Set to match the Tailwind colour you want the active one to be */
//         }
//     `

//     return (
//         <>
//             <style> {styleSheet} </style>
//             <div className="carousel relative shadow-2xl bg-white">
//                 <div className="carousel-inner relative overflow-hidden w-full">
//                     {/*Slide 1*/}
//                     <input className="carousel-open" type="radio" id="carousel-1" name="carousel" aria-hidden="true" hidden defaultChecked="checked" />
//                     <div className="carousel-item absolute opacity-0 h-80">
//                         <div className="block h-full w-full text-white text-5xl text-center">
//                             <img src={images.bulb} className="object-cover h-full w-screen" />
//                         </div>
//                     </div>
//                     <label htmlFor="carousel-3" className="prev control-1 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-pink-500 leading-tight text-center z-10 inset-y-0 left-0 my-auto">‹</label>
//                     <label htmlFor="carousel-2" className="next control-1 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-pink-500 leading-tight text-center z-10 inset-y-0 right-0 my-auto">›</label>

//                     {/*Slide 2*/}
//                     <input className="carousel-open" type="radio" id="carousel-2" name="carousel" aria-hidden="true" hidden />
//                     <div className="carousel-item absolute opacity-0 h-80">
//                         <div className="block h-full w-full text-white text-5xl text-center">
//                             <img src={images.bulb} className="object-cover h-full w-screen" />
//                         </div>
//                     </div>
//                     <label htmlFor="carousel-1" className="prev control-2 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-pink-500 leading-tight text-center z-10 inset-y-0 left-0 my-auto">‹</label>
//                     <label htmlFor="carousel-3" className="next control-2 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-pink-500 leading-tight text-center z-10 inset-y-0 right-0 my-auto">›</label>

//                     {/*Slide 3*/}
//                     <input className="carousel-open" type="radio" id="carousel-3" name="carousel" aria-hidden="true" hidden />
//                     <div className="carousel-item absolute opacity-0 h-80">
//                         <div className="block h-full w-full text-white text-5xl text-center">
//                             <img src={images.bulb} className="object-cover h-full w-screen" />
//                         </div>
//                     </div>
//                     <label htmlFor="carousel-2" className="prev control-3 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-pink-500 leading-tight text-center z-10 inset-y-0 left-0 my-auto">‹</label>
//                     <label htmlFor="carousel-1" className="next control-3 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-pink-500 leading-tight text-center z-10 inset-y-0 right-0 my-auto">›</label>
//                     {/* Add additional indicators for each slide*/}
//                     <ol className="carousel-indicators">
//                         <li className="inline-block mr-3">
//                             <label htmlFor="carousel-1" className="carousel-bullet cursor-pointer block text-4xl text-white hover:text-pink-500">•</label>
//                         </li>
//                         <li className="inline-block mr-3">
//                             <label htmlFor="carousel-2" className="carousel-bullet cursor-pointer block text-4xl text-white hover:text-pink-500">•</label>
//                         </li>
//                         <li className="inline-block mr-3">
//                             <label htmlFor="carousel-3" className="carousel-bullet cursor-pointer block text-4xl text-white hover:text-pink-500">•</label>
//                         </li>
//                     </ol>
//                 </div>
//             </div>
//         </>
//     )
// }

// export default BannerCarousel