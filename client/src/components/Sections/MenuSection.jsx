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
    <section id="menu-section" className="relative text-[#5C3D2E]">
      
      {/* Fixed sandwich image in the background */}
      <section className="relative bg-white flex flex-col py-20 px-24 z-10">
        {/* 1) Title + Subtext */}
        <h2 className="text-4xl mb-2">ORDER ONLINE</h2>
        <p className="italic text-lg mb-4">
          Out-of-this-world ingredients between slices of our traditional cuban bread
        </p>

        {/* 2) Accepting Orders Pill */}
        <div className="inline-flex items-center space-x-2 border border-gray-300 rounded-full px-3 py-1 w-fit">
          <span className="inline-block w-2 h-2 bg-green-600 rounded-full" />
          <span className="text-xs">Accepting Orders</span>
        </div>

        {/* 3) Pickup & Delivery Buttons */}
        <ul className="flex space-x-4 mt-4 text-xs">
          <li className={`border border-[#5C3D2E] px-4 py-2 rounded cursor-pointer hover:bg-[#5C3D2E] hover:text-white transition-colors ${!isSelected ? 'bg-[#5C3D2E] text-white' : ''}`} onClick={handleClick}>
            Pickup
            
          </li>
          
          
          <li className={`border border-[#5C3D2E] px-4 py-2 rounded cursor-pointer hover:bg-[#5C3D2E] hover:text-white transition-colors ${isSelected ? 'bg-[#5C3D2E] text-white' : ''}`} onClick={handleClick}>
            Delivery
          </li>


        </ul>

        {/* 4) Pickup Time + Address */}
        <p className="mt-4 text-xs">
          {!isSelected && (
            <>
              <FontAwesomeIcon icon={faClock} className="text-gray-800 px-1" />
              Pickup time: up to 30 minutes{" "}
            </>
          )}
        </p>

        {/* 6) Menu Heading + Description with Underline */}
        <h3 className="text-2xl font-bold mt-10 mb-2">Menu</h3>
        <p className="mt-2 text-xs mb-2">
          We do nothing but craft the most mouthwatering Cuban food in Florida
        </p>
        <div className="w-300 border-b border-[#5C3D2E] mt-2 mb-8"></div>

        {/* Tab Navigation for Sandwiches and Appetizers */}
        <div className="flex space-x-8 mb-8">
          <div 
            className={`text-xl italic font-medium cursor-pointer transition-all duration-300 ${
              activeTab === 'appetizers' 
                ? 'text-[#5C3D2E] border-b-2 border-[#5C3D2E]' 
                : 'text-gray-500 hover:text-[#5C3D2E]'
            }`}
            onClick={() => setActiveTab('appetizers')}
          >
          APPETIZERS
          </div>
          <div 
            className={`text-xl italic font-medium cursor-pointer transition-all duration-300 ${
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
          <p className="text-xs mb-6">
            Out-of-this-world ingredients between slices of our traditional Cuban bread.
          </p>
          
          {/* Sandwich Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            {sandwichesData.map((sandwich, index) => (
              <SandwichCard
                key={sandwich.id}
                id={sandwich.id}
                title={sandwich.title}
                description={sandwich.description}
                price={sandwich.price}
                addToCart={addToCart}
                className={
                  index === sandwichesData.length - 1 && 
                  sandwichesData.length % 3 === 1 
                    ? "lg:col-start-2" 
                    : ""
                }
              />
            ))}
          </div>
        </div>

        {/* Appetizers Content */}
        <div className={`transition-opacity duration-500 ${activeTab === 'appetizers' ? 'opacity-100' : 'opacity-0 hidden'}`}>
          <p className="text-xs mb-6">
            Authentic Cuban appetizers to start your meal right.
          </p>
          
          {/* Appetizer Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            {appetizersData.map((appetizer, index) => (
              <AppetizerCard
                key={appetizer.id}
                id={appetizer.id}
                title={appetizer.title}
                description={appetizer.description}
                price={appetizer.price}
                addToCart={addToCart}
                className={
                  index === appetizersData.length - 1 && 
                  appetizersData.length % 3 === 1 
                    ? "lg:col-start-2" 
                    : ""
                }
              />
            ))}
          </div>
        </div>
      </section>
    </section>
  );
};

export default MenuSection;
