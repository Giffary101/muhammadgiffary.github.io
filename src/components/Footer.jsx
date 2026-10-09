const Footer = () => {
  // Array data media sosial
  const socialMedia = [
    {
      name: 'Instagram',
      href: 'https://instagram.com', // Ganti dengan tautan asli Anda
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
        </svg>
      )
    },
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com', // Ganti dengan tautan asli Anda
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
        </svg>
      )
    },
    {
      name: 'TikTok',
      href: 'https://tiktok.com', // Ganti dengan tautan asli Anda
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 448 512">
          <path d="M448 209.91a210.06 210.06 0 0 1-122.77-39.25v178.72a162.55 162.55 0 1 1-225-156.59l.06-.06a162 162 0 0 1 43.14-16c9.12-2.31 18.59-3.53 28.16-3.53 10.33 0 20.48 1.34 30.14 3.93a12 12 0 0 1 8.86 11.6v62.43a12 12 0 0 1-13.84 11.89c-6.8-.95-13.68-1.42-20.59-1.42a82.26 82.26 0 1 0 82.26 82.26V0h86.73a119.5 119.5 0 0 0 82.23 81.33c0 9.14-.06 18.25-.06 27.35a12 12 0 0 1-8.86 11.6 120 120 0 0 0-82.23-11.6v101.23z"/>
        </svg>
      )
    },
    {
      name: 'GitHub',
      href: 'https://github.com', // Ganti dengan tautan asli Anda
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      )
    }
  ];

  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-900 pt-20 pb-10 relative overflow-hidden">
      
      {/* Pendaran Latar Belakang */}
      <div className="absolute bottom-0 right-1/4 w-100 h-100 bg-blue-600/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Konten Utama */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 pb-16 border-b border-slate-900">
          
          {/* Identitas Diri */}
          <div className="text-center md:text-left">
            <span className="text-2xl font-bold text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-indigo-500 block mb-3">
              Muhammad Giffary.
            </span>
            <p className="text-slate-400 max-w-sm text-sm leading-relaxed">
              Membangun antarmuka web modern, responsif, dan berkinerja tinggi. Mari berkolaborasi dan wujudkan ide digital Anda.
            </p>
          </div>

          {/* Navigasi Mini Sosial (Ikon-ikon Media Sosial) */}
          <div className="flex flex-col items-center md:items-end gap-4">
            <span className="text-xs font-mono text-cyan-400/80 tracking-widest uppercase">
              Terhubung Secara Digital
            </span>
            <div className="flex gap-3">
              {socialMedia.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.name}
                  className="w-11 h-11 rounded-lg bg-slate-900/60 border border-slate-800/80 hover:border-cyan-500/40 hover:text-cyan-400 text-slate-400 flex items-center justify-center transition-all duration-300 hover:shadow-[0_0_15px_rgba(6,182,212,0.15)]"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* Hak Cipta & Tombol Kembali ke Atas */}
        <div className="flex flex-col-reverse sm:flex-row justify-between items-center gap-6 pt-10">
          
          {/* Teks Copyright */}
          <p className="text-slate-500 text-xs text-center sm:text-left">
            © {new Date().getFullYear()} Muhammad Giffary. Hak Cipta Dilindungi.
          </p>

          {/* Tombol Back To Top */}
          <button
            onClick={handleBackToTop}
            className="group flex items-center gap-2 text-xs font-semibold text-slate-400 hover:text-cyan-400 transition-colors duration-300 focus:outline-none"
          >
            <span>Kembali ke Atas</span>
            <svg 
              className="w-4 h-4 transform group-hover:-translate-y-1 transition-transform duration-300" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor" 
              strokeWidth="2.5"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </button>

        </div>

      </div>
    </footer>
  );
};

export default Footer;