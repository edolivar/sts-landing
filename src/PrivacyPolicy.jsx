import { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import PageTemplate from "./helpers/PageTemplate"; // Import PageTemplate

const PrivacyPolicyPage = () => {
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
          "information-we-collect",
          "how-we-use-information",
          "data-sharing",
          "data-protection",
          "cookies-and-tracking",
          "user-rights",
          "policy-changes",
          "contact-information",
        ].map((sectionId) => (
          <li key={sectionId}>
            <Link
              to={`#${sectionId}`}
              className={`block py-1 px-2 rounded transition-colors ${activeSection === sectionId
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
      <Helmet>
        <title>STS - Privacy</title>
        <meta name="description" content="Read Secure Tech Solutions' Privacy Policy to learn how we collect, use, and protect your personal information when you visit our website or use our services." />
      </Helmet>

      <div className="w-full pt-32 pb-32 mb-16 bg-gradient-to-r from-[#e8f5e9] via-[#e3f2fd] to-[#e1f5fe]">
        <div className="max-w-4xl mx-auto px-8">
          <div className="text-sm text-gray-600 mb-4">
            LAST UPDATED: DECEMBER 11TH, 2024
          </div>
          <h1 className="text-4xl font-bold">Privacy Policy</h1>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row max-w-7xl mx-auto">
        <aside className="w-64 px-8 py-16 hidden lg:block">
          <nav className="sticky top-6">
            <TableOfContents />
          </nav>
        </aside>
        <main className="flex-grow px-8 py-16 max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>

          <div className="space-y-12">
            <section id="introduction" className="mb-16">
              <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
              <p className="text-gray-700 leading-relaxed">
                This Privacy Policy outlines how Secure Tech Solutions collects,
                uses, and protects your personal information when you interact
                with our website and services. By accessing or using our
                services, you consent to the practices described in this policy.
              </p>
            </section>

            <section id="information-we-collect" className="mb-16">
              <h2 className="text-2xl font-semibold mb-4">
                2. Information We Collect
              </h2>
              <p className="text-gray-700 leading-relaxed">
                We collect personal information when you use our services,
                including but not limited to:
              </p>
              <ul className="list-disc list-inside mt-2 text-gray-700 leading-relaxed">
                <li>Contact information (e.g., name, email address)</li>
                <li>Account information (e.g., username, password)</li>
                <li>
                  Usage data (e.g., IP address, browser type, and pages visited)
                </li>
              </ul>
            </section>

            <section id="how-we-use-information" className="mb-16">
              <h2 className="text-2xl font-semibold mb-4">
                3. How We Use Information
              </h2>
              <p className="text-gray-700 leading-relaxed">
                We use the collected information to:
              </p>
              <ul className="list-disc list-inside mt-2 text-gray-700 leading-relaxed">
                <li>Provide and improve our services</li>
                <li>Personalize user experience</li>
                <li>Send important updates and notifications</li>
                <li>Analyze usage patterns to enhance service performance</li>
              </ul>
            </section>

            <section id="data-sharing" className="mb-16">
              <h2 className="text-2xl font-semibold mb-4">4. Data Sharing</h2>
              <p className="text-gray-700 leading-relaxed">
                We may share your personal information with trusted third
                parties to perform services on our behalf, such as processing
                payments and sending marketing communications. We do not sell or
                rent your personal data.
              </p>
            </section>

            <section id="data-protection" className="mb-16">
              <h2 className="text-2xl font-semibold mb-4">
                5. Data Protection
              </h2>
              <p className="text-gray-700 leading-relaxed">
                We implement security measures to protect your data from
                unauthorized access, alteration, or destruction. However, no
                method of transmission over the internet is completely secure,
                and we cannot guarantee the absolute security of your
                information.
              </p>
            </section>

            <section id="cookies-and-tracking" className="mb-16">
              <h2 className="text-2xl font-semibold mb-4">
                6. Cookies and Tracking Technologies
              </h2>
              <p className="text-gray-700 leading-relaxed">
                We use cookies and other tracking technologies to enhance your
                experience, analyze website usage, and customize content. You
                can control cookies through your browser settings.
              </p>
            </section>

            <section id="user-rights" className="mb-16">
              <h2 className="text-2xl font-semibold mb-4">7. User Rights</h2>
              <p className="text-gray-700 leading-relaxed">
                You have the right to access, update, or delete your personal
                information. You can also object to or restrict certain
                processing activities. To exercise these rights, please contact
                us at the details below.
              </p>
            </section>

            <section id="policy-changes" className="mb-16">
              <h2 className="text-2xl font-semibold mb-4">
                8. Changes to This Policy
              </h2>
              <p className="text-gray-700 leading-relaxed">
                We may update this Privacy Policy from time to time. We will
                notify you of significant changes and update the &quot;Last
                Updated&quot; date at the top of this policy. Your continued use
                of our services after such changes constitutes your acceptance
                of the updated policy.
              </p>
            </section>

            <section id="contact-information" className="mb-16">
              <h2 className="text-2xl font-semibold mb-4">
                9. Contact Information
              </h2>
              <p className="text-gray-700 leading-relaxed">
                If you have any questions about this Privacy Policy, please
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
          </div>
        </main>
      </div>
    </PageTemplate>
  );
};

export default PrivacyPolicyPage;
