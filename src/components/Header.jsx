const navItems = [
  { label: "About", active: true },
  { label: "Services", hasDropdown: true },
  { label: "Our Work" },
  { label: "Resources", hasDropdown: true },
  { label: "Blog" },
];

const ChevronDown = ({ className = "w-4 h-4 text-charcoal" }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden
  >
    <path
      d="M16.293 8.293 12 12.586 7.707 8.293 6.293 9.707 12 15.414l5.707-5.707L16.293 8.293Z"
      fill="currentColor"
    />
  </svg>
);

const RightArrow = ({ className = "w-5 h-5 text-primaryTeal" }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden
  >
    <path
      d="m11.293 17.293 1.414 1.414L19.414 12l-6.707-6.707-1.414 1.414L15.586 11H6v2h9.586l-4.293 4.293Z"
      fill="currentColor"
    />
  </svg>
);

const CoinIcon = ({ className = "w-6 h-6 text-white" }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden
  >
    <path
      d="M12 6C7.03 6 2 7.546 2 10.5v4c0 2.954 5.03 4.5 10 4.5s10-1.546 10-4.5v-4C22 7.546 16.97 6 12 6ZM4 14.5v-1.197c.633.359 1.304.647 2 .86v1.881C4.688 15.53 4 14.918 4 14.5Zm12 0.148v1.971c-.867.179-1.867.31-3 .358v-2c1.006-.04 2.008-.15 3-.329Zm-5 2.33c-1.008-.038-2.011-.158-3-.357v-1.971c.959.174 1.972.287 3 .33v1.998Zm7-2.936v-1.881c.696-.213 1.367-.501 2-.86V14.5c0 .418-.687 1.03-2 1.544ZM12 13c-5.177 0-8-1.651-8-2.5S6.823 8 12 8s8 1.651 8 2.5S17.177 13 12 13Z"
      fill="currentColor"
    />
  </svg>
);

const LogoMark = () => (
  <svg
    className="w-7 h-5 text-primaryOrange flex-shrink-0"
    viewBox="0 0 29 21"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden
  >
    <path
      d="M6.662 18.632C-5.048 11.957.652 0.871 8.694 1.527c8.143.664 8.078 8.168 11.779 11.334 2.704 3.313 4.655 3.841 6.788 3.961.84.048 1.181 1.032.47 1.481-4.639 2.925-13.056 5.895-21.069 1.328Z"
      fill="currentColor"
    />
    <path
      d="M19.397 6.703C17.698.2 23.639-1.629 26.207 1.468c2.6 3.136-.099 5.728.061 8.151.117 1.77.609 2.65 1.309 3.453.275.316.043.781-.365.684-2.66-.635-6.652-2.603-7.815-7.053Z"
      fill="currentColor"
    />
  </svg>
);

const Header = () => {
  return (
    <header className="w-full">
      {/* Top banner */}
      <div className="bg-primaryBlue text-white">
        <div className="mx-auto flex max-w-screen-2xl items-center gap-6 px-4 py-3 sm:px-8 lg:px-16 xl:px-[var(--navX,108px)]">
          <div className="flex flex-1 items-center gap-3 text-base sm:text-lg lg:text-xl font-semibold">
            <CoinIcon />
            <span className="leading-7 sm:leading-8">
              <span>Secure up to </span>
              <span className="text-primaryOrange">70% Government Funding</span>
            </span>
          </div>
          <a
            href="#learn-more"
            className="group flex items-center gap-2 text-sm sm:text-base font-semibold"
          >
            <span>Learn more</span>
            <RightArrow className="w-5 h-5 text-primaryTeal transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>
      </div>

      {/* Main nav */}
      <nav className="shadow-subtle">
        <div className="mx-auto flex max-w-screen-2xl items-center justify-between gap-4 px-4 py-4 sm:px-8 lg:px-16 xl:px-[var(--navX,108px)]">
          <div className="flex items-center gap-10">
            <a className="flex items-center gap-2" href="/">
              <LogoMark />
              <span className="text-[28px] leading-none font-normal font-clarendon text-charcoal">
                amyma
              </span>
            </a>

            <div className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  className={`flex items-center gap-1 text-base font-semibold ${
                    item.active ? "text-primaryTeal" : "text-charcoal"
                  }`}
                  type="button"
                >
                  {item.label}
                  {item.hasDropdown && <ChevronDown />}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-3 sm:gap-4">
            <div className="hidden sm:flex items-center gap-3">
              <button className="rounded-pill border border-charcoal px-5 py-2 text-base font-semibold text-charcoal hover:bg-gray-50 transition-colors">
                Contact us
              </button>
              <button className="rounded-pill bg-primaryBlue px-5 py-2 text-base font-semibold text-white hover:bg-[#023772] transition-colors">
                Book a free consultation
              </button>
            </div>

            <button
              type="button"
              className="flex items-center gap-1 text-base font-semibold text-charcoal"
            >
              <span className="hidden sm:inline">EN</span>
              <ChevronDown className="w-5 h-5" />
            </button>

            {/* Mobile menu placeholder */}
            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-gray-200 lg:hidden"
              aria-label="Open menu"
            >
              <span className="sr-only">Toggle menu</span>
              <svg
                className="h-5 w-5 text-charcoal"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden
              >
                <path
                  d="M4 7h16M4 12h16M4 17h16"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
