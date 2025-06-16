import {
  contactInfo,
  deliveryInfo,
  footer,
  navigation,
} from "../constants/siteData";

const heroSection = {
  title: "2 IN 1 TREADMILL",
  subtitle: "PLATFORM TREADMILL",
  description1: "Treadmill is a GREAT piece of equipment.",
  description2:
    "With so many benefits both Health & Fitness wise, Treadmills have proven to be the BEST fitness equipment anyone can have at home!",
  tagline: "Best Option For Both Running and Walking.",
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
  "1. *Cardiovascular Fitness*: Improves heart health and increases cardiovascular endurance.",
  "2. *Weight Loss*: Effective for burning calories and aiding in weight management.",
  "3. *Convenience*: Allows for indoor workouts, regardless of weather conditions.",
  "4. *Customizable*: Offers adjustable speed and incline settings for tailored workouts.",
  "5. *Low-Impact*: Can be easier on joints compared to outdoor running or other high-impact activities.",
];

const products = [
  {
    id: "PLATFORM_TREADMILL",
    name: "2in1  Office / Under desk Treadmill",
    features: [
      'Detachable Handle ..Operating voltage 220V"240V 50/60HZ',
      "📌 Outline dimensions 1240*560*1030M",
      "📌 Running Area 970*385 MM",
      "📌 Peak Motor power 1.5HP",
      "📌 Output power 0.75CHP",
      "📌 Speed 1.0-10.0KM/H",
      "📌 Function walking/Running",
      "📌 Space saving",
      "📌 With detachable Handle",
      "📌 Low maintenance and cost friendly",
    ],
    maxWeight: "120KG",
    price: 380000,
    oldPrice: 490000,
    imageUrl:
      "https://zxzyub6zq2.ufs.sh/f/OX5ramIp6AH4sBQFb4Xm6MBa3jZXG4nHqh18UtWzsyQNgFlx",
    videoUrl:
      "https://zxzyub6zq2.ufs.sh/f/OX5ramIp6AH4C88tNr4hJN83S9wzcuWFAvKrQX560PxkRnVU",
  },
  {
    id: "WALK_PAD",
    name: "Under Desk Treadmill",
    features: [
      'Detachable Handle ..Operating voltage 220V"240V 50/60HZ',
      "📌 Outline dimensions 1240*560*1030M",
      "📌 Running Area 970*385 MM",
      "📌 Peak Motor power 1.5HP",
      "📌 Output power 0.75CHP",
      "📌 Speed 1.0-10.0KM/H",
      "📌 Function walking/Running",
      "📌 Space saving",
      "📌 With detachable Handle",
      "📌 Low maintenance and cost friendly",
    ],
    maxWeight: "120KG",
    price: 380000,
    oldPrice: 490000,
    imageUrl:
      "https://zxzyub6zq2.ufs.sh/f/OX5ramIp6AH4XxzkNR0BDovxLk8UKmFI4jheybCa3VM0ciEN",
    videoUrl:
      "https://zxzyub6zq2.ufs.sh/f/OX5ramIp6AH4dNXNV6OHUv5eXgEZitIJ3SYWpsBzbuhoD92A",
  },
  {
    id: "OFFICE_TREADMILL",
    name: "2in1 Treadmill",
    features: [
      'Detachable Handle ..Operating voltage 220V"240V 50/60HZ',
      "📌 Outline dimensions 1240*560*1030M",
      "📌 Running Area 970*385 MM",
      "📌 Peak Motor power 1.5HP",
      "📌 Output power 0.75CHP",
      "📌 Speed 1.0-10.0KM/H",
      "📌 Function walking/Running",
      "📌 Space saving",
      "📌 With detachable Handle",
      "📌 Low maintenance and cost friendly",
    ],
    maxWeight: "120KG",
    price: 380000,
    oldPrice: 490000,
    imageUrl:
      "https://zxzyub6zq2.ufs.sh/f/OX5ramIp6AH4wQ13n38EFR31lST9mCHQ85xkfocgyu2LO6za",
    videoUrl: "https://",
  },
  {
    id: "Space_saving_Treadmill",
    name: "Flat Treadmill",
    features: [
      'Detachable Handle ..Operating voltage 220V"240V 50/60HZ',
      "📌 Outline dimensions 1240*560*1030M",
      "📌 Running Area 970*385 MM",
      "📌 Peak Motor power 1.5HP",
      "📌 Output power 0.75CHP",
      "📌 Speed 1.0-10.0KM/H",
      "📌 Function walking/Running",
      "📌 Space saving",
      "📌 With detachable Handle",
      "📌 Low maintenance and cost friendly",
    ],
    maxWeight: "120KG",
    price: 380000,
    oldPrice: 490000,
    imageUrl:
      "https://zxzyub6zq2.ufs.sh/f/OX5ramIp6AH4LhwOaT3AW0K3UH52DAlmi4PveOr98tZkIYhy",
    videoUrl: "https://",
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
    quote: "I love the TREADMILL MACHINE...",
    author: "Mr Dayo",
    location: "Akure, Ondo",
  },
  {
    quote: "I love the TREADMILL MACHINE...",
    author: "Aladi U.S",
    location: "Abuja",
  },
  {
    quote:
      "A very honest seller. Very dependable and trustworthy. Sent my exercise bike and threadmill to me in Ado Ekiti within hours. Products were of good quality and as described. Please buy from him with peace of mind",
    author: "Solomon oke",
    location: "Ondo state",
  },
  {
    quote:
      "This Mr. Chris is a very humble, amiable and gentle man who has business acumen & ethics to satisfy his buyers. God bless you for being truthful and remember to inform me when the remaining orders are available, please. Thank you Sir CHRISPORT.",
    author: "Madam Tracey",
    location: "Anambra",
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
