import MenuContainer from "@/components/menu-page/menuContainer/MenuContainer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ChefSelect - Menu",
  description: "Premium food prep delivery service offering a wide range of fresh, healthy, and delicious meals.",
  openGraph: {
    type: "website",
    url: "https://chefselect.vercel.app/",
    title: "ChefSelect - Home",
    description: "Premium food prep delivery service offering a wide range of fresh, healthy, and delicious meals.",
    siteName: "ChefSelect",
    images: [
      {
        url: "https://chefselect.vercel.app/images/og.jpg",
        secureUrl:  "https://chefselect.vercel.app/images/og.jpg",
        width: 1920,
        height: 1080,
        alt: "ChefSelect - Menu",
      },
    ],
  }
};


const MenuPage = () => {
  return <MenuContainer />;
};

export default MenuPage;
