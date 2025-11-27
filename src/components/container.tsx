import { AnimatedGrid } from "./AppleGrid";
import { CompaniesGrid } from "./companies-grid";
import { Detailsection } from "./detail-divs";
import { Footer } from "./footer";
import { Hero } from "./Hero";

export const Container = () => {
  return (
    <div className="bg-background relative top-[80px] m-auto w-85 border-x border-t-1 border-x-neutral-700/60 border-t-neutral-700/60 sm:w-xl md:top-[87px] md:w-2xl lg:w-3xl xl:w-5xl">
      <Hero></Hero>
      <Detailsection></Detailsection>
      <AnimatedGrid></AnimatedGrid>
      <CompaniesGrid></CompaniesGrid>
      <Footer></Footer>
    </div>
  );
};
