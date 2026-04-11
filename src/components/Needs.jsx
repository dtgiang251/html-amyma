import { useId } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

// Import CSS (Bắt buộc phải có để slider hiển thị đúng)
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import 'swiper/css';
import { useReveal } from "../hooks/useReveal";

const IconDevices = ({ className = "h-10 w-10" }) => {
  const gradientId = useId();
  return (
    <svg
      className={className}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M6.66634 28.3334V10.0001C6.66634 9.08341 6.99301 8.29897 7.64634 7.64675C8.29856 6.99341 9.08301 6.66675 9.99967 6.66675H33.333C33.8052 6.66675 34.2008 6.82619 34.5197 7.14508C34.8397 7.46508 34.9997 7.86119 34.9997 8.33341C34.9997 8.80564 34.8397 9.20175 34.5197 9.52175C34.2008 9.84064 33.8052 10.0001 33.333 10.0001H9.99967V28.3334H17.4997C18.1941 28.3334 18.7841 28.5767 19.2697 29.0634C19.7563 29.549 19.9997 30.139 19.9997 30.8334C19.9997 31.5279 19.7563 32.1179 19.2697 32.6034C18.7841 33.0901 18.1941 33.3334 17.4997 33.3334H5.83301C5.13856 33.3334 4.54856 33.0901 4.06301 32.6034C3.57634 32.1179 3.33301 31.5279 3.33301 30.8334C3.33301 30.139 3.57634 29.549 4.06301 29.0634C4.54856 28.5767 5.13856 28.3334 5.83301 28.3334H6.66634ZM24.9997 33.3334C24.5275 33.3334 24.1319 33.1734 23.813 32.8534C23.493 32.5345 23.333 32.139 23.333 31.6667V15.0001C23.333 14.5279 23.493 14.1317 23.813 13.8117C24.1319 13.4929 24.5275 13.3334 24.9997 13.3334H34.9997C35.4719 13.3334 35.8675 13.4929 36.1863 13.8117C36.5063 14.1317 36.6663 14.5279 36.6663 15.0001V31.6667C36.6663 32.139 36.5063 32.5345 36.1863 32.8534C35.8675 33.1734 35.4719 33.3334 34.9997 33.3334H24.9997ZM26.6663 28.3334H33.333V16.6667H26.6663V28.3334Z"
        fill={`url(#${gradientId})`}
      />
      <defs>
        <linearGradient
          id={gradientId}
          x1="24.1506"
          y1="43.3011"
          x2="-1.53336"
          y2="32.8362"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FF9517" />
          <stop offset="1" stopColor="#26B3B8" />
        </linearGradient>
      </defs>
    </svg>
  );
};

const IconPeople = ({ className = "h-10 w-10" }) => {
  const gradientId = useId();
  return (
    <svg
      className={className}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M7.4 20.9702L3.025 16.6548C2.675 16.3095 2.5 15.9067 2.5 15.4464C2.5 14.9861 2.675 14.5833 3.025 14.2381L7.4 9.92262C7.75 9.57738 8.15833 9.40476 8.625 9.40476C9.09167 9.40476 9.5 9.57738 9.85 9.92262L14.225 14.2381C14.575 14.5833 14.75 14.9861 14.75 15.4464C14.75 15.9067 14.575 16.3095 14.225 16.6548L9.85 20.9702C9.5 21.3155 9.09167 21.4881 8.625 21.4881C8.15833 21.4881 7.75 21.3155 7.4 20.9702ZM16.5 38.75C16.0042 38.75 15.5885 38.5846 15.2531 38.2537C14.9177 37.9229 14.75 37.5129 14.75 37.0238V30.119C13.2917 30.004 11.8479 29.8457 10.4187 29.6443C8.98958 29.443 7.56042 29.184 6.13125 28.8676C5.63542 28.7525 5.23438 28.4792 4.92812 28.0476C4.62188 27.6161 4.54167 27.1558 4.6875 26.6667C4.83333 26.1776 5.13229 25.818 5.58437 25.5878C6.03646 25.3576 6.51042 25.3001 7.00625 25.4152C9.13542 25.9043 11.2865 26.2351 13.4594 26.4077C15.6323 26.5804 17.8125 26.6667 20 26.6667C22.1875 26.6667 24.3677 26.5804 26.5406 26.4077C28.7135 26.2351 30.8646 25.9043 32.9937 25.4152C33.4896 25.3001 33.9635 25.3576 34.4156 25.5878C34.8677 25.818 35.1667 26.1776 35.3125 26.6667C35.4583 27.1558 35.3781 27.6161 35.0719 28.0476C34.7656 28.4792 34.3646 28.7525 33.8687 28.8676C32.4396 29.184 31.0104 29.443 29.5812 29.6443C28.1521 29.8457 26.7083 30.004 25.25 30.119V37.0238C25.25 37.5129 25.0823 37.9229 24.7469 38.2537C24.4115 38.5846 23.9958 38.75 23.5 38.75H16.5ZM20 12.8571C18.5417 12.8571 17.3021 12.3537 16.2812 11.3467C15.2604 10.3398 14.75 9.11706 14.75 7.67857C14.75 6.24008 15.2604 5.01736 16.2812 4.01042C17.3021 3.00347 18.5417 2.5 20 2.5C21.4583 2.5 22.6979 3.00347 23.7188 4.01042C24.7396 5.01736 25.25 6.24008 25.25 7.67857C25.25 9.11706 24.7396 10.3398 23.7188 11.3467C22.6979 12.3537 21.4583 12.8571 20 12.8571ZM20 24.9405C19.0375 24.9405 18.2135 24.6024 17.5281 23.9263C16.8427 23.2502 16.5 22.4375 16.5 21.4881C16.5 20.5387 16.8427 19.7259 17.5281 19.0499C18.2135 18.3738 19.0375 18.0357 20 18.0357C20.9625 18.0357 21.7865 18.3738 22.4719 19.0499C23.1573 19.7259 23.5 20.5387 23.5 21.4881C23.5 22.4375 23.1573 23.2502 22.4719 23.9263C21.7865 24.6024 20.9625 24.9405 20 24.9405ZM28.3562 20.625L26.3438 17.1726C26.1979 16.9137 26.125 16.626 26.125 16.3095C26.125 15.9931 26.1979 15.7054 26.3438 15.4464L28.3562 11.994C28.5021 11.7063 28.7062 11.4906 28.9688 11.3467C29.2312 11.2029 29.5229 11.131 29.8438 11.131H33.7812C34.1021 11.131 34.3937 11.2029 34.6562 11.3467C34.9188 11.4906 35.1229 11.7063 35.2687 11.994L37.2812 15.4464C37.4271 15.7054 37.5 15.9931 37.5 16.3095C37.5 16.626 37.4271 16.9137 37.2812 17.1726L35.2687 20.625C35.1229 20.9127 34.9188 21.1285 34.6562 21.2723C34.3937 21.4162 34.1021 21.4881 33.7812 21.4881H29.8438C29.5229 21.4881 29.2312 21.4162 28.9688 21.2723C28.7062 21.1285 28.5021 20.9127 28.3562 20.625Z"
        fill={`url(#${gradientId})`}
      />
      <defs>
        <linearGradient
          id={gradientId}
          x1="24.3585"
          y1="52.2998"
          x2="-4.25287"
          y2="43.2953"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FF9517" />
          <stop offset="1" stopColor="#26B3B8" />
        </linearGradient>
      </defs>
    </svg>
  );
};

const IconKpi = ({ className = "h-10 w-10" }) => {
  const gradientId = useId();
  return (
    <svg
      className={className}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M6.24967 32.9167C5.88856 32.5556 5.70801 32.1389 5.70801 31.6667C5.70801 31.1944 5.88856 30.7778 6.24967 30.4167L16.333 20.3333C16.4997 20.1667 16.6802 20.0483 16.8747 19.9783C17.0691 19.9094 17.2775 19.875 17.4997 19.875C17.7219 19.875 17.9302 19.9094 18.1247 19.9783C18.3191 20.0483 18.4997 20.1667 18.6663 20.3333L24.1663 25.8333L34.833 13.8333C35.1386 13.4722 35.5347 13.2917 36.0213 13.2917C36.5069 13.2917 36.9163 13.4583 37.2497 13.7917C37.5552 14.0972 37.7152 14.4656 37.7297 14.8967C37.743 15.3267 37.5969 15.7083 37.2913 16.0417L25.333 29.5C25.1663 29.6944 24.9791 29.84 24.7713 29.9367C24.5625 30.0344 24.3469 30.0833 24.1247 30.0833C23.9025 30.0833 23.6875 30.0417 23.4797 29.9583C23.2708 29.875 23.083 29.75 22.9163 29.5833L17.4997 24.1667L8.74967 32.9167C8.38856 33.2778 7.9719 33.4583 7.49967 33.4583C7.02745 33.4583 6.61079 33.2778 6.24967 32.9167ZM6.66634 22.1667C6.52745 22.1667 6.38856 22.1317 6.24967 22.0617C6.11079 21.9928 5.99967 21.875 5.91634 21.7083L5.08301 19.9167L3.29134 19.0833C3.12467 19 3.0069 18.8889 2.93801 18.75C2.86801 18.6111 2.83301 18.4722 2.83301 18.3333C2.83301 18.1944 2.86801 18.0556 2.93801 17.9167C3.0069 17.7778 3.12467 17.6667 3.29134 17.5833L5.08301 16.75L5.91634 14.9583C5.99967 14.7917 6.11079 14.6733 6.24967 14.6033C6.38856 14.5344 6.52745 14.5 6.66634 14.5C6.80523 14.5 6.94412 14.5344 7.08301 14.6033C7.2219 14.6733 7.33301 14.7917 7.41634 14.9583L8.24967 16.75L10.0413 17.5833C10.3469 17.7222 10.4997 17.9722 10.4997 18.3333C10.4997 18.6944 10.3469 18.9444 10.0413 19.0833L8.24967 19.9167L7.41634 21.7083C7.33301 21.875 7.2219 21.9928 7.08301 22.0617C6.94412 22.1317 6.80523 22.1667 6.66634 22.1667ZM24.9997 18.8333C24.8608 18.8333 24.7219 18.7983 24.583 18.7283C24.4441 18.6594 24.333 18.5417 24.2497 18.375L23.4163 16.5833L21.6247 15.75C21.458 15.6667 21.3402 15.5556 21.2713 15.4167C21.2013 15.2778 21.1663 15.1389 21.1663 15C21.1663 14.8611 21.2013 14.7222 21.2713 14.5833C21.3402 14.4444 21.458 14.3333 21.6247 14.25L23.4163 13.4167L24.2497 11.625C24.333 11.4583 24.4441 11.34 24.583 11.27C24.7219 11.2011 24.8608 11.1667 24.9997 11.1667C25.1386 11.1667 25.2775 11.2011 25.4163 11.27C25.5552 11.34 25.6663 11.4583 25.7497 11.625L26.583 13.4167L28.3747 14.25C28.5413 14.3333 28.6597 14.4444 28.7297 14.5833C28.7986 14.7222 28.833 14.8611 28.833 15C28.833 15.1389 28.7986 15.2778 28.7297 15.4167C28.6597 15.5556 28.5413 15.6667 28.3747 15.75L26.583 16.5833L25.7497 18.375C25.6663 18.5417 25.5552 18.6594 25.4163 18.7283C25.2775 18.7983 25.1386 18.8333 24.9997 18.8333ZM14.1663 13.8333C14.0275 13.8333 13.8886 13.7917 13.7497 13.7083C13.6108 13.625 13.4997 13.5 13.4163 13.3333L12.333 11L9.99968 9.91667C9.83301 9.83333 9.70801 9.72222 9.62467 9.58333C9.54134 9.44444 9.49967 9.30556 9.49967 9.16667C9.49967 9.02778 9.54134 8.88889 9.62467 8.75C9.70801 8.61111 9.83301 8.5 9.99968 8.41667L12.333 7.33333L13.4163 5C13.4997 4.83333 13.6108 4.70833 13.7497 4.625C13.8886 4.54167 14.0275 4.5 14.1663 4.5C14.3052 4.5 14.4441 4.54167 14.583 4.625C14.7219 4.70833 14.833 4.83333 14.9163 5L15.9997 7.33333L18.333 8.41667C18.4997 8.5 18.6247 8.61111 18.708 8.75C18.7913 8.88889 18.833 9.02778 18.833 9.16667C18.833 9.30556 18.7913 9.44444 18.708 9.58333C18.6247 9.72222 18.4997 9.83333 18.333 9.91667L15.9997 11L14.9163 13.3333C14.833 13.5 14.7219 13.625 14.583 13.7083C14.4441 13.7917 14.3052 13.8333 14.1663 13.8333Z"
        fill={`url(#${gradientId})`}
      />
      <defs>
        <linearGradient
          id={gradientId}
          x1="24.6275"
          y1="44.2826"
          x2="-2.53458"
          y2="33.6131"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FF9517" />
          <stop offset="1" stopColor="#26B3B8" />
        </linearGradient>
      </defs>
    </svg>
  );
};

const features = [
  {
    title: "Brand Focus",
    description: "A platform that's crafted around your brand and needs.",
    Icon: IconDevices,
  },
  {
    title: "Customer Focus",
    description:
      "Content that speaks directly to your customers and solves their pain points.",
    Icon: IconPeople,
  },
  {
    title: "KPI Driven\nDesign",
    description: "Results that you can measure.",
    Icon: IconKpi,
  },
];

const TealDiamond = ({ className = "" }) => (
  <span
    aria-hidden
    className={`absolute h-2 w-2 rotate-45 rounded-sm bg-primaryTeal ${className}`}
  />
);

export default function Needs() {
  const gridId = useId();
  const revealRef = useReveal();

  return (
    <>
    <div ref={revealRef}>
    <section className="relative overflow-hidden bg-white">
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
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-12">
          {/* Left: image */}
          <div className="hidden lg:block relative mx-auto w-full lg:col-span-5">
            
            <div className="relative rounded-2xl">
              <img
                src="/h-img03.png"
                alt="Laptop mockup"
                className="apple-reveal animate-hero-float mx-auto w-full max-w-[560px] select-none object-contain drop-shadow-[0_28px_40px_rgba(0,0,0,0.12)]"
                draggable={false}
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>

          {/* Right: content */}
          <div className="relative lg:col-span-7"> 
            <h2 className="apple-reveal font-dmSans text-[40px] leading-[48px] md:text-[56px] md:leading-[64px] font-bold text-primaryBlue tracking-[-2px]">
              You don&apos;t need{" "}
              <span className="text-primaryOrange">"just another website."</span>
            </h2>

            <div className="apple-reveal delay-200 mt-10 font-dmSans text-2xl font-semibold leading-7 text-charcoal">
              You need:
            </div>

            <div className="apple-reveal delay-300 mt-8 grid gap-10 sm:grid-cols-3 lg:grid-cols-3">
              {features.map(({ title, description, Icon }) => (
                <div key={title} className="flex flex-col items-start gap-4">
                  <div className="rounded-[0_16px_16px_16px] bg-primaryOrangeLight p-4 w-[69px] h-[69px]">
                    <Icon className="" />
                  </div>
                  <div className="font-dmSans text-2xl font-bold leading-7 text-charcoal whitespace-pre-line">
                    {title}
                  </div>
                  <div className="font-dmSans text-lg leading-6 text-[#3C3C3C]">
                    {description}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
{/* <div className="absolute -top-4 -left-4">*/}
    <section className="">
      <div className="relative z-10 mx-auto max-w-[1440px] px-6 py-8 sm:px-8 md:py-16 lg:px-16 lg:py-[108px] xl:px-[var(--navX,108px)]">
        
        {/* Header Section */}
        <div className="">
          <h2 className="apple-reveal font-dmSans text-[40px] leading-[48px] md:text-[56px] md:leading-[64px] font-bold tracking-[-2px] text-primaryBlue mb-3">
            Let Us be Your <span className="text-[#FF8A00]">Digital Partner in Luxembourg</span>
          </h2>
          <div className="max-w-[700px] mb-10">
            <p className="apple-reveal delay-200 text-[clamp(1.125rem,2vw,1.5rem)] text-[#7E7E7E]">
              For over 20 years, we've been helping businesses and institutions in Luxembourg 
              turn ideas into high-performing websites and apps.
            </p>
          </div>
        </div>

        {/* Values/Features Section */}
        <div className="mb-12">
          <p className="apple-reveal delay-300 font-semibold text-[#1C1C1C] mb-8 text-[clamp(1.125rem,2vw,1.5rem)]">We don't believe in shortcuts. Every project is:</p>
          
          <div className="apple-reveal delay-400 grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Unique */}
            <div className="flex items-center gap-7">
              <div className="bg-[#FFF8F0] rounded-tl-none rounded-3xl flex-shrink-0">
                <div className="w-[80px] h-[80px] lg:w-[124px] lg:h-[124px] p-[16px] lg:p-[26px] flex items-center justify-center text-center">
                  <svg width="78" height="78" viewBox="0 0 78 78" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M71.9476 44.7884C68.8234 47.9126 63.7581 47.9126 60.6339 44.7884C57.5097 41.6642 57.5097 36.5989 60.6339 33.4747C63.7581 30.3505 68.8234 30.3505 71.9476 33.4747C75.0718 36.5989 75.0718 41.6643 71.9476 44.7884Z" fill="url(#paint0_linear_552_72220)"/>
                  <path d="M44.3156 17.1569C41.1914 20.281 36.1261 20.281 33.0019 17.1569C29.8777 14.0327 29.8777 8.96734 33.0019 5.84314C36.1261 2.71895 41.1914 2.71895 44.3156 5.84315C47.4398 8.96734 47.4398 14.0327 44.3156 17.1569Z" stroke="url(#paint1_linear_552_72220)" stroke-width="7"/>
                  <path d="M71.9476 44.7884C68.8234 47.9126 63.7581 47.9126 60.6339 44.7884C57.5097 41.6642 57.5097 36.5989 60.6339 33.4747C63.7581 30.3505 68.8234 30.3505 71.9476 33.4747C75.0718 36.5989 75.0718 41.6643 71.9476 44.7884Z" stroke="url(#paint2_linear_552_72220)" stroke-width="7"/>
                  <path d="M17.1569 44.3155C14.0327 47.4397 8.96734 47.4397 5.84315 44.3155C2.71895 41.1913 2.71895 36.126 5.84315 33.0018C8.96734 29.8776 14.0327 29.8776 17.1569 33.0018C20.281 36.126 20.281 41.1914 17.1569 44.3155Z" stroke="url(#paint3_linear_552_72220)" stroke-width="7"/>
                  <path d="M44.7887 71.9471C41.6645 75.0713 36.5992 75.0713 33.475 71.9471C30.3508 68.8229 30.3508 63.7576 33.475 60.6334C36.5992 57.5092 41.6645 57.5092 44.7887 60.6334C47.9129 63.7576 47.9129 68.8229 44.7887 71.9471Z" stroke="url(#paint4_linear_552_72220)" stroke-width="7"/>
                  <defs>
                  <linearGradient id="paint0_linear_552_72220" x1="47.7108" y1="100.751" x2="-9.78154" y2="82.0105" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#FF9517"/>
                  <stop offset="1" stop-color="#26B3B8"/>
                  </linearGradient>
                  <linearGradient id="paint1_linear_552_72220" x1="47.7108" y1="100.751" x2="-9.78154" y2="82.0105" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#FF9517"/>
                  <stop offset="1" stop-color="#26B3B8"/>
                  </linearGradient>
                  <linearGradient id="paint2_linear_552_72220" x1="47.7108" y1="100.751" x2="-9.78154" y2="82.0105" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#FF9517"/>
                  <stop offset="1" stop-color="#26B3B8"/>
                  </linearGradient>
                  <linearGradient id="paint3_linear_552_72220" x1="47.7108" y1="100.751" x2="-9.78154" y2="82.0105" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#FF9517"/>
                  <stop offset="1" stop-color="#26B3B8"/>
                  </linearGradient>
                  <linearGradient id="paint4_linear_552_72220" x1="47.7108" y1="100.751" x2="-9.78154" y2="82.0105" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#FF9517"/>
                  <stop offset="1" stop-color="#26B3B8"/>
                  </linearGradient>
                  </defs>
                  </svg>

                </div>
              </div>
              <div>
                <h4 className="font-dmSans text-[clamp(1.125rem,2vw,1.5rem)] font-bold leading-7 text-charcoal whitespace-pre-line mb-3">Unique</h4>
                <p className="font-dmSans text-lg leading-6 text-[#3C3C3C]">Designed from scratch.</p>
              </div>
            </div>

            {/* Hand-coded */}
            <div className="flex items-center gap-7">
              <div className="bg-[#FFF8F0] rounded-tl-none rounded-3xl flex-shrink-0">
                <div className="w-[80px] h-[80px] lg:w-[124px] lg:h-[124px] p-[16px] lg:p-[26px] flex items-center justify-center text-center">
                  <svg width="75" height="74" viewBox="0 0 75 74" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.0623 9.47278C16.0623 13.1122 13.1119 16.0625 9.47253 16.0625C5.83313 16.0625 2.88281 13.1122 2.88281 9.47278C2.88281 5.83337 5.83313 2.88306 9.47254 2.88306C13.1119 2.88306 16.0623 5.83338 16.0623 9.47278Z" stroke="url(#paint0_linear_552_72227)" stroke-width="5.76601"/>
                  <path d="M43.8055 9.47278C43.8055 13.1122 40.8552 16.0625 37.2158 16.0625C33.5764 16.0625 30.6261 13.1122 30.6261 9.47278C30.6261 5.83337 33.5764 2.88306 37.2158 2.88306C40.8552 2.88306 43.8055 5.83338 43.8055 9.47278Z" stroke="url(#paint1_linear_552_72227)" stroke-width="5.76601"/>
                  <path d="M71.5488 9.47278C71.5488 13.1122 68.5985 16.0625 64.9591 16.0625C61.3197 16.0625 58.3694 13.1122 58.3694 9.47278C58.3694 5.83337 61.3197 2.88306 64.9591 2.88306C68.5985 2.88306 71.5488 5.83338 71.5488 9.47278Z" stroke="url(#paint2_linear_552_72227)" stroke-width="5.76601"/>
                  <path d="M16.0623 36.9407C16.0623 40.5801 13.1119 43.5304 9.47253 43.5304C5.83313 43.5304 2.88281 40.5801 2.88281 36.9407C2.88281 33.3013 5.83313 30.351 9.47254 30.351C13.1119 30.351 16.0623 33.3013 16.0623 36.9407Z" stroke="url(#paint3_linear_552_72227)" stroke-width="5.76601"/>
                  <path d="M43.8055 36.9407C43.8055 40.5801 40.8552 43.5304 37.2158 43.5304C33.5764 43.5304 30.6261 40.5801 30.6261 36.9407C30.6261 33.3013 33.5764 30.351 37.2158 30.351C40.8552 30.351 43.8055 33.3013 43.8055 36.9407Z" stroke="url(#paint4_linear_552_72227)" stroke-width="5.76601"/>
                  <path d="M71.5488 36.9407C71.5488 40.5801 68.5985 43.5304 64.9591 43.5304C61.3197 43.5304 58.3694 40.5801 58.3694 36.9407C58.3694 33.3013 61.3197 30.351 64.9591 30.351C68.5985 30.351 71.5488 33.3013 71.5488 36.9407Z" stroke="url(#paint5_linear_552_72227)" stroke-width="5.76601"/>
                  <path d="M16.0623 64.4086C16.0623 68.048 13.1119 70.9983 9.47253 70.9983C5.83313 70.9983 2.88281 68.048 2.88281 64.4086C2.88281 60.7692 5.83313 57.8189 9.47254 57.8189C13.1119 57.8189 16.0623 60.7692 16.0623 64.4086Z" stroke="url(#paint6_linear_552_72227)" stroke-width="5.76601"/>
                  <path d="M43.8055 64.4086C43.8055 68.048 40.8552 70.9983 37.2158 70.9983C33.5764 70.9983 30.6261 68.048 30.6261 64.4086C30.6261 60.7692 33.5764 57.8189 37.2158 57.8189C40.8552 57.8189 43.8055 60.7692 43.8055 64.4086Z" stroke="url(#paint7_linear_552_72227)" stroke-width="5.76601"/>
                  <path d="M71.5488 64.4086C71.5488 68.048 68.5985 70.9983 64.9591 70.9983C61.3197 70.9983 58.3694 68.048 58.3694 64.4086C58.3694 60.7692 61.3197 57.8189 64.9591 57.8189C68.5985 57.8189 71.5488 60.7692 71.5488 64.4086Z" stroke="url(#paint8_linear_552_72227)" stroke-width="5.76601"/>
                  <defs>
                  <linearGradient id="paint0_linear_552_72227" x1="45.7667" y1="96.4589" x2="-9.91333" y2="78.1628" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#FF9517"/>
                  <stop offset="1" stop-color="#26B3B8"/>
                  </linearGradient>
                  <linearGradient id="paint1_linear_552_72227" x1="45.7667" y1="96.4589" x2="-9.91333" y2="78.1628" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#FF9517"/>
                  <stop offset="1" stop-color="#26B3B8"/>
                  </linearGradient>
                  <linearGradient id="paint2_linear_552_72227" x1="45.7667" y1="96.4589" x2="-9.91333" y2="78.1628" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#FF9517"/>
                  <stop offset="1" stop-color="#26B3B8"/>
                  </linearGradient>
                  <linearGradient id="paint3_linear_552_72227" x1="45.7667" y1="96.4589" x2="-9.91333" y2="78.1628" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#FF9517"/>
                  <stop offset="1" stop-color="#26B3B8"/>
                  </linearGradient>
                  <linearGradient id="paint4_linear_552_72227" x1="45.7667" y1="96.4589" x2="-9.91333" y2="78.1628" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#FF9517"/>
                  <stop offset="1" stop-color="#26B3B8"/>
                  </linearGradient>
                  <linearGradient id="paint5_linear_552_72227" x1="45.7667" y1="96.4589" x2="-9.91333" y2="78.1628" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#FF9517"/>
                  <stop offset="1" stop-color="#26B3B8"/>
                  </linearGradient>
                  <linearGradient id="paint6_linear_552_72227" x1="45.7667" y1="96.4589" x2="-9.91333" y2="78.1628" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#FF9517"/>
                  <stop offset="1" stop-color="#26B3B8"/>
                  </linearGradient>
                  <linearGradient id="paint7_linear_552_72227" x1="45.7667" y1="96.4589" x2="-9.91333" y2="78.1628" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#FF9517"/>
                  <stop offset="1" stop-color="#26B3B8"/>
                  </linearGradient>
                  <linearGradient id="paint8_linear_552_72227" x1="45.7667" y1="96.4589" x2="-9.91333" y2="78.1628" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#FF9517"/>
                  <stop offset="1" stop-color="#26B3B8"/>
                  </linearGradient>
                  </defs>
                  </svg>

                </div>
              </div>
              <div>
                <h4 className="font-dmSans text-[clamp(1.125rem,2vw,1.5rem)] font-bold leading-7 text-charcoal whitespace-pre-line mb-3">Hand-coded</h4>
                <p className="font-dmSans text-lg leading-6 text-[#3C3C3C]">with clean, future-proof technology</p>
              </div>
            </div>

            {/* Built collaboratively */}
            <div className="flex items-center gap-7">
              <div className="bg-[#FFF8F0] rounded-tl-none rounded-3xl flex-shrink-0">
                <div className="w-[80px] h-[80px] lg:w-[124px] lg:h-[124px] p-[16px] lg:p-[26px] flex items-center justify-center text-center">
                   <svg width="78" height="78" viewBox="0 0 78 78" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M74.6748 38.6751C74.6748 42.0518 71.9374 44.7892 68.5607 44.7892C65.1839 44.7892 62.4465 42.0518 62.4465 38.6751C62.4465 35.2983 65.1839 32.5609 68.5607 32.5609C71.9374 32.5609 74.6748 35.2983 74.6748 38.6751Z" stroke="url(#paint0_linear_552_72235)" stroke-width="5.34986"/>
                    <path d="M14.9031 38.6751C14.9031 42.0518 12.1657 44.7892 8.78893 44.7892C5.41219 44.7892 2.6748 42.0518 2.6748 38.6751C2.67481 35.2983 5.41219 32.5609 8.78893 32.5609C12.1657 32.5609 14.9031 35.2983 14.9031 38.6751Z" stroke="url(#paint1_linear_552_72235)" stroke-width="5.34986"/>
                    <path d="M38.6766 74.675C35.2998 74.675 32.5624 71.9376 32.5624 68.5609C32.5624 65.1842 35.2998 62.4468 38.6766 62.4468C42.0533 62.4468 44.7907 65.1842 44.7907 68.5609C44.7907 71.9376 42.0533 74.675 38.6766 74.675Z" stroke="url(#paint2_linear_552_72235)" stroke-width="5.34986"/>
                    <path d="M38.6766 14.9033C35.2998 14.9033 32.5624 12.1659 32.5624 8.78918C32.5624 5.41244 35.2998 2.67505 38.6766 2.67505C42.0533 2.67505 44.7907 5.41244 44.7907 8.78918C44.7907 12.1659 42.0533 14.9033 38.6766 14.9033Z" stroke="url(#paint3_linear_552_72235)" stroke-width="5.34986"/>
                    <path d="M64.1301 64.1313C61.7424 66.519 57.8711 66.519 55.4834 64.1313C53.0957 61.7436 53.0957 57.8723 55.4834 55.4846C57.8711 53.0969 61.7424 53.0969 64.1301 55.4846C66.5178 57.8723 66.5178 61.7436 64.1301 64.1313Z" stroke="url(#paint4_linear_552_72235)" stroke-width="5.34986"/>
                    <path d="M21.8651 21.8663C19.4774 24.254 15.6061 24.254 13.2184 21.8663C10.8307 19.4786 10.8307 15.6073 13.2184 13.2196C15.6061 10.8319 19.4774 10.8319 21.8651 13.2196C24.2528 15.6073 24.2528 19.4786 21.8651 21.8663Z" stroke="url(#paint5_linear_552_72235)" stroke-width="5.34986"/>
                    <path d="M13.2197 64.1326C10.832 61.7449 10.832 57.8737 13.2197 55.4859C15.6074 53.0982 19.4787 53.0982 21.8664 55.4859C24.2541 57.8737 24.2541 61.7449 21.8664 64.1326C19.4787 66.5203 15.6074 66.5203 13.2197 64.1326Z" stroke="url(#paint6_linear_552_72235)" stroke-width="5.34986"/>
                    <path d="M55.4847 21.8676C53.097 19.4799 53.097 15.6087 55.4847 13.2209C57.8724 10.8332 61.7437 10.8332 64.1314 13.221C66.5191 15.6087 66.5191 19.4799 64.1314 21.8676C61.7437 24.2553 57.8724 24.2553 55.4847 21.8676Z" stroke="url(#paint7_linear_552_72235)" stroke-width="5.34986"/>
                    <path d="M44.5348 38.6751C44.5348 42.0518 41.7974 44.7892 38.4207 44.7892C35.0439 44.7892 32.3065 42.0518 32.3065 38.6751C32.3065 35.2983 35.0439 32.5609 38.4207 32.5609C41.7974 32.5609 44.5348 35.2983 44.5348 38.6751Z" stroke="url(#paint8_linear_552_72235)" stroke-width="5.34986"/>
                    <defs>
                    <linearGradient id="paint0_linear_552_72235" x1="47.6408" y1="101.588" x2="-10.8337" y2="82.5274" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#FF9517"/>
                    <stop offset="1" stop-color="#26B3B8"/>
                    </linearGradient>
                    <linearGradient id="paint1_linear_552_72235" x1="47.6408" y1="101.588" x2="-10.8337" y2="82.5274" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#FF9517"/>
                    <stop offset="1" stop-color="#26B3B8"/>
                    </linearGradient>
                    <linearGradient id="paint2_linear_552_72235" x1="47.6408" y1="101.588" x2="-10.8337" y2="82.5274" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#FF9517"/>
                    <stop offset="1" stop-color="#26B3B8"/>
                    </linearGradient>
                    <linearGradient id="paint3_linear_552_72235" x1="47.6408" y1="101.588" x2="-10.8337" y2="82.5274" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#FF9517"/>
                    <stop offset="1" stop-color="#26B3B8"/>
                    </linearGradient>
                    <linearGradient id="paint4_linear_552_72235" x1="47.6408" y1="101.588" x2="-10.8337" y2="82.5274" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#FF9517"/>
                    <stop offset="1" stop-color="#26B3B8"/>
                    </linearGradient>
                    <linearGradient id="paint5_linear_552_72235" x1="47.6408" y1="101.588" x2="-10.8337" y2="82.5274" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#FF9517"/>
                    <stop offset="1" stop-color="#26B3B8"/>
                    </linearGradient>
                    <linearGradient id="paint6_linear_552_72235" x1="47.6408" y1="101.588" x2="-10.8337" y2="82.5274" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#FF9517"/>
                    <stop offset="1" stop-color="#26B3B8"/>
                    </linearGradient>
                    <linearGradient id="paint7_linear_552_72235" x1="47.6408" y1="101.588" x2="-10.8337" y2="82.5274" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#FF9517"/>
                    <stop offset="1" stop-color="#26B3B8"/>
                    </linearGradient>
                    <linearGradient id="paint8_linear_552_72235" x1="47.6408" y1="101.588" x2="-10.8337" y2="82.5274" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#FF9517"/>
                    <stop offset="1" stop-color="#26B3B8"/>
                    </linearGradient>
                    </defs>
                    </svg>

                </div>
              </div>
              <div>
                <h4 className="font-dmSans text-[clamp(1.125rem,2vw,1.5rem)] font-bold leading-7 text-charcoal whitespace-pre-line mb-3">Built collaboratively</h4>
                <p className="font-dmSans text-lg leading-6 text-[#3C3C3C]">with you at the center</p>
              </div>
            </div>
          </div>
        </div>

        {/* Partner Description & Button */}
        <div className="mb-14">
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
              
{/* <div className="absolute -top-4 -left-4">*/}
     <section className="relative overflow-hidden bg-[#F6F6F6]">
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
{/* <div className="absolute -top-4 -left-4">*/}
      <section className="relative overflow-hidden bg-white"> 
        {/* Background Grid Pattern */}
        <img className="absolute top-0 left-0 right-0 m-auto" alt="" src="/bg-section-02.svg"/>
        <div className="pointer-events-none absolute inset-0 z-0 select-none opacity-30">
          <svg className="h-full w-full" aria-hidden>
            <defs>
              <pattern id="gains-grid" width="44" height="44" patternUnits="userSpaceOnUse">
                <path d="M 44 0 L 0 0 0 44" fill="none" stroke="#EAEAEA" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#gains-grid)" />
          </svg>
        </div>

        <div className="relative z-10 mx-auto max-w-[1440px] px-6 py-8 sm:px-8 md:py-16 lg:px-16 lg:py-[100px] xl:px-[var(--navX,108px)]">
          
          {/* Header Section */}
          <div className="mb-5 lg:mb-10">
            <h2 className="apple-reveal font-dmSans text-[40px] leading-[48px] md:text-[56px] md:leading-[64px] font-bold text-primaryBlue tracking-[-2px]">
              What You Gain With Amyma
            </h2>
          </div>

          {/* Benefits Grid - 4 Columns */}
          <div className="apple-reveal delay-200 grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            
            {/* Card 1 - A premium design */}
            <div className="p-[2px] rounded-[8px] bg-gradient-to-l from-[#D5D4D4] to-[#FF9517]">
              <div className="group relative flex flex-col items-start bg-white p-7 rounded-[6px] h-full">
                <div className="mb-6 flex h-[69px] w-20 items-center justify-center rounded-tl-none rounded-2xl bg-[#FFF8F0]">
                  <div className="grid grid-cols-3 gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#00A99D]"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-[#FF8A00]"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-[#00A99D]"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-[#FF8A00]"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-[#00A99D]"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-[#FF8A00]"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-[#00A99D]"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-[#FF8A00]"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-[#00A99D]"></div>
                  </div>
                </div>
                <h4 className="font-dmSans text-[18px] leading-[24px] lg:text-[24px] lg:leading-[28px] font-bold text-charcoal mb-2">
                  A premium design
                </h4>
                <p className="font-dmSans text-sm leading-[20px] lg:text-lg lg:leading-6 text-[#3C3C3C]">
                  that builds instant trust.
                </p>
              </div>
            </div>

            {/* Card 2 - Clear messaging */}
            <div className="p-[2px] rounded-[8px] bg-gradient-to-l from-[#D5D4D4] to-[#FF9517]">
              <div className="group relative flex flex-col items-start bg-white p-7 rounded-[6px] h-full">
                <div className="mb-6 flex h-[69px] w-20 items-center justify-center rounded-tl-none rounded-2xl bg-[#FFF8F0]">
                  <div className="relative w-10 h-10 flex items-center justify-center">
                    <div className="absolute inset-0 border-[3px] border-[#FF8A00] rounded-full"></div>
                    <div className="w-5 h-5 bg-[#00A99D] rounded-full"></div>
                  </div>
                </div>
                <h4 className="font-dmSans text-[18px] leading-[24px] lg:text-[24px] lg:leading-[28px] font-bold text-charcoal mb-2">
                  Clear messaging
                </h4>
                <p className="font-dmSans text-sm leading-[20px] lg:text-lg lg:leading-6 text-[#3C3C3C]">
                  that persuades and sells.
                </p>
              </div>
            </div>

            {/* Card 3 - High-performance website */}
            <div className="p-[2px] rounded-[8px] bg-gradient-to-l from-[#D5D4D4] to-[#FF9517]">
              <div className="group relative flex flex-col items-start bg-white p-7 rounded-[6px] h-full">
                <div className="mb-6 flex h-[69px] w-20 items-center justify-center rounded-tl-none rounded-2xl bg-[#FFF8F0]">
                  <div className="flex flex-col gap-1.5 items-center">
                    <div className="w-2.5 h-2.5 bg-[#00A99D] rounded-full"></div>
                    <div className="flex gap-1.5">
                      <div className="w-2.5 h-2.5 bg-[#FF8A00] rounded-full"></div>
                      <div className="w-2.5 h-2.5 bg-[#00A99D] rounded-full"></div>
                    </div>
                    <div className="flex gap-1.5">
                      <div className="w-2.5 h-2.5 bg-[#FF8A00] rounded-full"></div>
                      <div className="w-2.5 h-2.5 bg-[#FF8A00] rounded-full"></div>
                      <div className="w-2.5 h-2.5 bg-[#FF8A00] rounded-full"></div>
                    </div>
                  </div>
                </div>
                <h4 className="font-dmSans text-[18px] leading-[24px] lg:text-[24px] lg:leading-[28px] font-bold text-charcoal mb-2 whitespace-pre-line">
                  A high-performance{"\n"}website
                </h4>
                <p className="font-dmSans text-sm leading-[20px] lg:text-lg lg:leading-6 text-[#3C3C3C]">
                  that drives conversions
                </p>
              </div>
            </div>

            {/* Card 4 - Government Funding */}
            <div className="p-[2px] rounded-[8px] bg-gradient-to-l from-[#D5D4D4] to-[#FF9517]"> 
              <div className="group relative flex flex-col items-start bg-white p-7 rounded-[6px] h-full">
                <div className="mb-6 flex h-[69px] w-20 items-center justify-center rounded-tl-none rounded-2xl bg-[#FFF8F0]">
                  <div className="grid grid-cols-3 gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#00A99D]"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-[#FF8A00]"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-primaryBlue"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-[#FF8A00]"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-[#FF8A00]"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-primaryBlue"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-[#00A99D]"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-[#00A99D]"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-[#00A99D]"></div>
                  </div>
                </div>
                <h4 className="font-dmSans text-[18px] leading-[24px] lg:text-[24px] lg:leading-[28px] font-bold text-charcoal mb-2 whitespace-pre-line">
                  Guidance on{"\n"}Government Funding
                </h4>
                <p className="font-dmSans text-sm leading-[20px] lg:text-lg lg:leading-6 text-[#3C3C3C]">
                  Secure up to 70% government funding for your project
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>            
{/* <div className="absolute -top-4 -left-4">*/}
      <section className="relative overflow-hidden bg-[#0056B3] py-12"> 
        <img className="absolute top-0 left-0 right-0 m-auto w-full h-full" alt="" src="/bg-section-03.svg"/>
         <div className="relative z-10 mx-auto max-w-[1440px] px-6 sm:px-8 lg:px-16 xl:px-[var(--navX,108px)]">
          <div className="flex flex-col items-center gap-16 lg:flex-row">
            
            {/* Phone Mockups Section */}
            <div className="relative w-full max-w-[350px] lg:w-1/2"> 
              <img className="apple-reveal animate-hero-float" alt="" src="/h-img07.png"/>
            </div>

            {/* Content Section */}
            <div className="w-full text-center lg:text-left">
              <h2 className="apple-reveal delay-200 font-dmSans text-[32px] leading-[32px] lg:text-[48px] lg:leading-[48px] font-bold text-white tracking-[-2px]">
                <span className="text-primaryOrange">Ready to</span> Start Your Project?
              </h2>
              
              <p className="apple-reveal delay-300 font-dmSans text-lg leading-[24px] lg:text-2xl lg:leading-[28px] text-white">
                Your vision deserves more than a template. Let's craft a tailor-made digital solution that truly works.
              </p>

              <div className="apple-reveal delay-400 mt-5 sm:flex flex-wrap items-center justify-center gap-6 lg:justify-start">
                <button className="mb-6 sm:mb-0 w-full sm:w-auto rounded-full bg-[#001D3D] px-10 py-3 font-bold text-white transition-all hover:bg-[#002B5B] hover:shadow-xl active:scale-95">
                  Get a free consultation
                </button>
                
                <button className="w-full sm:w-auto rounded-full border-2 border-white px-10 py-3 font-bold text-white transition-all hover:bg-white hover:text-primaryBlue active:scale-95">
                  Contact
                </button>
              </div>
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
    </section>      

{/* <div className="absolute -top-4 -left-4">*/}        
       <section className="relative overflow-hidden bg-[#F6F6F6]">
          {/* Background Grid Pattern cho toàn bộ section */}
          <div className="pointer-events-none absolute inset-0 z-0 select-none opacity-30">
            <svg className="h-full w-full" aria-hidden>
              <defs>
                <pattern id="results-grid" width="44" height="44" patternUnits="userSpaceOnUse">
                  <path d="M 44 0 L 0 0 0 44" fill="none" stroke="#EAEAEA" strokeWidth="1" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#results-grid)" />
            </svg>
          </div>

          <div className="relative z-10 mx-auto max-w-[1440px] px-6 pb-5 py-8 sm:px-8 md:py-16 lg:px-16 lg:pb-14 lg:py-[95px] xl:px-[var(--navX,108px)]">
            
            {/* Header Section */}
            <div className="md:flex md:flex-row md:items-start justify-between mb-5 lg:mb-10">
              <div className="max-w-[700px]">
                <h2 className="apple-reveal font-dmSans text-[40px] leading-[48px] md:text-[56px] md:leading-[64px] font-bold text-primaryBlue tracking-[-2px] mb-4">
                  Designs That Drive <span className="text-primaryOrange">Results</span>
                </h2>
                <p className="apple-reveal delay-200 max-w-[700px] font-dmSans text-lg leading-[24px] lg:text-2xl lg:leading-[28px] text-[#7E7E7E]">
                  From local SMEs to institutions, we've crafted websites that tell stories, persuade customers, and deliver results.
                </p>
              </div>
              <button className="apple-reveal delay-300 mt-8 md:mt-3 bg-primaryBlue text-white px-8 py-3 rounded-full font-bold hover:bg-[#001f41] transition-all shrink-0">
                Explore our work
              </button>
            </div>

            <p className="apple-reveal delay-400 font-dmSans text-lg leading-6 lg:text-2xl lg:leading-7 font-semibold text-charcoal mb-8">Our featured projects:</p>

            {/* Featured Project Card */}
            <div className="relative bg-white rounded-[8px] p-8 lg:py-14 lg:px-16 shadow-[0_10px_50px_rgba(0,0,0,0.05)] border border-gray-100 overflow-hidden">
              
              {/* Grid background riêng cho Card (như trong ảnh) */}
              <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
                <svg width="100%" height="100%"><rect width="100%" height="100%" fill="url(#results-grid)" /></svg>
              </div>

              <div className="relative z-10 flex flex-col-reverse gap-4 md:gap-12 items-start lg:grid lg:grid-cols-2">
                
                {/* Project Info */}
                <div className="flex flex-col items-start">
                  <h3 className="apple-reveal font-dmSans text-[32px] leading-10 font-bold text-charcoal mb-2">Hallo Handwierk</h3>
                  
                  <div className="apple-reveal delay-200 flex gap-2 mb-4">
                    <span className="bg-primaryOrange text-white px-3 py-1 rounded-md text-sm font-medium">Website</span>
                    <span className="bg-[#F2F2F2] text-[#666] px-3 py-1 rounded-md text-sm font-medium">UX</span>
                    <span className="bg-[#F2F2F2] text-[#666] px-3 py-1 rounded-md text-sm font-medium">UI</span>
                  </div>

                  <div className="apple-reveal delay-300 text-primaryOrange text-xl font-bold mb-4">
                    +40% <span className="text-[#1C1C1C] font-normal">qualified leads in 3 months</span>
                  </div>

                  <div className="apple-reveal delay-300 space-y-4 font-dmSans text-base leading-5 text-[#7E7E7E] mb-10">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
                  </div>

                  <button className="apple-reveal delay-400 bg-primaryBlue text-white px-8 py-3 rounded-full font-bold hover:shadow-lg transition-all">
                    See the results
                  </button>
                </div>

                {/* Project Image Mockups */}
                <div className="relative flex flex-col gap-6 w-full">
                  {/* Main Large Mockup */}
                  <div className="rounded-lg overflow-hidden" style={{ background: "linear-gradient(0deg, rgba(185, 118, 226, 0.05), rgba(185, 118, 226, 0.05)), #FFFFFF" }}>
                    <img src="/h-img08.png" alt="Hallo Handwierk App" className="w-full h-auto" />
                  </div>
                  
                  {/* Small Gallery Mockups */}
                  <div className="grid grid-cols-3 gap-4">
                    <div className="rounded-lg overflow-hidden mb-4" style={{ background: "linear-gradient(0deg, rgba(185, 118, 226, 0.05), rgba(185, 118, 226, 0.05)), #FFFFFF" }}>
                        <img src="/h-img09.png" alt="Screen 1" className="w-full h-auto" />
                    </div>
                    <div className="rounded-lg overflow-hidden mb-4" style={{ background: "linear-gradient(0deg, rgba(185, 118, 226, 0.05), rgba(185, 118, 226, 0.05)), #FFFFFF" }}>
                        <img src="/h-img10.png" alt="Screen 2" className="w-full h-auto" />
                    </div>
                    <div className="rounded-lg overflow-hidden" style={{ background: "linear-gradient(0deg, rgba(185, 118, 226, 0.05), rgba(185, 118, 226, 0.05)), #FFFFFF" }}>
                        <img src="/h-img11.png" alt="Screen 3" className="w-full h-auto" />
                    </div>
                  </div>
                </div>

              </div>
            </div> 
          </div>

          <div className="relative max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-16 pb-8 md:pb-16 lg:pb-[108px] xl:px-[var(--navX,108px)]">
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
                        <img className="absolute top-0 left-0 w-full h-full object-cover" alt="" src="./bg-line-small.svg" />
                        <img className="absolute top-0 left-0 w-full h-full object-cover" alt="" src="./dot.svg" />
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
      <section className="relative overflow-hidden bg-[#ffffff]">  
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
              Services
            </h2>
          </div>

          {/* Benefits Grid */}
          <div className="apple-reveal delay-200 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ld:gap-8">
            
            {/* Cấu trúc Card chung */}
            {[
              { 
                title: "Web Design", 
                desc: "Each layout is crafted to reflect your brand across all devices.", 
                icon: "< >", 
                bgColor: "bg-[#FFF8F0]", 
                iconColor: "text-[#FF9517]",
                borderColor: "border-orange-400/50"
              },
              { 
                title: "Apps", 
                desc: "Your ideas, turned into powerful apps that feel effortless to use.", 
                icon: "}", 
                bgColor: "bg-[#F0FBFA]", 
                iconColor: "text-[#29B6B6]",
                borderColor: "border-teal-400/30"
              },
              { 
                title: "Digital Marketing", 
                desc: "We help your brand get noticed with SEO, SEA and Social Ads.", 
                icon: "*", 
                bgColor: "bg-[#F0F7FF]", 
                iconColor: "text-[#002B5B]",
                borderColor: "border-blue-400/30"
              },
              { 
                title: "Hosting", 
                desc: "Reliable, secure hosting managed by our own team.", 
                icon: "//", 
                bgColor: "bg-[#F4F4F4]", 
                iconColor: "text-[#7E7E7E]",
                borderColor: "border-gray-400/50"
              }
            ].map((item, idx) => (
              <div key={idx} className={`p-[1px] rounded-[8px] border ${item.borderColor} bg-white shadow-sm`}>
                <div className="flex flex-col items-start p-7 h-full">
                  
                  {/* 2. Sửa Icon - Background bo góc nhẹ và màu sắc theo thiết kế */}
                  <div className={`mb-4 flex h-[69px] w-[69px] items-center justify-center rounded-tl-none rounded-2xl ${item.bgColor}`}>
                    <span className={`font-mono text-2xl font-bold ${item.iconColor}`}>
                      {item.icon}
                    </span>
                  </div>

                  <h4 className="font-dmSans text-2xl font-bold text-[#1C1C1C] mb-2">
                    {item.title}
                  </h4>
                  
                  <p className="font-dmSans text-lg leading-[24px] text-[#3C3C3C] mb-6">
                    {item.desc}
                  </p>

                  {/* 3. Sửa "Explore more" - Căn lề dưới, icon mũi tên đúng kiểu */}
                  <button className="mt-auto flex items-center gap-2 font-dmSans text-lg font-bold text-primaryBlue hover:text-primaryOrange transition-colors group">
                    Explore more 
                    <svg 
                      className="w-5 h-5 transition-transform group-hover:translate-x-1" 
                      fill="none" stroke="currentColor" viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>   

      <section className="bg-[#F8F9FA] py-8 md:py-16 lg:py-24 overflow-hidden">
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

  {/* aaaaaaaaaaaaaaaaa */}    
      <section className="bg-[#F8F9FA] pt-14">
      <div className="relative bg-[#0056B3] pb-[65px] py-14"> 
        <img className="absolute top-0 left-0 right-0 m-auto w-full h-full" alt="" src="/bg-section-03.svg"/>
         <div className="relative z-10 mx-auto max-w-[1440px] px-6 sm:px-8 lg:px-16 xl:px-[var(--navX,108px)]">
          <div className="flex flex-col items-center gap-10 md:flex-row">
            
            <div className="text-left max-w-[885px] w-full">
              <h2 className="apple-reveal font-dmSans text-[40px] leading-[48px] md:text-[56px] md:leading-[64px] font-bold text-white tracking-[-2px]">
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
    </div>  


</>

  );
}

