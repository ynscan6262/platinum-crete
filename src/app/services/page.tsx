"use client";

import { motion, type Variants } from "framer-motion";
import Link from "next/link";
import {
  Shield, Droplets, ArrowUpRight, Layers, Car, Home as HomeIcon,
  Palette, Gem, Wrench, Building2, Anchor, MapPin,
} from "lucide-react";
import ServiceCard from "@/components/ServiceCard";
import CTABanner from "@/components/CTABanner";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const services = [
  { icon: Shield,      title: "Concrete Retaining Walls",     description: "We design and build structurally sound concrete retaining walls that prevent erosion, manage grade changes, and add lasting value to your property. Built to withstand the GTA's freeze-thaw cycles." },
  { icon: Droplets,    title: "Concrete Pool Surrounds",      description: "Transform your backyard into a luxury retreat with a professionally finished concrete pool surround. Slip-resistant, durable, and custom-finished to complement your pool and landscape." },
  { icon: ArrowUpRight,title: "Concrete Steps",               description: "Precision-formed concrete steps built for safety, durability, and curb appeal. Whether front entrance or backyard access, we deliver steps that make a statement and stand the test of time." },
  { icon: Layers,      title: "Concrete Forming",             description: "Expert forming services for foundations, walls, columns, and custom concrete structures. We use quality formwork systems to ensure perfect shape, alignment, and finish on every pour." },
  { icon: Car,         title: "Concrete Driveways",           description: "Upgrade your home's first impression with a professionally poured concrete driveway. Durable, low-maintenance, and available in standard or decorative finishes to suit your style." },
  { icon: HomeIcon,    title: "Concrete Patios",              description: "Create the perfect outdoor living space with a custom concrete patio. From simple flat pours to decorative stamped finishes, we build patios designed for both beauty and longevity." },
  { icon: Palette,     title: "Stamped Concrete",             description: "Add elegance and character to any concrete surface with our stamped concrete services. Mimicking the look of stone, brick, or slate at a fraction of the cost — without sacrificing durability." },
  { icon: Gem,         title: "Exposed Aggregate",            description: "Exposed aggregate concrete delivers a natural, textured finish that's both visually stunning and slip-resistant. Perfect for driveways, walkways, patios, and pool surrounds." },
  { icon: Wrench,      title: "Concrete Repair & Restoration",description: "Cracked, spalled, or settling concrete? Our repair and restoration services bring damaged surfaces back to life — extending lifespan and restoring the look of your existing concrete." },
  { icon: Building2,   title: "Commercial Concrete Work",     description: "We handle concrete contracts of all scales for commercial and industrial clients across the GTA. From parking lots to structural slabs, we bring the same precision to every commercial project." },
  { icon: Anchor,      title: "Foundation Work",              description: "Solid foundations are the backbone of every structure. We pour residential and commercial concrete foundations with precision forming, proper reinforcement, and quality concrete mixes." },
  { icon: MapPin,      title: "Sidewalks & Curbs",            description: "Professional concrete sidewalk and curb installation for residential and municipal projects. Clean edges, smooth surfaces, and compliance with local accessibility and code standards." },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#111111] pt-36 pb-20 px-6 noise-overlay relative">
        <div className="max-w-7xl mx-auto">
          <p className="text-[#A8A9AD] font-inter text-sm mb-4">
            <Link href="/" className="hover:text-[#E87722] transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-[#E87722]">Services</span>
          </p>
          <div className="flex items-start gap-6">
            <div className="w-1 h-20 bg-[#E87722] shrink-0 mt-1" />
            <div>
              <h1 className="text-white font-montserrat font-black text-5xl md:text-6xl leading-tight">
                Our Services
              </h1>
              <p className="text-[#A8A9AD] font-inter text-lg mt-4 max-w-2xl">
                From residential driveways to large-scale commercial concrete work, PLATINUM-CRETE delivers exceptional results across the Greater Toronto Area.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-[#111111] pb-24 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {services.map((s, i) => (
              <ServiceCard key={i} icon={s.icon} title={s.title} description={s.description} showButton />
            ))}
          </motion.div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
