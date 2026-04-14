"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, type Variants } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  Shield, Droplets, ArrowUpRight, Layers, Car, Home as HomeIcon,
  Palette, Gem, Wrench, Building2, Anchor, MapPin,
  CheckCircle2, Clock, Star, MapPinned, ChevronDown,
} from "lucide-react";
import ServiceCard from "@/components/ServiceCard";
import ReviewCard from "@/components/ReviewCard";
import CTABanner from "@/components/CTABanner";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const services = [
  { icon: Shield,      title: "Concrete Retaining Walls",  description: "We design and build structurally sound concrete retaining walls that prevent erosion, manage grade changes, and add lasting value to your property." },
  { icon: Droplets,    title: "Concrete Pool Surrounds",   description: "Transform your backyard into a luxury retreat with a professionally finished concrete pool surround. Slip-resistant, durable, and custom-finished." },
  { icon: ArrowUpRight,title: "Concrete Steps",            description: "Precision-formed concrete steps built for safety, durability, and curb appeal. We deliver steps that make a statement and stand the test of time." },
  { icon: Car,         title: "Concrete Driveways",        description: "Upgrade your home's first impression with a professionally poured concrete driveway. Durable, low-maintenance, and available in decorative finishes." },
  { icon: Palette,     title: "Stamped Concrete",          description: "Add elegance and character to any concrete surface. Mimicking the look of stone, brick, or slate at a fraction of the cost." },
  { icon: Gem,         title: "Exposed Aggregate",         description: "Exposed aggregate delivers a natural, textured finish that's both visually stunning and slip-resistant. Perfect for driveways, walkways, and patios." },
];

const stats = [
  { value: "500+", label: "Projects Completed" },
  { value: "15+",  label: "Years of Experience" },
  { value: "100%", label: "Satisfaction Guaranteed" },
  { value: "GTA",  label: "Wide Service Area" },
];

const whyUs = [
  { icon: Gem,         title: "Premium Materials",     description: "We use only the highest-grade concrete and forming materials, ensuring durability that lasts decades." },
  { icon: CheckCircle2,title: "Expert Craftsmanship",  description: "Our experienced team delivers flawless finishes on every project, no matter the size." },
  { icon: Clock,       title: "On-Time Delivery",      description: "We respect your time and schedule. Every project is completed on deadline, without compromise." },
  { icon: MapPinned,   title: "GTA Coverage",          description: "From Toronto to Mississauga, Brampton to Markham — we serve the entire Greater Toronto Area." },
];

const reviews = [
  { name: "Michael T.",       location: "Mississauga, ON", stars: 5, text: "PLATINUM-CRETE completely transformed our backyard. The pool surround and patio turned out absolutely stunning. Professional, clean, and on time — couldn't ask for more." },
  { name: "Sarah & James K.", location: "Toronto, ON",     stars: 5, text: "We had our driveway and front steps redone and the results exceeded our expectations. The crew was respectful of our property and the quality of work is top notch. Highly recommend!" },
  { name: "David M.",         location: "Brampton, ON",    stars: 5, text: "Had them build a retaining wall in our backyard — big job, done flawlessly. Fair pricing, great communication, and the finish is perfect. These guys know concrete." },
];

export default function HomePage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 600], [0, -180]);

  const aboutRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: aboutProgress } = useScroll({ target: aboutRef, offset: ["start end", "end start"] });
  const imgParallax = useTransform(aboutProgress, [0, 1], [-40, 40]);

  return (
    <>
      {/* ── HERO ── */}
      <section ref={heroRef} className="relative h-screen w-full overflow-hidden flex items-center justify-center">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="/hero-video.mp4"
          autoPlay
          muted
          loop
          playsInline
          poster="/gallery/project-1.jpg"
        />
        <div className="absolute inset-0 bg-black/55" />

        <motion.div style={{ y: heroY }} className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <p className="text-[#A8A9AD] font-inter text-sm uppercase tracking-[0.2em] mb-6">
            Toronto&apos;s Premium Concrete Specialists
          </p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl text-white font-montserrat font-black leading-tight mb-6">
            BUILT TO<br />
            <span className="text-[#E87722]">IMPRESS.</span>
          </h1>
          <p className="text-[#D4D5D8] font-inter text-lg max-w-xl mx-auto mb-10">
            Serving the Greater Toronto Area with craftsmanship that stands the test of time.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-[#E87722] hover:bg-[#CF6A1A] text-white font-montserrat font-bold text-sm px-8 py-4 transition-all duration-300 hover:-translate-y-0.5"
            >
              Get a Free Quote
            </Link>
            <Link
              href="/gallery"
              className="border border-white hover:border-[#E87722] hover:text-[#E87722] text-white font-montserrat font-bold text-sm px-8 py-4 transition-all duration-300"
            >
              View Our Work
            </Link>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[#A8A9AD]"
        >
          <ChevronDown size={28} />
        </motion.div>
      </section>

      {/* ── STATS BAR ── */}
      <section className="bg-[#1A1A1A] py-12 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } } }}
              className="text-center"
            >
              <p className="text-[#E87722] font-montserrat font-black text-4xl md:text-5xl">{stat.value}</p>
              <p className="text-[#A8A9AD] font-inter text-sm mt-2">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── ABOUT SNAPSHOT ── */}
      <section ref={aboutRef} className="bg-[#F5F5F5] py-24 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="relative pl-8"
          >
            <div className="absolute left-0 top-0 w-1 h-full bg-[#E87722]" />
            <p className="text-[#E87722] font-montserrat font-bold text-sm uppercase tracking-[0.2em] mb-4">
              Who We Are
            </p>
            <h2 className="text-[#111111] font-montserrat font-extrabold text-4xl md:text-5xl leading-tight mb-6">
              Concrete Excellence,<br />Every Pour.
            </h2>
            <p className="text-gray-600 font-inter leading-relaxed mb-8">
              At PLATINUM-CRETE, we bring decades of hands-on experience to every residential and commercial concrete project in the Greater Toronto Area. From foundations to finishing, we pour precision into every job.
            </p>
            <Link
              href="/about"
              className="text-[#E87722] font-montserrat font-bold text-sm hover:text-[#CF6A1A] transition-colors duration-200 inline-flex items-center gap-2"
            >
              Learn More About Us <ArrowUpRight size={16} />
            </Link>
          </motion.div>

          {/* Right — real project photo */}
          <motion.div style={{ y: imgParallax }} className="relative h-[480px] overflow-hidden">
            <Image
              src="/gallery/project-6.jpg"
              alt="PLATINUM-CRETE project photo"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </motion.div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="bg-[#111111] py-24 px-6 noise-overlay">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="text-center mb-16"
          >
            <p className="text-[#E87722] font-montserrat font-bold text-sm uppercase tracking-[0.2em] mb-4">
              What We Do
            </p>
            <h2 className="text-white font-montserrat font-extrabold text-4xl md:text-5xl">
              Expert Concrete Services<br />Across the GTA
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {services.map((s, i) => (
              <ServiceCard key={i} icon={s.icon} title={s.title} description={s.description} />
            ))}
          </motion.div>

          <div className="text-center mt-12">
            <Link
              href="/services"
              className="inline-block bg-[#E87722] hover:bg-[#CF6A1A] text-white font-montserrat font-bold text-sm px-10 py-4 transition-all duration-300 hover:-translate-y-0.5"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <section className="bg-[#F5F5F5] py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="mb-16"
          >
            <p className="text-[#E87722] font-montserrat font-bold text-sm uppercase tracking-[0.2em] mb-4">
              Why Platinum-Crete
            </p>
            <h2 className="text-[#111111] font-montserrat font-extrabold text-4xl md:text-5xl leading-tight">
              The Standard Others<br />Strive For.
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {whyUs.map((item, i) => (
              <motion.div key={i} variants={fadeUp} className="flex flex-col gap-4">
                <div className="text-[#E87722]">
                  <item.icon size={36} strokeWidth={1.5} />
                </div>
                <h3 className="text-[#111111] font-montserrat font-bold text-lg">{item.title}</h3>
                <p className="text-gray-600 font-inter text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── GALLERY PREVIEW ── */}
      <section className="bg-[#111111] py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="text-center mb-12"
          >
            <p className="text-[#E87722] font-montserrat font-bold text-sm uppercase tracking-[0.2em] mb-4">Our Work</p>
            <h2 className="text-white font-montserrat font-extrabold text-4xl md:text-5xl">Real Projects.<br />Real Results.</h2>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((n) => (
              <motion.div key={n} variants={fadeUp} className="relative group h-64 overflow-hidden bg-[#1A1A1A]">
                <Image
                  src={`/gallery/project-${n}.jpg`}
                  alt={`Project ${n}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-300 flex items-center justify-center">
                  <span className="text-[#E87722] font-montserrat font-bold text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">View Project</span>
                </div>
              </motion.div>
            ))}
            <motion.div variants={fadeUp} className="relative h-64 bg-[#1A1A1A] border border-[#2A2A2A] flex items-center justify-center">
              <Link href="/gallery" className="text-center">
                <p className="text-[#E87722] font-montserrat font-bold text-lg mb-2">View All Projects</p>
                <p className="text-[#A8A9AD] font-inter text-sm">See our full gallery →</p>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── REVIEWS ── */}
      <section className="bg-[#1A1A1A] py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="text-center mb-16"
          >
            <p className="text-[#E87722] font-montserrat font-bold text-sm uppercase tracking-[0.2em] mb-4">
              What Our Clients Say
            </p>
            <h2 className="text-white font-montserrat font-extrabold text-4xl md:text-5xl">
              Real Results.<br />Real Satisfaction.
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {/* TODO: Replace placeholder reviews with real client testimonials */}
            {reviews.map((r, i) => (
              <ReviewCard key={i} {...r} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <CTABanner />
    </>
  );
}
