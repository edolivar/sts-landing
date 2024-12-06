import { useState, useEffect } from "react";

const ImageCarousel = () => {
  // Array of image sources
  const images = [
    "/cybersecurity.jpg",
    "/cybersecurity2.jpg",
    "/cybersecurity3.jpg",
    "/cybersecurity4.jpg",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [fadeIn, setFadeIn] = useState(true); // State for fade effect
  const [opacity, setOpacity] = useState(1); // Opacity state

  // Function to cycle through images
  useEffect(() => {
    const interval = setInterval(() => {
      setFadeIn(false); // Start fading out
      setOpacity(0.1); // Reduce opacity to 10% when fading out

      // Change image after the fade-out transition
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        setOpacity(0.1); // Full opacity when fading in
        setFadeIn(true); // Start fading in
      }, 500); // Match with the fade-out duration
    }, 8000); // Change image every 5 seconds

    return () => clearInterval(interval); // Cleanup on component unmount
  }, [images.length]);

  return (
    <div className="mt-16 sm:mt-20 xl:mx-auto xl:max-w-7xl xl:px-8">
      <img
        alt=""
        src={images[currentImageIndex]}
        className={`aspect-[5/2] w-full object-cover rounded-md xl:rounded-3xl transition-opacity duration-500`}
        style={{
          opacity: fadeIn ? 1 : opacity, // Apply partial fade effect
        }}
      />
    </div>
  );
};

export default ImageCarousel;
