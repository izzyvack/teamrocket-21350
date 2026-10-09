# Editing your Team Rocket website

Most content is in **team-data.mjs**. Photos and logos go in **public/assets**. You can update both in GitHub without using a terminal.

## Install this update

1. Extract **team-rocket-github.zip** on your computer.
2. Open [your repository](https://github.com/izzyvack/teamrocket-21350).
3. From its top-level **Code** page, choose **Add file → Upload files**.
4. Upload **team-data.mjs**, **package.json**, the **scripts** folder, and the **public** folder from inside the extracted folder. Keep those folders intact. Do not upload the ZIP or an extra enclosing folder. You can also upload this guide and README.md.
5. Click **Commit changes** on `main`. Wait for the newest **Deploy Team Rocket** run in **Actions** to turn green.
6. Open [your website](https://izzyvack.github.io/teamrocket-21350/). Refresh with **Ctrl + Shift + R** or **Cmd + Shift + R** if the previous design remains.

Your existing deployment workflow stays in place. There is no need to configure a new workflow.

After you edit on GitHub, that copy becomes your current version. Uploading an older downloaded team-data.mjs will replace your newer changes.

## Files still needed from the marked PDF

The PDF contains instructions, but the separate replacement assets and documents mentioned in it were not attached. This update keeps the existing photos and member information where replacements are missing.

- New team logo and the shared Home/Team group photo.
- Updated roster: all 8 names, subteams, descriptions, and portraits. The existing 7 profiles remain for now; their schools and the old season label are hidden, and bios are visible without opening a dropdown.
- Robot photos labeled by season. The page now has sections from 2026–27 through 2022–23, newest first. Only the existing 2024–25 photo is available. Missing photos are omitted, without substituting another year's robot.
- Sponsor logos for Google, Young Innovators Institute, Morningstar, The Wyndham Garden, and Days Inn and Suites. This follows the sponsor list in your PDF. The previous Treasures entry was replaced by that updated list.
- The separate outreach document with the nine items in your requested order, plus any accompanying photos. The two existing outreach entries remain until it arrives.

## Edit text in GitHub

Open **Code → team-data.mjs**, click the **pencil icon**, edit, and choose **Commit changes** on `main`. The workflow rebuilds automatically. [GitHub's editing instructions](https://docs.github.com/en/repositories/working-with-files/managing-files/editing-files)

Use **Ctrl + F** to find a name or one of these fields:

| What to change | Where to look |
| --- | --- |
| Home introduction | `team.intro` |
| Mission used on Home and Team | `team.mission` |
| Team-page introduction | `team.about` |
| Email, location, Instagram | `team.email`, `team.location`, `team.instagram`, `team.instagramHandle` |
| Header logo | `team.logo` |
| Shared Home and Team photo | `team.photo` |
| Sponsor thank-you paragraph | `team.sponsorThanks` |
| FIRST and FTC descriptions and logos | `programs` |
| Member names, subteams, portraits, bios | `members` |
| Robot photos by season | `robots` |
| Outreach events in display order | `outreach` |
| Sponsor names, logos, optional website links | `sponsors` |
| Results by year | `seasons` |
| Sponsorship levels and benefits | `sponsorships` |

Keep the quotes, commas, braces, and brackets around the text. Apostrophes are fine inside the double-quoted text. To include a double quote, write `\"`.

The HTML files in **public** are generated. Make content edits in **team-data.mjs**, not the HTML, so the next build keeps them.

## Upload a photo or logo

1. Give the file a simple name, such as **team-2026.jpg**. Keep its real extension. Renaming a PNG to .jpg does not convert it.
2. In GitHub, open **public → assets → Add file → Upload files**.
3. Upload the image itself and commit it.
4. Edit its path in **team-data.mjs** and commit again. [GitHub's upload instructions](https://docs.github.com/en/repositories/working-with-files/managing-files/adding-a-file-to-a-repository)

For the group photo, change the `photo` block inside `team`:

```js
"photo": {
  "image": "assets/team-2026.jpg",
  "alt": "Team Rocket members at a team meeting",
  "caption": "Team Rocket"
},
```

This changes both Home and Team. Use `"caption": ""` if you want no caption.

For the team logo, upload the file and change:

```js
"logo": "assets/team-logo.png",
```

Paths in the data file start with **assets/** even though the GitHub folder is **public/assets/**. Capitalization and extensions must match exactly. Using a new filename also avoids an old photo staying in the browser cache.

## Add, remove, or edit members

Find **export const members = [**. Each person has one complete `{ ... },` block.

To remove someone, delete their whole block. To add someone, paste this example inside the list, then replace the sample information:

```js
  {
    "name": "New member",
    "area": "Hardware and CAD",
    "image": "assets/new-member.jpg",
    "position": "50% 50%",
    "bio": "Write their description here."
  },
```

`area` is the subteam name, not a generic "Team member" label. Use `""` if it is not known yet. School fields are not displayed. The bios always appear below the name and subteam.

Move whole blocks to change the order. `position` controls the portrait crop: `50% 50%` is centered, while `50% 30%` shows more of the top. The original photo is not changed.

If the roster size changes, update the number in both `team.intro` and `team.about` too.

## Robot photos by season

Find **export const robots = [** and locate the correct season. Change `image` and `alt`:

```js
  {
    "season": "2025–26",
    "game": "DECODE",
    "image": "assets/robot-decode.jpg",
    "alt": "Team Rocket's DECODE robot",
    "resultsSeason": "2025"
  },
```

Keep the newest season first. Each entry gets its own section. A blank `image` hides the photo, so a missing file does not appear as a broken image.

`resultsSeason` must match a season's `id` in the `seasons` list. Leave it empty to omit the results button, as with the new 2026–27 season. The robot descriptions and Design & Development section have been removed.

## Add outreach

Find **export const outreach = [**. Place new events before older ones, or move complete blocks into the order you want. Outreach no longer appears on the homepage.

```js
  {
    "id": "library-workshop",
    "title": "Library Robotics Workshop",
    "partner": "Partner organization",
    "location": "Event location",
    "duration": "September 2026",
    "description": "Describe what your team did and who participated.",
    "detail": "Add another paragraph, or leave this empty.",
    "image": "assets/library-workshop.jpg",
    "imageAlt": "Describe the workshop photo",
    "imageCaption": "",
    "gallery": ""
  },
```

This is an example, not an event added to the website. Use a different lowercase `id` for each entry. `image`, `imageAlt`, `imageCaption`, `gallery`, `detail`, `partner`, `location`, and `duration` can be empty strings. A gallery needs a full public URL.

## Sponsor logos

Find the sponsor's block in **sponsors**, upload its logo, and set its image path:

```js
  {
    "name": "Morningstar",
    "image": "assets/sponsor-morningstar.png",
    "website": ""
  },
```

An empty image displays the name instead. A transparent PNG or official SVG works well. Logos keep their proportions and sit on white. Add a full website URL to make a logo clickable, or leave `website` empty. The same logos appear on Home and Sponsors.

The thank-you message is edited separately in `team.sponsorThanks`, so update that when adding or removing sponsors.

## Change the address shown at the top of the browser

The `izzyvack.github.io` text marked in your PDF is your website's address, not a heading in the website code. To replace it with your team's own address, you need a domain you own.

1. In the repository, open **Settings → Pages → Custom domain**.
2. Enter your domain and save it.
3. Configure its DNS records with your domain provider using [GitHub's custom-domain instructions](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site).
4. Once GitHub verifies the domain, enable **Enforce HTTPS** when available.

No domain purchase, GitHub username change, or DNS change is included in this update. You can keep using the current free GitHub Pages address.

## If something does not appear

Check the latest **Actions** run. If it is green, refresh the live website. If it fails, open the failed **Build website** step. After editing content, the usual cause is a missing comma, quote, or bracket. For an image, compare the exact path with its filename in **public/assets**.

With Node.js 20 or newer installed locally, `npm start` rebuilds and opens a local server. Otherwise, your existing GitHub workflow builds after every commit to `main`.
