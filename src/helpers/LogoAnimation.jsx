const logoData = [
  {
    alt: "LMA",
    src: "/STSCustomerLogos/LMA_Logo.jpg",
    className: "h-full w-auto",
  },
  {
    alt: "Solinco",
    src: "/STSCustomerLogos/Solinco_Logo.png",
    className: "h-1/3 w-auto",
  },
  {
    alt: "OSA",
    src: "/STSCustomerLogos/OSA_Logo.png",
    className: "h-full w-auto",
  },
  {
    alt: "Steamericas",
    src: "/STSCustomerLogos/Steamericas_Logo.png",
    className: "h-1/2 w-auto",
  },
  {
    alt: "PLG",
    src: "/STSCustomerLogos/PLG_Logo.png",
    className: "h-full w-auto",
  },
  {
    alt: "UAC",
    src: "/STSCustomerLogos/UAC_Logo.png",
    className: "h-full w-auto",
  },
  {
    alt: "Oculus",
    src: "/STSCustomerLogos/Oculus_Logo.png",
    className: "h-3/4 w-auto",
  },
  {
    alt: "Boyd",
    src: "/STSCustomerLogos/Boyd_Logo.png",
    className: "h-full w-auto",
  },
  {
    alt: "Summit",
    src: "/STSCustomerLogos/Summit_Logo.png",
    className: "h-full w-auto",
  },
  {
    alt: "LO",
    src: "/STSCustomerLogos/LO_Logo.png",
    className: "h-full w-auto",
  },
  {
    alt: "Stuart",
    src: "/STSCustomerLogos/Stuart_Logo.png",
    className: "h-1/3 w-auto",
  },
];

const LogoAnimation = () => {
  return (
    <div className="flex justify-center w-full h-24">
      <div className="group relative h-full mx-auto w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)] [&_img]:max-w-60 md:w-3/5 xl:w-1/2">
        <ul className="flex items-center justify-center md:justify-start h-full space-x-24 animate-infinite-scroll group-hover:paused pr-24">
          {logoData.map((logo, index) => (
            <li key={index} className="h-full flex items-center">
              <img
                src={logo.src}
                alt={logo.alt}
                className={logo.className + " object-contain"}
              />
            </li>
          ))}
        </ul>
        <ul
          className="flex items-center justify-center md:justify-start h-full space-x-24 animate-infinite-scroll group-hover:paused pr-24"
          aria-hidden="true"
        >
          {logoData.map((logo, index) => (
            <li key={index} className="h-full flex items-center">
              <img
                src={logo.src}
                alt={logo.alt}
                className={logo.className + " object-contain"}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default LogoAnimation;

