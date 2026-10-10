type ProjectPosition = {
  x: number;
  y: number;
}

type ActionItems = {
  action: string;
  difficulty: number;
  description: string;
}

type Project = {
  id: number;
  name: string;
  group:
  "Personal Project" |
  "Code Ninjas" |
  "FWD:DYNAMICS" |
  "Consulting";
  ticketNum: number;
  position: ProjectPosition;
  tickets?: ActionItems[];
};

export type { Project };
