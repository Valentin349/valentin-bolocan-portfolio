---
name: Sideflo
tagline: A sports arbitrage scanner for UK bookmakers.
status: paused
since: 2025
order: 3
icon: ../../assets/icons/sideflo-mark.svg
tags: [Next.js, Python, Supabase, Chrome extension]
stages:
  - src: ../../assets/screens/sideflo-web.png
    alt: "The Sideflo landing page: “Turn spare minutes into guaranteed profit”, with an example arbitrage between two bookmakers"
    version: v1
    date: Oct 2025
    caption: The landing page, with a worked example of one opportunity. Captured from a local build.
    device: browser
    url: sideflo.com
---

Sideflo started in May 2025 as a Chrome extension I used myself: it read in-play odds from bookmaker pages as they changed and flagged arbitrage between them, the moments when backing every outcome at different books guarantees a profit.

It worked well enough that I set out to turn it into a full platform for other people. Sideflo scans pre-match odds across UK bookmakers with a low-latency Python scraper, including a way past bet365's notoriously tough blocking; the site is Next.js on PostgreSQL, with Supabase for accounts.

I ran it for real users, who made over £3,000 between them, before I paused it. The domain has since lapsed and the database is turned off, so the screen above is from a local build.
