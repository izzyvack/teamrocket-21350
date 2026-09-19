# Team Rocket · FTC 21350

A complete seven-page website for GitHub Pages, using the original violet, red, white, rocket logo, and four-point stars. Large condensed headlines, real team photos, sharp layouts, and small interactions keep the design specific to the team.

## Put it on GitHub Pages

1. Extract **team-rocket-github.zip** on your computer.
2. On GitHub, create a **public** repository, for example `teamrocket-21350`. Keep the default branch name `main` and add a README when creating it.
3. Open the repository, choose **Add file → Upload files**, and upload the **contents** of the extracted `team-rocket-github` folder. Include the `.github` folder. Keep `public/`, `scripts/`, and `.github/workflows/` intact, then **Commit changes**.
4. Open **Settings → Pages**. Under **Build and deployment → Source**, select **GitHub Actions**. The publishing workflow is already included; no template is needed.
5. Open **Actions → Deploy Team Rocket → Run workflow** and choose `main`. When it succeeds, the live link appears in **Settings → Pages** and on the completed deployment.

The first automatic run may start before Pages is enabled. If that run fails, finish step 4 and manually run the workflow in step 5.

**Check the upload:** you should see `package.json`, `team-data.mjs`, `scripts/`, `public/`, and `.github/` at the repository's top level. Do not upload the ZIP itself or put everything inside another `team-rocket-github` folder. If the workflow is missing, use **Add file → Create new file**, name it `.github/workflows/deploy.yml`, and paste the contents of the same file from this download.

This publishes the site publicly. GitHub Pages is available for public repositories on GitHub Free. You do not need a paid domain; GitHub supplies a `github.io` address. See [GitHub Pages availability](https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages) and [publishing with GitHub Actions](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site).

The workflow builds and publishes the `public/` folder. It does not run `server.mjs` on GitHub. No database, extra packages, or API keys are needed. The email-draft helper continues to work as a browser feature.

## Update it in GitHub

Open `team-data.mjs`, click the pencil to edit, make your change, and choose **Commit changes** to `main`. The included workflow rebuilds and publishes the updated site automatically. Edit `public/styles.css` for the colors and layout.

For a local preview with Node.js 20 or newer, run `npm start` and open `http://localhost:3000`.

## What is included

- Home, Team, Robot, Outreach, Awards, Support, and Contact pages
- Responsive layouts for phones, tablets, and desktops
- Mobile navigation with Escape and outside-click dismissal
- Awards filtered by season, with shareable links such as `awards.html?season=2024`
- Photo enlargement with keyboard-accessible dialog controls
- Expandable member biographies and sponsorship benefits
- A real email-draft helper, copy-email and copy-draft buttons
- Reduced-motion support, keyboard focus styles, skip navigation, and a custom 404 page
- Local copies of team photos and logo imagery; no expiring Canva image URLs
- Prebuilt HTML pages in `public/` that can be hosted as a static site

## Edit the website

| What to change | File |
| --- | --- |
| Email, links, roster, biographies, awards, robot, outreach, sponsor levels | `team-data.mjs` |
| Colors, spacing, fonts, phone layouts | `public/styles.css` |
| Page structure and main page copy | `scripts/build.mjs` |
| Menus, award filters, photo dialog, contact helper | `public/app.js` |
| Photos and logo imagery | `public/assets/` |
| Automatic publishing | `.github/workflows/deploy.yml` |
| Local preview server | `server.mjs` |

After changing files in GitHub, commit the changes to `main`. GitHub Actions builds and publishes the site. Locally, run `npm run build` after changing `team-data.mjs` or `scripts/build.mjs`.

The files `public/index.html`, `public/team.html`, etc. are generated. Changes made directly to these HTML files will be overwritten the next time you run the build. Edit the source files above to keep your changes.

To add a member, copy one object in `members`, edit its fields, and add a photo to `public/assets/`. To update the robot, change `team.robot`. You can add verified specifications using the documented `specs` array. Awards and sponsorships use the same simple object format.

## Details carried over from the original website

The roster is explicitly labeled **2025–26**, and the robot photograph is labeled **2024–25 / INTO THE DEEP**. Replace these with current information when you have it. Student grades and season-experience counts were omitted because those age quickly.

The six sponsor levels and their benefits came from the original site. The support page invites sponsors to confirm this season's opportunities by contacting the team. It does not take payments or make tax-deduction claims.

The contact form **prepares a draft**. It does not send email through a server. The visitor clicks **Open email app**, reviews the draft, and sends it themselves. Copying the draft is available if they use webmail. Nothing from the form is saved by this application.

The typography uses **Barlow Condensed** and **DM Sans** from Google Fonts, with system fallbacks. The site still works if Google Fonts is unavailable. The image files were captured from your published Canva pages; replace them with original high-resolution exports when available. Lucia's source portrait is particularly small (160 × 200).

## Sources and content decisions

- [Your original Canva website](https://canva.link/ftc21350): identity, mission, roster, images, contact details, outreach, and sponsorships.
- [Reference awards website](https://www.ftc19652.org/awards): inspiration for a clear season-by-season awards archive. No Techineers awards or branding were transferred.
- [Official FIRST results — 2025–26](https://ftc-events.firstinspires.org/2025/team/21350): leadership-award semifinalists, qualification rank, and alliance captain milestone.
- [Official FIRST results — 2024–25](https://ftc-events.firstinspires.org/2024/team/21350): Inspire, Motivate, finalist alliance, and state milestones. Corrected the old site's “Impact Award” to the official “Inspire Award.”
- [Official FIRST results — 2023–24](https://ftc-events.firstinspires.org/2023/team/21350): winning-alliance captain and state appearance.
- Rookie-year milestone comes from your original team archive.
- [GitHub custom workflow documentation](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages): build and publishing workflow.

## Validation

The build and JavaScript syntax were checked. Local HTTP checks cover all pages, referenced assets, the 404 page, and serving only the public directory. HTML structure, internal links, image files, and contact labels were checked locally. Live visual and browser-interaction QA could not be completed because this session's browser blocks local preview files. The GitHub build was additionally checked with both root and repository subfolder paths, including the custom 404 page. The GitHub Actions workflow has not been run on your account. Check the desktop and phone views on your live site.

The code and website are supplied as editable files. They have not been published or connected to a custom domain.
