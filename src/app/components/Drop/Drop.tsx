import React, { ReactNode } from 'react';
import { useDroppable, useDraggable } from '@dnd-kit/core';

interface DropppableProps {
  id: string
  children: ReactNode
}

export function Droppable({ id, ...props }: DropppableProps) {
  const { isOver, setNodeRef } = useDroppable({
    id: id
  });
  const style = isOver && 'bg-orange-400'


  return (
    <div ref={setNodeRef} className={"h-10  " + style}>
      {props.children}
    </div>
  );
}

export function Draggable(props: any) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: 'draggable',
  });
  // const style = transform ? {
  //   transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
  // } : undefined;


  return (
    <button
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      className="h-10 bg-emerald-500 w-full "
    >
      {props.children}
    </button>
  );
}