import ContainerLayout from "@/components/layouts/ContainerLayout";
import React from "react";
import InfoCard from "@/components/InfoCard/InfoCard";
import { WhyChoose, whyChooseData } from "@/data/whyChooseData";
import "@styles/grids.css";
import Background from "@/components/background/Background";

const WhyChooseSection = () => {
  return (
    <Background className="mt-lg">
      <ContainerLayout paddingTop="none">
        <h2 className="text-center text-white"> Why Choose ChefSelect </h2>
        <div className="grid-3-col">
          {whyChooseData.map((item) => (
            <InfoCard
              key={item.id}
              title={item.title}
              description={item.description}
              className=""
            />
          ))}
        </div>
      </ContainerLayout>
    </Background>
  );
};

export default WhyChooseSection;
