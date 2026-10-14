// Miles Agent dashboard content. Edit this file only, then commit and push.
// PUBLIC SITE: no account numbers, balances, or other sensitive figures.
window.DASH = {
  // Update bar (also mirror type + post time into report.json): the Morning Report routine (4:47 ICT, due by 5:00) replaces this. Morning Report only.
  // lines can be plain strings, or groups: { category: "...", lines: ["..."] }
  report: {
    title: "Morning Report",
    timestamp: "Oct 14, 2026 · 20:10 ICT",
    lines: [
      { category: "Ready Now", lines: [
        "Five decks at the top: Miles Dashboard Style and Mom's Amex Offers Style to finish, plus New Card Priorities, Points & Redemptions and Travel Goals (20 cards each).",
        "Points Balances Strip lists Venture X, Aeroplan and ANA, with no numbers." ] },
      { category: "Waiting On Max", lines: [
        "New card: your priorities (travel perks, cash back, sign-up bonus or no annual fee; personal or business). The New Card Priorities deck covers this.",
        "Points inventory: your airline and hotel balances, sent privately.",
        "Switching Mom's apps to the private Submit: ready, waiting on your OK." ] },
      { category: "Watching", lines: [
        "Ray-Ban bonus points have not posted yet.",
        "Mom's next offers recording reminder is Oct 16." ] }
    ]
  },
  // Urgent and warning items: shown as ONE collapsed line ("1 Urgent · 2 Warnings") that expands on tap/Enter.
  // level: "urgent" or "warning". Empty list = hidden.
  alerts: [],
  agent: "Miles Agent",
  role: "Head Of All Credit Card Points Projects",
  updated: "Oct 14, 2026, 8:10 PM ICT",
  status: "Five decks are ready at the top. Still waiting on Max for card priorities and points balances.",
  // Decks Waiting On You (R63): unfinished decks, pinned at the very top. Remove a deck once Max submits it. Empty = row hidden.
  // Swipes completed (19:51 rule): cards answered in real submissions via pull.sh miles, tests excluded.
  swipesCompleted: 0,
  decksWaiting: [],
  apps: [
    { name: "Mom's Amex Offers", url: "https://webermanapps.github.io/janes-amex-offers/", note: "Current Amex Offers, easy to scan" },
    { name: "Mom's Shopping Quiz", url: "https://webermanapps.github.io/amex-brand-swipe/", note: "Swipe through brands to set preferences" }
  ],
  openItems: [
    { pri: "P1", title: "Get A New Credit Card", detail: "Waiting on Max's priorities: travel perks, cash back, sign-up bonus, or no annual fee; personal or business card. Handed over from Portfolio on Oct 13.", state: "Waiting On Max" },
    { pri: "", title: "Points Balances Inventory", detail: "Airline and hotel programs, from Portfolio.", state: "Waiting On Max" },
    { pri: "", title: "Mom's Offers Refresh", detail: "Done Oct 13 from the Oct 12 screen recording (102 offers).", state: "Done" },
    { pri: "", title: "Submit Password On Mom's Apps", detail: "Both apps' Submit now goes through the team password gate (live Oct 14).", state: "Done" },
    { pri: "", title: "Capital One Ray-Ban Bonus", detail: "Watching for the 1,500 bonus points to post.", state: "Watching" }
  ],
  decisions: [
    "Your new-card priorities: travel perks, cash back, sign-up bonus or no annual fee; personal or business?",
    "Your points balances for the inventory (send privately, not for the dashboard)?",
    "Switch Mom's apps to the private Submit receiver (ready and tested)?",
    "Mom's Amex Offers Ends Soon: publish your side menu with jungle accent pick?",
    "Bring both of Mom's apps up to the newest brand rules?",
    "Rename the janes-amex-offers repo? This breaks the old link."
  ],
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
