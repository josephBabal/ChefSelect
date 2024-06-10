import { bentoMenuGridData } from "@/data/bentoMenuGridData";
import Button from "../button/Button";

const BentoMenuGrid = () => {
  return (
    <div className="bento-grid-menu">
      {bentoMenuGridData.map((item) => (
        <div key={item.id} className={"child-" + item.id}>
          {item.id !== "6" ? (
            <img src={item.imagePath} alt={item.id} />
          ) : (
            <div key={item.id} className={"child-" + item.id}>
              <p className="bento-item-heading title-text-color">
                {item.heading}
              </p>
              <Button href="/menu" text="Browse Our Menu" />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default BentoMenuGrid;
