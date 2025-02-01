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
import CustomSheet from "./ui/customSheet";
import TaskbarRight from "./TaskbarRight";
import useResizeObserver from "@/hooks/useResizeObserver";

const Taskbar = () => {

  const [ref, size] = useResizeObserver();
  

  return (
    <>
      <div className="taskbar">
        <div className="min-w-16"></div>
        <div className="min-w-16 flex gap-1 items-center" ref={ref}>
          
          <CustomSheet btn={<PiWindowsLogoFill className="w-8 h-8 text-blue-400" />} align="center"  className="aspect-square h-[44px] rounded flex justify-center items-center" children={<WindowsSheet/>}/>

          <CustomSheet btn={<div className="taskbar_search max-md:hidden">
            <Search className="w-5 h-5 mr-2" />
            <input
              type="text"
              name="search"
              id="TASKBAR_SEARCH"
              placeholder="Search"
            />
          </div>} align="center"  className="!bg-transparent" children={<div className="w-64 h-64 bg-neutral-100/60"></div>} />
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
        <TaskbarRight/>
      </div>
      {/* <WindowsSheet onClose={handleWindowSheetClose} /> */}
    </>
  );
};

export default Taskbar;
