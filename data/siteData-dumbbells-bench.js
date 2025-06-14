import {
  contactInfo,
  deliveryInfo,
  footer,
  navigation,
} from "../constants/siteData";

const heroSection = {
  title: "DUMBBELLS /BARBELL And BENCH WORKOUT",
  subtitle: "TARGET YOUR MUSCLE",
  description1: "Dumbbell improves grip strength.",
  description2:
    "Build Confidence BEST fitness equipment anyone can have at home!",
  tagline: "est Option For muscle building.",
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
  "1. Increased muscle strength and mass",
  "2. Improved muscle tone and definition",
  "3. Enhanced bone density",
  "4. Better muscle balance and coordination",
  "5. Versatility in exercises and workouts",
  "6. Progressive overload for continued progress",
];

const products = [
  {
    id: "20KG_Adjustable_Dumbbell",
    name: "20KG Adjustable Dumbbell and Barbell Connector",
    features: ["Adjustable plate and bar"],
    maxWeight: "20KG",
    price: 90000,
    oldPrice: 120000,
    imageUrl:
      "https://zxzyub6zq2.ufs.sh/f/OX5ramIp6AH4IbATC8JaYK7so4ZDkJtpmr2qcdwAMixUOz5S",
    videoUrl:
      "https://zxzyub6zq2.ufs.sh/f/OX5ramIp6AH4rxPSkpZT4EMzQo3qUw7V6Ii5Sb8RXDKhWOg2",
  },
  {
    id: "25KG_Adjustable_Dumbbell",
    name: "25KG Adjustable Dumbbell With Kettlebell and Barbell Connector",
    features: ["Adjustable plate and bar"],
    maxWeight: "25KG",
    price: 110000,
    oldPrice: 140000,
    imageUrl:
      "https://zxzyub6zq2.ufs.sh/f/OX5ramIp6AH4Z4vpzqHMECeXkWK9P6IRtmgLFlB5v2u7JAbi",
    videoUrl:
      "https://zxzyub6zq2.ufs.sh/f/OX5ramIp6AH4YPO1Q0R7pjsfC6oQDNzYrxLmUHTlPghA7i2K",
  },
  {
    id: "30KG_Adjustable_Dumbbell",
    name: "30KG Adjustable Dumbbell and Barbell Connector",
    features: ["Adjustable plate and bar"],
    maxWeight: "30KG",
    price: 120000,
    oldPrice: 150000,
    imageUrl:
      "https://zxzyub6zq2.ufs.sh/f/OX5ramIp6AH4hiSEPaweOs26DK3oFTMWqbAkcmnChy1jU7P4",
    videoUrl:
      "https://zxzyub6zq2.ufs.sh/f/OX5ramIp6AH4rxPSkpZT4EMzQo3qUw7V6Ii5Sb8RXDKhWOg2",
  },
  {
    id: "50KG_Adjustable_Dumbbell",
    name: "50KG Adjustable Barbell with Dumbbell Set",
    features: ["Adjustable plate and bar"],
    maxWeight: "50KG",
    price: 205000,
    oldPrice: 250000,
    imageUrl:
      "https://zxzyub6zq2.ufs.sh/f/OX5ramIp6AH4vkO16PQtsXd5cR1PLGnNhFEU26oQiIlayVf9",
    videoUrl:
      "https://zxzyub6zq2.ufs.sh/f/OX5ramIp6AH4tqKbNKVLA31Kmw5T8FgnS0fB7rvelzqZd9EV",
  },
  {
    id: "55KG_Adjustable_Dumbbell",
    name: "55KG Adjustable Barbell with Dumbbell Set And EZ Bar",
    features: ["Adjustable plate and bar"],
    maxWeight: "55KG",
    price: 220000,
    oldPrice: 260000,
    imageUrl:
      "https://zxzyub6zq2.ufs.sh/f/OX5ramIp6AH4TnXizoUH5eZIum130dpqWAMLJrjb27osEtvc",
    videoUrl:
      "https://zxzyub6zq2.ufs.sh/f/OX5ramIp6AH49ikp8q23bDNtPceuFZH8yXpwf0dE2RrzW5A4",
  },
  {
    id: "Foldable_Bench",
    name: "Foldable Portable Weight bench",
    features: ["Foldable and space saving  without load"],
    maxWeight: "150KG",
    price: 170000,
    oldPrice: 220000,
    imageUrl:
      "https://zxzyub6zq2.ufs.sh/f/OX5ramIp6AH4bLC5RXEBC20fSs5cRoLFev8TMmYlNgQIjaOU",
    videoUrl:
      "xhttps://zxzyub6zq2.ufs.sh/f/OX5ramIp6AH49tOMHK23bDNtPceuFZH8yXpwf0dE2RrzW5A4yz",
  },
  {
    id: "Lat_pull_Bench",
    name: "Adjustable Weight Bench with Lat Pulldown",
    features: ["Multiple Workout Bench without load"],
    maxWeight: "200KG",
    price: 280000,
    oldPrice: 350000,
    imageUrl:
      "https://zxzyub6zq2.ufs.sh/f/OX5ramIp6AH4qMcWYotkZgWV0ucH5X9nJ8jmoYDyCiRl3q4p",
    videoUrl:
      "https://zxzyub6zq2.ufs.sh/f/OX5ramIp6AH4aXTZZdvc0TukGbfi6et8DsN42v5HqVwCOMpj",
  },
  {
    id: "Adjustable_Bench",
    name: "Adjustable Weight bench with chest expansion",
    features: ["Adjustable bench with chest expansion  without load"],
    maxWeight: "150KG",
    price: 2300000,
    oldPrice: 280000,
    imageUrl:
      "https://zxzyub6zq2.ufs.sh/f/OX5ramIp6AH49GgFRX23bDNtPceuFZH8yXpwf0dE2RrzW5A4",
    videoUrl:
      "https://zxzyub6zq2.ufs.sh/f/OX5ramIp6AH4OGTpPxIp6AH4m8g2W7DMkbYQirLUe9qXvSfc",
  },
  {
    id: "Olympic_Bench",
    name: "Adjustable Olympic weight bench",
    features: ["Adjustable Olympic bench without load"],
    maxWeight: "250KG",
    price: 385000,
    oldPrice: 480000,
    imageUrl:
      "https://zxzyub6zq2.ufs.sh/f/OX5ramIp6AH4gmAi8yYBSPKmriXRwY5xo4tNbk3E0HzJD89y",
    videoUrl:
      "https://zxzyub6zq2.ufs.sh/f/OX5ramIp6AH4PO0dphQH20JK4IkFHUXgB65ns7fDWqcidMAV",
  },
  {
    id: "One_Station_gym",
    name: "Complete Station Gym with Extra Features",
    features: [
      "1. *Full-Body Workout*: Allows for a comprehensive workout, targeting multiple muscle groups.",
      "2. *Versatility*: Adjustable handles enable users to customize exercises and target specific muscles.",
      "3. *Space-Efficient*: Combines multiple functions in one unit, making it ideal for home or gym use.",
      "4. *Adjustability*: Accommodates users of different heights and fitness levels.",
      "5. *Convenience*: Provides a range of exercises in one piece of equipment, saving time and effort.",
    ],
    maxWeight: "150KG",
    price: 850000,
    oldPrice: 980000,
    imageUrl:
      "https://zxzyub6zq2.ufs.sh/f/OX5ramIp6AH4ORauTuIp6AH4m8g2W7DMkbYQirLUe9qXvSfc",
    videoUrl:
      "https://45wg8knj47.ufs.sh/f/wphKuQ5a7nZ82xEAIkw5YHNcqW4URm7nkhDI6gA8T0LC1xPV",
  },
  {
    id: "Music_Box",
    name: "Music Boxing Target",
    features: [
      "1. Combines music and boxing for a fun, engaging workout experience",
      "2. Improves hand-eye coordination, reflexes, and overall physical fitness",
      "3. Durable construction for long-lasting performance",
      "4. Adjustable difficulty settings for progressive challenge",
      "5. Portable and space-saving design for convenience",
    ],
    maxWeight: "",
    price: 85000,
    oldPrice: 99000,
    imageUrl:
      "https://zxzyub6zq2.ufs.sh/f/OX5ramIp6AH4TArkClUH5eZIum130dpqWAMLJrjb27osEtvc",
    videoUrl:
      "https://zxzyub6zq2.ufs.sh/f/OX5ramIp6AH4C8uUsuhJN83S9wzcuWFAvKrQX560PxkRnVUG",
  },
  {
    id: "Adjustable_Bench",
    name: "Semi Commercial Adjustable Incline Bench",
    features: [
      "1. Targets upper, middle, and lower chest muscles.",
      "2. Improves posture and stability.",
      "3. Enhances overall strength and endurance.",
      "4. Versatile: Supports various exercises (incline bench press, incline dumbbell press).",
      "5. Durable: Withstands heavy use in commercial settings.",
    ],
    maxWeight: "",
    price: 220000,
    oldPrice: 350000,
    imageUrl:
      "https://zxzyub6zq2.ufs.sh/f/OX5ramIp6AH4brUXDsEBC20fSs5cRoLFev8TMmYlNgQIjaOU",
    videoUrl:
      "https://zxzyub6zq2.ufs.sh/f/OX5ramIp6AH4hf3BjQhweOs26DK3oFTMWqbAkcmnChy1jU7P",
  },
];

const testimonials = [
  {
    quote: "The box make it very easy for me to carry.",
    author: "Capt. Isreal",
    location: "Warri, Delta",
  },
  {
    quote: "This Dumbbell Set is more than what i expected...",
    author: "Joshua Enendu",
    location: "Abuja",
  },
  {
    quote: "Very lovely customer service...",
    author: "Mrs Bunmi",
    location: "Ajao est. Lagos",
  },
  {
    quote: "I love the Bench...",
    author: "Mr Dayo",
    location: "Akure, Ondo",
  },
  {
    quote: "I love the dumbbell and Bench..",
    author: "Aladi U.S",
    location: "Abuja",
  },
  {
    quote:
      "A very honest seller. Very dependable and trustworthy. Sent my exercise bike and threadmill to me in Ado Ekiti within hours. Products were of good quality and as described. Please buy from him with peace of mind.",
    author: "Solomon Oke",
    location: "Ondo State",
  },
  {
    quote:
      "This Mr. Chris is a very humble, amiable and gentle man who has business acumen & ethics to satisfy his buyers. God bless you for being truthful and remember to inform me when the remaining orders are available, please. Thank you Sir CHRISPORT",
    author: "Chief Gerald",
    location: "Anambra",
  },
  {
    quote:
      "Nice, prompt and satisfying. He is one of the few dedicated and trustworthy people in this world. Thank you for your service.",
    author: "SG LIGHTING AND ELECTRICAL",
    location: "Benin",
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
