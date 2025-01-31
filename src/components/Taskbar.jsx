import { AppWindow, File, LayoutDashboard } from 'lucide-react'
import React from 'react'
import { PiWindowsLogoFill } from "react-icons/pi";
const Taskbar = () => {
  return (
    <div className="flex w-full h-12 justify-between items-center bg-neutral-800/30 backdrop-blur gap-4 px-4">
      <div className="min-w-16"></div>
      <div className="min-w-16 flex gap-1 items-center">
        <div className="aspect-square h-[44px] rounded hover:bg-neutral-50/10 flex justify-center items-center ">
          <PiWindowsLogoFill className="w-8 h-8 text-blue-400" />
        </div>
        <div className="w-52 h-8 rounded-full bg-neutral-50/20 "></div>
        <div className="aspect-square h-[44px] rounded hover:bg-neutral-50/10 flex flex-col justify-between py-1 items-center">
          <File />
          <span className="flex h-1 w-4 rounded-full bg-blue-400 mx-auto "></span>
        </div>
        <div className="aspect-square h-[44px] rounded hover:bg-neutral-50/10 flex flex-col justify-between py-1 items-center">
          <File />
          <span className="flex h-1 w-2 rounded-full bg-neutral-500 mx-auto "></span>
        </div>
        <div className="aspect-square h-[44px] rounded hover:bg-neutral-50/10 flex flex-col justify-between py-1 items-center">
          <File />
          <span className="flex h-1 w-2 rounded-full bg-neutral-500 mx-auto "></span>
        </div>
      </div>
      <div className="min-w-16 ">ff</div>
    </div>
  );
}

export default Taskbar
