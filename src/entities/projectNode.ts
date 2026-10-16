import type { ActionItems } from "./actionItems";

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
  position: ProjectPosition;
  tickets?: ActionItems[];
};

export type { Project };
