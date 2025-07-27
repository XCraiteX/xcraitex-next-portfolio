"use client"
import React, { ReactNode } from 'react';

const SocialButton = ({href, text, icon, className}: {href: string, text: string, icon: ReactNode, className: string}) => {
  return (
    <a href={href} target='_blank' className={`flex overflow-hidden cursor-pointer items-center text-lg font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 text-white shadow h-10 px-4 py-3 max-w-52 whitespace-pre md:flex group relative w-full justify-center gap-2 rounded-md transition-all duration-300 ease-out hover:ring-2 hover:ring-black hover:ring-offset-2 ${className}`}>
      <span className="absolute right-0 -mt-12 h-32 w-8 translate-x-12 rotate-12 bg-white opacity-10 transition-all duration-1000 ease-out group-hover:-translate-x-40" />
      <div className="flex items-center gap-2">
        {icon}
        <span className="ml-1 text-white">{text}</span>
      </div>
    </a>
  );
}

export default SocialButton;
