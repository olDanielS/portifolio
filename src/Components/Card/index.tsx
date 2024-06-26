import React, { ReactNode } from "react";


interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export default function Card({children,  className = ''}:CardProps) {
 return (
   <div className={`bg-bgCard flex flex-row justify-between h-[340px] w-64 
   mb-5 p-4 hover:scale-110 transition-all duration-500 border
   hover:translate-x-6 rounded-lg shadow-[6px_6px_8px_2px_#050505] cursor-pointer ${className}`}>
        {children}
   </div>
 );
}