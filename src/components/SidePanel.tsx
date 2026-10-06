import type { Project } from "../entities/projectNode";

type SidePanelProps = {
  project: Project | null;
  onClose: () => void;
};

export default function SidePanel({ project, onClose }: SidePanelProps) {
  if (!project) return null;

  return (
    <aside className="fixed right-4 top-4 z-[9999] w-1/3 rounded-lg border border-gray-200 bg-white p-6 shadow-md z-{999} h-screen">
      <h1 className="mb-2 text-xl font-bold tracking-tight text-gray-955">{project.name}</h1>
      <h1 className="mb-4 font-normal text-gray-700">{project.tickets}</h1>
      <button type="button" onClick={onClose}>
        X
      </button>
    </aside>
  );
}


