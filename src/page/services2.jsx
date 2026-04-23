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
  const revealRef22 = useReveal();  
  const revealRef3 = useReveal();  
  const revealRef33 = useReveal();
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
              <div className="">
                <span className="apple-reveal text-[#26B3B8] text-lg :leading-6 md:text-2xl md:leading-7">Digital Marketing & Growth</span>
                <h2 className="apple-reveal font-dmSans text-[40px] leading-[48px] md:text-[56px] md:leading-[64px] font-bold tracking-[-2px] text-primaryBlue">
                  More Traffic. Better Leads.  <span className="text-primaryOrange">Measurable Growth. </span> 
                </h2> 
                
                <p className="apple-reveal delay-200 lg:max-w-[44ch] font-dmSans text-sm leading-[20px] lg:text-lg lg:leading-6 text-[#7E7E7E]">
                  We connect design with performance – from SEO to Ads.
                </p>
                <button className="apple-reveal delay-400 mt-10 rounded-pill bg-primaryBlue px-7 py-[10.5px] text-base font-semibold text-white shadow-subtle transition-colors hover:bg-[#023772]">Get a Growth Strategy Proposal</button>
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

      

    <section ref={revealRef3} className="relative overflow-hidden bg-[#F6F6F6]">
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
          <div className="apple-reveal delay-300 grid grid-cols-1 md:grid-cols-3 gap-16 relative">
                    
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

            {/* Step 03 */}
            <div className="group relative flex flex-col items-start bg-white p-7 rounded-[32px] shadow-[0_4px_25px_rgba(0,0,0,0.03)] border border-gray-50 transition-all hover:shadow-xl">
                <div className="mb-4 flex h-[69px] w-[69px] items-center justify-center rounded-tl-none rounded-2xl bg-[#FFF8F0]">
                    <span className={`bg-gradient-to-r from-primaryTeal to-primaryOrange bg-clip-text text-transparent text-[20px] leading-[32px] lg:text-[32px] lg:leading-[40px] font-bold`}>03</span>
                </div>
                <h3 className="font-dmSans text-[18px] leading-[24px] lg:text-[24px] lg:leading-[28px] font-bold text-charcoal whitespace-pre-line mb-3">Retention</h3>
                <p className="font-dmSans text-sm leading-[20px] lg:text-lg lg:leading-6 text-[#3C3C3C]">
                    Keep customers coming back with ongoing optimisation and engagement.
                </p> 
            </div> 

        </div>
        </div>
      </section>    
      <section ref={revealRef2} className="relative overflow-hidden bg-[#ffffff]">  
        <img className="absolute top-0 left-0 w-full h-full" alt="" src="/bg-section-04.svg"/>
        <div className="z-10 pointer-events-none absolute inset-0 select-none opacity-30">
          <svg className="h-full w-full" aria-hidden>
            <defs>
              <pattern id="gains-grid" width="44" height="44" patternUnits="userSpaceOnUse">
                <path d="M 44 0 L 0 0 0 44" fill="none" stroke="#EAEAEA" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#gains-grid)" />
          </svg>
        </div>

        <div className="relative z-10 mx-auto max-w-[1440px] px-6 py-8 lg:px-16 xl:py-[100px] xl:px-[108px]">
          
          {/* 1. Sửa Tiêu đề (Services) - Cần đậm hơn và đúng size */}
          <div className="mb-10">
            <h2 className="apple-reveal font-dmSans text-[40px] leading-[48px] md:text-[56px] md:leading-[64px] font-bold text-primaryBlue tracking-[-0.02em]">
              Digital Marketing Services
            </h2>
          </div>

          {/* Benefits Grid */}
          <div className="apple-reveal delay-200 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ld:gap-8">
            
             
              <div className={`p-[1px] rounded-[8px] border bg-gradient-to-l from-[#D5D4D4] to-[#FF9517] bg-white`}>
                <div className="flex flex-col items-start p-7 h-full bg-white rounded-[8px]">
                  
                  {/* 2. Sửa Icon - Background bo góc nhẹ và màu sắc theo thiết kế */}
                  <div className={`mb-4 flex h-[69px] w-[69px] items-center justify-center rounded-tl-none rounded-2xl bg-[#FFF8F0]`}>
                    <span className={`font-mono text-2xl font-bold text-[#FF9517]`}>
                      <svg width="32" height="24" viewBox="0 0 32 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M31 20H4V1C4 0.4475 3.5525 0 3 0H1C0.4475 0 0 0.4475 0 1V22C0 23.1044 0.895625 24 2 24H31C31.5525 24 32 23.5525 32 23V21C32 20.4475 31.5525 20 31 20ZM29 2H21.6213C20.285 2 19.6156 3.61563 20.5606 4.56063L22.5856 6.58562L18 11.1719L13.4144 6.58625C12.6331 5.805 11.3669 5.805 10.5863 6.58625L6.29313 10.8794C5.9025 11.27 5.9025 11.9031 6.29313 12.2938L7.70687 13.7075C8.0975 14.0981 8.73063 14.0981 9.12125 13.7075L12 10.8281L16.5856 15.4137C17.3669 16.195 18.6331 16.195 19.4137 15.4137L25.4137 9.41375L27.4387 11.4388C28.3837 12.3837 29.9994 11.7144 29.9994 10.3781V3C30 2.4475 29.5525 2 29 2Z" fill="#FF9517"/>
                      </svg> 
                    </span>
                  </div>

                  <h4 className="font-dmSans text-2xl font-bold text-[#1C1C1C] mb-2">
                    SEO
                  </h4>
                  
                  <p className="font-dmSans text-lg leading-[24px] text-[#3C3C3C] mb-6">
                    Keyword research, onpage optimization, site speed, hreflang.
                  </p> 
                </div>
              </div> 
              <div className={`p-[1px] rounded-[8px] border bg-gradient-to-l from-[#D5D4D4] to-[#A6DCDD] bg-white`}>
                <div className="flex flex-col items-start p-7 h-full bg-white rounded-[8px]">
                  
                  {/* 2. Sửa Icon - Background bo góc nhẹ và màu sắc theo thiết kế */}
                  <div className={`mb-4 flex h-[69px] w-[69px] items-center justify-center rounded-tl-none rounded-2xl bg-[#EEFEFF]`}>
                    <span className={`font-mono text-2xl font-bold text-[#FF9517]`}>
                      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M31.4839 16.3742C31.4839 25.5032 25.2323 32 16 32C7.14839 32 0 24.8516 0 16C0 7.14839 7.14839 0 16 0C20.3097 0 23.9355 1.58065 26.729 4.1871L22.3742 8.37419C16.6774 2.87742 6.08387 7.00645 6.08387 16C6.08387 21.5806 10.5419 26.1032 16 26.1032C22.3355 26.1032 24.7097 21.5613 25.0839 19.2065H16V13.7032H31.2323C31.3806 14.5226 31.4839 15.3097 31.4839 16.3742Z" fill="#26B3B8"/>
                      </svg> 
                    </span>
                  </div>

                  <h4 className="font-dmSans text-2xl font-bold text-[#1C1C1C] mb-2">
                    Google Ads
                  </h4>
                  
                  <p className="font-dmSans text-lg leading-[24px] text-[#3C3C3C] mb-6">
                    Search, Display, Conversion Tracking, Remarketing
                  </p> 
                </div>
              </div> 

              <div className={`p-[1px] rounded-[8px] border bg-gradient-to-l from-[#D5D4D4] to-[#0452A6] bg-white`}>
                <div className="flex flex-col items-start p-7 h-full bg-white rounded-[8px]">
                  
                  {/* 2. Sửa Icon - Background bo góc nhẹ và màu sắc theo thiết kế */}
                  <div className={`mb-4 flex h-[69px] w-[69px] items-center justify-center rounded-tl-none rounded-2xl bg-[#F7FBFF]`}>
                    <span className={`font-mono text-2xl font-bold text-[#FF9517]`}>
                      <svg width="32" height="23" viewBox="0 0 32 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.6 11.2C12.695 11.2 15.2 8.695 15.2 5.6C15.2 2.505 12.695 0 9.6 0C6.505 0 4 2.505 4 5.6C4 8.695 6.505 11.2 9.6 11.2ZM13.44 12.8H13.025C11.985 13.3 10.83 13.6 9.6 13.6C8.37 13.6 7.22 13.3 6.175 12.8H5.76C2.58 12.8 0 15.38 0 18.56V20C0 21.325 1.075 22.4 2.4 22.4H16.8C18.125 22.4 19.2 21.325 19.2 20V18.56C19.2 15.38 16.62 12.8 13.44 12.8ZM24 11.2C26.65 11.2 28.8 9.05 28.8 6.4C28.8 3.75 26.65 1.6 24 1.6C21.35 1.6 19.2 3.75 19.2 6.4C19.2 9.05 21.35 11.2 24 11.2ZM26.4 12.8H26.21C25.515 13.04 24.78 13.2 24 13.2C23.22 13.2 22.485 13.04 21.79 12.8H21.6C20.58 12.8 19.64 13.095 18.815 13.57C20.035 14.885 20.8 16.63 20.8 18.56V20.48C20.8 20.59 20.775 20.695 20.77 20.8H29.6C30.925 20.8 32 19.725 32 18.4C32 15.305 29.495 12.8 26.4 12.8Z" fill="#0452A6"/>
                      </svg> 
                    </span>
                  </div>

                  <h4 className="font-dmSans text-2xl font-bold text-[#1C1C1C] mb-2">
                    Social Ads
                  </h4>
                  
                  <p className="font-dmSans text-lg leading-[24px] text-[#3C3C3C] mb-6">
                    Campaigns for Meta, LinkedIn, Instagram
                  </p> 
                </div>
              </div> 
              <div className={`p-[1px] rounded-[8px] border bg-gradient-to-l from-[#D5D4D4] to-[#7E7E7E] bg-white`}>
                <div className="flex flex-col items-start p-7 h-full bg-white rounded-[8px]">
                  
                  {/* 2. Sửa Icon - Background bo góc nhẹ và màu sắc theo thiết kế */}
                  <div className={`mb-4 flex h-[69px] w-[69px] items-center justify-center rounded-tl-none rounded-2xl bg-[#EEEEEE]`}>
                    <span className={`font-mono text-2xl font-bold text-[#FF9517]`}>
                      <svg width="34" height="27" viewBox="0 0 34 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M3.33333 21.6667V3.33333C3.33333 2.41667 3.66 1.63222 4.31333 0.98C4.96556 0.326666 5.75 0 6.66667 0H30C30.4722 0 30.8678 0.159445 31.1867 0.478334C31.5067 0.798334 31.6667 1.19444 31.6667 1.66667C31.6667 2.13889 31.5067 2.535 31.1867 2.855C30.8678 3.17389 30.4722 3.33333 30 3.33333H6.66667V21.6667H14.1667C14.8611 21.6667 15.4511 21.91 15.9367 22.3967C16.4233 22.8822 16.6667 23.4722 16.6667 24.1667C16.6667 24.8611 16.4233 25.4511 15.9367 25.9367C15.4511 26.4233 14.8611 26.6667 14.1667 26.6667H2.5C1.80556 26.6667 1.21556 26.4233 0.73 25.9367C0.243333 25.4511 0 24.8611 0 24.1667C0 23.4722 0.243333 22.8822 0.73 22.3967C1.21556 21.91 1.80556 21.6667 2.5 21.6667H3.33333ZM21.6667 26.6667C21.1944 26.6667 20.7989 26.5067 20.48 26.1867C20.16 25.8678 20 25.4722 20 25V8.33333C20 7.86111 20.16 7.465 20.48 7.145C20.7989 6.82611 21.1944 6.66667 21.6667 6.66667H31.6667C32.1389 6.66667 32.5344 6.82611 32.8533 7.145C33.1733 7.465 33.3333 7.86111 33.3333 8.33333V25C33.3333 25.4722 33.1733 25.8678 32.8533 26.1867C32.5344 26.5067 32.1389 26.6667 31.6667 26.6667H21.6667ZM23.3333 21.6667H30V10H23.3333V21.6667Z" fill="#3C3C3C"/>
                      </svg> 
                    </span>
                  </div>

                  <h4 className="font-dmSans text-2xl font-bold text-[#1C1C1C] mb-2">
                    Landing Pages
                  </h4>
                  
                  <p className="font-dmSans text-lg leading-[24px] text-[#3C3C3C] mb-6">
                    Custom-built microsites for campaigns
                  </p> 
                </div>
              </div> 
          </div>
        </div>
      </section>  


      <section ref={revealRef22} className="relative overflow-hidden bg-white">
        {/* Background grid */}
        <div className="pointer-events-none absolute inset-0 z-0 select-none opacity-60">
          <svg className="h-full w-full" aria-hidden>
            <defs>
              <pattern
                id={gridId}
                width="44"
                height="44"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 44 0 L 0 0 0 44"
                  fill="none"
                  stroke="#EFEFEF"
                  strokeWidth="1"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill={`url(#${gridId})`} />
          </svg>
        </div>

        <div className="relative z-10 mx-auto max-w-[1440px] px-6 py-8 sm:px-8 md:py-16 lg:px-16 lg:py-[108px] xl:px-[var(--navX,108px)]">
          <img className="absolute top-0 left-0 right-0 m-auto" alt="" src="/bg-section-02.svg"/>
          <div className="relative z-10 grid items-start gap-6 md:grid-cols-12">
            {/* Left content */}
            <div className="flex flex-col gap-12 md:col-span-7">
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-3">
                  
                  <h2 className="apple-reveal font-dmSans text-[40px] leading-[48px] md:text-[56px] md:leading-[64px] font-bold tracking-[-2px] text-primaryBlue">
                    <span className="text-primaryOrange">Multilingual</span> SEO Optimization
                  </h2> 
                </div>
                <p className="apple-reveal delay-400 lg:max-w-[44ch] font-dmSans text-[clamp(1.125rem,2vw,1.5rem)] leading-7 text-charcoalMedium">
                  Our custom-designed websites are optimized for multilingual organic search from the ground up.
                </p>
              </div>

              <div className="apple-reveal delay-500 flex flex-col gap-6">
                <div className="font-dmSans text-[clamp(1.125rem,2vw,1.5rem)] font-semibold leading-7 text-charcoal">
                  We implement all key technical SEO best practices for each language version:
                </div>
                <div className="flex flex-col gap-6 flow-wrap"> 
                   
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
                <p className="apple-reveal delay-400 lg:max-w-[44ch] font-dmSans text-[clamp(1.125rem,2vw,1.5rem)] leading-7 text-charcoalMedium">
                  SEO is not treated as an afterthought – it is integrated directly into the design and development process to ensure your visibility across all relevant language markets.
                </p>
              </div>
            </div>

            {/* Right visual */}
            <div className="relative mx-auto w-full md:col-span-5"> 
              <div className="relative rounded-2xl px-6 sm:px-10"> 
                <div className="relative aspect-[5/4] w-full">
                  <img className="apple-reveal animate-hero-float" alt="" src="/h-img02.png"/>
                </div>
              </div>
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
          <div className="mb-10 lg:mb-12">
            <div className="relative inline-block">
              {/* Các dấu + trang trí */}
              <span className="absolute -left-6 -top-4 text-primaryOrange text-xl font-bold">+</span>
              <span className="absolute left-6 -top-4 text-primaryOrange text-xl font-bold">+</span>
              <span className="absolute -left-6 top-4 text-primaryOrange text-xl font-bold">+</span>
              
              <h2 className="apple-reveal font-dmSans text-[40px] leading-[48px] md:text-[56px] md:leading-[64px] font-bold text-primaryBlue mb-3 tracking-[-2px]">
                KPIs / Performance Data
              </h2>
            </div>
            <p className="apple-reveal delay-200 max-w-[700px] font-dmSans text-[18px] leading-[24px] lg:text-[24px] lg:leading-[28px] text-[#7E7E7E]">
              We measure success by real results. From maximising ROI and lowering ad costs to driving more traffic and delivering certified expertise, our campaigns are built to perform — and keep performing.
            </p>
          </div>
          <strong className="mb-8 block font-dmSans text-[clamp(1.125rem,2vw,1.5rem)] font-semibold leading-7 text-charcoal">Our average KPI’s</strong>
          {/* Steps Grid */}
          <div className="apple-reveal delay-300 grid grid-cols-1 md:grid-cols-4 gap-4 lg:gap-8 relative">
                    
            {/* Step 01 */}
            <div className="group relative flex flex-col items-start bg-white p-7 rounded-[32px] shadow-[0_4px_25px_rgba(0,0,0,0.03)] border border-gray-50 transition-all hover:shadow-xl">
                <div className="mb-4 flex h-[69px] w-[69px] items-center justify-center rounded-tl-none rounded-2xl bg-[#FFF8F0]">
                    <span className={`bg-gradient-to-r from-primaryTeal to-primaryOrange bg-clip-text text-transparent text-[20px] leading-[32px] lg:text-[32px] lg:leading-[40px] font-bold`}>4.6x</span>
                </div>
                <h3 className="font-dmSans text-[18px] leading-[24px] lg:text-[24px] lg:leading-[28px] font-bold text-charcoal whitespace-pre-line mb-3">Avg. ROAS</h3>
                <p className="font-dmSans text-sm leading-[20px] lg:text-lg lg:leading-6 text-[#3C3C3C]">
                    For every €1 spent on advertising, our campaigns generate an average of €4.60 in revenue.
                </p> 
            </div>

            {/* Step 02 */}
            <div className="group relative flex flex-col items-start bg-white p-7 rounded-[32px] shadow-[0_4px_25px_rgba(0,0,0,0.03)] border border-gray-50 transition-all hover:shadow-xl">
                <div className="mb-4 flex h-[69px] w-[69px] items-center justify-center rounded-tl-none rounded-2xl bg-[#FFF8F0]">
                    <span className={`bg-gradient-to-r from-primaryTeal to-primaryOrange bg-clip-text text-transparent text-[20px] leading-[32px] lg:text-[32px] lg:leading-[40px] font-bold`}>€0.57</span>
                </div>
                <h3 className="font-dmSans text-[18px] leading-[24px] lg:text-[24px] lg:leading-[28px] font-bold text-charcoal whitespace-pre-line mb-3">Avg. CPC</h3>
                <p className="font-dmSans text-sm leading-[20px] lg:text-lg lg:leading-6 text-[#3C3C3C]">
                    Reach your audience effectively while keeping costs low at €0.57 per click on average.
                </p> 
            </div>

            {/* Step 03 */}
            <div className="group relative flex flex-col items-start bg-white p-7 rounded-[32px] shadow-[0_4px_25px_rgba(0,0,0,0.03)] border border-gray-50 transition-all hover:shadow-xl">
                <div className="mb-4 flex h-[69px] w-[69px] items-center justify-center rounded-tl-none rounded-2xl bg-[#FFF8F0]">
                    <span className={`bg-gradient-to-r from-primaryTeal to-primaryOrange bg-clip-text text-transparent text-[20px] leading-[32px] lg:text-[32px] lg:leading-[40px] font-bold`}>+58%</span>
                </div>
                <h3 className="font-dmSans text-[18px] leading-[24px] lg:text-[24px] lg:leading-[28px] font-bold text-charcoal whitespace-pre-line mb-3">Avg. Traffic Increase</h3>
                <p className="font-dmSans text-sm leading-[20px] lg:text-lg lg:leading-6 text-[#3C3C3C]">
                    Our strategies drive measurable growth, boosting website traffic by an average of 58%.
                </p> 
            </div> 
            <div className="group relative flex flex-col items-start bg-white p-7 rounded-[32px] shadow-[0_4px_25px_rgba(0,0,0,0.03)] border border-gray-50 transition-all hover:shadow-xl">
                <div className="mb-4 flex h-[69px] w-[69px] items-center justify-center rounded-tl-none rounded-2xl bg-[#FFF8F0]">
                    <span className={`bg-gradient-to-r from-primaryTeal to-primaryOrange bg-clip-text text-transparent text-[20px] leading-[32px] lg:text-[32px] lg:leading-[40px] font-bold`}>2013</span>
                </div>
                <h3 className="font-dmSans text-[18px] leading-[24px] lg:text-[24px] lg:leading-[28px] font-bold text-charcoal whitespace-pre-line mb-3">Google Partner</h3>
                <p className="font-dmSans text-sm leading-[20px] lg:text-lg lg:leading-6 text-[#3C3C3C]">
                    Proud Google Partner since 2013, helping clients achieve measurable digital growth.
                </p> 
            </div> 
        </div>

        {/* Partner Description & Button */}
        <div className="my-14">
          <h3 className="apple-reveal text-[32px] leading-[40px] font-bold text-[#012C5B]">With Amyma, you get a true partner</h3>
          <p className="apple-reveal delay-200 font-dmSans text-[18px] leading-[24px] lg:text-[32px] lg:leading-[40px] text-[#7E7E7E] mb-6">
            one that designs with precision and supports you long after launch.
          </p>
          <button className="apple-reveal delay-300 bg-[#002B5B] text-white px-8 py-3 rounded-full font-bold hover:bg-[#001f41] transition-all">
            Explore our work
          </button>
        </div>

        {/* Portfolio Cards */}
        <div className="apple-reveal delay-400 grid grid-cols-1 md:grid-cols-3 gap-[28px]">
          {/* Card 1 - Orange */}
          <div className="rounded-[8px]">
            <img 
              src="/h-img04.png" 
              alt="Mobile App Design" 
              className=""
            />
          </div>

          {/* Card 2 - Teal */}
          <div className="rounded-[8px]">
            <img 
              src="/h-img05.png" 
              alt="Web Development" 
              className=""
            />
          </div>

          {/* Card 3 - Dark Blue */}
          <div className="rounded-[8px]">
            <img 
              src="/h-img06.png" 
              alt="Institutional Portal" 
              className=""
            />
          </div>
        </div>


        </div>
      </section>   







      
      <section ref={revealRef4}  className="w-full bg-white py-16 lg:py-24 px-6">
        <div className="mx-auto max-w-[1440px] xl:px-[108px]">
          
          {/* TESTIMONIAL BOX */}
          <div className="relative w-full bg-[#012C5B] rounded-[16px] overflow-hidden pt-14 py-10 text-center">
            {/* Background Grid Pattern (Giả lập bằng CSS hoặc SVG) */} 
            
            <img className="absolute top-0 left-0" alt="" src="../bg-section-03.svg"/> 
            

            <div className="relative z-10 flex flex-col items-center mx-auto px-6 "> 
              {/* Quote Icon */}
              <div className="relative"> 

                  <h2 className="apple-reveal font-dmSans text-[32px] leading-[32px] lg:text-[48px] lg:leading-[48px] mb-8 font-bold text-white tracking-[-2px] active">Let’s  <span className="text-[#26B3B8]">scale your online presence.</span></h2>


                  <p className="apple-reveal delay-200 mt-3 font-dmSans text-lg leading-[24px] lg:text-2xl lg:leading-[28px] text-white">We help you grow with sustainable, data-driven strategies. These services also qualify for 70% SME grant.</p>
                  <div className="flex justify-center flex-wrap gap-6">
                    <button className="apple-reveal delay-300 mt-2.5 md:mt-10 rounded-pill bg-[#26B3B8] px-7 py-[10.5px] text-base font-semibold text-[#1C1C1C] shadow-subtle transition-colors hover:bg-[#023772] hover:text-white">Get a Growth Strategy Proposal</button>
                    <button className="apple-reveal delay-300 mt-2.5 md:mt-10 rounded-pill border border-white bg-transparent px-7 py-[10.5px] text-base font-semibold text-white transition-colors hover:bg-[#012C5B]">Get a digital funding guide</button>
                  </div>
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

      <section ref={revealRef6} className="bg-[#F6F6F6] pt-14">
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