const italyData = [
  {
    id: "valle-daosta",
    region: "Valle d'Aosta",
    capital: "Aosta",
    food: {
      name: "Fonduta valdostana",
      image: "assets/foods/regionalfood-19.png"
    },
    landmark: {
      name: "Monte Cervino",
      image: "assets/landmarks/landmark-16.png"
    },
    language:
      "French is also an official language. Valdôtain is also spoken.",
    highlight:
      "🏔️ Valle d'Aosta is home to Monte Bianco (Mont Blanc), the highest mountain in the Alps.",
    x: 9.5,
    y: 13.3
  },
  {
    id: "piemonte",
    region: "Piemonte",
    capital: "Torino",
    food: {
      name: "Bagna càuda",
      image: "assets/foods/regionalfood-07.png"
    },
    landmark: {
      name: "Basilica di Superga",
      image: "assets/landmarks/landmark-20.png"
    },
    language:
      "Piedmontese, Occitan, and Franco-Provençal are also spoken.",
    highlight:
      "🍇 The Langhe-Roero and Monferrato are famous for their vineyards and world-class wines.",
    x: 13.5,
    y: 20.3
  },
  {
    id: "liguria",
    region: "Liguria",
    capital: "Genova",
    food: {
      name: "Trofie al pesto genovese",
      image: "assets/foods/regionalfood-23.png"
    },
    landmark: {
      name: "Cinque Terre",
      image: "assets/landmarks/landmark-23.png"
    },
    language: "Ligurian is widely spoken.",
    highlight:
      "🌊 Cinque Terre is famous for its colorful villages perched on steep seaside cliffs.",
    x: 22.9,
    y: 28.3
  },
  {
    id: "lombardia",
    region: "Lombardia",
    capital: "Milano",
    food: {
      name: "Risotto alla milanese",
      image: "assets/foods/regionalfood-06.png"
    },
    landmark: {
      name: "Duomo di Milano",
      image: "assets/landmarks/landmark-24.png"
    },
    language: "Lombard is widely spoken.",
    highlight:
      "🎨 The Last Supper, painted by Leonardo da Vinci, is in Milan.",
    x: 29.7,
    y: 14.7
  },
  {
    id: "trentino-alto-adige",
    region: "Trentino-Alto Adige",
    capital: "Trento",
    food: {
      name: "Canederli allo speck",
      image: "assets/foods/regionalfood-21.png"
    },
    landmark: {
      name: "Tre Cime di Lavaredo",
      image: "assets/landmarks/landmark-14.png"
    },
    language:
      "German is also an official language. Ladin is also spoken.",
    highlight:
      "⛰️ The Dolomites are among the world's most spectacular mountain ranges.",
    x: 43.3,
    y: 7.3
  },
  {
    id: "veneto",
    region: "Veneto",
    capital: "Venezia",
    food: {
      name: "Baccalà mantecato con polenta",
      image: "assets/foods/regionalfood-20.png"
    },
    landmark: {
      name: "Basilica di San Marco",
      image: "assets/landmarks/landmark-17.png"
    },
    language: "Venetian is widely spoken.",
    highlight:
      "🚣 Venice is built on more than 100 small islands connected by canals and bridges.",
    x: 48.9,
    y: 15.9
  },
  {
    id: "friuli-venezia-giulia",
    region: "Friuli-Venezia Giulia",
    capital: "Trieste",
    food: {
      name: "Polenta friulana con funghi",
      image: "assets/foods/regionalfood-05.png"
    },
    landmark: {
      name: "Castello di Miramare",
      image: "assets/landmarks/landmark-26.png"
    },
    language:
      "Friulian, Slovene, and German are also spoken.",
    highlight:
      "🏛️ Aquileia was once one of the largest cities in the Roman Empire.",
    x: 60.4,
    y: 11.2
  },
  {
    id: "emilia-romagna",
    region: "Emilia-Romagna",
    capital: "Bologna",
    food: {
      name: "Tagliatelle al ragù",
      image: "assets/foods/regionalfood-14.png"
    },
    landmark: {
      name: "Due Torri",
      image: "assets/landmarks/landmark-11.png"
    },
    highlight:
      "🎓 The University of Bologna is the oldest continuously operating university in the Western world.",
    x: 40.3,
    y: 25.1
  },
  {
    id: "toscana",
    region: "Toscana",
    capital: "Firenze",
    food: {
      name: "Bistecca alla fiorentina",
      image: "assets/foods/regionalfood-10.png"
    },
    landmark: {
      name: "Duomo di Firenze",
      image: "assets/landmarks/landmark-04.png"
    },
    highlight:
      "🎨 Florence is known as the birthplace of the Renaissance.",
    x: 40.5,
    y: 35.2
  },
  {
    id: "umbria",
    region: "Umbria",
    capital: "Perugia",
    food: {
      name: "Strangozzi al tartufo nero",
      image: "assets/foods/regionalfood-17.png"
    },
    landmark: {
      name: "Basilica di San Francesco",
      image: "assets/landmarks/landmark-15.png"
    },
    highlight:
      "⛪ Assisi is the hometown of Saint Francis.",
    x: 50.4,
    y: 39.8
  },
  {
    id: "marche",
    region: "Marche",
    capital: "Ancona",
    food: {
      name: "Olive all’ascolana",
      image: "assets/foods/regionalfood-11.png"
    },
    landmark: {
      name: "Palazzo Ducale di Urbino",
      image: "assets/landmarks/landmark-10.png"
    },
    highlight:
      "🏰 Urbino is one of Italy's best-preserved Renaissance cities.",
    x: 58.4,
    y: 36.5
  },
  {
    id: "lazio",
    region: "Lazio",
    capital: "Roma",
    food: {
      name: "Pasta alla carbonara",
      image: "assets/foods/regionalfood-24.png"
    },
    landmark: {
      name: "Colosseum",
      image: "assets/landmarks/landmark-01.png"
    },
    language:
      "Romanesco is spoken in Rome and nearby areas.",
    highlight:
      "🏛️ Rome was the heart of the ancient Roman Empire.",
    x: 51.1,
    y: 49.4
  },
  {
    id: "abruzzo",
    region: "Abruzzo",
    capital: "L'Aquila",
    food: {
      name: "Arrosticini",
      image: "assets/foods/regionalfood-01.png"
    },
    landmark: {
      name: "Gran Sasso",
      image: "assets/landmarks/landmark-05.png"
    },
    highlight:
      "🏔️ Gran Sasso is the highest mountain in the Apennine Mountains.",
    x: 63,
    y: 45.2
  },
  {
    id: "molise",
    region: "Molise",
    capital: "Campobasso",
    food: {
      name: "Pampanella",
      image: "assets/foods/regionalfood-16.png"
    },
    landmark: {
      name: "Castello Monforte",
      image: "assets/landmarks/landmark-27.png"
    },
    language:
      "Molise Croatian is still spoken in a few communities.",
    highlight:
      "🔔 Agnone is home to one of the world's oldest bell foundries.",
    x: 69.8,
    y: 51.6
  },
  {
    id: "campania",
    region: "Campania",
    capital: "Napoli",
    food: {
      name: "Pizza napoletana",
      image: "assets/foods/regionalfood-03.png"
    },
    landmark: {
      name: "Vesuvio",
      image: "assets/landmarks/landmark-19.png"
    },
    language: "Neapolitan is widely spoken.",
    highlight:
      "🏺 Pompeii, Herculaneum, and Oplontis are home to some of the world's best-preserved ancient Roman ruins.",
    x: 68.8,
    y: 59.2
  },
  {
    id: "puglia",
    region: "Puglia",
    capital: "Bari",
    food: {
      name: "Orecchiette con le cime di rapa",
      image: "assets/foods/regionalfood-22.png"
    },
    landmark: {
      name: "Alberobello Trulli",
      image: "assets/landmarks/landmark-08.png"
    },
    language:
      "Griko is still spoken in parts of Salento.",
    highlight:
      "🛖 Alberobello is famous for its unique stone houses called trulli.",
    x: 85.3,
    y: 58.2
  },
  {
    id: "basilicata",
    region: "Basilicata",
    capital: "Potenza",
    food: {
      name: "Strascinati con peperoni cruschi",
      image: "assets/foods/regionalfood-15.png"
    },
    landmark: {
      name: "Sassi di Matera",
      image: "assets/landmarks/landmark-12.png"
    },
    highlight:
      "🏘️ Matera is famous for the ancient cave dwellings known as the Sassi.",
    x: 80.2,
    y: 63.4
  },
  {
    id: "calabria",
    region: "Calabria",
    capital: "Catanzaro",
    food: {
      name: "Fileja alla ’nduja",
      image: "assets/foods/regionalfood-13.png"
    },
    landmark: {
      name: "Tropea",
      image: "assets/landmarks/landmark-25.png"
    },
    language:
      "Greko is still spoken in a few communities.",
    highlight:
      "🏺 The Riace Bronzes are among the world's finest ancient Greek sculptures.",
    x: 82.6,
    y: 73.6
  },
  {
    id: "sardegna",
    region: "Sardegna",
    capital: "Cagliari",
    food: {
      name: "Culurgiones",
      image: "assets/foods/regionalfood-12.png"
    },
    landmark: {
      name: "Su Nuraxi",
      image: "assets/landmarks/landmark-07.png"
    },
    language:
      "Sardinian is widely spoken. Catalan, Gallurese, and Sassarese are also spoken.",
    highlight:
      "🗿 Su Nuraxi is one of Europe's best-preserved prehistoric archaeological sites.",
    x: 17.4,
    y: 65
  },
  {
    id: "sicilia",
    region: "Sicilia",
    capital: "Palermo",
    food: {
      name: "Arancini",
      image: "assets/foods/regionalfood-09.png"
    },
    landmark: {
      name: "Etna",
      image: "assets/landmarks/landmark-06.png"
    },
    language: "Sicilian is widely spoken.",
    highlight:
      "🌋 Mount Etna is one of the world's most active volcanoes.",
    x: 57.8,
    y: 88.8
  }
];