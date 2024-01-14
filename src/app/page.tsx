"use client"
import React, { useState } from 'react';
import { DndContext } from '@dnd-kit/core';

import { Droppable, Draggable } from "@/app/components";

export default function App() {
  const containers = ['A', 'B', 'C'];
  const [parent, setParent] = useState(null);
  const draggableMarkup = (
    <Draggable id="draggable">Drag me</Draggable>
  );

  return (
    <div className="bg-black w-full min-h-[100vh] flex justify-center items-center">

      <DndContext onDragEnd={handleDragEnd}>
        <div className="flex flex-col rounded text-b w-48 divide-y-2 gap-y-4 min-h[200px] bg-zinc-100 border border-zinc-300 ">

          {parent === null ? draggableMarkup : null}

          {containers.map((id) => (
            <Droppable key={id} id={id}>
              {parent === id ? draggableMarkup : 'Drop here'}
            </Droppable>
          ))}
        </div>

      </DndContext>
    </div>
  );

  function handleDragEnd(event: any) {
    const { over } = event;

    setParent(over ? over.id : null);
  }
};