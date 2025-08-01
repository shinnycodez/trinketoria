import React from 'react';
import { Link } from 'react-router-dom';

const socialIcons = [
  {
    name: "YouTube",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="24px" height="24px" viewBox="0 0 24 24">
        <path d="M21.8 8.001c-.2-1.4-1.4-2.4-2.8-2.5C16.2 5.2 12 5.2 12 5.2s-4.2 0-7 .3c-1.4.1-2.6 1.1-2.8 2.5C2 9.8 2 12 2 12s0 2.2.2 3.999c.2 1.4 1.4 2.4 2.8 2.5 2.8.3 7 .3 7 .3s4.2 0 7-.3c1.4-.1 2.6-1.1 2.8-2.5.2-1.8.2-3.999.2-3.999s0-2.199-.2-3.999zM10 15.5v-7l6 3.5-6 3.5z"/>
      </svg>
    )
  },
  {
    name: "Threads",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="24px" height="24px" viewBox="0 0 256 256">
        <path d="M128 24C65.3 24 16 65.8 16 128s49.3 104 112 104 112-41.8 112-104S190.7 24 128 24zm32.9 144.1c-6.6 0-12.4-2.5-17.2-6.4-5.6 10.4-13.2 19.5-23.1 27.3-3.5 2.7-8.5 2-11.3-1.5s-2-8.5 1.5-11.3c16.6-12.9 25-27.4 25-42.5 0-11.1-5.6-18.1-13.5-18.1-8.8 0-14.6 6.6-14.6 17.6 0 8.3 3.1 13.9 9.3 16.4 4.1 1.6 6.2 6.3 4.6 10.4-1.6 4.1-6.3 6.2-10.4 4.6-14.6-5.8-21.5-18.2-21.5-33.4 0-21.7 14.5-34.4 31.6-34.4 12.2 0 21.4 6.6 26.6 16.3 2.9-6.6 6.5-12.8 10.9-18.5 2.7-3.5 7.7-4.1 11.2-1.3 3.5 2.7 4.1 7.7 1.3 11.2-8.5 10.9-13.7 22.9-16.2 36.3 2.5 1.5 5.4 2.3 8.6 2.3 4.4 0 8 3.6 8 8s-3.6 8-8 8z"/>
      </svg>
    )
  },
  {
    name: "Instagram",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
        <path d="M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160ZM176,24H80A56.06,56.06,0,0,0,24,80v96a56.06,56.06,0,0,0,56,56h96a56.06,56.06,0,0,0,56-56V80A56.06,56.06,0,0,0,176,24Zm40,152a40,40,0,0,1-40,40H80a40,40,0,0,1-40-40V80A40,40,0,0,1,80,40h96a40,40,0,0,1,40,40ZM192,76a12,12,0,1,1-12-12A12,12,0,0,1,192,76Z"></path>
      </svg>
    )
  },
  {
    name: "TikTok",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
        <path d="M232,80a72.08,72.08,0,0,1-72-72,8,8,0,0,0-8-8H136a8,8,0,0,0-8,8V160a32,32,0,1,1-32-32,8,8,0,0,0,0-16,48,48,0,1,0,48,48V122.72A88.14,88.14,0,0,0,232,112a8,8,0,0,0,8-8V88A8,8,0,0,0,232,80Z"></path>
      </svg>
    )
  },
  {
    name: "Facebook",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
        <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm8,191.63V152h24a8,8,0,0,0,0-16H136V112a16,16,0,0,1,16-16h16a8,8,0,0,0,0-16H152a32,32,0,0,0-32,32v24H96a8,8,0,0,0,0,16h24v63.63a88,88,0,1,1,16,0Z"></path>
      </svg>
    )
  },
  {
    name: "Pinterest",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0C5.373 0 0 5.37 0 12c0 4.991 3.065 9.245 7.392 11.037-.102-.94-.193-2.387.04-3.417.21-.9 1.353-5.73 1.353-5.73s-.344-.689-.344-1.71c0-1.6.929-2.795 2.082-2.795.982 0 1.456.737 1.456 1.619 0 .986-.63 2.462-.953 3.832-.273 1.15.58 2.088 1.717 2.088 2.06 0 3.644-2.174 3.644-5.31 0-2.774-1.993-4.714-4.835-4.714-3.293 0-5.227 2.467-5.227 5.02 0 .993.383 2.057.862 2.635.095.114.108.213.08.327-.087.359-.28 1.142-.318 1.3-.05.21-.163.256-.378.154-1.41-.656-2.29-2.718-2.29-4.373 0-3.562 2.59-6.83 7.466-6.83 3.917 0 6.957 2.797 6.957 6.54 0 3.888-2.446 7.024-5.843 7.024-1.14 0-2.212-.592-2.58-1.29l-.703 2.678c-.254.963-.942 2.17-1.402 2.91C10.68 23.813 11.33 24 12 24c6.627 0 12-5.37 12-12S18.627 0 12 0z"/>
      </svg>
    )
  }
];


const footerLinks = [
  { name: "About Us", url: "/about" },
  { name: "Customer Service", url: "/customer-service" },
  { name: "Policies", url: "/policies" }
];

function Footer() {
  return (
    <footer className="flex flex-col gap-6 px-5 py-10 text-center @container">
      <div className="flex flex-wrap items-center justify-center gap-6 @[480px]:flex-row @[480px]:justify-around">
        {footerLinks.map((link) => (
          <Link 
            key={link.name}
            to={link.url}
            className="text-[#757575] text-base font-normal leading-normal min-w-40 hover:text-[#0c77f2] transition"
          >
            {link.name}
          </Link>
        ))}
      </div>
      <div className="flex flex-wrap justify-center gap-4">
        {socialIcons.map((social) => (
          <Link 
            key={social.name}
            to={`/${social.name.toLowerCase()}`}
            className="text-[#757575] hover:text-[#0c77f2] transition"
            aria-label={social.name}
          >
            {social.icon}
          </Link>
        ))}
      </div>
      <p className="text-[#757575] text-base font-normal leading-normal">@2024 lol Threads. All rights reserved.</p>
    </footer>
  );
}

export default Footer;