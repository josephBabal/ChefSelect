"use client";

import Button from "@/components/button/Button";
import Grid2Layout from "../../layouts/Grid-2-layout";
import ContainerLayout from "../../layouts/ContainerLayout";
import styles from "./hero.module.css";
import "@styles/grids.css";

import { gsap } from "gsap";
import { useEffect, useRef } from "react";
const Hero = () => {
  const flexColRef = useRef(null);
  const heroImgRef = useRef(null);

  useEffect(() => {
    const timeline = gsap.timeline();

    timeline.fromTo(
      flexColRef.current,
      { opacity: 0, y: 200 },
      { opacity: 1, y: 0, duration: 1.5 }
    )
    .fromTo(
      heroImgRef.current,
      { opacity: 0, y: 200 },
      { opacity: 1, y: 0, duration: 1.5 },
      "0"
    );
  }, []);


  return (
    <ContainerLayout>
      <Grid2Layout>
        <div ref={flexColRef} className={styles.flexCol}>
          <h1>Discover Freshness at Your Doorstep</h1>
          <p className={`${styles.subText}`}>
            {" "}
            Take the Stress Out of Meal Planning and Shopping. Enjoy
            Chef-Quality Dinners Without the Hassle{" "}
          </p>
          <Button text="Explore plans" type="primary" href="/plans" />
        </div>

        <img ref={heroImgRef} className={`${styles.heroImg}`} src="/images/home-1920px.jpg" />
      </Grid2Layout>
    </ContainerLayout>
  );
};

export default Hero;
