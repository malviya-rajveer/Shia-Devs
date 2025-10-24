"use client";
import { motion } from "motion/react";
import {
  IconCopy,
  IconCornerUpLeft,
  IconMessageExclamation,
  IconPlus,
  IconSend,
} from "@tabler/icons-react";
import { cn } from "@/lib/utils";

const emojis = [
  {
    emoji: (
      <svg
        width="72"
        height="72"
        viewBox="0 0 72 72"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999xlink"
      >
        <rect width="72" height="72" fill="url(#pattern0_17_651)" />
        <defs>
          <pattern
            id="pattern0_17_651"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use xlinkHref="#image0_17_651" transform="scale(0.0138889)" />
          </pattern>
          <image
            id="image0_17_651"
            width="72"
            height="72"
            preserveAspectRatio="none"
            xlinkHref="data:image/png;base64,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"
          />
        </defs>
      </svg>
    ),
  },

  {
    emoji: (
      <svg
        width="72"
        height="72"
        viewBox="0 0 72 72"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <rect width="72" height="72" fill="url(#pattern0_9_25061)" />
        <defs>
          <pattern
            id="pattern0_9_25061"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use xlinkHref="#image0_9_25061" transform="scale(0.0138889)" />
          </pattern>
          <image
            id="image0_9_25061"
            width="72"
            height="72"
            preserveAspectRatio="none"
            xlinkHref="data:image/png;base64,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"
          />
        </defs>
      </svg>
    ),
  },
  {
    emoji: (
      <svg
        width="72"
        height="72"
        viewBox="0 0 72 72"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <rect width="72" height="72" fill="url(#pattern0_22_1769)" />
        <defs>
          <pattern
            id="pattern0_22_1769"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use xlinkHref="#image0_22_1769" transform="scale(0.0138889)" />
          </pattern>
          <image
            id="image0_22_1769"
            width="72"
            height="72"
            preserveAspectRatio="none"
            xlinkHref="data:image/png;base64,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"
          />
        </defs>
      </svg>
    ),
  },
  {
    emoji: (
      <svg
        width="72"
        height="72"
        viewBox="0 0 72 72"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <rect width="72" height="72" fill="url(#pattern0_22_1785)" />
        <defs>
          <pattern
            id="pattern0_22_1785"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use xlinkHref="#image0_22_1785" transform="scale(0.0138889)" />
          </pattern>
          <image
            id="image0_22_1785"
            width="72"
            height="72"
            preserveAspectRatio="none"
            xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAMAAABiM0N1AAAC91BMVEUAAADlys/MiZvnpLjLfZP0y9bgeqPwqb/2nbnQeZjHaoX6nLnLfJPmlq/IeIGcOVPBZH7ykK+9ZXy+aoDKg5nLX4DlZ43ddZzXcJW4VG/PaYzDY4DEZoLzlLLxu8zucpmWM033haq2UWu7V3XAXYDGaIfLcI/2k7XXfpTRfZe8dIPDUnnxcZn6j7PYZIjsep3BYoLPbY+vSmXFXob7lLfVbJDncpPVcZOdRF3meJrrgKLtjK74mrnjkazGW4W8UmzCVXPZc5jnc5n1faLDXob3jK/0kbTedZbNeZP3jK7icZWxUna2Vnr8kbPkaY/xg6mzS2rqg6nMWoO9WnD4j7PEaISqTWfheZbHa4bqk7KwUG64SGHKVXWfP13pgavOZY7aX4T0eJ6qQFz6hamiT2XaZY2XQVWcRVjzgqndc53yg6z1hKrxgKnlfqjhbpjfbJbodqD6iKzkfKbieKLRYozedZ/dapPieqTfeKLUYYrIWYP6iq7ufqfmdJ3UZI7ygKfifKXlcpvjcJrxi7XvibLxiLL4h6zgdqDQXojGVoHseqPreaLTaJHZZo/MWILwfqbtfKXac5zbaJHPYIvSXojxfKLSY47OY43MXYbLWoWVL0bngKrWYYvXX4jOXoj3havxgqv5harseJ/WapTXZI7uhrDvgKr3g6jveqHZaJLPW4XIVoCsS3H1f6XmeqXbbJfXZpDSXISjPFfxhq/shK7pgqzZapTTZpDRZo7DVH7GVH22TnecM0ncdp/qdZzacJmyTXXyha7aY4vLX4nCUXr1gqfpfafhcp3IX4ekNk36jLDfa5PWaZG5UnqxTGqxQFmoOlH8k7bsgqzlcJjIW3ulRmu9T2qeNk3XbZa/WH7CU3C4T3CqR2qlQmD8jrLeZ47QWYO+UnyrRGGvRWCSKD7yh7DWcZi5SmeaLEPpcpjQbJLMZorAUXSpQliqPFSMJTnnbZPXZIvNYYPEW4PNVn7CV3a3R2CMLUXZao3fYYd/IjS7T3jabZEOh6cTAAAAaHRSTlMABBIXLQj+HCtQfUg4Iwn8sWRWSCL+/PLizriPczoN/v7r5tu/lIqHW0Ie9PLv2bOgnerk1Mu9vaWgkHluNPTw49jR0M2vn4Ju/Pz58uTk4NjOzMK8qIp4ZFf49/Pz8O7t4uGfdvPZxi5Wd/AAAAueSURBVFjD3NVbSFNxHAfwYyZaa5UQPlRWdo/uUEG3l+73oAtBT0UEJ8/aJW1wdvEwnWtu7cLa0oU2N3dzutRW6WYstS1rZrCWlF2mPkgIPWjtwbCHfv//sSCwC9RT38cNPvt9f///OSP+UaYT/1XS5mVmcSel/S0zj7Ns7Y4ja46tnzKJ+JaMTG5WVhY3PePPmQzO7jxHoqujKhVaeZJLsMndvWHD4byjO3es3Tsl/c8mzdqzmvEKFQId3R+KDCxNY/HdyXg85rGEE1195zfunfx7Ko2zQRU1aIRyvqmySR8Z25XJ6nnxeFLEOBT8LpOTNq+Zmv47J/uwimQMGoe8WOw060Njh6YQKNl2GIiCgQRiHUA+/ezJv3a2rVZRABm1ctTNF4p0L8WfnxPF4yJGK+cLTI1Omlb76o6t+OU8q0U2igeQRqiAbr66SPfiefBF5k5pPGkzQDNxbWMRQBXWumPTfg5xDkttFMnjGWQaLeqmrouMLUIdcvOS0EwjLxYgqPDazQqrJLTrp+1yN4CDIJ7MqEXnZtYH2SVl+5NJKW5W2+gsKiy8ebNCUhZZPGtiJ/NETAUDYUiGz422hsZap8JXWwBSGYQwEIbwSCCtmzThdd4TE6GBkCRDIxWLYUkDbesyiHlrPckYZWShIgThkYIDczImuM/L9uNi+dXV1Ty3DK1b4FQDtDgddu2JSUkNbtZcdJ2FrCCtnJs2wcFLVWie/Hyg3CDBRmBJkbZFXGL7WXtMxWgV/HswEIbwSJJgZOVcmCktPSuXw8nNSgc1Y9tqdkH5OCDBlopNtD7SemgFwVlll+IVsRCW8EggLeFyzu08uwpyZMfmKdxlrIOhdiTBSEKFuNIabD24nMgGiJIJcTM80XcpFIysyRPZ/Zb5wzmfP1ed2bFfyjrV4LS3B9pBgm4Cpw+gfcTW+R4pZZTzG2qRA8EUlAPpw4F4zO53DHX1dVT1p1IaimKd9kBgcHAQJNSNr0PQVGLLfI+KBAgX+xaQULkX++PSKHor6CrN/akPo/jUkTNYChmEkWRGgNSh1rYlxGYEaRSCWlSrvLylpRnCSpGRZMzGeOV8MUC+VOSFkWF47vxAKRvUjWeEbavLWutPEmvne2ykplPceP0aSnlL89Wamprm6yCFhmLw2tFiSA3P5geFweB2B0qVJSUlMBBAJM+oVWBoJkBRG0/bec9ZeO0hSnnL1VcPHjTUNBdWpCwqihmH4O0SejMqk7ldpSUoeCCADFqFmIU2Yaj4XlEhOqrHjx+WX311AdLQeK3JAg8nuioCeOEh6KPR7VIqkaMcDOSD8wM05EdQbZEaHAhINQ+uFBRcedBMW0gSbUH+Dfr06LlLCZJSGWivriYhDILMLDTsp0jNOFRWVvZJAtKFgkuXChpGvAiSoW6NtFofau29dfcOklwBzFBkFCDYUbAN7WjYgiATC6FIKgqfNlzo7GygARrvVlup1gfbujsLbj16/tzt5jEkhcMYHMUYOklsHoYCRoUYQ3UoequabhQLBCaz4zsEA1uD9d1iAV8h1BqBsakgNopB9+gmQEuILTlegOTwd+Cz6lnIZ6Z14q4uU1N4HFLwAZIMvO0V8BOKsNcQBUYkEqnsHsYb5jsrBurrpxKncuB3ZUKBDt76epz+pqqRPgwN88h8eAweCTvhDCXdPR8TicSQw+v3qFRSqVQkskcZr0JQaR2oP72PyM4JMxRPyDfBVfH1Y6epqqOvr8uk6+8wtg+WlpS6nt/qfFX+qe3tl/BQOOyw+D0iKQQmilocCTEt6a4/vZxYnjPEkHD+YietBqkfOwD16Wh9KvHojsuldN25eLnmcXfPG6HX4XB4LX47C9k9fmimg2vUs3AFkXtkyELy4GGD22tuQqnCUAdd0fv+9YuPI6NfnrY87m19+27BCx5jsYATBQg3g4HgVQu77oH/I+6aYbRt6OakQWIhiLns2e2XT14+uY0yY8bL+zdu3Hg2aoj6/X6PXQRhByo2oRX1HE//Wo25xiQVhnFcEGk600JJvNTMysq2lt3sftm6rS/Val3Wda3VsI61c6JD63ayHF1oja1mdehK13WxEZgrCJtLYSEwIlAuX8CAgUHpgHJ96DngCNDW2vrS/4uT9+XH/3nel/P+X9LSZ454eKL6PtR24ethQF2/ToHEV21OqUKhgbfHZenrC7q+nbj9AEAxDhiCcw1aZB+WkZYxe8SdE9X7zsEJdeGr+PBhCiQ+0+0KGDTX9kwNaCyKqCwWg2t3JBjscr1/0O/n3eWHbz4cunsDWmSnzrXl399crK4+eqD2PUUSA+fSK8AAJ5eVt3az63NU+nBZFis3cq2ry+tZufcIxXn6EAw9OnwFWqSbAKAJ36Hb1ffBEoQRsVh86bHOoDEYLBHF1Ow0el7x2jFlC8sKh5UwaIydfX0Wi9er8Xy7fPMmFPam9hDsL2hRGZUV5u/48nAfWKKeFhBrHus0Co0hIC1VGMqoAECj52dnM6KpcOjqYF/E4QpoNIaw6f25i9RnH79xtv3Jx8J06jSfPOLOxbcvbsH+rXn+ymXxKjQBp0OnMxjG5Kec+4XBvtxmnc0c1oPM7B/wgDne0tn80TGFRh3DRdCkF/DMa9V2B7xer8LgdNo7/SZ9IBWUXhgMOvx+my5ksnrC4bDH2qN9qYbKnCXR8Q3fP5xv5fltUi90UiF1gh21z+336BcNdNRl97l9nS5diG2ymilZu19/dEAzKU3cYnbmwnJ0wVaROhxSZ8jvc4s6rPpFySEJetRVqvMplW617bPUZQuFrCCzxymFFlGizyqNRCLXSktzt26VSj/b2D63W6QUscOL5qdk4rJr0tc+JpPv9oc8UkVucfGwMYsWLtysz4qNwxrvmgVav4tVqDeb/BK3SKRk8oXWSSlRcv7UUke7j08QfFET26zXrKflVDDyWCwWPSGw0HJosKUWhnqEgKFATJVpS2YyaOLUXF1nkxJBgCRkd+t3/i4fpo81NXWoREqlSMlnEryDphXJ45l2R3NvvYiIkrQ93fr1vwFNYAtVXGVMfALv6FmePL7Cbm/vre/gIxSJq71iXp0/uKGZP7g8Pp/P43HhL4HyDlYmZ7Zye3OnGs4qop/E9pQMChq+UoDjTGYUxOXjKK6tGpUU/CqftPeq64UqPoqgKC4QCV/Bug/UkDXPEJQgoiARWEIR7uIhSUm0CAxBNpBwmSiKEhhP1TRp4yCguUdJMgbiUiABgeAF85NKX9Le2wLBR6ji4UCC4jqujKUPvIGtMspJsNQP4gpwBOFtSpoxjTJEpRUYJAgcg+IWZA5I0Muq7xnlCIpj/SCojUTnJl0etqvrqSQmlKh4GA7i81Qtw0algDaNvndPJiehdIEASCCwRC7LSJwijOU5oaSBK8Bw6jPB0sTUK8YLOL6MJELAcAzFwxD5mvTEJjYKtVohSNIBoCgJLE3JSFrZ8S8grFCWEBQ2CYoJeDxoN7ltZMKkOQ2NjY0SrVYLjjDsGQjnc4XTspPuYKPrTtdFSSCElMkBJRBgCDk84T6ztK0BUI8gYTZgSOszShDHWsbREhZ2XR2ksDqIUDKCU1ReuZiUkYDCcGQ2LWGftdXsp1CNUBpiNJKtAMPAUsJXd96nU5ROkwVVJYycNBqjvACM4RiGLs5P2B/Hamv27wdS07Rx5TOYMpkcUAKVOuvXlOkxyozivP79lZNXRYApHC/I/FX+tmNttTUAqh+bR0ur2DgDhdUBknBJerzTdTKkYPIUVkVCtfQsDgmmROXx14YfPXCytqahccGUiuj/FVmLkXsyElfFN2XGHE5RMSs/9XaWXVkgJwUz6L++QgeOtdVIppXEfypiFHNQmRx7GW83vWLQa2cOq4qJcOKrO/7+s2NtL6my4qIxxnEwkltET/uD6BurOJlxkLG1bXtxtKxEVEkRpxI8/hGVTY8vrbGgKC9nkCn5MOVvNGQD/FD0XynnH3F+Ap83A5F/hr2oAAAAAElFTkSuQmCC"
          />
        </defs>
      </svg>
    ),
  },
  {
    emoji: (
      <svg
        width="72"
        height="72"
        viewBox="0 0 72 72"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <rect width="72" height="72" fill="url(#pattern0_15_365)" />
        <defs>
          <pattern
            id="pattern0_15_365"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use xlinkHref="#image0_15_365" transform="scale(0.0138889)" />
          </pattern>
          <image
            id="image0_15_365"
            width="72"
            height="72"
            preserveAspectRatio="none"
            xlinkHref="data:image/png;base64,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"
          />
        </defs>
      </svg>
    ),
  },
  {
    emoji: (
      <svg
        width="72"
        height="72"
        viewBox="0 0 72 72"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <rect width="72" height="72" fill="url(#pattern0_8_20624)" />
        <defs>
          <pattern
            id="pattern0_8_20624"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use xlinkHref="#image0_8_20624" transform="scale(0.0138889)" />
          </pattern>
          <image
            id="image0_8_20624"
            width="72"
            height="72"
            preserveAspectRatio="none"
            xlinkHref="data:image/png;base64,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"
          />
        </defs>
      </svg>
    ),
  },
];

export const AnimatedGrid = () => {
  return (
    <section>
      <div className="divide-border-neutral/30 grid h-screen w-full grid-cols-1 divide-x lg:h-90 lg:grid-cols-2">
        <CardBlury></CardBlury>
        <GridApple></GridApple>
      </div>
    </section>
  );
};

const GridApple = () => {
  return (
    <div className="relative z-auto">
      <div className="absolute inset-0 z-1 bg-black/5 backdrop-blur-[0.5px]"></div>
      <div className="absolute inset-0 z-0 bg-white/5"></div>
      <div
        className={cn(
          "absolute inset-x-10 top-12 z-10 flex flex-col sm:inset-x-50 lg:inset-x-18 xl:inset-x-27",
        )}
      >
        <motion.div
          initial={{
            opacity: 0,
            filter: "blur(10px)",
          }}
          animate={{
            opacity: [0, 1, 1, 0],
            filter: ["blur(10px)", "blur(0px)", "blur(0px)", "blur(10px)"],
          }}
          transition={{
            duration: 12,
            times: [0, 0.05, 0.95, 1],
            repeat: Infinity,
            repeatDelay: 4,
            repeatType: "loop",
          }}
          className="relative flex h-14 w-65 cursor-pointer flex-col items-center rounded-full bg-white text-black xl:h-14.5 xl:w-78"
        >
          <div className="absolute top-0.5 mx-auto text-[10px] text-neutral-500">
            Tap and hold to super react
          </div>
          <div className="absolute -bottom-1 flex">
            {emojis.map((collection, idx) => {
              return (
                <motion.div
                  whileHover={{
                    y: -20,
                    scale: 1.2,
                  }}
                  transition={{
                    duration: 0.2,
                  }}
                  whileTap={{
                    scale: 1.07,
                  }}
                  key={idx}
                  className="h-15 w-9 scale-39 xl:h-15 xl:w-11 xl:scale-42"
                >
                  {collection.emoji}
                </motion.div>
              );
            })}
            <IconPlus
              size={30}
              className="relative top-4 left-0.5 text-neutral-500"
            ></IconPlus>
          </div>
        </motion.div>
        <motion.div
          initial={{
            opacity: 0,
            filter: "blur(10px)",
          }}
          animate={{
            opacity: [0, 1, 1, 0],
            filter: ["blur(10px)", "blur(0px)", "blur(0px)", "blur(10px)"],
          }}
          transition={{
            duration: 12,
            delay: 0.5,
            times: [0, 0.05, 0.95, 1],
            repeat: Infinity,
            repeatDelay: 4,
            repeatType: "loop",
          }}
          className="mt-1 h-18 w-48 cursor-pointer rounded-2xl bg-white/96 xl:h-21 xl:w-51"
        >
          <p className="px-2 py-2 text-[12px] text-neutral-700 xl:px-3 xl:py-3 xl:text-[13px]">
            Turning your ideas into a stunning user-friendly websites that speak
            for themselves.
          </p>
        </motion.div>
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: [0, 1, 1, 0],
            filter: ["blur(10px)", "blur(0px)", "blur(0px)", "blur(10px)"],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            times: [0, 0.05, 0.95, 1],
            repeatDelay: 4,
            delay: 1,
            repeatType: "loop",
          }}
          className="mt-2 flex h-32 w-25 cursor-pointer flex-col divide-y divide-neutral-300 rounded-lg bg-white/96 text-black"
        >
          <div className="py-0.5 pl-2 text-[11px] text-neutral-400">
            9:23 Pm
          </div>
          <div className="flex justify-between px-1.5 py-[3px] text-[12px] text-neutral-700">
            Reply
            <IconCornerUpLeft
              size={20}
              className="text-neutral-800"
            ></IconCornerUpLeft>
          </div>
          <div className="flex justify-between px-1.5 py-[3px] text-[12px] text-neutral-700">
            Forward
            <IconSend size={17} className="text-neutral-800"></IconSend>
          </div>
          <div className="flex justify-between px-1.5 py-[3px] text-[12px] text-neutral-700">
            Copy
            <IconCopy size={17} className={"text-neutral-800"}></IconCopy>
          </div>
          <div className="flex justify-between px-1.5 py-[3px] text-[12px] text-red-400">
            Report
            <IconMessageExclamation
              className="text-red-400"
              size={18}
            ></IconMessageExclamation>
          </div>
        </motion.div>
      </div>

      <div
        className={cn(
          "absolute inset-0",
          "[background-size:16px_16px]",
          "[background-image:radial-gradient(#e879f9_1px,transparent_1px)] opacity-40",
          // "dark:[background-image:radial-gradient(oklch(45.2% 0.211 324.591)_1px,transparent_1px)]",
        )}
      ></div>
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black_100%)]"></div>
    </div>
  );
};

const CardBlury = () => {
  return (
    <div className="relative overflow-hidden bg-black/87">
      <div className="absolute inset-0 z-0 bg-white/6"></div>
      <div
        className={cn(
          "absolute inset-x-10 inset-y-40 z-2 flex flex-col items-center justify-center",
          "text-center sm:inset-y-40 md:inset-x-50 lg:inset-x-20 lg:inset-y-49 xl:inset-x-35",
        )}
      >
        <h1 className="font-sans text-3xl font-semibold text-neutral-100 md:text-4xl xl:text-4xl">
          The{" "}
          <span className="bg-linear-[25deg,oklch(0.969_0.016_293.756)_30%,oklch(0.37_0.013_285.805)_80%] bg-clip-text text-transparent">
            Best
          </span>
        </h1>
        <p className="sm:text-md mt-2 text-[13px] text-neutral-400">
          Design is our playground, and we love to break the rules
        </p>
      </div>
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:16px_16px]",
          "[background-image:radial-gradient(#e879f9_1px,transparent_1px)] opacity-50",
          // "dark:[background-image:radial-gradient(oklch(45.2% 0.211 324.591)_1px,transparent_1px)]",
        )}
      ></div>
      <div className="absolute flex h-full w-full items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_top_right,black_55%,transparent_100%)]"></div>
    </div>
  );
};
