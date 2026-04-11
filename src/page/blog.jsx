import React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { useEffect, useRef, useState } from "react";

export default function BlogSlider() {
  const timer = useRef();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [totalSlides, setTotalSlides] = useState(0);

  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    drag: true,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created(slider) {
      setLoaded(true);
      setTotalSlides(slider.track.details.slides.length);
    },
    renderMode: "performance",
    mode: "free-snap",
    slides: { perView: 1 },
  });

  // ✅ AUTOPLAY
  useEffect(() => {
    if (!instanceRef.current) return;

    const slider = instanceRef.current;

    const clearNextTimeout = () => clearTimeout(timer.current);
    const nextTimeout = () => {
      clearTimeout(timer.current);
      timer.current = setTimeout(() => {
        slider.next();
      }, 3000);
    };

    slider.on("created", () => {
      slider.container.addEventListener("mouseover", clearNextTimeout);
      slider.container.addEventListener("mouseout", nextTimeout);
      nextTimeout();
    });

    slider.on("dragStarted", clearNextTimeout);
    slider.on("animationEnded", nextTimeout);
    slider.on("updated", nextTimeout);

    return () => clearTimeout(timer.current);
  }, [instanceRef]);

  return (
    <div className="relative">
      <div className="py-12 md:py-24 relative">
          <div className="absolute left-0 top-0 right-0 w-full h-full">
            <img className="w-full" src="/Grid.png" alt="" />
          </div>
          <div className="relative z-10 max-w-[1264px] w-full m-auto px-5 items-start">
            <h1 className="text-[40px] md:text-[56px] font-bold text-[#012C5B]">
                Blog Name
              </h1>
              <p className="max-w-[880px] text-[#7E7E7E] text-[18px] md:text-[20px] mb-12">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. 
              </p>
              <h2 className="text-[20px] md:text-[32px] font-bold text-[#012C5B]">
                Featured blog posts
              </h2>
              <div ref={sliderRef} className="keen-slider mt-6 rounded-2xl shadow-xl border-t border-[#e5e5e55e]">
        
                  {[1, 2, 3].map((item, idx) => (
                    <div key={idx} className="keen-slider__slide">
                      <div className="grid md:grid-cols-2 bg-white rounded-xl shadow-xl overflow-hidden">
                        
                        {/* IMAGE */}
                        <div className="relative">
                          <img
                            src="/sl1.jpg"
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute right-[-1px] bottom-0">
                            <a href="#">
                              <svg width="56" height="72" viewBox="0 0 56 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path fill-rule="evenodd" clip-rule="evenodd" d="M56 8.00098L48 8.00098C52.4183 8.00098 56 4.41828 56 -6.99382e-07L56 8.00098Z" fill="white"/>
                              <path d="M0 40.001C0 22.3279 14.3269 8.00098 32 8.00098H56V72.001H0V40.001Z" fill="white"/>
                              <path d="M8 40.001C8 26.7461 18.7452 16.001 32 16.001C45.2548 16.001 56 26.7461 56 40.001C56 53.2558 45.2548 64.001 32 64.001C18.7452 64.001 8 53.2558 8 40.001Z" fill="#012C5B"/>
                              <path d="M35.4507 44.7435L37.4504 44.7435L37.4504 35.2584H27.9652V37.258H34.0364L27.2581 44.0364L28.6723 45.4506L35.4507 38.6723L35.4507 44.7435Z" fill="white"/>
                              </svg>
                            </a>
                          </div>
                        </div>

                        {/* CONTENT */}
                        <div className="p-8 flex flex-col justify-center">
                          <span className="inline-block bg-[#012C5B] text-white text-[12px] px-3 h-[24px] leading-[24px] rounded w-fit">
                            Category
                          </span>

                          <h3 className="text-[18px] md:text-[24px] leading-[28px] font-bold text-[#1C1C1C] mt-4 md:mt-10 mb-4">
                            What is SEO and why is it essential for your website?
                          </h3>

                          <p className="text-[#3C3C3C] text-[14px] md:text-[18px] leading-[24px] mb-6">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.
                          </p>
                          <p className="text-[#3C3C3C] text-[14px] md:text-[18px] leading-[24px] mb-8">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.
                          </p>

                          <div className="flex items-center text-[10px] md:text-sm text-[#3C3C3C]">
                            <span>Author</span>
                            <span className="mx-2">
                              <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                               <rect x="3.71875" y="7.96014" width="6" height="6" rx="1.26784" transform="rotate(-135 3.71875 7.96014)" fill="#FF9517"/>
                               </svg>
                            </span>
                            <span>February 16, 2023</span>
                          </div>
                        </div>

                      </div>
                    </div>
                  ))}

                </div>

                {/* NAV BUTTON */}
                {loaded && instanceRef.current && (
                  <>
                    {/* PREV */}
                    <button
                      onClick={() => instanceRef.current?.prev()}
                      className={`absolute right-20 bottom-[-80px] w-[48px] h-[48px] rounded-full flex items-center justify-center transition
                        ${
                          currentSlide === 0
                            ? "bg-[#012c5b54]"
                            : "bg-[#012C5B] hover:scale-105"
                        }`}
                    >
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M12.7069 17.293L8.41394 13H17.9999V11H8.41394L12.7069 6.70697L11.2929 5.29297L4.58594 12L11.2929 18.707L12.7069 17.293Z" fill="white"/> </svg>
                    </button>

                    {/* NEXT */}
                    <button
                      onClick={() => instanceRef.current?.next()}
                      className={`absolute right-5 bottom-[-80px] w-[48px] h-[48px] rounded-full flex items-center justify-center transition
                        ${
                          currentSlide === totalSlides - 1
                            ? "bg-[#012c5b54]"
                            : "bg-[#012C5B] hover:scale-105"
                        }`}
                    >
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.293 17.293L12.707 18.707L19.414 12L12.707 5.29297L11.293 6.70697L15.586 11H6V13H15.586L11.293 17.293Z" fill="white"/>
                    </svg>
                </button>
                  </>
                )}

                {/* DOTS */}
                {loaded && instanceRef.current && (
                  <div className="flex absolute left-5 bottom-[-50px] gap-2">
                    {[...Array(instanceRef.current.track.details.slides.length).keys()].map((idx) => (
                      <button
                        key={idx}
                        onClick={() => instanceRef.current?.moveToIdx(idx)}
                        className={`w-[48px] h-[4px]  ${
                          currentSlide === idx ? "bg-[#012C5B]" : "bg-[#012c5b54]"
                        }`}
                      />
                    ))}
                  </div>
                )}
          </div>
          <div className="relative mt-40 z-10 max-w-[920px] w-full m-auto px-5 items-start">
            <div className="grid md:grid-cols-2 bg-white rounded-xl shadow-xl border-t border-[#e5e5e55e] overflow-hidden mb-16">

              {/* CONTENT */}
              <div className="p-8 flex flex-col justify-center">
                <span className="inline-block bg-[#FF9517] text-white text-[12px] px-3 h-[24px] leading-[24px] rounded w-fit">
                  Website
                </span>

                <h3 className="text-[18px] md:text-[24px] leading-[28px] font-bold text-[#1C1C1C] mt-5 mb-4">
                  Blog Title Goes Here
                </h3>

                <p className="text-[#3C3C3C] text-[14px] md:text-[18px] leading-[24px] mb-6">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.
                </p>

                <div className="flex items-center text-[10px] md:text-sm text-[#3C3C3C]">
                  <span>Author</span>
                  <span className="mx-2">
                    <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="3.71875" y="7.96014" width="6" height="6" rx="1.26784" transform="rotate(-135 3.71875 7.96014)" fill="#FF9517"/>
                      </svg>
                  </span>
                  <span>February 16, 2023</span>
                </div>
              </div>
              <div className="relative">
                <img
                  src="/sl3.jpg"
                  className="w-full h-full object-cover"
                />
                <div className="absolute left-[-1px] bottom-0">
                  <a href="#">
                    <svg width="56" height="64" viewBox="0 0 56 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M56 32C56 14.3269 41.6731 0 24 0H0V64H56V32Z" fill="white"/>
                    <path d="M0 32C0 18.7452 10.7452 8 24 8C37.2548 8 48 18.7452 48 32C48 45.2548 37.2548 56 24 56C10.7452 56 0 45.2548 0 32Z" fill="#012C5B"/>
                    <path d="M27.4507 36.7426L29.4504 36.7426L29.4504 27.2574H19.9652V29.2571H26.0364L19.2581 36.0355L20.6723 37.4497L27.4507 30.6713L27.4507 36.7426Z" fill="white"/>
                    </svg>

                  </a>
                </div>
              </div>

            </div>
            <div className="grid md:grid-cols-2 bg-white rounded-xl shadow-xl border-t border-[#e5e5e55e] overflow-hidden mb-16">
              <div className="relative">
                <img
                  src="/sl2.jpg"
                  className="w-full h-full object-cover"
                />
                <div className="absolute right-[-1px] bottom-0">
                  <a href="#">
                    <svg width="56" height="72" viewBox="0 0 56 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M56 8.00098L48 8.00098C52.4183 8.00098 56 4.41828 56 -6.99382e-07L56 8.00098Z" fill="white"/>
                    <path d="M0 40.001C0 22.3279 14.3269 8.00098 32 8.00098H56V72.001H0V40.001Z" fill="white"/>
                    <path d="M8 40.001C8 26.7461 18.7452 16.001 32 16.001C45.2548 16.001 56 26.7461 56 40.001C56 53.2558 45.2548 64.001 32 64.001C18.7452 64.001 8 53.2558 8 40.001Z" fill="#012C5B"/>
                    <path d="M35.4507 44.7435L37.4504 44.7435L37.4504 35.2584H27.9652V37.258H34.0364L27.2581 44.0364L28.6723 45.4506L35.4507 38.6723L35.4507 44.7435Z" fill="white"/>
                    </svg>
                  </a>
                </div>
              </div>

              {/* CONTENT */}
              <div className="p-8 flex flex-col justify-center">
                <span className="inline-block bg-[#0452A6] text-white text-[12px] px-3 h-[24px] leading-[24px] rounded w-fit">
                  Digital Marketing
                </span>

                <h3 className="text-[18px] md:text-[24px] leading-[28px] font-bold text-[#1C1C1C] mt-5 mb-4">
                  Blog Title Goes Here
                </h3>

                <p className="text-[#3C3C3C] text-[14px] md:text-[18px] leading-[24px] mb-6">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.
                </p>

                <div className="flex items-center text-[10px] md:text-sm text-[#3C3C3C]">
                  <span>Author</span>
                  <span className="mx-2">
                    <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="3.71875" y="7.96014" width="6" height="6" rx="1.26784" transform="rotate(-135 3.71875 7.96014)" fill="#FF9517"/>
                      </svg>
                  </span>
                  <span>February 16, 2023</span>
                </div>
              </div>

            </div>
            <div className="grid md:grid-cols-2 bg-white rounded-xl shadow-xl border-t border-[#e5e5e55e] overflow-hidden mb-16">

              {/* CONTENT */}
              <div className="p-8 flex flex-col justify-center">
                <span className="inline-block bg-[#FF9517] text-white text-[12px] px-3 h-[24px] leading-[24px] rounded w-fit">
                  Website
                </span>

                <h3 className="text-[18px] md:text-[24px] leading-[28px] font-bold text-[#1C1C1C] mt-5 mb-4">
                  Blog Title Goes Here
                </h3>

                <p className="text-[#3C3C3C] text-[14px] md:text-[18px] leading-[24px] mb-6">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.
                </p>

                <div className="flex items-center text-[10px] md:text-sm text-[#3C3C3C]">
                  <span>Author</span>
                  <span className="mx-2">
                    <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="3.71875" y="7.96014" width="6" height="6" rx="1.26784" transform="rotate(-135 3.71875 7.96014)" fill="#FF9517"/>
                      </svg>
                  </span>
                  <span>February 16, 2023</span>
                </div>
              </div>
              <div className="relative">
                <img
                  src="/sl3.jpg"
                  className="w-full h-full object-cover"
                />
                <div className="absolute left-[-1px] bottom-0">
                  <a href="#">
                    <svg width="56" height="64" viewBox="0 0 56 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M56 32C56 14.3269 41.6731 0 24 0H0V64H56V32Z" fill="white"/>
                    <path d="M0 32C0 18.7452 10.7452 8 24 8C37.2548 8 48 18.7452 48 32C48 45.2548 37.2548 56 24 56C10.7452 56 0 45.2548 0 32Z" fill="#012C5B"/>
                    <path d="M27.4507 36.7426L29.4504 36.7426L29.4504 27.2574H19.9652V29.2571H26.0364L19.2581 36.0355L20.6723 37.4497L27.4507 30.6713L27.4507 36.7426Z" fill="white"/>
                    </svg>

                  </a>
                </div>
              </div>

            </div>
            <div className="grid md:grid-cols-2 bg-white rounded-xl shadow-xl border-t border-[#e5e5e55e] overflow-hidden mb-16">
              <div className="relative">
                <img
                  src="/sl2.jpg"
                  className="w-full h-full object-cover"
                />
                <div className="absolute right-[-1px] bottom-0">
                  <a href="#">
                    <svg width="56" height="72" viewBox="0 0 56 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M56 8.00098L48 8.00098C52.4183 8.00098 56 4.41828 56 -6.99382e-07L56 8.00098Z" fill="white"/>
                    <path d="M0 40.001C0 22.3279 14.3269 8.00098 32 8.00098H56V72.001H0V40.001Z" fill="white"/>
                    <path d="M8 40.001C8 26.7461 18.7452 16.001 32 16.001C45.2548 16.001 56 26.7461 56 40.001C56 53.2558 45.2548 64.001 32 64.001C18.7452 64.001 8 53.2558 8 40.001Z" fill="#012C5B"/>
                    <path d="M35.4507 44.7435L37.4504 44.7435L37.4504 35.2584H27.9652V37.258H34.0364L27.2581 44.0364L28.6723 45.4506L35.4507 38.6723L35.4507 44.7435Z" fill="white"/>
                    </svg>
                  </a>
                </div>
              </div>

              {/* CONTENT */}
              <div className="p-8 flex flex-col justify-center">
                <span className="inline-block bg-[#26B3B8] text-white text-[12px] px-3 h-[24px] leading-[24px] rounded w-fit">
                  App
                </span>

                <h3 className="text-[18px] md:text-[24px] leading-[28px] font-bold text-[#1C1C1C] mt-5 mb-4">
                  Blog Title Goes Here
                </h3>

                <p className="text-[#3C3C3C] text-[14px] md:text-[18px] leading-[24px] mb-6">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.
                </p>

                <div className="flex items-center text-[10px] md:text-sm text-[#3C3C3C]">
                  <span>Author</span>
                  <span className="mx-2">
                    <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="3.71875" y="7.96014" width="6" height="6" rx="1.26784" transform="rotate(-135 3.71875 7.96014)" fill="#FF9517"/>
                      </svg>
                  </span>
                  <span>February 16, 2023</span>
                </div>
              </div>

            </div>
            <div className="flex items-center justify-between mb-10">

              <a href="#" className="text-[18px] px-10 py-3 rounded-full border border-gray-300 text-[#D5D4D4] cursor-not-allowed">
                Previous
              </a>

              <div className="flex items-center gap-4 text-[18px]  font-semibold">
                <span className="w-10 h-10 flex items-center justify-center rounded-full bg-orange-500 text-white">
                  1
                </span>
                <span className="text-[#012C5B]">2</span>
              </div>

              <a href="#" className="px-12 py-3 text-[18px] rounded-full bg-[#012C5B] text-white">
                Next
              </a>

            </div>
          </div>
      </div>
    </div>
  );
}
