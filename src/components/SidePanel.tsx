import type { Project } from "../entities/projectNode";

type SidePanelProps = {
  project: Project | null;
  onClose: () => void;
};

export default function SidePanel({ project, onClose }: SidePanelProps) {
  if (!project) return null;

  return (
    <aside
      aria-label="Project details"
      className="fixed right-4 top-4 bottom-4 z-[9999] w-96 max-w-[calc(100vw_-_2rem)] rounded-xl border border-slate-200 bg-white p-5 shadow-xl shadow-slate-900/10"
    >
      <div className="flex items-center gap-3">
        <h1 className="min-w-0 flex-1 truncate text-lg font-semibold tracking-tight text-slate-900">
          {project.name}
        </h1>
        <span className="shrink-0 rounded-full bg-sky-50 px-3 py-1.5 text-sm font-semibold tabular-nums text-sky-800">
          {project.ticketNum} tickets
        </span>
        <button
          type="button"
          aria-label="Close project panel"
          onClick={onClose}
          className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-xl leading-none text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
        >
          ×
        </button>
      </div>
    </aside>
  );
}


