import "@styles/grids.css";
import { valuesData } from "@/data/values";
import ContainerLayout from "@/components/layouts/ContainerLayout";

const Values = () => {
  return (
    <ContainerLayout>
      <h2 className="text-center"> Our Values </h2>
      <div className="value-grid">
        {valuesData.map((item, idx) =>
          idx !== 1 ? (
            <div className={`child-${idx + 1}`}>
              <p className="text-md title-text-color semi-bold">
                {" "}
                {item.title}{" "}
              </p>
              <p> {item.description} </p>
            </div>
          ) : (
            <img
              src={item.imagePath}
              className={`child-${idx + 1} value-img`}
              alt="values"
            />
          ),
        )}
      </div>
    </ContainerLayout>
  );
};

export default Values;
