const navigation = [
  { text: "HOME", link: "#hero" },
  { text: "SHOP", link: "#shop" },
  { text: "ABOUT US", link: "#about" },
  { text: "CONTACT", link: "#contact" },
];

const contactInfo = {
  phone: "08102515044",
  whatsapp: "08102515044",
  email: "chrisportventure@gmail.com",
};

const deliveryInfo = {
  headline: "FREE DELIVERY WHEN YOU ORDER NOW",
  paymentInfo: "NATIONWIDE PAYMENT ON DELIVERY AVAILABLE",
  timelines:
    "DELIVERY TO LAGOS STATE WITHIN 24HRS, OTHER STATES WITHIN 3-5 DAYS (Or Less)",
  offerHeadline: "ORDER NOW AND ENJOY:",
  offers: [
    "PROMO PRICE",
    "PAYMENT ON DELIVERY",
    "QUICK DELIVERY",
    "FREE DELIVERY",
    "FREE INSTALLATION",
    "1 YEAR WARRANTY",
  ],
  importantNote: "ONLY PLACE ORDER IF YOU ARE READY FOR DELIVERY & PAYMENT",
};

const heroSection = {
  title: "VIBERATION MACHINE",
  subtitle: "THE BEST GYM ALTERNATIVE",
  description1: "Treadmill is a GREAT piece of equipment.",
  description2:
    "With so many benefits both Health & Fitness wise, Treadmills have proven to be the BEST fitness equipment anyone can have at home!",
  tagline: "Best Option For Both Running and Walking.",
};

const videoSection = {
  title: "WATCH VIDEO DEMONSTATION!",
  videoUrl:
    "https://utfs.io/a/zxzyub6zq2/OX5ramIp6AH47gIhJV3tqloZKxjcWNCdIY0FaAgi8G1mwQkJ", // Example video URL
  duration: "0:43",
  description:
    "We have all heard it many times - regular exercise is good for you, and it can help you lose weight. Technology has changed exercise. Fitness equipment manufacturers are constantly innovating new products...",
};

const benefits = [
  "WEIGHT LOSS",
  "You Are In Control",
  "Reduced Impact",
  "Mental Health And Motivation",
  "Heart Health",
  "HAVE THE ABILITY TO RUN, NO MATTER THE WEATHER.",
  "Treadmills Are Convenient, Safe, And Private",
  "ALLEVIATE BOREDOM",
];

const products = [
  {
    id: "2HP_PLATFORM",
    name: "2HP Platform Treadmill",
    features: ["MP3 Player", "Handle", "Foldable"],
    maxWeight: "100KG",
    price: 425000,
    oldPrice: 500000,
    imageUrl:
      "https://utfs.io/a/zxzyub6zq2/OX5ramIp6AH4J1iSk5esDzriV8pZ04WKvHgby3wJmAQLMNfn", // Example image path 'images/product2.jpg'
    videoUrl:
      "https://utfs.io/a/zxzyub6zq2/OX5ramIp6AH47gIhJV3tqloZKxjcWNCdIY0FaAgi8G1mwQkJ",
  },
  {
    id: "2HP_MASSAGER",
    name: "2HP Treadmill",
    features: [
      "MP3 Player",
      "Sit Up Bar",
      "Dumbbells (Pair)",
      "Massager",
      "Foldable",
    ],
    maxWeight: "110KG",
    price: 525000,
    oldPrice: 570000,
    imageUrl:
      "https://utfs.io/a/zxzyub6zq2/OX5ramIp6AH4IVRPSFJaYK7so4ZDkJtpmr2qcdwAMixUOz5S",
    videoUrl:
      "https://utfs.io/a/zxzyub6zq2/OX5ramIp6AH47gIhJV3tqloZKxjcWNCdIY0FaAgi8G1mwQkJ",
  },
  {
    id: "2.5HP_MASSAGER",
    name: "2.5 HP Treadmill",
    features: [
      "Incline",
      "MP3 Player",
      "Sit Up Bar",
      "Dumbbells (Pair)",
      "Massager",
      "Foldable",
    ],
    maxWeight: "120KG",
    price: 750000,
    oldPrice: 850000,
    imageUrl:
      "https://utfs.io/a/zxzyub6zq2/OX5ramIp6AH4m9T4msjxbNuayWwsiKnYqShUCRB8VpPEvdk2",
    videoUrl:
      "https://utfs.io/a/zxzyub6zq2/OX5ramIp6AH47gIhJV3tqloZKxjcWNCdIY0FaAgi8G1mwQkJ",
  },
  {
    id: "HEAVY_DUTY_LUXURY",
    name: "Heavy Duty Luxury Treadmill",
    features: [
      "Auto-Incline",
      "MP3 Player",
      "Sit Up Bar",
      "Dumbbells (Pair)",
      "Massager",
      "Foldable",
    ],
    maxWeight: "150KG",
    price: 1850000,
    oldPrice: 1980000,
    imageUrl:
      "https://utfs.io/a/zxzyub6zq2/OX5ramIp6AH4l9MVeDbTkd4EFBSyjNXvAmV5YTPRfOcoQa7e",
    videoUrl:
      "https://utfs.io/a/zxzyub6zq2/OX5ramIp6AH47gIhJV3tqloZKxjcWNCdIY0FaAgi8G1mwQkJ",
  },
  {
    id: "4HP_SEMI_COMMERCIAL",
    name: "4 HP Semi Commercial Treadmill",
    features: [
      "Incline",
      "MP3 Player",
      "Sit Up Bar",
      "Dumbbells (Pair)",
      "Massager",
      "Foldable",
    ],
    maxWeight: "150KG",
    price: 1200000,
    oldPrice: 1300000,
    imageUrl:
      "https://utfs.io/a/zxzyub6zq2/OX5ramIp6AH4O0bTxTIp6AH4m8g2W7DMkbYQirLUe9qXvSfc",
    videoUrl:
      "https://utfs.io/a/zxzyub6zq2/OX5ramIp6AH47gIhJV3tqloZKxjcWNCdIY0FaAgi8G1mwQkJ",
  },
  {
    id: "BIG_HEAVY_DUTY_LUXURY",
    name: "Big Heavy Duty Luxury Treadmill",
    features: [
      "Auto-Incline",
      "MP3 Player",
      "Massager",
      "Foldable",
      "Extra Durable Frame",
    ],
    maxWeight: "180KG",
    price: 5470000,
    oldPrice: null,
    imageUrl:
      "https://utfs.io/a/zxzyub6zq2/OX5ramIp6AH4J1iSk5esDzriV8pZ04WKvHgby3wJmAQLMNfn",
    videoUrl:
      "https://utfs.io/a/zxzyub6zq2/OX5ramIp6AH47gIhJV3tqloZKxjcWNCdIY0FaAgi8G1mwQkJ",
  },
];

const testimonials = [
  {
    quote:
      "The fact that this treadmill has virtually all the exercise functions in 1 is stunning. Very wonderful machine! It's better than running on the road. Thats why i bought it, and it's serving it's purpose very well",
    author: "Capt. Isreal",
    location: "Warri, Delta",
  },
  {
    quote:
      "This treadmill is more than what i expected. I bought the 2.5HP and it's amazing what it has done for me and my health status. Thank you so much for helping me improve the quality of my life.",
    author: "Joshua Enendu",
    location: "Abuja",
  },
  {
    quote:
      "Very lovely customer service. The delivery and set up went fine and so far, everything is going great!",
    author: "Mrs Bunmi",
    location: "Ajao est. Lagos",
  },
  {
    quote:
      "I love the TREADMILL MACHINE. I bought it last month. They delivered it right to my office, and even set it up and took time to show me how to use it. Easiest online purchase ever. Although I ordered through whatsapp.",
    author: "Mr Dayo",
    location: "Akure, Ondo",
  },
  {
    quote:
      '"I love the TREADMILL MACHINE. I bought it last month. They delivered it right to my ofce, and even set it up and took time to show me how to use it. Easiest online purchase ever. Although I ordered through whatsapp."',
    author: "Aladi U.S",
    location: "Abuja",
  },
];

const footer = {
  usefulLinks: [
    { text: "Home", link: "#hero" },
    { text: "Shop", link: "#shop" },
    { text: "About Us", link: "#about" }, // Adjust if needed
    { text: "Contact Us", link: "#contact" }, // Adjust if needed
  ],
  legalLinks: [
    { text: "Terms Of Service", link: "#terms" }, // Placeholder links
    { text: "Privacy Policy", link: "#privacy" },
    { text: "Disclaimer", link: "#disclaimer" },
  ],
  facebookDisclaimer:
    "This site is not a part of the Facebook™ website or Facebook™ Inc. Additionally, this site is NOT endorsed by Facebook™ in any way. FACEBOOK™ is a trademark of FACEBOOK™, Inc.",
  copyright: "Copyright © 2025 Chrisport Venture",
  designer: "DESIGNED BY: Roca delta Consulting",
};

const siteData = {
  brandName: "Chrisport Venture",
  guarantee: "100% SATISFACTION GUARANTEED",
  customerCount: 2802,
  contactInfo,
  navigation,
  heroSection,
  videoSection,
  benefits,
  products,
  deliveryInfo,
  testimonials,
  footer,
};

export default siteData;
