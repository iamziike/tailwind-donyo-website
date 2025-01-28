export const PAGES = {
  home: {
    path: "/",
    title: {
      prefix: "Home",
      suffix: "Donyo Travel",
    },
  },
} as const;

export const TAILWIND_SCREEN_SIZES = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1536px",
};

export const LOCATIONS_TO_VISIT = [
  {
    id: "1",
    name: "Great Wall of China",
    description:
      "A majestic series of fortifications spanning over 13,000 miles, built to protect China's borders from invaders. The wall showcases ancient engineering brilliance and offers breathtaking views of the surrounding landscapes.",
    tags: ["History", "China"],
    images: [
      "https://tse4.mm.bing.net/th?id=OIP.4WIuHmfLadMJbWAUEhQSxwHaE6&w=314&h=314&c=7",
    ],
  },
  {
    id: "2",
    name: "Eiffel Tower",
    description:
      "A world-famous iron structure built in 1889 as the entrance arch to the World's Fair. It is now one of the most iconic landmarks in Paris and offers stunning panoramic views of the city.",
    tags: ["City", "France"],
    images: ["https://www.planetware.com/photos-large/F/eiffel-tower.jpg"],
  },
  {
    id: "3",
    name: "Taj Mahal",
    description:
      "An exquisite white marble mausoleum built by Emperor Shah Jahan in memory of his beloved wife Mumtaz Mahal. This UNESCO World Heritage Site is a symbol of eternal love and Mughal architectural brilliance.",
    tags: ["History", "India"],
    images: [
      "https://tse4.mm.bing.net/th?id=OIP.TXlEs3JCXlV4WxCwadThrwHaE7&pid=Api",
    ],
  },
  {
    id: "4",
    name: "Christ the Redeemer",
    description:
      "A 98-foot-tall statue of Jesus Christ atop Mount Corcovado in Rio de Janeiro, symbolizing peace and unity.",
    tags: ["Religion", "Brazil"],
    images: [
      "https://tse4.mm.bing.net/th?id=OIP.1wSH6zgb8mUxCo6HVL4o7gHaE8&pid=Api",
    ],
  },
  {
    id: "5",
    name: "Pyramids of Giza",
    description:
      "Ancient pyramid structures built as monumental tombs for pharaohs, reflecting the architectural achievements of ancient Egypt.",
    tags: ["Ancient", "Egypt"],
    images: [
      "https://tse4.mm.bing.net/th?id=OIP.qa3Wfem8AKuNkz6Eq1kvVAHaH9&pid=Api",
    ],
  },
  {
    id: "6",
    name: "Machu Picchu",
    description:
      "A 15th-century Inca citadel set high in the Andes Mountains in Peru. It is renowned for its sophisticated dry-stone construction and panoramic views.",
    tags: ["History", "Peru"],
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Machu_Picchu%2C_Peru.jpg/270px-Machu_Picchu%2C_Peru.jpg",
    ],
  },
  {
    id: "7",
    name: "Colosseum",
    description:
      "An ancient Roman amphitheater in the center of Rome, Italy. It is one of the greatest works of Roman engineering and architecture.",
    tags: ["Ancient", "Italy"],
    images: [
      "https://tse4.mm.bing.net/th?id=OIP.L1UwDyQbR80WZT7Fts3abgHaE8&pid=Api",
    ],
  },
  {
    id: "8",
    name: "Sydney Opera House",
    description:
      "A multi-venue performing arts center in Sydney, Australia. It is one of the most distinctive and famous buildings in the world.",
    tags: ["Architecture", "Australia"],
    images: [
      "https://tse4.mm.bing.net/th?id=OIP.IyV2CtZyf9AaUWhDtiTd9AHaFj&pid=Api",
    ],
  },
  {
    id: "9",
    name: "Statue of Liberty",
    description:
      "A colossal neoclassical sculpture on Liberty Island in New York Harbor, USA, representing freedom and democracy.",
    tags: ["Monument", "USA"],
    images: [
      "https://tse4.mm.bing.net/th?id=OIP.PpsklkqeAzNjSG2M8JoCkQHaE7&pid=Api",
    ],
  },
  {
    id: "10",
    name: "Santorini",
    description:
      "A beautiful island in Greece known for its white-washed buildings, blue-domed churches, and stunning sunsets.",
    tags: ["Island", "Greece"],
    images: [
      "https://tse2.mm.bing.net/th?id=OIP.tKm1byGRdGgDoFszqU4u8wHaEK&pid=Api",
    ],
  },
  {
    id: "11",
    name: "Petra",
    description:
      "An archaeological city in Jordan famous for its rock-cut architecture and water conduit system.",
    tags: ["Ancient", "Jordan"],
    images: [
      "https://tse1.mm.bing.net/th?id=OIP.c4cIg06lKaIQKPnP7m9zPgHaE7&pid=Api",
    ],
  },
  {
    id: "12",
    name: "Angkor Wat",
    description:
      "A massive temple complex in Cambodia and the largest religious monument in the world.",
    tags: ["History", "Cambodia"],
    images: [
      "https://tse2.mm.bing.net/th?id=OIP.f3R-B23OfXz1EAtd2XRV1QHaE8&pid=Api",
    ],
  },
  {
    id: "13",
    name: "Grand Canyon",
    description:
      "A steep-sided canyon carved by the Colorado River in Arizona, USA, offering breathtaking natural scenery.",
    tags: ["Nature", "USA"],
    images: [
      "https://tse1.mm.bing.net/th?id=OIP.7Q6I2JhTmqSpO4BajQEs6AHaE8&pid=Api",
    ],
  },
  {
    id: "14",
    name: "Burj Khalifa",
    description:
      "The tallest building in the world, located in Dubai, UAE, known for its striking design and breathtaking views from its observation decks.",
    tags: ["Architecture", "UAE"],
    images: [
      "https://tse1.mm.bing.net/th?id=OIP.H1qgYw5WPIzP6Yd7_uNnCQHaE7&pid=Api",
    ],
  },
  {
    id: "15",
    name: "Niagara Falls",
    description:
      "A set of three massive waterfalls on the border between the USA and Canada, offering awe-inspiring views and boat tours.",
    tags: ["Nature", "USA", "Canada"],
    images: [
      "https://tse2.mm.bing.net/th?id=OIP.TBpIvUXbFQ1sq9rNjxMwUQHaE8&pid=Api",
    ],
  },
  {
    id: "16",
    name: "Mount Everest",
    description:
      "The highest mountain in the world, located in the Himalayas, attracting climbers and adventurers from around the globe.",
    tags: ["Nature", "Nepal", "China"],
    images: [
      "https://tse1.mm.bing.net/th?id=OIP.e_9rQ96Cu9GUE1KOzH9nxAHaE8&pid=Api",
    ],
  },
  {
    id: "17",
    name: "Great Barrier Reef",
    description:
      "The largest coral reef system in the world, located in Australia, offering vibrant marine life and crystal-clear waters.",
    tags: ["Nature", "Australia"],
    images: [
      "https://tse2.mm.bing.net/th?id=OIP.8mF_EIlheDEUd9Lvj2BdOAHaE8&pid=Api",
    ],
  },
  {
    id: "18",
    name: "Alhambra",
    description:
      "A stunning palace and fortress complex in Granada, Spain, showcasing Islamic architecture and lush gardens.",
    tags: ["History", "Spain"],
    images: [
      "https://tse1.mm.bing.net/th?id=OIP.FujXaFAJHjVHzOtT9Eil4wHaE8&pid=Api",
    ],
  },
  {
    id: "19",
    name: "Banff National Park",
    description:
      "Canada's first national park, featuring majestic mountains, turquoise lakes, and abundant wildlife.",
    tags: ["Nature", "Canada"],
    images: [
      "https://tse3.mm.bing.net/th?id=OIP.3HYITRUd3GClKNPMQeK13AHaE7&pid=Api",
    ],
  },
  {
    id: "20",
    name: "Stonehenge",
    description:
      "A prehistoric monument in Wiltshire, England, consisting of a ring of massive standing stones.",
    tags: ["Ancient", "England"],
    images: [
      "https://tse4.mm.bing.net/th?id=OIP.w3QHjL6GcVu9FpYI58EnKAHaE8&pid=Api",
    ],
  },
  {
    id: "21",
    name: "Hagia Sophia",
    description:
      "A former cathedral and mosque in Istanbul, Turkey, known for its massive dome and stunning Byzantine architecture.",
    tags: ["History", "Turkey"],
    images: [
      "https://tse2.mm.bing.net/th?id=OIP.OFvIewTqCta8nF02Zg05EwHaE8&pid=Api",
    ],
  },
  {
    id: "22",
    name: "Yellowstone National Park",
    description:
      "The first national park in the USA, featuring geothermal wonders like geysers and hot springs, as well as diverse wildlife.",
    tags: ["Nature", "USA"],
    images: [
      "https://tse1.mm.bing.net/th?id=OIP.xksylpFeLUI91j6EsAwwlgHaE8&pid=Api",
    ],
  },
  {
    id: "23",
    name: "Big Ben",
    description:
      "The iconic clock tower at the north end of the Palace of Westminster in London, England.",
    tags: ["Landmark", "England"],
    images: [
      "https://tse3.mm.bing.net/th?id=OIP.lNz5C8uyDLS5uFCLmHOKbwHaE8&pid=Api",
    ],
  },
  {
    id: "24",
    name: "Victoria Falls",
    description:
      "One of the largest and most famous waterfalls in the world, located on the border of Zambia and Zimbabwe.",
    tags: ["Nature", "Zambia", "Zimbabwe"],
    images: [
      "https://tse3.mm.bing.net/th?id=OIP.eE73TW9gH1ywhIqKEn36kQHaE8&pid=Api",
    ],
  },
  {
    id: "25",
    name: "Mount Fuji",
    description:
      "Japan's tallest peak and an active volcano, revered as a cultural and spiritual icon.",
    tags: ["Nature", "Japan"],
    images: [
      "https://tse2.mm.bing.net/th?id=OIP.2d-E_sJ6hsBtxUXZ8xZ9NQHaE8&pid=Api",
    ],
  },
  {
    id: "26",
    name: "The Louvre",
    description:
      "The world's largest art museum and a historic monument in Paris, France, famous for housing the Mona Lisa.",
    tags: ["Art", "France"],
    images: [
      "https://tse2.mm.bing.net/th?id=OIP.JdBQdl-WfpNFUefKhDdpRgHaE8&pid=Api",
    ],
  },
  {
    id: "27",
    name: "Galápagos Islands",
    description:
      "An archipelago of volcanic islands in the Pacific Ocean, known for their unique wildlife and Charles Darwin's studies.",
    tags: ["Nature", "Ecuador"],
    images: [
      "https://tse1.mm.bing.net/th?id=OIP.VZCe7M2JyfQx6KYm2LRTwQHaE7&pid=Api",
    ],
  },
  {
    id: "28",
    name: "Acropolis of Athens",
    description:
      "An ancient citadel located on a rocky outcrop above Athens, Greece, containing the remains of several significant buildings, including the Parthenon.",
    tags: ["Ancient", "Greece"],
    images: [
      "https://tse4.mm.bing.net/th?id=OIP.CW-jCpIPRaVTRMRIGypNNQHaE8&pid=Api",
    ],
  },
  {
    id: "29",
    name: "Chichen Itza",
    description:
      "A large pre-Columbian archaeological site built by the Maya civilization, located in Mexico.",
    tags: ["Ancient", "Mexico"],
    images: [
      "https://tse3.mm.bing.net/th?id=OIP.GFQEzV8tTQ8SCzlbFXEERwHaE8&pid=Api",
    ],
  },
  {
    id: "30",
    name: "Sagrada Familia",
    description:
      "A large unfinished Roman Catholic basilica in Barcelona, Spain, designed by architect Antoni Gaud\u00ed.",
    tags: ["Architecture", "Spain"],
    images: [
      "https://tse2.mm.bing.net/th?id=OIP.6vW8aN41kxD2xid0qsS2KwHaE8&pid=Api",
    ],
  },
];

export const THEMES = {
  LIGHT: "light",
  DARK: "dark",
  SYSTEM: "system",
  RED_MOON: "red-moon",
} as const;
