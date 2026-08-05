import React, { useState, useEffect } from 'react';

// --- ഡാറ്റ (FARM DATA) ---
const farmData = {
  farmName: "ജോർജ്ജിന്റെ വെറ്റിലത്തോട്ടം ",
  whatsappNumber: "9495440984",
  location: "അർത്തുങ്കൽ, ആലപ്പുഴ, കേരളം",
  
  // ക്യാരൗസൽ ചിത്രങ്ങൾ (CAROUSEL IMAGES)
  carouselImages: [
    {
      id: 1,
      url:"/images/vettia1.jpg",
      caption: "ജി.ഐ പൈപ്പിൽ നട്ട വെറ്റില കൃഷി"
    },
    {
      id: 2,
      url:"/images/vettia2.jpg",
      caption: "30 വർഷത്തെ പ്രവൃത്തിപരിചയം"
    },
    {
      id: 3,
      url: "/images/vettia3.jpg",
      caption: "100% ജൈവ വെറ്റില കൃഷി"
    }
  ],

  // ലൂപ്പിംഗ് വീഡിയോ (LOOPING VIDEO)
  // Direct MP4 link ensures true seamless repeat playback
  loopVideoUrl: "/video/video1.mp4",
 // --- ADD THIS NEW PHOTO GALLERY ARRAY ---
  photoGallery: [
    { id: 1, url: "/images/vettia13.jpg", title: "വെറ്റില വിളവെടുപ്പ്" },
    { id: 2, url: "/images/vettia12.jpg", title: "തോട്ടത്തിലെ കൊടികൾ" },
    { id: 3, url: "/images/vettia2.jpg", title: "വെറ്റിലകൾ" },
    { id: 4, url: "/images/vettia14.jpg", title: "Achievement" },
    { id: 5, url: "/images/vettia15.jpg", title: "വെറ്റില" },
    { id: 6, url: "/images/vettia11.jpg", title: "ഫ്രഷ് ഇലകൾ" }
  ],
  // മിനിമൽ വിവരങ്ങൾ (MINIMAL DETAILS)
  highlights: [
    { title: "തുളസി വെറ്റില", desc: "മൃദുവായതും സുഗന്ധമുള്ളതുമായ പ്രീമിയം ഇനം." },
    { title: "കരിപ്പോൻ വെറ്റില", desc: "കട്ടിയും കടുംപച്ച നിറവുമുള്ള നീണ്ടുനിൽക്കുന്ന ഇനം." },
    { title: "ശുദ്ധമായ ജൈവരീതി", desc: "രാസകീടനാശിനികളില്ലാതെ സ്വാഭാവിക വളപ്രയോഗം മാത്രം." }
  ]
};

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-slide effect for the Photo Carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % farmData.carouselImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-stone-950 text-stone-100  font-sans selection:bg-emerald-500 selection:text-white">
      
      {/* 1. GLASSMORPHISM NAVBAR */}
      <nav className="fixed top-0 inset-x-0 z-50 bg-stone-950/60 backdrop-blur-md border-b border-white/10 px-6 py-4 flex justify-between items-center">
        <h1 className="text-lg md:text-xl font-bold bg-gradient-to-r from-emerald-400 to-teal-200 bg-clip-text text-transparent [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
          Sebastian George's Farm
        </h1>
        <a
          href={`https://wa.me/${farmData.whatsappNumber}?text=ഹലോ,%20വെറ്റിലയെപ്പറ്റി%20അറിയാൻ%20താല്പര്യമുണ്ട്.`}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-emerald-500 hover:bg-emerald-400 text-stone-950 text-xs font-bold px-4 py-2 rounded-full transition-all duration-300 shadow-lg shadow-emerald-500/20 active:scale-95"
        >
          WhatsApp
        </a>
      </nav>

      {/* 2. PHOTO CAROUSEL SECTION */}
      <section className="relative pt-20 px-4 max-w-5xl mx-auto">
        <div className="relative h-64 md:h-[420px] rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
          {farmData.carouselImages.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                index === currentSlide ? 'opacity-100' : 'opacity-0 pointer-events-none'
              }`}
            >
              <img
                src={slide.url}
                alt={slide.caption}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-6 left-6 right-6">
                <span className="text-xs md:text-sm font-medium text-emerald-400 bg-emerald-950/80 px-3 py-1 rounded-full border border-emerald-500/30 backdrop-blur-sm">
                  {slide.caption}
                </span>
              </div>
            </div>
          ))}

          {/* Carousel Indicators */}
          <div className="absolute bottom-4 right-6 flex space-x-2 z-10">
            {farmData.carouselImages.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentSlide(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === currentSlide ? 'w-6 bg-emerald-400' : 'w-2 bg-white/40'
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      <main className="max-w-5xl mx-auto px-4 py-12 space-y-16">

        {/* 3. REPEATING LOOP VIDEO SECTION */}
        <section className="space-y-4">
          <div className="flex items-center space-x-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <h2 className="text-xs font-semibold text-stone-400 uppercase tracking-widest">
              തോട്ടത്തിലെ കാഴ്ച
            </h2>
          </div>
          
          <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl aspect-video md:aspect-[21/9] bg-stone-900">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            >
              <source src={farmData.loopVideoUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="absolute inset-0 bg-stone-950/20 pointer-events-none" />
          </div>
        </section>

        {/* 4. MINIMAL DESCRIPTION CARDS */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {farmData.highlights.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white/[0.03] border border-white/5 backdrop-blur-sm hover:border-emerald-500/30 transition-all duration-300"
            >
              <h3 className="text-lg font-bold text-stone-100 mb-2">{item.title}</h3>
              <p className="text-xs text-stone-400 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </section>
        {/* PHOTO GALLERY GRID */}
        <section className="space-y-6">
          <div className="flex items-center space-x-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <h2 className="text-xs font-semibold text-stone-400 uppercase tracking-widest">
              ചിത്രങ്ങൾ (Photo Gallery)
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {farmData.photoGallery.map((photo) => (
              <div 
                key={photo.id} 
                className="group relative h-48 sm:h-64 rounded-2xl overflow-hidden border border-white/10 bg-stone-900 shadow-lg"
              >
                <img
                  src={photo.url}
                  alt={photo.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-300 flex items-end p-4">
                  <span className="text-xs font-medium text-emerald-300">
                    {photo.title}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 5. MODERN WHATSAPP CONTACT CARD */}
        <section className="relative overflow-hidden rounded-3xl p-8 bg-gradient-to-br from-emerald-950/40 via-stone-900 to-stone-950 border border-emerald-500/20 text-center space-y-6">
          <div className="space-y-2">
            <h2 className="text-2xl md:text-3xl font-extrabold text-white">
              ഫ്രഷ് വെറ്റിലകൾ ആവശ്യമുള്ളവർക്ക്
            </h2>
            <p className="text-xs text-stone-400">
              സ്ഥലം: {farmData.location}
            </p>
          </div>

          <div>
            <a
              href={`https://wa.me/${farmData.whatsappNumber}?text=ഹലോ%20ജോർജ്ജ്,%20എനിക്ക്%20വെറ്റില%20ഓർഡർ%20ചെയ്യണം.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-emerald-500 hover:bg-emerald-400 text-stone-950 font-extrabold text-sm px-8 py-4 rounded-full transition-all duration-300 shadow-xl shadow-emerald-500/20 hover:scale-105 active:scale-95"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M12.031 2c-5.514 0-9.999 4.486-9.999 10 0 1.763.458 3.486 1.328 5.021l-1.36 4.979 5.093-1.334c1.474.805 3.136 1.234 4.838 1.234 5.515 0 10-4.486 10-10s-4.485-10-10-10zm0 18c-1.528 0-3.023-.414-4.327-1.198l-.31-.186-3.218.843.859-3.138-.205-.327c-.859-1.371-1.312-2.955-1.312-4.594 0-4.411 3.589-8 8-8s8 3.589 8 8-3.589 8-8 8z" />
              </svg>
              <span>WhatsApp വഴി ബന്ധപ്പെടുക</span>
            </a>
          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="border-t border-white/5 py-8 text-center text-xs text-stone-600">
        <p>© {new Date().getFullYear()} {farmData.farmName}. All rights reserved.</p>
      </footer>

    </div>
  );
}