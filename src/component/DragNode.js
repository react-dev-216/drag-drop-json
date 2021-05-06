import React from 'react';
import { DragPreviewImage, useDrag }  from 'react-dnd';

import DragImage from '../assets/image/drag-image.png';

export const DRAG_NODE = "DRAG_NODE";

export default function DragNode({ id, name, sateName, date, handleMouseDown, children }) {
  const [{ isDragging }, drag, preview] = useDrag({
    type: DRAG_NODE,
    item: { id, name, sateName, date},
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging()
    }),
  });
  const previewImage = (type) => {

  }
  return (
    <>
      <DragPreviewImage connect={preview} src={DragImage}/>
      <div
        ref={drag}
        className="container"
        onMouseDown={handleMouseDown}
        style={{ opacity: isDragging ? 0.5 : 1}}
      >
        {children}
      </div>
    </>
  )
}

