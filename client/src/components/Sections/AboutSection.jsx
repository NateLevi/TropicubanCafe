import { useEffect, useRef, useState } from "react";

const AboutSection = () => {
  const imgRef = useRef(null);
  const [scale, setScale] = useState(1); // start zoomed

  useEffect(() => {
    const handleScroll = () => {
      if (!imgRef.current) return;

      const { top, height } = imgRef.current.getBoundingClientRect();
      // calculate scroll progress
      const progress = Math.min(Math.max((window.innerHeight - top) / (window.innerHeight + height), 0), 1);
      setScale(1.5 - progress * 0.5);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative w-full lg:py-15 px-4 text-[#5C3D2E]">
      <div className="absolute inset-0 flex">
        <div className="w-full lg:w-1/2 bg-white" />
        <div className="w-1/2 overflow-hidden hidden lg:block">
          <img
            ref={imgRef}
            src="/cuba.jpg"
            alt="Delicious sandwich"
            className="sticky top-0 w-full h-full object-cover transition-transform duration-200 ease-out"
            style={{ transform: `scale(${scale})` }}
          />
        </div>
      </div>

      <div className="relative max-w-6xl mx-auto flex items-center px-4 lg:px-10">
        <div className="w-full lg:w-1/2 pr-0 lg:pr-8">
          <h1 className="text-3xl font-bold mb-4 mt-4">ABOUT US</h1>
          <div className="space-y-4 text-xs sm:text-sm">
            <p>
              Established in 2015, Tropicuban is St. Petersburg's hidden gem for authentic Cuban cuisine. Our family-owned sandwich shop brings the vibrant flavors of Havana to Florida's Gulf Coast.
            </p>
            <p>
              Every sandwich we craft tells a story—from our house specialty Cuban Sandwich to our delicious Ham Tropi Sandwich. Using recipes passed down through generations, we pride ourselves on fresh ingredients and traditional methods that transport you straight to the streets of Old Havana.
            </p>
            <p>
              We're more than just a sandwich shop—we're a celebration of Cuban culture, where classic flavors meet warm hospitality. Visit us to experience a true taste of Havana right here in Florida.
            </p>
          </div>
        </div>
      </div>

      <div className="block lg:hidden mt-8 -mx-4 relative z-10"> 
        <img 
          src="/cuba.jpg" 
          alt="Cuba street scene" 
          className="w-full h-full object-cover" 
        />
      </div>
    </section>
  );
};

export default AboutSection;
