"use client";
import { cn } from "@/lib/utils";
import { StarLight } from "./starligh";
import { easeInOut, motion } from "motion/react";
export const Hero = () => {
  return (
    <div
      className={cn(
        "relative m-auto flex min-h-[90vh] flex-col items-center overflow-hidden",
      )}
    >
      <div
        className="absolute inset-0 z-21 blur-2xl dark:block"
        style={{
          maskImage:
            "linear-gradient(to bottom, transparent, black , transparent)",
          background:
            "repeating-linear-gradient(63deg, var(--color-purple-400), var(--color-yellow-800) 12px, color-mix(in oklab, var(--color-violet-600) 30%, transparent) 20px, transparent 180px)",
        }}
      />
      <div className="scale-x-60 scale-y-60 opacity-90 xl:scale-x-140 xl:scale-y-80">
        <StarLight></StarLight>
      </div>
      <div className="absolute inset-0 h-60 bg-neutral-950 [mask-image:linear-gradient(to_top,black_10%,transparent_40%)]"></div>
      <motion.div
        initial={{
          opacity: 0,
          y: -20,
          filter: "blur(5px)",
        }}
        animate={{
          opacity: 1,
          y: -0,
          filter: "blur(0px)",
        }}
        transition={{
          duration: 0.3,
          ease: easeInOut,
        }}
        className="absolute z-30 flex flex-col"
      >
        <h1 className="mt-[27vh] bg-gradient-to-t from-neutral-50 to-neutral-400 bg-clip-text text-center text-[35px] tracking-tighter text-transparent sm:mt-[30vh] sm:text-[35px] md:mt-[35vh] md:text-[40px] xl:mt-[34vh] xl:pb-2 xl:text-5xl">
          Crafting Elagent Websites
        </h1>

        <p className="mt-0 ml-15 w-55 text-center text-[13px] tracking-wide text-neutral-400 sm:mt-0 sm:ml-11 sm:w-69 sm:text-[15px] md:mt-0 md:ml-14 md:w-74 md:text-[16px] xl:mt-1.5 xl:ml-8 xl:w-md xl:text-[19px]">
          We provide life to your websites giving them better designes and
          interactives
        </p>

        <div className="mt-5 flex items-center justify-center gap-5 lg:gap-8">
          <button className="inset-shadow-2xl cursor-pointer rounded-full bg-gradient-to-b from-white to-neutral-400 px-4 py-1.5 text-neutral-900 hover:from-neutral-100 hover:to-neutral-100 lg:px-6 lg:py-2.5">
            Contact us
          </button>
          <button className="font cursor-pointer rounded-full bg-gradient-to-b from-neutral-800 to-neutral-950 px-4 py-1.5 shadow-2xl hover:ring-1 hover:ring-neutral-600 lg:px-5 lg:py-2.5">
            Start building
          </button>
        </div>
      </motion.div>
      <div className="absolute bottom-0 scale-x-60 scale-y-60 rotate-180 opacity-90 xl:scale-x-140 xl:scale-y-80">
        <StarLight
          animateX={{ x1: "", x2: "" }}
          initialX={{ x1: "", x2: "" }}
        ></StarLight>
      </div>
      <div className="absolute inset-x-0 bottom-0 h-60 bg-neutral-950 [mask-image:linear-gradient(to_bottom,black_1%,transparent_50%)]"></div>
      <div className="absolute inset-x-0 bottom-0 h-20 bg-neutral-950 [mask-image:linear-gradient(to_top,black_25%,transparent_70%)]"></div>
    </div>
  );
};
