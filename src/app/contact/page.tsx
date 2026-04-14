import type { Metadata } from "next";
import Link from "next/link";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import QuoteForm from "@/components/QuoteForm";

export const metadata: Metadata = {
  title: "Get a Free Quote",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#111111] pt-36 pb-20 px-6 noise-overlay relative">
        <div className="max-w-7xl mx-auto">
          <p className="text-[#A8A9AD] font-inter text-sm mb-4">
            <Link href="/" className="hover:text-[#E87722] transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-[#E87722]">Contact</span>
          </p>
          <div className="flex items-start gap-6">
            <div className="w-1 h-20 bg-[#E87722] shrink-0 mt-1" />
            <div>
              <h1 className="text-white font-montserrat font-black text-5xl md:text-6xl leading-tight">
                Get in Touch
              </h1>
              <p className="text-[#A8A9AD] font-inter text-lg mt-4 max-w-xl">
                Ready to bring your vision to life? Let&apos;s talk.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact layout */}
      <section className="bg-[#111111] py-20 px-6">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16">
          {/* Left — contact info */}
          <div className="lg:w-2/5 flex flex-col gap-10">
            <div>
              <p className="text-[#E87722] font-montserrat font-bold text-sm uppercase tracking-[0.2em] mb-8">
                Contact Information
              </p>

              <ul className="flex flex-col gap-7">
                <li className="flex items-start gap-4">
                  <div className="mt-0.5 text-[#E87722] shrink-0">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="text-white font-montserrat font-bold text-sm mb-1">Phone</p>
                    {/* TODO: Replace with real phone number */}
                    <p className="text-[#A8A9AD] font-inter text-sm">+1 (XXX) XXX-XXXX</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="mt-0.5 text-[#E87722] shrink-0">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-white font-montserrat font-bold text-sm mb-1">Email</p>
                    {/* TODO: Replace with real email address */}
                    <p className="text-[#A8A9AD] font-inter text-sm">info@platinum-crete.com</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="mt-0.5 text-[#E87722] shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-white font-montserrat font-bold text-sm mb-1">Service Area</p>
                    <p className="text-[#A8A9AD] font-inter text-sm">Greater Toronto Area</p>
                    <p className="text-[#A8A9AD] font-inter text-xs mt-1">
                      Toronto · Mississauga · Brampton · Markham · Vaughan · Oakville
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="mt-0.5 text-[#E87722] shrink-0">
                    <Clock size={20} />
                  </div>
                  <div>
                    <p className="text-white font-montserrat font-bold text-sm mb-1">Hours</p>
                    <p className="text-[#A8A9AD] font-inter text-sm">Monday – Friday: 7:00 AM – 6:00 PM</p>
                    <p className="text-[#A8A9AD] font-inter text-sm">Saturday: 8:00 AM – 4:00 PM</p>
                    <p className="text-[#A8A9AD] font-inter text-sm">Sunday: By appointment</p>
                  </div>
                </li>
              </ul>
            </div>

            <a
              href="https://www.instagram.com/platinum.crete"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-[#E87722] hover:text-[#CF6A1A] transition-colors duration-200"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>
              <span className="font-montserrat font-bold text-sm">@platinum.crete</span>
            </a>

            {/* Map placeholder */}
            <div className="h-56 bg-[#1A1A1A] border border-[#2A2A2A] flex items-center justify-center">
              {/* TODO: Add Google Maps embed for service area */}
              <p className="text-[#A8A9AD] font-inter text-sm">Map — Greater Toronto Area</p>
            </div>
          </div>

          {/* Right — form */}
          <div className="lg:w-3/5">
            <QuoteForm />
          </div>
        </div>
      </section>
    </>
  );
}
