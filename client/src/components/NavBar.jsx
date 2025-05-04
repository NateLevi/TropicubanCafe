import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import { TreePalm, Menu as MenuIcon, X as XIcon } from "lucide-react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const NavBar = ({ cartItemCount = 0, openCart, closeCart }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  }

  // Function to handle the "Order Now" click
  const handleOrderNowClick = () => {
    closeMobileMenu();
    closeCart();
    if (location.pathname === '/') {
      if (location.search) {
        navigate('/', { replace: true });
        setTimeout(() => {
          const menuSection = document.getElementById('menu-section');
          if (menuSection) {
            menuSection.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      } else {
        const menuSection = document.getElementById('menu-section');
        if (menuSection) {
          menuSection.scrollIntoView({ behavior: 'smooth' });
        }
      }
    } else {
      navigate('/?scrollTo=menu-section', { replace: true });
    }
  };

  // Function to handle the "Contact Us" click
  const handleContactUsClick = () => {
    closeMobileMenu();
    closeCart();
    if (location.pathname === '/') {
      const footerSection = document.getElementById('footer-section');
      if (footerSection) {
        footerSection.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate('/?scrollTo=footer-section');
    }
  };

  // Function to handle NavLink clicks
  const handleNavLinkClick = () => {
    closeMobileMenu();
    closeCart();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCartClick = () => {
    closeMobileMenu();
    openCart();
  }

  return (
    <header className="fixed w-full z-[200] bg-[#ffcc66] text-[#5C3D2E] py-4 shadow-md border-b border-black">
      <div className="container mx-auto flex justify-between items-center px-4 sm:px-6">
        
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

        {/* Desktop Navigation Links */}
        <nav className="hidden md:block">
          <ul className="flex items-center space-x-4 lg:space-x-6 text-[#5C3D2E]">
            <li>
              <button 
                className="relative px-2 py-2 rounded transition bg-transparent cursor-pointer hover:bg-[#2CA6A4] hover:text-[#5C3D2E]"
                onClick={handleOrderNowClick}
              >
                Order Now
              </button>
            </li>
            <li className="text-black h-full flex items-center">|</li> {/* Black Divider */}
            <li>
              <button 
                className="relative px-2 py-2 rounded transition bg-transparent cursor-pointer hover:bg-[#2CA6A4] hover:text-[#5C3D2E]"
                onClick={handleContactUsClick}
              >
                Contact Us
              </button>
            </li>
            <li className="text-black">|</li> {/* Black Divider */}
            <li>
              <NavLink 
                to="/menu" 
                className="relative px-2 py-2 rounded transition bg-transparent hover:bg-[#2CA6A4] hover:text-[#5C3D2E]"
                onClick={handleNavLinkClick}
              >
                Menu
              </NavLink>
            </li>
            <li>
              <button  
                onClick={handleCartClick} // Use dedicated handler
                className="relative px-2 py-2 rounded transition bg-transparent hover:bg-[#2CA6A4] cursor-pointer hover:text-[#5C3D2E] flex items-center"
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

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
           <button  
              onClick={handleCartClick} // Use dedicated handler
              className="relative p-2 mr-2 rounded transition bg-transparent hover:bg-[#2CA6A4] cursor-pointer hover:text-[#5C3D2E] flex items-center"
            >
              <FontAwesomeIcon icon={faCartShopping} size="lg" />
              {cartItemCount > 0 && (
                <span className="absolute -top-1 -right-1 ml-1 bg-[#2CA6A4] text-white text-[10px] rounded-full px-1 py-0">
                  {cartItemCount}
                </span>
              )}
            </button>
          <button onClick={toggleMobileMenu} className="text-[#5C3D2E]">
            {isMobileMenuOpen ? <XIcon size={28} /> : <MenuIcon size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#ffcc66] absolute top-full left-0 w-full shadow-lg border-t border-black">
          <ul className="flex flex-col items-center py-4 space-y-2">
             <li>
              <button 
                className="block w-full text-center px-4 py-2 rounded transition bg-transparent cursor-pointer hover:bg-[#2CA6A4] hover:text-[#5C3D2E]"
                onClick={handleOrderNowClick}
              >
                Order Now
              </button>
            </li>
            <li>
              <button 
                className="block w-full text-center px-4 py-2 rounded transition bg-transparent cursor-pointer hover:bg-[#2CA6A4] hover:text-[#5C3D2E]"
                onClick={handleContactUsClick}
              >
                Contact Us
              </button>
            </li>
            <li>
              <NavLink 
                to="/menu" 
                className="block w-full text-center px-4 py-2 rounded transition bg-transparent hover:bg-[#2CA6A4] hover:text-[#5C3D2E]"
                onClick={handleNavLinkClick}
              >
                Menu
              </NavLink>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default NavBar;
