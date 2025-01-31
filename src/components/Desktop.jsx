"use client";

import useResizeObserver from "@/hooks/useResizeObserver";
import { DraftingCompass } from "lucide-react";
import React, { useRef, useState } from "react";
import Draggable from "react-draggable";
import DraggableIcon from "./DraggableIcon";
import PopupWindow from "./PopupWindow";

  const gridSize = 70;


const initialIcons = [
  { id: 1, x: 5, y: 5 + gridSize*0, content: "Icon 1", hoverSeleted: false, clickSelected:false},
  { id: 2, x: 5, y: 5 + gridSize*1, content: "Icon 2", hoverSeleted: false, clickSelected:false},
  { id: 3, x: 5, y: 5 + gridSize*2, content: "Icon 3", hoverSeleted: false, clickSelected:false},
  { id: 4, x: 5, y: 5 + gridSize*3, content: "Icon 4", hoverSeleted: false, clickSelected:false},
];

const Desktop = () => {
  const containerRef = useRef(null);
  const [ref, size] = useResizeObserver();

  const [icons, setIcons] = useState(initialIcons);

  const handleDragStop = (id, x, y) => {
    const p = calculateGridPosition(x, y);
    const updatedIcons = icons.map((icon) =>
      icon.id === id ? { ...icon, x: p.x, y: p.y } : icon
    );
    setIcons(updatedIcons);
    console.log(size);
  };

  const calculateGridPosition = (x, y) => {
    const gridX = Math.round(x / gridSize) * gridSize + 5;
    const gridY = Math.round(y / gridSize) * gridSize + 5;
    return {
      x: gridX + gridSize + 5 > size.width ? gridX - gridSize : gridX,
      y: gridY + gridSize + 30 > size.height ? gridY - gridSize : gridY,
    };
  };

  const onSelected = (id) => {
    const updatedIcons = icons.map((icon) =>
      icon.id === id ? { ...icon, clickSelected: !icon.clickSelected } : icon
    );
    setIcons(updatedIcons);
  }

  const openPopUpWindow = ()=>{

  }

  const customClick = (id) => {
    const updatedIcons = icons.map((icon) =>
      icon.id === id ? { ...icon, clickSelected: true } : { ...icon, clickSelected: false }
    );
    setIcons(updatedIcons);
  }

  return (
    <div className="flex-1 w-full h-[calc(100dvh - 3rem)]" ref={ref}>
      
      {icons.map((icon) => (
        <DraggableIcon
          key={icon.id}
          id={icon.id}
          onDragStop={handleDragStop}
          size={size}
          gridSize={gridSize}
          defaultPosition={{ x: 5, y: 5 }}
          position={{ x: icon.x, y: icon.y }}
          bounds={containerRef}
          onSelected={onSelected}
          clickSelected={icon.clickSelected}
          customClick={customClick}
          openPopUpWindow={openPopUpWindow}
        >
          {icon.content}
        </DraggableIcon>
      ))}
    </div>
  );
};

export default Desktop;
