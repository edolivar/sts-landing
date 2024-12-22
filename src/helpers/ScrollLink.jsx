import { Link } from "react-router-dom";

const ScrollToTopLink = ({ to, children, className = "" }) => {
  const handleScrollToTop = () => {
    window.scrollTo(0, 0); // Scrolls to the top of the page
  };

  return (
    <Link
      to={to}
      className={`text-sm/6 font-semibold text-gray-900 hover:text-stsLight ${className}`}
      onClick={handleScrollToTop} // Trigger scroll to top on click
    >
      {children}
    </Link>
  );
};

export default ScrollToTopLink;
