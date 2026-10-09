import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 font-sans text-slate-200">
      <Navbar />

      {/* Bagian Hero Utama (min-h-screen dihapus, padding disesuaikan) */}
      <main className="relative flex items-center justify-center pt-36 pb-20 overflow-hidden">
        
        {/* Ornamen Latar Belakang (Glow diperkecil) */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-150px h-100px bg-blue-600/15 blur-[100px] rounded-full pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-8">
            
            {/* Sisi Kiri: Tipografi dan CTA (Ukuran teks diturunkan) */}
            <div className="flex-1 text-center lg:text-left">
              <div className="inline-block px-4 py-1.5 mb-5 rounded-full border border-blue-500/30 bg-blue-500/10 text-cyan-400 font-medium text-xs tracking-wide">
                Menerima Klien Baru
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-cyan-400 via-blue-500 to-indigo-500 pb-2 leading-tight">
                Merakit Solusi <br className="hidden lg:block"/> Digital Berkinerja.
              </h1>
              <p className="mt-5 text-slate-400 text-base sm:text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed">
                Saya membangun antarmuka web modern, responsif, dan terukur menggunakan React dan ekosistem arsitektur JavaScript terkini. Mari wujudkan ide Anda menjadi aplikasi yang fungsional.
              </p>
              
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a 
                  href="#proyek" 
                  className="px-7 py-3 rounded-full font-bold text-white bg-blue-600 hover:bg-blue-500 transition-all duration-300 shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:shadow-[0_0_35px_rgba(37,99,235,0.7)] text-sm"
                >
                  Lihat Etalase
                </a>
                <a 
                  href="https://github.com" 
                  target="_blank"
                  rel="noreferrer"
                  className="px-7 py-3 rounded-full font-bold text-slate-300 bg-slate-900/50 hover:bg-slate-800 hover:text-white transition-all duration-300 border border-slate-700 hover:border-slate-500 text-sm"
                >
                  GitHub Saya
                </a>
              </div>
            </div>

            {/* Sisi Kanan: Tempat Gambar (Dimensi maksimal diperkecil) */}
            <div className="flex-1 relative w-full max-w-[16rem] sm:max-w-xs lg:max-w-sm">
              
              {/* Ornamen Pendaran di Belakang Gambar */}
              <div className="absolute -inset-1 bg-linear-to-tr from-cyan-400 to-blue-600 rounded-4xl blur opacity-40 animate-pulse"></div>
              
              {/* Kanvas Gambar Utama */}
              <div className="relative aspect-square rounded-[1.8rem] bg-slate-900 border border-slate-700/50 overflow-hidden flex items-center justify-center group shadow-2xl transition-transform duration-500 hover:scale-[1.02]">
                
                <span className="text-slate-500 text-sm font-medium group-hover:text-cyan-400 transition-colors px-6 text-center">
                  [ Ganti dengan tag &lt;img&gt; Anda nanti ]
                </span>

              </div>
            </div>

          </div>
        </div>
      </main>
      
      {/* ================= PEMBATAS SEKSI SUPERIOR (LEBIH TEBAL & BERPENDAR) ================= */}
      <div className="w-full flex flex-col items-center py-16 relative z-10">
        
        {/* Kontainer Utama Pembatas */}
        <div className="w-4/5 md:w-2/3 flex items-center justify-center relative">
          
          {/* Sisi Kiri: Garis Gradasi Tebal */}
          <div className="flex-1 h-0.5 bg-linear-to-r from-transparent via-cyan-500/60 to-cyan-400"></div>
          
          {/* Pusat Pembatas: Ornamen Berlian Berpendar */}
          <div className="flex items-center justify-center mx-4 relative">
            {/* Efek pendaran besar di balik berlian */}
            <div className="absolute w-12 h-12 bg-cyan-400/30 blur-md rounded-full animate-pulse"></div>
            
            {/* Berlian Tengah */}
            <div className="w-3 h-3 bg-cyan-400 rotate-45 border border-white/40 shadow-[0_0_12px_rgba(34,211,238,0.8)] relative z-10"></div>
            
            {/* Titik-titik dekoratif sayap luar */}
            <div className="absolute -left-6 w-1 h-1 bg-cyan-400/80 rounded-full"></div>
            <div className="absolute -right-6 w-1 h-1 bg-cyan-400/80 rounded-full"></div>
          </div>
          
          {/* Sisi Kanan: Garis Gradasi Tebal */}
          <div className="flex-1 h-0.5 bg-linear-to-r from-cyan-400 via-cyan-500/60 to-transparent"></div>
          
        </div>
        
        {/* Soft Glow Ambient Horizontal (Ekstra Pendaran Latar Belakang) */}
        <div className="absolute w-2/3 h-12 bg-cyan-500/5 blur-2xl rounded-full -translate-y-4 pointer-events-none"></div>
      </div>
      {/* ===================================================================================== */}

      {/* Konten dummy panjang untuk melihat efek scroll */}
    <Projects/>

      {/* ================= PEMBATAS SEKSI SUPERIOR (LEBIH TEBAL & BERPENDAR) ================= */}
      <div className="w-full flex flex-col items-center py-16 relative z-10">
        
        {/* Kontainer Utama Pembatas */}
        <div className="w-4/5 md:w-2/3 flex items-center justify-center relative">
          
          {/* Sisi Kiri: Garis Gradasi Tebal */}
          <div className="flex-1 h-0.5 bg-linear-to-r from-transparent via-cyan-500/60 to-cyan-400"></div>
          
          {/* Pusat Pembatas: Ornamen Berlian Berpendar */}
          <div className="flex items-center justify-center mx-4 relative">
            {/* Efek pendaran besar di balik berlian */}
            <div className="absolute w-12 h-12 bg-cyan-400/30 blur-md rounded-full animate-pulse"></div>
            
            {/* Berlian Tengah */}
            <div className="w-3 h-3 bg-cyan-400 rotate-45 border border-white/40 shadow-[0_0_12px_rgba(34,211,238,0.8)] relative z-10"></div>
            
            {/* Titik-titik dekoratif sayap luar */}
            <div className="absolute -left-6 w-1 h-1 bg-cyan-400/80 rounded-full"></div>
            <div className="absolute -right-6 w-1 h-1 bg-cyan-400/80 rounded-full"></div>
          </div>
          
          {/* Sisi Kanan: Garis Gradasi Tebal */}
          <div className="flex-1 h-0.5 bg-linear-to-r from-cyan-400 via-cyan-500/60 to-transparent"></div>
          
        </div>
        
        {/* Soft Glow Ambient Horizontal (Ekstra Pendaran Latar Belakang) */}
        <div className="absolute w-2/3 h-12 bg-cyan-500/5 blur-2xl rounded-full -translate-y-4 pointer-events-none"></div>
      </div>
      {/* ===================================================================================== */}

    <Skills />

    {/* Pembatas 3 (Antara Keahlian dan Footer) */}
      <div className="w-full flex flex-col items-center py-16 relative z-10">
        <div className="w-4/5 md:w-2/3 flex items-center justify-center relative animate-pulse">
          <div className="flex-1 h-0.5 bg-linear-to-r from-transparent via-blue-500/60 to-blue-400"></div>
          <div className="flex items-center justify-center mx-4 relative">
            <div className="absolute w-12 h-12 bg-blue-400/30 blur-md rounded-full"></div>
            <div className="w-3 h-3 bg-blue-400 rotate-45 border border-white/40 shadow-[0_0_12px_rgba(37,99,235,0.8)] relative z-10"></div>
          </div>
          <div className="flex-1 h-0.5 bg-linear-to-r from-blue-400 via-blue-500/60 to-transparent"></div>
        </div>
      </div>

    {/* 2. Memanggil Komponen Kaki Halaman (Footer) */}
      <Footer />

    </div>
  )
}

export default App;