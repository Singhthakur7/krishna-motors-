import { useState, useEffect } from 'react';
import { Menu, X, Phone, MessageCircle } from 'lucide-react';
import { BUSINESS_INFO, DEFAULT_WHATSAPP_URL, NAV_LINKS } from '../data/krishnaMotors';

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [logoError, setLogoError] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-colors duration-200 ${
        scrolled
          ? 'bg-[#09090B]/90 backdrop-blur-md border-b border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.5)]'
          : 'bg-[#09090B]/75 backdrop-blur-md border-b border-white/10'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:h-[72px] lg:gap-8 lg:px-8">
        {/* Zone 1: Framed Horizontal Brand Logo */}
        <a
          href="#home"
          aria-label="Krishna Motors Home"
          className="group flex shrink-0 items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E11D2E] focus-visible:ring-offset-2 focus-visible:ring-offset-[#09090B] rounded-lg"
        >
          {!logoError ? (
            <div className="flex items-center rounded-lg bg-white px-2.5 py-1 ring-1 ring-white/25 shadow-[0_2px_14px_rgba(0,0,0,0.5)] transition-transform duration-200 group-hover:scale-[1.02]">
              <img
                src={BUSINESS_INFO.assets.logo}
                alt="Krishna Motors — Car and Bike Spare Parts and Lubricants"
                referrerPolicy="no-referrer"
                onError={() => setLogoError(true)}
                className="h-8 w-auto object-contain sm:h-9 lg:h-10"
              />
            </div>
          ) : (
            <span className="font-display text-xl font-bold tracking-wider text-white whitespace-nowrap">
              KRISHNA <span className="text-[#E11D2E]">MOTORS</span>
            </span>
          )}
        </a>

        {/* Zone 2: Desktop Navigation Links */}
        <nav
          aria-label="Primary Navigation"
          className="hidden lg:flex items-center gap-7"
        >
          {NAV_LINKS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="group relative py-1 text-sm font-medium text-zinc-300 transition-colors duration-200 hover:text-white whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:text-white"
            >
              {item.label}
              <span
                aria-hidden="true"
                className="absolute inset-x-0 -bottom-0.5 h-[2px] origin-left scale-x-0 bg-[#E11D2E] transition-transform duration-200 group-hover:scale-x-100"
              />
            </a>
          ))}
        </nav>

        {/* Zone 3: Primary Direct Actions + Mobile Trigger */}
        <div className="flex items-center gap-2.5 shrink-0">
          <a
            href={DEFAULT_WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp with Krishna Motors"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-emerald-500/35 bg-emerald-500/12 text-emerald-400 transition-all duration-200 hover:border-emerald-400/60 hover:bg-emerald-500/20 hover:text-emerald-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 sm:w-auto sm:gap-2 sm:px-3.5"
          >
            <MessageCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
            <span className="hidden text-xs font-semibold tracking-wide whitespace-nowrap sm:inline">
              WhatsApp
            </span>
          </a>

          <a
            href={`tel:${BUSINESS_INFO.primaryPhoneRaw}`}
            className="inline-flex h-10 items-center gap-2 rounded-full bg-[#E11D2E] px-4 text-xs font-semibold tracking-wide text-white shadow-[0_0_20px_rgba(225,29,46,0.45)] transition-all duration-200 hover:bg-[#c81827] hover:shadow-[0_0_28px_rgba(225,29,46,0.65)] whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white sm:px-5 sm:text-sm"
          >
            <Phone className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
            <span>Call Now</span>
          </a>

          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/12 bg-white/5 text-zinc-200 transition-colors duration-200 hover:border-white/25 hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E11D2E] lg:hidden"
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {menuOpen && (
        <div className="border-t border-white/10 bg-[#0C0C10]/98 backdrop-blur-xl lg:hidden">
          <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6">
            <nav aria-label="Mobile Navigation" className="flex flex-col divide-y divide-white/8">
              {NAV_LINKS.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={handleLinkClick}
                  className="flex items-center justify-between py-3.5 text-base font-medium text-zinc-200 transition-colors hover:text-white"
                >
                  <span>{item.label}</span>
                  <span className="text-xs text-[#E11D2E]" aria-hidden="true">
                    →
                  </span>
                </a>
              ))}
            </nav>

            <div className="mt-4 grid grid-cols-2 gap-3 border-t border-white/10 pt-4">
              <a
                href={`tel:${BUSINESS_INFO.primaryPhoneRaw}`}
                className="flex h-11 items-center justify-center gap-2 rounded-xl bg-[#E11D2E] px-4 text-sm font-semibold text-white shadow-[0_0_20px_rgba(225,29,46,0.35)]"
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                <span>Call 7814090007</span>
              </a>
              <a
                href={DEFAULT_WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 items-center justify-center gap-2 rounded-xl border border-emerald-500/35 bg-emerald-500/12 px-4 text-sm font-semibold text-emerald-300"
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
