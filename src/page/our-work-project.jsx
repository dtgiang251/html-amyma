import { useId, useState } from "react";
import { useReveal } from "../hooks/useReveal";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Import CSS (Bắt buộc phải có để slider hiển thị đúng)
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import 'swiper/css';
const OurWorkProject = () => { 
  const [swiperInstance, setSwiperInstance] = useState(null);


  const revealRef1 = useReveal();  
  const revealRef2 = useReveal();  
  const revealRef3 = useReveal();  
  const revealRef4 = useReveal();  
  const revealRef5 = useReveal();  
  const revealRef6 = useReveal();  
  const revealRef7 = useReveal();  
  const gridId = useId();

  return (
    <>
      
     <section ref={revealRef1} className="relative overflow-hidden bg-white">
        <div className="pointer-events-none absolute inset-0 z-0 select-none opacity-60">
          <svg className="h-full w-full" aria-hidden>
            <defs>
              <pattern id={gridId} width="44" height="44" patternUnits="userSpaceOnUse">
                <path d="M 44 0 L 0 0 0 44" fill="none" stroke="#EFEFEF" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill={`url(#${gridId})`} />
          </svg>
        </div>

        <div className="relative z-10 mx-auto max-w-[1440px] px-6 py-8 sm:px-8 md:py-16 lg:px-16 lg:py-[108px] xl:px-[var(--navX,108px)]">
          <img className="absolute top-0 left-0 right-0 m-auto" alt="" src="/bg-section-06.svg"/>
          <div className="relative z-10 grid items-start">
            <div className="flex flex-col gap-12">
              <div className="flex flex-col">
                <h2 className="apple-reveal font-dmSans text-[40px] leading-[48px] md:text-[56px] md:leading-[64px] font-bold text-primaryBlue mb-3 tracking-[-2px]">
                  Moselweine.shop
                </h2>  
                <div className="apple-reveal delay-200 flex items-center gap-4">
                  <p className="font-dmSans text-sm leading-[20px] lg:text-lg lg:leading-6 text-[#7E7E7E]">
                    Wine Industry
                  </p>
                  <span className="text-[#012C5B]">|</span>
                  <ul className="m-0 p-0">
                    <li className="text-white text-xs leading-4 py-1 px-2 bg-[#FF9517] rounded-[4px] inline-block mr-2">Website</li>
                    <li className="text-[#1c1c1c] text-xs leading-4 py-1 px-2 bg-[#FFD19A] rounded-[4px] inline-block mr-2">UI</li>
                    <li className="text-[#1c1c1c] text-xs leading-4 py-1 px-2 bg-[#EEEEEE] rounded-[4px] inline-block mr-2">UX</li>
                    <li className="text-white text-xs leading-4 py-1 px-2 bg-[#3c3c3c] rounded-[4px] inline-block mr-2">Hosting</li>
                  </ul>
                </div>        
              </div>
            </div> 
          </div>
        </div>
      </section>  
      <section ref={revealRef2} className="relative overflow-hidden bg-white"> 
        <div className="relative z-10 mx-auto py-8 md:py-16 lg:py-20">
          <img className="absolute top-0 left-0 right-0 m-auto" alt="" src="/bg-section-05.svg"/>
          <div className="relative z-10 flex flex-col-reverse md:grid items-start gap-12 md:grid-cols-2 lg:gap-24">
            <div className="flex gap-12 bg-[#F6F6F6] py-14 flex-row-reverse w-[95%] md:w-full">
              <div className="flex flex-col px-5 md:px-[56px] lg:pl-[20px] lg:px-[108px] lg:max-w-[585px]">
                <h3 className="apple-reveal font-dmSans text-[24px] leading-[40px] lg:text-[40px] lg:leading-[48px] font-bold tracking-[-2px] text-primaryBlue mb-9">
                  The Objective
                </h3>       
                <p className="apple-reveal delay-400 lg:max-w-[44ch] font-dmSans text-sm leading-[20px] lg:text-lg lg:leading-6 text-[#3C3C3C]">
                  Moselweine.shop aims to help winemakers and customers get to know each other better and to promote the excellent wines of the Moselle region. The platform seeks to introduce Moselle, Saarland, and Ruwer wines to an international clientele.
                </p>                
              </div>
            </div>

            <div className="relative mx-auto w-full"> 
              <div className="relative w-full pr-5">
                <div className="max-w-[560px] relative">
                     <img className="apple-reveal animate-hero-float" alt="" src="../h-img14.png"/>
                     <img className="apple-reveal absolute top-[-70px] right-0" alt="" src="../h-img15.png"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section ref={revealRef3} className="relative bg-[#F6F6F6]"> 
        <div className="relative z-10 mx-auto py-8 lg:py-14">
          <div className="relative z-10 mx-auto max-w-[1440px] px-6 sm:px-8 lg:px-16 xl:px-[var(--navX,108px)] grid items-start gap-5 md:grid-cols-2 lg:gap-12">
            <div className="relative mx-auto w-full"> 
              <div className="relative w-full pr-5">
                <div className="md:max-w-[560px] md:pl-24 relative">
                     <img className="apple-reveal animate-hero-float" alt="" src="../h-img14.png"/>
                     <img className="w-[40%] apple-reveal absolute top-[-70px] left-0" alt="" src="../h-img15.png"/>
                </div>
              </div>
            </div>
            <div className="flex gap-12 bg-[#F6F6F6] py-8 md:py-14">
              <div className="flex flex-col sm:px-5 ">
                <h3 className="apple-reveal font-dmSans text-[24px] leading-[40px] lg:text-[40px] lg:leading-[48px] font-bold tracking-[-2px] text-primaryBlue mb-9">
                  The Solution
                </h3>       
                <p className="apple-reveal delay-400 lg:max-w-[44ch] font-dmSans text-sm leading-[20px] lg:text-lg lg:leading-6 text-[#3C3C3C]">
                  We designed and developed a stunning, custom-built e-commerce platform that immerses visitors in a virtual tour along the Moselle River, introducing them to wineries and their owners. Visitors can thus gain insight into each estate's family traditions, the values ​​that drive them, and the selection of authentic wines they offer.
                </p>                
              </div>
            </div>
          </div>
        </div>
      </section>

      <section ref={revealRef4} className="relative overflow-hidden bg-white py-8 md:py-16 lg:py-[108px]">
        {/* Container 1440 của bạn */}
        <div className="relative z-10 mx-auto max-w-[1440px] px-6 sm:px-8 lg:px-16 xl:px-[var(--navX,108px)]">
          
          {/* REPEATER WRAPPER: Sử dụng CSS Columns */}
          <div className="apple-reveal columns-1 md:columns-2 gap-5 lg:gap-12 space-y-5 lg:space-y-12">
            
            {/* Trong Repeater chỉ cần gọi như thế này */}
            
              <div
                className="break-inside-avoid rounded-2xl overflow-hidden"
              >
                <img 
                  src="../image 3.png"
                  alt="Description of image"
                  className="w-full h-auto block rounded-2xl hover:scale-[1.02] transition-transform duration-300"
                />
              </div>
              <div
                className="break-inside-avoid rounded-2xl overflow-hidden"
              >
                <img 
                  src="../h-img16.png"
                  alt="Description of image"
                  className="w-full h-auto block rounded-2xl hover:scale-[1.02] transition-transform duration-300"
                />
              </div>
              <div
                className="break-inside-avoid rounded-2xl overflow-hidden"
              >
                <img 
                  src="../image 6.png"
                  alt="Description of image"
                  className="w-full h-auto block rounded-2xl hover:scale-[1.02] transition-transform duration-300"
                />
              </div>
              
              
              
              <div
                className="break-inside-avoid rounded-2xl overflow-hidden"
              >
                <img 
                  src="../image 7.png"
                  alt="Description of image"
                  className="w-full h-auto block rounded-2xl hover:scale-[1.02] transition-transform duration-300"
                />
              </div>
           

          </div>
        </div>
      </section>

      <section ref={revealRef5}  className="w-full bg-white py-16 lg:py-24 px-6">
      <div className="mx-auto max-w-[1440px] xl:px-[108px]">
        
        {/* TESTIMONIAL BOX */}
        <div className="relative w-full bg-[#00595C] rounded-[16px] overflow-hidden py-4">
            <img className="absolute top-0 left-0 w-full h-full object-cover opacity-20" alt="" src="../bg-section-03.svg" />

            <Swiper
              //modules={[Pagination, Autoplay]}
              onSwiper={(swiper) => setSwiperInstance(swiper)} // 2. Gán instance ở đây
              pagination={{ clickable: true }}
              autoplay={{ delay: 5000 }}
              className="testimonial-swiper"
            >
              {[1, 2].map((item) => (
                <SwiperSlide key={item}>
                  <div className="relative z-10 flex flex-col items-center mx-auto px-6 max-w-[860px] text-center pt-10 pb-10">
                    <div className="relative">
                        <div className="absolute top-[-20px] left-[-20px]">
                          <svg width="21" height="17" viewBox="0 0 21 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M4.70373 16.2961C3.28507 16.2961 2.1464 15.8107 1.28773 14.8401C0.429068 13.8321 -0.000265598 12.4881 -0.000265598 10.8081C-0.000265598 8.79206 0.653068 6.86939 1.95973 5.04006C3.2664 3.21072 5.24507 1.53072 7.89573 5.57899e-05L9.63173 2.01606C8.28773 3.13606 7.1304 4.20006 6.15973 5.20806C5.2264 6.17872 4.7224 7.05606 4.64773 7.84006L4.87173 8.00806C5.13307 7.78406 5.54374 7.67206 6.10374 7.67206C6.9624 7.67206 7.6904 8.04539 8.28773 8.79206C8.88507 9.53872 9.18373 10.5467 9.18373 11.8161C9.18373 13.1227 8.77307 14.2054 7.95173 15.0641C7.1304 15.8854 6.04773 16.2961 4.70373 16.2961ZM15.9037 16.2961C14.4851 16.2961 13.3464 15.8107 12.4877 14.8401C11.6291 13.8321 11.1997 12.4881 11.1997 10.8081C11.1997 8.79206 11.8531 6.86939 13.1597 5.04006C14.4664 3.21072 16.4451 1.53072 19.0957 5.57899e-05L20.8317 2.01606C19.4877 3.13606 18.3304 4.20006 17.3597 5.20806C16.4264 6.17872 15.9224 7.05606 15.8477 7.84006L16.0717 8.00806C16.3331 7.78406 16.7437 7.67206 17.3037 7.67206C18.1624 7.67206 18.8904 8.04539 19.4877 8.79206C20.0851 9.53872 20.3837 10.5467 20.3837 11.8161C20.3837 13.1227 19.9731 14.2054 19.1517 15.0641C18.3304 15.8854 17.2477 16.2961 15.9037 16.2961Z" fill="#26B3B8"/>
                          </svg> 
                        </div> 
                        {/* Testimonial Text */}
                        <blockquote className="apple-reveal text-white text-lg leading-[24px] md:text-2xl md:leading-[28px] font-bold mb-10">
                          A customer testimonial that highlights features and answers potential customer doubts about your product or service. Showcase testimonials from a similar demographic to your customers.
                        </blockquote>
                        <div className="apple-reveal absolute bottom-[40px] right-[-20px]">
                          <svg width="21" height="17" viewBox="0 0 21 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M4.92847 5.57899e-05C6.34714 5.57899e-05 7.4858 0.504056 8.34447 1.51206C9.20314 2.48272 9.63247 3.80806 9.63247 5.48806C9.63247 7.50406 8.97914 9.42672 7.67247 11.2561C6.3658 13.0854 4.38714 14.7654 1.73647 16.2961L0.00046885 14.2801C1.34447 13.1601 2.48314 12.1147 3.41647 11.1441C4.38714 10.1361 4.9098 9.24006 4.98447 8.45606L4.76047 8.28806C4.49914 8.51206 4.08847 8.62406 3.52847 8.62406C2.6698 8.62406 1.9418 8.25072 1.34447 7.50406C0.747136 6.75739 0.448469 5.74939 0.448469 4.48006C0.448469 3.17339 0.859136 2.10939 1.68047 1.28806C2.5018 0.429389 3.58447 5.57899e-05 4.92847 5.57899e-05ZM16.1285 5.57899e-05C17.5471 5.57899e-05 18.6858 0.504056 19.5445 1.51206C20.4031 2.48272 20.8325 3.80806 20.8325 5.48806C20.8325 7.50406 20.1791 9.42672 18.8725 11.2561C17.5658 13.0854 15.5871 14.7654 12.9365 16.2961L11.2005 14.2801C12.5445 13.1601 13.6831 12.1147 14.6165 11.1441C15.5871 10.1361 16.1098 9.24006 16.1845 8.45606L15.9605 8.28806C15.6991 8.51206 15.2885 8.62406 14.7285 8.62406C13.8698 8.62406 13.1418 8.25072 12.5445 7.50406C11.9471 6.75739 11.6485 5.74939 11.6485 4.48006C11.6485 3.17339 12.0591 2.10939 12.8805 1.28806C13.7018 0.429389 14.7845 5.57899e-05 16.1285 5.57899e-05Z" fill="#26B3B8"/>
                          </svg> 
                        </div>
                    </div>
                    {/* Author Info */}
                    <div className="apple-reveal delay-200 flex items-center gap-4 text-left">
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-teal-400 to-orange-400 flex items-center justify-center text-white font-bold text-xl shadow-lg">
                        G
                      </div>
                      <div>
                        <h4 className="text-white font-bold text-xs leading-[16px] lg:text-base lg:leading-[20px]">Gautam Kohli</h4>
                        <p className="text-teal-200/70 text-[10px] leading-[16px] lg:text-xs lg:leading-[16px]">Job title</p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

        {/* NAVIGATION BUTTONS */}
        <div className="mt-14 flex flex-wrap justify-between items-center gap-6">
          
          {/* Previous Project */}
          <button 
            onClick={() => swiperInstance?.slidePrev()} // 3. Click để quay lại
            className="px-10 py-[9px] rounded-full border border-[#012C5B] text-[#012C5B] font-bold text-lg hover:bg-gray-50 transition-all duration-300"
          >
            Previous project
          </button>

          {/* Next Project */}
          <button 
            onClick={() => swiperInstance?.slideNext()} // 4. Click để đi tiếp
            className="px-10 py-4 rounded-full bg-[#012C5B] text-white font-bold text-lg hover:bg-[#001D3D] shadow-lg transition-all duration-300"
          >
            Next project
          </button>
          
        </div>

      </div>
    </section>


    <section ref={revealRef6} className="w-full bg-[#F8F9FA] py-8 md:py-16 lg:py-[108px] px-6">
      <div className="mx-auto max-w-[1440px] xl:px-[108px]">
        
        {/* HEADER */}
        <div className="flex flex-wrap justify-between items-end mb-12">
          <h2 className="apple-reveal text-[#1C1C1C] tracking-[-2px] text-[20px] leading-[32px] lg:text-[32px] lg:leading-[40px] font-bold">
            Related articles
          </h2>
          <button className="apple-reveal bg-[#012C5B] text-white px-8 py-3 rounded-full font-bold hover:bg-[#001D3D] transition-all">
            View all
          </button>
        </div>

        {/* ARTICLES GRID */}
        <div className="apple-reveal delay-300 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* ARTICLE 1 */}
          <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
            <div className="h-[240px] w-full relative overflow-hidden rounded-[8px] bg-orange-50 aspect-[4/3]"
              style={{background: 'linear-gradient(288.05deg, #FFD19A 19.13%, #FFF8F0 86.89%)'}}
            >
              <div className="w-full h-full"
                style={{background: "url('../h-img13.png') center center no-repeat"}}
              > 
              <button className="absolute bottom-0 right-0">
                <svg width="72" height="56" viewBox="0 0 72 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 56H0C4.41811 56 7.99974 52.4181 8 48V56Z" fill="white"/>
                <path d="M8 32C8 14.3269 22.3269 0 40 0H72V56H8V32Z" fill="white"/>
                <path d="M16 32C16 18.7452 26.7452 8 40 8C53.2548 8 64 18.7452 64 32C64 45.2548 53.2548 56 40 56C26.7452 56 16 45.2548 16 32Z" fill="#012C5B"/>
                <path d="M43.4507 36.7425L45.4504 36.7425L45.4504 27.2574H35.9652V29.2571H42.0364L35.2581 36.0354L36.6723 37.4496L43.4507 30.6713L43.4507 36.7425Z" fill="white"/>
                </svg> 
              </button>
              </div>
            </div>
            <div className="mt-5 pt-0 p-7">
              <span className="bg-[#FF9517] text-white text-xs font-normal px-3 py-1 rounded-md w-fit mb-6 inline-block">App</span>
              <h4 className="text-lg leading-[24px] lg:text-2xl lg:leading-[28px] font-bold text-[#1C1C1C] mb-4">Blog Title Goes Here</h4>
              <p className="text-[#3C3C3C] text-sm leading-[20px] lg:text-lg lg:leading-[24px] mt-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
              <div className="mt-auto pt-4 flex items-center gap-2 text-[10px] leading-[16px] lg:text-xs text-gray-400">
                <span className="font-medium text-gray-600">Author</span> <span className="text-orange-400">◆</span> <span>February 16, 2023</span>
              </div>
            </div>
          </div>
          <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
            <div className="h-[240px] w-full relative overflow-hidden rounded-[8px] bg-orange-50 aspect-[4/3]"
              style={{background: 'linear-gradient(288.05deg, #FFD19A 19.13%, #FFF8F0 86.89%)'}}
            >
              <div className="w-full h-full"
                style={{background: "url('../h-img13.png') center center no-repeat"}}
              > 
              <button className="absolute bottom-0 right-0">
                <svg width="72" height="56" viewBox="0 0 72 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 56H0C4.41811 56 7.99974 52.4181 8 48V56Z" fill="white"/>
                <path d="M8 32C8 14.3269 22.3269 0 40 0H72V56H8V32Z" fill="white"/>
                <path d="M16 32C16 18.7452 26.7452 8 40 8C53.2548 8 64 18.7452 64 32C64 45.2548 53.2548 56 40 56C26.7452 56 16 45.2548 16 32Z" fill="#012C5B"/>
                <path d="M43.4507 36.7425L45.4504 36.7425L45.4504 27.2574H35.9652V29.2571H42.0364L35.2581 36.0354L36.6723 37.4496L43.4507 30.6713L43.4507 36.7425Z" fill="white"/>
                </svg> 
              </button>
              </div>
            </div>
            <div className="mt-5 pt-0 p-7">
              <span className="bg-[#FF9517] text-white text-xs font-normal px-3 py-1 rounded-md w-fit mb-6 inline-block">App</span>
              <h4 className="text-lg leading-[24px] lg:text-2xl lg:leading-[28px] font-bold text-[#1C1C1C] mb-4">Blog Title Goes Here</h4>
              <p className="text-[#3C3C3C] text-sm leading-[20px] lg:text-lg lg:leading-[24px] mt-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
              <div className="mt-auto pt-4 flex items-center gap-2 text-[10px] leading-[16px] lg:text-xs text-gray-400">
                <span className="font-medium text-gray-600">Author</span> <span className="text-orange-400">◆</span> <span>February 16, 2023</span>
              </div>
            </div>
          </div>
          <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
            <div className="h-[240px] w-full relative overflow-hidden rounded-[8px] bg-orange-50 aspect-[4/3]"
              style={{background: 'linear-gradient(288.05deg, #FFD19A 19.13%, #FFF8F0 86.89%)'}}
            >
              <div className="w-full h-full"
                style={{background: "url('../h-img13.png') center center no-repeat"}}
              > 
              <button className="absolute bottom-0 right-0">
                <svg width="72" height="56" viewBox="0 0 72 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 56H0C4.41811 56 7.99974 52.4181 8 48V56Z" fill="white"/>
                <path d="M8 32C8 14.3269 22.3269 0 40 0H72V56H8V32Z" fill="white"/>
                <path d="M16 32C16 18.7452 26.7452 8 40 8C53.2548 8 64 18.7452 64 32C64 45.2548 53.2548 56 40 56C26.7452 56 16 45.2548 16 32Z" fill="#012C5B"/>
                <path d="M43.4507 36.7425L45.4504 36.7425L45.4504 27.2574H35.9652V29.2571H42.0364L35.2581 36.0354L36.6723 37.4496L43.4507 30.6713L43.4507 36.7425Z" fill="white"/>
                </svg> 
              </button>
              </div>
            </div>
            <div className="mt-5 pt-0 p-7">
              <span className="bg-[#FF9517] text-white text-xs font-normal px-3 py-1 rounded-md w-fit mb-6 inline-block">App</span>
              <h4 className="text-lg leading-[24px] lg:text-2xl lg:leading-[28px] font-bold text-[#1C1C1C] mb-4">Blog Title Goes Here</h4>
              <p className="text-[#3C3C3C] text-sm leading-[20px] lg:text-lg lg:leading-[24px] mt-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
              <div className="mt-auto pt-4 flex items-center gap-2 text-[10px] leading-[16px] lg:text-xs text-gray-400">
                <span className="font-medium text-gray-600">Author</span> <span className="text-orange-400">◆</span> <span>February 16, 2023</span>
              </div>
            </div>
          </div>

          

        </div>
      </div>
    </section>
    <section ref={revealRef7} className="bg-[#F8F9FA] pt-14">
      <div className="relative bg-[#0056B3] pb-[65px] py-14"> 
        <img className="absolute top-0 left-0 right-0 m-auto w-full h-full" alt="" src="/bg-section-03.svg"/>
         <div className="relative z-10 mx-auto max-w-[1440px] px-6 sm:px-8 lg:px-16 xl:px-[var(--navX,108px)]">
          <div className="flex flex-col items-center gap-10 md:flex-row">
            
            <div className="text-left max-w-[985px] w-full">
              <h2 className="mb-6 apple-reveal font-dmSans text-[32px] leading-[32px] lg:text-[48px] lg:leading-[48px] font-bold text-white tracking-[-2px]">
                Get Up to <span className="text-[#A6DCDD]">70% Off</span> Your Digital Project
              </h2>
              
              <p className="apple-reveal delay-200 mt-3 max-w-2xl font-dmSans text-lg leading-[24px] lg:text-2xl lg:leading-[28px] text-blue-50/90">
                Luxembourg offers generous support for digital projects. We'll guide you through every step to maximize your eligibility.
              </p>

              <div className="apple-reveal delay-300 mt-4 flex flex-wrap items-center gap-6 justify-start">
                {/* Nút chính màu Navy đậm */}
                <button className="w-full sm:w-auto rounded-full bg-[#001D3D] px-10 py-3 font-bold text-white transition-all hover:bg-[#002B5B] hover:shadow-xl active:scale-95">
                  Book a Funding Consultation
                </button>
                
                {/* Nút phụ Outline */}
                <button className="w-full sm:w-auto rounded-full border-2 border-white px-12 py-[10px] font-bold text-white transition-all hover:bg-white hover:text-[#0452A6] active:scale-95">
                  Learn More
                </button>
              </div>
            </div>

             {/* TĂNG max-w Ở ĐÂY (giữ nguyên container) */}
             <div className="relative w-full max-w-[350px] h-full mt-10 md:mt-[-120px]"> 
              {/* ĐỔI THÀNH w-full h-auto ĐỂ ẢNH TO THEO CONTAINER */}
              <img className="apple-reveal animate-hero-float w-full h-auto object-contain" alt="Mockup" src="/h-img12.png"/>
            </div>

          </div>
        </div>

        {/* Các dấu + trang trí ở góc phải */}
        <div className="absolute bottom-20 right-10 hidden lg:block">
          <div className="grid grid-cols-2 gap-10 opacity-40">
              <span className="text-white text-2xl font-bold">+</span>
              <span className="text-white text-2xl font-bold">+</span>
          </div>
        </div>
    </div>  
    </section>    
    
    </>
  );
}; 

export default OurWorkProject;