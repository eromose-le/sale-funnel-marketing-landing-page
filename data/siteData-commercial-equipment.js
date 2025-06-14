import {
  contactInfo,
  deliveryInfo,
  footer,
  navigation,
} from "../constants/siteData";

const heroSection = {
  title: "COMMERCIAL GYM EQUIPMENTS",
  subtitle: "EVERLASTING EQUIPMENT",
  description1: "Motivational environment.",
  description2:
    "With so many benefits both Health & Fitness wise, Commercial Equipments are designed for long term durability!",
  tagline: "Be in control.",
};

const videoSection = {
  title: "WATCH VIDEO DEMONSTATION!",
  videoUrl:
    "https://utfs.io/a/zxzyub6zq2/OX5ramIp6AH47gIhJV3tqloZKxjcWNCdIY0FaAgi8G1mwQkJ",
  duration: "0:43",
  description:
    "We have all heard it many times - regular exercise is good for you...",
};

const benefits = [
  "*Commercial gym equipment offers several benefits:*",
  "",
  "",
  "1. *Durability*: Built to withstand heavy use, commercial equipment is designed for long-term reliability.",
  "2. *Versatility*: Wide range of machines and equipment cater to various fitness goals and levels.",
  "3. *Advanced Features*: Many commercial machines include features like weight stacks, adjustable resistance, and tracking systems.",
  "4. *Safety*: Designed with safety in mind, commercial equipment often includes features like stabilizers and safety locks.",
  "5. *Professional Guidance*: Commercial gyms often employ certified trainers who can provide guidance on equipment use.",
  "6. *Variety of Exercises*: Commercial equipment allows for a wide range of exercises, targeting different muscle groups.",
  "7. *Motivational Environment*: Commercial gyms often foster a motivating atmosphere, helping individuals stay consistent with their fitness goals.",
  "",
  "",
  "*Some popular types of commercial gym equipment include:*",
  "1. Treadmills",
  "2. Elliptical trainers",
  "3. Stationary bikes",
  "4. Weight machines (e.g., leg press, chest press)",
  "5. Free weights (e.g., dumbbells, barbells)",
  "",
  "",
  "These benefits can help individuals achieve their fitness goals effectively and safely.",
];

const products = [
  {
    id: "Angled_Leg_Press",
    name: "Angled Leg Press",
    features: [
      "Adjustable Seat",
      "Angled Platform",
      "Weight Loading",
      "Footplate",
      "Leg Strength Reduced Lower Back Strain",
      "Customizable Resistance",
    ],
    maxWeight: "2000KG",
    price: 2850000,
    oldPrice: 3600000,
    imageUrl:
      "https://zxzyub6zq2.ufs.sh/f/OX5ramIp6AH4y97eubgTGjM4ZSqbAX1zcUHJEtdOnBeg93rv",
    videoUrl:
      "https://zxzyub6zq2.ufs.sh/f/OX5ramIp6AH40BeY0ulqR7ZfPz9yMBOVeaTEYokb6gU0v8jl",
  },
  {
    id: "Hack_Squat",
    name: "Hack Squat Machine",
    features: [
      "1. *Leg Strength*: Targets quadriceps, hamstrings, and glutes.",
      "2. *Reduced Lower Back Strain*: The machine's design can help minimize stress on the lower back.",
      "3. *Controlled Movement*: The fixed path helps maintain proper form and reduces the risk of injury.",
      "The Hack Squat Machine is a useful tool for building leg strength and can be particularly beneficial for those who struggle with free-weight squats.",
    ],
    maxWeight: "2000KG",
    price: 2600000,
    oldPrice: 3300000,
    imageUrl:
      "https://zxzyub6zq2.ufs.sh/f/OX5ramIp6AH4pvqIebcE9oKtWiafPC6Rr13MzmZp2l8YdO5N",
    videoUrl:
      "https://zxzyub6zq2.ufs.sh/f/OX5ramIp6AH4ir7fHE4fZgyPvAF8U1NpjtEXVWoK9Radb4nS",
  },
  {
    id: "Leg_extension",
    name: "Leg Extension",
    features: [
      "1. *Quadriceps Development*: Effectively targets the front thigh muscles.",
      "2. *Isolation*: Focuses on the quadriceps with minimal involvement of other muscle groups.",
      "3. *Adjustable Resistance*: Allows users to tailor the weight to their fitness level.",
    ],
    maxWeight: "2000KG",
    price: 2200000,
    oldPrice: 2800000,
    imageUrl:
      "https://zxzyub6zq2.ufs.sh/f/OX5ramIp6AH4d5tEp146OHUv5eXgEZitIJ3SYWpsBzbuhoD9",
    videoUrl:
      "https://zxzyub6zq2.ufs.sh/f/OX5ramIp6AH4OwK24KIp6AH4m8g2W7DMkbYQirLUe9qXvSfc",
  },
  {
    id: "Pulldown_Machine",
    name: "Lat pulldown",
    features: [
      "1. *Lat Development*: Effectively targets the latissimus dorsi muscles.",
      "2. *Controlled Movement*: The machine helps maintain proper form and reduces the risk of injury.",
      "3. *Adjustable Resistance*: Allows users to tailor the weight to their fitness level.",
      "The pulldown machine is a popular choice for building upper body strength, particularly in the back",
    ],
    maxWeight: "2000KG",
    price: 2400000,
    oldPrice: 2900000,
    imageUrl:
      "https://zxzyub6zq2.ufs.sh/f/OX5ramIp6AH4CmMPTYhJN83S9wzcuWFAvKrQX560PxkRnVUG",
    videoUrl:
      "https://zxzyub6zq2.ufs.sh/f/OX5ramIp6AH4LSCIgnAW0K3UH52DAlmi4PveOr98tZkIYhyL",
  },
  {
    id: "5HP_Smart_commercial",
    name: "5HP Commercial Smart Treadmill with massager with WiFi",
    features: [
      "Wi-Fi,",
      "Internet 🛜",
      "Auto-Incline",
      "MP3",
      "Bluetooth",
      "USB",
      "Player",
      "Sit Up Bar",
      "Dumbbells (Pair)",
      "Massager",
      "Self Foldable",
      "Shortcut Buttons",
      "15.6inch touchscreen",
      "1-20km/h speed",
      "0-16% Auto Incline",
      "lubrication oil",
    ],
    maxWeight: "180KG",
    price: 2200000,
    oldPrice: 2700000,
    imageUrl:
      "https://zxzyub6zq2.ufs.sh/f/OX5ramIp6AH4sIE9MDXm6MBa3jZXG4nHqh18UtWzsyQNgFlx",
    videoUrl:
      "https://zxzyub6zq2.ufs.sh/f/OX5ramIp6AH4OqlLj5Ip6AH4m8g2W7DMkbYQirLUe9qXvSfc",
  },
  {
    id: "7HP HEAVY_DUTY_LUXURY",
    name: "7HP Pure Heavy Duty Commercial Treadmill with WiFi",
    features: [
      "WiFi",
      "Wireless Smart Charging",
      "Netflix",
      "YouTube",
      "Internet",
      "18.5inch touch screen",
      "Product size:2200*830*1650mm",
      "220V AC",
      "7hp motor",
      "Speed range:1-24km/h",
      "Incline range:0-20%",
      "Max user weight:200KG",
      "Running area:1550*560mm",
    ],
    maxWeight: "250KG",
    price: 3900000,
    oldPrice: 4500000,
    imageUrl:
      "https://zxzyub6zq2.ufs.sh/f/OX5ramIp6AH4ubdMYS5D9UC2Vw3MWhLQiJr8cfqRsNlSuTXZ",
    videoUrl:
      "https://zxzyub6zq2.ufs.sh/f/OX5ramIp6AH45hNP4Hnidecn2otpgSqMaEUAQRYvXkI068lB",
  },
  {
    id: "Pure_commercial_manual_treadmill",
    name: "Commercial manual treadmill ",
    features: ["No electricity is required to use, best for public use"],
    maxWeight: "250KG",
    price: 2900000,
    oldPrice: 3400000,
    imageUrl:
      "https://zxzyub6zq2.ufs.sh/f/OX5ramIp6AH4PcwBksH20JK4IkFHUXgB65ns7fDWqcidMAVY",
    videoUrl:
      "https://zxzyub6zq2.ufs.sh/f/OX5ramIp6AH4Zg744GMECeXkWK9P6IRtmgLFlB5v2u7JAbis",
  },
  {
    id: "Commercial_Stair_Climber",
    name: "Staircase Machine",
    features: [
      "1. *Cardiovascular Fitness*: Provides an effective cardiovascular workout.",
      "2. *Leg Strength*: Targets the legs, glutes, and calves.",
      "3. *Low-Impact*: Can be easier on the joints compared to high-impact activities like running.",
      "4. *Calorie Burn*: Effective for burning calories and aiding in weight management.",
      "The stair climber machine is a great way to improve cardiovascular fitness and build leg strength. Would you like tips on using it effectively?",
    ],
    maxWeight: "250KG",
    price: 2900000,
    oldPrice: 3500000,
    imageUrl:
      "https://zxzyub6zq2.ufs.sh/f/OX5ramIp6AH4N5mcYcL6LnOQMbHG78Ukh1gWeD0l9jpf4uxT",
    videoUrl:
      "https://zxzyub6zq2.ufs.sh/f/OX5ramIp6AH4Zg744GMECeXkWK9P6IRtmgLFlB5v2u7JAbis",
  },
  {
    id: "Elliptical_Cross_Trainer",
    name: "Commercial Elliptical Cross Trainer Bike",
    features: [
      "1. *Elliptical Motion*: Users move their legs in an elliptical path, mimicking natural movement.",
      "2. *Adjustable Resistance*: Allows users to customize the intensity of their workout.",
      "3. *Pre-Set Programs*: Many machines offer various workout programs for variety and challenge.",
      "4. *Stride Length Adjustment*: Some machines allow users to adjust the stride length to fit their comfort and fitness level.",
      "5. *Low-Impact*: Reduces stress on joints compared to high-impact activities like running.",
    ],
    maxWeight: "250KG",
    price: 2600000,
    oldPrice: 3100000,
    imageUrl:
      "https://zxzyub6zq2.ufs.sh/f/OX5ramIp6AH4TWivHMUH5eZIum130dpqWAMLJrjb27osEtvc",
    videoUrl:
      "https://zxzyub6zq2.ufs.sh/f/OX5ramIp6AH4MltNo2i2dZWcjTMnIgu8v6BA3t4GExf0olPV",
  },
  {
    id: "Adjustable_Bench",
    name: "Commercial Adjustable incline bench",
    features: [
      "1. *Adjustable Incline*: Allows users to change the angle of the bench to target different muscle groups.",
      "2. *Durable Construction*: Built to withstand heavy use and weights.",
      "3. *Comfortable Padding*: Provides support and comfort for users during exercises.",
      "4. *Multiple Positions*: Can be adjusted to various incline levels, including flat, incline, and decline positions.",
    ],
    maxWeight: "250KG",
    price: 650000,
    oldPrice: 800000,
    imageUrl:
      "https://zxzyub6zq2.ufs.sh/f/OX5ramIp6AH4qwydvdtkZgWV0ucH5X9nJ8jmoYDyCiRl3q4p",
    videoUrl:
      "https://zxzyub6zq2.ufs.sh/f/OX5ramIp6AH43USsoyPNlJRCKEIUdmB2WviFtjpV8bqh65ke",
  },
  {
    id: "8FT_Commercial_Marble_And_Coin_Snooker",
    name: "8FT Commercial Marble And Coin Operated Pool Table",
    features: [
      "1. High-quality, commercial-grade construction for durability and longevity",
      "2. Marble play surface for smooth, consistent play",
      "3. Convenient, automated payment with coin-operated mechanism",
      "4. Professional-style features for tournament-level play",
      "5. Durable and low-maintenance design for minimal upkeep",
    ],
    maxWeight: "",
    price: 2800000,
    oldPrice: 3500000,
    imageUrl:
      "https://zxzyub6zq2.ufs.sh/f/OX5ramIp6AH4d1MLc06OHUv5eXgEZitIJ3SYWpsBzbuhoD92",
    videoUrl:
      "https://zxzyub6zq2.ufs.sh/f/OX5ramIp6AH4LdyRJdAW0K3UH52DAlmi4PveOr98tZkIYhyL",
  },
  {
    id: "9FT_Commercial_Billiard_Table",
    name: "9FT Commercial Billiard Marble Pool Table",
    features: [
      "*A 9ft billiard table, also known as a professional-size table, typically features:*",
      "*Table Size and Material*:",
      "- *Slate Surface*: 1-inch thick slate for a smooth, even playing surface",
      "- *Solid Hardwood Construction*: durable and long-lasting",
      "*Design and Style*:",
      "- *Classic and Modern Designs*: various styles to suit different tastes and décors",
      "- *Color Options*: available in different finishes, such as black, brown, white, walnut, and cherry",
      "*Table Components*:",
      "- *K-66 Gum Rubber Rail Cushions*: for consistent ball bounce and roll",
      "- *TPR Material Pockets*: durable and resistant to wear and tear",
      "- *Height-Adjustable Leg Levelers*: for ensuring the table is level and stable",
      "*Additional Features*:",
      "- *Slate Leveling System*: for precise slate alignment",
      "- *Leg Leveling System*: for adjusting the table's legs to ensure stability",
    ],
    maxWeight: "",
    price: 3700000,
    oldPrice: 4500000,
    imageUrl:
      "https://zxzyub6zq2.ufs.sh/f/OX5ramIp6AH41TqSVnRr3Jk0lSZst6w1xVGTq5udHYnmR7Fg",
    videoUrl:
      "https://zxzyub6zq2.ufs.sh/f/OX5ramIp6AH4iX32YF4fZgyPvAF8U1NpjtEXVWoK9Radb4nS",
  },
  {
    id: "Commercial_Flat_Bench",
    name: "Commercial Flat Bench",
    features: [
      "Heavy Duty commercial weight bench. bearing over 1000KG Weight Load.",
    ],
    maxWeight: "1000KG",
    price: 650000,
    oldPrice: 750000,
    imageUrl:
      "https://zxzyub6zq2.ufs.sh/f/OX5ramIp6AH49ZKUmPV23bDNtPceuFZH8yXpwf0dE2RrzW5A",
    videoUrl:
      "https://zxzyub6zq2.ufs.sh/f/OX5ramIp6AH4hffIXkWweOs26DK3oFTMWqbAkcmnChy1jU7P",
  },
  {
    id: "Hip_Abduction",
    name: "Commercial Hip Abduction",
    features: [
      "📌 Targets gluteus medius, gluteus minimus, and tensor fasciae latae muscles",
      "📌 Improves hip stability, strength, and flexibility",
      "📌 Helps prevent hip injuries, such as strains and tears",
      "📌 Aids in rehabilitation after hip surgery or injury",
      "📌 Enhances power, speed, and agility in sports",
      "📌 Beneficial for athletes in sports that involve running, jumping, and quick changes of direction",
      "📌 Easy on the joints, making it suitable for users with joint issues",
      "📌 Can be used for both strength training and rehabilitation",
    ],
    maxWeight: "1000KG",
    price: 2900000,
    oldPrice: 3600000,
    imageUrl:
      "https://zxzyub6zq2.ufs.sh/f/OX5ramIp6AH4NpNOoBL6LnOQMbHG78Ukh1gWeD0l9jpf4uxT",
    videoUrl:
      "https://zxzyub6zq2.ufs.sh/f/OX5ramIp6AH4cv9YTdXSxTIWiD7kKrF1JOZl5M68sY4BEaqg",
  },
];

const testimonials = [
  {
    quote:
      "The fact that this treadmill has virtually all the exercise functions in 1 is stunning...",
    author: "Capt. Isreal",
    location: "Warri, Delta",
  },
  {
    quote: "This treadmill is more than what i expected...",
    author: "Joshua Enendu",
    location: "Abuja",
  },
  {
    quote: "Very lovely customer service...",
    author: "Mrs Bunmi",
    location: "Ajao est. Lagos",
  },
  {
    quote: "I love the Leg Press machine.",
    author: "Mr Dayo",
    location: "Akure, Ondo",
  },
  {
    quote: "I love the hack Squat Machine.",
    author: "Aladi U.S",
    location: "Abuja",
  },
  {
    quote:
      "A very honest seller. Very dependable and trustworthy. Sent my exercise bike and threadmill to me in Ado Ekiti within hours. Products were of good quality and as described. Please buy from him with peace of mind",
    author: "Bar Fitness",
    location: "Kano",
  },
  {
    quote:
      "This Mr. Chris is a very humble, amiable and gentle man who has business acumen & ethics to satisfy his buyers. God bless you for being truthful and remember to inform me when the remaining orders are available, please. Thank you Sir CHRISPORT.",
    author: "Blaze Gym",
    location: "Lekki",
  },
  {
    quote:
      "Nice, prompt and satisfying. He is one of the few dedicated and trustworthy people in this world. Thank you for your service.",
    author: "SG LIGHTING AND ELECTRICAL",
    location: "Benin",
  },
  {
    quote:
      "Oh wow.. I am wowed and beyond words.. The truth is.. I have a problem with my left leg.. Polio.. I got this product because I needed to strengthen both legs... I wasn't sure if the product was going to be strong enough to carry my weight since I rely on my upper body to lift my lower body.. I am so glad you encouraged me to go for the one with handle and even gave it to me at a really fair deal.. I used it just now and I am almost in tears as it's really sturdy, strong and of very good quality.. I don't know you sir.. But God knows who you are and God will reward you like you truly deserve.. Thank you for allowing me to pay on delivery.. Thank you for trusting me enough to even make payment and thank you for bringing quality to my doorstep.. God bless you and all you hold dear sir.",
    author: "Mrs Oluwabumi",
    location: "Ekiti",
  },
];

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
