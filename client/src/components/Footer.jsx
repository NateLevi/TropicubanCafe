import { TreePalm } from "lucide-react";

const Footer = () => {
  return (
    <footer 
      id="footer-section" 
      className="footer footer-horizontal footer-center bg-[#ffcc66] pb-30 text-[#5C3D2E] text-center left-0 w-full relative overflow-hidden"
    >
      {/* Palm leaves background with horizontal flip */}
      <div 
        className="absolute bottom-0 right-0 w-[120px] h-[120px] bg-no-repeat"
        style={{
          backgroundImage: "url('/palmtreeleaves.webp')",
          backgroundSize: "120px auto",
          transform: "scaleX(-1) scaleY(-1)", // Horizontal flip
          backgroundPosition: "bottom ",
          right: "-10px",
        }}
      ></div>
      
      <div className="container mx-auto flex flex-col items-center relative z-10">
        <TreePalm size={110} className="text-[#5C3D2E]" />
        <h2 className="text-2xl font-bold mt-4">
          CUBAN FLAVOR SO GOOD, YOU'LL START DANCING.
        </h2>
        <p className="mt-2">5772 54th Ave N, Kenneth City, FL 33709</p>
        <div className="grid grid-cols-3 gap-6 mt-6 text-sm max-w-4xl w-full">
          <div className="text-left">
            <p>Mon - Thurs: 7:30am - 6:30pm</p>
            <p>Friday: 9am - 6:30pm</p>
            <p>Saturday: 7:30am - 6:30pm</p>
            <p>Sunday: Closed</p>
          </div>
          <div className="text-center">
            <a href="#" className="hover:text-[#8B5E3C]">
              <p>Instagram</p>
            </a>
            <a href="#" className="hover:text-[#8B5E3C]">
              <p>Facebook</p>
            </a>
          </div>
          <div className="text-right">
            <p>info@tropicubancafe.com</p>
            
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
