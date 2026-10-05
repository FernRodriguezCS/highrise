import { useRef } from "react";
import type { Project } from "../entities/projectNode";
import Draggable from 'react-draggable';

type ProjectNodeProps = {
    project: Project;
    onPositionChange: (position: {x:number,y:number}) => void;
};

export default function ProjectNode({project, onPositionChange} : ProjectNodeProps){
    const nodeRef = useRef<HTMLElement | null>(null);

    return (
        <Draggable 
            nodeRef={nodeRef}
            position={project.position ?? { x: 0, y: 0}}
            onStop={
                (_, data) => onPositionChange({x:data.x, y:data.y})
            }
            >
            <article ref={(element) => {nodeRef.current = element;}} className="box inline-flex w-fit max-w-full flex-wrap items-center gap-x-3 gap-y-1.5 rounded-full border border-slate-200 bg-white px-4 py-2 shadow-sm shadow-slate-900/10">
                <h2 className="break-words text-sm font-semibold leading-tight text-slate-900">
                    {project.name}
                </h2>
                <span aria-hidden="true" className="h-4 w-px shrink-0 bg-slate-200" />
                <span className="break-words rounded-full bg-slate-50 px-2 py-1 text-xs font-medium leading-tight text-slate-600">
                    {project.group}
                </span>
                <span className="rounded-full bg-sky-50 px-2.5 py-1 text-xs font-semibold leading-tight tabular-nums text-sky-800">
                    {project.tickets ?? 0} tickets
                </span>
            </article>
        </Draggable>
    );
}
