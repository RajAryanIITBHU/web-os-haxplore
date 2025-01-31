"use client";
import { useWindowSheetContext } from "@/context/WindowSheetProvider";
import gsap from "gsap";
import { AppWindow, File, LayoutDashboard, Search } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import { PiWindowsLogoFill } from "react-icons/pi";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import WindowsSheet from "./WindowsSheet";
import { Label } from "./ui/label";
import { Input } from "./ui/input";

const Taskbar = () => {
  const winBtnRef = useRef(null);
  const [windowBtnSelected, setWindowBtnSelected] = useState(false);

  const handleWindowSheetClose = (e) => {
    if (winBtnRef.current && !winBtnRef.current.contains(e.target)) {
      gsap.to("#WINDOW_SHEET", {
        duration: 0.3,
        y: "800",
        opacity: 0,
        onComplete:()=>setWindowBtnSelected(false)
      });
      setWindowBtnSelected(false);
    } else if (
      winBtnRef.current &&
      winBtnRef.current.contains(e.target) &&
      windowBtnSelected
    ) {
      gsap.to("#WINDOW_SHEET", {
        duration: 0.3,
        y: "800",
        opacity: 0,
        onComplete:()=>setWindowBtnSelected(false)
      });
      setWindowBtnSelected(false);
    } else {
      gsap.to("#WINDOW_SHEET", {
        duration: 0.3,
        y: "0",
        opacity: 1,
       
      });
      setWindowBtnSelected(true);
    }
  };

  return (
    <>
      <div className="taskbar">
        <div className="min-w-16"></div>
        <div className="min-w-16 flex gap-1 items-center">
          <div
            ref={winBtnRef}
            id="WINDOW_BTN"
            className={`aspect-square h-[44px] rounded flex justify-center items-center ${
              windowBtnSelected ? "bg-neutral-100/20" : "hover:bg-neutral-50/10"
            } `}
          >
            <PiWindowsLogoFill
              id="WINDOW_BTN_ICON"
              className="w-8 h-8 text-blue-400"
            />
          </div>

          <div className="taskbar_search ">
            <Search className="w-5 h-5 mr-2" />
            <input
              type="text"
              name="search"
              id="TASKBAR_SEARCH"
              placeholder="Search"
            />
          </div>
          <div className="taskbar_icon">
            <File />
            <span className=""></span>
          </div>
          <div className="taskbar_icon">
            <File />
            <span className=""></span>
          </div>
          <div className="taskbar_icon">
            <File />
            <span className=""></span>
          </div>
        </div>
        <div className="min-w-16 ">ff</div>
      </div>
      <WindowsSheet onClose={handleWindowSheetClose} />
    </>
  );
};

export default Taskbar;
