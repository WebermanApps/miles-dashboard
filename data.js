// Miles Agent dashboard content. Edit this file only, then commit and push.
// PUBLIC SITE: no account numbers, balances, or other sensitive figures.
window.DASH = {
  // Update bar (also mirror type + post time into report.json): routines replace this (Morning Report 4:47 ICT, Evening Report 18:03 ICT).
  // lines can be plain strings, or groups: { category: "...", lines: ["..."] }
  report: {
    title: "Morning Report",
    timestamp: "Oct 14, 2026 · 4:55 ICT",
    lines: [
      { category: "Today", lines: [
        "Add the team Submit password gate to Mom's Shopping Quiz and Mom's Amex Offers, then publish.",
        "Watch for the Capital One Ray-Ban bonus points; Mom's next recording reminder is Oct 16." ] },
      { category: "Waiting On Max", lines: [
        "New card: your priorities (travel perks, cash back, sign-up bonus or no annual fee; personal or business).",
        "Points inventory: your airline and hotel balances, sent privately." ] },
      { category: "Freeze", lines: [
        "Holding all overnight submissions until you clean up; no changes from them." ] }
    ]
  },
  // Urgent and warning items: shown as ONE collapsed line ("1 Urgent · 2 Warnings") that expands on tap/Enter.
  // level: "urgent" or "warning". Empty list = hidden.
  alerts: [],
  agent: "Miles Agent",
  role: "Head Of All Credit Card Points Projects",
  updated: "Oct 14, 2026, 4:55 AM ICT",
  status: "Today: Submit password gate on both of Mom's apps. Still waiting on Max for card priorities and points balances.",
  // Decks Waiting On You (R63): unfinished decks, pinned at the very top. Remove a deck once Max submits it. Empty = row hidden.
  decksWaiting: [
    { name: "Miles Dashboard Style", url: "https://webermanapps.github.io/style-swipe/?date=miles-1", note: "Branding Style Swipe" },
    { name: "Mom's Amex Offers Style", url: "https://webermanapps.github.io/style-swipe/?date=jane-amex-2", note: "Branding Style Swipe" }
  ],
  apps: [
    { name: "Mom's Amex Offers", url: "https://webermanapps.github.io/janes-amex-offers/", note: "Current Amex Offers, easy to scan" },
    { name: "Mom's Shopping Quiz", url: "https://webermanapps.github.io/amex-brand-swipe/", note: "Swipe through brands to set preferences" }
  ],
  openItems: [
    { pri: "P1", title: "Get A New Credit Card", detail: "Waiting on Max's priorities: travel perks, cash back, sign-up bonus, or no annual fee; personal or business card. Handed over from Portfolio on Oct 13.", state: "Waiting On Max" },
    { pri: "", title: "Points Balances Inventory", detail: "Airline and hotel programs, from Portfolio.", state: "Waiting On Max" },
    { pri: "", title: "Mom's Offers Refresh", detail: "Done Oct 13 from the Oct 12 screen recording (102 offers).", state: "Done" },
    { pri: "", title: "Submit Password On Mom's Apps", detail: "Route both apps' Submit through the team password gate (rule Oct 14, 00:02).", state: "Today" },
    { pri: "", title: "Capital One Ray-Ban Bonus", detail: "Watching for the 1,500 bonus points to post.", state: "Watching" }
  ],
  decisions: [
    "Your new-card priorities: travel perks, cash back, sign-up bonus or no annual fee; personal or business?",
    "Your points balances for the inventory (send privately, not for the dashboard)?",
    "Switch Mom's apps to the private Submit receiver (ready and tested)?",
    "Bring both of Mom's apps up to the newest brand rules?",
    "Rename the janes-amex-offers repo? This breaks the old link."
  ],
  routines: [
    { name: "Morning Report", when: "Daily, 4:47 ICT" },
    { name: "Evening Report", when: "Daily, 18:03 ICT" },
    { name: "Mom's Recording Upload Reminder", when: "Every 3 days, next Oct 16" }
  ],
  recent: [
    { date: "Oct 13", text: "Refreshed Mom's Amex Offers from the Oct 12 Dropbox screen recording (102 offers)" },
    { date: "Oct 13", text: "Dashboard layout picks applied: shared top bar, one-line report, decisions dropdown, compact rows" },
    { date: "Oct 13", text: "Back links and pull-down-to-refresh on all three pages" },
    { date: "Oct 13", text: "Added one-tap Submit to both of Mom's apps; picks now come straight to Miles" },
    { date: "Oct 13", text: "Launched this dashboard; took over the new-card task and points inventory" },
    { date: "Oct 10", text: "Renamed both apps to Mom's" },
    { date: "Oct 10", text: "Took over the Amex workstream" },
    { date: "Oct 9", text: "Ray-Ban offer walkthrough" },
    { date: "Earlier", text: "Aeroplan / ANA and Venture X Q&A" }
  ]
};
