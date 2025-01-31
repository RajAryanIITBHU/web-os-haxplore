"use client"
import React from 'react'

const customSheet = ({align, transition, children, childRef, width, btn}) => {
    const sheetRef = useRef(null);
  return (
    <>
    
    <div
    ref={sheetRef}
    className={`fixed bottom-16 w-[90dvw] max-w-xl z-20 bg-neutral-50/30 backdrop-blur-lg h-[75dvh] max-h-[540px] translate-y-[800px] transition-all duration-300 ease-in-out
        ${align === "center" && "left-1/2 -translate-x-1/2"}
        ${align === "left" && "left-0"}
        ${align === "right" && "right-0"}`}
        >
        {children}
    </div>
        </>
  );
}

export default customSheet
