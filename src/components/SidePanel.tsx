import type { Project } from "../entities/projectNode";

type SidePanelProps = {
  project: Project | null;
  onClose: () => void;
};

export default function SidePanel({ project, onClose }: SidePanelProps) {
  if (!project) return null;

  return (
    <aside>
      <h1>{project.name}</h1>
      <h1>{project.id}</h1>
      <h1>{project.tickets}</h1>
      <button type="button" onClick={onClose}>
        X
      </button>
    </aside>
  );
}


