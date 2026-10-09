const Skills = () => {
  // Data Keahlian dikelompokkan berdasarkan Kategori
  const skillCategories = [
    {
      title: "Frontend Development",
      description: "Membangun antarmuka pengguna yang responsif, interaktif, dan berkinerja tinggi.",
      skills: ["React.js", "Vite", "JavaScript (ES6+)", "Tailwind CSS", "HTML5 & CSS3", "Framer Motion"]
    },
    {
      title: "Backend & Alat bantu",
      description: "Mengelola logika server, database, serta alur kerja pengembangan.",
      skills: ["Node.js", "Express.js", "RESTful API", "Git & GitHub", "npm", "Postman"]
    },
    {
      title: "Desain & Prototyping",
      description: "Menerjemahkan ide visual menjadi cetak biru sebelum masuk ke tahap pengkodean.",
      skills: ["Figma", "UI/UX Design", "Wireframing", "Visual Hierarchy", "Responsive Design"]
    }
  ];

  return (
    <section id="keahlian" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Glow Ornamen Latar belakang */}
      <div className="absolute top-1/2 left-1/4 w-125 h-125 bg-indigo-600/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Kepala Seksi */}
        <div className="text-center md:text-left mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Gudang <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-indigo-500">Keahlian.</span>
          </h2>
          <p className="text-slate-400 max-w-2xl text-lg">
            Teknologi, metodologi, dan perangkat yang saya gunakan sehari-hari untuk menghidupkan proyek digital dari sekadar konsep menjadi kode yang berjalan.
          </p>
        </div>

        {/* Grid Kategori Keahlian */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <div 
              key={idx} 
              className="bg-slate-900/60 border border-slate-800/80 rounded-2xl p-8 hover:border-cyan-500/30 transition-all duration-300 hover:shadow-[0_8px_30px_rgba(6,182,212,0.05)] flex flex-col justify-between"
            >
              <div>
                {/* Nomor Kategori Desain Kecil */}
                <span className="text-xs font-mono text-cyan-400/80 tracking-widest uppercase block mb-3">
                  0{idx + 1} / Kategori
                </span>
                
                {/* Judul Kategori */}
                <h3 className="text-2xl font-bold text-white mb-3">
                  {category.title}
                </h3>
                
                {/* Deskripsi */}
                <p className="text-slate-400 text-sm leading-relaxed mb-8">
                  {category.description}
                </p>
              </div>

              {/* Tag/Badges Keahlian */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, index) => (
                  <span 
                    key={index} 
                    className="px-3.5 py-1.5 text-xs font-semibold text-slate-300 bg-slate-800/40 border border-slate-700/50 rounded-lg hover:border-cyan-500/40 hover:text-cyan-400 hover:bg-cyan-500/5 transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;