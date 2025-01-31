"use client"
import Draggable from 'react-draggable';
import React, { useCallback, useRef, useState } from 'react'
import gsap from 'gsap';

const IconWindow = ({id,size, closeWindow,children}) => {
    const [full , setFull] = useState(false)
    const nodeRef = useRef(null);
    const [position, setPosition] = useState({ x: 40, y: 50 });

    const defaultPosition = { x: 0, y: 0 };

    const handleDragStop = (e, data) => {}
    const handleDrag = useCallback((e, data) => {
        setPosition({ x: data.x, y: data.y });
    },[])

  return (
    <Draggable
      nodeRef={nodeRef}
      onDrag={handleDrag}
      position={full ? { x: 0, y: 0 } : position}
      onStop={() => {}}
      defaultPosition={{ x: 40, y: 50 }}
      bounds={{ top: 0, left: 0, right: size.width - 100, bottom: size.height - 100 }}
      disabled={full}
    >
      <div
        ref={nodeRef}
        id={`WINDOW_${id}`}
        className={`absolute z-10 bg-neutral-200 flex flex-col rounded-lg shadow-lg transition-all duration-100 ease-in-out`}
        style={{
          width: full ? size.width : "60%",
          height: full ? size.height : "50%",
          
          
        }}
      >
        <div className="w-full h-8 bg-neutral-100 flex justify-end px-1 py-1">
          <div className="w-4 h-4 transition hover:bg-red-700 bg-red-500 rounded-full m-1"></div>
          <div
            className="w-4 h-4 transition hover:bg-yellow-700 bg-yellow-500 rounded-full m-1"
            onClick={() => {
                
              setFull(!full);
            }}
          ></div>
          <div
            className="w-4 h-4 transition hover:bg-green-700 bg-green-500 rounded-full m-1"
            onClick={() =>
              gsap.to(`#WINDOW_${id}`, {
                scale: 0.5,
                opacity: 0,
                duration: 0.1,
                y: "100%",
                onComplete: () => closeWindow(true),
              })
            }
          ></div>
        </div>
        <div className="flex-1 p-1">{children}</div>
      </div>
    </Draggable>
  );
}

export default IconWindow
