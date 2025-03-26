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
    <div className="flex flex-col items-center justify-center min-h-screen mt-20 mb-20 text-[#5c3d2e] bg-white">
        <h1 className="text-4xl font-bold mt-6">Menu</h1>
        
        {/* Appetizers Section */}
        <h2 className="text-1xl font-bold mt-5 mb-1">OUR APPETIZERS</h2>
        <p className="text-sm mb-1">Authentic Cuban appetizers to start your meal right</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6 ml-10 mr-10">
          {appetizersData.map((appetizer, index) => (
            <AppetizerCard
              key={appetizer.id}
              id={appetizer.id}
              title={appetizer.title}
              description={appetizer.description}
              price={appetizer.price}
              addToCart={addToCart}
              className={
                index === appetizersData.length - 1 && appetizersData.length % 3 === 1 
                  ? "lg:col-start-2" 
                  : ""
              }
            />
          ))}
        </div>

        {/* Sandwiches Section */}
        <h2 className="text-1xl font-bold mt-8 mb-1">OUR SANDWICHES</h2>
        <p className="text-sm mb-1">Authentic Cuban sandwiches crafted with traditional recipes, featuring layers of premium ingredients pressed between slices of our fresh-baked Cuban bread.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6 ml-10 mr-10 mb-10">
          {sandwichesData.map((sandwich, index) => (
            <SandwichCard
              key={sandwich.id}
              id={sandwich.id}
              title={sandwich.title}
              description={sandwich.description}
              price={sandwich.price}
              addToCart={addToCart}
              className={
                index === sandwichesData.length - 1 && sandwichesData.length % 3 === 1 
                  ? "lg:col-start-2" 
                  : ""
              }
            />
          ))}
        </div>
    </div>
  )
}

export default MenuPage