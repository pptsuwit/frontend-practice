import { useState } from "react";

import "@/components/DropArea.css";
interface Props {
  sequence: number;
  handleDragOver: (e: React.DragEvent, sq: number) => void;
}
export default function DropArea(props: Readonly<Props>) {
  const [showDrop, setShowDrop] = useState(false);
  return (
    <div
      onDragOver={(e) => props.handleDragOver(e, props.sequence)}
      onDragEnter={() => setShowDrop(true)}
      onDragLeave={() => setShowDrop(false)}
      onDrop={() => setShowDrop(false)}
    >
      <div className={showDrop ? "drag__item__on" : "drag__empty"}>
        {showDrop && <>Drop Here</>}
      </div>
    </div>
  );
}
