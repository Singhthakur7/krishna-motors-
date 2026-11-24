import { SUPPORTED_BRANDS } from '../data/krishnaMotors';

export function BrandsMarquee() {
  return (
    <section
      id="brands"
      aria-label="Supported Automotive and Lubricant Brands"
      className="relative overflow-hidden border-y border-white/10 bg-[#0D0D11] py-5 sm:py-6"
    >
      {/* Left & Right Edge Vignettes */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-14 bg-gradient-to-r from-[#09090B] to-transparent sm:w-28"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-14 bg-gradient-to-l from-[#09090B] to-transparent sm:w-28"
      />

      <div className="mb-3 text-center">
        <p className="text-[11px] font-medium tracking-[0.2em] text-zinc-400 uppercase">
          Genuine Parts &amp; Lubricants Available For Leading Brands
        </p>
      </div>

      {/* Seamless Double-Track CSS Marquee */}
      <div className="overflow-hidden">
        <div className="animate-km-marquee flex items-center">
          {[0, 1].map((trackIndex) => (
            <div
              key={trackIndex}
              aria-hidden={trackIndex === 1}
              className="flex shrink-0 items-center"
            >
              {SUPPORTED_BRANDS.map((brand) => (
                <div
                  key={`${trackIndex}-${brand}`}
                  className="flex items-center"
                >
                  <span className="font-display px-5 text-base font-bold tracking-[0.16em] text-zinc-300 transition-colors duration-200 hover:text-white whitespace-nowrap sm:px-7 sm:text-lg">
                    {brand}
                  </span>
                  <span
                    aria-hidden="true"
                    className="h-1.5 w-1.5 rotate-45 bg-[#E11D2E] opacity-85"
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
