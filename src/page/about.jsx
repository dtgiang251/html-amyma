import React from "react";
import { useId } from "react";
import { useReveal } from "../hooks/useReveal";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

// Import CSS (Bắt buộc phải có để slider hiển thị đúng)
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import 'swiper/css';

const About = () => {
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
                  About Us <span className="text-primaryOrange">test</span>
                </h2> 
                <strong className="apple-reveal delay-200 text-2xl leading-[28px] text-[#FF9517] block mb-10">Crafting Digital Excellence Since 1990</strong>
                <p className="apple-reveal delay-300 lg:max-w-[44ch] font-dmSans text-sm leading-[20px] lg:text-lg lg:leading-6 text-[#7E7E7E]">
                  We transform your ideas into compelling, harmonious visuals that engage and persuade your audience. We believe that thoughtful details create meaningful impact in every design.
                  <br/>
                  <br/>
                  Let’s explore how our tailored services can elevate your brand and drive measurable results.
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

      {/* SECTION 2 - DÙNG revealRef2 */}
      <section ref={revealRef2} className="relative overflow-hidden bg-[#F6F6F6]">
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

        <div className="relative z-10 mx-auto max-w-[1440px] px-6 py-16 sm:px-8 md:py-16 lg:px-16 lg:py-[108px] xl:px-[var(--navX,108px)]">
          <div className="mb-10 lg:mb-12">
            <div className="relative inline-block">
              <span className="absolute -left-6 -top-4 text-primaryOrange text-xl font-bold">+</span>
              <h2 className="apple-reveal font-dmSans text-[40px] leading-[48px] md:text-[56px] md:leading-[64px] font-bold text-primaryBlue mb-3 tracking-[-2px]">
                Our <span className="text-primaryOrange">Values</span>
              </h2>
            </div>
            <p className="apple-reveal delay-200 max-w-[700px] font-dmSans text-lg leading-[24px] lg:text-2xl lg:leading-[28px] text-[#7E7E7E]">
              We don’t just build websites — we craft digital foundations for lasting success.
            </p>
          </div>

          {/* Các Step bên dưới */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            <div className="apple-reveal group relative flex flex-col items-start bg-white p-7 rounded-[32px] shadow-[0_4px_25px_rgba(0,0,0,0.03)] border border-gray-50 transition-all hover:shadow-xl">
                <div className="mb-4 flex h-[69px] w-[69px] items-center justify-center rounded-tl-none rounded-2xl bg-[#FFF8F0]">
                    <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19.0355 19.0355C17.0829 20.9882 13.9171 20.9882 11.9645 19.0355C10.0118 17.0829 10.0118 13.9171 11.9645 11.9645C13.9171 10.0118 17.0829 10.0118 19.0355 11.9645C20.9882 13.9171 20.9882 17.0829 19.0355 19.0355Z" fill="#0452A6"/>
                    <path d="M25.3995 25.3995C19.9322 30.8668 11.0678 30.8668 5.60051 25.3995C0.133165 19.9322 0.133165 11.0678 5.60051 5.6005C11.0678 0.133164 19.9322 0.133166 25.3995 5.60051C30.8668 11.0678 30.8668 19.9322 25.3995 25.3995Z" stroke="url(#paint0_linear_529_26819)" stroke-width="3"/>
                    <defs>
                    <linearGradient id="paint0_linear_529_26819" x1="18.9868" y1="39.966" x2="-3.7533" y2="32.5537" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#FF9517"/>
                    <stop offset="1" stop-color="#26B3B8"/>
                    </linearGradient>
                    </defs>
                    </svg> 
                </div>
                <h3 className="font-dmSans text-[clamp(1.125rem,2vw,1.5rem)] font-bold leading-7 text-charcoal mb-3">Crafted with Purpose</h3>
                <p className="font-dmSans text-sm leading-[20px] lg:text-lg lg:leading-6 text-[#3C3C3C]">
                    Every project starts with a clear understanding of your business goals. We design with intention — blending creativity, strategy, and technology to deliver digital experiences that truly make an impact.
                </p>
            </div> 
            <div className="apple-reveal group relative flex flex-col items-start bg-white p-7 rounded-[32px] shadow-[0_4px_25px_rgba(0,0,0,0.03)] border border-gray-50 transition-all hover:shadow-xl">
                <div className="mb-4 flex h-[69px] w-[69px] items-center justify-center rounded-tl-none rounded-2xl bg-[#FFF8F0]">
                    <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24.5355 24.5355C22.5829 26.4882 19.4171 26.4882 17.4645 24.5355C15.5118 22.5829 15.5118 19.4171 17.4645 17.4645C19.4171 15.5118 22.5829 15.5118 24.5355 17.4645C26.4882 19.4171 26.4882 22.5829 24.5355 24.5355Z" fill="#0452A6"/>
                    <path d="M24.5355 8.53553C22.5829 10.4882 19.4171 10.4882 17.4645 8.53553C15.5118 6.58291 15.5118 3.41709 17.4645 1.46446C19.4171 -0.488156 22.5829 -0.488155 24.5355 1.46447C26.4882 3.41709 26.4882 6.58291 24.5355 8.53553Z" fill="url(#paint0_linear_523_45982)"/>
                    <path d="M24.5355 40.5355C22.5829 42.4882 19.4171 42.4882 17.4645 40.5355C15.5118 38.5829 15.5118 35.4171 17.4645 33.4645C19.4171 31.5118 22.5829 31.5118 24.5355 33.4645C26.4882 35.4171 26.4882 38.5829 24.5355 40.5355Z" fill="url(#paint1_linear_523_45982)"/>
                    <path d="M33.4645 24.5355C31.5118 22.5829 31.5118 19.4171 33.4645 17.4645C35.4171 15.5118 38.5829 15.5118 40.5355 17.4645C42.4882 19.4171 42.4882 22.5829 40.5355 24.5355C38.5829 26.4882 35.4171 26.4882 33.4645 24.5355Z" fill="url(#paint2_linear_523_45982)"/>
                    <path d="M1.46446 24.5355C-0.488156 22.5829 -0.488155 19.4171 1.46447 17.4645C3.41709 15.5118 6.58291 15.5118 8.53553 17.4645C10.4882 19.4171 10.4882 22.5829 8.53553 24.5355C6.58291 26.4882 3.41709 26.4882 1.46446 24.5355Z" fill="url(#paint3_linear_523_45982)"/>
                    <path d="M32.3135 14.6863C29.5521 14.6863 27.3135 12.4477 27.3135 9.6863C27.3135 6.92488 29.5521 4.6863 32.3135 4.6863C35.0749 4.6863 37.3135 6.92488 37.3135 9.6863C37.3135 12.4477 35.0749 14.6863 32.3135 14.6863Z" fill="url(#paint4_linear_523_45982)"/>
                    <path d="M9.68652 37.3137C6.9251 37.3137 4.68652 35.0752 4.68652 32.3137C4.68652 29.5523 6.9251 27.3137 9.68652 27.3137C12.4479 27.3137 14.6865 29.5523 14.6865 32.3137C14.6865 35.0752 12.4479 37.3137 9.68652 37.3137Z" fill="url(#paint5_linear_523_45982)"/>
                    <path d="M27.3137 32.3135C27.3137 29.5521 29.5523 27.3135 32.3137 27.3135C35.0751 27.3135 37.3137 29.5521 37.3137 32.3135C37.3137 35.0749 35.0751 37.3135 32.3137 37.3135C29.5523 37.3135 27.3137 35.0749 27.3137 32.3135Z" fill="url(#paint6_linear_523_45982)"/>
                    <path d="M4.68674 9.68652C4.68675 6.9251 6.92532 4.68652 9.68675 4.68652C12.4482 4.68652 14.6867 6.9251 14.6867 9.68652C14.6867 12.4479 12.4482 14.6865 9.68674 14.6865C6.92532 14.6865 4.68674 12.4479 4.68674 9.68652Z" fill="url(#paint7_linear_523_45982)"/>
                    <defs>
                    <linearGradient id="paint0_linear_523_45982" x1="26.2302" y1="57.699" x2="-7.87995" y2="46.5806" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#FF9517"/>
                    <stop offset="1" stop-color="#26B3B8"/>
                    </linearGradient>
                    <linearGradient id="paint1_linear_523_45982" x1="26.2302" y1="57.699" x2="-7.87995" y2="46.5806" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#FF9517"/>
                    <stop offset="1" stop-color="#26B3B8"/>
                    </linearGradient>
                    <linearGradient id="paint2_linear_523_45982" x1="26.2302" y1="57.699" x2="-7.87995" y2="46.5806" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#FF9517"/>
                    <stop offset="1" stop-color="#26B3B8"/>
                    </linearGradient>
                    <linearGradient id="paint3_linear_523_45982" x1="26.2302" y1="57.699" x2="-7.87995" y2="46.5806" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#FF9517"/>
                    <stop offset="1" stop-color="#26B3B8"/>
                    </linearGradient>
                    <linearGradient id="paint4_linear_523_45982" x1="26.2302" y1="57.699" x2="-7.87995" y2="46.5806" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#FF9517"/>
                    <stop offset="1" stop-color="#26B3B8"/>
                    </linearGradient>
                    <linearGradient id="paint5_linear_523_45982" x1="26.2302" y1="57.699" x2="-7.87995" y2="46.5806" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#FF9517"/>
                    <stop offset="1" stop-color="#26B3B8"/>
                    </linearGradient>
                    <linearGradient id="paint6_linear_523_45982" x1="26.2302" y1="57.699" x2="-7.87995" y2="46.5806" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#FF9517"/>
                    <stop offset="1" stop-color="#26B3B8"/>
                    </linearGradient>
                    <linearGradient id="paint7_linear_523_45982" x1="26.2302" y1="57.699" x2="-7.87995" y2="46.5806" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#FF9517"/>
                    <stop offset="1" stop-color="#26B3B8"/>
                    </linearGradient>
                    </defs>
                    </svg>

                </div>
                <h3 className="font-dmSans text-[clamp(1.125rem,2vw,1.5rem)] font-bold leading-7 text-charcoal mb-3">No Templates. Ever.</h3>
                <p className="font-dmSans text-sm leading-[20px] lg:text-lg lg:leading-6 text-[#3C3C3C]">
                    Every Amyma website is designed and built from scratch. This handcrafted approach ensures a unique brand presence, optimized performance, and seamless multilingual SEO — right from the start.
                </p>
            </div> 
            <div className="apple-reveal group relative flex flex-col items-start bg-white p-7 rounded-[32px] shadow-[0_4px_25px_rgba(0,0,0,0.03)] border border-gray-50 transition-all hover:shadow-xl">
                <div className="mb-4 flex h-[69px] w-[69px] items-center justify-center rounded-tl-none rounded-2xl bg-[#FFF8F0]">
                    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21.5355 21.5355C19.5829 23.4882 16.4171 23.4882 14.4645 21.5355C12.5118 19.5829 12.5118 16.4171 14.4645 14.4645C16.4171 12.5118 19.5829 12.5118 21.5355 14.4645C23.4882 16.4171 23.4882 19.5829 21.5355 21.5355Z" fill="url(#paint0_linear_529_26804)"/>
                    <path d="M8.53553 34.5355C6.58291 36.4882 3.41709 36.4882 1.46447 34.5355C-0.488155 32.5829 -0.488155 29.4171 1.46447 27.4645C3.41709 25.5118 6.58291 25.5118 8.53553 27.4645C10.4882 29.4171 10.4882 32.5829 8.53553 34.5355Z" fill="url(#paint1_linear_529_26804)"/>
                    <path d="M34.5355 8.53553C32.5829 10.4882 29.4171 10.4882 27.4645 8.53553C25.5118 6.58291 25.5118 3.41709 27.4645 1.46446C29.4171 -0.488156 32.5829 -0.488155 34.5355 1.46447C36.4882 3.41709 36.4882 6.58291 34.5355 8.53553Z" fill="#0452A6"/>
                    <defs>
                    <linearGradient id="paint0_linear_529_26804" x1="14.3642" y1="44.5971" x2="-4.31521" y2="38.5084" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#FF9517"/>
                    <stop offset="1" stop-color="#26B3B8"/>
                    </linearGradient>
                    <linearGradient id="paint1_linear_529_26804" x1="14.3642" y1="44.5971" x2="-4.31521" y2="38.5084" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#FF9517"/>
                    <stop offset="1" stop-color="#26B3B8"/>
                    </linearGradient>
                    </defs>
                    </svg> 
                </div>
                <h3 className="font-dmSans text-[clamp(1.125rem,2vw,1.5rem)] font-bold leading-7 text-charcoal mb-3">Built for Growth</h3>
                <p className="font-dmSans text-sm leading-[20px] lg:text-lg lg:leading-6 text-[#3C3C3C]">
                    Our work doesn’t stop at launch. We build scalable, high-performing digital solutions designed to evolve with your business and deliver measurable results over time.
                </p>
            </div> 
          </div>
        </div>
      </section>  
      {/* SECTION 3 */}
      <section ref={revealRef3} className="relative overflow-hidden bg-white">
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

        <div className="relative z-10 mx-auto max-w-[1440px] px-6 py-6 sm:px-8 md:py-16 lg:px-16 lg:py-[108px] xl:px-[var(--navX,108px)]">
          <img className="absolute top-0 left-0 right-0 m-auto" alt="" src="/bg-section-06.svg"/>
          <div className="relative z-10 grid items-start">
            <div className="flex flex-col gap-12">
              <div className="flex flex-col">
                <h2 className="apple-reveal font-dmSans text-[40px] leading-[48px] md:text-[56px] md:leading-[64px] font-bold text-primaryBlue mb-3 tracking-[-2px]">
                  Our <span className="text-primaryOrange">team</span>
                </h2>          
                <p className="apple-reveal delay-400 font-dmSans text-lg leading-[24px] lg:text-2xl lg:leading-[28px] text-[#7E7E7E]">
                  Amyma is a team of creative professionals with diverse expertise. We offer a complete range of digital services and have crafted bespoke designs for clients both big and small.
                </p>
              </div>
            </div> 
          </div>
        </div>
      </section>       
      {/* SECTION 4 - DÙNG revealRef2 */}
      <section ref={revealRef4} className="relative overflow-hidden bg-[#F6F6F6]">
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

        <div className="relative z-10 mx-auto max-w-[1440px] px-6 py-16 sm:px-8 md:py-16 lg:px-16 lg:py-[108px] xl:px-[var(--navX,108px)]">
          <div className="mb-10 lg:mb-12">
            <div className="relative inline-block">
              <span className="absolute -left-6 -top-4 text-primaryOrange text-xl font-bold">+</span>
              <h2 className="apple-reveal font-dmSans text-[40px] leading-[48px] md:text-[56px] md:leading-[64px] font-bold text-primaryBlue mb-3 tracking-[-2px]">
                Our <span className="text-primaryOrange">Timeline</span>
              </h2>
            </div>
            <p className="apple-reveal delay-200 max-w-[880px] font-dmSans text-lg leading-[24px] lg:text-2xl lg:leading-[28px] text-[#7E7E7E]">
              From our beginnings to today, each milestone reflects our commitment to craft, innovation, and client success.
            </p>
          </div>

          {/* slider */}
           <div className="mx-auto max-w-[1440px] px-4 overflow-hidden"> 
  <Swiper
    modules={[Navigation, Pagination]}
    spaceBetween={0}
    // Sử dụng số thập phân để hiện một phần slide lân cận
    slidesPerView={1.2} 
    centeredSlides={true} // Bắt buộc để item active nằm giữa
    loop={true}
    breakpoints={{
      640: {
        slidesPerView: 1,
        centeredSlides: false,
      },
      768: {
      slidesPerView: 2,
      centeredSlides: true, // Ép item vào giữa để cân đối
      spaceBetween: 24,
    },
      1024: {
        slidesPerView: 2.5, // Hiện 2 cái rưỡi giúp cái giữa nổi bật nhất
        centeredSlides: true,
      },
    }}
    navigation={{
      nextEl: '.next-timeline',
      prevEl: '.prev-timeline',
    }}
    pagination={{
      el: '.custom-pagination',
      clickable: true,
    }}
    // overflow-visible giúp hiệu ứng phóng to và bóng đổ không bị cắt
    className="!overflow-visible py-20" 
  >
    {/* Dữ liệu Timeline */}
    {[1990, 2002, 2012, 2013, 2015, 2019, 2025].map((year) => (
      <SwiperSlide key={year} className="timeline-card transition-all duration-500">
        <div className="flex bg-white rounded-2xl border border-gray-100 p-6 shadow-sm gap-6 items-center">
          {/* Box năm màu cam */}
          <div className="flex min-w-[140px] h-[140px] flex-col items-center justify-center rounded-2xl bg-[#FFF8F0] text-[#FF9517]">
            <span className="text-5xl font-extrabold">{year}</span>
          </div>
          <div className="flex flex-col">
            <h4 className="text-2xl font-bold text-[#1C1C1C]">First Custom Website Completed</h4>
            <p className="mt-2 text-base text-[#3C3C3C] opacity-80">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Suspendisse varius enim in eros elementum tristique.
            </p>
          </div>
        </div>
      </SwiperSlide>
    ))}
  </Swiper>

  {/* Thanh điều hướng và Phân trang */}
  <div className="mt-10 flex items-center justify-between border-t pt-8 border-gray-100">
    <div className="custom-pagination flex gap-2"></div>
    <div className="flex gap-4">
       {/* Nút bấm giữ nguyên class cũ của bạn nhưng điều chỉnh màu theo thiết kế */}
       <button className="prev-timeline flex h-12 w-12 items-center justify-center rounded-full bg-gray-100 text-[#012C5B] hover:bg-[#012C5B] hover:text-white transition-all">
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g opacity="0.25">
          <path d="M0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24Z" fill="#012C5B"/>
          <path d="M24.7069 29.293L20.4139 25H29.9999V23H20.4139L24.7069 18.707L23.2929 17.293L16.5859 24L23.2929 30.707L24.7069 29.293Z" fill="white"/>
          </g>
          </svg>
       </button>
       <button className="next-timeline flex h-12 w-12 items-center justify-center rounded-full bg-[#012C5B] text-white shadow-lg hover:bg-[#FF9517] transition-all">
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24Z" fill="#012C5B"/>
          <path d="M23.293 29.293L24.707 30.707L31.414 24L24.707 17.293L23.293 18.707L27.586 23H18V25H27.586L23.293 29.293Z" fill="white"/>
          </svg>
       </button>
    </div>
  </div>
</div>
<style jsx global>{`
  /* Slide mặc định: Thu nhỏ, mờ và blur */
  .swiper-slide.timeline-card {
    transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
    transform: scale(0.85);
    opacity: 0.3;
    filter: blur(2px);
  }

  /* Slide Active: Phóng to nhẹ, rõ nét và nằm trên cùng */
  .swiper-slide-active.timeline-card {
    transform: scale(1.05) !important; 
    opacity: 1 !important;
    filter: blur(0) !important;
    z-index: 20;
  }

  /* Tùy chỉnh Pagination thanh dài */
  .custom-pagination .swiper-pagination-bullet {
    width: 32px !important;
    height: 4px !important;
    border-radius: 2px !important;
    background: #D1D5DB !important;
    transition: all 0.3s ease !important;
  }
  .custom-pagination .swiper-pagination-bullet-active {
    background: #012C5B !important;
    width: 56px !important;
  }

  /* Đảm bảo Swiper không bị lệch lề trái/phải */
  .swiper {
    width: 100% !important;
    padding-left: 0 !important;
    padding-right: 0 !important;
  }
`}</style>  
        </div>
      </section>  
    </>
  );
};

export default About;