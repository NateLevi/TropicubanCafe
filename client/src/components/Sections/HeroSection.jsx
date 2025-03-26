const HeroSection = () => {
  const handleOrderNowClick = () => {
    const menuSection = document.getElementById('menu-section');
    if (menuSection) {
      menuSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      className="
        min-h-[120vh] flex items-center justify-between 
        px-30 text-[#5C3D2E] 
        bg-[#ffcc66] bg-no-repeat bg-fixed
        relative
      "
      style={{
        backgroundImage: "url('/HeroSandwich.png'), url('/palmtreeleaves.webp')",
        // Keep image size consistent regardless of screen size:
        backgroundSize: "800px auto, 120px auto",
        backgroundPosition: "right 20px top 1px, left top 100px",
        backgroundRepeat: "no-repeat, no-repeat",
        
      }}
    >
      {/* Cuban Badge with enhanced effect */}
      <div className="absolute top-60 right-125 w-32 h-32 z-20">
        {/* Glow effect behind the badge */}
        <div className="absolute inset-0 w-32 h-32 rounded-full bg-[#2CA6A4] opacity-40 blur-md animate-pulse"></div>
        {/* Subtle starburst effect */}
        <div className="absolute inset-0 w-32 h-32 rounded-full border-8 border-[#ffcc66]/30 transform scale-110"></div>
        {/* Main badge */}
        <div className="absolute inset-0 w-32 h-32 rounded-full bg-[#5C3D2E] flex flex-col items-center justify-center transform rotate-[-12deg] shadow-lg border-4 border-[#ffcc66]">
          <span className="text-[#ffcc66] text-xs font-bold uppercase">Authentic</span>
          <span className="text-[#ffcc66] text-xl font-bold">CUBAN</span>
          <span className="text-[#ffcc66] text-xs font-bold uppercase">Since 2015</span>
        </div>
      </div>
      
      {/* Left Side: Text Content */}
      <div className="max-w-lg z-10 md:mt-0 mt-16">
        <h1 className="text-6xl font-bold leading-tight">TROPICUBAN BITES</h1>
        <p className="italic text-lg mt-4">
          The bold flavors of Cuba, stacked between two slices of perfection.
        </p>
        <button 
          className="mt-6 bg-[#2CA6A4] text-[#5C3D2E] px-6 py-3 font-bold hover:bg-[#238C83] transition cursor-pointer"
          onClick={handleOrderNowClick}
        >
          Order Now
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
