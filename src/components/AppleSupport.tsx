import React from 'react';
import { Apple, ShoppingBag, Search, Menu, ChevronRight } from 'lucide-react';

export const AppleNav = () => {
  return (
    <nav className="sticky top-0 z-50 w-full bg-[#1d1d1f]/90 backdrop-blur-md">
      <div className="mx-auto flex h-12 max-w-[1024px] items-center justify-between px-4 text-white/80">
        <button className="hover:text-white transition-colors">
          <Apple size={18} />
        </button>
        <div className="hidden md:flex items-center gap-8 text-[12px] font-normal tracking-tight">
          {['Store', 'Mac', 'iPad', 'iPhone', 'Watch', 'Vision', 'AirPods', 'TV & Home', 'Entertainment', 'Accessories', 'Support'].map((item) => (
            <button key={item} className="hover:text-white transition-colors">
              {item}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-6">
          <button className="hover:text-white transition-colors">
            <Search size={16} />
          </button>
          <button className="hover:text-white transition-colors">
            <ShoppingBag size={16} />
          </button>
          <button className="md:hidden hover:text-white transition-colors">
            <Menu size={18} />
          </button>
        </div>
      </div>
    </nav>
  );
};

export const LocalNav = () => {
  return (
    <nav className="sticky top-12 z-40 w-full border-b border-black/10 bg-white/70 backdrop-blur-md">
      <div className="mx-auto flex h-12 max-w-[1024px] items-center justify-between px-4">
        <span className="text-[21px] font-semibold tracking-tight text-black">Apple Support</span>
        <div className="flex items-center gap-6 text-[12px] text-black/80">
          <button className="hover:text-ios-blue transition-colors">Communities</button>
          <button className="hover:text-ios-blue transition-colors">Get Support</button>
        </div>
      </div>
    </nav>
  );
};

export const SupportHero = () => {
  return (
    <section className="relative h-[540px] w-full overflow-hidden bg-[#f5f5f7]">
      <img 
        src="https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=2000&auto=format&fit=crop" 
        alt="Apple Support Hero"
        className="h-full w-full object-cover"
        referrerPolicy="no-referrer"
      />
      <div className="absolute inset-0 flex items-center justify-center bg-black/5">
        <div className="w-full max-w-[520px] rounded-3xl bg-white/90 p-8 text-center shadow-2xl backdrop-blur-xl">
          <h1 className="text-[40px] font-semibold leading-tight tracking-tight text-black">Contact Apple Support</h1>
          <p className="mt-4 text-[19px] leading-relaxed text-zinc-600">
            We're here to help. Choose a product and we'll find you the best solution.
          </p>
          <div className="mt-8 flex flex-col gap-3">
            <button className="w-full rounded-full bg-ios-blue py-3 text-[17px] font-medium text-white hover:bg-blue-600 transition-colors">
              Get started
            </button>
            <button className="flex items-center justify-center gap-1 text-[17px] text-ios-blue hover:underline">
              See your cases <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export const SupportFooter = () => {
  return (
    <footer className="bg-[#f5f5f7] py-12 text-zinc-500">
      <div className="mx-auto max-w-[1024px] px-4">
        <div className="border-b border-zinc-300 pb-4 text-[12px] leading-relaxed">
          1. Trade-in values will vary based on the condition, year, and configuration of your eligible trade-in device. Not all devices are eligible for credit. You must be at least 18 years old to be eligible to trade in for credit or for an Apple Gift Card. Trade-in value may be applied toward qualifying new device purchase, or added to an Apple Gift Card. Actual value awarded is based on receipt of a qualifying device matching the description provided when estimate was made. Sales tax may be assessed on full value of a new device purchase. In-store trade-in requires presentation of a valid photo ID (local law may require saving this information). Offer may not be available in all stores, and may vary between in-store and online trade-in. Some stores may have additional requirements. Apple or its trade-in partners reserve the right to refuse or limit quantity of any trade-in transaction for any reason. More details are available from Apple’s trade-in partner for trade-in and recycling of eligible devices. Restrictions and limitations may apply.
        </div>
        <div className="border-b border-zinc-300 py-4 text-[12px]">
          More ways to shop: <button className="text-ios-blue hover:underline">Find an Apple Store</button> or <button className="text-ios-blue hover:underline">other retailer</button> near you. Or call 1-800-MY-APPLE.
        </div>
        <div className="flex flex-col justify-between gap-4 pt-4 md:flex-row md:items-center">
          <div className="text-[12px]">
            Copyright © 2025 Apple Inc. All rights reserved.
          </div>
          <div className="flex flex-wrap gap-4 text-[12px]">
            {['Privacy Policy', 'Terms of Use', 'Sales and Refunds', 'Legal', 'Site Map'].map((item) => (
              <button key={item} className="hover:text-zinc-800 transition-colors border-r border-zinc-300 pr-4 last:border-0 last:pr-0">
                {item}
              </button>
            ))}
          </div>
          <div className="text-[12px] ml-auto">United States</div>
        </div>
      </div>
    </footer>
  );
};
