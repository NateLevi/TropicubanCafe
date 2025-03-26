import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import { TreePalm } from "lucide-react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

const NavBar = ({ cartItemCount = 0, openCart, closeCart }) => {
  const navigate = useNavigate();
  const location = useLocation();
  
  const handleOrderNowClick = () => {
    // Close cart modal when Order Now is clicked
    closeCart();
    
    // Check if we're already on the homepage
    if (location.pathname === '/') {
      // Clear any existing URL parameters and reset the URL
      if (location.search) {
        navigate('/', { replace: true });
        // After resetting URL, wait a moment then scroll to menu
        setTimeout(() => {
          const menuSection = document.getElementById('menu-section');
          if (menuSection) {
            menuSection.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      } else {
        // If no URL parameters, just scroll to menu section
        const menuSection = document.getElementById('menu-section');
        if (menuSection) {
          menuSection.scrollIntoView({ behavior: 'smooth' });
        }
      }
    } else {
      // If on another page, always navigate to homepage menu section
      navigate('/?scrollTo=menu-section', { replace: true });
    }
  };

  // Function to handle the "Contact Us" click
  const handleContactUsClick = () => {
    // Close cart modal when Contact Us is clicked
    closeCart();
    
    // Check if already on the homepage
    if (location.pathname === '/') {
      // If on homepage, just scroll to footer section
      const footerSection = document.getElementById('footer-section');
      if (footerSection) {
        footerSection.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // If on another page, navigate to homepage with a query param
      navigate('/?scrollTo=footer-section');
    }
  };

  // Function to handle NavLink clicks
  const handleNavLinkClick = () => {
    // Close cart modal when any nav link is clicked
    closeCart();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="fixed w-full z-100 bg-[#ffcc66] text-[#5C3D2E] py-5 shadow-md border-black border-b-1 ">
      <div className="container mx-auto flex justify-between items-center px-6">
        
        {/* Logo & Brand Name */}
        <div className="flex items-center space-x-2">
          <TreePalm size={32} className="text-[#5C3D2E] flex-shrink-0" />
          <NavLink 
            to="/" 
            className="text-2xl font-bold"
            onClick={handleNavLinkClick}
          >
            Tropicuban
          </NavLink>
        </div>

        {/* Navigation Links */}
        <nav>
          <ul className="flex items-center space-x-6 text-[#5C3D2E]">
            <li>
              <button 
                className="relative px-1 py-2 rounded transition bg-transparent cursor-pointer hover:bg-[#2CA6A4] hover:text-[#5C3D2E]"
                onClick={handleOrderNowClick}
              >
                Order Now
              </button>
            </li>
            <li className="text-black h-full flex items-center">|</li> {/* Black Divider */}
            <li>
              <button 
                className="relative px-1 py-2 rounded transition bg-transparent cursor-pointer hover:bg-[#2CA6A4] hover:text-[#5C3D2E]"
                onClick={handleContactUsClick}
              >
                Contact Us
              </button>
            </li>
            <li className="text-black">|</li> {/* Black Divider */}
            <li>
              <NavLink 
                to="/menu" 
                className="relative px-1 py-2 rounded transition bg-transparent hover:bg-[#2CA6A4] hover:text-[#5C3D2E]"
                onClick={handleNavLinkClick}
              >
                Menu
              </NavLink>
            </li>
            <li>
              <button  
                onClick={openCart}
                className="relative px-1 py-2 rounded transition bg-transparent hover:bg-[#2CA6A4] cursor-pointer hover:text-[#5C3D2E] flex items-center"
              >
                <FontAwesomeIcon icon={faCartShopping} />
                {cartItemCount > 0 && (
                  <span className="ml-1 bg-[#2CA6A4] text-white text-xs rounded-full px-1.5 py-0.5">
                    {cartItemCount}
                  </span>
                )}
              </button>
            </li>
          </ul>
        </nav>        
      </div>
    </header>
  );
};

export default NavBar;
