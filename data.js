// Miles Agent dashboard content. Edit this file only, then commit and push.
// PUBLIC SITE: no account numbers, balances, or other sensitive figures.
window.DASH = {
  // Update bar: routines replace this (Morning Report 4:47 ICT, Evening Report 18:03 ICT).
  // lines can be plain strings, or groups: { category: "...", lines: ["..."] }
  report: {
    title: "Morning Report",
    timestamp: "Oct 13, 2026 · 14:59 ICT",
    lines: [
      { category: "Cards & Points", lines: [
        "New credit card pick: waiting on Max's priorities (travel perks, cash back, sign-up bonus or no annual fee; personal or business).",
        "Points-balances inventory for Portfolio: waiting on Max's balances.",
        "Ray-Ban 1,500 Capital One bonus points: pending, watching for them to post." ] },
      { category: "Mom's Amex", lines: [
        "Offers refresh waiting on a new screen recording (last one is from Oct 10).",
        "Upload reminder every 3 days, starting Oct 14." ] },
      { category: "Dashboard", lines: [
        "Daily reports: Morning 4:47 ICT, Evening 18:03 ICT." ] }
    ]
  },
  agent: "Miles Agent",
  role: "Head Of All Credit Card Points Projects",
  updated: "Oct 13, 2026, 2:59 PM ICT",
  status: "Took over new-card and points work from Portfolio today. Waiting on Max for points balances and a new offers screen recording.",
  apps: [
    { name: "Mom's Amex Offers", url: "https://webermanapps.github.io/janes-amex-offers/", note: "Current Amex Offers, easy to scan" },
    { name: "Mom's Shopping Quiz", url: "https://webermanapps.github.io/amex-brand-swipe/", note: "Swipe through brands to set preferences" },
    { name: "Miles Style Swipe Deck", url: "https://webermanapps.github.io/style-swipe/?date=miles-1", note: "Branding deck for this dashboard, waiting on Max" },
    { name: "Mom's Amex Style Swipe Deck", url: "https://webermanapps.github.io/style-swipe/?date=jane-amex-2", note: "Branding deck for Mom's Amex app, waiting on Max" }
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
    { name: "Morning Report", when: "Daily, 4:47 ICT" },
    { name: "Evening Report", when: "Daily, 18:03 ICT" },
    { name: "Mom's Recording Upload Reminder", when: "Every 3 days from Oct 14" },
    { name: "Sunday Amex Offers Update", when: "Sundays, 10:17 ICT" }
  ],
  recent: [
    { date: "Oct 13", text: "Launched this dashboard; took over the new-card task and points inventory" },
    { date: "Oct 10", text: "Renamed both apps to Mom's" },
    { date: "Oct 10", text: "Took over the Amex workstream" },
    { date: "Oct 9", text: "Ray-Ban offer walkthrough" },
    { date: "Earlier", text: "Aeroplan / ANA and Venture X Q&A" }
  ]
};
