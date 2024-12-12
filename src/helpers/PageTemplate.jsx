import PropTypes from "prop-types"; // Import PropTypes

import Header from "./Header";
import Footer from "./Footer";

const PageTemplate = ({ children }) => {
  return (
    <div className="bg-white">
      {/* Header */}
      <Header />
      <main className="isolate">{children}</main>
      <Footer />
    </div>
  );
};

// Prop validation for PageTemplate
PageTemplate.propTypes = {
  children: PropTypes.node.isRequired, // Ensures children are passed and are valid React nodes
};

export default PageTemplate;
