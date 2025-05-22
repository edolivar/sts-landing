"use client";
import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  FingerPrintIcon,
  LockClosedIcon,
  CubeTransparentIcon,
  CpuChipIcon,
} from "@heroicons/react/24/outline";
import Video from "./helpers/Video.jsx"
import LogoAnimation from "./helpers/LogoAnimation";
import PageTemplate from "./helpers/PageTemplate";
import ScrollToTopLink from "./helpers/ScrollLink";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import AnimatedWords from "./helpers/AnimatedWords.jsx";
import { CheckCircleIcon } from "@heroicons/react/20/solid";
import ImageCarousel from "./helpers/ImageCarousel.jsx";
import { MinusSmallIcon, PlusSmallIcon } from "@heroicons/react/24/outline";
import Testimonials from "./helpers/Testimonials";

const actions = [
  {
    title: "SFTP Client",
    href: "/sftp-info",
    icon: CloudArrowUpIcon,
    iconForeground: "text-stsLight",
    iconBackground: "bg-teal-50",
    description:
      "Secure and simplify your file transfers with our managed SFTP client. Designed for businesses, it ensures encrypted, reliable file exchanges while reducing IT overhead. Let us handle the technical details so you can focus on your operations.",
  },
  {
    title: "STS Ticket Portal",
    href: "/ticket-info",
    icon: LockClosedIcon,
    iconForeground: "text-stsLight",
    iconBackground: "bg-teal-50",
    description:
      "Experience peace of mind with our exclusive 24/7 ticketing system, designed to address all your IT and cybersecurity needs. Our experts are always available to ensure your business stays secure and operational around the clock.",
  },
  {
    title: "Phish Testing",
    href: "/cyber-info",
    icon: ArrowPathIcon,
    iconForeground: "text-stsLight",
    iconBackground: "bg-teal-50",
    description:
      "Strengthen your defenses against phishing attacks with our recurring phishing tests and training courses. Tailored and dynamic, these simulations educate your employees while identifying vulnerabilities, ensuring your team stays prepared and proactive against evolving cyber threats",
  },
  {
    title: "IT Solutions & Planning",
    href: "/plan-info",
    icon: CubeTransparentIcon,
    iconForeground: "text-stsLight",
    iconBackground: "bg-teal-50",
    description:
      "With STS VoIP, businesses can streamline communication and reduce costs by consolidating internet and voice services under a single provider. Simplify your operations and enhance productivity with our comprehensive suite of services tailored to your success.",
  },
  {
    title: "Asset Management",
    href: "/assetmgmt-info",
    icon: CpuChipIcon,
    iconForeground: "text-stsLight",
    iconBackground: "bg-teal-50",
    description:
      "Our certified technicians optimize hardware configuration and maintenance. Our platform tracks asset lifecycles, provides real-time insights, and ensures software license compliance, preventing disruptions.",
  },
  {
    title: "MFA",
    href: "/mfa-info",
    icon: FingerPrintIcon,
    iconForeground: "text-stsLight",
    iconBackground: "bg-teal-50",
    description:
      "As certified Duo Deployment Partners, we provide robust security with Duo’s Multi-Factor Authentication (MFA), device health checks, adaptive authentication, and secure SSO. Duo helps ensure compliance with detailed reporting and offers competitive pricing for small to medium-sized businesses.",
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

const benefits = [
  "Cybersecurity",
  "O365/Azure Administration",
  "End-User Support",
  "Threat Protection",
  "Incident Response",
  "24/7 Help Desk Support",
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Home() {
  return (
    <PageTemplate>
      <div className="mx-auto w-full px-8 lg:px-12">
        <div className="pt-5">
          <AnimatedWords />
        </div>
      </div>
      {/* Image section */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Content goes here */}
        <Video></Video>
      </div>

      {/* Feature section */}
      <div className="mx-auto mt-28 max-w-7xl px-6 sm:mt-16 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base/6 font-semibold text-stsLight">
            Proactive defense, smart automation, and innovation
          </h2>
          <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl lg:text-balance">
            Cybersecurity is what we do.
          </p>
          <p className="mt-6 text-pretty text-md/8 text-gray-600">
            Cybersecurity is crucial for protecting sensitive data and
            maintaining a secure online environment. Robust measures, including
            encryption, regular updates, and user education on strong password
            practices, are essential for safeguarding against cyber threats.
          </p>
        </div>

        <div className=" pt-8 sm:pt-12">
          <div className="relative isolate">
            <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
              <div className="mx-auto flex max-w-2xl flex-col gap-16  px-6 py-16  sm:rounded-3xl sm:p-8 lg:mx-0 lg:max-w-none lg:flex-row lg:items-center lg:py-20 xl:gap-x-20 xl:px-20">
                <img
                  alt=""
                  src="/pointing_image.png"
                  className="h-96 w-full flex-none rounded-2xl object-cover shadow-xl lg:aspect-square lg:h-auto lg:max-w-sm"
                />
                <div className="w-full flex-auto">
                  <h2 className="text-pretty text-4xl font-semibold tracking-tight text-stsLight  sm:text-5xl">
                    The STS Advantage
                  </h2>
                  <p className="mt-6 text-pretty text-lg/8 text-gray-600">
                    Experience the peace of mind that comes with knowing your
                    business is protected. Connect, Communicate, &amp; Thrive
                    with Managed IT Services from STS.
                  </p>
                  <ul
                    role="list"
                    className="mt-10 grid grid-cols-1 gap-x-8 gap-y-3 text-base/7 text-gray-600 sm:grid-cols-2"
                  >
                    {benefits.map((benefit) => (
                      <li key={benefit} className="flex gap-x-3">
                        <CheckCircleIcon
                          aria-hidden="true"
                          className="h-7 w-5 flex-none text-stsDark"
                        />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-10 flex">
                    <ScrollToTopLink
                      to="/plan-info"
                      className="text-sm/6 font-semibold text-gray-900"
                    >
                      Learn More{" "}
                      <span
                        className="inline-block animate-horizontal-bounce"
                        aria-hidden="true"
                      >
                        →
                      </span>
                    </ScrollToTopLink>
                  </div>
                </div>
              </div>
            </div>
            <div
              aria-hidden="true"
              className="absolute inset-x-0 -top-16 -z-10 flex transform-gpu justify-center overflow-hidden blur-3xl"
            >
              <div
                style={{
                  clipPath:
                    "polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)",
                }}
                className="aspect-[1318/752] w-[82.375rem] flex-none bg-gradient-to-r from-stsLight to-stsDark opacity-25"
              />
            </div>
          </div>
        </div>

        {/* Feature cards */}
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <div className="divide-y divide-gray-200 overflow-hidden rounded-lg bg-gray-200 shadow sm:grid sm:grid-cols-2 sm:gap-px sm:divide-y-0">
            {actions.map((action, actionIdx) => (
              <div
                key={action.title}
                className={classNames(
                  actionIdx === 0
                    ? "rounded-tl-lg rounded-tr-lg sm:rounded-tr-none"
                    : "",
                  actionIdx === 1 ? "sm:rounded-tr-lg" : "",
                  actionIdx === actions.length - 2 ? "sm:rounded-bl-lg" : "",
                  actionIdx === actions.length - 1
                    ? "rounded-bl-lg rounded-br-lg sm:rounded-bl-none"
                    : "",
                  "group relative bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-stsLight"
                )}
              >
                <div>
                  <span
                    className={classNames(
                      action.iconBackground,
                      action.iconForeground,
                      "inline-flex rounded-lg p-3 ring-4 ring-white"
                    )}
                  >
                    <action.icon aria-hidden="true" className="size-6" />
                  </span>
                </div>
                <div className="mt-8">
                  <h3 className="text-base font-semibold text-gray-900">
                    <ScrollToTopLink
                      to={action.href}
                      className="focus:outline-none"
                    >
                      {/* Extend touch target to entire panel */}
                      <span aria-hidden="true" className="absolute inset-0" />
                      {action.title}
                    </ScrollToTopLink>
                  </h3>
                  <p className="mt-2 text-sm text-gray-500">
                    {action.description}
                  </p>
                </div>
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute right-6 top-6 text-gray-300 group-hover:text-gray-400"
                >
                  <svg
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className="size-6"
                  >
                    <path d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z" />
                  </svg>
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Logo cloud */}
      <div className="mx-auto w-full pt-10 px-8 lg:px-12">
        <div className="py-12">
          <h2 className="text-center text-lg/8 font-semibold text-gray-900">
            Trusted by the world’s most innovative teams
          </h2>
        </div>
        <LogoAnimation />

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
              <span aria-hidden="true" className="absolute inset-0" /> Read the
              article <span aria-hidden="true">&rarr;</span>
            </a>
          </p>
        </div>
      </div>

      {/* Testimonials */}
      <Testimonials />

      {/* Learn more & Contact us */}
      <div className="pt-8">
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
        <div className="py-20 sm:pt-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h1 className="text-balance text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                Safeguarding Businesses through Cutting-edge Techology
              </h1>
              <p className="mt-8 text-pretty text-base/6 font-medium text-gray-500">
                Comprehensive Managed IT Solutions to meet your Business
                Needs—Network, Cyber-Security, Asset/Application Management, and
                Support All in One Place. We offer affordable Enterprise class
                solutions and processes to small and medium sized businesses.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <a
                  href="mailto:info@stsit.biz"
                  className="relative rounded px-5 py-2.5 overflow-hidden group bg-stsLight relative hover:bg-gradient-to-r hover:from-stsDark hover:to-stsDark text-white hover:ring-2 hover:ring-offset-2 hover:ring-stsDark transition-all ease-out duration-300"
                >
                  <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                  <span className="relative">Contact Us</span>
                </a>
                <ScrollToTopLink
                  to="/managed-info"
                  className="text-sm/6 font-semibold text-gray-900"
                >
                  Learn More{" "}
                  <span
                    className="inline-block animate-horizontal-bounce"
                    aria-hidden="true"
                  >
                    →
                  </span>
                </ScrollToTopLink>
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

      <ImageCarousel />

      {/* Pricing section */}
      <div className="py-12 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base/7 font-semibold text-stsLight">Pricing</h2>
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
        <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
          {faqs.map((faq) => (
            <Disclosure key={faq.question} as="div" className="pt-6">
              <dt>
                <DisclosureButton className="group flex w-full items-start justify-between text-left text-gray-900">
                  <span className="text-base/7 font-semibold">
                    {faq.question}
                  </span>
                  <span className="ml-6 flex h-7 items-center">
                    {/* Default + icon */}
                    <PlusSmallIcon
                      aria-hidden="true"
                      className="size-6 group-data-[open]:hidden"
                    />
                    {/* Default - icon */}
                    <MinusSmallIcon
                      aria-hidden="true"
                      className="size-6 group-[&:not([data-open])]:hidden"
                    />
                  </span>
                </DisclosureButton>
              </dt>
              <DisclosurePanel as="dd" className="mt-2 pr-12">
                <p className="text-base/7 text-gray-600">{faq.answer}</p>
              </DisclosurePanel>
            </Disclosure>
          ))}
        </dl>
      </div>
    </PageTemplate>
  );
}
