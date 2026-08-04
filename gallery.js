"use strict";

/*
  Additional landmarks already used
  by the main Italy Explorer activity.
*/

const galleryAdditionalLandmarks = [
  {
    region: "Campania",
    name: "Costiera Amalfitana",
    image:
      "assets/landmarks/landmark-28.png"
  },
  {
    region: "Campania",
    name: "Vesuvio",
    image:
      "assets/landmarks/landmark-19.png"
  },
  {
    region: "Sardegna",
    name: "Cala Goloritzé",
    image:
      "assets/landmarks/landmark-29.png"
  },
  {
    region: "Sicilia",
    name: "Scala dei Turchi",
    image:
      "assets/landmarks/landmark-30.png"
  },
  {
    region: "Toscana",
    name: "Val d’Orcia",
    image:
      "assets/landmarks/landmark-31.png"
  },
  {
    region: "Valle d'Aosta",
    name: "Gran Paradiso",
    image:
      "assets/landmarks/landmark-32.png"
  },
  {
    region: "Sicilia",
    name: "Stromboli",
    image:
      "assets/landmarks/landmark-33.png"
  },
  {
    region: "Veneto",
    name: "Delta del Po",
    image:
      "assets/landmarks/landmark-34.png"
  },
  {
    region: "Veneto",
    name: "Ponte di Rialto",
    image:
      "assets/landmarks/landmark-18.png"
  },
  {
    region: "Emilia-Romagna",
    name: "Delta del Po",
    image:
      "assets/landmarks/landmark-34.png"
  },
  {
    region: "Toscana",
    name: "Torre di Pisa",
    image:
      "assets/landmarks/landmark-03.png"
  },
  {
    region: "Sicilia",
    name: "Valle dei Templi",
    image:
      "assets/landmarks/landmark-13.png"
  },
  {
    region: "Lazio",
    name: "Fontana di Trevi",
    image:
      "assets/landmarks/landmark-35.png"
  },
  {
    region: "Lazio",
    name: "Pantheon",
    image:
      "assets/landmarks/landmark-36.png"
  }
];

const galleryGrid =
  document.querySelector("#galleryGrid");

const gallerySearch =
  document.querySelector("#gallerySearch");

const galleryRegion =
  document.querySelector("#galleryRegion");

const galleryCount =
  document.querySelector("#galleryCount");

const galleryEmpty =
  document.querySelector("#galleryEmpty");

const galleryFilterButtons =
  document.querySelectorAll(
    ".gallery-filter-button"
  );

let activeGalleryFilter = "all";

/* ========================================
   BUILD GALLERY DATA
   ======================================== */

const galleryFoodItems = italyData.map(
  region => ({
    id: `food-${region.id}`,
    category: "foods",
    name: region.food.name,
    image: region.food.image,
    regions: [region.region]
  })
);

const mainLandmarks = italyData.map(
  region => ({
    id: `landmark-${region.id}`,
    category: "landmarks",
    name: region.landmark.name,
    image: region.landmark.image,
    regions: [region.region]
  })
);

const extraLandmarks =
  galleryAdditionalLandmarks.map(
    (landmark, index) => ({
      id: `extra-landmark-${index}`,
      category: "landmarks",
      name: landmark.name,
      image: landmark.image,
      regions: [landmark.region]
    })
  );

/*
  Some landmarks belong to more than one
  region. This combines identical images
  into one gallery card.
*/

const landmarkMap = new Map();

[
  ...mainLandmarks,
  ...extraLandmarks
].forEach(item => {
  const key =
    `${item.name}|${item.image}`;

  if (!landmarkMap.has(key)) {
    landmarkMap.set(key, {
      ...item
    });

    return;
  }

  const existingItem =
    landmarkMap.get(key);

  item.regions.forEach(region => {
    if (
      !existingItem.regions.includes(region)
    ) {
      existingItem.regions.push(region);
    }
  });
});

const galleryLandmarkItems =
  [...landmarkMap.values()];

const galleryItems = [
  ...galleryLandmarkItems,
  ...galleryFoodItems
].sort((firstItem, secondItem) => {
  const regionComparison =
    firstItem.regions[0].localeCompare(
      secondItem.regions[0],
      "it"
    );

  if (regionComparison !== 0) {
    return regionComparison;
  }

  return firstItem.name.localeCompare(
    secondItem.name,
    "it"
  );
});

/* ========================================
   HELPERS
   ======================================== */

function normalizeGalleryText(text) {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(
      /[\u0300-\u036f]/g,
      ""
    );
}

function speakGalleryItalian(text) {
  if (
    !(
      "speechSynthesis" in window
    )
  ) {
    window.alert(
      "Audio is not supported in this browser."
    );

    return;
  }

  window.speechSynthesis.cancel();

  const utterance =
    new SpeechSynthesisUtterance(text);

  utterance.lang = "it-IT";
  utterance.rate = 0.82;

  const italianVoice =
    window.speechSynthesis
      .getVoices()
      .find(voice =>
        voice.lang
          .toLowerCase()
          .startsWith("it")
      );

  if (italianVoice) {
    utterance.voice = italianVoice;
  }

  window.speechSynthesis.speak(
    utterance
  );
}

function getGalleryCategory(item) {
  if (item.category === "foods") {
    return {
      icon: "🍝",
      italian: "Specialità regionale",
      english: "Regional Specialty"
    };
  }

  return {
    icon: "🏛️",
    italian: "Monumento o paesaggio",
    english: "Landmark or Landscape"
  };
}

/* ========================================
   REGION FILTER
   ======================================== */

function populateGalleryRegions() {
  const regions = [
    ...new Set(
      italyData.map(item => item.region)
    )
  ].sort((firstRegion, secondRegion) =>
    firstRegion.localeCompare(
      secondRegion,
      "it"
    )
  );

  regions.forEach(region => {
    const option =
      document.createElement("option");

    option.value = region;
    option.textContent = region;

    galleryRegion.appendChild(option);
  });
}

/* ========================================
   RENDER
   ======================================== */

function renderGallery() {
  const searchTerm =
    normalizeGalleryText(
      gallerySearch.value.trim()
    );

  const selectedRegion =
    galleryRegion.value;

  const visibleItems =
    galleryItems.filter(item => {
      const matchesCategory =
        activeGalleryFilter === "all" ||
        item.category ===
          activeGalleryFilter;

      const matchesRegion =
        selectedRegion === "all" ||
        item.regions.includes(
          selectedRegion
        );

      const searchableText =
        normalizeGalleryText(
          [
            item.name,
            ...item.regions,
            item.category
          ].join(" ")
        );

      const matchesSearch =
        !searchTerm ||
        searchableText.includes(
          searchTerm
        );

      return (
        matchesCategory &&
        matchesRegion &&
        matchesSearch
      );
    });

  galleryGrid.innerHTML = "";

  galleryEmpty.hidden =
    visibleItems.length !== 0;

  visibleItems.forEach(item => {
    const category =
      getGalleryCategory(item);

    const card =
      document.createElement("article");

    card.className = "gallery-card";

    card.dataset.category =
      item.category;

    const regionText =
      item.regions.join(" · ");

    card.innerHTML = `
      <div class="gallery-image-frame">
        <img
          src="${item.image}"
          alt="Illustrazione in argilla di ${item.name}"
          loading="lazy"
        >
      </div>

      <div class="gallery-card-content">

        <span class="gallery-badge">
          ${category.icon}
          ${category.italian}
          ·
          ${category.english}
        </span>

        <h2>
          ${item.name}
        </h2>

        <p class="gallery-region">
          ${regionText}
        </p>

        <button
          type="button"
          class="gallery-audio-button"
          aria-label="Ascolta ${item.name}"
        >
          🔊
        </button>

      </div>
    `;

    const audioButton =
      card.querySelector(
        ".gallery-audio-button"
      );

    audioButton.addEventListener(
      "click",
      () => {
        speakGalleryItalian(
          item.name
        );
      }
    );

    galleryGrid.appendChild(card);
  });

  const imageWord =
    visibleItems.length === 1
      ? "immagine"
      : "immagini";

  galleryCount.textContent =
    `${visibleItems.length} ${imageWord} · ` +
    `${visibleItems.length} images`;
}

/* ========================================
   EVENTS
   ======================================== */

gallerySearch.addEventListener(
  "input",
  renderGallery
);

galleryRegion.addEventListener(
  "change",
  renderGallery
);

galleryFilterButtons.forEach(button => {
  button.addEventListener(
    "click",
    () => {
      activeGalleryFilter =
        button.dataset.filter;

      galleryFilterButtons.forEach(
        filterButton => {
          const isActive =
            filterButton === button;

          filterButton.classList.toggle(
            "active",
            isActive
          );

          filterButton.setAttribute(
            "aria-pressed",
            String(isActive)
          );
        }
      );

      renderGallery();
    }
  );
});

populateGalleryRegions();
renderGallery();