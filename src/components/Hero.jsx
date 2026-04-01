import { useId } from "react";
import heroIllustration from "../assets/hero/hero-illustration.png";

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
  <div className="relative rounded-2xl bg-[#FFF8F0] px-6 py-5 shadow-[0_10px_30px_rgba(0,0,0,0.06)]">
    <span
      aria-hidden
      className="absolute -left-1.5 top-3 h-2.5 w-2.5 rotate-45 bg-primaryOrange"
    />
    <span
      aria-hidden
      className="absolute left-1/2 -top-1.5 h-2.5 w-2.5 -translate-x-1/2 rotate-45 bg-primaryOrange"
    />
    <span
      aria-hidden
      className="absolute -right-1.5 top-1/2 h-2.5 w-2.5 -translate-y-1/2 rotate-45 bg-primaryOrange"
    />
    <div className="font-dmSans text-3xl font-bold leading-none text-primaryOrange">
      {value}
    </div>
    <div className="mt-2 whitespace-pre-line text-sm leading-5 text-gray-500">
      {label}
    </div>
  </div>
);

export default function Hero() {
  const gridId = useId();

  return (
    <section className="relative overflow-hidden bg-white">
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

      {/* Teal diamonds (top corners) */}
      <div className="pointer-events-none absolute inset-x-0 top-10 z-10 hidden sm:block">
        <div className="mx-auto max-w-screen-2xl px-4 sm:px-8 lg:px-16 xl:px-[var(--navX,108px)]">
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

      <div className="relative z-10 mx-auto max-w-screen-2xl px-4 pb-14 pt-16 sm:px-8 sm:pt-20 lg:px-16 xl:px-[var(--navX,108px)]">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-10">
          {/* Left */}
          <div>
            <div className="relative">
              <span className="pointer-events-none absolute -left-10 top-1 hidden select-none text-[52px] font-bold leading-none text-[#EAEAEA] md:block">
                &lt;
              </span>
              <span className="pointer-events-none absolute -right-10 top-1 hidden select-none text-[52px] font-bold leading-none text-[#EAEAEA] md:block">
                &gt;
              </span>

              <h1 className="font-dmSans text-[clamp(2.2rem,5vw,4rem)] font-bold leading-[1.02] text-primaryBlue">
                Built for You.
                <br />
                Designed to
              </h1>
              <div className="mt-3 font-dmSans text-[clamp(3.5rem,9vw,7.5rem)] font-extrabold leading-[0.95]">
                <span className="bg-gradient-to-r from-primaryTeal to-primaryOrange bg-clip-text text-transparent">
                  Convert.
                </span>
              </div>
            </div>

            {/* Info cards */}
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-[#EEEEEE] bg-white p-5 text-base leading-6 text-gray-500">
                Your business deserves more than a generic website.
              </div>
              <div className="rounded-xl border border-[#EEEEEE] bg-white p-5 text-base leading-6 text-gray-500">
                At Amyma, we create fully custom digital solutions that are
                designed to sell, persuade, and grow.
              </div>
            </div>

            {/* CTAs */}
            <div className="mt-7 flex flex-col gap-4 sm:flex-row">
              <button className="rounded-pill bg-primaryBlue px-7 py-3 text-base font-semibold text-white shadow-subtle transition-colors hover:bg-[#023772]">
                Book a free consultation
              </button>
              <button className="rounded-pill border border-charcoal bg-white px-7 py-3 text-base font-semibold text-charcoal transition-colors hover:bg-gray-50">
                Explore our work
              </button>
            </div>
          </div>

          {/* Right */}
          <div className="relative mx-auto w-full max-w-[680px]">
            {/* Illustration */}
            <div className="relative aspect-[640/652] w-full">
              <img
                src={heroIllustration}
                alt="Laptop and phone mockup"
                className="absolute inset-0 h-full w-full select-none object-contain"
                draggable={false}
              />

              {/* Stats overlay (desktop/tablet) */}
              <div className="pointer-events-none absolute -bottom-10 right-0 hidden w-full max-w-[520px] grid-cols-2 gap-6 sm:grid">
                {stats.map((s) => (
                  <StatCard key={s.label} value={s.value} label={s.label} />
                ))}
              </div>
            </div>

            {/* Stats (mobile) */}
            <div className="mt-8 grid grid-cols-2 gap-4 sm:hidden">
              {stats.map((s) => (
                <StatCard key={s.label} value={s.value} label={s.label} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
