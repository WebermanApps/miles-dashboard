// Miles Agent dashboard content. Edit this file only, then commit and push.
// PUBLIC SITE: no account numbers, balances, or other sensitive figures.
window.DASH = {
  agent: "Miles Agent",
  role: "Head Of All Credit Card Points Projects",
  updated: "Oct 13, 2026",
  status: "Took over new-card and points work from Portfolio today. Waiting on Max for points balances and a new offers screen recording.",
  apps: [
    { name: "Mom's Amex Offers", url: "https://webermanapps.github.io/janes-amex-offers/", note: "Current Amex Offers, easy to scan" },
    { name: "Mom's Shopping Quiz", url: "https://webermanapps.github.io/amex-brand-swipe/", note: "Swipe through brands to set preferences" }
  ],
  openItems: [
    { pri: "P1", title: "Get A New Credit Card", detail: "Pick the card and sign-up bonus. Handed over from Portfolio on Oct 13.", state: "In Progress" },
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
