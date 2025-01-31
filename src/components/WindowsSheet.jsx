"use client"
import { useWindowSheetContext } from '@/context/WindowSheetProvider';
import gsap from 'gsap';
import React, { use, useEffect, useRef } from 'react'

const WindowsSheet = ({onClose}) => {
    const dialogRef = useRef(null);

    useEffect(() => {
      window.addEventListener("mousedown", (e) => { 
        if (dialogRef.current && !dialogRef.current.contains(e.target)) {
          onClose(e);
        }
      });
    })

  return (
    <section id="WINDOW_SHEET" className="window_sheet" ref={dialogRef}>jj</section>
  )
}

export default WindowsSheet
