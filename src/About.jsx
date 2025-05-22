"use client";
import { Helmet } from "react-helmet";
import PageTemplate from "./helpers/PageTemplate";
import Contact from "./helpers/Contact";

const stats = [
  { label: "Phishing attacks over the course of 2023", value: "9 million" },
  {
    label: "Annual losses from Business Email Compromise (BEC)",
    value: "$2.4 billion",
  },
  {
    label: "Average fraud loss per incident for small businesses",
    value: "$245,000",
  },
];

const values = [
  {
    name: "Education and Testing",
    description:
      "We educate and test your staff to ensure they are prepared to handle security threats. Our phishing testing and cyber training modules help reduce exposure to email and text attacks.",
  },
  {
    name: "24/7 Network Monitoring",
    description:
      "Our continuous network monitoring protects your infrastructure, minimizes downtime, and enhances productivity for your business.",
  },
  {
    name: "Intrusion Detection",
    description:
      "Our advanced intrusion detection system alerts engineers to breach attempts, enabling swift mitigation to prevent large-scale issues.",
  },
  {
    name: "Proactive Risk Management",
    description:
      "We conduct thorough IT assessments, identify vulnerabilities, and implement robust security protocols to minimize risks and safeguard operations.",
  },
  {
    name: "UniFi Network Solutions",
    description:
      "We provide scalable, cost-effective UniFi solutions for high-speed wireless access points, secure VPNs, and reliable networking at competitive prices.",
  },
  {
    name: "End User Compute Support",
    description:
      "We offer comprehensive hardware and software support, ensuring your employees have the tools they need for success, backed by our user-centric approach.",
  },
];

export default function About() {
  return (
    <PageTemplate>
      <Helmet>
        <title>STS - About</title>
        <meta name="description" content="Learn about Secure Tech Solutions—our mission, team, and commitment to helping businesses defend against cyber threats through expert-led phishing simulations and security training." />
      </Helmet>
      <div className="relative isolate -z-10">
        <svg
          aria-hidden="true"
          className="absolute inset-x-0 top-0 -z-10 h-[64rem] w-full stroke-gray-200 [mask-image:radial-gradient(32rem_32rem_at_center,white,transparent)]"
        >
          <defs>
            <pattern
              x="50%"
              y={-1}
              id="1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84"
              width={200}
              height={200}
              patternUnits="userSpaceOnUse"
            >
              <path d="M.5 200V.5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
            <path
              d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect
            fill="url(#1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84)"
            width="100%"
            height="100%"
            strokeWidth={0}
          />
        </svg>
        <div
          aria-hidden="true"
          className="absolute left-1/2 right-0 top-0 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48"
        >
          <div
            style={{
              clipPath:
                "polygon(63.1% 29.5%, 100% 17.1%, 76.6% 3%, 48.4% 0%, 44.6% 4.7%, 54.5% 25.3%, 59.8% 49%, 55.2% 57.8%, 44.4% 57.2%, 27.8% 47.9%, 35.1% 81.5%, 0% 97.7%, 39.2% 100%, 35.2% 81.4%, 97.2% 52.8%, 63.1% 29.5%)",
            }}
            className="aspect-[801/1036] w-[50.0625rem] bg-gradient-to-tr from-stsLight to-stsDark opacity-30"
          />
        </div>
        <div className="overflow-hidden">
          <div className="mx-auto max-w-7xl px-6 pb-32 pt-36 sm:pt-60 lg:px-8 lg:pt-32">
            <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
              <div className="relative w-full lg:max-w-xl lg:shrink-0 xl:max-w-2xl">
                <h1 className="text-pretty text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl">
                  Empowering Businesses with Innovative Technology Solutions
                </h1>
                <p className="mt-8 text-pretty text-lg font-medium text-gray-500 sm:max-w-md sm:text-xl/8 lg:max-w-none">
                  As a leading Managed Service Provider, we specialize in
                  delivering innovation, cost-effective strategies, and
                  cutting-edge technology solutions. For over 30 years, we have
                  proudly supported businesses across the U.S., empowering them
                  to grow and stay secure. Our comprehensive range of services,
                  backed by expert knowledge, ensures that we are your trusted
                  partner in achieving sustainable business success.
                </p>
              </div>
              <div className="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
                <div className="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
                  <div className="relative">
                    <img
                      alt=""
                      src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80"
                      className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                    />
                    <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                  </div>
                </div>
                <div className="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
                  <div className="relative">
                    <img
                      alt=""
                      src="https://images.unsplash.com/photo-1485217988980-11786ced9454?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80"
                      className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                    />
                    <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                  </div>
                  <div className="relative">
                    <img
                      alt=""
                      src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-x=.4&w=396&h=528&q=80"
                      className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                    />
                    <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                  </div>
                </div>
                <div className="w-44 flex-none space-y-8 pt-32 sm:pt-0">
                  <div className="relative">
                    <img
                      alt=""
                      src="https://images.unsplash.com/photo-1670272504528-790c24957dda?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=left&w=400&h=528&q=80"
                      className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                    />
                    <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                  </div>
                  <div className="relative">
                    <img
                      alt=""
                      src="https://images.unsplash.com/photo-1670272505284-8faba1c31f7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80"
                      className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                    />
                    <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content section */}
      <div className="mx-auto -mt-12 max-w-7xl px-6 sm:mt-0 lg:px-8 xl:-mt-8">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
          <h2 className="text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
            Our mission
          </h2>
          <div className="mt-6 flex flex-col gap-x-8 gap-y-20 lg:flex-row">
            <div className="lg:w-full lg:max-w-2xl lg:flex-auto">
              <p className="text-xl/8 text-gray-600">
                Since 1992, our mission has been to empower businesses with
                reliable and innovative IT solutions, fostering long-term
                partnerships built on trust and excellence. We are dedicated to
                providing comprehensive consulting services, from turnkey
                network installations to the maintenance and support of existing
                systems, tailored to meet the unique needs of each client.
              </p>
              <p className="mt-10 max-w-xl text-base/7 text-gray-700">
                We specialize in security and process compliance for industry
                standards like HIPAA, PCI, and NIST, and pride ourselves on
                delivering enterprise-level solutions at competitive price
                points for small and medium-sized businesses. At the core of our
                mission is a dedication to building lasting relationships with
                our clients, helping them grow and succeed in an ever-evolving
                digital landscape.
              </p>
            </div>
            <div className="lg:flex lg:flex-auto lg:justify-center">
              <dl className="w-64 space-y-8 xl:w-80">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="flex flex-col-reverse gap-y-4"
                  >
                    <dt className="text-base/7 text-stsLight">{stat.label}</dt>
                    <dd className="text-5xl font-semibold tracking-tight text-stsDark">
                      {stat.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonial section */}
      <div className="mx-auto mt-32 max-w-7xl sm:mt-56 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-center overflow-hidden bg-gray-900 px-6 py-20 shadow-xl sm:rounded-3xl sm:px-10 sm:py-24 md:px-12 lg:px-20">
          <div className="absolute inset-0 bg-gray-900/90 mix-blend-multiply" />
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
          <div className="relative max-w-2xl lg:mx-0">
            <img alt="" src="/sts_white.svg" className="mx-auto h-20 w-auto" />
            <figure>
              <blockquote className="mt-6 text-lg font-semibold text-white sm:text-lg text-left">
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
              <figcaption className="mt-6 text-base text-white text-left">
                <div className="font-semibold">Gus P.</div>
                <div className="mt-1">Founder</div>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>

      {/* Values section */}
      <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
            Our values
          </h2>
          <p className="mt-6 text-lg/8 text-gray-600">
            As your trusted technology partner, STS is dedicated to fortifying
            your digital defenses and safeguarding your valuable assets. Our
            strategies help you mitigate risks, enhance your security posture,
            and support the uninterrupted growth of your organization.
          </p>
        </div>
        <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 text-base/7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {values.map((value) => (
            <div key={value.name}>
              <dt className="font-semibold text-stsLight">{value.name}</dt>
              <dd className="mt-1 text-gray-600">{value.description}</dd>
            </div>
          ))}
        </dl>
      </div>
      <Contact />
    </PageTemplate>
  );
}
