import { useEffect, useState, useRef } from 'react';

const StackedSandwich = () => {
  const [position, setPosition] = useState(-700); // Start with initial offset to the right
  const prevScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Smaller increment for smoother movement
      const scrollDifference = currentScrollY - prevScrollY.current;
      const moveAmount = scrollDifference * 0.1; // Reduced multiplier for less movement
      
      // Scroll direction and adjust position with more limited range
      if (currentScrollY > prevScrollY.current) {
        // Scrolling down - move right but with a smaller maximum
        setPosition(prev => Math.min(prev + moveAmount, -500)); // Reduced maximum right position
      } else {
        // Scrolling up - move left
        setPosition(prev => Math.max(prev + moveAmount, -700)); // Keep the same minimum left position
      }
      
      prevScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="w-full -mt-75 -mb-25">
      <div className="w-full overflow-hidden relative z-10">
        <div className="relative max-w-full mx-auto" style={{ marginTop: "-50px" }}>
          <img 
            src="/stacked2.png" 
            alt="Stacked Sandwich" 
            className="transition-transform duration-200 ease-out w-auto max-w-none h-auto relative z-10"
            style={{ transform: `translateX(${position}px)` }}
          />
        </div>
      </div>
    </div>
  );
};

export default StackedSandwich;