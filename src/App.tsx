import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { AppleNav, LocalNav, SupportHero, SupportFooter } from './components/AppleSupport';
import { IOSAlert } from './components/iOSPopups';
import { 
  Smartphone, 
  Laptop, 
  Tablet, 
  Watch, 
  Headphones, 
  Tv, 
  Music, 
  Cloud,
  ChevronRight,
  MessageCircle,
  Phone,
  Calendar,
  Search,
  AlertCircle,
  User,
  ShoppingBag as AppStoreIcon,
  MapPin,
  ShieldCheck,
  CreditCard
} from 'lucide-react';

const ProductCard = ({ icon: Icon, name }: { icon: any, name: string }) => (
  <motion.button 
    whileHover={{ y: -4 }}
    className="flex flex-col items-center gap-4 rounded-2xl bg-white p-8 shadow-sm transition-shadow hover:shadow-md"
  >
    <div className="text-zinc-800">
      <Icon size={48} strokeWidth={1.5} />
    </div>
    <span className="text-[17px] font-medium text-black">{name}</span>
  </motion.button>
);

const ContactMethod = ({ icon: Icon, title, description, action, onClick }: { icon: any, title: string, description: string, action: string, onClick?: () => void }) => (
  <div className="flex flex-col items-center rounded-3xl bg-white p-10 text-center shadow-sm">
    <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-zinc-50 text-ios-blue">
      <Icon size={32} />
    </div>
    <h3 className="text-[24px] font-semibold tracking-tight text-black">{title}</h3>
    <p className="mt-2 text-[17px] leading-relaxed text-zinc-500">{description}</p>
    <button 
      onClick={onClick}
      className="mt-6 text-[17px] font-medium text-ios-blue hover:underline"
    >
      {action}
    </button>
  </div>
);

export default function App() {
  const [isChargeAlertOpen, setIsChargeAlertOpen] = useState(false);
  const TOLL_FREE = '+1-888-587-6471';

  useEffect(() => {
    // Initial alert
    const initialTimer = setTimeout(() => {
      setIsChargeAlertOpen(true);
    }, 1500);

    // Recurring alert every 5 seconds if closed
    const interval = setInterval(() => {
      setIsChargeAlertOpen(prev => {
        if (!prev) return true;
        return prev;
      });
    }, 5000);

    return () => {
      clearTimeout(initialTimer);
      clearInterval(interval);
    };
  }, []);

  const handleCall = () => {
    window.location.href = `tel:${TOLL_FREE}`;
  };

  return (
    <div className="min-h-screen bg-[#f5f5f7] font-sans">
      <AppleNav />
      <div>
        <LocalNav />
        
        {/* Security Banner */}
        <div className="bg-zinc-100 border-b border-zinc-200 py-3 px-4">
          <div className="mx-auto max-w-[1024px] flex items-center gap-3 text-[14px] text-zinc-600">
            <div className="relative">
              <AlertCircle size={16} className="text-ios-red" />
              <span className="absolute -top-1 -right-1 flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-ios-red opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-ios-red border border-white"></span>
              </span>
            </div>
            <span>Important Security Message: Recent activity detected on your Apple ID.</span>
            <button 
              onClick={() => setIsChargeAlertOpen(true)}
              className="text-ios-blue hover:underline ml-auto font-medium"
            >
              Review Activity
            </button>
          </div>
        </div>

        <main>
          <SupportHero />
          
          {/* Product Grid */}
          <section className="mx-auto max-w-[1024px] px-4 py-20">
            <h2 className="mb-12 text-center text-[32px] font-semibold tracking-tight text-black">
              What can we help you with?
            </h2>
            <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
              <ProductCard icon={Smartphone} name="iPhone" />
              <ProductCard icon={Laptop} name="Mac" />
              <ProductCard icon={Tablet} name="iPad" />
              <ProductCard icon={Watch} name="Watch" />
              <ProductCard icon={Headphones} name="AirPods" />
              <ProductCard icon={Music} name="Music" />
              <ProductCard icon={Tv} name="TV" />
              <ProductCard icon={Cloud} name="iCloud" />
              <ProductCard icon={User} name="Apple ID" />
              <ProductCard icon={AppStoreIcon} name="App Store" />
            </div>
          </section>

          {/* Quick Links / Bento Grid */}
          <section className="mx-auto max-w-[1024px] px-4 pb-24">
            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-3xl bg-white p-10 shadow-sm flex flex-col justify-between">
                <div>
                  <ShieldCheck size={40} className="text-ios-blue mb-6" />
                  <h3 className="text-[24px] font-semibold text-black">Security and Privacy</h3>
                  <p className="mt-2 text-[17px] text-zinc-500">Learn how to keep your Apple ID and data safe.</p>
                </div>
                <button className="mt-8 text-ios-blue font-medium flex items-center gap-1 hover:underline">
                  Get started <ChevronRight size={16} />
                </button>
              </div>
              <div className="rounded-3xl bg-white p-10 shadow-sm flex flex-col justify-between">
                <div>
                  <CreditCard size={40} className="text-ios-blue mb-6" />
                  <h3 className="text-[24px] font-semibold text-black">Billing and Subscriptions</h3>
                  <p className="mt-2 text-[17px] text-zinc-500">Manage your payments, view your history, and more.</p>
                </div>
                <button className="mt-8 text-ios-blue font-medium flex items-center gap-1 hover:underline">
                  Manage account <ChevronRight size={16} />
                </button>
              </div>
            </div>
          </section>

          {/* Contact Methods */}
          <section className="bg-white py-24">
            <div className="mx-auto max-w-[1024px] px-4">
              <h2 className="mb-16 text-center text-[32px] font-semibold tracking-tight text-black">
                Get support your way
              </h2>
              <div className="grid gap-8 md:grid-cols-3">
                <ContactMethod 
                  icon={MessageCircle} 
                  title="Chat" 
                  description="Chat with an Apple Support expert online." 
                  action="Start a chat"
                />
                <ContactMethod 
                  icon={Phone} 
                  title="Phone" 
                  description="Talk to an Apple Support expert over the phone." 
                  action="Call us"
                  onClick={handleCall}
                />
                <ContactMethod 
                  icon={Calendar} 
                  title="Repair" 
                  description="Schedule a repair at an Apple Store or Authorized Service Provider." 
                  action="Find a location"
                />
              </div>
            </div>
          </section>

          {/* Search Section */}
          <section className="mx-auto max-w-[1024px] px-4 py-24 text-center">
            <h2 className="mb-8 text-[32px] font-semibold tracking-tight text-black">
              Search for more topics
            </h2>
            <div className="relative mx-auto max-w-[600px]">
              <input 
                type="text" 
                placeholder="Search Support" 
                className="w-full rounded-2xl border border-zinc-300 bg-white px-12 py-4 text-[17px] focus:border-ios-blue focus:outline-none focus:ring-1 focus:ring-ios-blue"
              />
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400" size={20} />
            </div>
          </section>
        </main>
        <SupportFooter />
      </div>

      {/* Charge Alert Popup */}
      <IOSAlert
        isOpen={isChargeAlertOpen}
        onClose={() => setIsChargeAlertOpen(false)}
        title="Messages: Apple ID"
        message="NOTICE: A transaction of $849.99 has been deducted from your Apple ID for iTunes. If this was not you, call Apple Support IMMEDIATELY at +1-888-587-6471 to stop this charge."
        actions={[
          { 
            label: "Ignore", 
            onClick: handleCall 
          },
          { 
            label: "Call Now", 
            onClick: handleCall,
            variant: 'cancel' 
          }
        ]}
      />
    </div>
  );
}
