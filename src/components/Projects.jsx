import { useEffect, useState, useRef } from 'react';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const scrollRef = useRef(null);

  // State untuk fitur Drag-to-Scroll
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  useEffect(() => {
    fetch('./data.json')
      .then((res) => res.json())
      .then((data) => setProjects(data.projects || []))
      .catch((err) => console.error("Gagal memuat proyek:", err));
  }, []);

  // Fungsi klik panah (menggunakan behavior: 'smooth' secara mandiri)
  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -350 : 350;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  // --- Logika Deteksi Mouse (Drag to Scroll) ---
  const handleMouseDown = (e) => {
    setIsDragging(true);
    // Mencatat posisi awal X kursor saat pertama kali diklik
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    // Mencatat posisi scroll saat ini
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseLeaveOrUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return; // Hentikan fungsi jika mouse tidak sedang ditekan
    e.preventDefault(); // Mencegah browser menyeleksi teks/gambar secara tidak sengaja
    
    // Menghitung jarak pergerakan kursor
    const x = e.pageX - scrollRef.current.offsetLeft;
    const jarakGeser = (x - startX) * 1.5; // Angka 1.5 adalah sensitivitas kecepatan geser
    
    // Menerapkan jarak geser ke kontainer
    scrollRef.current.scrollLeft = scrollLeft - jarakGeser;
  };

  return (
    <section id="proyek" className="py-24 bg-slate-950 border-t border-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="mb-12 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Rekam Jejak <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-blue-500">Karya.</span>
          </h2>
          <p className="text-slate-400 max-w-2xl text-lg md:mx-0 mx-auto">
            Kumpulan eksplorasi teknis dan solusi digital yang saya bangun.
          </p>
        </div>

        <div className="relative group">
          
          <button 
            onClick={() => scroll('left')}
            className="absolute left-2 md:-left-4 top-1/2 -translate-y-1/2 z-20 p-3.5 rounded-full bg-slate-900/50 backdrop-blur-md border border-white/10 text-white hover:bg-slate-800/80 hover:border-cyan-500/50 hover:text-cyan-400 transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.4)]"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button 
            onClick={() => scroll('right')}
            className="absolute right-2 md:-right-4 top-1/2 -translate-y-1/2 z-20 p-3.5 rounded-full bg-slate-900/50 backdrop-blur-md border border-white/10 text-white hover:bg-slate-800/80 hover:border-cyan-500/50 hover:text-cyan-400 transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.4)]"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Kontainer Geser Horizontal dengan Event Listeners Mouse */}
          <div 
            ref={scrollRef} 
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeaveOrUp}
            onMouseUp={handleMouseLeaveOrUp}
            onMouseMove={handleMouseMove}
            className={`flex gap-8 overflow-x-auto py-4 select-none [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] scrollbar-none ${isDragging ? 'cursor-grabbing snap-none' : 'cursor-grab snap-x snap-mandatory'}`}
          >
            {projects.map((project, idx) => (
              <div 
                key={idx} 
                className="snap-start shrink-0 w-75 md:w-87.5 bg-slate-900/80 border border-slate-800 rounded-2xl overflow-hidden hover:border-cyan-500/30 transition-all duration-300 flex flex-col hover:-translate-y-1 hover:shadow-xl pointer-events-none md:pointer-events-auto"
              >
                <div className="h-44 bg-linear-to-br from-slate-800 to-slate-900 flex items-center justify-center relative">
                  <span className="text-slate-600 font-medium text-xs">[ Pratinjau {project.id} ]</span>
                </div>
                <div className="p-6 flex flex-col grow">
                  <h3 className="text-lg font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-6 grow">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.techStack.map((tech, index) => (
                      <span key={index} className="px-2.5 py-1 text-xs font-semibold text-cyan-300 bg-cyan-400/10 rounded-full border border-cyan-400/20">{tech}</span>
                    ))}
                  </div>
                  {/* Mencegah tautan terklik saat sedang menggeser */}
                  <a 
                    href={project.link} 
                    onClick={(e) => { if (isDragging) e.preventDefault() }}
                    className="inline-flex items-center text-sm font-semibold text-blue-400 hover:text-blue-300"
                  >
                    Tinjau Repositori <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                  </a>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Projects;