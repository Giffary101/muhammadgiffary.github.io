const Projects = () => {
  // Array data proyek untuk mempermudah render dan skalabilitas
  const projectList = [
    {
      id: 1,
      title: 'Sistem Manajemen Sesi Web',
      description: 'Arsitektur web terintegrasi dengan mekanisme penyimpanan status (state) pengguna dan pengatur waktu keluar (auto-logout) otomatis untuk keamanan tingkat tinggi.',
      techStack: ['React.js', 'Node.js', 'Tailwind'],
      link: '#',
    },
    {
      id: 2,
      title: 'Dasbor Metrik Likuiditas',
      description: 'Antarmuka analitik yang melacak volume pool dan tren pasar ekosistem desentralisasi secara real-time, memberikan visualisasi data yang presisi.',
      techStack: ['JavaScript', 'API', 'CSS Variables'],
      link: '#',
    },
    {
      id: 3,
      title: 'Klon UI Dokumen Elektronik',
      description: 'Bedah kode dan rekonstruksi tata letak antarmuka aplikasi tanda tangan digital dengan fokus pada keseimbangan spasial dan perataan elemen asimetris.',
      techStack: ['HTML', 'Tailwind', 'Figma'],
      link: '#',
    }
  ];

  return (
    <section id="proyek" className="py-24 bg-slate-950 border-t border-slate-800/50 relative">
      
      {/* Ornamen Latar Belakang Halus */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-600/5 blur-[120px] rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Kepala Seksi */}
        <div className="text-center md:text-left mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Rekam Jejak <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-blue-500">Karya.</span>
          </h2>
          <p className="text-slate-400 max-w-2xl text-lg">
            Kumpulan eksplorasi teknis dan solusi digital yang dibangun melalui proses bedah kode, pemodelan data, dan perancangan antarmuka visual.
          </p>
        </div>

        {/* Tata Letak Grid untuk Kartu Proyek */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectList.map((project) => (
            <div 
              key={project.id} 
              className="group bg-slate-900 border border-slate-700/50 rounded-2xl overflow-hidden hover:-translate-y-2 transition-all duration-300 hover:shadow-[0_10px_30px_rgba(37,99,235,0.15)] flex flex-col"
            >
              
              {/* Kanvas Gambar Proyek (Placeholder) */}
              <div className="h-48 bg-linear-to-br from-slate-800 to-slate-900 border-b border-slate-800 flex items-center justify-center overflow-hidden relative">
                {/* Efek overlay saat kursor diarahkan */}
                <div className="absolute inset-0 bg-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="text-slate-600 font-medium text-sm px-4 text-center">
                  [ Gambar Pratinjau Proyek {project.id} ]
                </span>
              </div>

              {/* Konten Teks Proyek */}
              <div className="p-6 flex flex-col grow">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-6 grow">
                  {project.description}
                </p>
                
                {/* Tumpukan Teknologi (Tech Stack) */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.map((tech, index) => (
                    <span 
                      key={index} 
                      className="px-3 py-1 text-xs font-medium text-cyan-300 bg-cyan-400/10 rounded-full border border-cyan-400/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Tautan Proyek */}
                <a 
                  href={project.link}
                  className="inline-flex items-center text-sm font-semibold text-blue-400 hover:text-blue-300 transition-colors"
                >
                  Tinjau Repositori
                  <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;