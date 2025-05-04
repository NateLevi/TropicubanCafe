import { TreePalm } from "lucide-react";

const Footer = () => {
  return (
    <footer 
      id="footer-section" 
      className="footer footer-horizontal footer-center bg-[#ffcc66] py-12 px-4 sm:px-6 text-[#5C3D2E] text-center left-0 w-full relative overflow-hidden"
    >
      {/* Palm leaves background with horizontal flip */}
      <div 
        className="absolute bottom-0 right-[-40px] w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] bg-no-repeat opacity-70"
        style={{
          backgroundImage: "url('/palmtreeleaves.webp')",
          backgroundSize: "contain",
          transform: "scale(-1, -1)", 
          backgroundPosition: "right bottom",
        }}
      ></div>
      
      <div className="container mx-auto flex flex-col items-center relative z-10">
        <TreePalm size={80} sm:size={110} className="text-[#5C3D2E]" />
        <h2 className="text-xl sm:text-2xl font-bold mt-4">
          CUBAN FLAVOR SO GOOD, YOU'LL START DANCING.
        </h2>
        <p className="mt-2 text-sm sm:text-base">5772 54th Ave N, Kenneth City, FL 33709</p>
        {/* Responsive grid for footer content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-6 text-xs sm:text-sm max-w-4xl w-full">
          {/* Hours - Center text on mobile */}
          <div className="md:text-left order-2 md:order-1">
            <p className="font-semibold mb-1">Hours:</p>
            <p>Mon - Thurs: 7:30am - 6:30pm</p>
            <p>Friday: 9am - 6:30pm</p>
            <p>Saturday: 7:30am - 6:30pm</p>
            <p>Sunday: Closed</p>
          </div>
          {/* Social Links - Center */}
          <div className="text-center order-1 md:order-2">
            <a href="#" className="hover:text-[#8B5E3C] block mb-1">
              <p>Instagram</p>
            </a>
            <a href="#" className="hover:text-[#8B5E3C] block">
              <p>Facebook</p>
            </a>
          </div>
          {/* Contact Info - Center on mobile */}
          <div className="md:text-right order-3">
            <p className="font-semibold mb-1">Contact:</p>
            <p>info@tropicubancafe.com</p>
            <p>727-456-2314</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
