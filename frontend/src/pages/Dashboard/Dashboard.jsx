import DashHeader from '../../components/Dashboard/DashHeader';
import StatCard from '../../components/Dashboard/StatCard';

// function Dashboard() {
//   return (
//     <main className="flex flex-col transition-all duration-300 lg:ml-64">
//       {/* <header className="bg-card/80 border-border sticky top-0 z-10 border-b backdrop-blur">
//         <div className="px-6 py-4 lg:py-6">
//           <div className="flex items-center justify-between">
//             <div>
//               <h1 className="text-3xl font-bold text-pretty">Dashboard</h1>
//               <p className="text-muted-foreground">
//                 Welcome back! Here's your internship overview.
//               </p>
//             </div>
//             <button
//               data-slot="button"
//               className="[&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 [&amp;_svg]:shrink-0 focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-primary text-primary-foreground hover:bg-primary/90 has-[&gt;svg]:px-3 hidden h-9 shrink-0 items-center justify-center gap-2 rounded-md px-4 py-2 text-sm font-medium whitespace-nowrap transition-all outline-none focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 sm:flex"
//             >
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="24"
//                 height="24"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 stroke-width="2"
//                 stroke-linecap="round"
//                 stroke-linejoin="round"
//                 className="lucide lucide-users h-4 w-4"
//                 aria-hidden="true"
//               >
//                 <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
//                 <path d="M16 3.128a4 4 0 0 1 0 7.744"></path>
//                 <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
//                 <circle cx="9" cy="7" r="4"></circle>
//               </svg>
//               Add New Intern
//             </button>
//           </div>
//         </div>
//       </header> */}

//       <div className="space-y-8 p-6 lg:p-8">
//         <section className="space-y-4">
//           <h2 className="text-lg font-semibold">Overview</h2>
//           <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
//             {/* <div
//               data-slot="card"
//               className="text-card-foreground flex flex-col gap-6 rounded-xl border-2 border-blue-500/20 bg-blue-500/10 py-6 shadow-sm"
//             >
//               <div
//                 data-slot="card-header"
//                 className="@container/card-header flex auto-rows-min grid-rows-[auto_auto] flex-row items-center justify-between gap-2 space-y-0 px-6 pb-2 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6"
//               >
//                 <div className="text-muted-foreground text-sm font-medium">
//                   Total Interns
//                 </div>
//                 <div className="text-blue-500">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="24"
//                     height="24"
//                     viewBox="0 0 24 24"
//                     fill="none"
//                     stroke="currentColor"
//                     stroke-width="2"
//                     stroke-linecap="round"
//                     stroke-linejoin="round"
//                     className="lucide lucide-users h-6 w-6"
//                     aria-hidden="true"
//                   >
//                     <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
//                     <path d="M16 3.128a4 4 0 0 1 0 7.744"></path>
//                     <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
//                     <circle cx="9" cy="7" r="4"></circle>
//                   </svg>
//                 </div>
//               </div>
//               <div data-slot="card-content" className="space-y-2 px-6">
//                 <div className="text-3xl font-bold">24</div>
//                 <div className="flex items-center gap-1 text-sm">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="24"
//                     height="24"
//                     viewBox="0 0 24 24"
//                     fill="none"
//                     stroke="currentColor"
//                     stroke-width="2"
//                     stroke-linecap="round"
//                     stroke-linejoin="round"
//                     className="lucide lucide-trending-up h-4 w-4 text-blue-500"
//                     aria-hidden="true"
//                   >
//                     <path d="M16 7h6v6"></path>
//                     <path d="m22 7-8.5 8.5-5-5L2 17"></path>
//                   </svg>
//                   <span className="text-blue-500"> from last month</span>
//                 </div>
//               </div>
//             </div>
//             <div
//               data-slot="card"
//               className="text-card-foreground flex flex-col gap-6 rounded-xl border-2 border-green-500/20 bg-green-500/10 py-6 shadow-sm"
//             >
//               <div
//                 data-slot="card-header"
//                 className="@container/card-header flex auto-rows-min grid-rows-[auto_auto] flex-row items-center justify-between gap-2 space-y-0 px-6 pb-2 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6"
//               >
//                 <div className="text-muted-foreground text-sm font-medium">
//                   Active Interns
//                 </div>
//                 <div className="text-green-500">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="24"
//                     height="24"
//                     viewBox="0 0 24 24"
//                     fill="none"
//                     stroke="currentColor"
//                     stroke-width="2"
//                     stroke-linecap="round"
//                     stroke-linejoin="round"
//                     className="lucide lucide-user-check h-6 w-6"
//                     aria-hidden="true"
//                   >
//                     <path d="m16 11 2 2 4-4"></path>
//                     <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
//                     <circle cx="9" cy="7" r="4"></circle>
//                   </svg>
//                 </div>
//               </div>
//               <div data-slot="card-content" className="space-y-2 px-6">
//                 <div className="text-3xl font-bold">15</div>
//                 <div className="flex items-center gap-1 text-sm">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="24"
//                     height="24"
//                     viewBox="0 0 24 24"
//                     fill="none"
//                     stroke="currentColor"
//                     stroke-width="2"
//                     stroke-linecap="round"
//                     stroke-linejoin="round"
//                     className="lucide lucide-trending-up h-4 w-4 text-green-500"
//                     aria-hidden="true"
//                   >
//                     <path d="M16 7h6v6"></path>
//                     <path d="m22 7-8.5 8.5-5-5L2 17"></path>
//                   </svg>
//                   <span className="text-green-500">from last month</span>
//                 </div>
//               </div>
//             </div>
//             <div
//               data-slot="card"
//               className="text-card-foreground flex flex-col gap-6 rounded-xl border-2 border-amber-500/20 bg-amber-500/10 py-6 shadow-sm"
//             >
//               <div
//                 data-slot="card-header"
//                 className="@container/card-header flex auto-rows-min grid-rows-[auto_auto] flex-row items-center justify-between gap-2 space-y-0 px-6 pb-2 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6"
//               >
//                 <div className="text-muted-foreground text-sm font-medium">
//                   Completed
//                 </div>
//                 <div className="text-amber-500">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="24"
//                     height="24"
//                     viewBox="0 0 24 24"
//                     fill="none"
//                     stroke="currentColor"
//                     stroke-width="2"
//                     stroke-linecap="round"
//                     stroke-linejoin="round"
//                     className="lucide lucide-briefcase h-6 w-6"
//                     aria-hidden="true"
//                   >
//                     <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
//                     <rect width="20" height="14" x="2" y="6" rx="2"></rect>
//                   </svg>
//                 </div>
//               </div>
//               <div data-slot="card-content" className="space-y-2 px-6">
//                 <div className="text-3xl font-bold">7</div>
//                 <div className="flex items-center gap-1 text-sm">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="24"
//                     height="24"
//                     viewBox="0 0 24 24"
//                     fill="none"
//                     stroke="currentColor"
//                     stroke-width="2"
//                     stroke-linecap="round"
//                     stroke-linejoin="round"
//                     className="lucide lucide-trending-up h-4 w-4 text-amber-500"
//                     aria-hidden="true"
//                   >
//                     <path d="M16 7h6v6"></path>
//                     <path d="m22 7-8.5 8.5-5-5L2 17"></path>
//                   </svg>
//                   <span className="text-amber-500">from last month</span>
//                 </div>
//               </div>
//             </div>
//             <div
//               data-slot="card"
//               className="text-card-foreground flex flex-col gap-6 rounded-xl border-2 border-red-500/20 bg-red-500/10 py-6 shadow-sm"
//             >
//               <div
//                 data-slot="card-header"
//                 className="@container/card-header flex auto-rows-min grid-rows-[auto_auto] flex-row items-center justify-between gap-2 space-y-0 px-6 pb-2 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6"
//               >
//                 <div className="text-muted-foreground text-sm font-medium">
//                   Pending
//                 </div>
//                 <div className="text-red-500">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="24"
//                     height="24"
//                     viewBox="0 0 24 24"
//                     fill="none"
//                     stroke="currentColor"
//                     stroke-width="2"
//                     stroke-linecap="round"
//                     stroke-linejoin="round"
//                     className="lucide lucide-clock h-6 w-6"
//                     aria-hidden="true"
//                   >
//                     <path d="M12 6v6l4 2"></path>
//                     <circle cx="12" cy="12" r="10"></circle>
//                   </svg>
//                 </div>
//               </div>
//               <div data-slot="card-content" className="space-y-2 px-6">
//                 <div className="text-3xl font-bold">2</div>
//                 <div className="flex items-center gap-1 text-sm">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="24"
//                     height="24"
//                     viewBox="0 0 24 24"
//                     fill="none"
//                     stroke="currentColor"
//                     stroke-width="2"
//                     stroke-linecap="round"
//                     stroke-linejoin="round"
//                     className="lucide lucide-trending-up h-4 w-4 text-red-500"
//                     aria-hidden="true"
//                   >
//                     <path d="M16 7h6v6"></path>
//                     <path d="m22 7-8.5 8.5-5-5L2 17"></path>
//                   </svg>
//                   <span className="text-red-500"> from last month</span>
//                 </div>
//               </div>
//             </div> */}
//             <StatCard />
//           </div>
//         </section>
//         <section className="space-y-4">
//           <div className="flex items-center justify-between">
//             <h2 className="text-lg font-semibold">Interns Management</h2>
//             <div className="flex gap-2">
//               <input
//                 type="text"
//                 placeholder="Search interns..."
//                 className="bg-card border-border text-foreground placeholder:text-muted-foreground focus:ring-primary rounded-lg border px-4 py-2 focus:ring-2 focus:outline-none"
//               />
//             </div>
//           </div>
//           <div
//             data-slot="card"
//             className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm"
//           >
//             <div
//               data-slot="card-header"
//               className="border-border @container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 border-b px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6"
//             >
//               <div
//                 data-slot="card-title"
//                 className="leading-none font-semibold text-balance"
//               >
//                 Interns Directory
//               </div>
//             </div>
//             <div data-slot="card-content" className="px-6 pt-6">
//               <div className="overflow-x-auto">
//                 <div
//                   data-slot="table-container"
//                   className="relative w-full overflow-x-auto"
//                 >
//                   <table
//                     data-slot="table"
//                     className="w-full caption-bottom text-sm"
//                   >
//                     <thead
//                       data-slot="table-header"
//                       className="[&amp;_tr]:border-b"
//                     >
//                       <tr
//                         data-slot="table-row"
//                         className="hover:bg-muted/50 data-[state=selected]:bg-muted border-border border-b transition-colors"
//                       >
//                         <th
//                           data-slot="table-head"
//                           className="[&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px] text-muted-foreground h-10 px-2 text-left align-middle font-semibold whitespace-nowrap"
//                         >
//                           Name
//                         </th>
//                         <th
//                           data-slot="table-head"
//                           className="[&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px] text-muted-foreground h-10 px-2 text-left align-middle font-semibold whitespace-nowrap"
//                         >
//                           College
//                         </th>
//                         <th
//                           data-slot="table-head"
//                           className="[&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px] text-muted-foreground h-10 px-2 text-left align-middle font-semibold whitespace-nowrap"
//                         >
//                           Course
//                         </th>
//                         <th
//                           data-slot="table-head"
//                           className="[&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px] text-muted-foreground h-10 px-2 text-left align-middle font-semibold whitespace-nowrap"
//                         >
//                           Status
//                         </th>
//                         <th
//                           data-slot="table-head"
//                           className="[&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px] text-muted-foreground h-10 px-2 text-left align-middle font-semibold whitespace-nowrap"
//                         >
//                           Mentor
//                         </th>
//                         <th
//                           data-slot="table-head"
//                           className="[&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px] text-muted-foreground h-10 px-2 text-right align-middle font-semibold whitespace-nowrap"
//                         >
//                           Actions
//                         </th>
//                       </tr>
//                     </thead>
//                     <tbody
//                       data-slot="table-body"
//                       className="[&amp;_tr:last-child]:border-0"
//                     >
//                       <tr
//                         data-slot="table-row"
//                         className="data-[state=selected]:bg-muted border-border hover:bg-card border-b transition-colors"
//                       >
//                         <td
//                           data-slot="table-cell"
//                           className="[&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px] p-2 align-middle font-medium whitespace-nowrap"
//                         >
//                           Sarah Johnson
//                         </td>
//                         <td
//                           data-slot="table-cell"
//                           className="[&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px] text-muted-foreground p-2 align-middle whitespace-nowrap"
//                         >
//                           MIT
//                         </td>
//                         <td
//                           data-slot="table-cell"
//                           className="[&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px] text-muted-foreground p-2 align-middle whitespace-nowrap"
//                         >
//                           Computer Science
//                         </td>
//                         <td
//                           data-slot="table-cell"
//                           className="[&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px] p-2 align-middle whitespace-nowrap"
//                         >
//                           <span
//                             data-slot="badge"
//                             className="[&amp;&gt;svg]:size-3 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive [a&amp;]:hover:bg-accent [a&amp;]:hover:text-accent-foreground inline-flex w-fit shrink-0 items-center justify-center gap-1 overflow-hidden rounded-md border-2 border-green-500/20 bg-green-500/10 px-2 py-0.5 text-xs font-medium whitespace-nowrap text-green-500 transition-[color,box-shadow] focus-visible:ring-[3px]"
//                           >
//                             <svg
//                               xmlns="http://www.w3.org/2000/svg"
//                               width="24"
//                               height="24"
//                               viewBox="0 0 24 24"
//                               fill="none"
//                               stroke="currentColor"
//                               stroke-width="2"
//                               stroke-linecap="round"
//                               stroke-linejoin="round"
//                               className="lucide lucide-circle-check mr-1 h-3 w-3"
//                               aria-hidden="true"
//                             >
//                               <circle cx="12" cy="12" r="10"></circle>
//                               <path d="m9 12 2 2 4-4"></path>
//                             </svg>
//                             Active
//                           </span>
//                         </td>
//                         <td
//                           data-slot="table-cell"
//                           className="[&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px] text-muted-foreground p-2 align-middle whitespace-nowrap"
//                         >
//                           Dr. Michael Chen
//                         </td>
//                         <td
//                           data-slot="table-cell"
//                           className="[&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px] p-2 text-right align-middle whitespace-nowrap"
//                         >
//                           <button
//                             data-slot="dropdown-menu-trigger"
//                             className="[&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 [&amp;_svg]:shrink-0 focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50 has-[&gt;svg]:px-3 inline-flex h-8 w-8 shrink-0 items-center justify-center gap-2 rounded-md p-0 text-sm font-medium whitespace-nowrap transition-all outline-none focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50"
//                             type="button"
//                             id="radix-_R_66laindlb_"
//                             aria-haspopup="menu"
//                             aria-expanded="false"
//                             data-state="closed"
//                           >
//                             <svg
//                               xmlns="http://www.w3.org/2000/svg"
//                               width="24"
//                               height="24"
//                               viewBox="0 0 24 24"
//                               fill="none"
//                               stroke="currentColor"
//                               stroke-width="2"
//                               stroke-linecap="round"
//                               stroke-linejoin="round"
//                               className="lucide lucide-ellipsis h-4 w-4"
//                               aria-hidden="true"
//                             >
//                               <circle cx="12" cy="12" r="1"></circle>
//                               <circle cx="19" cy="12" r="1"></circle>
//                               <circle cx="5" cy="12" r="1"></circle>
//                             </svg>
//                           </button>
//                         </td>
//                       </tr>
//                       <tr
//                         data-slot="table-row"
//                         className="data-[state=selected]:bg-muted border-border hover:bg-card border-b transition-colors"
//                       >
//                         <td
//                           data-slot="table-cell"
//                           className="[&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px] p-2 align-middle font-medium whitespace-nowrap"
//                         >
//                           Alex Rodriguez
//                         </td>
//                         <td
//                           data-slot="table-cell"
//                           className="[&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px] text-muted-foreground p-2 align-middle whitespace-nowrap"
//                         >
//                           Stanford
//                         </td>
//                         <td
//                           data-slot="table-cell"
//                           className="[&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px] text-muted-foreground p-2 align-middle whitespace-nowrap"
//                         >
//                           Software Engineering
//                         </td>
//                         <td
//                           data-slot="table-cell"
//                           className="[&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px] p-2 align-middle whitespace-nowrap"
//                         >
//                           <span
//                             data-slot="badge"
//                             className="[&amp;&gt;svg]:size-3 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive [a&amp;]:hover:bg-accent [a&amp;]:hover:text-accent-foreground inline-flex w-fit shrink-0 items-center justify-center gap-1 overflow-hidden rounded-md border-2 border-green-500/20 bg-green-500/10 px-2 py-0.5 text-xs font-medium whitespace-nowrap text-green-500 transition-[color,box-shadow] focus-visible:ring-[3px]"
//                           >
//                             <svg
//                               xmlns="http://www.w3.org/2000/svg"
//                               width="24"
//                               height="24"
//                               viewBox="0 0 24 24"
//                               fill="none"
//                               stroke="currentColor"
//                               stroke-width="2"
//                               stroke-linecap="round"
//                               stroke-linejoin="round"
//                               className="lucide lucide-circle-check mr-1 h-3 w-3"
//                               aria-hidden="true"
//                             >
//                               <circle cx="12" cy="12" r="10"></circle>
//                               <path d="m9 12 2 2 4-4"></path>
//                             </svg>
//                             Active
//                           </span>
//                         </td>
//                         <td
//                           data-slot="table-cell"
//                           className="[&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px] text-muted-foreground p-2 align-middle whitespace-nowrap"
//                         >
//                           Emma Watson
//                         </td>
//                         <td
//                           data-slot="table-cell"
//                           className="[&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px] p-2 text-right align-middle whitespace-nowrap"
//                         >
//                           <button
//                             data-slot="dropdown-menu-trigger"
//                             className="[&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 [&amp;_svg]:shrink-0 focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50 has-[&gt;svg]:px-3 inline-flex h-8 w-8 shrink-0 items-center justify-center gap-2 rounded-md p-0 text-sm font-medium whitespace-nowrap transition-all outline-none focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50"
//                             type="button"
//                             id="radix-_R_6alaindlb_"
//                             aria-haspopup="menu"
//                             aria-expanded="false"
//                             data-state="closed"
//                           >
//                             <svg
//                               xmlns="http://www.w3.org/2000/svg"
//                               width="24"
//                               height="24"
//                               viewBox="0 0 24 24"
//                               fill="none"
//                               stroke="currentColor"
//                               stroke-width="2"
//                               stroke-linecap="round"
//                               stroke-linejoin="round"
//                               className="lucide lucide-ellipsis h-4 w-4"
//                               aria-hidden="true"
//                             >
//                               <circle cx="12" cy="12" r="1"></circle>
//                               <circle cx="19" cy="12" r="1"></circle>
//                               <circle cx="5" cy="12" r="1"></circle>
//                             </svg>
//                           </button>
//                         </td>
//                       </tr>
//                       <tr
//                         data-slot="table-row"
//                         className="data-[state=selected]:bg-muted border-border hover:bg-card border-b transition-colors"
//                       >
//                         <td
//                           data-slot="table-cell"
//                           className="[&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px] p-2 align-middle font-medium whitespace-nowrap"
//                         >
//                           Priya Patel
//                         </td>
//                         <td
//                           data-slot="table-cell"
//                           className="[&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px] text-muted-foreground p-2 align-middle whitespace-nowrap"
//                         >
//                           Berkeley
//                         </td>
//                         <td
//                           data-slot="table-cell"
//                           className="[&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px] text-muted-foreground p-2 align-middle whitespace-nowrap"
//                         >
//                           Data Science
//                         </td>
//                         <td
//                           data-slot="table-cell"
//                           className="[&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px] p-2 align-middle whitespace-nowrap"
//                         >
//                           <span
//                             data-slot="badge"
//                             className="[&amp;&gt;svg]:size-3 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive [a&amp;]:hover:bg-accent [a&amp;]:hover:text-accent-foreground inline-flex w-fit shrink-0 items-center justify-center gap-1 overflow-hidden rounded-md border-2 border-blue-500/20 bg-blue-500/10 px-2 py-0.5 text-xs font-medium whitespace-nowrap text-blue-500 transition-[color,box-shadow] focus-visible:ring-[3px]"
//                           >
//                             <svg
//                               xmlns="http://www.w3.org/2000/svg"
//                               width="24"
//                               height="24"
//                               viewBox="0 0 24 24"
//                               fill="none"
//                               stroke="currentColor"
//                               stroke-width="2"
//                               stroke-linecap="round"
//                               stroke-linejoin="round"
//                               className="lucide lucide-circle-check mr-1 h-3 w-3"
//                               aria-hidden="true"
//                             >
//                               <circle cx="12" cy="12" r="10"></circle>
//                               <path d="m9 12 2 2 4-4"></path>
//                             </svg>
//                             Completed
//                           </span>
//                         </td>
//                         <td
//                           data-slot="table-cell"
//                           className="[&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px] text-muted-foreground p-2 align-middle whitespace-nowrap"
//                         >
//                           John Smith
//                         </td>
//                         <td
//                           data-slot="table-cell"
//                           className="[&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px] p-2 text-right align-middle whitespace-nowrap"
//                         >
//                           <button
//                             data-slot="dropdown-menu-trigger"
//                             className="[&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 [&amp;_svg]:shrink-0 focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50 has-[&gt;svg]:px-3 inline-flex h-8 w-8 shrink-0 items-center justify-center gap-2 rounded-md p-0 text-sm font-medium whitespace-nowrap transition-all outline-none focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50"
//                             type="button"
//                             id="radix-_R_6elaindlb_"
//                             aria-haspopup="menu"
//                             aria-expanded="false"
//                             data-state="closed"
//                           >
//                             <svg
//                               xmlns="http://www.w3.org/2000/svg"
//                               width="24"
//                               height="24"
//                               viewBox="0 0 24 24"
//                               fill="none"
//                               stroke="currentColor"
//                               stroke-width="2"
//                               stroke-linecap="round"
//                               stroke-linejoin="round"
//                               className="lucide lucide-ellipsis h-4 w-4"
//                               aria-hidden="true"
//                             >
//                               <circle cx="12" cy="12" r="1"></circle>
//                               <circle cx="19" cy="12" r="1"></circle>
//                               <circle cx="5" cy="12" r="1"></circle>
//                             </svg>
//                           </button>
//                         </td>
//                       </tr>
//                       <tr
//                         data-slot="table-row"
//                         className="data-[state=selected]:bg-muted border-border hover:bg-card border-b transition-colors"
//                       >
//                         <td
//                           data-slot="table-cell"
//                           className="[&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px] p-2 align-middle font-medium whitespace-nowrap"
//                         >
//                           James Wilson
//                         </td>
//                         <td
//                           data-slot="table-cell"
//                           className="[&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px] text-muted-foreground p-2 align-middle whitespace-nowrap"
//                         >
//                           CMU
//                         </td>
//                         <td
//                           data-slot="table-cell"
//                           className="[&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px] text-muted-foreground p-2 align-middle whitespace-nowrap"
//                         >
//                           AI &amp; Machine Learning
//                         </td>
//                         <td
//                           data-slot="table-cell"
//                           className="[&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px] p-2 align-middle whitespace-nowrap"
//                         >
//                           <span
//                             data-slot="badge"
//                             className="[&amp;&gt;svg]:size-3 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive [a&amp;]:hover:bg-accent [a&amp;]:hover:text-accent-foreground inline-flex w-fit shrink-0 items-center justify-center gap-1 overflow-hidden rounded-md border-2 border-green-500/20 bg-green-500/10 px-2 py-0.5 text-xs font-medium whitespace-nowrap text-green-500 transition-[color,box-shadow] focus-visible:ring-[3px]"
//                           >
//                             <svg
//                               xmlns="http://www.w3.org/2000/svg"
//                               width="24"
//                               height="24"
//                               viewBox="0 0 24 24"
//                               fill="none"
//                               stroke="currentColor"
//                               stroke-width="2"
//                               stroke-linecap="round"
//                               stroke-linejoin="round"
//                               className="lucide lucide-circle-check mr-1 h-3 w-3"
//                               aria-hidden="true"
//                             >
//                               <circle cx="12" cy="12" r="10"></circle>
//                               <path d="m9 12 2 2 4-4"></path>
//                             </svg>
//                             Active
//                           </span>
//                         </td>
//                         <td
//                           data-slot="table-cell"
//                           className="[&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px] text-muted-foreground p-2 align-middle whitespace-nowrap"
//                         >
//                           Dr. Lisa Wong
//                         </td>
//                         <td
//                           data-slot="table-cell"
//                           className="[&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px] p-2 text-right align-middle whitespace-nowrap"
//                         >
//                           <button
//                             data-slot="dropdown-menu-trigger"
//                             className="[&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 [&amp;_svg]:shrink-0 focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50 has-[&gt;svg]:px-3 inline-flex h-8 w-8 shrink-0 items-center justify-center gap-2 rounded-md p-0 text-sm font-medium whitespace-nowrap transition-all outline-none focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50"
//                             type="button"
//                             id="radix-_R_6ilaindlb_"
//                             aria-haspopup="menu"
//                             aria-expanded="false"
//                             data-state="closed"
//                           >
//                             <svg
//                               xmlns="http://www.w3.org/2000/svg"
//                               width="24"
//                               height="24"
//                               viewBox="0 0 24 24"
//                               fill="none"
//                               stroke="currentColor"
//                               stroke-width="2"
//                               stroke-linecap="round"
//                               stroke-linejoin="round"
//                               className="lucide lucide-ellipsis h-4 w-4"
//                               aria-hidden="true"
//                             >
//                               <circle cx="12" cy="12" r="1"></circle>
//                               <circle cx="19" cy="12" r="1"></circle>
//                               <circle cx="5" cy="12" r="1"></circle>
//                             </svg>
//                           </button>
//                         </td>
//                       </tr>
//                       <tr
//                         data-slot="table-row"
//                         className="data-[state=selected]:bg-muted border-border hover:bg-card border-b transition-colors"
//                       >
//                         <td
//                           data-slot="table-cell"
//                           className="[&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px] p-2 align-middle font-medium whitespace-nowrap"
//                         >
//                           Emma Thompson
//                         </td>
//                         <td
//                           data-slot="table-cell"
//                           className="[&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px] text-muted-foreground p-2 align-middle whitespace-nowrap"
//                         >
//                           Harvard
//                         </td>
//                         <td
//                           data-slot="table-cell"
//                           className="[&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px] text-muted-foreground p-2 align-middle whitespace-nowrap"
//                         >
//                           Business Analytics
//                         </td>
//                         <td
//                           data-slot="table-cell"
//                           className="[&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px] p-2 align-middle whitespace-nowrap"
//                         >
//                           <span
//                             data-slot="badge"
//                             className="[&amp;&gt;svg]:size-3 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive [a&amp;]:hover:bg-accent [a&amp;]:hover:text-accent-foreground inline-flex w-fit shrink-0 items-center justify-center gap-1 overflow-hidden rounded-md border-2 border-amber-500/20 bg-amber-500/10 px-2 py-0.5 text-xs font-medium whitespace-nowrap text-amber-500 transition-[color,box-shadow] focus-visible:ring-[3px]"
//                           >
//                             <svg
//                               xmlns="http://www.w3.org/2000/svg"
//                               width="24"
//                               height="24"
//                               viewBox="0 0 24 24"
//                               fill="none"
//                               stroke="currentColor"
//                               stroke-width="2"
//                               stroke-linecap="round"
//                               stroke-linejoin="round"
//                               className="lucide lucide-clock mr-1 h-3 w-3"
//                               aria-hidden="true"
//                             >
//                               <path d="M12 6v6l4 2"></path>
//                               <circle cx="12" cy="12" r="10"></circle>
//                             </svg>
//                             Pending
//                           </span>
//                         </td>
//                         <td
//                           data-slot="table-cell"
//                           className="[&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px] text-muted-foreground p-2 align-middle whitespace-nowrap"
//                         >
//                           Robert Johnson
//                         </td>
//                         <td
//                           data-slot="table-cell"
//                           className="[&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px] p-2 text-right align-middle whitespace-nowrap"
//                         >
//                           <button
//                             data-slot="dropdown-menu-trigger"
//                             className="[&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 [&amp;_svg]:shrink-0 focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50 has-[&gt;svg]:px-3 inline-flex h-8 w-8 shrink-0 items-center justify-center gap-2 rounded-md p-0 text-sm font-medium whitespace-nowrap transition-all outline-none focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50"
//                             type="button"
//                             id="radix-_R_6mlaindlb_"
//                             aria-haspopup="menu"
//                             aria-expanded="false"
//                             data-state="closed"
//                           >
//                             <svg
//                               xmlns="http://www.w3.org/2000/svg"
//                               width="24"
//                               height="24"
//                               viewBox="0 0 24 24"
//                               fill="none"
//                               stroke="currentColor"
//                               stroke-width="2"
//                               stroke-linecap="round"
//                               stroke-linejoin="round"
//                               className="lucide lucide-ellipsis h-4 w-4"
//                               aria-hidden="true"
//                             >
//                               <circle cx="12" cy="12" r="1"></circle>
//                               <circle cx="19" cy="12" r="1"></circle>
//                               <circle cx="5" cy="12" r="1"></circle>
//                             </svg>
//                           </button>
//                         </td>
//                       </tr>
//                       <tr
//                         data-slot="table-row"
//                         className="data-[state=selected]:bg-muted border-border hover:bg-card border-b transition-colors"
//                       >
//                         <td
//                           data-slot="table-cell"
//                           className="[&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px] p-2 align-middle font-medium whitespace-nowrap"
//                         >
//                           David Kim
//                         </td>
//                         <td
//                           data-slot="table-cell"
//                           className="[&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px] text-muted-foreground p-2 align-middle whitespace-nowrap"
//                         >
//                           UCLA
//                         </td>
//                         <td
//                           data-slot="table-cell"
//                           className="[&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px] text-muted-foreground p-2 align-middle whitespace-nowrap"
//                         >
//                           Web Development
//                         </td>
//                         <td
//                           data-slot="table-cell"
//                           className="[&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px] p-2 align-middle whitespace-nowrap"
//                         >
//                           <span
//                             data-slot="badge"
//                             className="[&amp;&gt;svg]:size-3 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive [a&amp;]:hover:bg-accent [a&amp;]:hover:text-accent-foreground inline-flex w-fit shrink-0 items-center justify-center gap-1 overflow-hidden rounded-md border-2 border-green-500/20 bg-green-500/10 px-2 py-0.5 text-xs font-medium whitespace-nowrap text-green-500 transition-[color,box-shadow] focus-visible:ring-[3px]"
//                           >
//                             <svg
//                               xmlns="http://www.w3.org/2000/svg"
//                               width="24"
//                               height="24"
//                               viewBox="0 0 24 24"
//                               fill="none"
//                               stroke="currentColor"
//                               stroke-width="2"
//                               stroke-linecap="round"
//                               stroke-linejoin="round"
//                               className="lucide lucide-circle-check mr-1 h-3 w-3"
//                               aria-hidden="true"
//                             >
//                               <circle cx="12" cy="12" r="10"></circle>
//                               <path d="m9 12 2 2 4-4"></path>
//                             </svg>
//                             Active
//                           </span>
//                         </td>
//                         <td
//                           data-slot="table-cell"
//                           className="[&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px] text-muted-foreground p-2 align-middle whitespace-nowrap"
//                         >
//                           Sophie Martin
//                         </td>
//                         <td
//                           data-slot="table-cell"
//                           className="[&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px] p-2 text-right align-middle whitespace-nowrap"
//                         >
//                           <button
//                             data-slot="dropdown-menu-trigger"
//                             className="[&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 [&amp;_svg]:shrink-0 focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50 has-[&gt;svg]:px-3 inline-flex h-8 w-8 shrink-0 items-center justify-center gap-2 rounded-md p-0 text-sm font-medium whitespace-nowrap transition-all outline-none focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50"
//                             type="button"
//                             id="radix-_R_6qlaindlb_"
//                             aria-haspopup="menu"
//                             aria-expanded="false"
//                             data-state="closed"
//                           >
//                             <svg
//                               xmlns="http://www.w3.org/2000/svg"
//                               width="24"
//                               height="24"
//                               viewBox="0 0 24 24"
//                               fill="none"
//                               stroke="currentColor"
//                               stroke-width="2"
//                               stroke-linecap="round"
//                               stroke-linejoin="round"
//                               className="lucide lucide-ellipsis h-4 w-4"
//                               aria-hidden="true"
//                             >
//                               <circle cx="12" cy="12" r="1"></circle>
//                               <circle cx="19" cy="12" r="1"></circle>
//                               <circle cx="5" cy="12" r="1"></circle>
//                             </svg>
//                           </button>
//                         </td>
//                       </tr>
//                       <tr
//                         data-slot="table-row"
//                         className="data-[state=selected]:bg-muted border-border hover:bg-card border-b transition-colors"
//                       >
//                         <td
//                           data-slot="table-cell"
//                           className="[&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px] p-2 align-middle font-medium whitespace-nowrap"
//                         >
//                           Olivia Garcia
//                         </td>
//                         <td
//                           data-slot="table-cell"
//                           className="[&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px] text-muted-foreground p-2 align-middle whitespace-nowrap"
//                         >
//                           NYU
//                         </td>
//                         <td
//                           data-slot="table-cell"
//                           className="[&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px] text-muted-foreground p-2 align-middle whitespace-nowrap"
//                         >
//                           UI/UX Design
//                         </td>
//                         <td
//                           data-slot="table-cell"
//                           className="[&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px] p-2 align-middle whitespace-nowrap"
//                         >
//                           <span
//                             data-slot="badge"
//                             className="[&amp;&gt;svg]:size-3 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive [a&amp;]:hover:bg-accent [a&amp;]:hover:text-accent-foreground inline-flex w-fit shrink-0 items-center justify-center gap-1 overflow-hidden rounded-md border-2 border-blue-500/20 bg-blue-500/10 px-2 py-0.5 text-xs font-medium whitespace-nowrap text-blue-500 transition-[color,box-shadow] focus-visible:ring-[3px]"
//                           >
//                             <svg
//                               xmlns="http://www.w3.org/2000/svg"
//                               width="24"
//                               height="24"
//                               viewBox="0 0 24 24"
//                               fill="none"
//                               stroke="currentColor"
//                               stroke-width="2"
//                               stroke-linecap="round"
//                               stroke-linejoin="round"
//                               className="lucide lucide-circle-check mr-1 h-3 w-3"
//                               aria-hidden="true"
//                             >
//                               <circle cx="12" cy="12" r="10"></circle>
//                               <path d="m9 12 2 2 4-4"></path>
//                             </svg>
//                             Completed
//                           </span>
//                         </td>
//                         <td
//                           data-slot="table-cell"
//                           className="[&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px] text-muted-foreground p-2 align-middle whitespace-nowrap"
//                         >
//                           Marcus Lee
//                         </td>
//                         <td
//                           data-slot="table-cell"
//                           className="[&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px] p-2 text-right align-middle whitespace-nowrap"
//                         >
//                           <button
//                             data-slot="dropdown-menu-trigger"
//                             className="[&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 [&amp;_svg]:shrink-0 focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50 has-[&gt;svg]:px-3 inline-flex h-8 w-8 shrink-0 items-center justify-center gap-2 rounded-md p-0 text-sm font-medium whitespace-nowrap transition-all outline-none focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50"
//                             type="button"
//                             id="radix-_R_6ulaindlb_"
//                             aria-haspopup="menu"
//                             aria-expanded="false"
//                             data-state="closed"
//                           >
//                             <svg
//                               xmlns="http://www.w3.org/2000/svg"
//                               width="24"
//                               height="24"
//                               viewBox="0 0 24 24"
//                               fill="none"
//                               stroke="currentColor"
//                               stroke-width="2"
//                               stroke-linecap="round"
//                               stroke-linejoin="round"
//                               className="lucide lucide-ellipsis h-4 w-4"
//                               aria-hidden="true"
//                             >
//                               <circle cx="12" cy="12" r="1"></circle>
//                               <circle cx="19" cy="12" r="1"></circle>
//                               <circle cx="5" cy="12" r="1"></circle>
//                             </svg>
//                           </button>
//                         </td>
//                       </tr>
//                     </tbody>
//                   </table>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>
//       </div>
//     </main>
//   );
// }

function Dashboard() {
  return <div className="flex w-full flex-col">{/* <DashHeader /> */}</div>;
}

export default Dashboard;
