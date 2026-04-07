import { motion } from "framer-motion";
import { useState, useEffect } from "react";

import { TechCubesCanvas } from "./canvas";
import { styles } from "../styles";
import { cn } from "../utils/lib";

// ================= MOBILE DETECT =================
const useMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(max-width: 640px)");
    setIsMobile(media.matches);

    const listener = (e: any) => setIsMobile(e.matches);
    media.addEventListener("change", listener);

    return () => media.removeEventListener("change", listener);
  }, []);

  return isMobile;
};

// ================= HERO =================
export const Hero = () => {
  const isMobile = useMobile();

  return isMobile ? <HeroMobile /> : <HeroDesktop />;
};

// ================= DESKTOP =================
const HeroDesktop = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={cn(
          styles.paddingX,
          "absolute inset-0 top-[160px] left-[80px] max-w-7xl flex flex-row items-start gap-5 z-10 pointer-events-none"
        )}
      >
        {/* Line */}
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        {/* Content */}
        <div>
          <h1 className={cn(styles.heroHeadText, "text-white")}>
            Hi, I'm <span className="text-[#915eff]">HungAnh</span>
          </h1>

          <p className={cn(styles.heroSubText, "mt-2 text-white-100")}>
            I build modern websites using React and WordPress, <br className="sm:block hidden" />
            focusing on performance and user experience.
          </p>

          <div className="mt-5 flex gap-4 pointer-events-auto">
            <a
              href="/IT-WebDeveloper-Võ Mai Hùng Anh.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 bg-[#915eff] text-white rounded-lg hover:bg-purple-700 transition"
            >
              View CV
            </a>

            <a
              href="/IT-WebDeveloper-Võ Mai Hùng Anh.pdf"
              download
              className="px-5 py-2 border border-white text-white rounded-lg hover:bg-white hover:text-black transition"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>

      {/* 3D */}
      <TechCubesCanvas />

      {/* Scroll */}
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center z-10">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

// ================= MOBILE =================
const HeroMobile = () => {
  return (
    <section className="relative w-full min-h-screen px-5 pt-24">
      
      {/* TEXT */}
      <div>
        <h1 className="text-white text-[28px] font-bold leading-tight">
          Hi, I'm <span className="text-[#915eff]">HungAnh</span>
        </h1>

        <p className="mt-3 text-gray-300 text-[14px]">
          I build modern websites using React and WordPress,
          focusing on performance and user experience.
        </p>

        <div className="mt-5 flex flex-wrap gap-3">
          <a
            href="/IT-WebDeveloper-Võ Mai Hùng Anh.pdf"
            target="_blank"
            className="px-4 py-2 bg-[#915eff] text-white rounded-lg"
          >
            View CV
          </a>

          <a
            href="/IT-WebDeveloper-Võ Mai Hùng Anh.pdf"
            download
            className="px-4 py-2 border border-white text-white rounded-lg"
          >
            Download CV
          </a>
        </div>
      </div>

      {/* 3D */}
      <div className="mt-10 h-[400px]">
        <TechCubesCanvas />
      </div>
    </section>
  );
};