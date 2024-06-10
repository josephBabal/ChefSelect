export type Product = {
  id: number;
  title: string;
  description: string;
};

export const productData: Product[] = [
  {
    id: 0,
    title: "Locally Sourced Ingredients",
    description:
      "We work closely with nearby farmers and producers to bring you the freshest ingredients possible. By sourcing locally, we support our community, reduce transportation emissions, and ensure that every meal is flavorful and straight from the farm to your plate.",
  },
  {
    id: 1,
    title: "Eco-Friendly Packaging",
    description:
      "Our commitment to sustainability means using innovative materials like sugarcane, insulated lining, and other eco-friendly materials that minimize environmental impact while keeping your meals fresh and delicious.",
  },
];
