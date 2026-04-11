import React from "react";

export default function BlogSlider() {
  return (
    <div className="relative">
      <div className="py-12 md:py-24 relative">
          <div className="absolute left-0 top-0 right-0 w-full h-full">
            <img className="w-full" src="/Grid.png" alt="" />
          </div>
          <div className="relative z-10 max-w-[1264px] w-full m-auto px-5 items-start">
            <div class="relative flex items-center justify-between">
              <div>
                <h1 class="text-[40px] md:text-[56px] font-bold text-[#012C5B]">
                  Manuel2Fix
                </h1>
                <div class="flex items-center gap-3 mt-3 flex-wrap">
                  <span class="text-[#7E7E7E] text-[16px]">
                    Rental Industry
                  </span>

                  <span class="text-[#7E7E7E]">|</span>

                  <span class="px-3 py-1 text-[12px] bg-[#26B3B8] text-white rounded">
                    App
                  </span>
                  <span class="px-3 py-1 text-[12px] bg-[#FF9517] text-white rounded">
                    UI
                  </span>
                  <span class="px-3 py-1 text-[12px] bg-gray-200 text-[#1C1C1C] rounded">
                    UX
                  </span>
                  <span class="px-3 py-1 text-[12px] bg-gray-800 text-white rounded">
                    Hosting
                  </span>
                </div>
              </div>
              <div class="hidden md:block">
                <img src="/M2.png" alt="" class="w-[140px] md:w-[180px]" />
              </div>
            </div>
            <div class="relative z-10 grid md:grid-cols-2 gap-2 items-center py-16">
              <div class="relative flex justify-center md:justify-start">
                <img 
                  src="/w1.png" 
                  class="relative z-10"
                  alt=""
                />
              </div>
              <div>
                <h2 class="text-[24px] md:text-[40px] font-bold text-[#012C5B] mb-6">
                  The App Idea
                </h2>
                <p class="text-[#3C3C3C] text-[14px] md:text-[18px] leading-[20px] md:leading-[24px] mb-6">
                  Mi tincidunt elit, id quisque ligula ac diam, amet. Vel etiam suspendisse morbi eleifend faucibus eget vestibulum felis. Dictum quis montes, sit sit. Tellus aliquam etiam. Mauris posuere vulputate arcu amet, vitae nisi, tellus tincidunt. At feugiat sapien varius id.
                </p>

                <p class="text-[#3C3C3C] text-[14px] md:text-[18px] leading-[20px] md:leading-[24px]">
                  Mi tincidunt elit, id quisque ligula ac diam, amet. Vel etiam suspendisse morbi eleifend faucibus eget vestibulum felis. Dictum quis montes, sit sit. Tellus aliquam enim urna, etiam. 
                  </p>
              </div>

            </div>
          </div>
      </div>

      <div className="py-8 md:py-16 relative bg-[#F6F6F6]">
          <div className="absolute left-0 top-0 right-0 w-full h-full">
            <img className="w-full" src="/bg-sv.png" alt="" />
          </div>
          <div className="relative z-10 max-w-[1264px] w-full m-auto px-5 items-start">
            <div className="relative z-10 grid md:grid-cols-2 gap-2 items-center">
              <div>
                <h2 className="text-[24px] md:text-[40px] font-bold text-[#012C5B] mb-6">
                  The Objective
                </h2>
                <p className="text-[#3C3C3C] text-[14px] md:text-[18px] leading-[20px] md:leading-[24px] mb-6">
                  Mi tincidunt elit, id quisque ligula ac diam, amet. Vel etiam suspendisse morbi eleifend faucibus eget vestibulum felis. Dictum quis montes, sit sit. Tellus aliquam enim urna, etiam. Mauris posuere vulputate arcu amet, vitae nisi, tellus tincidunt. At feugiat sapien varius id.
                </p>
              </div>
              <div className="relative flex justify-center md:justify-start">
                <img 
                  src="/Galaxy.png" 
                  className="relative z-10"
                  alt=""
                />
              </div>
            </div>
          </div>
      </div>

      <section className="py-10 md:py-20 relative">

        <div className="absolute left-0 top-0 right-0 w-full h-full">
            <img className="w-full" src="/Grid-bg.png" alt="" />
          </div>

        <div className="relative z-10 max-w-[1264px] w-full m-auto px-5 items-start">

          <div className="grid md:grid-cols-[30%_70%] gap-10 mb-12 items-start">
            
            <h2 className="text-[24px] md:text-[40px] font-bold text-[#012C5B]">
              The Solution
            </h2>

            <div className="text-[#3C3C3C] text-[16px] md:text-[20px] leading-[28px] space-y-6">
              <p>
                Mi tincidunt elit, id quisque ligula ac diam, amet. Vel etiam suspendisse morbi eleifend faucibus eget vestibulum felis. Dictum quis montes, sit sit. Tellus aliquam enim urna, etiam. Mauris posuere vulputate arcu amet, vitae nisi, tellus tincidunt.
              </p>

              <p>
                Mi tincidunt elit, id quisque ligula ac diam, amet. Vel etiam suspendisse morbi eleifend faucibus eget vestibulum felis. Dictum quis montes, sit sit. Tellus aliquam enim urna, etiam. Mauris posuere vulputate arcu amet, vitae nisi, tellus tincidunt. At feugiat sapien varius id.
              </p>
            </div>

          </div>

          <div className="rounded-2xl overflow-hidden shadow-xl">
            <img 
              src="/solu.jpg"  alt="" className="w-full h-full object-cover"
            />
          </div>

        </div>
      </section>

      <section className="py-8 md:py-16 relative  bg-[#fff]">
        <div className="relative z-10 max-w-[1264px] w-full m-auto px-5 grid grid-cols-2 gap-6 items-center">
          <img src="/image1.jpg"  alt="" className="" />
          <img src="/image2.jpg"  alt="" className="" />
          <img src="/image4.png"  alt="" className="" />
          <img src="/image3.jpg"  alt="" className="" />
        </div>
      </section>
    </div>
  );
}
