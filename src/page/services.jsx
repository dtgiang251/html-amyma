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
  const revealRef3 = useReveal();  
  const revealRef4 = useReveal();  
  const revealRef5 = useReveal();  
  const revealRef6 = useReveal();  


  return (
    <>
      {/* SECTION 1 */}
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
          <img className="absolute top-0 left-0 right-0 m-auto" alt="" src="/bg-section-05.svg"/>
          <div className="relative z-10 grid items-start gap-12 md:grid-cols-2 lg:gap-12">
            <div className="flex flex-col gap-12">
              <div className="flex flex-col">
                <h2 className="apple-reveal font-dmSans text-[40px] leading-[48px] md:text-[56px] md:leading-[64px] font-bold tracking-[-2px] text-primaryBlue">
                  Custom Websites That Convert. <span className="text-primaryOrange">Crafted From Scratch. </span> 
                </h2> 
                
                <p className="apple-reveal delay-200 lg:max-w-[44ch] font-dmSans text-sm leading-[20px] lg:text-lg lg:leading-6 text-[#7E7E7E]">
                  No templates. No shortcuts. Just handcrafted design tailored to your goals.
                </p>
                <button className="apple-reveal delay-400 mt-10 w-full sm:max-w-[260px] rounded-pill bg-primaryBlue px-7 py-[10.5px] text-base font-semibold text-white shadow-subtle transition-colors hover:bg-[#023772]">Book a free consultation</button>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-[640px]"> 
              <div className="relative aspect-[5/4] w-full">
                <img className="apple-reveal animate-hero-float" alt="" src="/h-img20.png"/>
              </div>
            </div>
          </div>
        </div>
      </section> 

      <section ref={revealRef2} className="relative w-full overflow-hidden bg-[#F6F6F6]">
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
        <div className="relative z-10 mx-auto max-w-[1440px] px-6 py-8 sm:px-8 md:py-16 lg:px-16 lg:py-[108px] xl:px-[var(--navX,108px)] text-center">
          <h2 className="apple-reveal font-dmSans text-[40px] leading-[48px] md:text-[56px] md:leading-[64px] font-bold text-[#012C5B] mb-8">
            Templates won’t sell your story
          </h2>
          
          <p className="apple-reveal delay-200 font-dmSans text-xl md:text-2xl leading-relaxed text-[#3C3C3C] max-w-[800px] mx-auto opacity-80">
            Generic website builders produce generic results. If you want to stand out, 
            drive results, and own your digital presence, you need a site that’s made for you – not for everyone.
          </p>
        </div>
      </section>

    <section ref={revealRef3} className="relative overflow-hidden bg-[#ffffff]">
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
                How We <span className="text-primaryOrange">Work</span>
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
                <h3 className="font-dmSans text-[18px] leading-[24px] lg:text-[24px] lg:leading-[28px] font-bold text-charcoal whitespace-pre-line mb-3">Concept & Moodboard</h3>
                <p className="font-dmSans text-sm leading-[20px] lg:text-lg lg:leading-6 text-[#3C3C3C]">
                    Define visual direction & goals with client
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
                <h3 className="font-dmSans text-[18px] leading-[24px] lg:text-[24px] lg:leading-[28px] font-bold text-charcoal whitespace-pre-line mb-3">Custom Design</h3>
                <p className="font-dmSans text-sm leading-[20px] lg:text-lg lg:leading-6 text-[#3C3C3C]">
                    Custom Design in Figma with UX/UI layouts tailored to user flows
                </p>
                <div className="rotate-90 md:rotate-0 flex absolute bottom-[-45px] left-1/2 -translate-x-1/2 z-20 
                        md:bottom-auto md:top-1/2 md:right-[-48px] md:left-auto md:translate-x-0 md:-translate-y-1/2">
                  <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.586 24L13.414 26.828L26.828 13.414L13.414 0L10.586 2.828L19.172 11.414H0V15.414H19.172L10.586 24Z" fill="#FFD19A"/>
                  </svg> 
              </div>
            </div>

            {/* Step 03 */}
            <div className="group relative flex flex-col items-start bg-white p-7 rounded-[32px] shadow-[0_4px_25px_rgba(0,0,0,0.03)] border border-gray-50 transition-all hover:shadow-xl">
                <div className="mb-4 flex h-[69px] w-[69px] items-center justify-center rounded-tl-none rounded-2xl bg-[#FFF8F0]">
                    <span className={`bg-gradient-to-r from-primaryTeal to-primaryOrange bg-clip-text text-transparent text-[20px] leading-[32px] lg:text-[32px] lg:leading-[40px] font-bold`}>03</span>
                </div>
                <h3 className="font-dmSans text-[18px] leading-[24px] lg:text-[24px] lg:leading-[28px] font-bold text-charcoal whitespace-pre-line mb-3">Hand-Coded Frontend</h3>
                <p className="font-dmSans text-sm leading-[20px] lg:text-lg lg:leading-6 text-[#3C3C3C]">
                    CMS → Pixel-perfect HTML/CSS before CMS integration
                </p>
                <div className="rotate-90 md:rotate-0 flex md:hidden lg:flex absolute bottom-[-45px] left-1/2 -translate-x-1/2 z-20 
                        md:bottom-auto md:top-1/2 md:right-[-48px] md:left-auto md:translate-x-0 md:-translate-y-1/2">
                  <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.586 24L13.414 26.828L26.828 13.414L13.414 0L10.586 2.828L19.172 11.414H0V15.414H19.172L10.586 24Z" fill="#FFD19A"/>
                  </svg> 
              </div>
            </div>

            {/* Step Optional: Xử lý tràn dòng */}
            <div className="group relative flex flex-col items-start bg-white p-7 rounded-[32px] shadow-[0_4px_25px_rgba(0,0,0,0.03)] border border-gray-50 transition-all hover:shadow-xl md:col-span-3 lg:col-span-1">
                <div className="mb-4 flex h-[69px] w-[69px] items-center justify-center rounded-tl-none rounded-2xl bg-[#FFF8F0]">
                    <span className={`bg-gradient-to-r from-primaryTeal to-primaryOrange bg-clip-text text-transparent text-[20px] leading-[32px] lg:text-[32px] lg:leading-[40px] font-bold`}>//</span>
                </div>
                <h3 className="font-dmSans text-[18px] leading-[24px] lg:text-[24px] lg:leading-[28px] font-bold text-charcoal whitespace-pre-line mb-3">Optional</h3>
                <p className="font-dmSans text-sm leading-[20px] lg:text-lg lg:leading-6 text-[#3C3C3C]">
                    Short behind-the-scenes video or scroll animation
                </p>
            </div>

        </div>
        </div>
      </section>    
      
      <section ref={revealRef4}  className="w-full bg-white pt-0 py-16 lg:pt-0 lg:py-24 px-6">
        <div className="mx-auto max-w-[1440px] xl:px-[108px]">
          
          {/* TESTIMONIAL BOX */}
          <div className="relative w-full bg-[#012C5B] rounded-[16px] overflow-hidden pt-14 py-10 text-center">
            {/* Background Grid Pattern (Giả lập bằng CSS hoặc SVG) */} 
            
            <img className="absolute top-0 left-0" alt="" src="../bg-section-03.svg"/> 
            

            <div className="relative z-10 flex flex-col items-center mx-auto px-6 "> 
              {/* Quote Icon */}
              <div className="relative"> 

                  <h2 className="apple-reveal font-dmSans text-[32px] leading-[32px] lg:text-[48px] lg:leading-[48px] mb-8 font-bold text-white tracking-[-2px] active">Let’s turn your website into a <span className="text-[#26B3B8]">lead machine.</span></h2>


                  <p className="apple-reveal delay-200 mt-3 font-dmSans text-lg leading-[24px] lg:text-2xl lg:leading-[28px] text-white">Your vision deserves more than a template. Let’s craft a tailor-made digital solution that truly works.</p>
                  <button className="apple-reveal delay-300 apple-reveal delay-400 mt-10 w-full sm:max-w-[260px] rounded-pill bg-[#26B3B8] px-7 py-[10.5px] text-base font-semibold text-[#1C1C1C] shadow-subtle transition-colors hover:bg-[#023772] active">Get a free consultation</button>
              </div>
              
            </div>
          </div> 

        </div>
      </section>

      <section ref={revealRef5} className="w-full bg-[#F6F6F6] pt-16 lg:pt-[108px] px-6 overflow-hidden">
        <div className="mx-auto max-w-[1440px] xl:px-[108px]">
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-8">
            
            {/* Khối Title & Subtitle */}
            <div className="max-w-[700px]">
              <h2 className="apple-reveal font-dmSans text-[40px] leading-[48px] md:text-[56px] md:leading-[64px] font-bold text-primaryBlue mb-3 tracking-[-2px]">
                Client Success Stories
              </h2>
              <p className="apple-reveal delay-200 font-dmSans text-lg leading-[24px] lg:text-2xl text-[#7E7E7E] lg:leading-[28px]">
                Every project tells a story. Explore how we turn vision into digital impact.
              </p>
            </div>

            {/* Nút bấm bên phải */}
            <div className="apple-reveal delay-300">
              <button className="bg-[#012C5B] text-white px-8 py-4 rounded-full font-bold text-base hover:bg-[#023772] transition-all whitespace-nowrap">
                Explore our work
              </button>
            </div>

          </div>
        </div>

        <div className="mt-14 relative max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-16 pb-8 md:pb-16 lg:pb-[108px] xl:px-[var(--navX,108px)]">
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
                  el: '.custom-pagination',
                  clickable: true,
                }}
                className="!overflow-visible"
              >
                {[1, 2, 3, 4].map((item) => (
                  /* SỬA TẠI ĐÂY:
                    - !w-full: Chiếm hết chiều ngang trên mobile.
                    - sm:!w-[450px]: Giữ nguyên kích thước cũ cho tablet.
                    - lg:!w-[550px]: Giữ nguyên kích thước cũ cho desktop.
                  */
                  <SwiperSlide key={item} className="!w-full sm:!w-[450px] lg:!w-[550px]">
                    <div className="flex h-full overflow-hidden rounded-[8px] border border-gray-100 bg-white shadow-sm transition-all hover:shadow-xl">
                      {/* Phần màu sắc bên trái card */}
                      <div
                        className={`relative flex w-[35%] lg:w-[30%] flex-col items-center justify-center p-6 text-white`}
                        style={{
                          background:
                            item % 2 === 0
                              ? 'linear-gradient(125.99deg, #FF8A00 0%, rgba(255, 138, 0, 0) 100%)'
                              : 'linear-gradient(125.99deg, #0452A6 0%, rgba(4, 82, 166, 0) 100%)',
                        }}
                      >
                        <img className="absolute top-0 left-0 w-full h-full object-cover" alt="" src="../bg-line-small.svg" />
                        <img className="absolute top-0 left-0 w-full h-full object-cover" alt="" src="../dot.svg" />
                        <span className="relative z-10 text-2xl lg:text-[40px] lg:leading-[48px] font-bold">+40%</span>
                        <p className="relative z-10 mt-2 text-center text-[12px] lg:text-[16px] opacity-90 leading-[16px]">
                          qualified leads
                        </p>
                      </div>

                      {/* Nội dung bên phải card */}
                      <div className="flex w-[65%] lg:w-[70%] flex-col justify-center p-4 lg:py-4 lg:px-7">
                        <h4 className="text-lg lg:text-2xl font-bold text-primaryBlue truncate">Project Name</h4>
                        <p className="text-xs lg:text-base text-gray-400">Industry Type</p>
                        <div className="mt-2 flex flex-wrap gap-2 text-[12px] lg:text-base text-gray-600">
                          <span>Website</span> <span className="text-primaryOrange">•</span> <span>UX/UI</span>
                        </div>
                        <button className="mt-4 lg:mt-6 flex items-center gap-2 font-bold text-primaryBlue hover:text-primaryOrange transition-colors text-lg">
                          See the Impact <span>→</span>
                        </button>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Navigation & Pagination: Đặt trong container để thẳng hàng với lề trái */}
              <div className="mx-auto max-w-[1440px] mt-6 flex items-center justify-between">
                <div className="custom-pagination flex gap-2"></div>
                
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


      </section>

      <section ref={revealRef6} className="bg-[#F8F9FA] pt-14">
      <div className="relative bg-[#0056B3] pb-[65px] py-14"> 
        <img className="absolute top-0 left-0 right-0 m-auto w-full h-full" alt="" src="/bg-section-03.svg"/>
         <div className="relative z-10 mx-auto max-w-[1440px] px-6 sm:px-8 lg:px-16 xl:px-[var(--navX,108px)]">
          <div className="flex flex-col items-center gap-10 md:flex-row">
            
            <div className="text-left max-w-[885px] w-full">
              <h2 className="apple-reveal font-dmSans text-[40px] leading-[48px] md:text-[56px] md:leading-[64px] font-bold text-white tracking-[-2px]">
                Ready to  <span className="text-[#A6DCDD]">Start Your Project?</span> 
              </h2>
              
              <p className="apple-reveal delay-200 mt-3 max-w-2xl font-dmSans text-lg leading-[24px] lg:text-2xl lg:leading-[28px] text-blue-50/90">
                We help you unlock government funding so your bespoke website or app can become a reality — with guidance from start to finish.
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

             <div className="relative w-full max-w-[260px] h-full mt-10 md:mt-[-180px]"> 
              <img className="apple-reveal animate-hero-float w-[340px] h-[250px]" alt="" src="/h-img12.png"/>
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