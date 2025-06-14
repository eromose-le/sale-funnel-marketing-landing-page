import {
  contactInfo,
  deliveryInfo,
  footer,
  navigation,
} from "../constants/siteData";

const heroSection = {
  title: "SPINNING EXERCISE BIKE",
  subtitle: "THE BEST GYM ALTERNATIVE",
  description1: "Exercise bike is a GREAT piece of equipment.",
  description2:
    "With so many benefits both Health & Fitness wise, Fitness bikes are an effective way to improve overall way to improve overall fitness and health.. 3: Spinning bike  have proven to be the BEST fitness equipment anyone can have at home!",
  tagline: "Best Option For cardiovascular workout.",
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
  "WEIGHT LOSS",
  "You Are In Control",
  "Reduced Impact",
  "Mental Health And Motivation",
  "Heart Health",
  "HAVE THE ABILITY TO RUN, NO MATTER THE WEATHER",
  "Exercise Bikes Are Convenient, Safe, And Private",
  "ALLEVIATE BOREDOM",
  "",
  "",
  "1. *Cardiovascular fitness*: Improves heart health and increases cardiovascular endurance.",
  "2. *Weight management*: Burns calories, helping with weight loss and maintenance.",
  "3. *Low-impact exercise*: Easy on joints, suitable for people with mobility issues or injuries.",
  "4. *Improved muscle strength*: Works legs, glutes, and cardiovascular system.",
  "5. *Increased flexibility*: Can help improve joint mobility.",
  "6. *Convenience*: Can be used at home or gym, regardless of weather.",
  "7. *Customizable workouts*: Adjust resistance and intensity to suit fitness levels.",
  "8. *Stress relief*: Regular exercise can reduce stress and anxiety.",
];

const products = [
  {
    id: "Standard_Spinning_Bike",
    name: "Standard Cardio Spinning bike",
    features: [
      "Free Gift 🎁",
      "Free Water bottle",
      "Pulse monitor",
      "Bottle water holder",
      "Speedometer for workout tracking",
      "Phone/iPad holder",
      "Adjustable resistance",
      "Adjustable sit and handle",
      "Moveable tires",
      "e.t.c",
    ],
    maxWeight: "150KG",
    price: 295000,
    oldPrice: 370000,
    imageUrl:
      "https://45wg8knj47.ufs.sh/f/wphKuQ5a7nZ8shbzgFmjA7obd0ZwnsRBvGu3kDSCEmfphgQa",
    videoUrl:
      "https://45wg8knj47.ufs.sh/f/wphKuQ5a7nZ8ycZswaWUpkDOoFIWiLRz1q8M3QKJ4fxtE0b2",
  },
  {
    id: "Bluetooth_Box_Spinning_bike",
    name: "Standard Spinning Bike with free Bluetooth music box",
    features: [
      "Free Gift 🎁",
      "Free Bluetooth music Box",
      "Pulse monitor",
      "Bottle water holder",
      "Speedometer for workout tracking",
      "Phone/iPad holder",
      "Adjustable resistance",
      "Adjustable sit and handle",
      "Iron pedal Leg",
      "Moveable tires",
      "e.t.c",
    ],
    maxWeight: "150KG",
    price: 310000,
    oldPrice: 380000,
    imageUrl:
      "https://45wg8knj47.ufs.sh/f/wphKuQ5a7nZ8cyoIKdgVvMRfg8n0G7tFxiLIXPayKz1DkBqO",
    videoUrl:
      "https://45wg8knj47.ufs.sh/f/wphKuQ5a7nZ89K0e87vkpQbiJDgomVO1RstZF6wK0yhcfaXq",
  },
  {
    id: "Commercial_Spinning_bike",
    name: "Commercial Spinning Exercise Bike ",
    features: [
      "Free Gift 🎁",
      "Pulse monitor",
      "Speedometer for workout tracking",
      "Phone/iPad holder",
      "Adjustable resistance",
      "Adjustable sit and handle",
      "Iron pedal Leg",
      "Double Hand placement",
      "e.t.c",
    ],
    maxWeight: "180KG",
    price: 390000,
    oldPrice: 470000,
    imageUrl:
      "https://45wg8knj47.ufs.sh/f/wphKuQ5a7nZ8f3fkvTtlPsxGtujDOkU6RhQ0BvFaJIw32qbL",
    videoUrl:
      "https://45wg8knj47.ufs.sh/f/wphKuQ5a7nZ8xWooBrNtLH0jGwxKviD4bEl7By9kAeXsSFgf",
  },
  {
    id: "Big_Spinning_Bike",
    name: "California Fitness commercial spinning bike",
    features: [
      "Free Gift 🎁",
      "Pulse monitor",
      "Speedometer for workout tracking",
      "Phone/iPad holder",
      "Adjustable resistance",
      "Adjustable sit and handle",
      "Iron pedal Leg",
      "Double Hand placement",
    ],
    maxWeight: "180KG",
    price: 380000,
    oldPrice: 450000,
    imageUrl:
      "https://45wg8knj47.ufs.sh/f/wphKuQ5a7nZ8jKd3KrhSIalMuzebH37XkmfthsEvJUKqnOxc",
    videoUrl:
      "https://45wg8knj47.ufs.sh/f/wphKuQ5a7nZ8yV6AoYWUpkDOoFIWiLRz1q8M3QKJ4fxtE0b2",
  },
  {
    id: "Elliptical_Bike",
    name: "Elliptical Cross Trainer Bike",
    features: [
      "1. Low-impact, smooth motion",
      "2. Works legs, arms, and cardiovascular system",
      "3. Simulates running without high-impact stress",
    ],
    maxWeight: "150KG",
    price: 440000,
    oldPrice: 520000,
    imageUrl:
      "https://45wg8knj47.ufs.sh/f/wphKuQ5a7nZ8NnqvncAR75ZDeJT92yXV4GzNhLBjMv6tCHwE",
    videoUrl:
      "https://45wg8knj47.ufs.sh/f/wphKuQ5a7nZ8QVkoWEjiNDyvwI98jZCdlPhWbLezAmBgX7or",
  },
  {
    id: "4in1_Exercise_Bike",
    name: "OrbiTrac 4in1 Exercise machine",
    features: [
      "Comes with elliptical exercise, mini stepper, waist twister, four dumbbell sets and free Gift 🎁",
      "1. Low-impact, smooth motion",
      "2. Works legs, arms, and cardiovascular system",
      "3. Simulates running without high-impact stress",
    ],
    maxWeight: "150KG",
    price: 450000,
    oldPrice: 520000,
    imageUrl:
      "https://45wg8knj47.ufs.sh/f/wphKuQ5a7nZ8pR21KsdPerX4M87hkGmwayz3q5tDLVOFbJSj",
    videoUrl:
      "https://45wg8knj47.ufs.sh/f/wphKuQ5a7nZ8HchPBRLUiX0dTvMtsC7SpQox4yuIABZ29hqP",
  },
  {
    id: "Portable_Exercise_Bike",
    name: "Space saver Exercise Bike",
    features: [
      "Space saving",
      "Low cost",
      "Adjustable resistance",
      "Adjustable sit and speedometer for record tracking",
    ],
    maxWeight: "120KG",
    price: 160000,
    oldPrice: 210000,
    imageUrl:
      "https://45wg8knj47.ufs.sh/f/wphKuQ5a7nZ8ckyv7pVgVvMRfg8n0G7tFxiLIXPayKz1DkBq",
    videoUrl:
      "https://45wg8knj47.ufs.sh/f/wphKuQ5a7nZ8JRuF04sl69uKD4rTOW7PgjbS2xo1mXEJV5iY",
  },
  {
    id: "Heavy_Duty_Cross_Trainer",
    name: "PURE Commercial Elliptical Cross Trainer",
    features: [
      "Pure commercial heaviest duty cross trainer with automatic Resistance.",
      "1. Low-impact, smooth motion",
      "2. Works legs, arms, and cardiovascular system",
      "3. Simulates running without high-impact stress",
    ],
    maxWeight: "250KG",
    price: 2500000,
    oldPrice: 2900000,
    imageUrl:
      "https://45wg8knj47.ufs.sh/f/wphKuQ5a7nZ8svH93ymjA7obd0ZwnsRBvGu3kDSCEmfphgQa",
    videoUrl:
      "https://45wg8knj47.ufs.sh/f/wphKuQ5a7nZ80ANlqZaxFQC816BIKWdtbJGYNcv9sXjqZ5RV",
  },
];

const testimonials = [
  {
    quote:
      "Smooth transaction Paid on delivery No issues Good customer service I will recommend",
    author: "Sir Joseph",
    location: "Benin",
  },
  {
    quote:
      "Very straightforward deal. Seller was very helpful throughout, all the way to delivery outside Lagos. Communication was smooth. I recommend. He even offers payment on delivery.",
    author: "Mrs Eunice",
    location: "Uyo",
  },
  {
    quote: "Very lovely customer service...",
    author: "Mrs Bunmi",
    location: "Ajao est. Lagos",
  },
  {
    quote: "I love the commercial bike..",
    author: "Mr Dayo",
    location: "Jos",
  },
  {
    quote: "I love the elliptical MACHINE...",
    author: "Aladi U.S",
    location: "Abuja",
  },
  {
    quote:
      "A very honest seller. Very dependable and trustworthy. Sent my exercise bike and threadmill to me in Ado Ekiti within hours. Products were of good quality and as described. Please buy from him with peace of mind.",
    author: "Solomon oke",
    location: "Ondo State",
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
