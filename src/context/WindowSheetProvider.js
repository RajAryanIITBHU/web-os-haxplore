"use client"
import { createContext, useContext, useEffect, useState } from "react";

const AppContext = createContext();

const WindowSheetProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  // useEffect(() => {
  //   window.addEventListener("click", (e) => {
  //     // console.log(e.target.id)
  //     if (e.target.id !== "WINDOW_SHEET" && e.target.id !== "WINDOW_BTN") {
  //       setIsOpen(false);
  //     }
  //   });
  // },[isOpen,setIsOpen]);

  return (
    <AppContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </AppContext.Provider>
  );
};

const useWindowSheetContext = () => {
  return useContext(AppContext);
};

export { AppContext, WindowSheetProvider, useWindowSheetContext };
