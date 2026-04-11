import React from "react"; 
import { useReveal } from "../hooks/useReveal";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

// Import CSS (Bắt buộc phải có để slider hiển thị đúng)
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import 'swiper/css';

const Blog = () => { 
  const revealRef1 = useReveal();  
  const revealRef2 = useReveal();  
 
  return (
    <>
      
      {/* SECTION 2 - DÙNG revealRef2 */}
      <section ref={revealRef1} className="relative z-10 mx-auto max-w-[1440px] px-6 py-8 sm:px-8 md:py-16 lg:px-10 lg:py-[68px] xl:px-[var(--navX,108px)]"    
        style={{background: `url('../bg-section-06.svg') center center no-repeat`}} 
      >
         
        <div className="mb-10 lg:mb-12">
            <div className="relative text-left"> 
              <h2 className="apple-reveal font-dmSans text-[40px] leading-[48px] md:text-[56px] md:leading-[64px] font-bold text-primaryBlue mb-3 tracking-[-2px]">
                Blog Name
              </h2>
            </div>
            <p className="apple-reveal delay-200 max-w-[880px] text-left font-dmSans text-sm leading-[20px] lg:text-lg lg:leading-6 text-[#7E7E7E]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. 
            </p>
          </div> 
      </section>
      <section ref={revealRef2} className="relative overflow-hidden bg-[#F6F6F6]"> 
        <div className="relative z-10 mx-auto max-w-[1440px] px-6 py-8 sm:px-8 md:py-16 lg:px-16 lg:py-[108px] xl:px-[var(--navX,108px)]">
          


          <div className="max-w-[1440px] mx-auto">
              <h4 className="mb-12 text-[#012C5B] font-bold text-[20px] leading-[32px] lg:text-[32px] lg:leading-[40px]">Featured blog posts</h4>
              <Swiper
                modules={[Navigation, Pagination]}
                slidesPerView={1}
                spaceBetween={40}
                navigation={{ nextEl: '.next-btn', prevEl: '.prev-btn' }}
                pagination={{ el: '.custom-pagination', clickable: true }}
              >
                
                {/* TRANG SLIDE 1 */}
                <SwiperSlide>
                  {/* Container chính: Chia đôi 2 cột trên desktop, 1 cột trên mobile */}
                    <div className="flex flex-col md:flex-row bg-white rounded-[8px] overflow-hidden border border-gray-100 shadow-sm group hover:shadow-md transition-all duration-500">
                      
                      {/* Cột trái: Hình ảnh dự án */}
                      <div className="w-full md:w-1/2 relative aspect-[4/3] md:aspect-auto overflow-hidden">
                        <div 
                          className="w-full h-full bg-cover bg-center transition-transform duration-700"
                          style={{ 
                            backgroundImage: "url('/h-img18.png')",
                            backgroundRepeat: 'no-repeat'
                          }}
                        >
                          {/* Nút mũi tên đặc trưng nằm ở góc dưới bên trái của ảnh (theo thiết kế) */}
                          <div className="absolute bottom-0 right-0 z-10">
                            <button className="block">
                            <svg width="72" height="56" viewBox="0 0 72 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M8 56H0C4.41811 56 7.99974 52.4181 8 48V56Z" fill="white"/>
                              <path d="M8 32C8 14.3269 22.3269 0 40 0H72V56H8V32Z" fill="white"/>
                              <path d="M16 32C16 18.7452 26.7452 8 40 8C53.2548 8 64 18.7452 64 32C64 45.2548 53.2548 56 40 56C26.7452 56 16 45.2548 16 32Z" fill="#012C5B"/>
                              <path d="M43.4507 36.7425L45.4504 36.7425L45.4504 27.2574H35.9652V29.2571H42.0364L35.2581 36.0354L36.6723 37.4496L43.4507 30.6713L43.4507 36.7425Z" fill="white"/>
                            </svg> 
                            </button>
                          </div>
                        </div>
                        <div 
                        className="absolute bottom-0 left-0 right-0 w-full h-full"
                        style={{
                          background: "linear-gradient(180deg, rgba(255, 149, 23, 0) 29.23%, #FF9517 113.94%)"
                        }}
                      />
                      </div>

                      {/* Cột phải: Nội dung chi tiết */}
                      <div className="w-full md:w-1/2 p-8 lg:p-12 flex flex-col justify-center bg-white">
                        
                        {/* Category Tag */}
                        <div className="mb-6">
                          <span className="bg-[#012C5B] text-white text-xs font-normal px-4 py-2 rounded-[4px] uppercase tracking-wider">
                            Category
                          </span>
                        </div>

                        {/* Tiêu đề bài viết */}
                        <h3 className="text-lg lg:text-2xl font-bold text-[#1C1C1C] mb-4">
                          What is SEO and why is it essential for your website?
                        </h3>

                        {/* Mô tả ngắn (Excerpt) */}
                        <div className="space-y-4 mb-8">
                          <p className="text-[#3C3C3C] text-sm lg:text-lg leading-[24px]">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.
                            <br/>
                            <br/> 
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                          </p>
                        </div>

                        {/* Metadata: Tác giả & Ngày tháng */}
                        <div className="flex items-center gap-2 text-[10px] leading-[16px] lg:text-xs text-[#3C3C3C]">
                          <span>Author</span>
                          <span className="text-[#FF9517]">◆</span>
                          <span>February 16, 2023</span>
                        </div>

                      </div>

                    </div>
                </SwiperSlide>
                <SwiperSlide>
                  {/* Container chính: Chia đôi 2 cột trên desktop, 1 cột trên mobile */}
                    <div className="flex flex-col md:flex-row bg-white rounded-[8px] overflow-hidden border border-gray-100 shadow-sm group hover:shadow-md transition-all duration-500">
                      
                      {/* Cột trái: Hình ảnh dự án */}
                      <div className="w-full md:w-1/2 relative aspect-[4/3] md:aspect-auto overflow-hidden">
                        <div 
                          className="w-full h-full bg-cover bg-center transition-transform duration-700"
                          style={{ 
                            backgroundImage: "url('/h-img18.png')",
                            backgroundRepeat: 'no-repeat'
                          }}
                        >
                          {/* Nút mũi tên đặc trưng nằm ở góc dưới bên trái của ảnh (theo thiết kế) */}
                          <div className="absolute bottom-0 right-0 z-10">
                            <button className="block">
                            <svg width="72" height="56" viewBox="0 0 72 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M8 56H0C4.41811 56 7.99974 52.4181 8 48V56Z" fill="white"/>
                              <path d="M8 32C8 14.3269 22.3269 0 40 0H72V56H8V32Z" fill="white"/>
                              <path d="M16 32C16 18.7452 26.7452 8 40 8C53.2548 8 64 18.7452 64 32C64 45.2548 53.2548 56 40 56C26.7452 56 16 45.2548 16 32Z" fill="#012C5B"/>
                              <path d="M43.4507 36.7425L45.4504 36.7425L45.4504 27.2574H35.9652V29.2571H42.0364L35.2581 36.0354L36.6723 37.4496L43.4507 30.6713L43.4507 36.7425Z" fill="white"/>
                            </svg> 
                            </button>
                          </div>
                        </div>
                        <div 
                        className="absolute bottom-0 left-0 right-0 w-full h-full"
                        style={{
                          background: "linear-gradient(180deg, rgba(255, 149, 23, 0) 29.23%, #FF9517 113.94%)"
                        }}
                      />
                      </div>

                      {/* Cột phải: Nội dung chi tiết */}
                      <div className="w-full md:w-1/2 p-8 lg:p-12 flex flex-col justify-center bg-white">
                        
                        {/* Category Tag */}
                        <div className="mb-6">
                          <span className="bg-[#012C5B] text-white text-xs font-normal px-4 py-2 rounded-[4px] uppercase tracking-wider">
                            Category
                          </span>
                        </div>

                        {/* Tiêu đề bài viết */}
                        <h3 className="text-lg lg:text-2xl font-bold text-[#1C1C1C] mb-4">
                          What is SEO and why is it essential for your website?
                        </h3>

                        {/* Mô tả ngắn (Excerpt) */}
                        <div className="space-y-4 mb-8">
                          <p className="text-[#3C3C3C] text-sm lg:text-lg leading-[24px]">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.
                            <br/>
                            <br/> 
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                          </p>
                        </div>

                        {/* Metadata: Tác giả & Ngày tháng */}
                        <div className="flex items-center gap-2 text-[10px] leading-[16px] lg:text-xs text-[#3C3C3C]">
                          <span>Author</span>
                          <span className="text-[#FF9517]">◆</span>
                          <span>February 16, 2023</span>
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


             <div className="w-full bg-[#F6F6F6] py-8 md:py-16 font-dmSans">
              {/* Container giới hạn 880px */}
              <div className="mx-auto max-w-[880px]">
                
                <div className="flex flex-col gap-14">
                  {/* Item 1: Ảnh bên phải */}
                  <div className="flex-col-reverse flex  md:flex-row bg-white rounded-[8px] overflow-hidden border border-gray-100 group shadow-sm hover:shadow-md transition-all">
                    <div className="flex-1 p-4 md:p-7 flex flex-col justify-center">
                      <span className="bg-[#FF9517] text-white text-[10px] font-bold px-3 py-1 rounded-[4px] w-fit mb-4">Website</span>
                      <h3 className="text-lg lg:text-2xl font-bold text-[#1C1C1C] mb-4">Blog Title Goes Here</h3>
                      <p className="text-[#3C3C3C] text-sm lg:text-lg leading-[24px] mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
                      <div className="flex items-center gap-2 text-[10px] leading-[16px] lg:text-xs text-[#3C3C3C]">
                        <span>Author</span> <span className="text-[#FF9517]">◆</span> <span>February 16, 2023</span>
                      </div>
                    </div>
                    <div className="w-full md:w-[50%] relative aspect-[16/10] md:aspect-auto">
                      <div className="relative h-full">
                        <img src="../h-img19.png" alt="blog" className="w-full h-full object-cover" />
                        <button className="absolute bottom-0 right-0 md:left-0 z-10">
                          <svg className="hidden md:block" width="56" height="64" viewBox="0 0 56 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M56 32C56 14.3269 41.6731 0 24 0H0V64H56V32Z" fill="white"/>
                          <path d="M0 32C0 18.7452 10.7452 8 24 8C37.2548 8 48 18.7452 48 32C48 45.2548 37.2548 56 24 56C10.7452 56 0 45.2548 0 32Z" fill="#012C5B"/>
                          <path d="M27.4507 36.7426L29.4504 36.7426L29.4504 27.2574H19.9652V29.2571H26.0364L19.2581 36.0355L20.6723 37.4497L27.4507 30.6713L27.4507 36.7426Z" fill="white"/>
                          </svg> 
                          <svg className="block md:hidden" width="64" height="56" viewBox="0 0 64 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M0 32C0 14.3269 14.3269 0 32 0H64V56H0V32Z" fill="white"/>
                          <path d="M8 32C8 18.7452 18.7452 8 32 8C45.2548 8 56 18.7452 56 32C56 45.2548 45.2548 56 32 56C18.7452 56 8 45.2548 8 32Z" fill="#012C5B"/>
                          <path d="M35.4507 36.7426L37.4504 36.7426L37.4504 27.2574H27.9652V29.2571H34.0364L27.2581 36.0355L28.6723 37.4497L35.4507 30.6713L35.4507 36.7426Z" fill="white"/>
                          </svg> 
                        </button> 
                      </div>
                      <div 
                        className="absolute bottom-0 left-0 right-0 w-full h-full"
                        style={{
                          background: "linear-gradient(180deg, rgba(255, 149, 23, 0) 29.23%, #FF9517 113.94%)"
                        }}
                      />
                    </div>
                    
                  </div>

                  {/* Item 2: Ảnh bên trái (Đảo ngược) */}
                  <div className="flex flex-col md:flex-row bg-white rounded-[8px] overflow-hidden border border-gray-100 group shadow-sm hover:shadow-md transition-all">
                    <div className="w-full md:w-[50%] relative aspect-[16/10] md:aspect-auto">
                      <div className="relative h-full">
                      <img src="../h-img19.png" alt="blog" className="w-full h-full object-cover" />
                      <button className="absolute bottom-0 right-0 z-10">
                         
                        <svg className="block" width="64" height="56" viewBox="0 0 64 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 32C0 14.3269 14.3269 0 32 0H64V56H0V32Z" fill="white"/>
                        <path d="M8 32C8 18.7452 18.7452 8 32 8C45.2548 8 56 18.7452 56 32C56 45.2548 45.2548 56 32 56C18.7452 56 8 45.2548 8 32Z" fill="#012C5B"/>
                        <path d="M35.4507 36.7426L37.4504 36.7426L37.4504 27.2574H27.9652V29.2571H34.0364L27.2581 36.0355L28.6723 37.4497L35.4507 30.6713L35.4507 36.7426Z" fill="white"/>
                        </svg> 
                      </button>
                      </div>
                      <div 
                        className="absolute bottom-0 left-0 right-0 w-full h-full"
                        style={{
                          background: "linear-gradient(180deg, rgba(255, 149, 23, 0) 29.23%, #FF9517 113.94%)"
                        }}
                      />
                    </div>
                    <div className="flex-1 p-4 md:p-7 flex flex-col justify-center">
                      <span className="bg-[#FF9517] text-white text-[10px] font-bold px-3 py-1 rounded-[4px] w-fit mb-4">Website</span>
                      <h3 className="text-lg lg:text-2xl font-bold text-[#1C1C1C] mb-4">Blog Title Goes Here</h3>
                      <p className="text-[#3C3C3C] text-sm lg:text-lg leading-[24px] mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
                      <div className="flex items-center gap-2 text-[10px] leading-[16px] lg:text-xs text-[#3C3C3C]">
                        <span>Author</span> <span className="text-[#FF9517]">◆</span> <span>February 16, 2023</span>
                      </div>
                    </div> 
                  </div>
                </div>

                {/* Phân trang (Pagination) */}
                <div className="mt-12 flex items-center justify-between">
                  <button className="px-6 py-[13px] rounded-full border border-gray-200 text-[#7E7E7E] text-sm hover:bg-gray-50 transition-colors">
                    Previous
                  </button>
                  
                  <div className="flex items-center gap-4">
                    <button className="w-8 h-8 rounded-full bg-[#FF9517] text-white text-sm font-bold">1</button>
                    <button className="w-8 h-8 rounded-full text-[#1C1C1C] text-sm font-bold hover:bg-gray-100">2</button>
                  </div>

                  <button className="px-10 py-[13px] border border-[012C5B] rounded-full bg-[#012C5B] text-white text-sm font-bold hover:bg-[#023772] transition-colors">
                    Next
                  </button>
                </div>

              </div>
            </div>   

          </div>


            
        </div>
      </section>
    
    </>
  );
}; 

export default Blog;