"use client"
import { DraftingCompass } from 'lucide-react';
import React, { use, useEffect, useRef, useState } from 'react'
import { gsap } from "gsap";
import Draggable from "react-draggable";
import IconWindow from './IconWindow';
import { useGSAP } from '@gsap/react';

const DraggableIcon = ({
  id,
  children,
  onDragStop,
  gridSize,
  size,
  position,
  defaultPosition,
  bounds,
  onSelected,
  clickSelected,
  customClick,
  
}) => {
  const nodeRef = useRef(null);
  const nodeRef2 = useRef(null);
  const iconRef = useRef(null);

  const [winOpen, setWinOpen] = useState(false);

  const handleDragStop = (e, data) => {
    onDragStop(id, data.x, data.y);
  };
  const handleDrag = (e, data) => {
    console.log(data.x, data.y);
  };

  return (
    <>
      <Draggable
        nodeRef={nodeRef}
        onDrag={handleDrag}
        bounds="parent" //{{top: 5, left: 5, right: size.width - gridSize -5, bottom: size.height - gridSize - 20}}
        position={position}
        onStop={handleDragStop}
        scale={1}
        defaultPosition={defaultPosition}
        //   onMouseDown={() => {
        //     gsap.from(nodeRef.current, { scale: 0.9, duration: 0.75 });
        //   }}
      >
        <div
          className={`rounded absolute flex flex-col gap-1 items-center py-1 ${
            clickSelected ? "bg-neutral-50/20" : "hover:bg-neutral-50/10 "
          }`}
          ref={nodeRef}
          style={{
            width: gridSize,
            height: gridSize,
          }}
          onClick={() => {
            gsap.fromTo(iconRef.current, { scale: 0.85 }, { scale: 1 });
            clickSelected ? onSelected(id) : customClick(id);
          }}
          onDoubleClick={() => {
            setWinOpen(true);
          }}
        >
          <div
            className="w-[65%] h-[65%] aspect-square bg-blue-200 rounded flex items-center justify-center"
            ref={iconRef}
          ></div>
          <span className="text-xs text-white drop-shadow-lg">{children}</span>
        </div>
      </Draggable>
      {winOpen && (
          
          <IconWindow id={id} size={size} closeWindow={()=>{setWinOpen(false)}} children={children}/>
        
      )}
    </>
  );
};

export default DraggableIcon
