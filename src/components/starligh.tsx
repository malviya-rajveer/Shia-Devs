"use client";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";

export const StarLight = ({
  initialX,
  animateX,
}: {
  initialX?: {
    x1: string;
    x2: string;
  };
  animateX?: {
    x1: string;
    x2: string;
  };
}) => {
  const pink = ["oklch(0.586 0.253 17.585)", "oklch(0.833 0.145 321.434)"];
  // const white = ["#9E00FF", "#f8fafc"];
  const yellow = ["#9E00FF", "#fef08a"];

  const paths = [
    {
      d: "M 0.4379 27.1924 H 244.8082",
      className: "",
      delay: 0,
      duration: 3,
      repeatdelay: 2,
      color: pink,
    },
    {
      d: "M 1 3 L 0.9218 2.9973 C 30.3333 3 59.6667 3 87.3058 3.0401 C 91 3 90.9978 3.0114 90.9978 5.9439 V 34.1597 C 91.1599 39.9718 91.1599 39.9718 95 40 C 113.6754 40 132.3508 40 151.0262 40 C 154.9522 39.9357 154.9185 39.9693 154.9522 44.9111 V 80.0976 C 155.3223 86.0052 155.3223 86.4503 161.0932 86.2284 H 245.2921 ",
      className: "",
      delay: 0.3,
      duration: 3,
      repeatdelay: 1,
      color: yellow,
    },
    {
      d: "M 0.4379 27.1924 H 244.8082 ",
      className: "",
      delay: 0.5,
      duration: 3,
      repeatdelay: 0.1,
      color: pink,
    },
    {
      d: "M 0.9218 71.2274 H 111.2513 C 118.026 71.2274 118.026 71.2274 118.026 66.8723 V 19.9339 C 118.026 12.1914 118.026 12.1914 123.3489 11.7075 H 242.8726 ",
      className: "",
      delay: 0,
      duration: 3,
      repeatdelay: 0.7,
      color: pink,
    },
    {
      d: "M 0.9218 52.3553 C 60.9256 52.3553 120.9294 52.3553 180.9332 52.3553 C 191.0951 52.3553 191.0951 52.3553 190.6112 61.5494 H 190.6112 V 101.2293 C 190.1273 111.8752 190.6112 109.4556 200.2892 109.9395 H 245.776 ",
      className: "",
      delay: 0,
      duration: 3,
      repeatdelay: 0.3,
      color: yellow,
    },
    {
      d: "M 1.4057 89.1318 H 129.6396 C 139.3176 89.2931 140.2854 89.6157 138.8337 71.7113 C 138.8337 59.1299 138.3498 63.485 165.4483 63.0011 L 244.3243 63.0011 ",
      className: "",
      delay: 0,
      duration: 3,
      repeatdelay: 0.3,
      color: pink,
    },
    {
      d: "M 195.9341 -1.3578 L 195.9341 24.289 C 196.418 37.3543 196.418 38.3221 204.6443 37.8382 H 244.3243 ",
      className: "",
      delay: 0,
      duration: 3,
      repeatdelay: 0.3,
      color: yellow,
    },
    {
      d: "M 41.0856 -0.8739 V 34.4509 C 41.5695 43.645 39.6339 41.7094 59.4739 42.1933 C 80.7655 43.1611 75.4426 32.0314 77.3782 112.843 ",
      className: "",
      delay: 0,
      duration: 3,
      repeatdelay: 0.3,
      color: yellow,
    },
    {
      d: "M 224.9682 -1.3578 V 83.325 C 224.9682 99.7776 227.8716 96.8742 213.3546 97.3581 H 115.6065 C 104.9606 95.4225 109.3157 101.7132 108.8318 113.8108",
      className: "",
      delay: 0,
      duration: 3,
      repeatdelay: 0.3,
      color: yellow,
    },
    {
      d: "M 23.6652 60.0977 V 113.3269 V -5.229",
      className: "",
      delay: 0,
      duration: 3,
      repeatdelay: 0.3,
      color: yellow,
    },
    {
      d: "",
      className: "M 169.3195 -4.2612 V 115.7464",
      delay: 0,
      duration: 3,
      repeatdelay: 0.3,
      color: pink,
    },
    {
      d: "M 34.7949 81.8733 C 52.6993 81.8733 53.1832 80.9055 53.1832 112.843",
      className: "",
      delay: 0,
      duration: 3,
      repeatdelay: 0.3,
      color: yellow,
    },
  ];

  return (
    <div
      className={cn(
        "right-0 flex scale-400 items-center justify-center stroke-neutral-900",
      )}
    >
      <svg
        width="236"
        height="108"
        viewBox="0 0 236 108"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className=""
      >
        {paths.map((path, idx) => {
          return <path key={idx} d={path.d} strokeWidth={0.2}></path>;
        })}
        {paths.map((path, idx) => {
          const gradientId = `paint_linear_${idx}`;
          return (
            <svg key={idx}>
              <motion.path
                key={idx}
                d={path.d}
                stroke={`url(#${gradientId})`}
                strokeWidth={0.5}
              ></motion.path>
              <defs>
                <motion.linearGradient
                  id={gradientId}
                  gradientUnits="userSpaceOnUse"
                  initial={{
                    x1: initialX?.x1 || "-8%",
                    x2: initialX?.x2 || "0%",
                  }}
                  animate={{
                    x1: animateX?.x1 || "92%",
                    x2: animateX?.x2 || "100%",
                  }}
                  transition={{
                    duration: path.duration || 10,
                    repeat: Infinity,
                    repeatType: "loop",
                    delay: path.repeatdelay,
                    repeatDelay: 0.3,
                    ease: "linear",
                  }}
                  y1="0"
                  y2="100;"
                >
                  <stop
                    offset="0"
                    stopColor={path.color[0]}
                    stopOpacity="0"
                  ></stop>
                  <stop
                    offset="1"
                    stopColor={path.color[1]}
                    stopOpacity="1"
                  ></stop>
                  <stop
                    offset="1"
                    stopColor={path.color[0]}
                    stopOpacity="0"
                  ></stop>
                </motion.linearGradient>
              </defs>
            </svg>
          );
        })}
      </svg>
    </div>
  );
};
