import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // State untuk melacak status gulir layar dan posisi kursor (hover)
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Memantau pergerakan gulir secara real-time
  useEffect(() => {
    const handleScroll = () => {
      // Jika layar digulir lebih dari 20 piksel ke bawah, state menjadi true
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Logika penentuan latar belakang Navbar
  // Aktif (gelap/blur) JIKA layar digulir ATAU kursor diarahkan ATAU menu seluler terbuka
  const navBackground = (isScrolled || isHovered || isMobileMenuOpen)
    ? 'bg-slate-900/95 backdrop-blur-md border-b border-slate-800 shadow-lg'
    : 'bg-transparent border-transparent py-2'; // py-2 memberikan efek sedikit membesar saat di atas

  const navLinks = [
    { name: 'Beranda', href: '#beranda' },
    { name: 'Keahlian', href: '#keahlian' },
    { name: 'Proyek', href: '#proyek' },
  ];

  return (
    <nav 
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out ${navBackground}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          <div className="shrink-0 cursor-pointer">
            <span className="text-2xl font-bold text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-blue-500">
              Portofolio.
            </span>
          </div>

          <div className="hidden md:flex space-x-10">
            {navLinks.map((link, index) => (
              <a 
                key={index} 
                href={link.href} 
                className="text-slate-300 hover:text-cyan-400 transition-colors font-medium tracking-wide"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="hidden md:flex">
            <a 
              href="/cv-portofolio.pdf" 
              download="CV_Portofolio.pdf"
              className="px-6 py-2.5 rounded-full font-semibold text-white bg-blue-600 hover:bg-blue-700 transition-all duration-300 shadow-[0_0_15px_rgba(37,99,235,0.4)] hover:shadow-[0_0_25px_rgba(37,99,235,0.7)] hover:-translate-y-1"
            >
              Unduh CV
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-slate-300 hover:text-white focus:outline-none"
            >
              <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-slate-900/95 backdrop-blur-xl border-b border-slate-800 absolute w-full">
          <div className="px-4 pt-2 pb-6 space-y-2 shadow-2xl">
            {navLinks.map((link, index) => (
              <a 
                key={index} 
                href={link.href} 
                className="block px-3 py-3 rounded-lg text-base font-medium text-slate-300 hover:text-white hover:bg-slate-800/50"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="/cv-portofolio.pdf" 
              download="CV_Portofolio.pdf"
              className="block mt-6 px-3 py-3 rounded-lg text-center font-bold text-white bg-blue-600 hover:bg-blue-700 shadow-lg"
            >
              Unduh CV
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;