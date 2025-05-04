import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import SandwichCard from '../SandwichCard';
import AppetizerCard from '../AppetizerCard';
import { sandwichesData } from '../../assets/sandwichesData';
import { appetizersData } from '../../assets/AppetizersData';
import { useState } from 'react';

const MenuSection = ({ addToCart }) => {
  const [activeTab, setActiveTab] = useState('sandwiches');
  const [isSelected, setIsSelected] = useState(false);

  const handleClick = () => {
    setIsSelected(!isSelected);
  };

  return (
    <section id="menu-section" className="relative text-[#5C3D2E] bg-white">
      <div className="relative flex flex-col py-12 px-6 sm:px-12 md:px-24 z-10">
        {/* 1) Title + Subtext - Responsive text size */}
        <h2 className="text-3xl sm:text-4xl mb-2 text-center md:text-left">ORDER ONLINE</h2>
        <p className="italic text-base sm:text-lg mb-4 text-center md:text-left">
          Out-of-this-world ingredients between slices of our traditional cuban bread
        </p>

        {/* 2) Accepting Orders Pill - Center on mobile */}
        <div className="inline-flex items-center space-x-2 border border-gray-300 rounded-full px-3 py-1 w-fit mx-auto md:mx-0">
          <span className="inline-block w-2 h-2 bg-green-600 rounded-full" />
          <span className="text-xs">Accepting Orders</span>
        </div>

        {/* 3) Pickup & Delivery Buttons - Center on mobile */}
        <ul className="flex space-x-4 mt-4 text-xs justify-center md:justify-start">
          <li className={`border border-[#5C3D2E] px-4 py-2 rounded cursor-pointer hover:bg-[#5C3D2E] hover:text-white transition-colors ${!isSelected ? 'bg-[#5C3D2E] text-white' : ''}`} onClick={handleClick}>
            Pickup
          </li>
          <li className={`border border-[#5C3D2E] px-4 py-2 rounded cursor-pointer hover:bg-[#5C3D2E] hover:text-white transition-colors ${isSelected ? 'bg-[#5C3D2E] text-white' : ''}`} onClick={handleClick}>
            Delivery
          </li>
        </ul>

        {/* 4) Pickup Time - Center on mobile */}
        <p className="mt-4 text-xs text-center md:text-left">
          {!isSelected && (
            <>
              <FontAwesomeIcon icon={faClock} className="text-gray-800 px-1" />
              Pickup time: up to 30 minutes{" "}
            </>
          )}
        </p>

        {/* 6) Menu Heading + Description - Center on mobile */}
        <h3 className="text-2xl sm:text-3xl font-bold mt-10 mb-2 text-center md:text-left">Menu</h3>
        <p className="mt-2 text-xs mb-2 text-center md:text-left">
          We do nothing but craft the most mouthwatering Cuban food in Florida
        </p>
        <div className="w-full md:w-[300px] border-b border-[#5C3D2E] mt-2 mb-8 mx-auto md:mx-0"></div>

        {/* Tab Navigation - Responsive adjustments */}
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-8 mb-8 items-center">
          <div 
            className={`text-lg sm:text-xl italic font-medium cursor-pointer transition-all duration-300 py-2 sm:py-0 ${
              activeTab === 'appetizers' 
                ? 'text-[#5C3D2E] border-b-2 border-[#5C3D2E]' 
                : 'text-gray-500 hover:text-[#5C3D2E]'
            }`}
            onClick={() => setActiveTab('appetizers')}
          >
          APPETIZERS
          </div>
          <div 
            className={`text-lg sm:text-xl italic font-medium cursor-pointer transition-all duration-300 py-2 sm:py-0 ${
              activeTab === 'sandwiches' 
                ? 'text-[#5C3D2E] border-b-2 border-[#5C3D2E]' 
                : 'text-gray-500 hover:text-[#5C3D2E]'
            }`}
            onClick={() => setActiveTab('sandwiches')}
          >
          SANDWICHES
          </div>
        </div>
        
        {/* Sandwich Content */}
        <div className={`transition-opacity duration-500 ${activeTab === 'sandwiches' ? 'opacity-100' : 'opacity-0 hidden'}`}>
          <p className="text-xs mb-6 text-center md:text-left">
            Out-of-this-world ingredients between slices of our traditional Cuban bread.
          </p>
          
          {/* Sandwich Cards Grid - Responsive columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            {sandwichesData.map((sandwich, index) => (
              <SandwichCard
                key={sandwich.id}
                id={sandwich.id}
                title={sandwich.title}
                description={sandwich.description}
                price={sandwich.price}
                addToCart={addToCart}
                className={
                  // Adjust centering logic for different screen sizes if needed
                  sandwichesData.length % 3 === 1 && index === sandwichesData.length - 1 ? "lg:col-start-2" : 
                  sandwichesData.length % 2 === 1 && index === sandwichesData.length - 1 ? "md:col-start-2 lg:col-start-auto" : ""
                }
              />
            ))}
          </div>
        </div>

        {/* Appetizers Content */}
        <div className={`transition-opacity duration-500 ${activeTab === 'appetizers' ? 'opacity-100' : 'opacity-0 hidden'}`}>
          <p className="text-xs mb-6 text-center md:text-left">
            Authentic Cuban appetizers to start your meal right.
          </p>
          
          {/* Appetizer Cards Grid - Responsive columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            {appetizersData.map((appetizer, index) => (
              <AppetizerCard
                key={appetizer.id}
                id={appetizer.id}
                title={appetizer.title}
                description={appetizer.description}
                price={appetizer.price}
                addToCart={addToCart}
                 className={
                  // Adjust centering logic for different screen sizes if needed
                  appetizersData.length % 3 === 1 && index === appetizersData.length - 1 ? "lg:col-start-2" : 
                  appetizersData.length % 2 === 1 && index === appetizersData.length - 1 ? "md:col-start-2 lg:col-start-auto" : ""
                }
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
