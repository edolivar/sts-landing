"use client";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import {
  ArrowPathIcon,
  Bars3Icon,
  CloudArrowUpIcon,
  FingerPrintIcon,
  LockClosedIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import ImageCarousel from "./helpers/ImageCarousel";

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
    alt: "PLG",
    src: "/STSCustomerLogos/PLG_Logo.png",
    className: "h-full w-auto",
  },
  {
    alt: "Steamericas",
    src: "/STSCustomerLogos/Steamericas_Logo.svg",
    className: "h-1/2 w-auto",
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

const navigation = [
  { name: "Ticket Portal", href: "https://ticket.securetechsolutions.biz/" },
  { name: "SFTP Portal", href: "http://ftp.securetechsolutions.biz" },
  { name: "About STS", href: "/about" },
];

const features = [
  {
    name: "SFTP Client",
    description:
      "Secure and simplify your file transfers with our managed SFTP client. Designed for businesses, it ensures encrypted, reliable file exchanges while reducing IT overhead. Let us handle the technical details so you can focus on your operations.",
    icon: CloudArrowUpIcon,
  },
  {
    name: "STS Ticket Portal",
    description:
      "Experience peace of mind with our exclusive 24/7 ticketing system, designed to address all your IT and cybersecurity needs. Our experts are always available to ensure your business stays secure and operational around the clock.",
    icon: LockClosedIcon,
  },
  {
    name: "Phish Testing",
    description:
      "Strengthen your defenses against phishing attacks with our recurring phishing tests and training courses. Tailored and dynamic, these simulations educate your employees while identifying vulnerabilities, ensuring your team stays prepared and proactive against evolving cyber threats.",
    icon: ArrowPathIcon,
  },
  {
    name: "Advanced security",
    description:
      "With STS VoIP, businesses can streamline communication and reduce costs by consolidating internet and voice services under a single provider.Simplify your operations and enhance productivity with our comprehensive suite of services tailored to your success.",
    icon: FingerPrintIcon,
  },
];

const faqs = [
  {
    id: 1,
    question: "Is this company a subsidiary of Call-a-Tek?",
    answer:
      "Yes, we are a subsidiary of Call-a-Tek, and our operations are managed by the same CEO.",
  },
  {
    id: 2,
    question: "What type of services do you offer?",
    answer:
      "We offer a wide range of services, including IT Department Help Desk support, secure SFTP solutions, phishing tests, managed VoIP, and cybersecurity services, all tailored to meet your specific business needs.",
  },
  {
    id: 3,
    question: "Do you provide ongoing IT support?",
    answer:
      "Yes, we provide continuous IT support with 24/7 access to our help desk and experts who are ready to assist with any IT or cybersecurity concerns.",
  },
  {
    id: 4,
    question: "How do I get started with your services?",
    answer:
      "Getting started is easy! Reach out to us, and we'll schedule a consultation to understand your needs. From there, we’ll customize a service package and provide pricing details tailored to your business.",
  },
  {
    id: 5,
    question: "What industries do you serve?",
    answer:
      "We serve businesses across various industries, including healthcare, finance, education, and retail, with a focus on security and reliability in every sector.",
  },
  // Add more questions as needed...
];

const footerNavigation = {
  support: [
    { name: "Ticket Portal", href: "https://ticket.securetechsolutions.biz/" },
    { name: "SFTP Portal", href: "https://us3.hostedftp.com/login/" },
  ],
  company: [{ name: "About", href: "/about" }],
  legal: [
    { name: "Terms of service", href: "#" },
    { name: "Privacy policy", href: "#" },
    { name: "License", href: "#" },
  ],
};

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-white">
      {/* Header */}
      <header className="absolute inset-x-0 top-0 z-50">
        <nav
          aria-label="Global"
          className="flex items-center justify-between p-6 lg:px-8"
        >
          <div className="flex lg:flex-1">
            <Link to="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Secure Tech Solutions</span>
              <img alt="STS" src="/sts_favicon.svg" className="h-12 w-auto" />
            </Link>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) =>
              item.href.startsWith("http") ? (
                // External link - use <a>
                <a
                  key={item.name}
                  href={item.href}
                  className="text-sm/6 font-semibold text-gray-900"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item.name}
                </a>
              ) : (
                // Internal link - use <Link>
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-sm/6 font-semibold text-gray-900"
                >
                  {item.name}
                </Link>
              )
            )}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end"></div>
        </nav>
        <Dialog
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
          className="lg:hidden"
        >
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Secure Tech Solutions</span>
                <img alt="STS" src="/sts_favicon.svg" className="h-8 w-auto" />
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="size-6" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) =>
                    item.href.startsWith("http") ? (
                      // External link - use <a>
                      <a
                        key={item.name}
                        href={item.href}
                        className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {item.name}
                      </a>
                    ) : (
                      // Internal link - use <Link>
                      <Link
                        key={item.name}
                        to={item.href}
                        className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                      >
                        {item.name}
                      </Link>
                    )
                  )}
                </div>
                <div className="py-6"></div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>

      <main className="isolate">
        {/* Hero section */}
        <div className="relative pt-14">
          <div
            aria-hidden="true"
            className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          >
            <div
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#168991] to-[#0c3644] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            />
          </div>
          <div
            aria-hidden="true"
            className="absolute inset-x-0 -top-30 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-120"
          >
            <div
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#168991] to-[#0c3644] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            />
          </div>
          <div className="py-24 sm:py-32 lg:pb-40">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mx-auto max-w-2xl text-center">
                <h1 className="text-balance text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                  Safeguarding Businesses through Cutting-edge Techology
                </h1>
                <p className="mt-8 text-pretty text-lg font-medium text-gray-500 sm:text-xl/8">
                  Comprehensive IT Solutions for Your Business Needs—Secure,
                  Manage, and Support All in One Place.
                </p>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                  <a
                    href="mailto:info@stsit.biz"
                    className="relative rounded px-5 py-2.5 overflow-hidden group bg-stsLight relative hover:bg-gradient-to-r hover:from-stsDark hover:to-stsDark text-white hover:ring-2 hover:ring-offset-2 hover:ring-stsDark transition-all ease-out duration-300"
                  >
                    <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                    <span className="relative">Contact Us</span>
                  </a>
                  <a
                    href="#faqs"
                    className="text-sm/6 font-semibold text-gray-900"
                  >
                    Learn more <span aria-hidden="true">→</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div
            aria-hidden="true"
            className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          >
            <div
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
              className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#168991] to-[#0c3644] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            />
          </div>
        </div>

        {/* First Set of Logos
              <div className="flex items-center min-w-max space-x-24 animate-loop-scroll will-change-transform h-28">
                {logoData.map((logo, index) => (
                  <img
                    key={index}
                    alt={logo.alt}
                    src={logo.src}
                    className={logo.className}
                  />
                ))}
                {/* Add Extra Space
                <div className="w-6 md:w-12"></div>
              </div> */}

        {/* Logo cloud */}
        <div className="mx-auto w-full px-8 lg:px-12">
          <div className="flex justify-center w-full h-24">
            <div className="h-full mx-auto w-full sm:w-2/3 md:w-2/5 inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)] [&_img]:max-w-60">
              <ul className="flex items-center justify-center md:justify-start h-full space-x-24 animate-infinite-scroll pr-24">
                {logoData.map((logo, index) => (
                  <li key={index} className="h-full flex items-center">
                    <img
                      src={logo.src}
                      alt={logo.alt}
                      className="h-full object-contain"
                    />
                  </li>
                ))}
              </ul>
              <ul
                className="flex items-center justify-center md:justify-start h-full space-x-24 animate-infinite-scroll pr-24"
                aria-hidden="true"
              >
                {logoData.map((logo, index) => (
                  <li key={index} className="h-full flex items-center">
                    <img
                      src={logo.src}
                      alt={logo.alt}
                      className="h-full object-contain"
                    />
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-32 flex justify-center">
            <p className="relative rounded-full px-4 py-1.5 text-sm/6 text-gray-600 ring-1 ring-inset ring-gray-900/10 hover:ring-gray-900/20">
              <span className="hidden md:inline">
                City of Fort Lauderdale scammed out of $1.2 million during
                phishing attack
              </span>
              <a
                href="https://www.cbsnews.com/miami/news/city-of-fort-lauderdale-scammed-out-of-1-2-million-during-phishing-attack/"
                className="font-semibold text-stsLight"
              >
                <span aria-hidden="true" className="absolute inset-0" /> Read
                the article <span aria-hidden="true">&rarr;</span>
              </a>
            </p>
          </div>
        </div>

        {/* Feature section */}
        <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-32 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base/7 font-semibold text-stsLight">
              secure your business
            </h2>
            <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl lg:text-balance">
              Cybersecurity is what we do.
            </p>
            <p className="mt-6 text-pretty text-md/8 text-gray-600">
              Cybersecurity is crucial for protecting sensitive data and
              maintaining a secure online environment. Robust measures,
              including encryption, regular updates, and user education on
              strong password practices, are essential for safeguarding against
              cyber threats.
            </p>
          </div>

          {/* Image section */}
          <ImageCarousel />

          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
              {features.map((feature) => (
                <div key={feature.name} className="relative pl-16">
                  <dt className="text-base/7 font-semibold text-gray-900">
                    <div className="absolute left-0 top-0 flex size-10 items-center justify-center rounded-lg bg-stsLight">
                      <feature.icon
                        aria-hidden="true"
                        className="size-6 text-white"
                      />
                    </div>
                    {feature.name}
                  </dt>
                  <dd className="mt-2 text-base/7 text-gray-600">
                    {feature.description}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        {/* Testimonial section */}
        <div className="mx-auto mt-32 max-w-7xl sm:mt-56 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden bg-gray-900 px-6 py-20 shadow-xl sm:rounded-3xl sm:px-10 sm:py-24 md:px-12 lg:px-20">
            <div className="absolute inset-0 bg-gray-900/90 mix-blend-multiply" />
            <img
              alt=""
              src="/ceo.png"
              className="absolute inset-y-20 right-20 w-72 h-auto object-cover rounded-b-lg saturate-0 brightness-75 hidden xl:block"
            />

            <div
              aria-hidden="true"
              className="absolute -left-80 -top-56 transform-gpu blur-3xl"
            >
              <div
                style={{
                  clipPath:
                    "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                }}
                className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-r from-[#168991] to-[#0c3644] opacity-[0.45]"
              />
            </div>
            <div
              aria-hidden="true"
              className="hidden md:absolute md:bottom-16 md:left-[50rem] md:block md:transform-gpu md:blur-3xl"
            >
              <div
                style={{
                  clipPath:
                    "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                }}
                className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-r from-[#168991] to-[#0c3644] opacity-25"
              />
            </div>
            <div className="relative mx-auto max-w-2xl lg:mx-0">
              <img alt="" src="/sts_white.svg" className="h-20 w-auto" />
              <figure>
                <blockquote className="mt-6 text-lg font-semibold text-white sm:text-lg">
                  <p>
                    “At Secure Tech Solutions, we’re dedicated to providing
                    businesses with reliable, cutting-edge solutions that
                    protect their digital assets and streamline their
                    operations. Our comprehensive suite of services—ranging from
                    managed SFTP clients and VoIP systems to advanced
                    cybersecurity solutions and 24/7 support—empowers our
                    clients to thrive in an ever-evolving technological
                    landscape. Our team’s commitment to excellence ensures that
                    your business is always one step ahead, secure, and ready to
                    grow.”
                  </p>
                </blockquote>
                <figcaption className="mt-6 text-base text-white">
                  <div className="font-semibold">Gus P.</div>
                  <div className="mt-1">Founder</div>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>

        {/* Pricing section */}
        <div className="py-24 sm:pt-48">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:text-center">
              <h2 className="text-base/7 font-semibold text-stsLight">
                Pricing
              </h2>
              <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-3xl lg:text-balance">
                Customized Solutions, Personalized Pricing
              </p>
              <p className="mt-6 text-pretty text-lg/8 text-gray-600">
                Your business is unique, and so are your needs. Let’s connect to
                explore how we can safeguard and support your operations with
                services tailored to your requirements. Reach out to design the
                perfect package—and get a price that fits.
              </p>
            </div>
          </div>
        </div>

        {/* FAQs */}
        <div
          id="faqs"
          className="mx-auto max-w-2xl divide-y divide-gray-900/10 px-6 pb-8 sm:pb-24 sm:pt-12 lg:max-w-7xl lg:px-8 lg:pb-32"
        >
          <h2 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
            Frequently asked questions
          </h2>
          <dl className="mt-10 space-y-8 divide-y divide-gray-900/10">
            {faqs.map((faq) => (
              <div
                key={faq.id}
                className="pt-8 lg:grid lg:grid-cols-12 lg:gap-8"
              >
                <dt className="text-base/7 font-semibold text-gray-900 lg:col-span-5">
                  {faq.question}
                </dt>
                <dd className="mt-4 lg:col-span-7 lg:mt-0">
                  <p className="text-base/7 text-gray-600">{faq.answer}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative mx-auto mt-32 max-w-7xl px-6 lg:px-8">
        <div className="border-t border-gray-900/10 py-16 sm:py-24 lg:py-32">
          <div className="xl:grid xl:grid-cols-2 xl:gap-8">
            {" "}
            {/* Update grid-cols to 2 */}
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
                          to={item.href}
                          className="text-sm/6 text-gray-600 hover:text-gray-900"
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-10 md:mt-0">
                  <h3 className="text-sm/6 font-semibold text-gray-900">
                    Legal
                  </h3>
                  <ul role="list" className="mt-6 space-y-4">
                    {footerNavigation.legal.map((item) => (
                      <li key={item.name}>
                        <a
                          href={item.href}
                          className="text-sm/6 text-gray-600 hover:text-gray-900"
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
