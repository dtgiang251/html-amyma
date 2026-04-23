import React from "react";
import { useId, useState  } from "react";
import { useReveal } from "../hooks/useReveal";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

// Import CSS (Bắt buộc phải có để slider hiển thị đúng)
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination'; 

import 'swiper/css';

const Services = () => {
  // Định nghĩa Icon bên trong hoặc ngoài đều được
  const XIcon = ({ className = "h-6 w-6 text-primaryOrange" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M16.192 6.344 11.95 10.586 7.707 6.344 6.293 7.758 10.535 12l-4.242 4.242 1.414 1.414L11.95 13.414l4.242 4.242 1.414-1.414L13.364 12l4.242-4.242-1.414-1.414Z" fill="currentColor" />
    </svg>
  );

 



  const gridId = useId(); 
  // TẠO 2 REF RIÊNG BIỆT CHO 2 SECTION
  const revealRef1 = useReveal();  
  const revealRef2 = useReveal();    
  const revealRef222 = useReveal();  
  const revealRef3 = useReveal();  
  const revealRef33 = useReveal();
  const revealRef333 = useReveal(); 
  const revealRef4 = useReveal();  
  const revealRef44 = useReveal();  
  const revealRef5 = useReveal();   
  const revealRef6 = useReveal();  


  return (
    <>
      {/* SECTION 1 */}
      <section ref={revealRef1} className="relative bg-white"> 
        <div className="relative z-10 mx-auto max-w-[1440px] px-6 py-8 sm:px-8 md:py-16 lg:px-16 lg:pb-[64px] lg:py-[108px] xl:px-[var(--navX,108px)]">
          <img className="absolute top-0 left-0 right-0 m-auto" alt="" src="/bg-section-05.svg"/>
          <div className="relative z-10 grid items-start gap-12 md:grid-cols-12 lg:gap-10">
            <div className="flex flex-col gap-12 md:col-span-6">
              <div className="">
                <span className="apple-reveal text-[#26B3B8] text-lg :leading-6 md:text-2xl md:leading-7">Hosting & Wartung (Managed Hosting + Maintenance)</span>
                <h2 className="apple-reveal font-dmSans text-[40px] leading-[48px] md:text-[56px] md:leading-[64px] font-bold tracking-[-2px] text-primaryBlue">
                  Secure Hosting & Reliable Maintenance -  <span className="text-primaryOrange">Fully Managed</span> 
                </h2> 
                
                <p className="apple-reveal delay-200 lg:max-w-[44ch] font-dmSans text-sm leading-[20px] lg:text-lg lg:leading-6 text-[#7E7E7E]">
                  We keep your website or application fast, protected and up-to-date - with proactive monitoring, backups and support.
                </p>
                <button className="apple-reveal delay-400 mt-10 rounded-pill bg-primaryBlue px-7 py-[10.5px] text-base font-semibold text-white shadow-subtle transition-colors hover:bg-[#023772]">Request a Hosting & Maintenance Plan</button>
              </div>
            </div>

            <div className="relative mx-auto w-full h-full md:col-span-6"> 
                
                <img className="apple-reveal animate-hero-float" alt="" src="/h-img26.png"/>
               
            </div>
          </div> 
        </div>
    </section> 
    <section ref={revealRef44} className="relative bg-[#F6F6F6]"> 
        <div className="relative z-10 mx-auto py-16 md:py-[108px]">
          <div className="relative z-10 mx-auto max-w-[1440px] px-6 sm:px-8 lg:pr-0 lg:px-16 xl:pr-0 xl:px-[var(--navX,108px)] grid items-start gap-5 md:grid-cols-2 lg:gap-12">
            <div className="flex gap-12 bg-[#F6F6F6] pb-8 md:pb-14">
              <div className="flex flex-col">
                <h3 className="apple-reveal font-dmSans text-[24px] leading-[40px] lg:text-[40px] lg:leading-[48px] font-bold tracking-[-2px] text-primaryBlue">
                  Problem to Outcome
                </h3>             
              </div>
            </div> 
          </div>


          <div className="apple-reveal relative z-10 mx-auto max-w-[1440px] px-6 sm:px-8 lg:px-16 xl:px-[var(--navX,108px)] grid items-start gap-8 md:grid-cols-2">
               
              <div className="flex flex-col gap-6 flow-wrap"> 
                
                  <div className="bg-white rounded-2xl p-7 grid grid-cols-1 gap-6">
                      <p className="font-dmSans text-[clamp(1.125rem,2vw,1.5rem)] font-semibold leading-7 text-charcoal">
                        What typically goes wrong
                      </p>
                      <div 
                        className="flex items-center self-start gap-4 rounded-[0_16px_16px_16px] bg-primaryOrangeLight px-5 py-[18.5px]"
                      >
                        <div className="flex h-8 w-8 items-center justify-center rounded-pill border-2 border-primaryOrange bg-transparent">
                          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect x="1" y="1" width="30" height="30" rx="15" stroke="#FF9517" stroke-width="2"/>
                          <path d="M14 18.586L10.707 15.293L9.29297 16.707L14 21.414L23.707 11.707L22.293 10.293L14 18.586Z" fill="#FF9517"/>
                          </svg> 
                        </div>
                        <div className="font-dmSans text-[18px] leading-[24px] lg:text-[24px] lg:leading-7 text-black">
                          hreflang tags and multilingual sitemaps
                        </div>
                      </div>
                      <div 
                        className="flex items-center self-start gap-4 rounded-[0_16px_16px_16px] bg-primaryOrangeLight px-5 py-[18.5px]"
                      >
                        <div className="flex h-8 w-8 items-center justify-center rounded-pill border-2 border-primaryOrange bg-transparent">
                          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect x="1" y="1" width="30" height="30" rx="15" stroke="#FF9517" stroke-width="2"/>
                          <path d="M14 18.586L10.707 15.293L9.29297 16.707L14 21.414L23.707 11.707L22.293 10.293L14 18.586Z" fill="#FF9517"/>
                          </svg> 
                        </div>
                        <div className="font-dmSans text-[18px] leading-[24px] lg:text-[24px] lg:leading-7 text-black">
                          Language-specific metadata and semantic HTML
                        </div>
                      </div>
                      <div 
                        className="flex items-center self-start gap-4 rounded-[0_16px_16px_16px] bg-primaryOrangeLight px-5 py-[18.5px]"
                      >
                        <div className="flex h-8 w-8 items-center justify-center rounded-pill border-2 border-primaryOrange bg-transparent">
                          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect x="1" y="1" width="30" height="30" rx="15" stroke="#FF9517" stroke-width="2"/>
                          <path d="M14 18.586L10.707 15.293L9.29297 16.707L14 21.414L23.707 11.707L22.293 10.293L14 18.586Z" fill="#FF9517"/>
                          </svg> 
                        </div>
                        <div className="font-dmSans text-[18px] leading-[24px] lg:text-[24px] lg:leading-7 text-black">
                          Clean URL structures and localized content strategies
                        </div>
                      </div>
                  </div>
              </div>
              
              <div className="flex flex-col gap-6 flow-wrap"> 
                
                  <div className="bg-white rounded-2xl p-7 grid grid-cols-1 gap-6">
                      <p className="font-dmSans text-[clamp(1.125rem,2vw,1.5rem)] font-semibold leading-7 text-charcoal">
                        What you gain with Amyma
                      </p>
                      <div 
                        className="flex items-center self-start gap-4 rounded-[0_16px_16px_16px] bg-[#F7FBFF] px-5 py-[18.5px]"
                      >
                        <div className="flex h-8 w-8 items-center justify-center rounded-pill border-2 border-[#0452A6] bg-transparent">
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M9.99997 15.586L6.70697 12.293L5.29297 13.707L9.99997 18.414L19.707 8.70697L18.293 7.29297L9.99997 15.586Z" fill="#0452A6"/>
                          </svg> 
                        </div>
                        <div className="font-dmSans text-[18px] leading-[24px] lg:text-[24px] lg:leading-7 text-black">
                          hreflang tags and multilingual sitemaps
                        </div>
                      </div>
                      <div 
                        className="flex items-center self-start gap-4 rounded-[0_16px_16px_16px] bg-[#F7FBFF] px-5 py-[18.5px]"
                      >
                        <div className="flex h-8 w-8 items-center justify-center rounded-pill border-2 border-[#0452A6] bg-transparent">
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M9.99997 15.586L6.70697 12.293L5.29297 13.707L9.99997 18.414L19.707 8.70697L18.293 7.29297L9.99997 15.586Z" fill="#0452A6"/>
                          </svg> 
                        </div>
                        <div className="font-dmSans text-[18px] leading-[24px] lg:text-[24px] lg:leading-7 text-black">
                          Language-specific metadata and semantic HTML
                        </div>
                      </div>
                      <div 
                        className="flex items-center self-start gap-4 rounded-[0_16px_16px_16px] bg-[#F7FBFF] px-5 py-[18.5px]"
                      >
                        <div className="flex h-8 w-8 items-center justify-center rounded-pill border-2 border-[#0452A6] bg-transparent">
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M9.99997 15.586L6.70697 12.293L5.29297 13.707L9.99997 18.414L19.707 8.70697L18.293 7.29297L9.99997 15.586Z" fill="#0452A6"/>
                          </svg> 
                        </div>
                        <div className="font-dmSans text-[18px] leading-[24px] lg:text-[24px] lg:leading-7 text-black">
                          Clean URL structures and localized content strategies
                        </div>
                      </div>
                  </div>
              </div>
          </div>  


        </div>
      </section>

      <section ref={revealRef333} className="relative overflow-hidden bg-[#ffffff]">
        {/* Background Grid Pattern - Đồng bộ với các section trước */}
        <div className="pointer-events-none absolute inset-0 z-0 select-none opacity-40">
          <svg className="h-full w-full" aria-hidden>
            <defs>
              <pattern id="how-we-work-grid" width="44" height="44" patternUnits="userSpaceOnUse">
                <path d="M 44 0 L 0 0 0 44" fill="none" stroke="#EFEFEF" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#how-we-work-grid)" />
          </svg>
        </div>

          <div className="relative z-10 mx-auto max-w-[1440px] px-6 py-8 sm:px-8 md:py-16 lg:px-16 lg:py-[108px] xl:px-[var(--navX,108px)]">
            
            {/* Header Section */}
            <div className="">
              <div className="relative inline-block">
                {/* Các dấu + trang trí */}
                <span className="absolute -left-6 -top-4 text-primaryOrange text-xl font-bold">+</span>
                <span className="absolute left-6 -top-4 text-primaryOrange text-xl font-bold">+</span>
                <span className="absolute -left-6 top-4 text-primaryOrange text-xl font-bold">+</span>
                
                <h2 className="mb-11 apple-reveal font-dmSans text-[40px] leading-[48px] md:text-[56px] md:leading-[64px] font-bold text-primaryBlue mb-3 tracking-[-2px]">
                  Hosting Services
                </h2>
              </div> 
            </div>
            
            {/* Steps Grid */}
            <div className="relative">
                      
              <div className="slider001">
                <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={20} // Khoảng cách nhỏ cho mobile
                slidesPerView={1} // Mặc định hiển thị 1 card trên mobile
                centeredSlides={false}
                breakpoints={{
                  640: {
                    slidesPerView: 'auto', // Từ màn hình sm (tablet) trở lên mới dùng auto width
                    spaceBetween: 30,
                  },
                }}
                navigation={{
                  nextEl: '.next-btn',
                  prevEl: '.prev-btn',
                }}
                pagination={{
                  el: '.custom-pagination2',
                  clickable: true,
                }}
                className="!overflow-visible"
              >
                {[1, 2, 3, 4, 5, 6].map((item) => (
                  /* SỬA TẠI ĐÂY:
                    - !w-full: Chiếm hết chiều ngang trên mobile.
                    - sm:!w-[450px]: Giữ nguyên kích thước cũ cho tablet.
                    - lg:!w-[550px]: Giữ nguyên kích thước cũ cho desktop.
                  */
                  <SwiperSlide key={item} className="!w-full sm:!w-[450px] lg:!w-[282px]">
                  <div className={`p-[1px] rounded-[8px] border bg-gradient-to-l from-[#D5D4D4] to-[#A6DCDD] bg-white`}>
                <div className="flex flex-col items-start p-7 h-full bg-white rounded-[8px]">
                  
                  {/* 2. Sửa Icon - Background bo góc nhẹ và màu sắc theo thiết kế */}
                  <div className={`mb-4 flex h-[69px] w-[69px] items-center justify-center rounded-tl-none rounded-2xl bg-[#EEFEFF]`}>
                    <span className={`font-mono text-2xl font-bold text-[#FF9517]`}>
                      <svg width="32" height="26" viewBox="0 0 32 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M31.2 20.8H19.077C19.04 21.7905 18.3415 22.4 17.44 22.4H14.4C13.4655 22.4 12.749 21.5265 12.7615 20.8H0.8C0.36 20.8 0 21.16 0 21.6V22.4C0 24.16 1.44 25.6 3.2 25.6H28.8C30.56 25.6 32 24.16 32 22.4V21.6C32 21.16 31.64 20.8 31.2 20.8ZM28.8 2.4C28.8 1.08 27.72 0 26.4 0H5.6C4.28 0 3.2 1.08 3.2 2.4V19.2H28.8V2.4ZM25.6 16H6.4V3.2H25.6V16Z" fill="#26B3B8"/>
                      </svg> 
                    </span>
                  </div>

                  <h4 className="font-dmSans text-2xl font-bold text-[#1C1C1C] mb-2">
                    Web Apps
                  </h4>
                  <ol className="font-dmSans text-lg leading-[24px] text-[#3C3C3C] mb-6 list-disc pl-[20px]">
                    <li>
                      Customer portals, dashboards, internal tools
                    </li>
                    <li>
                      Role & permission systems
                    </li>
                    <li>
                      Complex forms, workflows, reporting
                    </li>
                  </ol> 
                </div>
              </div>
                  </SwiperSlide>
                ))}
              </Swiper>

                {/* Navigation & Pagination: Đặt trong container để thẳng hàng với lề trái */}
                <div className="mx-auto max-w-[1440px] w-full mt-6 flex items-center justify-between">
                  <div className="custom-pagination2"></div>
                  
                  <div className="flex gap-4">
                    <button className="prev-btn flex h-12 w-12 items-center justify-center rounded-full border border-gray-200 text-primaryBlue hover:bg-primaryBlue hover:text-white transition-all">
                      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g opacity="0.25">
                      <path d="M0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24Z" fill="#012C5B"/>
                      <path d="M24.7069 29.293L20.4139 25H29.9999V23H20.4139L24.7069 18.707L23.2929 17.293L16.5859 24L23.2929 30.707L24.7069 29.293Z" fill="white"/>
                      </g>
                      </svg> 
                    </button>
                    <button className="next-btn flex h-12 w-12 items-center justify-center rounded-full bg-primaryBlue text-white shadow-lg hover:bg-primaryOrange transition-all">
                      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24Z" fill="#012C5B"/>
                      <path d="M23.293 29.293L24.707 30.707L31.414 24L24.707 17.293L23.293 18.707L27.586 23H18V25H27.586L23.293 29.293Z" fill="white"/>
                      </svg> 
                    </button>
                  </div>
                </div>
              </div>
               <style jsx global>{`
              .swiper-pagination-bullet {
                width: 30px !important;
                height: 4px !important;
                border-radius: 2px !important;
                background: #E2E2E2 !important;
                opacity: 1 !important;
              }
              .swiper-pagination-bullet-active {
                background: #002B5B !important;
                width: 50px !important;
              }
            `}</style>    
          </div> 
        </div>
      </section>

    <section ref={revealRef222} className="relative w-full overflow-hidden bg-[#F6F6F6]">
      {/* BACKGROUND DECOR: Họa tiết lưới (Grid) và các dấu cộng (+) decor */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none" 
        style={{background: "url('../bg-section-10.svg') center center no-repeat"}}
      />
      <div 
        className="absolute inset-0 z-0 pointer-events-none " // Dùng opacity-10 của Tailwind cho chuẩn
        style={{
          backgroundImage: "url('../h-img17.png')",
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'contain' // Đảm bảo ảnh hiển thị đủ để thấy độ mờ
        }}
      />
      

      {/* NỘI DUNG CĂN GIỮA */}
      <div className="relative z-10 mx-auto max-w-[1440px] px-6 py-8 sm:px-8 md:py-16 lg:px-16 lg:py-[90px] xl:px-[var(--navX,108px)] text-center">
        <h2 className="apple-reveal font-dmSans text-[40px] leading-[48px] md:text-[56px] md:leading-[64px] font-bold text-[#012C5B] mb-6">
          Your users don’t belong in a box
        </h2>
        
        <p className="apple-reveal delay-200 font-dmSans text-xl md:text-2xl leading-relaxed text-[#3C3C3C] max-w-[800px] mx-auto opacity-80">
          Off-the-shelf layouts force your users into a box. If you want to solve complex problems, drive engagement, and own your digital ecosystem, you need a custom-engineered experience that’s built for your audience, not for the masses.
        </p>
      </div>
    </section>            


    <section ref={revealRef3} className="relative overflow-hidden bg-[#EEEEEE00]">
        {/* Background Grid Pattern - Đồng bộ với các section trước */}
        <div className="pointer-events-none absolute inset-0 z-0 select-none opacity-40">
          <svg className="h-full w-full" aria-hidden>
            <defs>
              <pattern id="how-we-work-grid" width="44" height="44" patternUnits="userSpaceOnUse">
                <path d="M 44 0 L 0 0 0 44" fill="none" stroke="#EFEFEF" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#how-we-work-grid)" />
          </svg>
        </div>

        <div className="relative z-10 mx-auto max-w-[1440px] px-6 py-8 sm:px-8 md:py-16 lg:px-16 lg:py-[108px] xl:px-[var(--navX,108px)]">
          
          {/* Header Section */}
          <div className="mb-10 lg:mb-12">
            <div className="relative inline-block">
              {/* Các dấu + trang trí */}
              <span className="absolute -left-6 -top-4 text-primaryOrange text-xl font-bold">+</span>
              <span className="absolute left-6 -top-4 text-primaryOrange text-xl font-bold">+</span>
              <span className="absolute -left-6 top-4 text-primaryOrange text-xl font-bold">+</span>
              
              <h2 className="apple-reveal font-dmSans text-[40px] leading-[48px] md:text-[56px] md:leading-[64px] font-bold text-primaryBlue mb-3 tracking-[-2px]">
                The Amyma  <span className="text-primaryOrange">Method</span>
              </h2>
            </div>
            <p className="apple-reveal delay-200 max-w-[700px] font-dmSans text-[18px] leading-[24px] lg:text-[24px] lg:leading-[28px] text-[#7E7E7E]">
              A proven process that takes your project from vision to reality — with clarity, craft, and collaboration at every step.
            </p>
          </div>

          {/* Steps Grid */}
          <div className="apple-reveal delay-300 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-16 relative">
                    
            {/* Step 01 */}
            <div className="group relative flex flex-col items-start bg-white p-7 rounded-[32px] shadow-[0_4px_25px_rgba(0,0,0,0.03)] border border-gray-50 transition-all hover:shadow-xl">
                <div className="mb-4 flex h-[69px] w-[69px] items-center justify-center rounded-tl-none rounded-2xl bg-[#FFF8F0]">
                    <span className={`bg-gradient-to-r from-primaryTeal to-primaryOrange bg-clip-text text-transparent text-[20px] leading-[32px] lg:text-[32px] lg:leading-[40px] font-bold`}>01</span>
                </div>
                <h3 className="font-dmSans text-[18px] leading-[24px] lg:text-[24px] lg:leading-[28px] font-bold text-charcoal whitespace-pre-line mb-3">Traffic</h3>
                <p className="font-dmSans text-sm leading-[20px] lg:text-lg lg:leading-6 text-[#3C3C3C]">
                    Bring the right people to your site through targeted SEO, SEA, and social ads.
                </p>
                {/* Mũi tên: Ẩn trên mobile và tablet, chỉ hiện trên desktop (lg) */}
                <div className="rotate-90 md:rotate-0 flex absolute bottom-[-45px] left-1/2 -translate-x-1/2 z-20 
                        md:bottom-auto md:top-1/2 md:right-[-48px] md:left-auto md:translate-x-0 md:-translate-y-1/2">
                  <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.586 24L13.414 26.828L26.828 13.414L13.414 0L10.586 2.828L19.172 11.414H0V15.414H19.172L10.586 24Z" fill="#FFD19A"/>
                  </svg> 
              </div>
            </div>

            {/* Step 02 */}
            <div className="group relative flex flex-col items-start bg-white p-7 rounded-[32px] shadow-[0_4px_25px_rgba(0,0,0,0.03)] border border-gray-50 transition-all hover:shadow-xl">
                <div className="mb-4 flex h-[69px] w-[69px] items-center justify-center rounded-tl-none rounded-2xl bg-[#FFF8F0]">
                    <span className={`bg-gradient-to-r from-primaryTeal to-primaryOrange bg-clip-text text-transparent text-[20px] leading-[32px] lg:text-[32px] lg:leading-[40px] font-bold`}>02</span>
                </div>
                <h3 className="font-dmSans text-[18px] leading-[24px] lg:text-[24px] lg:leading-[28px] font-bold text-charcoal whitespace-pre-line mb-3">Conversion</h3>
                <p className="font-dmSans text-sm leading-[20px] lg:text-lg lg:leading-6 text-[#3C3C3C]">
                    Turn visitors into customers with refined UX and CRO improvements.
                </p>
                <div className="rotate-90 md:rotate-0 flex absolute bottom-[-45px] left-1/2 -translate-x-1/2 z-20 
                        md:bottom-auto md:top-1/2 md:right-[-48px] md:left-auto md:translate-x-0 md:-translate-y-1/2">
                  <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.586 24L13.414 26.828L26.828 13.414L13.414 0L10.586 2.828L19.172 11.414H0V15.414H19.172L10.586 24Z" fill="#FFD19A"/>
                  </svg> 
              </div>
            </div>
            <div className="group relative flex flex-col items-start bg-white p-7 rounded-[32px] shadow-[0_4px_25px_rgba(0,0,0,0.03)] border border-gray-50 transition-all hover:shadow-xl">
                <div className="mb-4 flex h-[69px] w-[69px] items-center justify-center rounded-tl-none rounded-2xl bg-[#FFF8F0]">
                    <span className={`bg-gradient-to-r from-primaryTeal to-primaryOrange bg-clip-text text-transparent text-[20px] leading-[32px] lg:text-[32px] lg:leading-[40px] font-bold`}>03</span>
                </div>
                <h3 className="font-dmSans text-[18px] leading-[24px] lg:text-[24px] lg:leading-[28px] font-bold text-charcoal whitespace-pre-line mb-3">Conversion</h3>
                <p className="font-dmSans text-sm leading-[20px] lg:text-lg lg:leading-6 text-[#3C3C3C]">
                    Turn visitors into customers with refined UX and CRO improvements.
                </p>
                <div className="rotate-90 md:rotate-0 flex md:hidden lg:flex absolute bottom-[-45px] left-1/2 -translate-x-1/2 z-20 
                        md:bottom-auto md:top-1/2 md:right-[-48px] md:left-auto md:translate-x-0 md:-translate-y-1/2">
                  <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.586 24L13.414 26.828L26.828 13.414L13.414 0L10.586 2.828L19.172 11.414H0V15.414H19.172L10.586 24Z" fill="#FFD19A"/>
                  </svg> 
              </div>
            </div>

            {/* Step 03 */} 

            <div className="group relative flex flex-col items-start bg-white p-7 rounded-[32px] shadow-[0_4px_25px_rgba(0,0,0,0.03)] border border-gray-50 transition-all hover:shadow-xl md:col-span-3 lg:col-span-1">
                <div className="mb-4 flex h-[69px] w-[69px] items-center justify-center rounded-tl-none rounded-2xl bg-[#FFF8F0]">
                    <span className={`bg-gradient-to-r from-primaryTeal to-primaryOrange bg-clip-text text-transparent text-[20px] leading-[32px] lg:text-[32px] lg:leading-[40px] font-bold`}>04</span>
                </div>
                <h3 className="font-dmSans text-[18px] leading-[24px] lg:text-[24px] lg:leading-[28px] font-bold text-charcoal whitespace-pre-line mb-3">Retention</h3>
                <p className="font-dmSans text-sm leading-[20px] lg:text-lg lg:leading-6 text-[#3C3C3C]">
                    Keep customers coming back with ongoing optimisation and engagement.
                </p>
            </div>

        </div>
        </div>
      </section>    

 
      
    
    
        
       
       


      <section ref={revealRef33} className="relative overflow-hidden bg-[#F6F6F6]">
        {/* Background Grid Pattern - Đồng bộ với các section trước */}
        <div className="pointer-events-none absolute inset-0 z-0 select-none opacity-40">
          <svg className="h-full w-full" aria-hidden>
            <defs>
              <pattern id="how-we-work-grid" width="44" height="44" patternUnits="userSpaceOnUse">
                <path d="M 44 0 L 0 0 0 44" fill="none" stroke="#EFEFEF" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#how-we-work-grid)" />
          </svg>
        </div>

        <div className="relative z-10 mx-auto max-w-[1440px] px-6 py-8 sm:px-8 md:py-16 lg:px-16 lg:py-[108px] xl:px-[var(--navX,108px)]">
          
          {/* Header Section */}
          <div className="">
            <div className="relative inline-block">
              {/* Các dấu + trang trí */}
              <span className="absolute -left-6 -top-4 text-primaryOrange text-xl font-bold">+</span>
              <span className="absolute left-6 -top-4 text-primaryOrange text-xl font-bold">+</span>
              <span className="absolute -left-6 top-4 text-primaryOrange text-xl font-bold">+</span>
              
              <h2 className="apple-reveal font-dmSans text-[40px] leading-[48px] md:text-[56px] md:leading-[64px] font-bold text-primaryBlue mb-3 tracking-[-2px] mb-11">
                Optional add-ons
              </h2>
              
            </div> 
          </div>
          
          {/* Steps Grid */}
          <div className="apple-reveal delay-300 grid grid-cols-1 lg:grid-cols-5 gap-4 lg:gap-8 relative">
                    
            {/* Step 01 */}
            <div className="group relative flex flex-col items-start bg-white p-7 rounded-[8px] shadow-[0_4px_25px_rgba(0,0,0,0.03)] border border-gray-50 transition-all hover:shadow-xl">
                <div className="mb-4 flex h-[69px] w-[69px] items-center justify-center rounded-tl-none rounded-2xl bg-[#FFF8F0]">
                    <svg width="22" height="32" viewBox="0 0 22 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.0063 10.6687C17.421 10.6687 18.7778 10.1067 19.7782 9.10635C20.7786 8.10596 21.3406 6.74914 21.3406 5.33437C21.3406 3.91961 20.7786 2.56279 19.7782 1.5624C18.7778 0.562013 17.421 0 16.0063 0L5.3375 0C3.92357 0 2.56754 0.561684 1.56774 1.56149C0.567935 2.56129 0.00625145 3.91731 0.00625145 5.33125C0.00625145 6.74519 0.567935 8.10121 1.56774 9.10101C2.56754 10.1008 3.92357 10.6625 5.3375 10.6625C3.92274 10.6625 2.56592 11.2245 1.56553 12.2249C0.565139 13.2253 0.0031265 14.5821 0.0031265 15.9969C0.0031265 17.4116 0.565139 18.7685 1.56553 19.7688C2.56592 20.7692 3.92274 21.3312 5.3375 21.3312C4.28246 21.3306 3.25093 21.6429 2.37336 22.2285C1.49578 22.8142 0.811571 23.6469 0.407254 24.6214C0.00293705 25.5959 -0.10333 26.6684 0.101892 27.7032C0.307114 28.7381 0.814607 29.6889 1.5602 30.4354C2.30578 31.1818 3.25598 31.6905 4.29063 31.8969C5.32527 32.1033 6.3979 31.9983 7.37287 31.5951C8.34783 31.192 9.18135 30.5087 9.76801 29.6318C10.3547 28.755 10.6681 27.7238 10.6688 26.6688V10.6687H16.0063ZM16.0063 10.6687C14.9518 10.6687 13.9211 10.9814 13.0444 11.5672C12.1676 12.153 11.4843 12.9857 11.0808 13.9598C10.6773 14.934 10.5717 16.0059 10.7774 17.0401C10.9831 18.0742 11.4909 19.0242 12.2365 19.7698C12.9821 20.5154 13.932 21.0231 14.9662 21.2288C16.0003 21.4345 17.0723 21.3289 18.0464 20.9254C19.0206 20.5219 19.8532 19.8386 20.439 18.9619C21.0248 18.0852 21.3375 17.0544 21.3375 16C21.3373 14.5861 20.7756 13.2302 19.7758 12.2304C18.7761 11.2307 17.4201 10.6689 16.0063 10.6687Z" fill="url(#paint0_linear_693_82736)"/>
                    <defs>
                    <linearGradient id="paint0_linear_693_82736" x1="13.3278" y1="43.9612" x2="-4.98023" y2="39.9814" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#FF9517"/>
                    <stop offset="1" stop-color="#26B3B8"/>
                    </linearGradient>
                    </defs>
                    </svg> 
                </div>
                <h3 className="font-dmSans text-[18px] leading-[24px] lg:text-[24px] lg:leading-[28px] font-bold text-charcoal whitespace-pre-line mb-3">Figma prototype</h3>
                <p className="font-dmSans text-sm leading-[20px] lg:text-lg lg:leading-6 text-[#3C3C3C]">
                    User flows+ UI screens
                </p> 
            </div>

            {/* Step 02 */}
            <div className="group relative flex flex-col items-start bg-white p-7 rounded-[8px] shadow-[0_4px_25px_rgba(0,0,0,0.03)] border border-gray-50 transition-all hover:shadow-xl">
                <div className="mb-4 flex h-[69px] w-[69px] items-center justify-center rounded-tl-none rounded-2xl bg-[#FFF8F0]">
                    <svg width="20" height="32" viewBox="0 0 20 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17 0H3C1.34375 0 0 1.34375 0 3V29C0 30.6562 1.34375 32 3 32H17C18.6562 32 20 30.6562 20 29V3C20 1.34375 18.6562 0 17 0ZM10 30C8.89375 30 8 29.1063 8 28C8 26.8937 8.89375 26 10 26C11.1062 26 12 26.8937 12 28C12 29.1063 11.1062 30 10 30ZM17 23.25C17 23.6625 16.6625 24 16.25 24H3.75C3.3375 24 3 23.6625 3 23.25V3.75C3 3.3375 3.3375 3 3.75 3H16.25C16.6625 3 17 3.3375 17 3.75V23.25Z" fill="url(#paint0_linear_693_82743)"/>
                    <defs>
                    <linearGradient id="paint0_linear_693_82743" x1="12.4906" y1="43.9612" x2="-4.7621" y2="40.4464" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#FF9517"/>
                    <stop offset="1" stop-color="#26B3B8"/>
                    </linearGradient>
                    </defs>
                    </svg>
                </div>
                <h3 className="font-dmSans text-[18px] leading-[24px] lg:text-[24px] lg:leading-[28px] font-bold text-charcoal whitespace-pre-line mb-3">Production-ready application</h3>
                <p className="font-dmSans text-sm leading-[20px] lg:text-lg lg:leading-6 text-[#3C3C3C]">
                    Web and/or mobile
                </p> 
            </div>

            {/* Step 03 */}
            <div className="group relative flex flex-col items-start bg-white p-7 rounded-[8px] shadow-[0_4px_25px_rgba(0,0,0,0.03)] border border-gray-50 transition-all hover:shadow-xl">
                <div className="mb-4 flex h-[69px] w-[69px] items-center justify-center rounded-tl-none rounded-2xl bg-[#FFF8F0]">
                    <svg width="32" height="26" viewBox="0 0 32 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M30.525 18.665C30.655 17.96 30.655 17.24 30.525 16.535L31.815 15.79C31.965 15.705 32.03 15.53 31.98 15.365C31.645 14.285 31.07 13.305 30.32 12.495C30.205 12.37 30.02 12.34 29.87 12.425L28.58 13.17C28.035 12.705 27.41 12.345 26.735 12.105V10.615C26.735 10.445 26.615 10.295 26.45 10.26C25.335 10.01 24.2 10.02 23.14 10.26C22.975 10.295 22.855 10.445 22.855 10.615V12.105C22.18 12.345 21.555 12.705 21.01 13.17L19.72 12.425C19.575 12.34 19.385 12.37 19.27 12.495C18.52 13.305 17.945 14.285 17.61 15.365C17.56 15.53 17.63 15.705 17.775 15.79L19.065 16.535C18.935 17.24 18.935 17.96 19.065 18.665L17.775 19.41C17.625 19.495 17.56 19.67 17.61 19.835C17.945 20.915 18.52 21.89 19.27 22.705C19.385 22.83 19.57 22.86 19.72 22.775L21.01 22.03C21.555 22.495 22.18 22.855 22.855 23.095V24.585C22.855 24.755 22.975 24.905 23.14 24.94C24.255 25.19 25.39 25.18 26.45 24.94C26.615 24.905 26.735 24.755 26.735 24.585V23.095C27.41 22.855 28.035 22.495 28.58 22.03L29.87 22.775C30.015 22.86 30.205 22.83 30.32 22.705C31.07 21.895 31.645 20.915 31.98 19.835C32.03 19.67 31.96 19.495 31.815 19.41L30.525 18.665ZM24.8 20.025C23.46 20.025 22.375 18.935 22.375 17.6C22.375 16.265 23.465 15.175 24.8 15.175C26.135 15.175 27.225 16.265 27.225 17.6C27.225 18.935 26.14 20.025 24.8 20.025ZM11.2 12.8C14.735 12.8 17.6 9.935 17.6 6.4C17.6 2.865 14.735 0 11.2 0C7.665 0 4.8 2.865 4.8 6.4C4.8 9.935 7.665 12.8 11.2 12.8ZM21.26 24.125C21.145 24.065 21.03 23.995 20.92 23.93L20.525 24.16C20.225 24.33 19.885 24.425 19.545 24.425C19 24.425 18.475 24.195 18.1 23.795C17.185 22.805 16.485 21.6 16.09 20.315C15.815 19.43 16.185 18.495 16.985 18.03L17.38 17.8C17.375 17.67 17.375 17.54 17.38 17.41L16.985 17.18C16.185 16.72 15.815 15.78 16.09 14.895C16.135 14.75 16.2 14.605 16.25 14.46C16.06 14.445 15.875 14.4 15.68 14.4H14.845C13.735 14.91 12.5 15.2 11.2 15.2C9.9 15.2 8.67 14.91 7.555 14.4H6.72C3.01 14.4 0 17.41 0 21.12V23.2C0 24.525 1.075 25.6 2.4 25.6H20C20.505 25.6 20.975 25.44 21.36 25.175C21.3 24.985 21.26 24.79 21.26 24.585V24.125Z" fill="url(#paint0_linear_693_82741)"/>
                  <defs>
                  <linearGradient id="paint0_linear_693_82741" x1="19.9828" y1="35.1689" x2="-4.67196" y2="25.1245" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#FF9517"/>
                  <stop offset="1" stop-color="#26B3B8"/>
                  </linearGradient>
                  </defs>
                  </svg>
                </div>
                <h3 className="font-dmSans text-[18px] leading-[24px] lg:text-[24px] lg:leading-[28px] font-bold text-charcoal whitespace-pre-line mb-3">Admin Area</h3>
                <p className="font-dmSans text-sm leading-[20px] lg:text-lg lg:leading-6 text-[#3C3C3C]">
                    Admin area and/or content management (if required)
                </p> 
            </div> 
            <div className="group relative flex flex-col items-start bg-white p-7 rounded-[8px] shadow-[0_4px_25px_rgba(0,0,0,0.03)] border border-gray-50 transition-all hover:shadow-xl">
                <div className="mb-4 flex h-[69px] w-[69px] items-center justify-center rounded-tl-none rounded-2xl bg-[#FFF8F0]">
                    <svg width="24" height="32" viewBox="0 0 24 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24 7V29C24 30.6569 22.6569 32 21 32H3C1.34312 32 0 30.6569 0 29V7C0 5.34312 1.34312 4 3 4H8C8 1.79437 9.79437 0 12 0C14.2056 0 16 1.79437 16 4H21C22.6569 4 24 5.34312 24 7ZM12 2.5C11.1716 2.5 10.5 3.17156 10.5 4C10.5 4.82844 11.1716 5.5 12 5.5C12.8284 5.5 13.5 4.82844 13.5 4C13.5 3.17156 12.8284 2.5 12 2.5ZM18 9.625V8.375C18 8.27554 17.9605 8.18016 17.8902 8.10983C17.8198 8.03951 17.7245 8 17.625 8H6.375C6.27554 8 6.18016 8.03951 6.10984 8.10983C6.03951 8.18016 6 8.27554 6 8.375V9.625C6 9.72446 6.03951 9.81984 6.10984 9.89017C6.18016 9.96049 6.27554 10 6.375 10H17.625C17.7245 10 17.8198 9.96049 17.8902 9.89017C17.9605 9.81984 18 9.72446 18 9.625Z" fill="url(#paint0_linear_693_82748)"/>
                    <defs>
                    <linearGradient id="paint0_linear_693_82748" x1="14.9887" y1="43.9612" x2="-5.35777" y2="38.9871" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#FF9517"/>
                    <stop offset="1" stop-color="#26B3B8"/>
                    </linearGradient>
                    </defs>
                    </svg> 
                </div>
                <h3 className="font-dmSans text-[18px] leading-[24px] lg:text-[24px] lg:leading-[28px] font-bold text-charcoal whitespace-pre-line mb-3">Documentation</h3>
                <p className="font-dmSans text-sm leading-[20px] lg:text-lg lg:leading-6 text-[#3C3C3C]">
                    Environments, deployments, key modules
                </p> 
            </div> 
            <div className="group relative flex flex-col items-start bg-white p-7 rounded-[8px] shadow-[0_4px_25px_rgba(0,0,0,0.03)] border border-gray-50 transition-all hover:shadow-xl">
                <div className="mb-4 flex h-[69px] w-[69px] items-center justify-center rounded-tl-none rounded-2xl bg-[#FFF8F0]">
                    <svg width="32" height="23" viewBox="0 0 32 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.8 9.6C6.565 9.6 8 8.165 8 6.4C8 4.635 6.565 3.2 4.8 3.2C3.035 3.2 1.6 4.635 1.6 6.4C1.6 8.165 3.035 9.6 4.8 9.6ZM27.2 9.6C28.965 9.6 30.4 8.165 30.4 6.4C30.4 4.635 28.965 3.2 27.2 3.2C25.435 3.2 24 4.635 24 6.4C24 8.165 25.435 9.6 27.2 9.6ZM28.8 11.2H25.6C24.72 11.2 23.925 11.555 23.345 12.13C25.36 13.235 26.79 15.23 27.1 17.6H30.4C31.285 17.6 32 16.885 32 16V14.4C32 12.635 30.565 11.2 28.8 11.2ZM16 11.2C19.095 11.2 21.6 8.695 21.6 5.6C21.6 2.505 19.095 0 16 0C12.905 0 10.4 2.505 10.4 5.6C10.4 8.695 12.905 11.2 16 11.2ZM19.84 12.8H19.425C18.385 13.3 17.23 13.6 16 13.6C14.77 13.6 13.62 13.3 12.575 12.8H12.16C8.98 12.8 6.4 15.38 6.4 18.56V20C6.4 21.325 7.475 22.4 8.8 22.4H23.2C24.525 22.4 25.6 21.325 25.6 20V18.56C25.6 15.38 23.02 12.8 19.84 12.8ZM8.655 12.13C8.075 11.555 7.28 11.2 6.4 11.2H3.2C1.435 11.2 0 12.635 0 14.4V16C0 16.885 0.715 17.6 1.6 17.6H4.895C5.21 15.23 6.64 13.235 8.655 12.13Z" fill="url(#paint0_linear_693_82753)"/>
                    <defs>
                    <linearGradient id="paint0_linear_693_82753" x1="19.9849" y1="30.7728" x2="-3.64194" y2="19.7709" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#FF9517"/>
                    <stop offset="1" stop-color="#26B3B8"/>
                    </linearGradient>
                    </defs>
                    </svg> 
                </div>
                <h3 className="font-dmSans text-[18px] leading-[24px] lg:text-[24px] lg:leading-[28px] font-bold text-charcoal whitespace-pre-line mb-3">Handover</h3>
                <p className="font-dmSans text-sm leading-[20px] lg:text-lg lg:leading-6 text-[#3C3C3C]">
                    Handover session for your team
                </p> 
            </div> 
        </div>

        {/* Partner Description & Button */}
        <div className="mt-14">
          <h3 className="apple-reveal text-[32px] leading-[40px] font-bold text-[#012C5B]">With Amyma, you get a true partner</h3>
          <p className="apple-reveal delay-200 font-dmSans text-[18px] leading-[24px] lg:text-[32px] lg:leading-[40px] text-[#7E7E7E]">
            one that optimizes every user journey for measurable growth, ensures a scalable architecture to keep costs efficient, and drives product evolution long after launch.
          </p> 
        </div>
 
        </div>
      </section>   
 
      
      <section ref={revealRef4}  className="w-full bg-[#F6F6F6] pt-0 py-16 lg:pt-0 lg:py-24 px-6">
        <div className="mx-auto max-w-[1440px] xl:px-[108px]">
          
          {/* TESTIMONIAL BOX */}
          <div className="relative w-full bg-[#012C5B] rounded-[16px] overflow-hidden pt-14 py-10 text-center">
            {/* Background Grid Pattern (Giả lập bằng CSS hoặc SVG) */} 
            
            <img className="absolute top-0 left-0" alt="" src="../bg-section-03.svg"/> 
            

            <div className="relative z-10 flex flex-col items-center mx-auto px-6 "> 
              {/* Quote Icon */}
              <div className="relative"> 

                  <h2 className="apple-reveal font-dmSans text-[32px] leading-[32px] lg:text-[48px] lg:leading-[48px] mb-8 font-bold text-white tracking-[-2px] active">Want a hosting plan that  <span className="text-[#26B3B8]">doesn't create surprises?</span></h2>


                  <p className="apple-reveal delay-200 mt-3 font-dmSans text-lg leading-[24px] lg:text-2xl lg:leading-[28px] text-white">Tell us your current setup and we'll propose the right plan (including migration steps if needed).</p>
                  <div className="flex justify-center flex-wrap gap-6">
                    <button className="apple-reveal delay-300 mt-2.5 md:mt-10 rounded-pill bg-[#26B3B8] px-7 py-[10.5px] text-base font-semibold text-[#1C1C1C] shadow-subtle transition-colors hover:bg-[#023772] hover:text-white">Get a Growth Strategy Proposal</button>                   
                  </div>
              </div>
              
            </div>
          </div> 

        </div>
      </section>

      <section ref={revealRef2} className="bg-white py-8 md:py-16 lg:py-24 overflow-hidden">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-16 xl:px-[108px]">
          <h2 className="apple-reveal mb-10 font-dmSans text-[40px] leading-[48px] md:text-[56px] md:leading-[64px] font-bold text-primaryBlue tracking-[-2px]">
            What our clients <span className="text-primaryOrange">say about us</span>
          </h2>

          <div className="relative">
            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={20} // Giảm khoảng cách giữa các slide trên mobile cho cân đối
              slidesPerView={1} // Mặc định hiển thị 1 slide (cho mobile)
              breakpoints={{
                640: { 
                  slidesPerView: 'auto', // Từ màn hình sm trở lên mới dùng chế độ auto width
                  spaceBetween: 30 
                },
              }}
              navigation={{ nextEl: '.next-t', prevEl: '.prev-t' }}
              pagination={{ el: '.pagination-t', clickable: true }}
              className="!overflow-visible"
            >
              {[
                { color: '#00A99D', author: 'Gautam Kohli', date: 'on Feb 10, 2025' },
                { color: '#0452A6', author: 'Gautam Kohli', date: 'Company Name' },
                { color: '#FF8A00', author: 'Gautam Kohli', date: 'on Feb 10, 2025' },
              ].map((item, idx) => (
                /* SỬA TẠI ĐÂY: 
                  - !w-full: Chiếm 100% màn hình trên mobile.
                  - sm:!w-[400px]: Quay lại chiều rộng cố định từ màn hình sm (tablet) trở lên.
                */
                <SwiperSlide key={idx} className="!w-full sm:!w-[400px] lg:!w-[520px]">
                  <div className="relative flex flex-col rounded-[8px] border border-gray-100 bg-white p-7 shadow-sm">
                    
                    {/* Lưới nền chìm */}
                    <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'linear-gradient(#ccc 1px, transparent 1px), linear-gradient(90deg, #ccc 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>

                    <div className="relative z-10">
                      {/* Dấu ngoặc kép mở */}
                      <span style={{ color: item.color }} className="text-5xl font-serif leading-none">
                        <svg width="21" height="17" viewBox="0 0 21 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M4.70373 16.2961C3.28507 16.2961 2.1464 15.8107 1.28773 14.8401C0.429068 13.8321 -0.000265598 12.4881 -0.000265598 10.8081C-0.000265598 8.79206 0.653068 6.86939 1.95973 5.04006C3.2664 3.21072 5.24507 1.53072 7.89573 5.57899e-05L9.63173 2.01606C8.28773 3.13606 7.1304 4.20006 6.15973 5.20806C5.2264 6.17872 4.7224 7.05606 4.64773 7.84006L4.87173 8.00806C5.13307 7.78406 5.54374 7.67206 6.10374 7.67206C6.9624 7.67206 7.6904 8.04539 8.28773 8.79206C8.88507 9.53872 9.18373 10.5467 9.18373 11.8161C9.18373 13.1227 8.77307 14.2054 7.95173 15.0641C7.1304 15.8854 6.04773 16.2961 4.70373 16.2961ZM15.9037 16.2961C14.4851 16.2961 13.3464 15.8107 12.4877 14.8401C11.6291 13.8321 11.1997 12.4881 11.1997 10.8081C11.1997 8.79206 11.8531 6.86939 13.1597 5.04006C14.4664 3.21072 16.4451 1.53072 19.0957 5.57899e-05L20.8317 2.01606C19.4877 3.13606 18.3304 4.20006 17.3597 5.20806C16.4264 6.17872 15.9224 7.05606 15.8477 7.84006L16.0717 8.00806C16.3331 7.78406 16.7437 7.67206 17.3037 7.67206C18.1624 7.67206 18.8904 8.04539 19.4877 8.79206C20.0851 9.53872 20.3837 10.5467 20.3837 11.8161C20.3837 13.1227 19.9731 14.2054 19.1517 15.0641C18.3304 15.8854 17.2477 16.2961 15.9037 16.2961Z" fill="#26B3B8"/>
                        </svg>
                      </span> 
                      <p className="my-2 font-dmSans text-[17px] leading-relaxed text-[#3C3C3C]">
                        A customer testimonial that highlights features and answers potential customer doubts about your product or service. Showcase testimonials from a similar demographic to your customers.
                      </p>

                      {/* Dấu ngoặc kép đóng */}
                      <div className="flex justify-end pr-4 mt-[-15px]">
                        <span style={{ color: item.color }} className="text-5xl font-serif leading-none">
                          <svg width="21" height="17" viewBox="0 0 21 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.92847 5.57899e-05C6.34714 5.57899e-05 7.4858 0.504056 8.34447 1.51206C9.20314 2.48272 9.63247 3.80806 9.63247 5.48806C9.63247 7.50406 8.97914 9.42672 7.67247 11.2561C6.3658 13.0854 4.38714 14.7654 1.73647 16.2961L0.00046885 14.2801C1.34447 13.1601 2.48314 12.1147 3.41647 11.1441C4.38714 10.1361 4.9098 9.24006 4.98447 8.45606L4.76047 8.28806C4.49914 8.51206 4.08847 8.62406 3.52847 8.62406C2.6698 8.62406 1.9418 8.25072 1.34447 7.50406C0.747136 6.75739 0.448469 5.74939 0.448469 4.48006C0.448469 3.17339 0.859136 2.10939 1.68047 1.28806C2.5018 0.429389 3.58447 5.57899e-05 4.92847 5.57899e-05ZM16.1285 5.57899e-05C17.5471 5.57899e-05 18.6858 0.504056 19.5445 1.51206C20.4031 2.48272 20.8325 3.80806 20.8325 5.48806C20.8325 7.50406 20.1791 9.42672 18.8725 11.2561C17.5658 13.0854 15.5871 14.7654 12.9365 16.2961L11.2005 14.2801C12.5445 13.1601 13.6831 12.1147 14.6165 11.1441C15.5871 10.1361 16.1098 9.24006 16.1845 8.45606L15.9605 8.28806C15.6991 8.51206 15.2885 8.62406 14.7285 8.62406C13.8698 8.62406 13.1418 8.25072 12.5445 7.50406C11.9471 6.75739 11.6485 5.74939 11.6485 4.48006C11.6485 3.17339 12.0591 2.10939 12.8805 1.28806C13.7018 0.429389 14.7845 5.57899e-05 16.1285 5.57899e-05Z" fill="#26B3B8"/>
                          </svg>
                        </span>
                      </div>

                      <div className="mt-8 flex items-end justify-between border-t border-gray-50 pt-8">
                        <div className="flex items-center gap-4">
                          <div className="flex h-12 w-12 items-center justify-center rounded-lg text-white font-bold text-xl" style={{ backgroundColor: item.color }}>
                            G
                          </div>
                          <div>
                            <h4 className="font-bold text-primaryBlue">{item.author}</h4>
                            <p className="text-xs text-gray-400">{item.date}</p>
                          </div>
                        </div>
                        
                        {/* Stars & Logo Google */}
                        <div className="flex items-center gap-3">
                          <div className="flex gap-1">
                            {[...Array(5)].map((_, i) => (
                              <svg key={i} width="16" height="16" viewBox="0 0 20 20" fill="#FFB800">
                                <path d="M10 15.27L16.18 19l-1.64-7.03L19.72 7l-7.19-.61L10 0 7.47 6.39 0 7l5.18 4.97L3.82 19z" />
                              </svg>
                            ))}
                          </div>
                          <div className="flex h-8 w-8 items-center justify-center rounded-md border border-gray-100 shadow-sm bg-white">
                            <svg width="18" height="18" viewBox="0 0 24 24">
                              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
                              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.66l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Nav Buttons */}
            <div className="mt-6 flex items-center justify-between">
              <div className="pagination-t flex gap-2"></div>
              <div className="flex gap-4">
                <button className="prev-t flex h-12 w-12 items-center justify-center rounded-full border border-gray-200 text-primaryBlue hover:bg-gray-100 transition-all">
                  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g opacity="0.25">
                  <path d="M0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24Z" fill="#012C5B"/>
                  <path d="M24.7069 29.293L20.4139 25H29.9999V23H20.4139L24.7069 18.707L23.2929 17.293L16.5859 24L23.2929 30.707L24.7069 29.293Z" fill="white"/>
                  </g>
                  </svg>
                </button>
                <button className="next-t flex h-12 w-12 items-center justify-center rounded-full bg-[#012C5B] text-white shadow-lg hover:bg-primaryOrange transition-all">
                  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24Z" fill="#012C5B"/>
                  <path d="M23.293 29.293L24.707 30.707L31.414 24L24.707 17.293L23.293 18.707L27.586 23H18V25H27.586L23.293 29.293Z" fill="white"/>
                  </svg>  
                </button>
              </div>
            </div>
          </div>
        </div> 
        <style jsx global>{`
          .pagination-t .swiper-pagination-bullet {
            width: 30px !important; height: 4px !important;
            border-radius: 2px !important; background: #D1D5DB !important;
            opacity: 1 !important; transition: all 0.3s ease;
          }
          .pagination-t .swiper-pagination-bullet-active {
            background: #012C5B !important; width: 50px !important;
          }
        `}</style>

          <div className="mx-auto max-w-[1440px] px-6 lg:px-16 xl:px-[108px] relative z-20 mt-14">
            <div className="flex flex-wrap flex-col md:flex-row items-center justify-between gap-6 rounded-[24px] bg-white p-6">
              
              {/* Left: Google Logo & Rating */}
              <div className="flex items-center gap-8">
                <div className="flex items-center gap-2">
                  <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" 
                    alt="Google" 
                    className="h-7"
                  />
                  <span className="text-xl font-medium text-gray-700">Rating</span>
                </div>
                
                <div className="flex items-center gap-3 border-l border-gray-200 pl-8">
                  <span className="text-2xl font-bold text-gray-900">5.0</span>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} width="20" height="20" viewBox="0 0 20 20" fill="#FFB800">
                        <path d="M10 15.27L16.18 19l-1.64-7.03L19.72 7l-7.19-.61L10 0 7.47 6.39 0 7l5.18 4.97L3.82 19z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-sm text-gray-400">420 reviews</span>
                </div>
              </div>

              {/* Right: Buttons */}
              <div className="flex flex-wrap items-center gap-4">
                <button className="w-full sm:w-auto rounded-full border border-gray-300 px-8 py-3 font-bold text-primaryBlue hover:bg-gray-50 transition-all">
                  See all reviews
                </button>
                <button className="w-full sm:w-auto rounded-full bg-[#012C5B] px-8 py-3 font-bold text-white shadow-md hover:bg-primaryOrange transition-all">
                  Write a review
                </button>
              </div>
            </div>
          </div> 
      </section>

      <section ref={revealRef6} className="bg-[#ffffff] pt-14">
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

export default Services;