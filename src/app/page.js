
import DesktopContextMenu from "@/components/DesktopContextMenu";
import TaskbarContextMenu from "@/components/TaskbarContextMenu";

import Image from "next/image";

export default function Home() {


  
  return (
    <main className="w-full h-[100dvh] flex flex-col bg-[url(/wallpapers/w1.jpg)] bg-cover bg-center">
      <DesktopContextMenu />
      <TaskbarContextMenu />
    </main>
  );
}
