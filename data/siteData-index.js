import {
  contactInfo,
  deliveryInfo,
  footer,
  navigation,
} from "../constants/siteData";

const defaultImagePath = "/assets/imgs/chrisport-logo.png";

const heroSection = {
  title: "TITLE",
  subtitle: "SUBTITLE",
  description1: "DESCRIPTION 1",
  description2: "DESCRIPTION 2",
  tagline: "TAGLINE",
};

const videoSection = {
  title: "WATCH VIDEO DEMONSTATION!",
  videoUrl: defaultImagePath,
  duration: "0:43",
  description: "VIDEO DESCRIPTION",
};

const benefits = ["xyz", "xyz", "xyz"];

const products = [
  {
    id: "ID",
    name: "NAME",
    features: ["xyz", "xyz", "xyz"],
    maxWeight: "xyz",
    price: 0,
    oldPrice: 0,
    imageUrl: defaultImagePath,
    videoUrl: defaultImagePath,
  },
  {
    id: "ID",
    name: "NAME",
    features: ["xyz", "xyz", "xyz"],
    maxWeight: "xyz",
    price: 0,
    oldPrice: 0,
    imageUrl: defaultImagePath,
    videoUrl: defaultImagePath,
  },
];

const testimonials = [
  {
    quote: "QUOTE",
    author: "AUTHOR",
    location: "LOCATION",
  },
  {
    quote: "QUOTE",
    author: "AUTHOR",
    location: "LOCATION",
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
