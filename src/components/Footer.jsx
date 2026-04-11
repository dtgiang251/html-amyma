import React from "react";

const Footer = () => (
  <footer className="bg-[#002B5B] pt-20 pb-10 text-white">
  <div className="mx-auto max-w-[1440px] px-6 lg:px-14 xl:px-[64px]">
    <div className="grid grid-cols-1 gap-12 md:grid-cols-4 lg:grid-cols-12">
      
      {/* Cột 1: Thông tin Logo & Contact (Chiếm 5 cột) */}
      <div className="lg:col-span-5">
        <div className="mb-3">
          <img src="./Logo.svg" alt="Amyma Logo" className="w-[139px]" />
        </div>
        
        <h3 className="mb-3 text-lg font-bold">Contact</h3>
        <div className="space-y-2 text-white text-base">
          <p className="hover:text-white transition-colors cursor-pointer">info@amyma.lu</p>
          <p className="hover:text-white transition-colors cursor-pointer">(+352) 29 71 24</p>
          <p className="leading-relaxed">
            14 Rue Strachen, 6933 Mensdorf Betzdorf, Luxembourg
          </p>
          <button className="group flex items-center gap-2 font-bold text-white transition-all">
            Get Directions
            <svg className="ml-2" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.293 12L6.707 13.414L13.414 6.707L6.707 0L5.293 1.414L9.586 5.707H0V7.707H9.586L5.293 12Z" fill="#26B3B8"/>
            </svg> 
          </button>
        </div>

        {/* Social Icons */}
        <div className="mt-10 flex gap-4">
          <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-all">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M22 12.3043C22 6.74767 17.5229 2.24316 12 2.24316C6.47715 2.24316 2 6.74767 2 12.3043C2 17.326 5.65684 21.4884 10.4375 22.2432V15.2126H7.89844V12.3043H10.4375V10.0877C10.4375 7.56612 11.9305 6.17328 14.2146 6.17328C15.3088 6.17328 16.4531 6.36979 16.4531 6.36979V8.84577H15.1922C13.95 8.84577 13.5625 9.62138 13.5625 10.4171V12.3043H16.3359L15.8926 15.2126H13.5625V22.2432C18.3432 21.4884 22 17.3262 22 12.3043Z" fill="white"/>
            </svg> 
          </a>
          <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-all">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M4.5 3.24316C3.67157 3.24316 3 3.91473 3 4.74316V19.7432C3 20.5716 3.67157 21.2432 4.5 21.2432H19.5C20.3284 21.2432 21 20.5716 21 19.7432V4.74316C21 3.91473 20.3284 3.24316 19.5 3.24316H4.5ZM8.52076 7.24588C8.52639 8.20213 7.81061 8.79135 6.96123 8.78713C6.16107 8.78291 5.46357 8.14588 5.46779 7.24729C5.47201 6.40213 6.13998 5.72291 7.00764 5.7426C7.88795 5.76229 8.52639 6.40776 8.52076 7.24588ZM12.2797 10.0049H9.75971H9.7583V18.5648H12.4217V18.3651C12.4217 17.9852 12.4214 17.6052 12.4211 17.2251C12.4203 16.2113 12.4194 15.1964 12.4246 14.1829C12.426 13.9368 12.4372 13.6809 12.5005 13.446C12.7381 12.5685 13.5271 12.0018 14.4074 12.1411C14.9727 12.2296 15.3467 12.5573 15.5042 13.0903C15.6013 13.4235 15.6449 13.7821 15.6491 14.1295C15.6605 15.1771 15.6589 16.2247 15.6573 17.2724C15.6567 17.6422 15.6561 18.0122 15.6561 18.382V18.5634H18.328V18.3581C18.328 17.9061 18.3278 17.4542 18.3275 17.0023C18.327 15.8728 18.3264 14.7433 18.3294 13.6134C18.3308 13.1029 18.276 12.5995 18.1508 12.1059C17.9638 11.3718 17.5771 10.7643 16.9485 10.3256C16.5027 10.0134 16.0133 9.81226 15.4663 9.78976C15.404 9.78717 15.3412 9.78378 15.2781 9.78037C14.9984 9.76525 14.7141 9.74989 14.4467 9.80382C13.6817 9.9571 13.0096 10.3073 12.5019 10.9246C12.4429 10.9954 12.3852 11.0673 12.2991 11.1746L12.2797 11.1989V10.0049ZM5.68164 18.5676H8.33242V10.0105H5.68164V18.5676Z" fill="white"/>
            </svg> 
          </a>
        </div>
      </div>

      {/* Cột 2: General (Chiếm 2 cột) */}
      <div className="lg:col-span-2">
        <h3 className="mb-2 text-lg font-bold">General</h3>
        <ul className="space-y-4 text-white text-base">
          <li><a href="#" className="hover:text-white transition-colors">About</a></li>
          <li><a href="#" className="hover:text-white transition-colors">Our Work</a></li>
          <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
        </ul>
      </div>

      {/* Cột 3: Services (Chiếm 3 cột) */}
      <div className="lg:col-span-3">
        <h3 className="mb-2 text-lg font-bold">Services</h3>
        <ul className="space-y-3 text-white text-base">
          <li><a href="#" className="hover:text-white transition-colors">Websites</a></li>
          <li><a href="#" className="hover:text-white transition-colors">Apps</a></li>
          <li><a href="#" className="hover:text-white transition-colors">Digital Marketing</a></li>
          <li><a href="#" className="hover:text-white transition-colors">Hosting</a></li>
        </ul>
      </div>

      {/* Cột 4: Resources (Chiếm 2 cột) */}
      <div className="lg:col-span-2">
        <h3 className="mb-2 text-lg font-bold">Resources</h3>
        <ul className="space-y-3 text-white text-base">
          <li><a href="#" className="hover:text-white transition-colors">Link</a></li>
          <li><a href="#" className="hover:text-white transition-colors">Link</a></li>
          <li><a href="#" className="hover:text-white transition-colors">Link</a></li>
        </ul>
      </div>
    </div>

    {/* Bottom Footer */}
    <div className="mt-20 border-t border-white pt-8">
      <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
        <p className="text-sm text-gray-400">
          © 2025 Amyma. All rights reserved.
        </p>
        <div className="flex gap-6 text-sm text-gray-400">
          <a href="#" className="underline hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="underline hover:text-white transition-colors">Terms of Service</a>
          <a href="#" className="underline hover:text-white transition-colors">Cookies Settings</a>
        </div>
      </div>
    </div>
  </div>
</footer>
);

export default Footer;

