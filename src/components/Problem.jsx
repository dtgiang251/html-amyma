import { useId } from "react";

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

      <div className="relative z-10 mx-auto max-w-screen-2xl px-4 py-16 sm:px-8 sm:py-20 lg:px-16 lg:py-28 xl:px-[var(--navX,108px)]">
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-12">
          {/* Left content */}
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-3">
                <h2 className="font-dmSans text-[clamp(2.25rem,4vw,3.5rem)] font-bold leading-[1.1] text-primaryBlue">
                  Templates Don&apos;t Sell.
                </h2>
                <h3 className="font-dmSans text-[clamp(2.25rem,4vw,3.5rem)] font-bold leading-[1.1] text-primaryOrange">
                  Custom Design Does.
                </h3>
              </div>
              <p className="max-w-[44ch] font-dmSans text-[clamp(1.125rem,2vw,1.5rem)] leading-7 text-charcoalMedium">
                Too many businesses settle for cookie-cutter websites that look
                the same as everyone else&apos;s.
              </p>
            </div>

            <div className="flex flex-col gap-6">
              <div className="font-dmSans text-[clamp(1.125rem,2vw,1.5rem)] font-semibold leading-7 text-charcoal">
                Using templates creates:
              </div>
              <div className="flex flex-col gap-4">
                {bulletItems.map((label) => (
                  <div
                    key={label}
                    className="flex items-center gap-4 rounded-[0_16px_16px_16px] bg-primaryOrangeLight px-5 py-4"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-pill border-2 border-primaryOrange bg-transparent">
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
            {/* Teal diamonds */}
            <span
              aria-hidden
              className="absolute -right-1 top-20 hidden h-2 w-2 rotate-45 rounded-sm bg-primaryTeal sm:block"
            />
            <span
              aria-hidden
              className="absolute -right-1 top-32 hidden h-2 w-2 rotate-45 rounded-sm bg-primaryTeal sm:block"
            />
            <span
              aria-hidden
              className="absolute right-10 -bottom-2 hidden h-2 w-2 rotate-45 rounded-sm bg-primaryTeal sm:block"
            />
            <span
              aria-hidden
              className="absolute right-24 -bottom-2 hidden h-2 w-2 rotate-45 rounded-sm bg-primaryTeal sm:block"
            />

            <div className="relative rounded-2xl bg-primaryBlueLight p-6 sm:p-10">
              {/* Placeholder box that stays even if image is removed */}
              <div className="absolute left-1/2 top-1/2 h-[52%] w-[62%] -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-primaryBlueLight" />

              <div className="relative aspect-[5/4] w-full">
                {/* Shadow */}
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/40d65da2588bca64edad90da6325fe61c17cc129?width=1200"
                  alt=""
                  className="absolute inset-x-0 bottom-0 mx-auto w-[92%] max-w-full select-none object-contain opacity-80"
                  draggable={false}
                  loading="lazy"
                  decoding="async"
                />
                {/* Tablet mock */}
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/dc81919a5c2a5e5bcc508d2ee5cf8d4a8cabcefc?width=1200"
                  alt="Tablet mockup"
                  className="absolute inset-0 h-full w-full select-none object-contain"
                  draggable={false}
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

