# Team Rocket FTC 21350

Updated from the 10-page marked website PDF supplied October 9, 2026.

## Upload this update

1. Extract **team-rocket-github.zip**.
2. Open [your repository](https://github.com/izzyvack/teamrocket-21350), then **Code → Add file → Upload files**.
3. Upload **team-data.mjs**, **package.json**, **scripts**, and **public** from inside the extracted folder. Keep the folder structure. Do not upload the ZIP or an extra enclosing folder.
4. You can also upload this README and **EDITING-GUIDE.md**.
5. Commit to `main`. Your existing **Deploy Team Rocket** workflow builds and publishes it.
6. After the newest Actions run turns green, open [the website](https://izzyvack.github.io/teamrocket-21350/).

## Changes applied

- Playfair Display throughout, with normal blue text selection and responsive type sizes.
- Revised Home introduction and mission from the PDF, red achievements button, no red line beside the Home label, and no Home competition or outreach sections.
- Sponsor logos/names beside the supplied thank-you message. The inline "here" link retains the paragraph's color.
- FIRST and FTC sections before the team content, with official FIRST and BIOBUZZ logos and descriptions adapted from FIRST.
- New team introduction, visible member bios, subteam-only labels, and no schools or old roster season label.
- Robot sections from 2026–27 to 2022–23, most recent first. Removed robot blurbs and Design & Development.
- Removed the specified page subtitles, link/button arrows, and red achievement stars.
- Removed sponsorship instructions beside the heading, inquiry buttons in each tier, colored price plus signs, benefit sidebars, and open-tier background changes.
- Updated Materials & Mentorship text and contact button punctuation.

## Awaiting your additional files

The PDF refers to separate uploads that were not attached: the new team logo, group photo, eight-person roster with bios/portraits, robot photos by season, sponsor logos, and the outreach document with nine ordered entries.

The existing seven profiles and available photos remain for now. Missing robot photos are omitted; no substitute photos or biographies were invented. Sponsor names follow the PDF: Google, Young Innovators Institute, Morningstar, The Wyndham Garden, and Days Inn and Suites. The separate editing guide explains where to add every file.

## Edit it yourself

Read [EDITING-GUIDE.md](EDITING-GUIDE.md) for GitHub upload steps, copyable examples, and how to replace the `izzyvack.github.io` browser address with a custom domain you own.

| Purpose | File |
| --- | --- |
| Team content, members, robot seasons, outreach, sponsors | `team-data.mjs` |
| Page structure | `scripts/build.mjs` |
| Fonts, colors, spacing, phone layouts | `public/styles.css` |
| Menu, season filters, photo viewer, copy-email button | `public/app.js` |
| Photos and logos | `public/assets/` |
| Deployment | `.github/workflows/deploy.yml` |

The HTML in `public` is generated. Edit the data or template sources, then rebuild. Node.js 20 or newer is required. `npm start` builds and runs a local preview; `npm run build` builds the static HTML. No package installation is needed.

## Sources and assets

The new FIRST sections are adapted from [About FIRST](https://www.firstinspires.org/about) and [FIRST Tech Challenge](https://www.firstinspires.org/programs/ftc/). The unmodified official logos come from [FIRST brand downloads](https://www.firstinspires.org/brand/logos-guidelines) and [FIRST season downloads](https://www.firstinspires.org/resources/library/season-brand-downloads).

Existing team records remain sourced from the [original website](https://canva.link/ftc21350) and official FIRST records for [2025–26](https://ftc-events.firstinspires.org/2025/team/21350), [2024–25](https://ftc-events.firstinspires.org/2024/team/21350), and [2023–24](https://ftc-events.firstinspires.org/2023/team/21350). Playfair Display loads through Google Fonts, with Georgia as a fallback.

## Verification

The build, JavaScript syntax, generated page structure, local links/assets, and the requested removals were checked. The updated logos were visually inspected. A browser rendering check was not performed. These files have not been uploaded to your GitHub repository or deployed.
