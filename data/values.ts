export type Value = {
  id: string;
  imagePath?: string;
  title?: string;
  description?: string;
};

export const valuesData: Value[] = [
  {
    id: "0",
    title: "Sustainability",
    description:
      "We prioritize sustainable practices in everything we do, from sourcing ingredients to packaging and delivery. We are dedicated to minimizing our environmental footprint and promoting eco-friendly solutions.",
  },
  {
    id: "1",
    imagePath: "/images/values-900px.jpg",
  },
  {
    id: "2",
    title: "Local Sourcing",
    description:
      "We believe in the power of local communities and support local farmers by sourcing our ingredients locally whenever possible. By partnering with nearby farms, we ensure freshness, support local economies, and reduce food miles.",
  },
  {
    id: "3",
    title: "Quality",
    description:
      "We are committed to excellence in every aspect of our service, from the ingredients we choose to the meals we deliver. Quality is at the heart of everything we do, ensuring that our customers enjoy delicious, nutritious meals every time.",
  },
  {
    id: "4",
    title: "Customization",
    description:
      "We understand that everyone has unique dietary preferences and needs. That's why we offer customizable meal plans that allow our customers to tailor their meals to fit their lifestyle, preferences, and dietary requirements.",
  },
  {
    id: "5",
    title: "Effortless Convenience",
    description:
      "We prioritize effortless convenience in everything we do. From ordering to meal prep, our goal is to make the entire process seamless and stress-free for our customers.",
  },
];
