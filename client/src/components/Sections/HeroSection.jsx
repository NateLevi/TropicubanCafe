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
        min-h-[100vh] md:min-h-[120vh] flex flex-col md:flex-row items-center justify-center md:justify-between 
        py-20 md:py-0 px-6 sm:px-12 md:px-20 lg:px-30 text-[#5C3D2E] 
        bg-[#ffcc66] bg-fixed
        relative
        // Define background images using Tailwind arbitrary values
        bg-[url('/HeroSandwich.png'),_url('/palmtreeleaves.webp')]
        // Define background sizes
        bg-[size:800px_auto,120px_auto]
        // Define background positions: Default/MD (Sandwich lower), LG+ (Sandwich higher)
        bg-[position:right_20px_top_300px,left_top_80px] //mobile, sm, md
        md:bg-[position:right_20px_top_500px,left_top_80px] // md and larger screens
        lg:bg-[position:right_20px_top_1px,left_top_80px] // lg and larger screens
        bg-no-repeat
      "
    >
      {/* Cuban Badge - Adjust position based on screen size */}
      <div className="absolute top-27 right-4          // Default (mobile) position
                      md:top-60 md:right-8  // Medium screens
                      lg:top-50 lg:right-125   // Large screens 
                      w-24 h-24 md:w-32 md:h-32 z-20">
        {/* Glow effect */}
        <div className="absolute inset-0 rounded-full bg-[#2CA6A4] opacity-40 blur-md animate-pulse"></div>
        {/* Starburst */}
        <div className="absolute inset-0 rounded-full border-4 md:border-8 border-[#ffcc66]/30 transform scale-105 md:scale-110"></div>
        {/* Main badge */}
        <div className="absolute inset-0 rounded-full bg-[#5C3D2E] flex flex-col items-center justify-center transform rotate-[-12deg] shadow-lg border-2 md:border-4 border-[#ffcc66]">
          <span className="text-[#ffcc66] text-[10px] md:text-xs font-bold uppercase">Authentic</span>
          <span className="text-[#ffcc66] text-lg md:text-xl font-bold">CUBAN</span>
          <span className="text-[#ffcc66] text-[10px] md:text-xs font-bold uppercase">Since 2015</span>
        </div>
      </div>
      
      {/* Left Side: Text Content - Center text on mobile, adjust top margin */}
      <div className="max-w-lg z-10 text-center md:text-left mt-[-40px] md:mt-[-500px] lg:mt-16 order-1 md:order-none"> 
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">TROPICUBAN BITES</h1>
        <p className="italic text-base sm:text-lg mt-4">
          The bold flavors of Cuba, stacked between two slices of perfection.
        </p>
        <button 
          className="mt-6 bg-[#2CA6A4] text-[#5C3D2E] px-5 py-2 sm:px-6 sm:py-3 text-sm sm:text-base font-bold hover:bg-[#238C83] transition cursor-pointer"
          onClick={handleOrderNowClick}
        >
          Order Now
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
