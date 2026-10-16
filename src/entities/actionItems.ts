export type ActionItems = {
  action: string;
  ticketNumber: number;
  difficulty: number;
  description: string;
  dueDate: string;
  classification:
  "BUG" |
  "TICKET";
  status:
  "BACKLOG" |
  "TODO" |
  "INPROGRESS" |
  "NEEDSREVIEW" |
  "DONE";
  priority: number;
}
