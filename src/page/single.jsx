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
  const revealRef1 = useReveal();    
  const revealRef5 = useReveal();  
  const revealRef6 = useReveal();  
  const revealRef7 = useReveal();   

  return (
    <>
    <section className="relative overflow-hidden bg-white">
      <div className="pointer-events-none absolute inset-0 z-0 select-none top-0">
        <img src="/g-single.png" alt="" className="w-full" />
      </div>
      <section ref={revealRef1} className="relative">
          

          <div className="max-w-[1264px] w-full m-auto px-5 py-20">
            
            <div className="relative flex flex-col border-t border-[#f1f1f1] md:flex-row items-center bg-white rounded-2xl shadow-lg overflow-hidden">
              
              <div className="w-full md:w-[35%]">
                <img 
                  src="/Image.png" 
                  alt="" 
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="w-full md:w-[65%] p-6 md:p-10">
                
                <h2 className="text-[40px] md:text-[56px] font-bold text-[#012C5B] leading-tight tracking-[-2px] mb-6">
                  What is SEO and why is it essential for your website?
                </h2>

                <div className="flex items-center gap-4 flex-wrap">
                  
                  <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 0H34C38.4183 0 42 3.58172 42 8V34C42 38.4183 38.4183 42 34 42H8C3.58172 42 0 38.4183 0 34V0Z" fill="url(#paint0_linear_651_94321)"/>
                  <path d="M24.0706 28V14H26.7706V28H24.0706ZM15.2506 28V14H17.9506V28H15.2506ZM17.5706 21.94V19.76H24.5306V21.94H17.5706Z" fill="white"/>
                  <defs>
                  <linearGradient id="paint0_linear_651_94321" x1="36.225" y1="-10.5" x2="61.3678" y2="11.8753" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#26B3B8"/>
                  <stop offset="1" stop-color="#FF9517"/>
                  </linearGradient>
                  </defs>
                  </svg>
                  <div className="text-sm">
                    <p className="text-[#1C1C1C] font-semibold">
                      Harald Bröcker
                    </p>
                    <p className="text-[#7E7E7E] text-[14px]">
                      February 16, 2023
                    </p>
                  </div>

                  <div className="flex items-center gap-2 ml-2">
                    <span className="px-3 py-1 text-[12px] bg-blue-600 text-white rounded">
                      SEO
                    </span>
                    <span className="px-3 py-1 text-[12px] bg-orange-500 text-white rounded">
                      Website
                    </span>
                  </div>

                </div>

              </div>

            </div>

          </div>
      </section>  
      <section ref={revealRef1} className="relative overflow-hidden">
          <div className="max-w-[920px] w-full m-auto px-5 py-20">
  
            <div className="grid md:grid-cols-2 gap-8 items-start">
              
              <div className="text-[#3C3C3C] text-[14px] md:text-[18px] leading-[24px] space-y-4">
                <p>
                  In designing our custom websites, we pay particular attention to SEO. 
                  Unlike most of our competitors, we include this service in all our projects.
                </p>
                <p>
                  In this article, we explain what SEO is, how it differs from SEA, 
                  and why it is essential to consider it from the very beginning of a web project.
                </p>
              </div>

              <div>
                <img 
                  src="/s1.png" 
                  alt="SEO" 
                  className="w-full h-full object-cover rounded-lg"
                />
                <p className="text-[12px] text-[#7E7E7E] mt-4">
                  Source: 
                  <a href="https://elements.envato.com" className="text-[#26B3B8] underline">
                    https://elements.envato.com
                  </a>
                </p>
              </div>

            </div>
            <div className="text-[#3C3C3C] text-[14px] md:text-[18px] leading-[24px] mt-8">
              <p className="mb-4">
                When a company wants a new website, it rightly considers it a showcase for its products and services. It therefore understands that the site must be visually appealing, user-friendly, and that its content presentation must be exemplary. However, all of this assumes that the user—current or potential customer—is already on the site.</p>

              <p className="mb-4">  The first question we should ask ourselves is, "How will he get to my site?" Generally, the obvious answer is, "He'll find my site on Google!"</p>

              <p className="text-[#26B3B8] font-bold mb-4">  Did you know that there are currently 1.93 billion websites online worldwide? Furthermore, it is estimated that only 4.8% of internet users visit the second page of results on the popular search engine.</p>

              <p className="mb-4">To attract potential customers to your new website, it needs to stand out enough to rank in the top 10 Google results for your geographic area and the most important search terms for your business! Quite a challenge, isn't it?</p>

              <p className="mb-4">  To achieve this coveted goal for your website, there are two solutions: SEO and SEA. Here, we'll explore the differences between the two and why SEO should be considered from the very beginning of website design.
              </p>
            </div>
            <h4 className="text-[20px] md:text-[32px] font-bold text-[#012C5B] leading-tight mt-10">What is SEO and how does it differ from SEA?</h4>
            <div className="text-[#3C3C3C] text-[14px] md:text-[18px] leading-[24px] mt-8 mb-10">
              <p className="mb-4">SEO stands for “Search Engine Optimization,” which refers to the techniques used to improve organic, natural rankings in search engines like Google.</p>

              <p className="mb-4">SEA, on the other hand, stands for “Search Engine Advertising.” It is a form of paid search engine optimization based on bidding for keywords. Its advantage is that it allows a website to be positioned directly at the top of search results for a fee.</p>

              <p className="mb-4">SEO and SEA are independent of each other and do not occupy the same positions on the search results page. It's worth noting, however, that since SEA takes page quality into account when calculating part of the bid, a page that is well-optimized for SEO and therefore of higher quality will be advantageous for SEA. The connection between the two ends there.</p>

            </div>
            <img 
                  src="/image12.jpg" 
                  alt="SEO" 
                  className="w-full h-full object-cover rounded-lg shadow-lg"
                />
            <h4 className="text-[20px] md:text-[32px] font-bold text-[#012C5B] leading-tight mt-10">How do search engines work?</h4>
            <div className="text-[#3C3C3C] text-[14px] md:text-[18px] leading-[24px] mt-5 mb-10">
              <p>Search engine robots, like those of Google, constantly crawl the World Wide Web in search of new content. They absorb everything they find and categorize it in their index. To navigate this vast library, they use a very powerful algorithm. This algorithm is kept secret, is constantly evolving, and has more than 280 criteria.
              When a user enters a specific keyword into the search engine, Google extracts the pages they deem most relevant from their index and presents them to the user in the search results (SERP).<br/>
              The more relevant Google deems a page to the user's query, the higher its ranking will be. Google's primary focus remains delivering the highest quality results possible to the user.
              How does it assess this relevance? What are the essential criteria it takes into account? Answering these questions is the key to our work in SEO.
              </p>
            </div>
            <img 
                  src="/Content.jpg" 
                  alt="SEO" 
                  className="w-full h-full object-cover"
                />
            <h4 className="text-[20px] md:text-[32px] font-bold text-[#012C5B] leading-tight mt-10">The 5 ranking factors</h4>
            <div className="text-[#3C3C3C] text-[14px] md:text-[18px] leading-[24px] mt-5 mb-8">
              <p>No one outside of Google engineers knows all the factors in the algorithm, but it's generally accepted that five factors are paramount. These form the foundation of website optimization. If these factors are lacking, it becomes increasingly difficult to rank well in search engines.</p>
            </div>
            <img 
                  src="/image14.jpg" 
                  alt="SEO" 
                  className="w-full h-full object-cover"
                />
            <p className="text-[12px] text-[#7E7E7E] mt-2">
              Source: 
              <a href="https://elements.envato.com" className="text-[#26B3B8] underline">
                https://elements.envato.com
              </a>
            </p>
            <div className="text-[#3C3C3C] text-[14px] md:text-[18px] leading-[24px] mt-8 mb-8">
              <p>Here they are in order of importance:</p>
            </div>
            <div className="space-y-8">
              <div className="grid grid-cols-[32px_1fr] gap-6 items-start">
                <div className="flex h-[32px] w-[32px] items-center justify-center rounded-tl-none rounded-[6px] bg-[#FFF8F0]">
                  <span className="bg-gradient-to-r from-primaryTeal to-primaryOrange bg-clip-text text-transparent text-[16px] leading-[16px] font-bold">01</span>
                  </div>
                <p className="text-[#3C3C3C] text-[14px] md:text-[18px] leading-[24px]">
                  Content and primarily textual content : The quality of the content for the user, the quantity of text, the presence of keywords and the degree of interest of the page for the visitor.</p>
              </div>
              <div className="grid grid-cols-[32px_1fr] gap-6 items-start">
                <div className="flex h-[32px] w-[32px] items-center justify-center rounded-tl-none rounded-[6px] bg-[#FFF8F0]">
                  <span className="bg-gradient-to-r from-primaryTeal to-primaryOrange bg-clip-text text-transparent text-[16px] leading-[16px] font-bold">02</span>
                  </div>
                <p className="text-[#3C3C3C] text-[14px] md:text-[18px] leading-[24px]">
                  Technical structure : Is a website properly built? Is its code easily and quickly readable by search engine crawlers? Is the page structured and does it include the correct on-page tags? Are the server speed and page load speed sufficiently high? You can see here that this second point must be addressed from the very beginning of the design process for your custom website by the developer themselves.</p>
              </div>
              <div className="grid grid-cols-[32px_1fr] gap-6 items-start">
                <div className="flex h-[32px] w-[32px] items-center justify-center rounded-tl-none rounded-[6px] bg-[#FFF8F0]">
                  <span className="bg-gradient-to-r from-primaryTeal to-primaryOrange bg-clip-text text-transparent text-[16px] leading-[16px] font-bold">03</span>
                  </div>
                <p className="text-[#3C3C3C] text-[14px] md:text-[18px] leading-[24px]">
                  User signals : Google recognizes, for example, whether a user is satisfied with the search result they clicked on. This is the famous “user experience”.</p>
              </div>
              
              <div className="grid grid-cols-[32px_1fr] gap-6 items-start">
                <div className="flex h-[32px] w-[32px] items-center justify-center rounded-tl-none rounded-[6px] bg-[#FFF8F0]">
                  <span className="bg-gradient-to-r from-primaryTeal to-primaryOrange bg-clip-text text-transparent text-[16px] leading-[16px] font-bold">04</span>
                  </div>
                <p className="text-[#3C3C3C] text-[14px] md:text-[18px] leading-[24px]">
                  Backlinks : Google believes that the more external links a site has pointing to it, the more authoritative and therefore valuable it is. Note that these are high-quality links, meaning links from reputable websites that are relevant to your site's content. A link from a weather directory for your garage door sales site will be of little value.</p>
              </div>
              
              <div className="grid grid-cols-[32px_1fr] gap-6 items-start">
                <div className="flex h-[32px] w-[32px] items-center justify-center rounded-tl-none rounded-[6px] bg-[#FFF8F0]">
                  <span className="bg-gradient-to-r from-primaryTeal to-primaryOrange bg-clip-text text-transparent text-[16px] leading-[16px] font-bold">05</span>
                  </div>
                <p className="text-[#3C3C3C] text-[14px] md:text-[18px] leading-[24px]">
                  Mobile-Friendly : For over a year, Google has adopted a “mobile-first” approach, meaning that the mobile index takes precedence. Therefore, your new website must be well-adapted to mobile devices. Does it display correctly on smartphones and tablets? And most importantly, does it load quickly enough?</p>
              </div>
              
            </div>
            <div className="text-[#3C3C3C] text-[14px] md:text-[18px] leading-[24px] mt-8 mb-12">
              <p>Here too, this is a crucial point to address from the initial design phase of the site.</p>
            </div>
            <h4 className="text-[20px] md:text-[32px] font-bold text-[#012C5B] leading-tight mt-8">How exactly does SEO work?</h4>
            <div className="text-[#3C3C3C] text-[14px] md:text-[18px] leading-[24px] mt-8 mb-8">
              <p className="mb-4">A successful SEO strategy generally covers three areas: content, backlinks (Off-Page) and construction (On-Page).</p>
              <p className="mb-4">The first step in search engine optimization is to conduct an audit of the current situation. This will allow us to assess the work required. We will first ensure that the technical criteria are met and that there are no structural roadblocks.</p>
              <p className="mb-4">Next, we'll work on on-page factors such as tags and content to strengthen, in particular, the presence of relevant keywords. Once all of this is in place, we can address the backlinking strategy.</p>
              <p className="mb-4">We would like to draw your attention to the fact that SEO is a medium- to long-term endeavour, as indexing depends on the search engine's discretion and is reassessed each time the crawler visits the site. Results are only sustainable if search engine optimization is considered a long-term strategy.
              The site's content is valuable and must be regularly updated to meet the search intent of visitors.</p>
            </div>

            <div ref={revealRef5}  className="w-full bg-white py-6">
                  
                  {/* TESTIMONIAL BOX */}
                  <div className="relative w-full bg-[#00595C] rounded-[16px] overflow-hidden pt-14 pb-8 text-center">
                    {/* Background Grid Pattern (Giả lập bằng CSS hoặc SVG) */} 
                    
                    <img className="absolute top-0 left-0" alt="" src="../singlgird.png"/> 
                    

                    <div className="relative z-10 flex flex-col items-center mx-auto px-6 max-w-[720px]"> 
                      {/* Quote Icon */}
                      <div className="relative">
                          <div className="apple-reveal absolute top-[-20px] left-[-20px]">
                            <svg width="21" height="17" viewBox="0 0 21 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.70373 16.2961C3.28507 16.2961 2.1464 15.8107 1.28773 14.8401C0.429068 13.8321 -0.000265598 12.4881 -0.000265598 10.8081C-0.000265598 8.79206 0.653068 6.86939 1.95973 5.04006C3.2664 3.21072 5.24507 1.53072 7.89573 5.57899e-05L9.63173 2.01606C8.28773 3.13606 7.1304 4.20006 6.15973 5.20806C5.2264 6.17872 4.7224 7.05606 4.64773 7.84006L4.87173 8.00806C5.13307 7.78406 5.54374 7.67206 6.10374 7.67206C6.9624 7.67206 7.6904 8.04539 8.28773 8.79206C8.88507 9.53872 9.18373 10.5467 9.18373 11.8161C9.18373 13.1227 8.77307 14.2054 7.95173 15.0641C7.1304 15.8854 6.04773 16.2961 4.70373 16.2961ZM15.9037 16.2961C14.4851 16.2961 13.3464 15.8107 12.4877 14.8401C11.6291 13.8321 11.1997 12.4881 11.1997 10.8081C11.1997 8.79206 11.8531 6.86939 13.1597 5.04006C14.4664 3.21072 16.4451 1.53072 19.0957 5.57899e-05L20.8317 2.01606C19.4877 3.13606 18.3304 4.20006 17.3597 5.20806C16.4264 6.17872 15.9224 7.05606 15.8477 7.84006L16.0717 8.00806C16.3331 7.78406 16.7437 7.67206 17.3037 7.67206C18.1624 7.67206 18.8904 8.04539 19.4877 8.79206C20.0851 9.53872 20.3837 10.5467 20.3837 11.8161C20.3837 13.1227 19.9731 14.2054 19.1517 15.0641C18.3304 15.8854 17.2477 16.2961 15.9037 16.2961Z" fill="#26B3B8"/>
                            </svg> 
                          </div> 
                          {/* Testimonial Text */}
                          <blockquote className="apple-reveal text-white text-[18px] leading-[24px] md:text-[24px] md:leading-[28px] font-bold mb-10">
                            SEO is a medium- to long-term endeavour, as indexing depends on the search engine's discretion and is reassessed each time the crawler visits the site. Results are only sustainable if search engine optimization is considered a long-term strategy.
                          </blockquote>
                          <div className="apple-reveal absolute bottom-[40px] right-[-20px]">
                            <svg width="21" height="17" viewBox="0 0 21 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.92847 5.57899e-05C6.34714 5.57899e-05 7.4858 0.504056 8.34447 1.51206C9.20314 2.48272 9.63247 3.80806 9.63247 5.48806C9.63247 7.50406 8.97914 9.42672 7.67247 11.2561C6.3658 13.0854 4.38714 14.7654 1.73647 16.2961L0.00046885 14.2801C1.34447 13.1601 2.48314 12.1147 3.41647 11.1441C4.38714 10.1361 4.9098 9.24006 4.98447 8.45606L4.76047 8.28806C4.49914 8.51206 4.08847 8.62406 3.52847 8.62406C2.6698 8.62406 1.9418 8.25072 1.34447 7.50406C0.747136 6.75739 0.448469 5.74939 0.448469 4.48006C0.448469 3.17339 0.859136 2.10939 1.68047 1.28806C2.5018 0.429389 3.58447 5.57899e-05 4.92847 5.57899e-05ZM16.1285 5.57899e-05C17.5471 5.57899e-05 18.6858 0.504056 19.5445 1.51206C20.4031 2.48272 20.8325 3.80806 20.8325 5.48806C20.8325 7.50406 20.1791 9.42672 18.8725 11.2561C17.5658 13.0854 15.5871 14.7654 12.9365 16.2961L11.2005 14.2801C12.5445 13.1601 13.6831 12.1147 14.6165 11.1441C15.5871 10.1361 16.1098 9.24006 16.1845 8.45606L15.9605 8.28806C15.6991 8.51206 15.2885 8.62406 14.7285 8.62406C13.8698 8.62406 13.1418 8.25072 12.5445 7.50406C11.9471 6.75739 11.6485 5.74939 11.6485 4.48006C11.6485 3.17339 12.0591 2.10939 12.8805 1.28806C13.7018 0.429389 14.7845 5.57899e-05 16.1285 5.57899e-05Z" fill="#26B3B8"/>
                            </svg> 
                          </div>
                      </div>
                    </div>
                  </div>
            </div>
            <div class="py-6 bg-white">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">

                <div>
                  <img 
                    src="/seo.jpg" 
                    alt="" 
                    class="w-full rounded-2xl shadow-lg object-cover"
                  />

                  <p class="text-[12px] text-[#7E7E7E] mt-3">
                    Source: 
                    <a href="https://elements.envato.com" className="text-[#26B3B8] underline">
                      https://elements.envato.com
                    </a>
                  </p>
                </div>

                <div>
                  
                  <h2 class="text-[20px] md:text-[32px] font-bold text-[#012C5B] leading-[32px] md:leading-[40px] mb-6 tracking-[-1px]">
                    Work on SEO from the very beginning of website design, and then go further together.
                  </h2>

                  <div class="text-[#3C3C3C] text-[14px] md:text-[18px] leading-[24px] space-y-5">
                    
                    <p>
                      As you’ve probably gathered, for your website to rank well on Google, it’s not enough to simply have an aesthetically pleasing design and a user-friendly experience. It must meet a series of technical criteria from the outset.
                    </p>

                    <p>
                      Furthermore, its content, in terms of keywords and their placement within on-page ranking factors, is a key element of SEO.
                    </p>

                    <p>
                      At Amyma , we are passionate about SEO and we believe it is one of the foundations of our custom web development business.
                    </p>

                    <p>
                      We support you from the audit of your existing site to the continuous optimization of your site over the long term.
                    </p>

                    <p>
                      And if SEO doesn’t bring you results quickly enough, we manage SEA campaigns for you so that your site is at the top of the results. Contact us for any SEO, SEA or website creation requests.
                    </p>

                  </div>

                </div>

              </div>
              </div>
          </div>
      </section>
       
    </section>  
      <section ref={revealRef6} className="w-full bg-[#F8F9FA] py-16 lg:py-24 px-6">
        <div className="mx-auto max-w-[1440px] xl:px-[108px]">
          
          {/* HEADER */}
          <div className="flex justify-between items-end mb-12">
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