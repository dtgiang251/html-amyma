import React from "react"; 
import { useReveal } from "../hooks/useReveal";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

// Import CSS (Bắt buộc phải có để slider hiển thị đúng)
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import 'swiper/css';

const OurWork = () => { 
  const revealRef1 = useReveal();  
  const revealRef2 = useReveal();  
  const revealRef3 = useReveal();  
 
  return (
    <>
      
      {/* SECTION 2 - DÙNG revealRef2 */}
      <section ref={revealRef1} className="relative z-10 mx-auto max-w-[1440px] px-6 py-8 sm:px-8 md:py-16 lg:px-16 lg:py-[108px] xl:px-[var(--navX,108px)]"    
        style={{background: `url('../bg-section-09.svg') center center no-repeat`}} 
      >
         
        <div className="mb-10 lg:mb-12">
            <div className="relative text-center"> 
              <h2 className="apple-reveal font-dmSans text-[40px] leading-[48px] md:text-[56px] md:leading-[64px] font-bold text-primaryBlue mb-3 tracking-[-2px]">
                Work That Converts
              </h2>
            </div>
            <p className="apple-reveal delay-200 max-w-[880px] m-auto text-center font-dmSans text-sm leading-[20px] lg:text-lg lg:leading-6 text-[#7E7E7E]">
              From start-ups to established SMEs, our websites don’t just look good — they bring in leads, customers, and growth. See what’s possible when design meets purpose.
            </p>
          </div> 
      </section>
      <section ref={revealRef2} className="relative overflow-hidden bg-[#F6F6F6]"> 
        <div className="relative z-10 mx-auto max-w-[1440px] px-6 py-8 sm:px-8 md:py-16 lg:px-16 lg:py-[108px] xl:px-[var(--navX,108px)]">
          


          <div className="max-w-[1440px] mx-auto">
              <Swiper
                modules={[Navigation, Pagination]}
                slidesPerView={1}
                spaceBetween={40}
                navigation={{ nextEl: '.next-btn', prevEl: '.prev-btn' }}
                pagination={{ el: '.custom-pagination', clickable: true }}
              >
                
                {/* TRANG SLIDE 1 */}
                <SwiperSlide>
                  {/* Container chính sử dụng flex-wrap để tự động xuống dòng */}
                  <div className="flex flex-wrap gap-6 md:gap-y-12">
                    
                    {/* Bài viết 1 (Tỷ lệ 1/3) */}
                    <div className="w-full md:flex-1 md:min-w-[calc(33.333%-1.5rem)] bg-white rounded-[8px] border border-gray-100 shadow-sm group hover:shadow-xl transition-all duration-300">
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
                        <h4 className="text-lg lg:text-2xl font-bold text-[#1C1C1C]">Project Name 1</h4>
                        <p className="text-[#7E7E7E] text-base leading-[20px] mt-1">Rental Industry</p>
                        <ul className="mt-3 m-0 p-0">
                          <li className="text-white text-xs leading-4 py-1 px-2 bg-[#FF9517] rounded-[4px] inline-block mr-2">Website</li>
                          <li className="text-[#1c1c1c] text-xs leading-4 py-1 px-2 bg-[#FFD19A] rounded-[4px] inline-block mr-2">UI</li>
                          <li className="text-[#1c1c1c] text-xs leading-4 py-1 px-2 bg-[#EEEEEE] rounded-[4px] inline-block mr-2">UX</li>
                          <li className="text-white text-xs leading-4 py-1 px-2 bg-[#3c3c3c] rounded-[4px] inline-block mr-2">Hosting</li>
                        </ul>
                      </div>
                    </div>

                    {/* Bài viết 2 (Tỷ lệ 2/3) */}
                    <div className="w-full md:flex-1 md:min-w-[calc(66.666%-1.5rem)] bg-white rounded-[8px] border border-gray-100 shadow-sm group hover:shadow-xl transition-all duration-300">
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
                        <h4 className="text-lg lg:text-2xl font-bold text-[#1C1C1C]">Project Name 1</h4>
                        <p className="text-[#7E7E7E] text-xs lg:text-base lg:leading-[20px] mt-1">Rental Industry</p>
                        <ul className="mt-3 m-0 p-0">
                          <li className="text-white text-xs leading-4 py-1 px-2 bg-[#FF9517] rounded-[4px] inline-block mr-2">Website</li>
                          <li className="text-[#1c1c1c] text-xs leading-4 py-1 px-2 bg-[#FFD19A] rounded-[4px] inline-block mr-2">UI</li>
                          <li className="text-[#1c1c1c] text-xs leading-4 py-1 px-2 bg-[#EEEEEE] rounded-[4px] inline-block mr-2">UX</li>
                          <li className="text-white text-xs leading-4 py-1 px-2 bg-[#3c3c3c] rounded-[4px] inline-block mr-2">Hosting</li>
                        </ul>
                      </div>
                    </div>
                    <div className="w-full md:flex-1 md:min-w-[calc(33.333%-1.5rem)] bg-white rounded-[8px] border border-gray-100 shadow-sm group hover:shadow-xl transition-all duration-300">
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
                        <h4 className="text-lg lg:text-2xl font-bold text-[#1C1C1C]">Project Name 1</h4>
                        <p className="text-[#7E7E7E] text-xs lg:text-base lg:leading-[20px] mt-1">Rental Industry</p>
                        <ul className="mt-3 m-0 p-0">
                          <li className="text-white text-xs leading-4 py-1 px-2 bg-[#FF9517] rounded-[4px] inline-block mr-2">Website</li>
                          <li className="text-[#1c1c1c] text-xs leading-4 py-1 px-2 bg-[#FFD19A] rounded-[4px] inline-block mr-2">UI</li>
                          <li className="text-[#1c1c1c] text-xs leading-4 py-1 px-2 bg-[#EEEEEE] rounded-[4px] inline-block mr-2">UX</li>
                          <li className="text-white text-xs leading-4 py-1 px-2 bg-[#3c3c3c] rounded-[4px] inline-block mr-2">Hosting</li>
                        </ul>
                      </div>
                    </div>
                    <div className="w-full md:flex-1 md:min-w-[calc(33.333%-1.5rem)] bg-white rounded-[8px] border border-gray-100 shadow-sm group hover:shadow-xl transition-all duration-300">
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
                        <h4 className="text-lg lg:text-2xl font-bold text-[#1C1C1C]">Project Name 1</h4>
                        <p className="text-[#7E7E7E] text-xs lg:text-base lg:leading-[20px] mt-1">Rental Industry</p>
                        <ul className="mt-3 m-0 p-0">
                          <li className="text-white text-xs leading-4 py-1 px-2 bg-[#FF9517] rounded-[4px] inline-block mr-2">Website</li>
                          <li className="text-[#1c1c1c] text-xs leading-4 py-1 px-2 bg-[#FFD19A] rounded-[4px] inline-block mr-2">UI</li>
                          <li className="text-[#1c1c1c] text-xs leading-4 py-1 px-2 bg-[#EEEEEE] rounded-[4px] inline-block mr-2">UX</li>
                          <li className="text-white text-xs leading-4 py-1 px-2 bg-[#3c3c3c] rounded-[4px] inline-block mr-2">Hosting</li>
                        </ul>
                      </div>
                    </div>
                    <div className="w-full md:flex-1 md:min-w-[calc(33.333%-1.5rem)] bg-white rounded-[8px] border border-gray-100 shadow-sm group hover:shadow-xl transition-all duration-300">
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
                        <h4 className="text-lg lg:text-2xl font-bold text-[#1C1C1C]">Project Name 1</h4>
                        <p className="text-[#7E7E7E] text-xs lg:text-base lg:leading-[20px] mt-1">Rental Industry</p>
                        <ul className="mt-3 m-0 p-0">
                          <li className="text-white text-xs leading-4 py-1 px-2 bg-[#FF9517] rounded-[4px] inline-block mr-2">Website</li>
                          <li className="text-[#1c1c1c] text-xs leading-4 py-1 px-2 bg-[#FFD19A] rounded-[4px] inline-block mr-2">UI</li>
                          <li className="text-[#1c1c1c] text-xs leading-4 py-1 px-2 bg-[#EEEEEE] rounded-[4px] inline-block mr-2">UX</li>
                          <li className="text-white text-xs leading-4 py-1 px-2 bg-[#3c3c3c] rounded-[4px] inline-block mr-2">Hosting</li>
                        </ul>
                      </div>
                    </div>
                    

                  </div>
                </SwiperSlide> 
                <SwiperSlide>
                  {/* Container chính sử dụng flex-wrap để tự động xuống dòng */}
                  <div className="flex flex-wrap gap-6 md:gap-y-12">
                    
                    {/* Bài viết 1 (Tỷ lệ 1/3) */}
                    <div className="w-full md:flex-1 md:min-w-[calc(33.333%-1.5rem)] bg-white rounded-[8px] border border-gray-100 shadow-sm group hover:shadow-xl transition-all duration-300">
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
                        <h4 className="text-lg lg:text-2xl font-bold text-[#1C1C1C]">Project Name 1</h4>
                        <p className="text-[#7E7E7E] text-base leading-[20px] mt-1">Rental Industry</p>
                        <ul className="mt-3 m-0 p-0">
                          <li className="text-white text-xs leading-4 py-1 px-2 bg-[#FF9517] rounded-[4px] inline-block mr-2">Website</li>
                          <li className="text-[#1c1c1c] text-xs leading-4 py-1 px-2 bg-[#FFD19A] rounded-[4px] inline-block mr-2">UI</li>
                          <li className="text-[#1c1c1c] text-xs leading-4 py-1 px-2 bg-[#EEEEEE] rounded-[4px] inline-block mr-2">UX</li>
                          <li className="text-white text-xs leading-4 py-1 px-2 bg-[#3c3c3c] rounded-[4px] inline-block mr-2">Hosting</li>
                        </ul>
                      </div>
                    </div>

                    {/* Bài viết 2 (Tỷ lệ 2/3) */}
                    <div className="w-full md:flex-1 md:min-w-[calc(66.666%-1.5rem)] bg-white rounded-[8px] border border-gray-100 shadow-sm group hover:shadow-xl transition-all duration-300">
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
                        <h4 className="text-lg lg:text-2xl font-bold text-[#1C1C1C]">Project Name 1</h4>
                        <p className="text-[#7E7E7E] text-xs lg:text-base lg:leading-[20px] mt-1">Rental Industry</p>
                        <ul className="mt-3 m-0 p-0">
                          <li className="text-white text-xs leading-4 py-1 px-2 bg-[#FF9517] rounded-[4px] inline-block mr-2">Website</li>
                          <li className="text-[#1c1c1c] text-xs leading-4 py-1 px-2 bg-[#FFD19A] rounded-[4px] inline-block mr-2">UI</li>
                          <li className="text-[#1c1c1c] text-xs leading-4 py-1 px-2 bg-[#EEEEEE] rounded-[4px] inline-block mr-2">UX</li>
                          <li className="text-white text-xs leading-4 py-1 px-2 bg-[#3c3c3c] rounded-[4px] inline-block mr-2">Hosting</li>
                        </ul>
                      </div>
                    </div>
                    <div className="w-full md:flex-1 md:min-w-[calc(33.333%-1.5rem)] bg-white rounded-[8px] border border-gray-100 shadow-sm group hover:shadow-xl transition-all duration-300">
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
                        <h4 className="text-lg lg:text-2xl font-bold text-[#1C1C1C]">Project Name 1</h4>
                        <p className="text-[#7E7E7E] text-xs lg:text-base lg:leading-[20px] mt-1">Rental Industry</p>
                        <ul className="mt-3 m-0 p-0">
                          <li className="text-white text-xs leading-4 py-1 px-2 bg-[#FF9517] rounded-[4px] inline-block mr-2">Website</li>
                          <li className="text-[#1c1c1c] text-xs leading-4 py-1 px-2 bg-[#FFD19A] rounded-[4px] inline-block mr-2">UI</li>
                          <li className="text-[#1c1c1c] text-xs leading-4 py-1 px-2 bg-[#EEEEEE] rounded-[4px] inline-block mr-2">UX</li>
                          <li className="text-white text-xs leading-4 py-1 px-2 bg-[#3c3c3c] rounded-[4px] inline-block mr-2">Hosting</li>
                        </ul>
                      </div>
                    </div>
                    <div className="w-full md:flex-1 md:min-w-[calc(33.333%-1.5rem)] bg-white rounded-[8px] border border-gray-100 shadow-sm group hover:shadow-xl transition-all duration-300">
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
                        <h4 className="text-lg lg:text-2xl font-bold text-[#1C1C1C]">Project Name 1</h4>
                        <p className="text-[#7E7E7E] text-xs lg:text-base lg:leading-[20px] mt-1">Rental Industry</p>
                        <ul className="mt-3 m-0 p-0">
                          <li className="text-white text-xs leading-4 py-1 px-2 bg-[#FF9517] rounded-[4px] inline-block mr-2">Website</li>
                          <li className="text-[#1c1c1c] text-xs leading-4 py-1 px-2 bg-[#FFD19A] rounded-[4px] inline-block mr-2">UI</li>
                          <li className="text-[#1c1c1c] text-xs leading-4 py-1 px-2 bg-[#EEEEEE] rounded-[4px] inline-block mr-2">UX</li>
                          <li className="text-white text-xs leading-4 py-1 px-2 bg-[#3c3c3c] rounded-[4px] inline-block mr-2">Hosting</li>
                        </ul>
                      </div>
                    </div>
                    <div className="w-full md:flex-1 md:min-w-[calc(33.333%-1.5rem)] bg-white rounded-[8px] border border-gray-100 shadow-sm group hover:shadow-xl transition-all duration-300">
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
                        <h4 className="text-lg lg:text-2xl font-bold text-[#1C1C1C]">Project Name 1</h4>
                        <p className="text-[#7E7E7E] text-xs lg:text-base lg:leading-[20px] mt-1">Rental Industry</p>
                        <ul className="mt-3 m-0 p-0">
                          <li className="text-white text-xs leading-4 py-1 px-2 bg-[#FF9517] rounded-[4px] inline-block mr-2">Website</li>
                          <li className="text-[#1c1c1c] text-xs leading-4 py-1 px-2 bg-[#FFD19A] rounded-[4px] inline-block mr-2">UI</li>
                          <li className="text-[#1c1c1c] text-xs leading-4 py-1 px-2 bg-[#EEEEEE] rounded-[4px] inline-block mr-2">UX</li>
                          <li className="text-white text-xs leading-4 py-1 px-2 bg-[#3c3c3c] rounded-[4px] inline-block mr-2">Hosting</li>
                        </ul>
                      </div>
                    </div>
                    

                  </div>
                </SwiperSlide> 
              </Swiper>

              {/* Phần Navigation & Pagination giữ nguyên */}
              <div className="mt-12 flex items-center justify-between">
                <div className="custom-pagination flex gap-2"></div>
                <div className="flex gap-4">
                  <button className="prev-btn w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-[#012C5B] hover:bg-[#012C5B] hover:text-white transition-all">
                    <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M19 12H5M5 12L12 19M5 12L12 5"/></svg>
                  </button>
                  <button className="next-btn w-12 h-12 rounded-full bg-[#012C5B] text-white flex items-center justify-center shadow-lg hover:bg-[#FF8A00] transition-all">
                    <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M5 12H19M19 12L12 5M19 12L12 19"/></svg>
                  </button>
                </div>
              </div>

            <style jsx global>{`
              .custom-pagination .swiper-pagination-bullet {
                width: 32px !important; height: 4px !important; border-radius: 2px !important;
                background: #E5E7EB !important; opacity: 1 !important; transition: all 0.3s ease;
              }
              .custom-pagination .swiper-pagination-bullet-active {
                background: #012C5B !important; width: 64px !important;
              }
            `}</style>
          </div>


            
        </div>
      </section>
      <section ref={revealRef3} className="bg-[#F8F9FA] pt-14">
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

export default OurWork;