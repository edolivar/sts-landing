import { Link } from "react-router-dom";

const footerNavigation = {
  support: [
    { name: "Ticket Portal", href: "https://ticket.securetechsolutions.biz/" },
    { name: "SFTP Portal", href: "https://us3.hostedftp.com/login/" },
  ],
  company: [{ name: "About", href: "/about" }],
  legal: [
    { name: "Terms of service", href: "/terms-of-service" },
    { name: "Privacy policy", href: "/privacy-policy" },
  ],
};

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative mx-auto max-w-7xl px-6 lg:px-8">
      <div className="border-t border-gray-900/10 py-16 sm:py-24 lg:py-32">
        <div className="xl:grid xl:grid-cols-2 xl:gap-8">
          <img alt="Company name" src="/sts_favicon.svg" className="h-12" />
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm/6 font-semibold text-gray-900">
                  Support
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {footerNavigation.support.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        target="_blank"
                        className="text-sm/6 text-gray-600 hover:text-gray-900"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm/6 font-semibold text-gray-900">
                  Company
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {footerNavigation.company.map((item) => (
                    <li key={item.name}>
                      <Link
                        to={item.href} // Use Link for internal navigation
                        onClick={scrollToTop}
                        className="text-sm/6 text-gray-600 hover:text-gray-900"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm/6 font-semibold text-gray-900">Legal</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {footerNavigation.legal.map((item) => (
                    <li key={item.name}>
                      <Link
                        to={item.href} // Use Link for internal navigation
                        onClick={scrollToTop}
                        className="text-sm/6 text-gray-600 hover:text-gray-900"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
