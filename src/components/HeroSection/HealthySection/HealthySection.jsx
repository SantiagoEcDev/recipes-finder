import { HealthyCard } from "../HealthyCard/HealthyCard";
import "./HealthySection.css";
import SaladImage from "./Salad.png";

export const HealthySection = () => {
  return (
    <>
      <section className="healthy-header">
        <h2 className="healthy-header-title">Healthy Recipes</h2>
        <span className="healthy-subheader">
          <h3 className="healthy-subheader-subtitle">with features</h3>{" "}
          <p className="healthy-subheader-seeAll">See all</p>
        </span>
      </section>
      <div className="healthy-cards">
        <HealthyCard
          image={SaladImage}
          name={"Keto Salad"}
          firstIngredient={"Beans"}
          secondIngredient={"fruits"}
          rate={"4.5"}
        />
        
        <HealthyCard
          image={SaladImage}
          name={"Keto Salad"}
          firstIngredient={"Beans"}
          secondIngredient={"fruits"}
          rate={"4.5"}
        />
      </div>
    </>
  );
};
