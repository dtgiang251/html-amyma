import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';

export default function Logos() {
  const logos = [
    "/h-adv01.png",
    "/h-adv02.png",
    "/h-adv03.png",
    "/h-adv04.png",
    "/h-adv05.png",
    "/h-adv06.png",
  ];

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-8 lg:px-16 xl:px-[var(--navX,108px)]">
        <div className="border-y border-[#D5D4D4] py-4 lg:py-6">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:gap-10">
            {/* Nội dung bên trái */}
            <div className="w-full lg:max-w-[260px] shrink-0">
              <div className="font-fustat text-[18px] font-bold leading-7 text-primaryOrange">
                Trusted
              </div>
              <div className="font-dmSans text-[16px] leading-6 text-[#7E7E7E]">
                by some of Luxembourg&apos;s finest companies
              </div>
            </div>

            {/* Slider Logo */}
            <div className="w-full flex-1 overflow-hidden">
              <Swiper
                modules={[Autoplay]}
                spaceBetween={40} // Khoảng cách giữa các logo
                slidesPerView="auto" // Tự động khớp theo chiều rộng của slide
                loop={true}
                speed={5000} // Tốc độ trôi (càng lớn càng chậm)
                autoplay={{
                  delay: 0,
                  disableOnInteraction: false,
                }}
                allowTouchMove={false} // Chế độ marquee thường không cần kéo tay
                className="logo-swiper-linear"
              >
                {logos.map((src, index) => (
                  <SwiperSlide key={index} className="!w-auto flex items-center">
                    <img
                      src={src}
                      alt={`Partner ${index}`}
                      className="h-[35px] lg:h-[50px] w-auto shrink-0 object-contain opacity-80 grayscale transition-all hover:grayscale-0 hover:opacity-100"
                      loading="lazy"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>

      {/* CSS bắt buộc để tạo hiệu ứng trôi mượt (Linear) */}
      <style jsx global>{`
        .logo-swiper-linear .swiper-wrapper {
          transition-timing-function: linear !important;
        }
      `}</style>
    </section>
  );
}