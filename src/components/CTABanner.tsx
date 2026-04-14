"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

export default function CTABanner() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [-20, 20]);

  return (
    <section ref={ref} className="relative overflow-hidden bg-[#E87722] py-24 px-6">
      <motion.div style={{ y }} className="relative z-10 max-w-4xl mx-auto text-center">
        <h2 className="text-white font-montserrat font-black text-4xl md:text-5xl lg:text-6xl leading-tight mb-6">
          Ready to Start<br />Your Project?
        </h2>
        <p className="text-white/90 font-inter text-lg mb-10 max-w-xl mx-auto">
          Contact us today for a free, no-obligation estimate. We serve all areas across the Greater Toronto Area.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-[#111111] hover:bg-[#1A1A1A] text-white font-montserrat font-bold text-base px-10 py-4 transition-all duration-300 hover:-translate-y-1"
        >
          Get Your Free Quote →
        </Link>
      </motion.div>
    </section>
  );
}
