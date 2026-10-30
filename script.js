const expertise = {
  forecasting: {
    number: "01",
    title: "Probabilistic forecasting & applied ML",
    summary: "Building forecasts that communicate not only what may happen, but how confident we should be in the prediction.",
    detail: "I design spatio-temporal LSTM ensembles for hydrological time series, from data preparation and model training to evaluation against independent observations.",
    points: [
      "Train distributed PyTorch models across NVIDIA A100 GPUs on high-performance computing systems.",
      "Evaluate transfer to locations with limited observations and quantify uncertainty using ensemble statistics.",
      "Connect model spread to forecast performance, then validate against station and piezometric measurements."
    ],
    tags: ["PyTorch", "LSTM ensembles", "Uncertainty", "Time series"],
    proof: "Research focus · European groundwater-table forecasting and transfer learning"
  },
  hydrology: {
    number: "02",
    title: "Hydrology & groundwater modelling",
    summary: "Pairing physical process understanding with numerical models to explain how water moves through soil and aquifers.",
    detail: "My hydrology work spans water balance, variably saturated flow, and groundwater dynamics. I use physical laws to frame questions and numerical experiments to test them across conditions.",
    points: [
      "Apply Richards' equation and Darcy's law to investigate subsurface flow and water-table behaviour.",
      "Use ParFlow simulations and dimensional analysis to study infiltration, drainage, and response times across soil textures.",
      "Compare model outputs with field and monitoring measurements, checking data quality as well as model fit."
    ],
    tags: ["ParFlow", "Richards' equation", "Darcy's law", "Water balance"],
    proof: "Research focus · Soil-water dynamics, infiltration, drainage, and groundwater"
  },
  geospatial: {
    number: "03",
    title: "Geospatial data engineering at scale",
    summary: "Turning heterogeneous earth-observation and model data into consistent, analysis-ready inputs for spatial modelling.",
    detail: "I have worked across satellite, reanalysis, station, and simulation datasets, building Python workflows that preserve spatial and temporal meaning while making large data practical to use.",
    points: [
      "Process gridded and vector data formats including NetCDF, GRIB, HDF5, and GeoTIFF.",
      "Combine precipitation, temperature, soil moisture, water level, discharge, and groundwater observations.",
      "Prepare large-scale European and global datasets for model training and validation on cloud and HPC systems."
    ],
    tags: ["Python", "GeoPandas", "GDAL", "NetCDF / GRIB", "HPC"],
    proof: "Practice · Geospatial processing, data quality, reproducible preprocessing"
  },
  delivery: {
    number: "04",
    title: "Data pipelines & production delivery",
    summary: "Taking analytical workflows beyond a notebook: automating repeatable steps, quality checks, and decision-ready outputs.",
    detail: "Across environmental engineering and data automation roles, I have connected data collection, transformation, reporting, and production systems with maintainable Python workflows.",
    points: [
      "Built automated Python pipelines, data-quality checks, and production handoffs using Git, CI/CD, and remote Linux systems.",
      "Automated environmental measurement collection, dashboard updates, and reporting on AWS EC2.",
      "Created customer-facing monitoring dashboards and geospatial reporting tools from raw instrument data."
    ],
    tags: ["Python", "Git", "CI/CD", "AWS EC2", "SQL"],
    proof: "Practice · ProntoPro data automation and Envisa environmental monitoring"
  },
  environment: {
    number: "05",
    title: "Climate, drought & environmental systems",
    summary: "Using data and engineering methods to understand environmental change, water stress, and human impacts.",
    detail: "My environmental engineering foundation complements current hydrology research. Earlier work connected remote sensing and meteorology for drought indicators with applied environmental monitoring and emissions analysis.",
    points: [
      "Developed a basin-specific drought-index approach for the Nile using remote sensing, meteorological data, feature selection, and a feed-forward neural network.",
      "Worked with environmental measurements and geospatial methods for emissions, pollution indicators, and airport impacts.",
      "Bring a systems perspective grounded in water security, environmental engineering, civil infrastructure, and hydrological balance."
    ],
    tags: ["Drought indicators", "Remote sensing", "Environmental data", "GIS"],
    proof: "Foundation · Environmental engineering, hydrology, and applied monitoring"
  },
  research: {
    number: "06",
    title: "Scientific research & communication",
    summary: "Moving from a well-framed research question to reproducible analysis and clear communication of the evidence.",
    detail: "I combine literature-informed hypotheses, computational experiments, and statistical evaluation, then communicate results to scientific and applied audiences.",
    points: [
      "Present research at EGU and AGU conferences, including work on groundwater forecasting and soil wetting and drying.",
      "Prepare manuscripts currently under peer review and document reproducible analytical workflows.",
      "Translate technical results into clear reporting, stakeholder tools, and customer-facing dashboards."
    ],
    tags: ["Research design", "Technical writing", "EGU / AGU", "Documentation"],
    proof: "Approach · Evidence-led analysis, reproducibility, and accessible communication"
  }
};

const select = document.querySelector("#expertise-select");
const title = document.querySelector("#expertise-title");
const summary = document.querySelector("#expertise-summary");
const detail = document.querySelector("#expertise-detail");
const number = document.querySelector("#expertise-number");
const tags = document.querySelector("#expertise-tags");
const points = document.querySelector("#expertise-points");
const proof = document.querySelector("#expertise-proof");

function renderExpertise(key) {
  const item = expertise[key];
  if (!item) {
    return;
  }

  number.textContent = item.number;
  title.textContent = item.title;
  summary.textContent = item.summary;
  detail.textContent = item.detail;
  proof.textContent = item.proof;

  tags.replaceChildren(...item.tags.map((label) => {
    const tag = document.createElement("span");
    tag.className = "tag";
    tag.textContent = label;
    return tag;
  }));

  points.replaceChildren(...item.points.map((text) => {
    const point = document.createElement("li");
    point.textContent = text;
    return point;
  }));
}

select.addEventListener("change", (event) => renderExpertise(event.target.value));
document.querySelector("#current-year").textContent = String(new Date().getFullYear());
renderExpertise(select.value);

const projectDialog = document.querySelector("#project-dialog");
const projectDialogTitle = document.querySelector("#project-dialog-title");
const projectDialogCategory = document.querySelector("#project-dialog-category");
const projectDialogBody = document.querySelector("#project-dialog-body");

document.querySelectorAll("[data-project-detail]").forEach((trigger) => {
  trigger.addEventListener("click", () => {
    const template = document.getElementById(trigger.dataset.projectDetail);
    const card = trigger.closest(".project-card");
    const projectTitle = card && card.querySelector("h3");
    const projectCategory = card && card.querySelector(".project-topline span");

    if (!template || !card || !projectTitle || !projectCategory) {
      throw new Error("Project details could not be loaded.");
    }

    projectDialogTitle.textContent = projectTitle.textContent;
    projectDialogCategory.textContent = projectCategory.textContent;
    projectDialogBody.replaceChildren(template.content.cloneNode(true));
    projectDialog.showModal();
  });
});

document.querySelector("[data-close-project-dialog]").addEventListener("click", () => {
  projectDialog.close();
});

projectDialog.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    event.preventDefault();
    projectDialog.close();
  }
});

projectDialog.addEventListener("cancel", (event) => {
  event.preventDefault();
  projectDialog.close();
});

projectDialog.addEventListener("click", (event) => {
  if (event.target === projectDialog) {
    projectDialog.close();
  }
});
