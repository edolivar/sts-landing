"use client";
import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  FingerPrintIcon,
  LockClosedIcon,
} from "@heroicons/react/24/outline";
import ImageCarousel from "./helpers/ImageCarousel";
import LogoAnimation from "./helpers/LogoAnimation";
import PageTemplate from "./helpers/PageTemplate";

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
      "With STS VoIP, businesses can streamline communication and reduce costs by consolidating internet and voice services under a single provider. Simplify your operations and enhance productivity with our comprehensive suite of services tailored to your success.",
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

export default function Home() {
  return (
    <PageTemplate>
      <div className="pt-14">
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
                <a
                  href="#faqs"
                  className="text-sm/6 font-semibold text-gray-900"
                  onClick={(e) => {
                    e.preventDefault(); // Prevent default jump
                    document
                      .querySelector("#faqs")
                      .scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Learn more{" "}
                  <span
                    className="inline-block animate-horizontal-bounce"
                    aria-hidden="true"
                  >
                    →
                  </span>
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

      {/* Logo cloud */}
      <div className="mx-auto w-full px-8 lg:px-12">
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
            maintaining a secure online environment. Robust measures, including
            encryption, regular updates, and user education on strong password
            practices, are essential for safeguarding against cyber threats.
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
                  businesses with reliable, cutting-edge solutions that protect
                  their digital assets and streamline their operations. Our
                  comprehensive suite of services—ranging from managed SFTP
                  clients and VoIP systems to advanced cybersecurity solutions
                  and 24/7 support—empowers our clients to thrive in an
                  ever-evolving technological landscape. Our team’s commitment
                  to excellence ensures that your business is always one step
                  ahead, secure, and ready to grow.”
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
        <dl className="mt-10 space-y-8 divide-y divide-gray-900/10">
          {faqs.map((faq) => (
            <div key={faq.id} className="pt-8 lg:grid lg:grid-cols-12 lg:gap-8">
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
    </PageTemplate>
  );
}
