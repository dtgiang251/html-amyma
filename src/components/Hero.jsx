import { useId } from "react";
import { useReveal } from "../hooks/useReveal";

const stats = [
  { value: "20+", label: "Years\nExperience" },
  { value: "+43%", label: "Conversion\nUplift" },
  { value: "99%", label: "Satisfied\nclients" },
  { value: "?+", label: "Projects" },
];

const Diamond = ({ className }) => (
  <span
    aria-hidden
    className={`absolute h-2 w-2 rotate-45 bg-primaryTeal ${className}`}
  />
);

const StatCard = ({ value, label }) => (
  <div className="relative rounded-2xl bg-[#FFF8F0] px-6 py-5 shadow-[0_10px_30px_rgba(0,0,0,0.06)] even:mt-[70px]">
    <span aria-hidden className="absolute -left-1.5 top-3 h-2.5 w-2.5 rotate-45 bg-primaryOrange" />
    <span aria-hidden className="absolute left-1/2 -top-1.5 h-2.5 w-2.5 -translate-x-1/2 rotate-45 bg-primaryOrange" />
    <span aria-hidden className="absolute -right-1.5 top-1/2 h-2.5 w-2.5 -translate-y-1/2 rotate-45 bg-primaryOrange" />
    <div className="font-dmSans text-3xl font-bold leading-none text-primaryOrange">{value}</div>
    <div className="mt-2 whitespace-pre-line text-sm leading-5 text-gray-500">{label}</div>
  </div>
);

export default function Hero() {
  const gridId = useId();
  const revealRef = useReveal();

  return (
    <section ref={revealRef} className="relative overflow-hidden bg-white">
      <img className="absolute top-0 left-0 right-0 m-auto" alt="" src="/bg-section-01.svg" />
      
      {/* Background grid */}
      <div className="pointer-events-none absolute inset-0 z-0 select-none opacity-60">
        <svg className="h-full w-full" aria-hidden="true">
          <defs>
            <pattern id={gridId} width="44" height="44" patternUnits="userSpaceOnUse">
              <path d="M 44 0 L 0 0 0 44" fill="none" stroke="#EFEFEF" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill={`url(#${gridId})`} />
        </svg>
      </div>

      {/* Diamonds */}
      <div className="pointer-events-none absolute inset-x-0 top-10 z-10 hidden sm:block">
        <div className="mx-auto max-w-[1440px] px-6 sm:px-8 lg:px-16 xl:px-[var(--navX,108px)]">
          <div className="relative h-6">
            <Diamond className="left-0 top-2" />
            <Diamond className="left-14 top-2" />
            <Diamond className="left-28 top-2" />
            <Diamond className="right-28 top-2" />
            <Diamond className="right-14 top-2" />
            <Diamond className="right-0 top-2" />
          </div>
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-[1440px] px-6 pb-8 pt-5 sm:px-8 lg:px-16 xl:px-[var(--navX,108px)]">
        <div className="grid items-center grid-cols-12 md:gap-10">
          {/* Left Content */}
          <div className="pl-0 md:pl-10 col-span-12 md:col-span-6 relative z-10"> 
            <div className="relative">
              <span className="pointer-events-none absolute -left-10 top-1 hidden select-none text-[52px] font-bold leading-none text-[#EAEAEA] md:block">
                &lt;
              </span>
              <span className="pointer-events-none absolute -right-10 top-1 hidden select-none text-[52px] font-bold leading-none text-[#EAEAEA] md:block">
                &gt;
              </span>

              <h1 className="font-dmSans text-[40px] md:text-[48px] md:leading-[58px] lg:text-[80px] lg:leading-[70px] font-semibold text-primaryBlue tracking-[-2.5px] mt-10 apple-reveal">
                Built for You.
                <span className="ml-[60px] lg:ml-[110px] block apple-reveal delay-200">Designed to</span>
              </h1>
              <div className="font-dmSans text-[75px] md:text-[90px] lg:text-[152px] font-extrabold leading-[100px] mt-[-15px] apple-reveal delay-300">
                <span className="bg-gradient-to-r from-primaryTeal to-primaryOrange bg-clip-text text-transparent tracking-[-2.8px]">
                  Convert.
                </span>
              </div>
            </div>

            <div className="mt-10 flex apple-reveal delay-500">
              <div className="max-w-[207px] rounded-xl bg-white p-4 text-2xl leading-6 text-[#7E7E7E]">
                Your business deserves more than a generic website.
              </div>
              <div className="max-w-[334px] rounded-xl bg-white p-4 text-lg leading-6 text-[#7E7E7E] mt-14">
                At Amyma, we create fully custom digital solutions that are designed to sell, persuade, and grow.
              </div>
            </div>

            <div className="mt-14 flex flex-col gap-4 lg:flex-row apple-reveal delay-700">
              <button className="w-full sm:max-w-[260px] rounded-pill bg-primaryBlue px-7 py-[10.5px] text-base font-semibold text-white shadow-subtle transition-colors hover:bg-[#023772]">
                Book a free consultation
              </button>
              <button className="w-full sm:max-w-[260px] rounded-pill border border-charcoal bg-white px-7 py-[10.5px] text-base font-semibold text-charcoal transition-colors hover:bg-gray-50">
                Explore our work
              </button>
            </div>
          </div>

          {/* Right Content */}
          <div className="relative mx-auto w-full col-span-12 md:col-span-6 mt-5 sm:mt-0">
            <div className="relative">
              <img
                src="h-img01.png"
                alt="Laptop and phone mockup"
                className="h-full w-full select-none object-contain z-10 animate-hero-float"
                draggable="false"
              />

              <div className="box-number w-full max-w-[520px] grid-cols-4 gap-6 grid items-start apple-reveal delay-500">
                {stats.map((s) => (
                  <StatCard key={s.label} value={s.value} label={s.label} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}