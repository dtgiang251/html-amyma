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

const FundingOverview = () => {
  // Định nghĩa Icon bên trong hoặc ngoài đều được
  const XIcon = ({ className = "h-6 w-6 text-primaryOrange" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M16.192 6.344 11.95 10.586 7.707 6.344 6.293 7.758 10.535 12l-4.242 4.242 1.414 1.414L11.95 13.414l4.242 4.242 1.414-1.414L13.364 12l4.242-4.242-1.414-1.414Z" fill="currentColor" />
    </svg>
  );


  // 1. Quản lý trạng thái đóng mở (mặc định mở cái đầu tiên - index 0)
  const [openIndex, setOpenIndex] = useState(0);

  // 2. Dữ liệu FAQ
  const faqs = [
    {
      question: "Who is eligible?",
      answer: "Book a free consultation with the House of Entrepreneurship (Chamber of Commerce) or the eHandwierk team (Chamber of Skilled Trades and Crafts). Together, you'll review your current digital setup and identify priorities.",
    },
    {
      question: "What are the preliminary steps?",
      answer: "The preliminary steps involve a digital maturity assessment and identifying specific areas for improvement in your business processes.",
    },
    {
      question: "How much of the cost will be covered?",
      answer: "Depending on the program, you can receive funding for up to 70% of the total digital transformation costs, with specific caps based on your SME size.",
    },
    {
      question: "Who can you contact?",
      answer: "You can reach out directly to our support team or the Ministry of Economy for official guidance on the application process.",
    },
    {
      question: "Other useful links",
      answer: "Visit our resources page for documentation templates, case studies, and detailed policy information.",
    },
  ];



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

        <div className="relative z-10 mx-auto max-w-[1440px] px-6 py-16 sm:px-8 sm:py-20 lg:px-16 lg:py-[108px] xl:px-[var(--navX,108px)]">
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
                <img className="apple-reveal animate-hero-float" alt="" src="/h-img02.png"/>
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

        <div className="relative z-10 mx-auto max-w-[1440px] px-6 py-16 sm:px-8 sm:py-20 lg:px-16 lg:py-[108px] xl:px-[var(--navX,108px)]"
          style={{background: `url('../bg-section-08.svg') center center no-repeat`}} 
        >
          <div className="mb-10 lg:mb-12">
            <div className="relative inline-block"> 
              <h2 className="apple-reveal font-dmSans text-[40px] leading-[48px] md:text-[56px] md:leading-[64px] font-bold text-primaryBlue mb-3 tracking-[-2px]">
                SME Digital Packages – <span className="text-primaryOrange">How It Works</span>
              </h2>
            </div>
            <p className="apple-reveal delay-200 max-w-[880px] font-dmSans text-lg leading-[24px] lg:text-2xl lg:leading-[28px] text-[#7E7E7E]">
              With government support, SMEs and start-ups in Luxembourg can cover up to 70% of their digital project costs. Here’s how the process works, step by step:
            </p>
          </div>

          {/* Các Step bên dưới */}
          <div className="apple-reveal delay-300 flex flex-col gap-6">
            
              <div 
                 
                className="flex flex-col md:flex-row items-start gap-6 px-7 py-6 bg-white rounded-[16px]"
              >
                {/* Vòng tròn số */}
                <div className="flex-shrink-0 w-[69px] h-[69px] rounded-[16px] bg-[#FFF8F0] flex items-center justify-center">
                  <span className={`bg-gradient-to-r from-primaryTeal to-primaryOrange bg-clip-text text-transparent text-[20px] leading-[32px] lg:text-[32px] lg:leading-[40px] font-bold`}>
                    01
                  </span>
                </div>

                {/* Nội dung text */}
                <div className="flex-">
                  <h3 className="text-[18px] leading-[24px] lg:text-[24px] lg:leading-[28px] font-bold text-[#111827] mb-2">
                    Pre-analysis of your needs
                  </h3>
                  <p className="text-gray-500 text-sm leading-[20px] lg:text-lg lg:leading-6">
                    Book a free consultation with the House of Entrepreneurship (Chamber of Commerce) or the eHandwierk team (Chamber of Skilled Trades and Crafts). Together, you’ll review your current digital setup and identify priorities.
                  </p>
                </div>
              </div>
              <div 
                 
                className="flex flex-col md:flex-row items-start gap-6 px-7 py-6 bg-white rounded-[16px]"
              >
                {/* Vòng tròn số */}
                <div className="flex-shrink-0 w-[69px] h-[69px] rounded-[16px] bg-[#FFF8F0] flex items-center justify-center">
                  <span className={`bg-gradient-to-r from-primaryTeal to-primaryOrange bg-clip-text text-transparent text-[20px] leading-[32px] lg:text-[32px] lg:leading-[40px] font-bold`}>
                    02
                  </span>
                </div>

                {/* Nội dung text */}
                <div className="flex-">
                  <h3 className="text-[18px] leading-[24px] lg:text-[24px] lg:leading-[28px] font-bold text-[#111827] mb-2">
                    Pre-analysis of your needs
                  </h3>
                  <p className="text-gray-500 text-sm leading-[20px] lg:text-lg lg:leading-6">
                    Book a free consultation with the House of Entrepreneurship (Chamber of Commerce) or the eHandwierk team (Chamber of Skilled Trades and Crafts). Together, you’ll review your current digital setup and identify priorities.
                  </p>
                </div>
              </div>
          
          </div>
        </div>
      </section>
    {/* SECTION 3 - DÙNG revealRef3 */}
      <section ref={revealRef3} className="relative py-20 px-4 bg-white overflow-hidden" 
      style={{background: `url('../bg-section-07.svg') center center no-repeat`}} 
      > 
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          {/* Header Content */}
          <h2 className="apple-reveal font-dmSans text-[40px] leading-[48px] md:text-[56px] md:leading-[64px] font-bold text-primaryBlue mb-3 tracking-[-2px]">
            Check Your Eligibility <br />
            <span className="text-[#FF9517]">for up to 70% Funding</span>
          </h2>
          <p className="apple-reveal delay-200 text-[#7E7E7E] text-[18px] leading-[24px] lg:text-[24px] lg:leading-[28px] max-w-2xl mx-auto mb-12">
            Share your details and we'll guide you through the SME Digital Packages. Our 
            team will confirm if your company qualifies and explain the next steps – fast, 
            simple, and without obligation.
          </p>

          {/* Form Content */}
          <form className="apple-reveal delay-300 text-left grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
            {/* First Name */}
            <div className="flex flex-col gap-2">
              <label className="text-sm leading-[20px] lg:text-lg lg:leading-[24px] font-normal text-[#3C3C3C]">
                First Name<span className="text-cyan-500">*</span>
              </label>
              <input 
                type="text" 
                className="w-full px-4 py-[9px] rounded-sm border border-[#D5D4D4] focus:outline-none transition-all"
              />
            </div>

            {/* Last Name */}
            <div className="flex flex-col gap-2">
              <label className="text-sm leading-[20px] lg:text-lg lg:leading-[24px] font-normal text-[#3C3C3C]">
                Last Name<span className="text-cyan-500">*</span>
              </label>
              <input 
                type="text" 
                className="w-full px-4 py-[9px] rounded-sm border border-[#D5D4D4] focus:outline-none transition-all"
              />
            </div>

            {/* Email */}
            <div className="flex flex-col gap-2">
              <label className="text-sm leading-[20px] lg:text-lg lg:leading-[24px] font-normal text-[#3C3C3C]">
                Email<span className="text-cyan-500">*</span>
              </label>
              <input 
                type="email" 
                className="w-full px-4 py-[9px] rounded-sm border border-[#D5D4D4] focus:outline-none transition-all"
              />
            </div>

            {/* Phone Number */}
            <div className="flex flex-col gap-2">
              <label className="text-sm leading-[20px] lg:text-lg lg:leading-[24px] font-normal text-[#3C3C3C]">
                Phone Number (optional)
              </label>
              <input 
                type="tel" 
                className="w-full px-4 py-[9px] rounded-sm border border-[#D5D4D4] focus:outline-none transition-all"
              />
            </div>

            {/* Submit Button */}
            <div className="md:col-span-2 flex justify-end mt-4">
              <button 
                type="submit" 
                className="px-10 py-3 bg-[#012C5B] text-white font-bold rounded-full hover:bg-[#FF9517] transition-colors shadow-lg"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </section>
      {/* SECTION 4 - DÙNG revealRef2 */}
      <section ref={revealRef4} className="relative overflow-hidden bg-[#F6F6F6]">
         

        <div className="relative z-10 mx-auto max-w-[1440px] px-6 py-16 sm:px-8 sm:py-20 lg:px-16 lg:py-[108px] xl:px-[var(--navX,108px)]"
          style={{background: `url('../bg-section-08.svg') center center no-repeat`}} 
        >
          <div className="mb-10 lg:mb-12">
            <div className="relative"> 
              <h2 className="apple-reveal text-center font-dmSans text-[40px] leading-[48px] md:text-[56px] md:leading-[64px]  font-bold text-primaryBlue mb-3 tracking-[-2px]">
                FAQs
              </h2>
            </div> 
          </div>

          {/* Các Step bên dưới */}
          <div className="apple-reveal delay-300 flex flex-col gap-6">
            
               <div className="">
                <div className="max-w-[880px] mx-auto bg-white rounded-[24px] shadow-sm border border-gray-100 overflow-hidden">
                  {faqs.map((faq, index) => {
                    const isOpen = openIndex === index;

                    return (
                      <div key={index} className="border-b border-gray-100 last:border-none">
                        <button
                          onClick={() => setOpenIndex(isOpen ? -1 : index)}
                          className="w-full flex items-center justify-between py-5 px-7  text-left transition-colors hover:bg-gray-50/50 outline-none"
                        >
                          <span className="text-[18px] leading-[24px] lg:text-[24px] lg:leading-[28px] font-bold text-[#1C1C1C]">
                            {faq.question}
                          </span>

                          {/* Icon +/- */}
                          <div className="flex-shrink-0 w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center transition-all bg-white">
                            {isOpen ? (
                              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M18.9489 11.0006L4.95028 10.9999V12.9996L18.9489 13.0003L18.9489 11.0006Z" fill="#1C1C1C"/>
                              </svg>

                            ) : (
                              <svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10 1V19M1 10H19" stroke="black" strokeWidth="2" strokeLinecap="round" />
                              </svg>
                            )}
                          </div>
                        </button>

                        {/* Nội dung với hiệu ứng trượt mượt bằng CSS Grid */}
                        <div
                          className={`grid transition-all duration-300 ease-in-out ${
                            isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                          }`}
                        >
                          <div className="overflow-hidden">
                            <div className="px-6 lg:px-8 pb-4 text-[#3C3C3C] text-sm leading-[20px] lg:text-lg lg:leading-[24px]">
                              {faq.answer}
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
          
          </div>
        </div>
      </section>
      
    </>
  );
};

export default FundingOverview;