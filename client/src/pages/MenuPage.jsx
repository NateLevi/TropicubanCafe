import { useEffect } from 'react';
import { sandwichesData } from '/src/assets/sandwichesData';
import { appetizersData } from '/src/assets/AppetizersData';
import SandwichCard from '../components/SandwichCard';
import AppetizerCard from '../components/AppetizerCard';

const MenuPage = ({ addToCart }) => {
  useEffect(() => {
    // Scroll to the top of the page when component mounts
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    // Adjust top margin for navbar height
    <div className="flex flex-col items-center justify-center min-h-screen pt-24 pb-20 text-[#5c3d2e] bg-white px-4 sm:px-6">
        <h1 className="text-3xl sm:text-4xl font-bold mt-6">Menu</h1>
        
        {/* Appetizers Section */}
        <h2 className="text-xl sm:text-2xl font-bold mt-8 mb-2">OUR APPETIZERS</h2>
        <p className="text-sm sm:text-base text-center mb-2">Authentic Cuban appetizers to start your meal right</p>
        {/* Responsive grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6 w-full max-w-6xl">
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
                appetizersData.length % 2 === 1 && index === appetizersData.length - 1 ? "sm:col-start-2 lg:col-start-auto" : ""
              }
            />
          ))}
        </div>

        {/* Sandwiches Section */}
        <h2 className="text-xl sm:text-2xl font-bold mt-12 mb-2">OUR SANDWICHES</h2>
        <p className="text-sm sm:text-base text-center mb-2">Authentic Cuban sandwiches crafted with traditional recipes.</p>
        {/* Responsive grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6 w-full max-w-6xl mb-10">
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
                 sandwichesData.length % 2 === 1 && index === sandwichesData.length - 1 ? "sm:col-start-2 lg:col-start-auto" : ""
              }
            />
          ))}
        </div>
    </div>
  )
}

export default MenuPage;