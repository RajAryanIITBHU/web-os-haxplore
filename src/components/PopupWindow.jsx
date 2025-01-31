import React from "react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogFooter,
  DialogClose,
  DialogTitle,
} from "./ui/dialog";

const PopupWindow = ({children}) => {
  return (
    <Dialog>
      <DialogTrigger></DialogTrigger>
      <DialogContent>
        <DialogTitle ></DialogTitle>
        <p>This is a Window dialog!</p>
      </DialogContent>
      <DialogFooter>
        <DialogClose>Close</DialogClose>
      </DialogFooter>
    </Dialog>
  );
};

export default PopupWindow;
