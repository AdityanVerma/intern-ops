function StatCard() {
  return (
    <div
      data-slot="card"
      className="text-card-foreground flex flex-col gap-6 rounded-xl border-2 border-blue-500/20 bg-blue-500/10 py-6 shadow-sm"
    >
      <div
        data-slot="card-header"
        className="@container/card-header flex auto-rows-min grid-rows-[auto_auto] flex-row items-center justify-between gap-2 space-y-0 px-6 pb-2 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6"
      >
        <div className="text-muted-foreground text-sm font-medium">
          Total Interns
        </div>
        <div className="text-blue-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-users h-6 w-6"
            aria-hidden="true"
          >
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
            <path d="M16 3.128a4 4 0 0 1 0 7.744"></path>
            <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
            <circle cx="9" cy="7" r="4"></circle>
          </svg>
        </div>
      </div>
      <div data-slot="card-content" className="space-y-2 px-6">
        <div className="text-3xl font-bold">24</div>
        <div className="flex items-center gap-1 text-sm">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-trending-up h-4 w-4 text-blue-500"
            aria-hidden="true"
          >
            <path d="M16 7h6v6"></path>
            <path d="m22 7-8.5 8.5-5-5L2 17"></path>
          </svg>
          <span className="text-blue-500"> from last month</span>
        </div>
      </div>
    </div>
  );
}

export default StatCard;
