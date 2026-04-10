import { useId } from "react";
import { useReveal } from "../hooks/useReveal";

const XIcon = ({ className = "h-6 w-6 text-primaryOrange" }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden
  >
    <path
      d="M16.192 6.344 11.95 10.586 7.707 6.344 6.293 7.758 10.535 12l-4.242 4.242 1.414 1.414L11.95 13.414l4.242 4.242 1.414-1.414L13.364 12l4.242-4.242-1.414-1.414Z"
      fill="currentColor"
    />
  </svg>
);

const bulletItems = [
  "Confused visitors",
  "Missed opportunities",
  "A digital presence that fails to convert",
];

export default function Problem() {
 const gridId = useId();
  const revealRef = useReveal();

  return (
    <section ref={revealRef} className="relative overflow-hidden bg-white">
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

      <div className="relative z-10 mx-auto max-w-[1440px] px-6 py-16 sm:px-8 sm:py-20 lg:px-16 lg:py-[108px] xl:px-[var(--navX,108px)]">
        <img className="absolute top-0 left-0 right-0 m-auto" alt="" src="/bg-section-02.svg"/>
        <div className="relative z-10 grid items-start gap-12 md:grid-cols-2 lg:gap-12">
          {/* Left content */}
          <div className="flex flex-col gap-12">
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-3">
                <h2 className="apple-reveal font-dmSans text-[40px] leading-[48px] md:text-[56px] md:leading-[64px] font-bold tracking-[-2px] text-primaryBlue animate-hero-title">
                  Templates Don&apos;t Sell.
                </h2>
                <h3 className="apple-reveal delay-200 font-dmSans text-[40px] leading-[48px] md:text-[56px] md:leading-[64px] font-bold text-primaryOrange -mt-2.5 tracking-[-2px] animate-hero-title">
                  Custom Design Does.
                </h3>
              </div>
              <p className="apple-reveal delay-400 lg:max-w-[44ch] font-dmSans text-[clamp(1.125rem,2vw,1.5rem)] leading-7 text-charcoalMedium">
                Too many businesses settle for cookie-cutter websites that look
                the same as everyone else&apos;s.
              </p>
            </div>

            <div className="apple-reveal delay-500 flex flex-col gap-6">
              <div className="font-dmSans text-[clamp(1.125rem,2vw,1.5rem)] font-semibold leading-7 text-charcoal">
                Using templates creates:
              </div>
              <div className="flex flex-col gap-6 flow-wrap"> 
                {bulletItems.map((label) => (
                  <div
                    key={label}
                    className="flex items-center self-start gap-4 rounded-[0_16px_16px_16px] bg-primaryOrangeLight px-5 py-[18.5px]"
                  >
                    <div className="flex h-8 w-8 items-center justify-center rounded-pill border-2 border-primaryOrange bg-transparent">
                      <XIcon className="h-6 w-6 text-primaryOrange" />
                    </div>
                    <div className="font-dmSans text-[clamp(1.05rem,2vw,1.5rem)] leading-7 text-black">
                      {label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right visual */}
          <div className="relative mx-auto w-full max-w-[640px]"> 
            <div className="relative rounded-2xl px-6 sm:px-10"> 
              <div className="relative aspect-[5/4] w-full">
                 <img className="apple-reveal animate-hero-float" alt="" src="/h-img02.png"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

