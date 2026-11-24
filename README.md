# Sami Miaari — Portfolio

A lightweight, accessible professional portfolio built as a static site for GitHub Pages. Recruiters can explore detailed expertise across applied machine learning, hydrology, geospatial data engineering, delivery, environmental systems, and scientific communication, as well as selected research and engineering projects, supporting visuals, and public materials.

Published site: <https://samimiaari95.github.io/portfolio/>

## Run locally

Open `index.html` in a browser, or serve this directory with any static file server:

```powershell
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## Publish with GitHub Pages

The workflow in `.github/workflows/pages.yml` enables GitHub Pages and deploys this plain static site after each push to `main`. It uses the official GitHub Pages actions and publishes the repository root.

## Content

The portfolio presents professional experience, education, and research, with direct contact links and linked employer logos. Employer logo files are stored in `assets/` so the static site does not depend on third-party image hosting.

Project plots and diagrams shown in the expanded project details are stored locally in `assets/`. The portfolio links to public repositories and downloadable materials where available; supporting code, datasets, and credentials for private company projects are not shared publicly.

The groundwater projects cover a [published TSMP-G2A simulation study](https://doi.org/10.3389/frwa.2026.1896829) and the [Global-LSTM follow-up](https://github.com/samimiaari95/global-LSTM) evaluating transfer against European and U.S. monitoring wells. Published study figures are credited to Miaari, Klotz and Kollet (2026) under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/). Global-LSTM figures come from the project's observation-evaluation outputs.
