import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import AboutSection from "../components/Sections/AboutSection";
import HeroSection from "../components/Sections/HeroSection";
import MenuSection from "../components/Sections/MenuSection";
import PhotoSection from "../components/Sections/PhotoSection";
import SpecialSection from "../components/Sections/SpecialSection";
import StackedSandwich from "../components/Sections/StackedSandwichs";


const HomePage = ({ addToCart }) => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const scrollTo = searchParams.get('scrollTo');
    
    if (scrollTo) {
      // Add a small delay to ensure the section is rendered
      setTimeout(() => {
        if (scrollTo === 'menu-section') {
          const menuSection = document.getElementById('menu-section');
          if (menuSection) {
            menuSection.scrollIntoView({ behavior: 'smooth' });
            
            // Clear the URL parameter after scrolling
            setTimeout(() => {
              navigate('/', { replace: true });
            }, 100);
          }
        } else if (scrollTo === 'footer-section') {
          const footerSection = document.getElementById('footer-section');
          if (footerSection) {
            footerSection.scrollIntoView({ behavior: 'smooth' });
            
            // Clear the URL parameter after scrolling
            setTimeout(() => {
              navigate('/', { replace: true });
            }, 100);
          }
        }
      }, 300);
    }
  }, [location.search, navigate]);

  return (
    <div className="relative overflow-hidden">
      {/* Hero Section on top */}
      <HeroSection />
      {/* Menu Section will overlap the image when scrolled up */}
      <MenuSection addToCart={addToCart} />
      {/* Photo Section */}
      <PhotoSection/>
      <AboutSection/>
      <div className="relative">
        <SpecialSection/>
        <StackedSandwich/>
      </div>
    </div>
  );
};

export default HomePage;
