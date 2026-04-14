"use client";

import { useState } from "react";
import { motion, type Variants } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { X } from "lucide-react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
};

// Real project photos mapped to categories
const galleryItems = [
  { id: 1, src: "/gallery/project-1.jpg", label: "Concrete Forming — Toronto, ON",        category: "Commercial" },
  { id: 2, src: "/gallery/project-2.jpg", label: "Concrete Forming — Vaughan, ON",        category: "Commercial" },
  { id: 3, src: "/gallery/project-3.jpg", label: "Foundation Work — Mississauga, ON",     category: "Commercial" },
  { id: 4, src: "/gallery/project-4.jpg", label: "Concrete Structure — Brampton, ON",     category: "Commercial" },
  { id: 5, src: "/gallery/project-5.jpg", label: "Commercial Forming — Markham, ON",      category: "Commercial" },
  { id: 6, src: "/gallery/project-6.jpg", label: "Concrete Pool Surround — Toronto, ON",  category: "Pool Areas" },
  { id: 7, src: "/gallery/project-7.jpg", label: "Walkway & Steps — Toronto, ON",         category: "Steps & Patios" },
  { id: 8, src: "/gallery/project-8.jpg", label: "Retaining Wall — Toronto, ON",          category: "Retaining Walls" },
  { id: 9, src: "/gallery/project-9.jpg", label: "Retaining Wall — Toronto, ON",          category: "Retaining Walls" },
];

const filters = ["All", "Driveways", "Pool Areas", "Retaining Walls", "Steps & Patios", "Commercial"];

export default function GalleryPage() {
  const [active, setActive] = useState("All");
  const [lightbox, setLightbox] = useState<string | null>(null);

  const filtered = active === "All" ? galleryItems : galleryItems.filter((i) => i.category === active);

  return (
    <>
      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            aria-label="Close lightbox"
            className="absolute top-6 right-6 text-white hover:text-[#E87722] transition-colors"
            onClick={() => setLightbox(null)}
          >
            <X size={32} />
          </button>
          <div className="relative max-w-4xl w-full max-h-[80vh] aspect-video">
            <Image src={lightbox} alt="Project photo" fill className="object-contain" sizes="100vw" />
          </div>
        </div>
      )}

      {/* Hero */}
      <section className="bg-[#111111] pt-36 pb-20 px-6 noise-overlay relative">
        <div className="max-w-7xl mx-auto">
          <p className="text-[#A8A9AD] font-inter text-sm mb-4">
            <Link href="/" className="hover:text-[#E87722] transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-[#E87722]">Gallery</span>
          </p>
          <div className="flex items-start gap-6">
            <div className="w-1 h-20 bg-[#E87722] shrink-0 mt-1" />
            <div>
              <h1 className="text-white font-montserrat font-black text-5xl md:text-6xl">Our Work</h1>
              <p className="text-[#A8A9AD] font-inter text-lg mt-4 max-w-xl">
                Every project tells a story of precision and craftsmanship.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="bg-[#111111] pb-8 px-6 sticky top-[72px] z-40 border-b border-[#2A2A2A]">
        <div className="max-w-7xl mx-auto flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`shrink-0 font-montserrat font-bold text-sm px-5 py-2.5 transition-all duration-200 ${
                active === f
                  ? "bg-[#E87722] text-white"
                  : "border border-[#2A2A2A] text-[#A8A9AD] hover:border-[#E87722] hover:text-[#E87722]"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </section>

      {/* Grid */}
      <section className="bg-[#111111] py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            key={active}
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {filtered.map((item) => (
              <motion.div
                key={item.id}
                variants={fadeUp}
                className="relative group h-72 overflow-hidden bg-[#1A1A1A] border border-[#2A2A2A] cursor-pointer"
                onClick={() => item.src && setLightbox(item.src)}
              >
                {item.src ? (
                  <Image
                    src={item.src}
                    alt={item.label}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <p className="text-[#A8A9AD] font-inter text-sm text-center px-4">{item.label}</p>
                  </div>
                )}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/55 transition-all duration-300 flex flex-col items-center justify-end pb-6 px-4">
                  <p className="text-white font-inter text-sm text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 mb-1">{item.label}</p>
                  {item.src && (
                    <span className="text-[#E87722] font-montserrat font-bold text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 uppercase tracking-widest">
                      View Project
                    </span>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}
