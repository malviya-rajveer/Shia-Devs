import { cn } from "@/lib/utils";

export const Footer = () => {
  return (
    <footer className="">
      <div className="relative mt-40 grid h-[65vh] w-full grid-cols-6 sm:mt-0 sm:grid-cols-8">
        <div className="hidden flex-col items-center justify-center sm:col-span-3 sm:flex xl:col-span-2">
          <div className="relative z-10 mb-20 flex gap-1.5 text-3xl text-neutral-200">
            <div className="relative bottom-1.5 flex scale-130 items-center stroke-neutral-200">
              <svg
                height={44}
                width={44}
                viewBox="0 0 15 20"
                className="mt-0.5 flex"
              >
                <circle
                  r={4.5}
                  cy={10}
                  cx={10}
                  fill="url(#logo_id)"
                  strokeWidth={0.6}
                  stroke="current color"
                ></circle>
                <defs>
                  <linearGradient
                    id="logo_id"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="rotate(45)"
                  >
                    <stop
                      offset="50%"
                      stopColor="#ffd166"
                      stopOpacity="1"
                    ></stop>
                    {/* <stop offset="40%" stop-color="#9E00FF" stopOpacity="1"></stop> */}
                    <stop
                      offset="100%"
                      stopColor="#9E00FF"
                      stopOpacity="1"
                    ></stop>
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <text>Shia Devs</text>
          </div>
        </div>
        <div></div>
        <div className="relative z-10 flex flex-col gap-5 pt-15 text-sm text-neutral-300">
          <h3 className="text-neutral-400">Product</h3>
          <h3>Workflow API</h3>
          <h3>Agent Builder</h3>
          <h3>Simulation</h3>
          <h3>Integrations</h3>
          <h3>Multi Agent</h3>
          <h3></h3>
        </div>
        <div className="relative left-8 z-10 flex flex-col gap-5.5 pt-15 text-sm text-neutral-300">
          <h3 className="text-neutral-400">Company</h3>
          <h3>Sign In</h3>
          <h3>Contact</h3>
          <h3>Pricing</h3>
          <h3>Careers</h3>
          <h3>Docs</h3>
          <h3>Changelog</h3>
          <h3></h3>
        </div>
        <div className="relative left-13 z-10 flex flex-col gap-5 pt-15 text-sm text-neutral-300">
          <h3 className="text-neutral-400">Company</h3>
          <h3>Legal</h3>
          <h3>Privacy Policy</h3>
          <h3>Terms of service</h3>
          <h3>Cookie Policy</h3>
        </div>
        <div
          className={cn(
            "absolute inset-0",
            "[background-size:16px_16px]",
            "[background-image:radial-gradient(#e879f9_1px,transparent_1px)] opacity-50",
            "dark:[background-image:radial-gradient(oklch(45.2% 0.211 324.591)_1px,transparent_1px)]",
          )}
        ></div>

        <div className="absolute flex h-full w-full items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_top_right,black_55%,transparent_100%)]"></div>
      </div>
    </footer>
  );
};
