# madsolame.com

Personal portfolio of Ahmad Saleem Z. Static HTML/CSS/JS — no frameworks,
no build step, no dependencies. Hand-edit any file and push; GitHub Pages
serves it as-is.

## Structure

```
index.html            cover page (interactive grid, pure CSS/JS)
projects/index.html   project list
projects/<id>/        one folder per project, plain HTML
gallery/index.html    photo grid + lightbox
about/index.html      bio, contact, resume
assets/css/main.css   all styles (theme variables at the top)
assets/js/components.js  web components: <site-nav>, <project-media>, <gallery-lightbox>
assets/js/cover.js    <cover-grid> home page animation
assets/img/full/      full-size images
assets/img/thumb/     gallery thumbnails
sitemap.xml, robots.txt, CNAME, favicon.ico
```

## Editing

- **Text content** (bio, resume, project descriptions): edit the HTML files
  directly. Everything is plain markup.
- **Add a project**: copy an existing `projects/<id>/` folder, rename it,
  edit `index.html`, then add a link in `projects/index.html` and an entry
  in `sitemap.xml`.
- **Gallery**: add images to `assets/img/full/` + `assets/img/thumb/` and a
  matching `<a><img></a>` line in `gallery/index.html`.
- **Theme**: colors/spacing live in `:root` at the top of
  `assets/css/main.css`.

## Notes

- The web components only *enhance* the pages — all content is in the HTML,
  so the site works with JavaScript disabled and is fully crawlable.
- Gallery thumbnails: the lightbox needs JS; without it the links open the
  full image directly.
- No analytics. (The old Universal Analytics tag was removed — Google
  retired UA in 2023. Add a GA4 snippet to the `<head>` if you want stats.)

## Publishing

`.github/workflows/pages.yml` deploys the repo root to GitHub Pages on every
push to `master` (or via Actions → "Deploy to GitHub Pages" → Run workflow).

One-time setup: repo **Settings → Pages → Source → "GitHub Actions"**.

## Local preview

```
python3 -m http.server 8000
# open http://localhost:8000
```

(Any static server works; the pages use root-relative paths like
`/assets/...`, matching how the site is served from the domain root.)
