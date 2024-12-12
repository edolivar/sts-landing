import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PageTemplate from "./helpers/PageTemplate"; // Import PageTemplate

const TermsOfServicePage = () => {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let currentActiveSection = "";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (
          window.scrollY >= sectionTop - 50 &&
          window.scrollY < sectionTop + sectionHeight - 50
        ) {
          currentActiveSection = section.id;
        }
      });

      setActiveSection(currentActiveSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const TableOfContents = () => (
    <nav className="sticky top-6">
      <h2 className="text-lg font-medium mb-4">Contents</h2>
      <ul className="space-y-2">
        {[
          "introduction",
          "service-description",
          "user-responsibilities",
          "phishing-testing-services",
          "sftp-cloud-services",
          "msp-offerings",
          "limitation-of-liability",
          "termination",
          "changes-to-terms",
          "contact-information",
        ].map((sectionId) => (
          <li key={sectionId}>
            <Link
              to={`#${sectionId}`}
              className={`block py-1 px-2 rounded transition-colors ${
                activeSection === sectionId
                  ? "bg-[#e1f5fe] text-black"
                  : "text-gray-700 hover:bg-[#e8f5e9]"
              }`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(sectionId);
              }}
            >
              {sectionId
                .split("-")
                .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                .join(" ")}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );

  return (
    <PageTemplate>
      <div className="w-full pt-32 pb-32 mb-16 bg-gradient-to-r from-[#e8f5e9] via-[#e3f2fd] to-[#e1f5fe]">
        <div className="max-w-4xl mx-auto px-8">
          <div className="text-sm text-gray-600 mb-4">
            LAST UPDATED: DECEMBER 11TH, 2024
          </div>
          <h1 className="text-4xl font-bold">Terms of Service</h1>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row max-w-7xl mx-auto">
        <aside className="w-64 px-8 py-16 hidden lg:block">
          <nav className="sticky top-6">
            <TableOfContents />
          </nav>
        </aside>
        <main className="flex-grow px-8 py-16 max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>

          <div className="space-y-12">
            <section id="introduction" className="mb-16">
              <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
              <p className="text-gray-700 leading-relaxed">
                Welcome to Secure Tech Solutions&apos; Terms of Service. These
                Terms govern your use of our cybersecurity, IT, and managed
                service provider (MSP) services, including but not limited to
                phishing testing and SFTP cloud services. By accessing or using
                our services, you agree to be bound by these Terms.
              </p>
            </section>

            <section id="service-description" className="mb-16">
              <h2 className="text-2xl font-semibold mb-4">
                2. Service Description
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Secure Tech Solutions provides cybersecurity and IT services,
                including:
              </p>
              <ul className="list-disc list-inside mt-2 text-gray-700 leading-relaxed">
                <li>Phishing testing and awareness training</li>
                <li>SFTP cloud services</li>
                <li>Managed IT services</li>
                <li>Network security solutions</li>
                <li>Data protection and backup services</li>
              </ul>
            </section>
            <section id="user-responsibilities" className="mb-16">
              <h2 className="text-2xl font-semibold mb-4">
                3. User Responsibilities
              </h2>
              <p className="text-gray-700 leading-relaxed">
                As a user of our services, you agree to:
              </p>
              <ul className="list-disc list-inside mt-2 text-gray-700 leading-relaxed">
                <li>
                  Provide accurate and complete information when using our
                  services
                </li>
                <li>
                  Maintain the confidentiality of your account credentials
                </li>
                <li>
                  Use our services in compliance with all applicable laws and
                  regulations
                </li>
                <li>
                  Not attempt to gain unauthorized access to our systems or
                  networks
                </li>
                <li>
                  Report any suspected security breaches or vulnerabilities
                  promptly
                </li>
              </ul>
            </section>

            <section id="phishing-testing-services" className="mb-16">
              <h2 className="text-2xl font-semibold mb-4">
                4. Phishing Testing Services
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Our phishing testing services are designed to assess and improve
                your organization&apos;s security awareness. By using these
                services, you acknowledge and agree that:
              </p>
              <ul className="list-disc list-inside mt-2 text-gray-700 leading-relaxed">
                <li>
                  Tests will be conducted in accordance with agreed-upon
                  parameters
                </li>
                <li>
                  Results are for educational and assessment purposes only
                </li>
                <li>
                  We are not responsible for any actions taken by employees in
                  response to tests
                </li>
                <li>
                  You will inform your employees about the possibility of such
                  tests
                </li>
              </ul>
            </section>

            <section id="sftp-cloud-services" className="mb-16">
              <h2 className="text-2xl font-semibold mb-4">
                5. SFTP Cloud Services
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Our SFTP cloud services provide secure file transfer
                capabilities. By using these services, you agree to:
              </p>
              <ul className="list-disc list-inside mt-2 text-gray-700 leading-relaxed">
                <li>Use the service only for lawful purposes</li>
                <li>Not store or transfer any illegal or prohibited content</li>
                <li>Maintain the security of your access credentials</li>
                <li>
                  Comply with any data retention policies we may implement
                </li>
              </ul>
            </section>

            <section id="msp-offerings" className="mb-16">
              <h2 className="text-2xl font-semibold mb-4">
                6. Managed Service Provider (MSP) Offerings
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Our MSP services provide ongoing IT support and management. As
                part of these services:
              </p>
              <ul className="list-disc list-inside mt-2 text-gray-700 leading-relaxed">
                <li>
                  We will provide support as outlined in your service agreement
                </li>
                <li>
                  You grant us necessary access to your systems to perform our
                  services
                </li>
                <li>
                  We will maintain the confidentiality of your data and systems
                </li>
                <li>
                  You are responsible for maintaining any necessary software
                  licenses
                </li>
              </ul>
            </section>

            <section id="limitation-of-liability" className="mb-16">
              <h2 className="text-2xl font-semibold mb-4">
                7. Limitation of Liability
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Secure Tech Solutions provides its services on an &quot;as
                is&quot; and &quot;as available&quot; basis. We do not guarantee
                that our services will be uninterrupted, error-free, or
                completely secure. To the fullest extent permitted by law, we
                disclaim all warranties and limit our liability to the amount
                paid by you for our services in the past 12 months.
              </p>
            </section>

            <section id="termination" className="mb-16">
              <h2 className="text-2xl font-semibold mb-4">8. Termination</h2>
              <p className="text-gray-700 leading-relaxed">
                We reserve the right to suspend or terminate your access to our
                services if you violate these Terms or for any other reason at
                our discretion. You may terminate your use of our services by
                providing written notice as specified in your service agreement.
              </p>
            </section>

            <section id="changes-to-terms" className="mb-16">
              <h2 className="text-2xl font-semibold mb-4">
                9. Changes to Terms
              </h2>
              <p className="text-gray-700 leading-relaxed">
                We may update these Terms from time to time. We will notify you
                of any significant changes. Your continued use of our services
                after such changes constitutes acceptance of the updated Terms.
              </p>
            </section>

            <section id="contact-information" className="mb-16">
              <h2 className="text-2xl font-semibold mb-4">
                10. Contact Information
              </h2>
              <p className="text-gray-700 leading-relaxed">
                If you have any questions about these Terms of Service, please
                contact us at:
              </p>
              <p className="mt-2 text-gray-700 leading-relaxed">
                Secure Tech Solutions
                <br />
                Los Angeles, Dallas, Chicago
                <br />
                <a
                  href="mailto:info@stsit.biz"
                  className="hover:text-stsLight underline"
                >
                  info@stsit.biz
                </a>
                <br />
                1-833-264-1114
              </p>
            </section>

            {/* More sections here */}
          </div>
        </main>
      </div>
    </PageTemplate>
  );
};

export default TermsOfServicePage;
