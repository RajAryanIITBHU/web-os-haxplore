"use client"
import gsap from 'gsap';
import React, { useEffect, useRef, useState } from 'react'

const CustomSheet = ({align, transition, children, childRef, width, btn, className, customAlign, height,classSheet}) => {
    const sheetRef = useRef(null);
    const buttonRef = useRef(null);

    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
        gsap.to(sheetRef.current, {y: "0px", x:"0px", duration: 0.1, opacity: 1});
        
    }

    const handleClose = () => {
      setOpen(false);
      transition === "right" ? gsap.to(sheetRef.current, {x: "800px", duration: 0.1, ease: "power2.out", opacity: 0.2}) :
      transition === "left" ? gsap.to(sheetRef.current, {x: "-800px", duration: 0.1, ease: "power2.out", opacity: 0.2}) :
      transition === "top" ? gsap.to(sheetRef.current, {y: "-800px", duration: 0.1, ease: "power2.out", opacity: 0.2}) :
     
      gsap.to(sheetRef.current, {y: "800px", duration: 0.1, ease: "power2.out", opacity: 0.2});
    }


    useEffect(() => {
      const handleClickOutside = (event) => {
        if (
          open &&
          sheetRef.current &&
          !sheetRef.current.contains(event.target) &&
          buttonRef.current &&
          !buttonRef.current.contains(event.target)
        ) {
          handleClose();
        }
      };
      document.addEventListener("mousedown", handleClickOutside);
      return () =>
        document.removeEventListener("mousedown", handleClickOutside);
    }, [open]);


  return (
    <>
      <button
        onClick={open ? handleClose : handleOpen}
        ref={buttonRef}
        className={` ${className} ${open ? "bg-neutral-50/20" : ""}`}
      >
        {btn}
      </button>
      <section
        ref={sheetRef}
        className={`absolute bottom-16 z-20  bg-opacity-40 transition-transform duration-300 ease-in-out rounded
          ${classSheet ? classSheet : "bg-neutral-100/60"}
        ${width ? width : "w-[90dvw] max-w-xl"}
        ${height ? height : "h-[75dvh] max-h-[540px]"}
        ${align === "center" && "left-1/2 -translate-x-1/2"}
        ${align === "left" && "left-4"}
        ${align === "right" && "right-4"}
        ${align === "custom" && customAlign}
        ${transition === "right" && "translate-x-[800px]"}
        ${transition === "left" && "-translate-x-[800px]"}
        ${transition === "top" && "-translate-y-[800px]"}
        ${transition === "bottom" || (!transition && "translate-y-[800px]")}
        `}
      >
        {children}
      </section>
    </>
  );
}

export default CustomSheet
