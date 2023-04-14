import React from "react";
import { Header } from "../components/Header/Header";
import { Hero } from "../components/Hero/Hero";
import { Features } from "../components/Features/Features";
import { About } from "../components/About/About";

type LandingProps = {};

export const Landing = (props: LandingProps) => {
  return (
    <>
      <div >
        <h1 className="text-sl text-red-500" style={{  marginTop: "60px" }}>some text</h1>
      </div>
      <Header />
      <Hero />
      <Features />
      <About />
    </>
  );
};
