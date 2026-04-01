const logos = [
  {
    src: "https://api.builder.io/api/v1/image/assets/TEMP/017f2a713e3e4a1d7bc4b05c8d7e33a8d37aa02c?width=276",
    alt: "Client logo 1",
  },
  {
    src: "https://api.builder.io/api/v1/image/assets/TEMP/f3f9c5f541f81fb0a3fafb21bb0f2d32a7caa5ba?width=276",
    alt: "Client logo 2",
  },
  {
    src: "https://api.builder.io/api/v1/image/assets/TEMP/223d979cf3a3b87cffbf6bb33f69e558befb6a1e?width=276",
    alt: "Client logo 3",
  },
  {
    src: "https://api.builder.io/api/v1/image/assets/TEMP/a0aec7389b59c267fe9e6cb147a75e605ac97963?width=276",
    alt: "Client logo 4",
  },
];

const LogoRow = ({ className = "", ...props }) => (
  <div
    className={`flex items-center gap-7 sm:gap-9 lg:gap-[34px] ${className}`}
    {...props}
  >
    {logos.map((logo) => (
      <img
        key={logo.src}
        src={logo.src}
        alt={logo.alt}
        className="h-[54px] w-[138px] shrink-0 object-contain opacity-80 grayscale"
        loading="lazy"
        decoding="async"
      />
    ))}
  </div>
);

export default function Logos() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-screen-2xl px-4 sm:px-8 lg:px-16 xl:px-[var(--navX,108px)]">
        <div className="border-y border-[#D5D4D4] py-6">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:gap-10">
            <div className="w-full max-w-[260px]">
              <div className="font-fustat text-[18px] font-bold leading-7 text-primaryOrange">
                Trusted
              </div>
              <div className="mt-2 font-dmSans text-[16px] leading-6 text-[#7E7E7E]">
                by some of Luxembourg&apos;s finest companies
              </div>
            </div>

            <div className="relative flex-1 overflow-hidden">
              <div className="pointer-events-none absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-white to-transparent" />
              <div className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-white to-transparent" />

              <div className="overflow-x-auto">
                <div className="flex min-w-max items-center gap-10 py-1 pr-6">
                  {/* First pass */}
                  <LogoRow />
                  {/* Repeat to match the overflowing strip look */}
                  <LogoRow aria-hidden className="opacity-70" />
                  <LogoRow aria-hidden className="opacity-60" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
