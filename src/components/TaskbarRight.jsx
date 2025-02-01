"use client";

import React, { useState, useEffect } from "react";
import CustomSheet from "./ui/customSheet";
import TaskbarRightDeviceInfo from "./TaskbarRightDeviceInfo";
import { Bot } from "lucide-react";

const TaskbarRight = () => {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setDateTime(new Date());
    }, 1000); // Updates every second

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  // Format time in 12-hour format
  const formatTime = (date) => {
    return date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",

      hour12: true,
    });
  };

  // Format date as MM/DD/YYYY
  const formatDate = (date) => {
    return date.toLocaleDateString("en-US");
  };

  return (
    <div className="flex gap-3 items-center relative">
      <CustomSheet
        btn={<Bot className="w-6 h-6 text-white" />}
        width={"w-[90dvw] max-w-[500px]"}
        height={"h-[90dvh] max-h-[500px]"}
        align={"right"}
        className="aspect-square h-[40px] rounded flex justify-center items-center"
        classSheet={"bg-neutral-200/80 "}
        children={<div className=""></div>}
      />
      <TaskbarRightDeviceInfo />
      <CustomSheet
        btn={
          <div className="flex flex-col taskbar-right_icon">
            <span className="drop-shadow">{formatTime(dateTime)}</span>
            <span className="drop-shadow">{formatDate(dateTime)}</span>
          </div>
        }
        align="right"
        width={"w-[80dvw] max-w-[300px]"}
        height={"h-[85dvh] max-h-[700px]"}
        transition={"right"}
        className=""
        children={<div className="w-64 h-64 bg-neutral-100/60"></div>}
      />
    </div>
  );
};

export default TaskbarRight;
