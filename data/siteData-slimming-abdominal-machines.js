import {
  contactInfo,
  deliveryInfo,
  footer,
  navigation,
} from "../constants/siteData";

const heroSection = {
  title: "ABDOMINAL / WEIGHT LOSS",
  subtitle: "Loss excessive belly fat and body weight",
  description1:
    "Massaging machine and Abdominal crunches are  GREAT piece of equipment.",
  description2:
    "With so many benefits both Health & Fitness wise, vibration platform have proven to be the BEST fitness equipment anyone can have at home!",
  tagline: "Best Option For Both cardio and fat",
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
  "*Vibration Massagers:*",
  "1. *Muscle Relaxation*: Relaxes muscles, reducing tension and soreness.",
  "2. *Improved Circulation*: Enhances blood flow, promoting healing and relaxation.",
  "3. *Stress Relief*: Provides a soothing experience, reducing stress and anxiety.",
  "4. *Pain Relief*: Can help alleviate chronic pain and discomfort.",
  "",
  "",
  "*Abdominal Machines:*",
  "1. *Core Strengthening*: Targets abdominal muscles, improving core strength and stability.",
  "2. *Toning and Definition*: Helps tone and define abdominal muscles.",
  "3. *Improved Posture*: Strengthens core muscles, promoting better posture.",
  "4. *Injury Rehabilitation*: Can be useful for rehabilitation and injury prevention.",
  "",
  "",
  "*Combining Both:*",
  "1. *Enhanced Recovery*: Vibration massagers can aid in recovery after using abdominal machines.",
  "2. *Improved Muscle Engagement*: Abdominal machines can engage core muscles, while vibration massagers can relax and soothe them.",
];

const products = [
  {
    id: "Vibration_Platform",
    name: "Vibration Platform / massager",
    features: [
      "Has Bluetooth",
      "USB",
      "Two Resistance Bands and a Remote control",
      "Improved Circulation",
      "Reduced Inflammation",
      "Relaxation and Stress Relief",
      "Improved Flexibility",
    ],
    maxWeight: "150KG",
    price: 180000,
    oldPrice: 230000,
    imageUrl:
      "https://zxzyub6zq2.ufs.sh/f/OX5ramIp6AH4Uzw2A092Nptid5bS4zkjWr37GgFwALhYv9al",
    videoUrl:
      "https://45wg8knj47.ufs.sh/f/wphKuQ5a7nZ8JQbNbYsl69uKD4rTOW7PgjbS2xo1mXEJV5iY",
  },
  {
    id: "Pilate_Board",
    name: "Multi purpose Pilate Board",
    features: [
      "1. *Core Strengthening*: Targets core muscles, improving overall core strength and stability.",
      "2. *Improved Flexibility*: Enhances flexibility and range of motion through controlled movements.",
      "3. *Body Toning*: Helps tone and strengthen various muscle groups, including arms, legs, and glutes.",
      "4. *Posture Improvement*: Promotes good posture and alignment, reducing the risk of back pain.",
      "5. *Low-Impact*: Gentle on joints, making it suitable for users with joint issues or those recovering from injuries.",
      "6. *Full-Body Workout*: Engages multiple muscle groups, providing a comprehensive workout.",
    ],
    maxWeight: "150KG",
    price: 145000,
    oldPrice: 210000,
    imageUrl:
      "https://45wg8knj47.ufs.sh/f/wphKuQ5a7nZ8sdALg3vmjA7obd0ZwnsRBvGu3kDSCEmfphgQ",
    videoUrl:
      "https://45wg8knj47.ufs.sh/f/wphKuQ5a7nZ8GZgqUIu1nHsPSX0DMciNEvAm3Rk6Yw8bQK7p",
  },
  {
    id: "wonder_core",
    name: "Six pack wonder core",
    features: [
      "1. *Core Strengthening*: Targets abdominal muscles, helping to improve core strength and definition.",
      "2. *Abdominal Toning*: Engages multiple muscle groups, including rectus abdominis and obliques.",
      "3. *Improved Posture*: Strengthens core muscles, which can help improve posture and reduce back pain.",
      "4. *Versatility*: Allows for various exercises, targeting different muscle groups.",
      "5. *Space-Efficient*: ",
    ],
    maxWeight: "150KG",
    price: 150000,
    oldPrice: 230000,
    imageUrl:
      "https://45wg8knj47.ufs.sh/f/wphKuQ5a7nZ8QKzRVIjiNDyvwI98jZCdlPhWbLezAmBgX7or",
    videoUrl:
      "https://zxzyub6zq2.ufs.sh/f/OX5ramIp6AH43dCUeFPNlJRCKEIUdmB2WviFtjpV8bqh65ke",
  },
  {
    id: "Mini_Stepper",
    name: "Mini Stepper with Resistance Rope",
    features: [
      "1. *Low-Impact Exercise*: Provides a low-impact cardiovascular workout, suitable for users with joint issues or mobility limitations.",
      "2. *Space-Efficient*: Compact design makes it ideal for home use, even in small spaces.",
      "3. *Cardiovascular Benefits*: Improves cardiovascular health, increasing heart rate and blood flow.",
      "4. *Leg Strengthening*: Targets leg muscles, including calves, thighs, and glutes.",
      "5. *Convenience*: Allows for exercise at home, saving time and effort.",
      "6. *Weight Loss*: Can aid in weight loss and weight management.",
      "7. *Improved Mobility*: Helps improve mobility and flexibility.",
    ],
    maxWeight: "120KG",
    price: 85000,
    oldPrice: 95000,
    imageUrl:
      "https://45wg8knj47.ufs.sh/f/wphKuQ5a7nZ8C2nJTwMeNO1QF3Dw6vIPLXMEGtn8mj5baZkR",
    videoUrl:
      "https://45wg8knj47.ufs.sh/f/wphKuQ5a7nZ8pEiBqPdPerX4M87hkGmwayz3q5tDLVOFbJSj",
  },
  {
    id: "Semi_Commercial_Stepper",
    name: "150KG Semi Commercial Mini Stepper with Rope",
    features: [
      "1. *Low-Impact Exercise*: Provides a low-impact cardiovascular workout, suitable for users with joint issues or mobility limitations.",
      "2. *Space-Efficient*: Compact design makes it ideal for home use, even in small spaces.",
      "3. *Cardiovascular Benefits*: Improves cardiovascular health, increasing heart rate and blood flow.",
      "4. *Leg Strengthening*: Targets leg muscles, including calves, thighs, and glutes.",
      "5. *Convenience*: Allows for exercise at home, saving time and effort.",
      "6. *Weight Loss*: Can aid in weight loss and weight management.",
      "7. *Improved Mobility*: Helps improve mobility and flexibility.",
    ],
    maxWeight: "150KG",
    price: 105000,
    oldPrice: 120000,
    imageUrl:
      "https://45wg8knj47.ufs.sh/f/wphKuQ5a7nZ8NyYd2uAR75ZDeJT92yXV4GzNhLBjMv6tCHwE",
    videoUrl:
      "https://45wg8knj47.ufs.sh/f/wphKuQ5a7nZ8uV92AISs3BNzeqSQw5ymF7DAEoOhr8x4gMCl",
  },
  {
    id: "pull-up_stand",
    name: "Multi purpose pull-up stand with bench",
    features: [
      "1. *Convenience*: Offers a range of exercises in one piece of equipment, saving space and time.",
      "2. *Adjustability*: Many models offer adjustable height settings and bench positions, accommodating users of different heights and fitness levels.",
      "The multipurpose pull-up stand with bench is a valuable addition to any workout routine, providing a comprehensive full-body workout.",
    ],
    maxWeight: "150KG",
    price: 350000,
    oldPrice: 450000,
    imageUrl:
      "https://zxzyub6zq2.ufs.sh/f/OX5ramIp6AH4ir73J64fZgyPvAF8U1NpjtEXVWoK9Radb4nS",
    videoUrl:
      "https://zxzyub6zq2.ufs.sh/f/OX5ramIp6AH4NK6B9KL6LnOQMbHG78Ukh1gWeD0l9jpf4uxT",
  },
  {
    id: "push-up_plank",
    name: "Pushups / planking board",
    features: [
      "Different levels of pushups, Resistance Bands, Record tracking and planking",
    ],
    maxWeight: "150KG",
    price: 65000,
    oldPrice: 85000,
    imageUrl:
      "https://45wg8knj47.ufs.sh/f/wphKuQ5a7nZ8YreZHLWb6CubFl4dISpUe3QnxsLB9Jf5kPr2",
    videoUrl:
      "https://45wg8knj47.ufs.sh/f/wphKuQ5a7nZ8JbHE8Xsl69uKD4rTOW7PgjbS2xo1mXEJV5iY",
  },
  {
    id: "Tummy_wrap",
    name: "Tummy wrap/postpartum sheath belt/waist wrap",
    features: ["Breathable material"],
    maxWeight: "One size fit all",
    price: 25000,
    oldPrice: 40000,
    imageUrl:
      "https://45wg8knj47.ufs.sh/f/wphKuQ5a7nZ87XWXDwGgjp0Le3ZE91WPf8iMXuYdtJaFDVq6",
    videoUrl:
      "https://45wg8knj47.ufs.sh/f/wphKuQ5a7nZ8LivLMCoy9tzLGxo5rVBmHYbUeSROid8a1MfD",
  },
  {
    id: "CrazyFit_Massage",
    name: "Crazy Massager",
    features: [
      "Relaxation and stress relief",
      "Improved circulation",
      "Pain relief",
      "Increased flexibility ",
    ],
    maxWeight: "150KG",
    price: 370000,
    oldPrice: 480000,
    imageUrl:
      "https://zxzyub6zq2.ufs.sh/f/OX5ramIp6AH4cqXtQCdXSxTIWiD7kKrF1JOZl5M68sY4BEaq",
    videoUrl:
      "https://45wg8knj47.ufs.sh/f/wphKuQ5a7nZ84CRg70PChN2WwFntKjsqUuIdiASae3p0r7JX",
  },
  {
    id: "Tummy_Trimmer",
    name: "Tummy Belt",
    features: ["Easy to Wear"],
    maxWeight: "Different sizes",
    price: 25000,
    oldPrice: 40000,
    imageUrl:
      "https://45wg8knj47.ufs.sh/f/wphKuQ5a7nZ8a5dNSuZnklJbjWVIvgCHomSLOi58Z3wEd0ND",
    videoUrl: "https://",
  },
  {
    id: "Ab_Roller",
    name: "Abdominal Roller",
    features: [
      "1. *Versatility*: Can be used for various exercises, targeting different muscle groups.",
      "2. *Improves Overall Strength*: Can contribute to overall upper body strength and stability.",
    ],
    maxWeight: "150KG",
    price: 30000,
    oldPrice: 38000,
    imageUrl:
      "https://45wg8knj47.ufs.sh/f/wphKuQ5a7nZ8CwxVi6MeNO1QF3Dw6vIPLXMEGtn8mj5baZkR",
    videoUrl:
      "https://45wg8knj47.ufs.sh/f/wphKuQ5a7nZ8HWd54M3LUiX0dTvMtsC7SpQox4yuIABZ29hq",
  },
  {
    id: "Rebound_Roller",
    name: "Rebound Abdominal Roller",
    features: [
      "1. *Versatility*: Can be used for various exercises, targeting different muscle groups.",
      "2. *Improves Overall Strength*: Can contribute to overall upper body strength and stability.",
    ],
    maxWeight: "150KG",
    price: 40000,
    oldPrice: 52000,
    imageUrl:
      "https://45wg8knj47.ufs.sh/f/wphKuQ5a7nZ8MsVSYBP6trRBPF6SHTJ5cIYOdWxa18E7zGlX",
    videoUrl:
      "https://zxzyub6zq2.ufs.sh/f/OX5ramIp6AH4qN1MiYutkZgWV0ucH5X9nJ8jmoYDyCiRl3q4",
  },
  {
    id: "Hand_massager",
    name: "Facial Gun Massage",
    features: [
      "1. *Relaxation and Stress Relief*: Helps reduce facial tension and promotes relaxation.",
      "2. *Improved Circulation*: Enhances blood flow to the skin, which can improve skin health and appearance.",
      "3. *Reduced Muscle Tension*: Can help alleviate facial muscle tension and pain.",
      "4. *Enhanced Product Absorption*: May improve absorption of skincare products by increasing blood flow.",
      "5. *Rejuvenating Effects*: Can help reduce fine lines and wrinkles, giving the skin a more youthful appearance.",
    ],
    maxWeight: "",
    price: 39000,
    oldPrice: 50000,
    imageUrl:
      "https://45wg8knj47.ufs.sh/f/wphKuQ5a7nZ8dQmGzd9ZEfcoP2Uv9uBx5gy1jzTJwQm3G7bq",
    videoUrl:
      "https://zxzyub6zq2.ufs.sh/f/OX5ramIp6AH4SFyYePOGFm4r2wOpk3jT0qJXncLyD1lB7Rhu",
  },
  {
    id: "Yoga_headstand",
    name: "Yoga headstand",
    features: [
      "*Inverted Bliss:*",
      "1. Stimulates blood flow and oxygenation to the brain",
      "2. Relaxes the nervous system, reducing stress and anxiety",
      "",
      "",
      "*Physical Benefits:*",
      "1. Strengthens neck, shoulder, and core muscles",
      "2. Improves flexibility and balance",
      "3. Relieves pressure on the spine and joint",
    ],
    maxWeight: "150KG",
    price: 60000,
    oldPrice: 80000,
    imageUrl:
      "https://45wg8knj47.ufs.sh/f/wphKuQ5a7nZ84HHIgnPChN2WwFntKjsqUuIdiASae3p0r7JX",
    videoUrl:
      "https://45wg8knj47.ufs.sh/f/wphKuQ5a7nZ865S67hJ0kyVha5wGRBXfWcpnilOH9steLZEb",
  },
  {
    id: "Fat_Throwing_Gun",
    name: "Fat Throwing hand Massager",
    features: [
      "1. Relaxation and stress relief",
      "2. Improved circulation",
      "3. Pain relief",
      "4. Increased flexibility",
    ],
    maxWeight: "",
    price: 38000,
    oldPrice: 50000,
    imageUrl:
      "https://45wg8knj47.ufs.sh/f/wphKuQ5a7nZ8Nvkll3AR75ZDeJT92yXV4GzNhLBjMv6tCHwE",
    videoUrl:
      "https://zxzyub6zq2.ufs.sh/f/OX5ramIp6AH4AO8eFlCiqWv7hVQMcKf6jxGzlkwBy2Ddu3bp",
  },
  {
    id: "Press_up_Bar",
    name: "Press up Bar",
    features: ["Different levels of pushups"],
    maxWeight: "",
    price: 35000,
    oldPrice: 48000,
    imageUrl:
      "https://45wg8knj47.ufs.sh/f/wphKuQ5a7nZ8LkMBdPy9tzLGxo5rVBmHYbUeSROid8a1MfDy",
    videoUrl:
      "https://45wg8knj47.ufs.sh/f/wphKuQ5a7nZ89VNdQDhvkpQbiJDgomVO1RstZF6wK0yhcfaX",
  },
  {
    id: "Trampoline",
    name: "Jumping Trampoline",
    features: [
      "1. Low-impact exercise: Easy on joints",
      "2. Cardiovascular fitness: Improves heart health",
      "3. Muscle toning: Strengthens legs, core, and glutes",
      "4. Stress relief: Fun, energetic way to unwind A Note",
    ],
    maxWeight: "150KG",
    price: 130000,
    oldPrice: 240000,
    imageUrl:
      "https://45wg8knj47.ufs.sh/f/wphKuQ5a7nZ8Cl3TvfMeNO1QF3Dw6vIPLXMEGtn8mj5baZkR",
    videoUrl:
      "https://45wg8knj47.ufs.sh/f/wphKuQ5a7nZ86gexWcJ0kyVha5wGRBXfWcpnilOH9steLZEb",
  },
  {
    id: "Sit-up_Bench",
    name: "Tummy sit-up Bench",
    features: [
      "1. Strengthened core muscles",
      "2. Toned abdominal muscles",
      "3. Improved posture",
      "4. Enhanced core stability",
      "5. It's an effective tool for abdominal workouts.",
    ],
    maxWeight: "150KG",
    price: 90000,
    oldPrice: 120000,
    imageUrl:
      "https://zxzyub6zq2.ufs.sh/f/OX5ramIp6AH4lhKkwCTkd4EFBSyjNXvAmV5YTPRfOcoQa7er",
    videoUrl: "https://",
  },
];

const testimonials = [
  {
    quote:
      "The six pack wonder core has virtually all the exercise functions in 1 is stunning...",
    author: "Capt. Isreal",
    location: "Warri, Delta",
  },
  {
    quote: "This Pilate Board is more than what i expected...",
    author: "Joshua Enendu",
    location: "Abuja",
  },
  {
    quote: "Very lovely customer service...",
    author: "Mrs Bunmi",
    location: "Ajao est. Lagos",
  },
  {
    quote: "I love the massage MACHINE...",
    author: "Mr Dayo",
    location: "Jos",
  },
  {
    quote: "I love the pull-up MACHINE...",
    author: "Aladi U.S",
    location: "Abuja",
  },
  {
    quote:
      "A very honest seller. Very dependable and trustworthy. Sent my vibration platform and tummy wrap to me in Ado Ekiti within hours. Products were of good quality and as described. Please buy from him with peace of mind.",
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
