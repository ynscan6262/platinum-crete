"use client";

import { motion, type Variants } from "framer-motion";
import Link from "next/link";
import { CheckCircle2, DollarSign, Users } from "lucide-react";
import CTABanner from "@/components/CTABanner";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const stats = [
  { value: "500+", label: "Projects Completed" },
  { value: "15+",  label: "Years of Experience" },
  { value: "100%", label: "Satisfaction Guaranteed" },
  { value: "GTA",  label: "Wide Service Area" },
];

const values = [
  { icon: CheckCircle2, title: "Quality First",    description: "We never cut corners. Every pour, every finish, every form meets the highest standard." },
  { icon: DollarSign,   title: "Honest Pricing",   description: "No hidden fees. No surprise charges. You'll always know exactly what you're paying for." },
  { icon: Users,        title: "Community Proud",  description: "We're a GTA-based business and proud of it. Our reputation is built on word of mouth." },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#111111] pt-36 pb-20 px-6 noise-overlay relative">
        <div className="max-w-7xl mx-auto">
          <p className="text-[#A8A9AD] font-inter text-sm mb-4">
            <Link href="/" className="hover:text-[#E87722] transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-[#E87722]">About</span>
          </p>
          <div className="flex items-start gap-6">
            <div className="w-1 h-20 bg-[#E87722] shrink-0 mt-1" />
            <div>
              <h1 className="text-white font-montserrat font-black text-5xl md:text-6xl leading-tight">
                About PLATINUM-CRETE
              </h1>
              <p className="text-[#A8A9AD] font-inter text-lg mt-4 max-w-xl">
                Built on concrete. Driven by excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="bg-[#F5F5F5] py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="relative pl-8"
          >
            <div className="absolute left-0 top-0 w-1 h-full bg-[#E87722]" />
            <p className="text-[#E87722] font-montserrat font-bold text-sm uppercase tracking-[0.2em] mb-4">
              Our Story
            </p>
            <h2 className="text-[#111111] font-montserrat font-extrabold text-4xl md:text-5xl leading-tight mb-8">
              Built on Concrete.<br />Driven by Excellence.
            </h2>
            {/* TODO: Add real company history, founding year, team photos, and owner bio */}
            <div className="space-y-5 text-gray-600 font-inter leading-relaxed text-base">
              <p>
                PLATINUM-CRETE was founded with one mission: to deliver concrete work that homeowners and businesses in the Greater Toronto Area could be truly proud of. What started as a passion for precision craftsmanship has grown into one of the GTA&apos;s most trusted concrete contracting companies.
              </p>
              <p>
                We believe that every project — no matter how large or small — deserves the same level of care, skill, and attention to detail. From the initial consultation to the final pour, we treat every job as if it were our own property.
              </p>
              <p>
                Our team brings years of hands-on experience in all aspects of concrete construction, from residential steps and driveways to large retaining walls and commercial forming. We are fully insured, committed to safety, and dedicated to exceeding expectations on every single job.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-[#111111] py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="text-center mb-16"
          >
            <p className="text-[#E87722] font-montserrat font-bold text-sm uppercase tracking-[0.2em] mb-4">What We Stand For</p>
            <h2 className="text-white font-montserrat font-extrabold text-4xl md:text-5xl">Our Values</h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {values.map((v, i) => (
              <motion.div key={i} variants={fadeUp} className="bg-[#1A1A1A] border border-[#2A2A2A] p-8 flex flex-col gap-4">
                <div className="text-[#E87722]">
                  <v.icon size={36} strokeWidth={1.5} />
                </div>
                <h3 className="text-white font-montserrat font-bold text-xl">{v.title}</h3>
                <p className="text-[#A8A9AD] font-inter text-sm leading-relaxed">{v.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-[#1A1A1A] py-16 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } } }}
              className="text-center"
            >
              <p className="text-[#E87722] font-montserrat font-black text-4xl md:text-5xl">{stat.value}</p>
              <p className="text-[#A8A9AD] font-inter text-sm mt-2">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <CTABanner />
    </>
  );
}
