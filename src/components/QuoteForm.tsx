"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";

const services = [
  "Concrete Retaining Walls",
  "Concrete Pool Surrounds",
  "Concrete Steps",
  "Concrete Forming",
  "Concrete Driveways",
  "Concrete Patios",
  "Stamped Concrete",
  "Exposed Aggregate",
  "Concrete Repair & Restoration",
  "Commercial Concrete Work",
  "Foundation Work",
  "Sidewalks & Curbs",
];

type FormData = {
  fullName: string;
  phone: string;
  email: string;
  service: string;
  description: string;
  contactMethod: "Phone" | "Email";
};

export default function QuoteForm() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    /* TODO: Connect form to email service (e.g., Resend, EmailJS, or Formspree) */
    console.log("Form submitted:", data);
    setSubmitted(true);
  };

  const inputClass =
    "w-full bg-[#111111] border border-[#A8A9AD]/30 text-white font-inter text-sm px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#E87722] focus:border-transparent transition-all duration-200 placeholder:text-[#A8A9AD]/50";
  const labelClass = "block text-[#A8A9AD] font-inter text-sm mb-2";
  const errorClass = "text-red-400 font-inter text-xs mt-1";

  if (submitted) {
    return (
      <div className="bg-[#1A1A1A] border border-[#E87722] p-12 text-center">
        <div className="w-16 h-16 bg-[#E87722] rounded-full flex items-center justify-center mx-auto mb-6">
          <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-white font-montserrat font-bold text-2xl mb-3">Request Received!</h3>
        <p className="text-[#A8A9AD] font-inter">Thank you! We&apos;ll be in touch within 24 hours.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="bg-[#1A1A1A] p-8 flex flex-col gap-6">
      <h3 className="text-white font-montserrat font-bold text-2xl">Get a Free Quote</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className={labelClass}>Full Name *</label>
          <input
            {...register("fullName", { required: "Full name is required" })}
            type="text"
            placeholder="John Smith"
            className={inputClass}
          />
          {errors.fullName && <p className={errorClass}>{errors.fullName.message}</p>}
        </div>
        <div>
          <label className={labelClass}>Phone Number *</label>
          <input
            {...register("phone", { required: "Phone number is required" })}
            type="tel"
            placeholder="+1 (416) 000-0000"
            className={inputClass}
          />
          {errors.phone && <p className={errorClass}>{errors.phone.message}</p>}
        </div>
      </div>

      <div>
        <label className={labelClass}>Email Address *</label>
        <input
          {...register("email", { required: "Email is required", pattern: { value: /^\S+@\S+$/i, message: "Invalid email" } })}
          type="email"
          placeholder="john@example.com"
          className={inputClass}
        />
        {errors.email && <p className={errorClass}>{errors.email.message}</p>}
      </div>

      <div>
        <label className={labelClass}>Service Needed *</label>
        <select
          {...register("service", { required: "Please select a service" })}
          className={`${inputClass} cursor-pointer`}
          defaultValue=""
        >
          <option value="" disabled>Select a service...</option>
          {services.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
        {errors.service && <p className={errorClass}>{errors.service.message}</p>}
      </div>

      <div>
        <label className={labelClass}>Project Description *</label>
        <textarea
          {...register("description", { required: "Please describe your project" })}
          rows={4}
          placeholder="Describe your project..."
          className={inputClass}
        />
        {errors.description && <p className={errorClass}>{errors.description.message}</p>}
      </div>

      <div>
        <label className={labelClass}>Preferred Contact Method</label>
        <div className="flex gap-6">
          {["Phone", "Email"].map((method) => (
            <label key={method} className="flex items-center gap-2 cursor-pointer text-[#A8A9AD] font-inter text-sm">
              <input
                {...register("contactMethod")}
                type="radio"
                value={method}
                defaultChecked={method === "Phone"}
                className="accent-[#E87722]"
              />
              {method}
            </label>
          ))}
        </div>
      </div>

      <button
        type="submit"
        className="w-full bg-[#E87722] hover:bg-[#CF6A1A] text-white font-montserrat font-bold text-base py-4 transition-all duration-300 hover:-translate-y-0.5"
      >
        Send My Request →
      </button>
    </form>
  );
}
