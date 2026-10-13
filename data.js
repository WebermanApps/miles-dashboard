// Miles Agent dashboard content. Edit this file only, then commit and push.
// PUBLIC SITE: no account numbers, balances, or other sensitive figures.
window.DASH = {
  // Update bar: routines replace this (Morning Report 4:47 ICT, Evening Report 18:03 ICT).
  // lines can be plain strings, or groups: { category: "...", lines: ["..."] }
  report: {
    title: "Evening Report",
    timestamp: "Oct 13, 2026 · 14:10 ICT",
    lines: [
      { category: "Shipped", lines: ["Miles Agent dashboard is live, with an update bar and a big-screen layout."] },
      { category: "Took Over", lines: ["New credit card task and points-balances inventory, handed over from Portfolio."] },
      { category: "Waiting", lines: ["Mom's offers refresh: Max's new screen recording isn't in Dropbox yet."] },
      { category: "Research", lines: ["Ray-Ban deals researched for Max."] }
    ]
  },
  agent: "Miles Agent",
  role: "Head Of All Credit Card Points Projects",
  updated: "Oct 13, 2026, 2:10 PM ICT",
  status: "Took over new-card and points work from Portfolio today. Waiting on Max for points balances and a new offers screen recording.",
  apps: [
    { name: "Mom's Amex Offers", url: "https://webermanapps.github.io/janes-amex-offers/", note: "Current Amex Offers, easy to scan" },
    { name: "Mom's Shopping Quiz", url: "https://webermanapps.github.io/amex-brand-swipe/", note: "Swipe through brands to set preferences" }
  ],
  openItems: [
    { pri: "P1", title: "Get A New Credit Card", detail: "Waiting on Max's priorities: travel perks, cash back, sign-up bonus, or no annual fee; personal or business card. Handed over from Portfolio on Oct 13.", state: "Waiting On Max" },
    { pri: "", title: "Points Balances Inventory", detail: "Airline and hotel programs, from Portfolio.", state: "Waiting On Max" },
    { pri: "", title: "Mom's Offers Refresh", detail: "Needs Max's new screen recording (not in Dropbox yet). Last refresh Oct 10.", state: "Waiting On Max" },
    { pri: "", title: "Capital One Ray-Ban Bonus", detail: "Watching for the 1,500 bonus points to post.", state: "Watching" }
  ],
  decisions: [
    "Bring both of Mom's apps up to the newest brand rules?",
    "Rename the janes-amex-offers repo? This breaks the old link."
  ],
  routines: [
    { name: "Sunday Amex Offers Update", when: "Sundays, 10:17 ICT" }
  ],
  recent: [
    { date: "Oct 10", text: "Renamed both apps to Mom's" },
    { date: "Oct 10", text: "Took over the Amex workstream" },
    { date: "Oct 9", text: "Ray-Ban offer walkthrough" },
    { date: "Earlier", text: "Aeroplan / ANA and Venture X Q&A" }
  ]
};
