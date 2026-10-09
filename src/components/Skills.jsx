import { useEffect, useState, useRef } from 'react';

const Skills = () => {
  const [categories, setCategories] = useState([]);
  const scrollRef = useRef(null);

  // State untuk fitur Drag-to-Scroll
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  useEffect(() => {
    fetch('./data.json')
      .then((res) => res.json())
      .then((data) => setCategories(data.skills || []))
      .catch((err) => console.error("Gagal memuat keahlian:", err));
  }, []);

  // Fungsi klik panah navigasi
  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -400 : 400;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  // --- Logika Deteksi Mouse (Drag to Scroll) ---
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseLeaveOrUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    
    const x = e.pageX - scrollRef.current.offsetLeft;
    const jarakGeser = (x - startX) * 1.5; // Sensitivitas geser
    
    scrollRef.current.scrollLeft = scrollLeft - jarakGeser;
  };

  return (
    <section id="keahlian" className="py-24 bg-slate-950 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/4 w-125 h-125 bg-indigo-600/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Kepala Seksi (Tanpa Panah) */}
        <div className="mb-12 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Gudang <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-indigo-500">Keahlian.</span>
          </h2>
          <p className="text-slate-400 max-w-2xl text-lg md:mx-0 mx-auto">
            Kumpulan teknologi yang saya gunakan untuk menghidupkan proyek digital.
          </p>
        </div>

        {/* Kontainer Utama Carousel & Panah Melayang */}
        <div className="relative group">
          
          {/* Tombol Panah Kiri */}
          <button 
            onClick={() => scroll('left')}
            className="absolute left-2 md:-left-4 top-1/2 -translate-y-1/2 z-20 p-3.5 rounded-full bg-slate-900/50 backdrop-blur-md border border-white/10 text-white hover:bg-slate-800/80 hover:border-indigo-500/50 hover:text-indigo-400 transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.4)]"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Tombol Panah Kanan */}
          <button 
            onClick={() => scroll('right')}
            className="absolute right-2 md:-right-4 top-1/2 -translate-y-1/2 z-20 p-3.5 rounded-full bg-slate-900/50 backdrop-blur-md border border-white/10 text-white hover:bg-slate-800/80 hover:border-indigo-500/50 hover:text-indigo-400 transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.4)]"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Area Geser Horizontal dengan Drag-to-Scroll */}
          <div 
            ref={scrollRef} 
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeaveOrUp}
            onMouseUp={handleMouseLeaveOrUp}
            onMouseMove={handleMouseMove}
            className={`flex gap-8 overflow-x-auto py-4 select-none [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] scrollbar-none ${isDragging ? 'cursor-grabbing snap-none' : 'cursor-grab snap-x snap-mandatory'}`}
          >
            {categories.map((category, idx) => (
              <div 
                key={idx} 
                className="snap-start shrink-0 w-[320px] md:w-100 bg-slate-900/60 border border-slate-800/80 rounded-2xl p-8 hover:border-cyan-500/30 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 hover:shadow-xl pointer-events-none md:pointer-events-auto"
              >
                <div>
                  <span className="text-xs font-mono text-cyan-400/80 tracking-widest uppercase block mb-3">0{idx + 1} / Kategori</span>
                  <h3 className="text-2xl font-bold text-white mb-3">{category.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-8">{category.description}</p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.items.map((item, index) => (
                    <span 
                      key={index} 
                      className="px-3.5 py-1.5 text-xs font-semibold text-slate-300 bg-slate-800/40 border border-slate-700/50 rounded-lg hover:border-cyan-500/40 hover:text-cyan-400 transition-all duration-300 cursor-default"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Skills;