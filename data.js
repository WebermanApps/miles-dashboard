// Miles Agent dashboard content. Edit this file only, then commit and push.
// PUBLIC SITE: no account numbers, balances, or other sensitive figures.
window.DASH = {
  // Update bar (also mirror type + post time into report.json): the Morning Report routine (4:47 ICT, due by 5:00) replaces this. Morning Report only.
  // lines can be plain strings, or groups: { category: "...", lines: ["..."] }
  report: { type: "Morning Report", lines: [] },
  // Urgent and warning items: shown as ONE collapsed line ("1 Urgent · 2 Warnings") that expands on tap/Enter.
  // level: "urgent" or "warning". Empty list = hidden.
  alerts: [],
  agent: "Miles Agent",
  role: "Head Of All Credit Card Points Projects",
  updated: "Oct 14, 2026, 8:10 PM ICT",
  status: "Five decks are ready at the top. Still waiting on Max for card priorities and points balances.",
  // Decks Waiting On You (R63): unfinished decks, pinned at the very top. Remove a deck once Max submits it. Empty = row hidden.
  // Deck counts (20:13 rule): swipes = answered cards + skips WITH a note (plain skips do not count), real submissions only; shown as decks = swipes/20.
  swipesToday: 0,
  swipesTotal: 0,
  decksWaiting: [],
  apps: [
    { name: "Mom's Amex Offers", url: "https://webermanapps.github.io/janes-amex-offers/", note: "Current Amex Offers, easy to scan" },
    { name: "Mom's Shopping Quiz", url: "https://webermanapps.github.io/amex-brand-swipe/", note: "Swipe through brands to set preferences" }
  ],
  openItems: [
    { pri: "P1", title: "Get A New Credit Card", detail: "Your priorities: travel perks, cash back, sign-up bonus or no annual fee; personal or business card. The New Card Priorities deck covers this.", state: "Waiting On Max" },
    { pri: "", title: "Points Balances Inventory", detail: "Your airline and hotel balances, sent privately (not for the dashboard). Goes to Portfolio as a net-worth estimate.", state: "Waiting On Max" },
    { pri: "", title: "Mom's Password", detail: "Which app gets the password you picked: Mom's Amex Offers or Mom's Shopping Quiz?", state: "Waiting On Max" },
    { pri: "", title: "Private Submit For Mom's Apps", detail: "Switch both apps to the private Submit receiver? The draft was lost in the Oct 16 box rollback, so I rebuild it once you say yes.", state: "Waiting On Max" },
    { pri: "", title: "Mom's Shopping Quiz Brand Update", detail: "Bring the quiz up to the newest brand rules, like the Oct 15 Amex Offers polish?", state: "Waiting On Max" },
    { pri: "", title: "Rename The janes-amex-offers Repo", detail: "Drops 'jane' from the link but breaks Mom's saved link.", state: "Waiting On Max" },
    { pri: "", title: "Capital One Ray-Ban Bonus", detail: "Watching for the 1,500 bonus points to post.", state: "Watching" }
  ],
  decisions: [],
  routines: [
    { name: "Morning Report", when: "Daily, 4:47 ICT" },
    { name: "Mom's Recording Upload Reminder", when: "Every 3 days, next Oct 16" }
  ],
  recent: [
    { date: "Oct 14", text: "Open a New Deck launcher with the 20-card Cards, Points & Travel deck; Share moved to a header icon" },
    { date: "Oct 14", text: "Points Balances Strip (names only), Routines section, pinned decks, report file" },
    { date: "Oct 14", text: "Submit password gate live on both of Mom's apps" },
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
