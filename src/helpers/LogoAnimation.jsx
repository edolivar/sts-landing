import React, { useRef, useEffect } from 'react';

const logoData = [
  {
    alt: "LMA",
    src: "/STSCustomerLogos/LMA_Logo.jpg",
    width: 200,
    height: 200,
  },
  {
    alt: "Solinco",
    src: "/STSCustomerLogos/Solinco_Logo.png",
    width: 551,
    height: 91,
  },
  {
    alt: "OSA",
    src: "/STSCustomerLogos/OSA_Logo.png",
    width: 506,
    height: 494,
  },
  {
    alt: "Steamericas",
    src: "/STSCustomerLogos/Steamericas_Logo.png",
    width: 499,
    height: 155,
  },
  {
    alt: "PLG",
    src: "/STSCustomerLogos/PLG_Logo.png",
    width: 300,
    height: 264,
  },
  {
    alt: "UAC",
    src: "/STSCustomerLogos/UAC_Logo.png",
    width: 389,
    height: 195,
  },
  {
    alt: "Oculus",
    src: "/STSCustomerLogos/Oculus_Logo.png",
    width: 320,
    height: 100,
  },
  {
    alt: "Boyd",
    src: "/STSCustomerLogos/Boyd_Logo.png",
    width: 300,
    height: 150,
  },
  {
    alt: "Summit",
    src: "/STSCustomerLogos/Summit_Logo.png",
    width: 737,
    height: 269,
  },
  {
    alt: "LO",
    src: "/STSCustomerLogos/LO_Logo.png",
    width: 240,
    height: 240,
  },
  {
    alt: "Stuart",
    src: "/STSCustomerLogos/Stuart_Logo.png",
    width: 505,
    height: 60,
  },
];

const LogoCarouselWithYourData = () => {
  const containerRef = useRef(null);
  const gapXMedium = 144;
  const wrapperStyle = {
    maxWidth: '60%',
    margin: '0 auto',
  };

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      const logoWidthWithGap = gapXMedium;
      const totalWidth = logoData.reduce((sum, logo) => sum + logo.width + logoWidthWithGap, 0);
      const animationDuration = totalWidth / 70; // Adjust speed (pixels per second)

      const styleSheet = document.createElement("style");
      styleSheet.type = "text/css";
      styleSheet.innerText = `
        @keyframes ticker {
          0% { transform: translateX(0); -webkit-transform: translateX(0); }
          100% { transform: translateX(-${totalWidth}px); -webkit-transform: translateX(-${totalWidth}px); }
        }

        /* Media query for mobile (adjust breakpoint as needed) */
        @media (max-width: 768px) {
          .logo-carousel-wrapper {
            max-width: 100% !important;
            margin-left: 0 !important;
            margin-right: 0 !important;
          }
        }
      `;
      document.head.appendChild(styleSheet);

      const tickerElements = container.querySelectorAll('.animate-ticker');
      tickerElements.forEach(ticker => {
        ticker.style.animation = `ticker ${animationDuration}s linear infinite normal none running`;
      });
    }

    return () => {
      const styleSheet = document.querySelector('style[data-animation="ticker"]');
      if (styleSheet) {
        document.head.removeChild(styleSheet);
      }
    };
  }, []);

  return (
    <div className="overflow-hidden logo-carousel-wrapper" style={wrapperStyle}>
      {/* Desktop Carousel */}
      <div className="flex overflow-hidden gap-x-16" ref={containerRef}>
        {/* Replicating the structure with three identical tickers */}
        {Array.from({ length: 3 }).map((_, index) => (
          <div
            key={`ticker-${index}`}
            className="flex min-w-full flex-shrink-0 items-center justify-around overflow-x-auto gap-x-36 animate-ticker"
          >
            {logoData.map((logo) => (
              <img
                key={logo.alt}
                src={logo.src}
                alt={logo.alt}
                width={logo.width}
                height={logo.height}
                loading="lazy"
                decoding="async"
                className="h-6 sm:h-8"
                style={{ maxHeight: '100px', maxWidth: '300px', width: 'auto', height: 'auto' }} // Adjust max height as needed
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoCarouselWithYourData;
