import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#111111] border-t border-[#2A2A2A]">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Col 1 */}
        <div>
          <Link href="/" className="inline-block mb-4">
            <span className="font-montserrat font-black text-2xl tracking-wider text-white">
              PL<span className="text-[#A8A9AD]">Λ</span>TINUM<span className="text-[#A8A9AD]">-</span><span className="text-[#E87722]">CRETE</span>
            </span>
          </Link>
          <p className="text-[#E87722] font-montserrat font-bold text-sm uppercase tracking-widest mb-3">
            Built to Impress
          </p>
          <p className="text-[#A8A9AD] font-inter text-sm leading-relaxed">
            Toronto&apos;s trusted concrete specialists. Serving the Greater Toronto Area with craftsmanship that stands the test of time.
          </p>
        </div>

        {/* Col 2 */}
        <div>
          <h4 className="text-white font-montserrat font-bold text-sm uppercase tracking-widest mb-6">
            Quick Links
          </h4>
          <ul className="flex flex-col gap-3">
            {[
              { href: "/", label: "Home" },
              { href: "/services", label: "Services" },
              { href: "/gallery", label: "Gallery" },
              { href: "/about", label: "About" },
              { href: "/contact", label: "Contact" },
            ].map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-[#A8A9AD] hover:text-[#E87722] font-inter text-sm transition-colors duration-200"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 3 */}
        <div>
          <h4 className="text-white font-montserrat font-bold text-sm uppercase tracking-widest mb-6">
            Contact
          </h4>
          <ul className="flex flex-col gap-3 text-[#A8A9AD] font-inter text-sm">
            <li>
              <span className="text-[#E87722]">Phone:</span>{" "}
              +1 (XXX) XXX-XXXX {/* TODO: Replace with real phone */}
            </li>
            <li>
              <span className="text-[#E87722]">Email:</span>{" "}
              info@platinum-crete.com {/* TODO: Replace with real email */}
            </li>
            <li>
              <span className="text-[#E87722]">Area:</span>{" "}
              Greater Toronto Area
            </li>
          </ul>
          <a
            href="https://www.instagram.com/platinum.crete"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="inline-flex items-center gap-2 mt-6 text-[#E87722] hover:text-[#CF6A1A] transition-colors duration-200"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>
            <span className="font-inter text-sm">@platinum.crete</span>
          </a>
        </div>
      </div>

      <div className="border-t border-[#2A2A2A] py-6 text-center">
        <p className="text-[#A8A9AD] font-inter text-sm">
          © {new Date().getFullYear()} PLATINUM-CRETE. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
