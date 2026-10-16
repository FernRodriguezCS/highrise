import type { Project } from "../entities/projectNode";

const statusLabels = {
  BACKLOG: "Backlog",
  TODO: "To do",
  INPROGRESS: "In progress",
  NEEDSREVIEW: "Needs review",
  DONE: "Done",
};

type SidePanelProps = {
  project: Project | null;
  onClose: () => void;
};

export default function SidePanel({ project, onClose }: SidePanelProps) {
  if (!project) return null;
  const ticketCount = project.tickets?.length ?? 0;

  return (
    <aside
      aria-label="Project details"
      className="fixed right-4 top-4 bottom-4 z-[9999] flex w-96 max-w-[calc(100vw_-_2rem)] flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-xl shadow-slate-900/10"
    >
      <div className="flex shrink-0 items-start gap-3 border-b border-slate-200 p-5">
        <div className="min-w-0 flex-1">
          <h1 className="break-words text-lg font-semibold tracking-tight text-slate-900">
            {project.name}
          </h1>
          <p className="mt-1 text-sm text-slate-500">{project.group}</p>
        </div>
        <button
          type="button"
          aria-label="Close project panel"
          onClick={onClose}
          className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-xl leading-none text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
        >
          ×
        </button>
      </div>

      <section aria-labelledby="action-items-heading" className="min-h-0 flex-1 overflow-y-auto p-5">
        <div className="mb-3 flex items-center justify-between gap-3">
          <h2 id="action-items-heading" className="text-sm font-medium text-slate-700">
            Action items
          </h2>
          <span className="rounded-md border border-slate-200 px-2 py-0.5 text-xs tabular-nums text-slate-500">
            {ticketCount} {ticketCount === 1 ? "ticket" : "tickets"}
          </span>
        </div>

        {ticketCount > 0 ? (
          <ul className="space-y-2">
            {project.tickets?.map((ticket, index) => (
              <li key={`${project.id}-${index}`}>
                <details className="group overflow-hidden rounded-lg border border-slate-200 bg-white open:border-slate-300">
                  <summary className="flex cursor-pointer list-none items-start gap-3 rounded-lg p-3 transition-colors duration-150 hover:bg-slate-50 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-sky-600 motion-reduce:transition-none [&::-webkit-details-marker]:hidden">
                    <div className="min-w-0 flex-1">
                      <h3 className="break-words text-sm font-medium leading-5 text-slate-900">
                        {ticket.action}
                      </h3>
                      <div className="mt-2 flex flex-wrap items-center gap-2 text-xs text-slate-500">
                        <span className="rounded border border-slate-200 px-1.5 py-0.5">
                          {ticket.classification === "BUG" ? "Bug" : "Ticket"}
                        </span>
                        <span>{statusLabels[ticket.status]}</span>
                      </div>
                    </div>
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 20 20"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      className="mt-0.5 size-4 shrink-0 text-slate-400 transition-transform duration-150 group-open:rotate-90 motion-reduce:transition-none"
                    >
                      <path d="m7.5 5 5 5-5 5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </summary>
                  <div className="border-t border-slate-100 px-3 py-3">
                    <p className="break-words text-sm leading-6 text-slate-600">
                      {ticket.description}
                    </p>
                    <dl className="mt-3 grid grid-cols-3 gap-3 text-xs">
                      <div>
                        <dt className="text-slate-500">Due date</dt>
                        <dd className="mt-1 break-words font-medium tabular-nums text-slate-700">
                          <time dateTime={ticket.dueDate}>{ticket.dueDate}</time>
                        </dd>
                      </div>
                      <div>
                        <dt className="text-slate-500">Priority</dt>
                        <dd className="mt-1 font-medium tabular-nums text-slate-700">{ticket.priority}</dd>
                      </div>
                      <div>
                        <dt className="text-slate-500">Difficulty</dt>
                        <dd className="mt-1 font-medium tabular-nums text-slate-700">{ticket.difficulty}</dd>
                      </div>
                    </dl>
                  </div>
                </details>
              </li>
            ))}
          </ul>
        ) : (
          <p className="rounded-lg border border-dashed border-slate-200 p-4 text-sm text-slate-500">
            No action items yet.
          </p>
        )}
      </section>
    </aside>
  );
}


