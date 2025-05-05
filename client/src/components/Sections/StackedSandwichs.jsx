import { useEffect, useState, useRef, useCallback } from 'react';

const StackedSandwich = () => {
  // State for the calculated horizontal position based on scroll
  const [position, setPosition] = useState(0);
  // Ref to store the latest scroll Y without causing re-renders on scroll
  const scrollYRef = useRef(0);
  // Ref for the animation frame request ID
  const animationFrameRef = useRef(null);
  // State for window width for responsive styles
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // How much the image moves horizontally per pixel scrolled. Negative value moves left when scrolling down.
  const scrollFactor = 0.15;
  // Smoothing factor
  const easingFactor = 0.1;

  // Update window width on resize
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Update scrollY ref on scroll events
  useEffect(() => {
    const handleScroll = () => {
      scrollYRef.current = window.scrollY;
    };
    // Use passive listener for better scroll performance
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Animation loop using requestAnimationFrame for smooth updates
  const animateScroll = useCallback(() => {
    // Calculate the target horizontal position based on current scroll position
    const targetPosition = -scrollYRef.current * scrollFactor;

    // Smoothly interpolate the current position towards the target position (lerp)
    setPosition(prevPosition => {
      const diff = targetPosition - prevPosition;
      // Snap to target if difference is negligible to prevent infinite updates
      if (Math.abs(diff) < 0.1) {
        return targetPosition;
      }
      return prevPosition + diff * easingFactor;
    });

    // Continue the animation loop
    animationFrameRef.current = requestAnimationFrame(animateScroll);
  }, [scrollFactor, easingFactor]);

  // Start and stop the animation loop
  useEffect(() => {
    animationFrameRef.current = requestAnimationFrame(animateScroll);
    // Cleanup: cancel the animation frame when the component unmounts
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [animateScroll]);

  // Calculate image style based on screen width and the animated position
  const getImageStyle = () => {
    let baseTranslateX = 0;
    let baseTranslateY = 0;
    let scale = 1.0;

    // Define base styles per breakpoint
    if (windowWidth <= 430) { // Mobile screens (very small)
      baseTranslateX = -400;
      baseTranslateY = -50;
      scale = 0.6;
    } else if (windowWidth <= 640) { // Small screens (e.g., larger phones, Tailwind 'sm')
      baseTranslateX = -100;
      scale = 0.8;
    } else if (windowWidth <= 1024) { // iPad screens (typical tablet sizes up to 1024px)
      baseTranslateX = 300;
      baseTranslateY = -50;
      scale = 0.7;
    } else { // Browser screens (Desktops/Laptops > 1024px)
      // Adjusted offset for larger screens to prevent moving too far left
      baseTranslateX = 300;
      scale = 0.8;
    }

    // Combine the base offset with the scroll-driven animated position
    const finalTranslateX = baseTranslateX + position;

    return {
      transform: `translateX(${finalTranslateX}px) translateY(${baseTranslateY}px) scale(${scale})`,
      transformOrigin: 'center center',
      willChange: 'transform'
    };
  };

  return (
    <div className="w-full -mt-75 -mb-80 md:-mb-45 sm:-mb-40 xs:-mb-50">
      <div className="w-full overflow-hidden relative z-10">
        <div className="relative max-w-full mx-auto" style={{ marginTop: "-30px" }}>
          <img
            src="/stacked2.png"
            alt="Stacked Sandwich"
            className="w-auto max-w-none h-auto relative z-10"
            style={getImageStyle()}
          />
        </div>
      </div>
    </div>
  );
};

export default StackedSandwich;