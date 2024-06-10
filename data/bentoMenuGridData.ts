export type BentoMenuGrid = {
  id: string;
  imagePath?: string;
  heading?: string;
  buttonText?: string;
};

export const bentoMenuGridData: BentoMenuGrid[] = [
  {
    id: "0",
    imagePath: "/images/vegan-soup-900px.jpg",
  },
  {
    id: "1",
    imagePath: "/images/beef-stew-1200px.jpg",
  },
  {
    id: "2",
    imagePath: "/images/carbonara-pasta-1200px.jpg",
  },
  {
    id: "3",
    imagePath: "/images/fried-rice-1200px.jpg",
  },
  {
    id: "4",
    imagePath: "/images/chicken-alfredo-pasta-900px.jpg",
  },
  {
    id: "5",
    imagePath: "/images/butter-squash-soup-1200px.jpg",
  },
  {
    id: "6",
    heading: "Explore Our Dishes",
    buttonText: "Browse Our Menu",
  },
];
