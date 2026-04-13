import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
const Contact = () => {
  const logos = [
    "/h-adv01.png",
    "/h-adv02.png",
    "/h-adv03.png",
    "/h-adv04.png",
    "/h-adv05.png",
    "/h-adv06.png",
  ];
  return (
  <div className="pb-0 py-12 md:pb-0 md:py-24 relative">
    {/* Background map */}
    <div className="absolute left-0 top-0 right-0 w-full h-full">
      <img className="w-full" src="/ct.png" alt="" />
    </div>
    <div className="relative z-10 max-w-[1264px] w-full m-auto px-5 items-start">
      <h1 className="text-[40px] md:text-[56px] font-bold text-[#012C5B]">
          Contact Us
        </h1>
        <p className="text-[#7E7E7E] text-[18px] md:text-[24px] mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
    </div>
    <div className="relative z-10 max-w-[1264px] w-full m-auto px-5 grid grid-cols-1 lg:grid-cols-[30%_70%] gap-12 items-start">
      
      {/* LEFT */}
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 custom:grid-cols-1 gap-4 md:gap-6">
          <div className="pb-5">
            <p className="flex items-center font-semibold text-[#012C5B] text-[20px] mb-2">
              <svg className="mr-2" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 4H4C2.897 4 2 4.897 2 6V18C2 19.103 2.897 20 4 20H20C21.103 20 22 19.103 22 18V6C22 4.897 21.103 4 20 4ZM20 6V6.511L12 12.734L4 6.512V6H20ZM4 18V9.044L11.386 14.789C11.5611 14.9265 11.7773 15.0013 12 15.0013C12.2227 15.0013 12.4389 14.9265 12.614 14.789L20 9.044L20.002 18H4Z" fill="#26B3B8"/>
              </svg>Email</p>
            <p className="text-[#3C3C3C] text-[18px]">info@amyma.lu</p>
          </div>
          <div className="pb-5">
            <p className="flex items-center font-semibold text-[#012C5B] text-[20px] mb-2">
              <svg className="mr-2" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.7083 12.293C17.6155 12.2 17.5053 12.1263 17.384 12.076C17.2627 12.0257 17.1326 11.9998 17.0013 11.9998C16.87 11.9998 16.7399 12.0257 16.6186 12.076C16.4973 12.1263 16.3871 12.2 16.2943 12.293L14.7003 13.887C13.9613 13.667 12.5823 13.167 11.7083 12.293C10.8343 11.419 10.3343 10.04 10.1143 9.30096L11.7083 7.70696C11.8013 7.61417 11.875 7.50397 11.9253 7.38265C11.9756 7.26134 12.0015 7.13129 12.0015 6.99996C12.0015 6.86862 11.9756 6.73858 11.9253 6.61726C11.875 6.49595 11.8013 6.38575 11.7083 6.29296L7.70831 2.29296C7.61552 2.20001 7.50532 2.12627 7.384 2.07596C7.26269 2.02565 7.13264 1.99976 7.00131 1.99976C6.86998 1.99976 6.73993 2.02565 6.61862 2.07596C6.4973 2.12627 6.3871 2.20001 6.29431 2.29296L3.58231 5.00496C3.20231 5.38496 2.98831 5.90696 2.99631 6.43996C3.01931 7.86396 3.39631 12.81 7.29431 16.708C11.1923 20.606 16.1383 20.982 17.5633 21.006H17.5913C18.1193 21.006 18.6183 20.798 18.9963 20.42L21.7083 17.708C21.8013 17.6152 21.875 17.505 21.9253 17.3837C21.9756 17.2623 22.0015 17.1323 22.0015 17.001C22.0015 16.8696 21.9756 16.7396 21.9253 16.6183C21.875 16.4969 21.8013 16.3867 21.7083 16.294L17.7083 12.293ZM17.5813 19.005C16.3333 18.984 12.0633 18.649 8.70831 15.293C5.34231 11.927 5.01631 7.64196 4.99631 6.41896L7.00131 4.41396L9.58731 6.99996L8.29431 8.29296C8.17677 8.41041 8.09035 8.55529 8.04286 8.71453C7.99537 8.87376 7.98831 9.04231 8.02231 9.20496C8.04631 9.31996 8.63331 12.047 10.2933 13.707C11.9533 15.367 14.6803 15.954 14.7953 15.978C14.9579 16.0129 15.1266 16.0064 15.286 15.9591C15.4453 15.9117 15.5902 15.825 15.7073 15.707L17.0013 14.414L19.5873 17L17.5813 19.005Z" fill="#26B3B8"/>
              </svg>Phone</p>
            <p className="text-[#3C3C3C] text-[18px]">(+352) 29 71 24</p>
          </div>
          <div className="pb-4">
            <p className="flex items-center font-semibold text-[#012C5B] text-[20px] mb-2">
              <svg className="mr-2" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 2H9C7.897 2 7 2.897 7 4V10H5C3.897 10 3 10.897 3 12V21C3 21.2652 3.10536 21.5196 3.29289 21.7071C3.48043 21.8946 3.73478 22 4 22H20C20.2652 22 20.5196 21.8946 20.7071 21.7071C20.8946 21.5196 21 21.2652 21 21V4C21 2.897 20.103 2 19 2ZM5 12H11V20H5V12ZM19 20H13V12C13 10.897 12.103 10 11 10H9V4H19V20Z" fill="#26B3B8"/>
              <path d="M11 6H13V8H11V6ZM15 6H17V8H15V6ZM15 10.031H17V12H15V10.031ZM15 14H17V16H15V14ZM7 14.001H9V16.001H7V14.001Z" fill="#26B3B8"/>
              </svg>Address</p>
            <p className="text-[#3C3C3C] text-[18px] leading-[24px]">14 Rue Strachen, 6933 Mensdorf <br />
              Betzdorf, Luxembourg</p>
              <a href="#" className="flex text-[#012C5B] text-[18px] mt-3 inline-block">
                Get directions <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.293 17.293L12.707 18.707L19.414 12L12.707 5.29297L11.293 6.70697L15.586 11H6V13H15.586L11.293 17.293Z" fill="#012C5B"/>
                </svg>
              </a>
          </div>
          <div className="pb-5">
            <p className="flex items-center font-semibold text-[#012C5B] text-[20px] mb-2">
              <svg className="mr-2" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 2C3.897 2 3 2.897 3 4V16C3 17.103 3.897 18 5 18H8.586L12 21.414L15.414 18H19C20.103 18 21 17.103 21 16V4C21 2.897 20.103 2 19 2H5ZM19 16H14.586L12 18.586L9.414 16H5V4H19V16Z" fill="#26B3B8"/>
              <path d="M7 7H17V9H7V7ZM7 11H14V13H7V11Z" fill="#26B3B8"/>
              </svg>Live chat</p>
            <p className="text-[#3C3C3C] text-[18px]">Chat with us</p>
          </div>
        </div>
      </div>

      {/* RIGHT CARD */}
      <div className="relative bg-white rounded-2xl shadow-xl border-t border-[#e5e5e55e]  p-6 grid md:grid-cols-2 gap-6">
        
        {/* LEFT SIDE CARD */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <svg width="139" height="27" viewBox="0 0 139 27" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.66154 18.6905C-5.04808 12.0152 0.652407 0.929465 8.6943 1.58547C16.8371 2.24974 16.7724 9.75374 20.4731 12.9198C23.1772 15.233 25.1282 15.7611 27.2606 15.8818C28.1003 15.9296 28.4411 16.9137 27.7297 17.3625C23.0905 20.288 14.6737 23.2579 6.66154 18.6905Z" fill="#FF9517"/>
            <path d="M19.3971 6.76182C17.6984 0.259004 23.6392 -1.57031 26.2074 1.52667C28.8078 4.66294 26.1081 7.25496 26.2683 9.67831C26.3854 11.4489 26.8771 12.3285 27.577 13.1313C27.8525 13.4475 27.62 13.9123 27.212 13.8149C24.5519 13.1793 20.5595 11.2114 19.3971 6.76182Z" fill="#FF9517"/>
            <path d="M48.4381 15.0374H50.2832V15.9022C50.2832 19.1312 48.9858 20.4862 46.5642 20.4862C45.1227 20.4862 43.883 19.8807 43.6524 18.3528C42.5857 19.9672 40.7406 20.4862 38.9243 20.4862C36.6756 20.4862 34.917 19.4195 34.917 16.8248C34.917 11.2318 43.5659 13.9418 43.5659 9.87685C43.5659 8.03176 42.0091 7.6858 40.4811 7.6858C39.6739 7.6858 38.3189 7.94527 37.8 8.63718C38.8666 8.49303 39.7027 8.9543 39.7027 10.1363C39.7027 11.4337 38.809 11.8373 37.6846 11.8373C36.445 11.8373 35.6089 10.8859 35.6089 9.70387C35.6089 6.76325 39.1261 6.129 41.4037 6.129C45.2957 6.129 46.9678 7.88761 46.9678 10.3093V17.3726C46.9678 18.0068 47.2272 18.3239 47.6597 18.3239C48.0921 18.3239 48.4381 17.9203 48.4381 16.1329V15.0374ZM43.5659 14.8067V12.9328L40.5099 14.3166C39.6739 14.6914 38.7802 15.1527 38.7802 16.5077C38.7802 17.7185 39.3279 18.3239 40.5099 18.3239C42.4704 18.3239 43.5659 16.6518 43.5659 14.8067ZM57.1638 6.56144V9.01196H57.2214C58.3458 7.1957 59.5566 6.129 61.8053 6.129C63.7081 6.129 65.0919 6.99389 65.6397 8.86781C66.9082 7.16687 68.2344 6.129 70.4254 6.129C72.6165 6.129 74.4327 7.59931 74.4327 10.194V16.9978C74.4327 17.8338 74.7787 18.151 75.5859 18.151H77.1139V20.0537H69.0416V18.151H69.8776C70.6849 18.151 71.0308 17.8338 71.0308 16.9978V10.194C71.0308 9.04079 70.1083 8.37771 68.9839 8.37771C67.283 8.37771 65.7838 9.90568 65.7838 11.8084V16.9978C65.7838 17.8338 66.1298 18.151 66.937 18.151H67.7154V20.0537H60.3639V18.151H61.2288C62.036 18.151 62.3819 17.8338 62.3819 16.9978V10.9435C62.3819 9.44441 62.0936 8.37771 60.3639 8.37771C58.5764 8.37771 57.1349 10.0787 57.1349 11.8084V16.9978C57.1349 17.8338 57.4809 18.151 58.2881 18.151H59.153V20.0537H50.9654V18.151H52.5799C53.3871 18.151 53.7331 17.8338 53.7331 16.9978V9.61739C53.7331 8.78133 53.3871 8.4642 52.5799 8.4642H50.9654V6.56144H57.1638ZM77.9885 8.4642V6.56144H86.3202V8.4642H85.0805C84.5904 8.4642 84.2445 8.66601 84.2445 9.09845C84.2445 9.27143 84.3886 9.61739 84.5039 9.90568L87.0986 16.0176H87.1563L89.5491 10.1651C89.6933 9.81919 89.8086 9.50207 89.8086 9.15611C89.8086 8.78133 89.405 8.4642 88.8861 8.4642H87.6464V6.56144H94.5943V8.4642C93.5565 8.4642 92.6916 8.66601 92.2303 9.76153L87.5599 20.8609C85.9743 24.6376 84.4751 26.1656 81.794 26.1656C79.8047 26.1656 77.9596 24.9547 77.9596 22.6772C77.9596 21.2646 78.738 20.1402 80.1795 20.1402C81.2174 20.1402 82.1687 20.8898 82.1687 21.9565C82.1687 22.8502 81.5345 23.5998 80.7561 23.5998C80.5255 23.5998 80.2372 23.5709 80.0065 23.5709C80.3237 24.1187 80.8714 24.2628 81.4192 24.2628C83.149 24.2628 83.985 23.3691 84.5328 22.1583L85.4842 20.0537L80.6119 9.58856C80.266 8.83898 79.4588 8.4642 77.9885 8.4642ZM102.013 6.56144V9.01196H102.071C103.195 7.1957 104.406 6.129 106.655 6.129C108.557 6.129 109.941 6.99389 110.489 8.86781C111.757 7.16687 113.084 6.129 115.275 6.129C117.466 6.129 119.282 7.59931 119.282 10.194V16.9978C119.282 17.8338 119.628 18.151 120.435 18.151H121.963V20.0537H113.891V18.151H114.727C115.534 18.151 115.88 17.8338 115.88 16.9978V10.194C115.88 9.04079 114.957 8.37771 113.833 8.37771C112.132 8.37771 110.633 9.90568 110.633 11.8084V16.9978C110.633 17.8338 110.979 18.151 111.786 18.151H112.565V20.0537H105.213V18.151H106.078C106.885 18.151 107.231 17.8338 107.231 16.9978V10.9435C107.231 9.44441 106.943 8.37771 105.213 8.37771C103.426 8.37771 101.984 10.0787 101.984 11.8084V16.9978C101.984 17.8338 102.33 18.151 103.137 18.151H104.002V20.0537H95.8146V18.151H97.4291C98.2363 18.151 98.5823 17.8338 98.5823 16.9978V9.61739C98.5823 8.78133 98.2363 8.4642 97.4291 8.4642H95.8146V6.56144H102.013ZM136.532 15.0374H138.377V15.9022C138.377 19.1312 137.08 20.4862 134.658 20.4862C133.216 20.4862 131.977 19.8807 131.746 18.3528C130.679 19.9672 128.834 20.4862 127.018 20.4862C124.769 20.4862 123.011 19.4195 123.011 16.8248C123.011 11.2318 131.66 13.9418 131.66 9.87685C131.66 8.03176 130.103 7.6858 128.575 7.6858C127.768 7.6858 126.413 7.94527 125.894 8.63718C126.96 8.49303 127.796 8.9543 127.796 10.1363C127.796 11.4337 126.903 11.8373 125.778 11.8373C124.539 11.8373 123.703 10.8859 123.703 9.70387C123.703 6.76325 127.22 6.129 129.497 6.129C133.389 6.129 135.061 7.88761 135.061 10.3093V17.3726C135.061 18.0068 135.321 18.3239 135.753 18.3239C136.186 18.3239 136.532 17.9203 136.532 16.1329V15.0374ZM131.66 14.8067V12.9328L128.604 14.3166C127.768 14.6914 126.874 15.1527 126.874 16.5077C126.874 17.7185 127.422 18.3239 128.604 18.3239C130.564 18.3239 131.66 16.6518 131.66 14.8067Z" fill="#1C1C1C"/>
            </svg>
          </div>

          <p className="text-[#1A1A1A99] text-[16px] font-bold">Amyma Web</p>
          <h3 className="text-[#1A1A1A] text-[28px] font-bold mt-1 mb-6">
            30-Min Consultation
          </h3>

          <div className="text-sm text-gray-600 space-y-2 mb-8">
            <p className="flex text-[#1A1A1A99] text-[16px] font-bold pb-2"><svg className="mr-3" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_546_115184)">
              <path d="M1 10C1 12.3869 1.94821 14.6761 3.63604 16.364C5.32387 18.0518 7.61305 19 10 19C12.3869 19 14.6761 18.0518 16.364 16.364C18.0518 14.6761 19 12.3869 19 10C19 7.61305 18.0518 5.32387 16.364 3.63604C14.6761 1.94821 12.3869 1 10 1C7.61305 1 5.32387 1.94821 3.63604 3.63604C1.94821 5.32387 1 7.61305 1 10Z" stroke="#1A1A1A" stroke-opacity="0.61" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M10 6.53802V10L13.518 14.104" stroke="#1A1A1A" stroke-opacity="0.61" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </g>
              <defs>
              <clipPath id="clip0_546_115184">
              <rect width="20" height="20" fill="white"/>
              </clipPath>
              </defs>
              </svg>30 min</p>
            <p className="flex text-[#1A1A1A99] text-[16px] font-bold"><svg className="mr-3" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_876_51459)">
                  <path d="M12.4312 18.302C13.2815 18.8451 14.2917 19.0816 15.2947 18.9725C16.2978 18.8634 17.2335 18.4152 17.9472 17.702L18.5672 17.082C18.8435 16.8052 18.9988 16.4301 18.9988 16.039C18.9988 15.6479 18.8435 15.2727 18.5672 14.996L15.9672 12.396C15.6901 12.1195 15.3146 11.9642 14.9232 11.9642C14.5317 11.9642 14.1563 12.1195 13.8792 12.396C13.6024 12.6724 13.2273 12.8276 12.8362 12.8276C12.445 12.8276 12.0699 12.6724 11.7932 12.396L7.61116 8.21399C7.33478 7.93724 7.17954 7.56211 7.17954 7.17099C7.17954 6.77987 7.33478 6.40473 7.61116 6.12799C7.88767 5.8509 8.04296 5.47544 8.04296 5.08399C8.04296 4.69254 7.88767 4.31708 7.61116 4.03999L4.99916 1.43199C4.72241 1.15561 4.34728 1.00037 3.95616 1.00037C3.56504 1.00037 3.18991 1.15561 2.91316 1.43199L2.29316 2.05199C1.57963 2.76546 1.13118 3.70123 1.02207 4.70436C0.912952 5.70748 1.14972 6.71779 1.69316 7.56799C4.55346 11.7995 8.19861 15.4433 12.4312 18.302Z" stroke="#1A1A1A" stroke-opacity="0.61" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </g>
                  <defs>
                  <clipPath id="clip0_876_51459">
                  <rect width="20" height="20" fill="white"/>
                  </clipPath>
                  </defs>
                  </svg>Phone call</p>
            </div>

          <p className="text-[16px] text-[#1A1A1A] leading-[26px]">
            This is an example of a meeting you would have with a potential customer to demonstrate your product.
          </p>
        </div>

        {/* RIGHT SIDE CALENDAR */}
        <div className="border-t pl-0 md:border-l md:pl-8 pt-8 md:pt-0 mt-4 md:mt-0">
          <h4 className="font-bold text-[20px] text-[#1A1A1A] pb-6">Select a Date & Time</h4>

          {/* Fake calendar */}
          <div className="text-center mb-8">
            <img className="w-full" src="/calendar.jpg" alt="" />
          </div>
          <div className="text-center mb-8">
            <img className="w-full" src="/time-zone.png" alt="" />
          </div>

          <a href="#" className="flex w-[140px] border border-[#1A1A1A] rounded-full py-[16px] px-[16px] text-[14px] text-[#1A1A1A] hover:bg-gray-100">
            Troubleshooting
          </a>
        </div>

      </div>
    </div>
    <div className="relative w-full mt-[-80px]">
      <iframe className="w-full h-[380px]" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2582.8167558718987!2d6.290464076720026!3d49.65775187145165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47954365dab05f9f%3A0x8278f10772a5e26d!2s14%20Rue%20Strachen%2C%206933%20Mensdorf%20Betzdorf%2C%20Luxembourg!5e0!3m2!1sen!2s!4v1775443824944!5m2!1sen!2s"></iframe>
    </div>
     

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



  </div>
);
};

export default Contact;
