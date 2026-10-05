type ProjectPosition = {
  x: number;
  y: number;
}

type Project = {
  id: number;
  name: string;
  group:
  "Personal Project" |
  "Code Ninjas" |
  "FWD:DYNAMICS" |
  "Consulting";
  tickets: number;
  position: ProjectPosition;
};

export type { Project };
