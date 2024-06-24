import React, { ReactNode } from "react";

interface contentProps{
    children: ReactNode
}


export default function Card({children}:contentProps) {
 return (
   <div className="bg-bgCard flex flex-row justify-between h-72 w-60 
   mb-5 p-4 hover:scale-110 transition-all duration-500 
   hover:translate-x-6 rounded-lg drop-shadow-md shadow-black cursor-pointer">
        {children}
   </div>
 );
}