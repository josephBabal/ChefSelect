export type Menu = {
  id: number;
  name: string;
  time: string;
  diet?: string[];
  image: string;
};

export const menuData: Menu[] = [
  {
    id: 0,
    name: "Butternut squash soup",
    time: "30min",
    diet: ["Vegetarian", "Gluten Free"],
    image: "/images/butternut-squash-soup-600px.jpg",
  },
  {
    id: 1,
    name: "Carbonara pasta",
    time: "30min",
    diet: [],
    image: "/images/carbonara-pasta-800px.jpg",
  },
  {
    id: 2,
    name: "Fried rice",
    time: "30min",
    diet: ["Vegetarian", "Gluten Free"],
    image: "/images/fried-rice-800px.jpg",
  },
  {
    id: 3,
    name: "Spinach soup",
    time: "30min",
    diet: ["Vegan", "Gluten Free"],
    image: "/images/vegan-soup-800px.jpg",
  },
  {
    id: 4,
    name: "Beef strew",
    time: "30min",
    diet: [],
    image: "/images/beef-stew-800px.jpg",
  },
  {
    id: 5,
    name: "Chicken alfredo pasta",
    time: "30min",
    diet: [],
    image: "/images/chicken-alfredo-pasta-900px.jpg",
  },
  {
    id: 6,
    name: "Chickpea tacos",
    time: "30min",
    diet: ["Vegan"],
    image: "/images/chickpea-tacos-800px.jpg",
  },

  {
    id: 7,
    name: "Shrimp and rice",
    time: "30min",
    diet: [],
    image: "/images/salmon-rice-800px.jpg",
  },
  {
    id: 8,
    name: "Ramen",
    time: "30min",
    diet: [],
    image: "/images/ramen-800px.jpg",
  },
  {
    id: 9,
    name: "Sage lemon pasta",
    time: "30min",
    diet: ["Vegetarian"],
    image: "/images/sage-lemon-pasta-800px.jpg",
  },
  {
    id: 10,
    name: "Shrimp pasta",
    time: "30min",
    diet: [],
    image: "/images/shrimp-red-pasta-800px.jpg",
  },
  {
    id: 11,
    name: "Chicken katsu",
    time: "30min",
    diet: [],
    image: "/images/katsu-800px.jpg",
  },
  {
    id: 12,
    name: "Nachos",
    time: "30min",
    diet: ["Gluten Free"],
    image: "/images/nachos-800px.jpg",
  },
  {
    id: 13,
    name: "Lentil meatball soup",
    time: "30min",
    diet: ["Gluten Free"],
    image: "/images/lentil-meatball-soup-800px.jpg",
  },
  {
    id: 14,
    name: "Veggie bowl",
    time: "30min",
    diet: ["Vegan", "Gluten Free"],
    image: "/images/veggie-bowl-800px.jpg",
  },
];

export type Filter = {
  id: number;
  name: string;
};

export const filterMenuData: Filter[] = [
  {
    id: 0,
    name: "All",
  },
  {
    id: 1,
    name: "Vegetarian",
  },
  {
    id: 2,
    name: "Vegan",
  },
  {
    id: 3,
    name: "Gluten Free",
  },
];
