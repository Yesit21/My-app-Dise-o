'use client';

import { useState, useEffect } from 'react';

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const showToast = (message: string) => {
    const toast = document.createElement('div');
    toast.textContent = message;
    toast.style.cssText = `
      position:fixed; bottom:32px; left:50%; transform:translateX(-50%) translateY(20px);
      background:#1c1c1c; color:#fff; padding:14px 28px; border-radius:100px;
      border:1px solid #333; font-family:Inter,sans-serif; font-size:0.9rem; font-weight:500;
      z-index:9999; opacity:0; transition:all 0.3s ease; white-space:nowrap;
      box-shadow:0 8px 32px rgba(0,0,0,0.5);
    `;
    document.body.appendChild(toast);
    requestAnimationFrame(() => {
      toast.style.opacity = '1';
      toast.style.transform = 'translateX(-50%) translateY(0)';
    });
    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateX(-50%) translateY(20px)';
      setTimeout(() => toast.remove(), 300);
    }, 3000);
  };

  const cars = [
    { name: "2021 BMW M4", price: "$63,500", hp: "450 HP", mileage: "12,400 mi", badge: "New Arrival", certified: true, img: "https://images.unsplash.com/photo-1607853202273-797f1c22a38e?w=400&q=80&auto=format" },
    { name: "2020 Audi Q7", price: "$45,800", hp: "335 HP", mileage: "28,100 mi", badge: null, certified: false, img: "https://images.unsplash.com/photo-1606152421802-db97b9c7a11b?w=400&q=80&auto=format" },
    { name: "2019 Mercedes S-Class", price: "$53,300", hp: "429 HP", mileage: "19,800 mi", badge: "Popular", certified: true, img: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=400&q=80&auto=format" },
    { name: "2022 Ford Mustang GT", price: "$39,900", hp: "460 HP", mileage: "5,200 mi", badge: null, certified: false, img: "https://images.unsplash.com/photo-1584345604476-8ec5f452d1f8?w=400&q=80&auto=format" },
  ];

  return (
    <>
      {/* NAVIGATION */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[rgba(10,10,10,0.98)] shadow-[0_4px_20px_rgba(0,0,0,0.5)]' : 'bg-[rgba(17,17,17,0.95)]'} backdrop-blur-xl border-b border-[#333]`}>
        <div className="max-w-[1280px] mx-auto px-12 h-[68px] flex items-center gap-10">
          <a href="#" className="text-2xl font-extrabold text-white tracking-tight flex-shrink-0">
            <span className="text-[#E31E24]">⚡</span> AutoDrive
          </a>
          <ul className="hidden md:flex gap-8 items-center flex-1">
            <li><a href="#" className="text-sm font-medium text-[#A0A0A0] hover:text-white transition-colors relative pb-1 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-[#E31E24] after:rounded after:opacity-0 hover:after:opacity-100 after:transition-opacity">Home</a></li>
            <li><a href="#listings" className="text-sm font-medium text-[#A0A0A0] hover:text-white transition-colors">Buy</a></li>
            <li><a href="#" className="text-sm font-medium text-[#A0A0A0] hover:text-white transition-colors">Sell</a></li>
            <li><a href="#why-us" className="text-sm font-medium text-[#A0A0A0] hover:text-white transition-colors">About</a></li>
            <li><a href="#reviews" className="text-sm font-medium text-[#A0A0A0] hover:text-white transition-colors">Contact</a></li>
          </ul>
          <div className="hidden md:flex items-center gap-4 ml-auto">
            <button className="text-sm font-medium text-[#A0A0A0] hover:text-white transition-colors">Login</button>
            <button className="bg-[#E31E24] text-white px-5 py-2 rounded-lg text-sm font-semibold hover:bg-[#c00014] transition-all hover:-translate-y-0.5 hover:shadow-[0_4px_16px_rgba(227,30,36,0.4)]">Sign Up</button>
          </div>
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden flex flex-col gap-1.5 ml-auto">
            <span className={`block w-6 h-0.5 bg-white rounded transition-transform ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-white rounded transition-opacity ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-white rounded transition-transform ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed top-[68px] left-0 right-0 bg-[#111] border-b border-[#333] z-40 md:hidden">
          <ul className="flex flex-col">
            <li><a href="#" className="block py-3 px-6 text-[#A0A0A0] hover:text-white border-b border-[#333]">Home</a></li>
            <li><a href="#listings" className="block py-3 px-6 text-[#A0A0A0] hover:text-white border-b border-[#333]">Buy</a></li>
            <li><a href="#" className="block py-3 px-6 text-[#A0A0A0] hover:text-white border-b border-[#333]">Sell</a></li>
            <li><a href="#why-us" className="block py-3 px-6 text-[#A0A0A0] hover:text-white border-b border-[#333]">About</a></li>
            <li><a href="#reviews" className="block py-3 px-6 text-[#A0A0A0] hover:text-white border-b border-[#333]">Contact</a></li>
            <li><a href="#" className="block py-3 px-6 text-[#A0A0A0] hover:text-white border-b border-[#333]">Login</a></li>
            <li><a href="#" className="block py-3 px-6 bg-[#E31E24] text-white font-semibold">Sign Up</a></li>
          </ul>
        </div>
      )}

      {/* HERO SECTION */}
      <section className="min-h-screen bg-gradient-to-br from-[#0a0a0a] via-[#111] to-[#1a0a0a] relative flex flex-col justify-center overflow-hidden pt-[68px]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_70%_50%,rgba(227,30,36,0.06)_0%,transparent_70%),radial-gradient(ellipse_40%_60%_at_10%_50%,rgba(227,30,36,0.04)_0%,transparent_60%)]"></div>
        
        <div className="max-w-[1280px] mx-auto px-12 py-20 grid md:grid-cols-2 items-center gap-16 w-full relative z-10">
          <div>
            <div className="inline-flex items-center gap-2 bg-[rgba(227,30,36,0.15)] border border-[rgba(227,30,36,0.3)] text-[#E31E24] px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide mb-5">
              🏆 #1 Car Marketplace
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight tracking-tight mb-4">
              Find Your <span className="text-[#E31E24]">Perfect</span> Car
            </h1>
            <p className="text-xl text-[#A0A0A0] mb-10">Buy &amp; Sell Cars with Confidence</p>
            <div className="flex items-center gap-6">
              <div className="text-center">
                <div className="text-2xl font-extrabold text-white">50K+</div>
                <div className="text-xs text-[#A0A0A0] uppercase tracking-wider">Listings</div>
              </div>
              <div className="w-px h-9 bg-[#333]"></div>
              <div className="text-center">
                <div className="text-2xl font-extrabold text-white">12K+</div>
                <div className="text-xs text-[#A0A0A0] uppercase tracking-wider">Happy Buyers</div>
              </div>
              <div className="w-px h-9 bg-[#333]"></div>
              <div className="text-center">
                <div className="text-2xl font-extrabold text-white">98%</div>
                <div className="text-xs text-[#A0A0A0] uppercase tracking-wider">Satisfaction</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute bottom-[-20px] left-1/2 -translate-x-1/2 w-4/5 h-16 bg-[radial-gradient(ellipse,rgba(227,30,36,0.3)_0%,transparent_70%)] blur-xl"></div>
            <img src="https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&q=80&auto=format" alt="Luxury BMW sedan" className="w-full max-w-[600px] rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.8)] animate-[float_6s_ease-in-out_infinite]" />
          </div>
        </div>

        {/* Search Bar */}
        <div className="max-w-[1280px] mx-auto px-12 pb-16 w-full relative z-10">
          <div className="bg-[rgba(26,26,26,0.95)] backdrop-blur-2xl border border-[#333] rounded-2xl flex flex-col md:flex-row items-stretch p-2 md:p-2 gap-3 md:gap-0 shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
            <div className="flex-1 px-4 py-2">
              <label className="block text-xs font-semibold text-[#A0A0A0] uppercase tracking-wider mb-1">Make</label>
              <select className="w-full bg-transparent border-none text-white text-sm font-medium outline-none cursor-pointer">
                <option value="">All Makes</option>
                <option>BMW</option>
                <option>Mercedes-Benz</option>
                <option>Audi</option>
                <option>Ford</option>
                <option>Toyota</option>
              </select>
            </div>
            <div className="hidden md:block w-px bg-[#333]"></div>
            <div className="flex-1 px-4 py-2">
              <label className="block text-xs font-semibold text-[#A0A0A0] uppercase tracking-wider mb-1">Model</label>
              <select className="w-full bg-transparent border-none text-white text-sm font-medium outline-none cursor-pointer">
                <option value="">Any Model</option>
                <option>Sedan</option>
                <option>SUV</option>
                <option>Coupe</option>
              </select>
            </div>
            <div className="hidden md:block w-px bg-[#333]"></div>
            <div className="flex-1 px-4 py-2">
              <label className="block text-xs font-semibold text-[#A0A0A0] uppercase tracking-wider mb-1">Max Price</label>
              <select className="w-full bg-transparent border-none text-white text-sm font-medium outline-none cursor-pointer">
                <option value="">Any Price</option>
                <option>Under $20,000</option>
                <option>$20,000 - $40,000</option>
                <option>$40,000 - $60,000</option>
              </select>
            </div>
            <div className="hidden md:block w-px bg-[#333]"></div>
            <div className="flex-1 px-4 py-2">
              <label className="block text-xs font-semibold text-[#A0A0A0] uppercase tracking-wider mb-1">Location</label>
              <select className="w-full bg-transparent border-none text-white text-sm font-medium outline-none cursor-pointer">
                <option value="">Select Location</option>
                <option>New York, NY</option>
                <option>Los Angeles, CA</option>
                <option>Chicago, IL</option>
              </select>
            </div>
            <button onClick={() => showToast('Searching for cars...')} className="bg-[#E31E24] text-white px-7 py-3.5 rounded-xl font-bold text-sm flex items-center justify-center gap-2 hover:bg-[#c00014] transition-all hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(227,30,36,0.4)] whitespace-nowrap md:ml-2">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
              </svg>
              Search
            </button>
          </div>
        </div>
      </section>

      {/* FEATURED LISTINGS */}
      <section id="listings" className="bg-white py-20">
        <div className="max-w-[1280px] mx-auto px-12">
          <div className="mb-10">
            <h2 className="text-4xl font-extrabold text-[#1a1a1a] tracking-tight">Featured Listings</h2>
            <p className="text-base text-[#666] mt-2">Handpicked premium vehicles just for you</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {cars.map((car, idx) => (
              <div key={idx} className="bg-white border border-[#e8e8e8] rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_40px_rgba(0,0,0,0.12)] hover:border-[#ddd] relative group">
                {car.badge && (
                  <div className={`absolute top-3 left-3 z-10 ${car.badge === 'Popular' ? 'bg-[#FF8C00]' : 'bg-[#E31E24]'} text-white text-xs font-bold px-2.5 py-1 rounded-full tracking-wide`}>
                    {car.badge}
                  </div>
                )}
                <div className="relative h-[180px] overflow-hidden">
                  <img src={car.img} alt={car.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <button onClick={() => showToast(`Viewing: ${car.name} — ${car.price}`)} className="bg-white text-[#1a1a1a] px-5 py-2.5 rounded-lg text-sm font-bold translate-y-2 group-hover:translate-y-0 transition-transform">Quick View</button>
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex justify-between items-start mb-2.5 gap-2">
                    <h3 className="text-base font-bold text-[#1a1a1a]">{car.name}</h3>
                    <span className="text-base font-extrabold text-[#E31E24] whitespace-nowrap">{car.price}</span>
                  </div>
                  <div className="flex gap-2 flex-wrap mb-2.5">
                    <span className="text-xs text-[#666] bg-[#f5f5f5] px-2 py-0.5 rounded-full">🏁 {car.hp}</span>
                    <span className="text-xs text-[#666] bg-[#f5f5f5] px-2 py-0.5 rounded-full">⚙️ Automatic</span>
                    <span className="text-xs text-[#666] bg-[#f5f5f5] px-2 py-0.5 rounded-full">⛽ Gasoline</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-[#888]">{car.mileage}</span>
                    <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${car.certified ? 'bg-[rgba(227,30,36,0.1)] text-[#E31E24]' : 'bg-[#f0f0f0] text-[#666]'}`}>
                      {car.certified ? 'Certified' : 'Pre-Owned'}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <button onClick={() => showToast('Loading all available cars...')} className="bg-[#E31E24] text-white px-10 py-4 rounded-lg font-bold inline-flex items-center gap-2.5 hover:bg-[#c00014] transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(227,30,36,0.4)]">
              Browse All Cars
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section id="why-us" className="bg-[#111] py-20">
        <div className="max-w-[1280px] mx-auto px-12">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-extrabold text-white tracking-tight">Why Choose Us?</h2>
            <p className="text-base text-[#A0A0A0] mt-2">We make buying and selling cars simple, safe, and transparent</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {[
              { icon: "❤️", title: "Trusted Sellers", text: "Every seller is verified and background checked. Buy with confidence knowing you're dealing with legitimate sellers." },
              { icon: "🚗", title: "Easy Financing", text: "Get pre-approved for a loan in minutes with our partner banks. Flexible payment options available." },
              { icon: "💬", title: "24/7 Support", text: "Our dedicated support team is available around the clock to assist with any questions or concerns." },
            ].map((feature, idx) => (
              <div key={idx} className="bg-[#1C1C1C] border border-[#333] rounded-2xl p-10 text-center transition-all duration-300 hover:border-[rgba(227,30,36,0.4)] hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(0,0,0,0.3)]">
                <div className="w-18 h-18 bg-[rgba(227,30,36,0.1)] border border-[rgba(227,30,36,0.2)] rounded-full flex items-center justify-center mx-auto mb-6 text-4xl">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-sm text-[#A0A0A0] leading-relaxed mb-4">{feature.text}</p>
                <div className="text-[#FFD700] text-base tracking-widest">★★★★★</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CUSTOMER REVIEWS */}
      <section id="reviews" className="bg-[#F5F5F5] py-20">
        <div className="max-w-[1280px] mx-auto px-12">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-extrabold text-[#1a1a1a] tracking-tight">Customer Reviews</h2>
            <p className="text-base text-[#666] mt-2">What our happy customers say about us</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {[
              { name: "Michael R.", title: "Great Experience!", text: "I found the perfect car in no time. Excellent service and very trustworthy! The whole process was smooth.", date: "March 2024", img: "https://i.pravatar.cc/56?img=11" },
              { name: "Sarah L.", title: "Highly Recommend!", text: "Selling my car was quick and easy. I listed my vehicle and had it sold within a week. Amazing platform!", date: "February 2024", img: "https://i.pravatar.cc/56?img=5" },
              { name: "David K.", title: "Best Platform!", text: "Found my dream BMW at an amazing price. The financing options made it very affordable. Will use again!", date: "January 2024", img: "https://i.pravatar.cc/56?img=15" },
            ].map((review, idx) => (
              <div key={idx} className="bg-white border border-[#e8e8e8] rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(0,0,0,0.1)] hover:border-[#ddd]">
                <div className="flex items-center gap-3.5 mb-4">
                  <img src={review.img} alt={review.name} className="w-13 h-13 rounded-full object-cover border-2 border-[#E31E24]" />
                  <div>
                    <h4 className="text-base font-bold text-[#1a1a1a]">{review.name}</h4>
                    <div className="text-[#FFD700] text-sm tracking-wider mt-0.5">★★★★★</div>
                  </div>
                </div>
                <h5 className="text-base font-bold text-[#1a1a1a] mb-2.5">{review.title}</h5>
                <p className="text-sm text-[#555] leading-relaxed mb-3">{review.text}</p>
                <span className="text-xs text-[#999]">{review.date}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#0e0e0e] border-t border-[#333] pt-16">
        <div className="max-w-[1280px] mx-auto px-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div>
              <a href="#" className="text-2xl font-extrabold text-white mb-4 inline-block">⚡ AutoDrive</a>
              <p className="text-sm text-[#A0A0A0] leading-relaxed mb-6">The premier destination for buying and selling quality pre-owned and new vehicles.</p>
              <div className="flex gap-2.5">
                {['f', '𝕏', '📸'].map((icon, idx) => (
                  <button key={idx} className="w-9 h-9 bg-[#1C1C1C] border border-[#333] rounded-lg flex items-center justify-center text-sm hover:border-[#E31E24] hover:bg-[rgba(227,30,36,0.1)] transition-all">
                    {icon}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-5">Company</h4>
              <ul className="flex flex-col gap-3">
                {['About Us', 'Careers', 'Press', 'Blog'].map((item, idx) => (
                  <li key={idx}><a href="#" className="text-sm text-[#A0A0A0] hover:text-white transition-colors">{item}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-5">Vehicles</h4>
              <ul className="flex flex-col gap-3">
                {['New Cars', 'Used Cars', 'Electric', 'Certified Pre-Owned'].map((item, idx) => (
                  <li key={idx}><a href="#" className="text-sm text-[#A0A0A0] hover:text-white transition-colors">{item}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-5">Support</h4>
              <ul className="flex flex-col gap-3">
                {['Help Center', 'Contact Us', 'Privacy Policy', 'Terms of Service'].map((item, idx) => (
                  <li key={idx}><a href="#" className="text-sm text-[#A0A0A0] hover:text-white transition-colors">{item}</a></li>
                ))}
              </ul>
            </div>
          </div>
          <div className="border-t border-[#333] py-6 text-center">
            <p className="text-sm text-[#A0A0A0]">© 2024 AutoDrive. All rights reserved. Made with ❤️ for car enthusiasts.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
