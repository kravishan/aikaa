# AIKAA website

Public website for the AIKAA project: *Intelligent and Humane Automation for Micro and SMEs*.
Built with [Astro](https://astro.build) as a static site and published on GitHub Pages at
https://kravishan.github.io/aikaa/

## Status

Work in progress. Phases 1 (setup) and 2 (design system) are done.
The hidden style guide is at `/aikaa-dev/styleguide/`.

## Run it on your own computer

1. Install Node.js (LTS version) from https://nodejs.org
2. In this folder run `npm install` once.
3. Run `npm run dev` and open the address it prints (usually http://localhost:4321/aikaa/).

## How publishing works

Every push to GitHub builds the site. If the build fails you see a red cross next to the commit.
Pushes to the `main` branch are also published to GitHub Pages.

A full guide (adding an AI tool, writing a blog post and more) comes in Phase 7.

## Confidentiality (this repository is public)

Everything in this repository can be read by anyone, even files the site does not show.

- Add a company's name to `src/content/companies/` only after the company has given written consent.
- No company scores, survey numbers or internal notes in this repository.
- No names of people without their consent.
