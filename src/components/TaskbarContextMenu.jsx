import React from 'react'
import Taskbar from './Taskbar';
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";


const TaskbarContextMenu = () => {
  return (
    <ContextMenu>
      <ContextMenuTrigger asChild>
        <Taskbar/>
      </ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuItem>Profile</ContextMenuItem>
        <ContextMenuItem>Profile</ContextMenuItem>
        <ContextMenuItem>Profile</ContextMenuItem>
        <ContextMenuItem>Profile</ContextMenuItem>
        <ContextMenuItem>Profile</ContextMenuItem>
        <ContextMenuItem>Profile</ContextMenuItem>
        <ContextMenuItem>Profile</ContextMenuItem>
        
      </ContextMenuContent>
    </ContextMenu>
  );
}

export default TaskbarContextMenu
