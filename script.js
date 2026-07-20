"use strict";

const DEBUG_ZONES = false;
const DEVELOPER_MODE = false;
const FOOD_FALLBACK =
  "https://www.italia.it/en/italy/things-to-do/food-and-wine";

const foodLinks = {
  "Bagna Càuda": FOOD_FALLBACK,
  "Fonduta Valdostana": FOOD_FALLBACK,
  "Trofie al Pesto Genovese": FOOD_FALLBACK,
  "Risotto alla Milanese": FOOD_FALLBACK,
  "Canederli allo Speck": FOOD_FALLBACK,
  "Baccalà Mantecato": FOOD_FALLBACK,
  "Polenta Friulana": FOOD_FALLBACK,
  "Tagliatelle al Ragù": FOOD_FALLBACK,
  "Bistecca alla Fiorentina": FOOD_FALLBACK,
  "Strangozzi al Tartufo": FOOD_FALLBACK,
  "Olive all'Ascolana": FOOD_FALLBACK,
  "Pampanella": FOOD_FALLBACK,
  "Sfogliatella": FOOD_FALLBACK,
  "Orecchiette con le cime di rapa": FOOD_FALLBACK,
  "Strascinati con Peperoni Cruschi": FOOD_FALLBACK,
  "Fileja alla 'Nduja": FOOD_FALLBACK,
  "Arancini": FOOD_FALLBACK,
  "Cannolo Siciliano": FOOD_FALLBACK,
  "Pane Carasau":
    "https://www.italia.it/en/sardinia/things-to-do/history-of-the-typical-sardinian-carasau-bread",
  "Culurgiones": FOOD_FALLBACK
};
const regions = italyData;

const regionNamesEnglish = {
  "Valle d'Aosta": "Aosta Valley",
  Piemonte: "Piedmont",
  Liguria: "Liguria",
  Lombardia: "Lombardy",
  "Trentino-Alto Adige": "Trentino-South Tyrol",
  Veneto: "Veneto",
  "Friuli-Venezia Giulia": "Friuli-Venezia Giulia",
  "Emilia-Romagna": "Emilia-Romagna",
  Toscana: "Tuscany",
  Umbria: "Umbria",
  Marche: "Marche",
  Lazio: "Lazio",
  Abruzzo: "Abruzzo",
  Molise: "Molise",
  Campania: "Campania",
  Puglia: "Apulia",
  Basilicata: "Basilicata",
  Calabria: "Calabria",
  Sicilia: "Sicily",
  Sardegna: "Sardinia"
};

function getEnglishRegionName(regionName) {
  return regionNamesEnglish[regionName] || regionName;
}
/* =========================================================
   OFFICIAL TOURISM LINKS
   ========================================================= */

const tourismLinksByRegion = {
  "Valle d'Aosta": {
    region: "https://www.lovevda.it/en",
    food: "https://www.lovevda.it/en/food-and-wine"
  },

  Piemonte: {
    region: "https://www.visitpiemonte.com/en",
    food: "https://www.visitpiemonte.com/en/taste"
  },

  Liguria: {
    region: "https://lamialiguria.it/en/",
    food: "https://lamialiguria.it/en/food-and-wine/"
  },

  Lombardia: {
    region: "https://www.in-lombardia.it/en",
    food: "https://www.in-lombardia.it/en/visiting-lombardy/food-and-wine-tourism-lombardy"
  },

  "Trentino-Alto Adige": {
    region: "https://www.visittrentino.info/en",
    food: "https://www.visittrentino.info/en/articles/food-and-wine"
  },

  Veneto: {
    region: "https://www.veneto.eu/",
    food: "https://www.veneto.eu/EN/Food_and_wine/"
  },

  "Friuli-Venezia Giulia": {
    region: "https://www.turismofvg.it/en",
    food: "https://www.turismofvg.it/en/food-and-wine"
  },

  "Emilia-Romagna": {
    region: "https://emiliaromagnaturismo.it/en",
    food: "https://emiliaromagnaturismo.it/en/food-valley"
  },

  Toscana: {
    region: "https://www.visittuscany.com/en/",
    food: "https://www.visittuscany.com/en/flavors/"
  },

  Umbria: {
    region: "https://www.umbriatourism.it/en",
    food: "https://www.umbriatourism.it/en/food-and-wine"
  },

  Marche: {
    region: "https://www.letsmarche.it/en",
    food: "https://www.letsmarche.it/en/food-and-wine"
  },

  Lazio: {
    region: "https://www.visitlazio.com/",
    food: "https://www.visitlazio.com/enogastronomia/"
  },

  Abruzzo: {
    region: "https://abruzzoturismo.it/en",
    food: "https://abruzzoturismo.it/en/food-and-wine"
  },

  Molise: {
    region: "https://www.visitmolise.eu/",
    food: "https://www.visitmolise.eu/enogastronomia/"
  },

  Campania: {
    region: "https://www.campaniartecard.it/",
    food: "https://www.italia.it/en/campania/things-to-do/food-and-wine"
  },

  Puglia: {
    region: "https://visit.puglia.it/en",
    food: "https://visit.puglia.it/en/food-and-wine"
  },

  Basilicata: {
    region: "https://www.basilicataturistica.it/en/",
    food: "https://www.basilicataturistica.it/en/food-and-wine/"
  },

  Calabria: {
    region: "https://calabriastraordinaria.it/en/",
    food: "https://calabriastraordinaria.it/en/food-and-wine"
  },

  Sicilia: {
    region: "https://www.visitsicily.info/en/",
    food: "https://www.visitsicily.info/en/flavours/"
  },

  Sardegna: {
    region: "https://www.sardegnaturismo.it/en",
    food: "https://www.sardegnaturismo.it/en/explore/culinary-traditions"
  }
};
function updateTourismLink(region) {
  const section = document.querySelector("#tourismLinkSection");
  const link = document.querySelector("#tourismLink");
  const italianText = document.querySelector("#tourismLinkItalian");
  const englishText = document.querySelector("#tourismLinkEnglish");

  const links = tourismLinksByRegion[region.region];

  if (
    !section ||
    !link ||
    !italianText ||
    !englishText ||
    !links
  ) {
    if (section) {
      section.hidden = true;
    }
    return;
  }

  const englishRegion =
    getEnglishRegionName(region.region);

  if (gameMode === "foods") {

    link.href =
      foodLinks[region.food.name] || FOOD_FALLBACK;

    italianText.textContent =
      "Scopri questo piatto";

    englishText.textContent =
      "Discover this dish";

  } else if (gameMode === "regions") {

    link.href = links.region;

    italianText.textContent =
      `Scopri ${region.region}`;

    englishText.textContent =
      `Discover ${englishRegion}`;

  } else {

    section.hidden = true;
    return;

  }

  section.hidden = false;
}

let gameMode = "regions";
let correctCount = 0;
let selectedZone = null;
let lastFocusedMusicZone = null;

const cardContainer = document.querySelector("#regionCards");
const dropZoneContainer = document.querySelector("#dropZones");
const progressRow = document.querySelector("#progressRow");
const progressText = document.querySelector("#progressText");
const progressFill = document.querySelector("#progressFill");
const completionMessage = document.querySelector(
  "#completionMessage"
);
const completionText = document.querySelector(
  "#completionText"
);
const mapBoard = document.querySelector("#mapBoard");

const shuffleButton = document.querySelector("#shuffleButton");
const resetButton = document.querySelector("#resetButton");
const playAgainButton = document.querySelector(
  "#playAgainButton"
);
const gameButtons = document.querySelector("#gameButtons");

const activityModeButtons = document.querySelectorAll(
  ".mode-button[data-mode]"
);

const panelHeading = document.querySelector("#panelHeading");
const instructions = document.querySelector("#instructions");

const musicIntroduction = document.querySelector(
  "#musicIntroduction"
);

const musicModal = document.querySelector("#musicModal");
const musicModalClose = document.querySelector(
  "#musicModalClose"
);
const musicModalRegion = document.querySelector(
  "#musicModalRegion"
);
const musicSongList = document.querySelector(
  "#musicSongList"
);

/*
  These links open carefully targeted YouTube searches.

  Later, you can replace any search URL with a direct official
  artist, record-label, choir, or cultural-organization video.
*/

const musicByRegion = {
  "Valle d'Aosta": [
    {
      title: "Montagnes valdôtaines",
      recording:
        "Featured recording: a Valdostan regional choir",
      description:
        "A traditional French-language song celebrating the Alpine landscape of the Aosta Valley.",
      youtube:
        "https://www.youtube.com/results?search_query=Montagnes+vald%C3%B4taines+coro+Valle+d%27Aosta"
    }
  ],

  Piemonte: [
    {
      title: "Piemontesina mia",
      recording:
        "Featured recording: Coro Bajolese",
      description:
        "A nostalgic song closely associated with Piedmont and its regional popular-music tradition.",
      youtube:
        "https://www.youtube.com/results?search_query=Piemontesina+mia+Coro+Bajolese"
    }
  ],

  Liguria: [
    {
      title: "Crêuza de mä",
      recording:
        "Featured recording: Fabrizio De André",
      description:
        "A celebrated song in Genoese inspired by the seafaring culture and sounds of Liguria.",
      youtube:
        "https://www.youtube.com/results?search_query=Fabrizio+De+Andr%C3%A9+Cr%C3%AAuza+de+m%C3%A4+official"
    }
  ],

  Lombardia: [
    {
      title: "O mia bela Madunina",
      recording:
        "Featured recording: Nanni Svampa",
      description:
        "A beloved Milanese song honoring the Madonnina above the Duomo di Milano.",
      youtube:
        "https://www.youtube.com/results?search_query=Nanni+Svampa+O+mia+bela+Madunina"
    }
  ],

  "Trentino-Alto Adige": [
    {
      title: "La Montanara",
      recording:
        "Featured recording: Coro SAT",
      description:
        "A famous Alpine choral song inspired by mountain landscapes and strongly connected with Trentino.",
      youtube:
        "https://www.youtube.com/results?search_query=Coro+SAT+La+Montanara+official"
    }
  ],

  Veneto: [
    {
      title: "La biondina in gondoleta",
      recording:
        "Featured recording: a Venetian vocal ensemble",
      description:
        "A classic Venetian barcarolle associated with gondolas and the musical traditions of Venice.",
      youtube:
        "https://www.youtube.com/results?search_query=La+biondina+in+gondoleta+Venetian+ensemble"
    }
  ],

  "Friuli-Venezia Giulia": [
    {
      title: "Stelutis alpinis",
      recording:
        "Featured recording: Coro SAT",
      description:
        "A moving Friulian song associated with remembrance, loss, and the Alpine landscape.",
      youtube:
        "https://www.youtube.com/results?search_query=Coro+SAT+Stelutis+alpinis"
    }
  ],

  "Emilia-Romagna": [
    {
      title: "Romagna mia",
      recording:
        "Featured recording: Orchestra Casadei",
      description:
        "A beloved regional classic and one of the best-known songs of Romagna's liscio tradition.",
      youtube:
        "https://www.youtube.com/results?search_query=Orchestra+Casadei+Romagna+mia+official"
    }
  ],

  Toscana: [
    {
      title: "Maremma amara",
      recording:
        "Featured recording: Ginevra Di Marco",
      description:
        "A traditional Tuscan song reflecting the difficult history and landscape of the Maremma.",
      youtube:
        "https://www.youtube.com/results?search_query=Ginevra+Di+Marco+Maremma+amara+official"
    }
  ],

  Umbria: [
    {
      title: "La Pasquarella umbra",
      recording:
        "Featured recording: an Umbrian folk ensemble",
      description:
        "A traditional seasonal song connected with community celebrations and rural customs in Umbria.",
      youtube:
        "https://www.youtube.com/results?search_query=La+Pasquarella+umbra+gruppo+folk"
    }
  ],

  Marche: [
    {
      title: "Amor se mi vuoi bene",
      recording:
        "Featured recording: La Macina",
      description:
        "A traditional song preserved and performed within the folk-music culture of the Marche.",
      youtube:
        "https://www.youtube.com/results?search_query=La+Macina+Amor+se+mi+vuoi+bene"
    }
  ],

  Lazio: [
    {
      title: "Roma nun fa' la stupida stasera",
      recording:
        "Featured recording: Claudio Villa",
      description:
        "A classic Roman song from the musical Rugantino, filled with the atmosphere and romance of Rome.",
      youtube:
        "https://www.youtube.com/results?search_query=Claudio+Villa+Roma+nun+fa+la+stupida+stasera"
    }
  ],

  Abruzzo: [
    {
      title: "Vola vola vola",
      recording:
        "Featured recording: Coro della Portella",
      description:
        "A beloved twentieth-century song that has become an enduring musical symbol of Abruzzo.",
      youtube:
        "https://www.youtube.com/results?search_query=Coro+della+Portella+Vola+vola+vola"
    }
  ],

  Molise: [
    {
      title: "Rosabella del Molise",
      recording:
        "Featured recording: a Molisan folk ensemble",
      description:
        "A regional folk song associated with Molise and its community music traditions.",
      youtube:
        "https://www.youtube.com/results?search_query=Rosabella+del+Molise+gruppo+folk"
    }
  ],

  Campania: [
    {
      title: "'O sole mio",
      recording:
          "Featured recording: Enrico Caruso",
      description:
        "One of the world's best-known Neapolitan songs and an enduring example of Naples's vocal tradition.",
      youtube:
         "https://www.youtube.com/results?search_query=Enrico+Caruso+O+sole+mio"
    },

    {
      title: "Torna a Surriento",
      recording:
          "Featured recording: Enrico Caruso",
      description:
        "A beloved Neapolitan classic inspired by Sorrento and the beauty of its coastal setting.",
      youtube:
        "https://www.youtube.com/results?search_query=Enrico+Caruso+Torna+a+Surriento"
    },

    {
      title: "Santa Lucia",
      recording:
          "Featured recording: Enrico Caruso",
      description:
        "A celebrated Neapolitan song connected with Naples's historic Santa Lucia waterfront.",
      youtube:
         "https://www.youtube.com/results?search_query=Enrico+Caruso+Santa+Lucia"
    },

    {
      title: "Funiculì, Funiculà",
      recording:
          "Featured recording: Enrico Caruso",
      description:
        "Written in 1880 to celebrate the funicular railway that once carried visitors up Mount Vesuvius.",
      youtube:
        "https://www.youtube.com/results?search_query=Luciano+Pavarotti+Funicul%C3%AC+Funicul%C3%A0+official"
    },

    {
      title: "'O surdato 'nnammurato",
      recording:
        "Featured recording: Massimo Ranieri",
      description:
        "A deeply loved Neapolitan song about a soldier separated from the person he loves.",
      youtube:
        "https://www.youtube.com/results?search_query=Massimo+Ranieri+%27O+surdato+%27nnammurato+official"
    }
  ],

  Puglia: [
    {
      title: "Lu core meu",
      recording:
        "Featured recording: Canzoniere Grecanico Salentino",
      description:
        "A song rooted in the musical culture of Salento and connected with the region's pizzica tradition.",
      youtube:
        "https://www.youtube.com/results?search_query=Canzoniere+Grecanico+Salentino+Lu+core+meu+official"
    }
  ],

  Basilicata: [
    {
      title: "Comm' si fatta rossa",
      recording:
        "Featured recording: a Lucanian folk ensemble",
      description:
        "A traditional Lucanian song representing the oral and folk-music traditions of Basilicata.",
      youtube:
        "https://www.youtube.com/results?search_query=Comm%27+si+fatta+rossa+Basilicata"
    }
  ],

  Calabria: [
    {
      title: "Calabrisella mia",
      recording:
        "Featured recording: Otello Profazio",
      description:
        "A classic regional song closely associated with Calabria and its folk-music tradition.",
      youtube:
        "https://www.youtube.com/results?search_query=Otello+Profazio+Calabrisella+mia"
    }
  ],

  Sicilia: [
    {
      title: "Ciuri ciuri",
      recording:
        "Featured recording: Rosa Balistreri",
      description:
        "One of Sicily's best-known traditional songs, recognized for its lively and memorable refrain.",
      youtube:
        "https://www.youtube.com/results?search_query=Rosa+Balistreri+Ciuri+ciuri"
    },

    {
      title: "Vitti 'na crozza",
      recording:
        "Featured recording: Rosa Balistreri",
      description:
        "A haunting Sicilian song that reflects themes of mortality and popular tradition.",
      youtube:
        "https://www.youtube.com/results?search_query=Rosa+Balistreri+Vitti+na+crozza"
    }
  ],

  Sardegna: [
    {
      title: "No potho reposare",
      recording:
        "Featured recording: Andrea Parodi",
      description:
        "A beloved Sardinian love song often regarded as an unofficial musical symbol of the island.",
      youtube:
        "https://www.youtube.com/results?search_query=Andrea+Parodi+No+potho+reposare+official"
    }
  ]
};

function shuffle(array) {
  const copy = [...array];

  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(
      Math.random() * (i + 1)
    );

    [copy[i], copy[j]] = [
      copy[j],
      copy[i]
    ];
  }

  return copy;
}

function handleDragAutoScroll(event) {
  const pointerY = event.clientY;

  if (pointerY <= 0) {
    return;
  }

  const edgeDistance = 180;
  const viewportHeight = window.innerHeight;
  const maximumScroll = 35;

  if (pointerY < edgeDistance) {
    const strength =
      (edgeDistance - pointerY) /
      edgeDistance;

    const amount = Math.max(
      5,
      Math.ceil(maximumScroll * strength)
    );

    window.scrollBy(0, -amount);
  } else if (
    pointerY >
    viewportHeight - edgeDistance
  ) {
    const strength =
      (
        pointerY -
        (viewportHeight - edgeDistance)
      ) /
      edgeDistance;

    const amount = Math.max(
      5,
      Math.ceil(maximumScroll * strength)
    );

    window.scrollBy(0, amount);
  }
}

function createCards() {
  cardContainer.innerHTML = "";

  if (gameMode === "music") {
    return;
  }

  shuffle(regions).forEach((region) => {
    const card =
      document.createElement("div");

    card.className = "region-card";
    card.draggable = true;
    card.dataset.id =
      String(region.id);

    const visualMode =
      gameMode === "landmarks" ||
      gameMode === "foods";

    if (visualMode) {
      const item =
        gameMode === "landmarks"
          ? region.landmark
          : region.food;

      const image =
        document.createElement("img");

      image.className = "card-image";
      image.src = item.image;
      image.alt = item.name;
      image.draggable = false;

      const label =
        document.createElement("span");

      label.className = "card-label";
      label.textContent = item.name;

      card.append(image, label);
    } else {
      const italianName = document.createElement("strong");
      italianName.className = "region-name-italian";
      italianName.textContent = region.region;

      const englishName = document.createElement("span");
      englishName.className = "region-name-english";
      englishName.textContent = getEnglishRegionName(region.region);

      card.classList.add("bilingual-region-card");
      card.append(italianName, englishName);
    }

    card.addEventListener(
      "dragstart",
      (event) => {
        event.dataTransfer.effectAllowed =
          "move";

        event.dataTransfer.setData(
          "text/plain",
          String(region.id)
        );

        card.classList.add("dragging");
      }
    );

    card.addEventListener(
      "drag",
      handleDragAutoScroll
    );

    card.addEventListener(
      "dragend",
      () => {
        card.classList.remove("dragging");
      }
    );

    cardContainer.appendChild(card);
  });
}

function createZones() {
  dropZoneContainer.innerHTML = "";
  selectedZone = null;

  regions.forEach((region, index) => {
    const zone =
      document.createElement(
        gameMode === "music"
          ? "button"
          : "div"
      );

    zone.className = "drop-zone";
    zone.dataset.id = String(region.id);

    zone.dataset.debug =
      String(index + 1).padStart(
        2,
        "0"
      );

    zone.style.left = `${region.x}%`;
    zone.style.top = `${region.y}%`;

    if (gameMode === "music") {
      zone.type = "button";

      zone.classList.add(
        "music-zone"
      );

      zone.setAttribute(
        "aria-label",
        `Explore music from ${region.region}`
      );

      zone.title =
        `Music from ${region.region}`;

      zone.addEventListener(
        "click",
        (event) => {
          event.stopPropagation();

          openMusicModal(
            region,
            zone
          );
        }
      );

      dropZoneContainer.appendChild(
        zone
      );

      return;
    }

    if (DEBUG_ZONES) {
      zone.classList.add(
        "debug-zone"
      );
    }

    if (DEVELOPER_MODE) {
      zone.classList.add(
        "developer-zone"
      );

      zone.title =
        `${region.region}: click, then use arrow keys`;

      zone.addEventListener(
        "click",
        (event) => {
          event.stopPropagation();

          selectZone(
            zone,
            region
          );
        }
      );
    }

    zone.addEventListener(
      "dragover",
      (event) => {
        event.preventDefault();

        event.dataTransfer.dropEffect =
          "move";

        zone.classList.add(
          "drag-over"
        );
      }
    );

    zone.addEventListener(
      "dragleave",
      () => {
        zone.classList.remove(
          "drag-over"
        );
      }
    );

    zone.addEventListener(
      "drop",
      (event) => {
        event.preventDefault();

        zone.classList.remove(
          "drag-over"
        );

        const droppedId =
          event.dataTransfer.getData(
            "text/plain"
          );

        if (
          droppedId ===
          String(region.id)
        ) {
          placeCorrect(
            zone,
            region
          );
        } else {
          showWrong(zone);
        }
      }
    );

    dropZoneContainer.appendChild(zone);
  });
}

function selectZone(zone, region) {
  if (selectedZone) {
    selectedZone.element.classList.remove(
      "selected-zone"
    );
  }

  selectedZone = {
    element: zone,
    region
  };

  zone.classList.add(
    "selected-zone"
  );

  console.clear();

  console.log(
    `Selected: ${region.region}`
  );

  printCoordinates(region);
}

function printCoordinates(region) {
  console.log(
    `${region.region}: x: ${Number(
      region.x
    ).toFixed(1)}, ` +
    `y: ${Number(
      region.y
    ).toFixed(1)}`
  );

  console.log(`
Paste these values into italy-data.js:

x: ${Number(region.x).toFixed(1)},
y: ${Number(region.y).toFixed(1)}
  `);
}

function moveSelectedZone(event) {
  if (
    !DEVELOPER_MODE ||
    !selectedZone
  ) {
    return;
  }

  const arrowKeys = [
    "ArrowLeft",
    "ArrowRight",
    "ArrowUp",
    "ArrowDown"
  ];

  if (
    !arrowKeys.includes(event.key)
  ) {
    return;
  }

  event.preventDefault();

  const amount =
    event.shiftKey ? 1 : 0.2;

  const {
    element,
    region
  } = selectedZone;

  switch (event.key) {
    case "ArrowLeft":
      region.x -= amount;
      break;

    case "ArrowRight":
      region.x += amount;
      break;

    case "ArrowUp":
      region.y -= amount;
      break;

    case "ArrowDown":
      region.y += amount;
      break;

    default:
      return;
  }

  region.x = Number(
    region.x.toFixed(1)
  );

  region.y = Number(
    region.y.toFixed(1)
  );

  element.style.left =
    `${region.x}%`;

  element.style.top =
    `${region.y}%`;

  printCoordinates(region);
}

function placeCorrect(
  zone,
  region
) {
  if (
    zone.classList.contains(
      "correct"
    )
  ) {
    return;
  }

  zone.classList.add("correct");

  zone.classList.remove(
    "debug-zone"
  );

  zone.classList.remove(
    "selected-zone"
  );

  if (
    gameMode === "landmarks" ||
    gameMode === "foods"
  ) {
    const item =
      gameMode === "landmarks"
        ? region.landmark
        : region.food;

    zone.innerHTML = `
      <img
        class="placed-landmark"
        src="${item.image}"
        alt="${item.name}"
      >
    `;
  } else {
    zone.innerHTML = `
      <span class="placed-label">
        <strong>${region.region}</strong>
        <span>${getEnglishRegionName(region.region)}</span>
      </span>
    `;
  }

  const matchingCard =
    cardContainer.querySelector(
      `.region-card[data-id="${region.id}"]`
    );

  matchingCard?.remove();

  correctCount += 1;

  updateProgress();

  showRegionalSpotlight(region);

  if (
    correctCount === regions.length
  ) {
    window.setTimeout(() => {
      completionMessage.hidden = false;

      launchConfetti();
    }, 400);
  }
}

function showRegionalSpotlight(
  region
) {
  const cultureBox =
    document.querySelector(
      "#cultureBox"
    );

  const cultureRegion =
    document.querySelector(
      "#cultureRegion"
    );

  const cultureHighlight =
    document.querySelector(
      "#cultureHighlight"
    );

  const cultureLanguage =
    document.querySelector(
      "#cultureLanguage"
    );

  const cultureLanguageSection =
    document.querySelector(
      "#cultureLanguageSection"
    );

  cultureRegion.textContent =
    region.region;

  cultureHighlight.textContent =
    region.highlight || "";

  if (region.language) {
    cultureLanguage.textContent =
      region.language;

    cultureLanguageSection.hidden =
      false;
  } else {
    cultureLanguageSection.hidden =
      true;
  }
updateTourismLink(region);
  cultureBox.hidden = false;

  cultureBox.classList.remove(
    "spotlight-reveal"
  );

  void cultureBox.offsetWidth;

  cultureBox.classList.add(
    "spotlight-reveal"
  );
}

function showWrong(zone) {
  zone.classList.remove(
    "wrong-shake"
  );

  void zone.offsetWidth;

  zone.classList.add(
    "wrong-shake"
  );

  window.setTimeout(() => {
    zone.classList.remove(
      "wrong-shake"
    );
  }, 400);
}

function updateProgress() {
  progressText.innerHTML = `
    <strong>${correctCount} di ${regions.length} corrette</strong>
    <span>${correctCount} of ${regions.length} correct</span>
  `;

  const percentage =
    (
      correctCount /
      regions.length
    ) *
    100;

  progressFill.style.width =
    `${percentage}%`;
}

function setGameMode(mode) {
  gameMode = mode;

  activityModeButtons.forEach(
    (button) => {
      button.classList.toggle(
        "active",
        button.dataset.mode === mode
      );
    }
  );

  const musicMode =
    mode === "music";

  progressRow.hidden = musicMode;
  gameButtons.hidden = musicMode;

  musicIntroduction.hidden =
    !musicMode;

  mapBoard.classList.toggle(
    "music-mode",
    musicMode
  );

  switch (mode) {
    case "landmarks":
      panelHeading.innerHTML = `
        <strong>Monumenti</strong>
        <span>Landmarks</span>
      `;

      instructions.innerHTML = `
        <strong>Abbina ogni monumento alla regione corretta.</strong>
        <span>Match each landmark to the correct region.</span>
      `;

      break;

    case "foods":
      panelHeading.innerHTML = `
        <strong>Specialità regionali</strong>
        <span>Regional Specialties</span>
      `;

      instructions.innerHTML = `
        <strong>Abbina ogni specialità alla regione corretta.</strong>
        <span>Match each regional specialty to the correct region.</span>
      `;

      break;

    case "music":
  panelHeading.innerHTML = `
    <strong>Musica tradizionale d'Italia</strong>
    <span>Traditional &amp; Folk Music of Italy</span>
  `;

  instructions.innerHTML = `
    <strong>
      Scegli una regione per ascoltare una o più canzoni tradizionali.
    </strong>
    <span>
      Choose a region to hear one or more traditional songs.
    </span>
  `;

  break;

    default:
      panelHeading.innerHTML = `
        <strong>Regioni</strong>
        <span>Regions</span>
      `;

      instructions.innerHTML = `
        <strong>Abbina ogni regione alla posizione corretta sulla mappa.</strong>
        <span>Match each region to its correct location on the map.</span>
      `;

      break;
  }

  updateCompletionText();
  resetGame();
}

function updateCompletionText() {
  const messages = {
    regions: {
      italian: "Hai trovato tutte le 20 regioni d'Italia!",
      english: "You matched all 20 Italian regions!"
    },
    landmarks: {
      italian: "Hai abbinato tutti i monumenti alle regioni corrette!",
      english: "You matched every landmark to the correct region!"
    },
    foods: {
      italian: "Hai abbinato tutte le specialità alle regioni corrette!",
      english: "You matched every regional specialty to the correct region!"
    }
  };

  const message = messages[gameMode] || messages.regions;

  completionText.innerHTML = `
    <strong>${message.italian}</strong>
    <span>${message.english}</span>
  `;
}

function resetGame() {
  correctCount = 0;
  selectedZone = null;

  completionMessage.hidden = true;

  document.querySelector(
    "#cultureBox"
  ).hidden = true;

  createCards();
  createZones();
  updateProgress();
}

function shuffleUnmatchedCards() {
  if (gameMode === "music") {
    return;
  }

  const cards = Array.from(
    cardContainer.querySelectorAll(
      ".region-card"
    )
  );

  shuffle(cards).forEach((card) => {
    cardContainer.appendChild(card);
  });
}

function openMusicModal(
  region,
  trigger
) {
  const songs =
    musicByRegion[region.region] || [];

  lastFocusedMusicZone = trigger;

  musicModalRegion.textContent =
    region.region;

  musicSongList.innerHTML = "";

  if (songs.length === 0) {
    const message =
      document.createElement("p");

    message.innerHTML = `
      <strong>Una registrazione sarà aggiunta presto.</strong>
      <span>A featured recording will be added soon.</span>
    `;

    musicSongList.appendChild(
      message
    );
  }

  songs.forEach((song) => {
    const article =
      document.createElement(
        "article"
      );

    article.className =
      "music-song";

    const title =
      document.createElement("h3");

    title.className =
      "music-song-title";

    title.textContent =
      `🎵 ${song.title}`;

    const recording =
      document.createElement("p");

    recording.className =
      "music-song-recording";

    recording.textContent =
      `🎧 ${song.recording}`;

    const description =
      document.createElement("p");

    description.className =
      "music-song-description";

    description.textContent =
      song.description;

    const link =
      document.createElement("a");

    link.className =
      "music-youtube-link";

    link.href = song.youtube;
    link.target = "_blank";

    link.rel =
      "noopener noreferrer";

    link.innerHTML = `
      <strong>▶ Cerca su YouTube</strong>
      <span>Find on YouTube</span>
    `;

    article.append(
      title,
      recording,
      description,
      link
    );

    musicSongList.appendChild(
      article
    );
  });

  musicModal.hidden = false;

  document.body.classList.add(
    "music-modal-open"
  );

  musicModalClose.focus();
}

function closeMusicModal() {
  if (musicModal.hidden) {
    return;
  }

  musicModal.hidden = true;

  document.body.classList.remove(
    "music-modal-open"
  );

  lastFocusedMusicZone?.focus();

  lastFocusedMusicZone = null;
}

document.addEventListener(
  "keydown",
  moveSelectedZone
);

document.addEventListener(
  "keydown",
  (event) => {
    if (event.key === "Escape") {
      closeMusicModal();
    }
  }
);

document.addEventListener(
  "click",
  () => {
    if (selectedZone) {
      selectedZone.element.classList.remove(
        "selected-zone"
      );

      selectedZone = null;
    }
  }
);

activityModeButtons.forEach(
  (button) => {
    button.addEventListener(
      "click",
      () => {
        setGameMode(
          button.dataset.mode
        );
      }
    );
  }
);

shuffleButton.addEventListener(
  "click",
  shuffleUnmatchedCards
);

resetButton.addEventListener(
  "click",
  resetGame
);

playAgainButton.addEventListener(
  "click",
  resetGame
);

musicModalClose.addEventListener(
  "click",
  closeMusicModal
);

musicModal.addEventListener(
  "click",
  (event) => {
    if (
      event.target === musicModal
    ) {
      closeMusicModal();
    }
  }
);

const requestedMode =
  new URLSearchParams(
    window.location.search
  ).get("mode");

const validModes = [
  "regions",
  "landmarks",
  "foods",
  "music"
];

setGameMode(
  validModes.includes(requestedMode)
    ? requestedMode
    : "regions"
);
/* ========================================
   ABOUT MODAL
   ======================================== */

const aboutButton = document.querySelector("#aboutButton");
const aboutModal = document.querySelector("#aboutModal");
const closeAbout = document.querySelector("#closeAbout");

function openAboutModal() {
  aboutModal.hidden = false;
  document.body.style.overflow = "hidden";
  closeAbout.focus();
}

function closeAboutModal() {
  if (aboutModal.hidden) {
    return;
  }

  aboutModal.hidden = true;
  document.body.style.overflow = "";
  aboutButton.focus();
}

aboutButton.addEventListener(
  "click",
  openAboutModal
);

closeAbout.addEventListener(
  "click",
  closeAboutModal
);

aboutModal.addEventListener(
  "click",
  (event) => {
    if (event.target === aboutModal) {
      closeAboutModal();
    }
  }
);

document.addEventListener(
  "keydown",
  (event) => {
    if (
      event.key === "Escape" &&
      !aboutModal.hidden
    ) {
      closeAboutModal();
    }
  }
);