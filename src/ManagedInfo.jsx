import PageTemplate from "./helpers/PageTemplate";
import ScrollToTopLink from "./helpers/ScrollLink";

export default function ManagedInfo() {
  return (
    <PageTemplate>
      <div className="bg-white ">
        <div className="mx-auto py-9 max-w-5xl text-left px-6 lg:px-8">
          <h2 className="mt-2 text-6xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
            Transform Your Business with Managed IT Services
          </h2>
          <p className="mt-8 text-pretty text-lg font-medium text-stsLight sm:text-lg">
            Empower Your Organization with Expert IT Support and Strategic
            Security Solutions.
          </p>
          <p className="mt-8 text-gray-500">
            Managed IT Services are revolutionizing business operations by
            allowing companies to outsource their IT functions to specialized
            third-party providers, known as Managed Service Providers (MSPs).
            These services enable businesses to gain a competitive edge by
            supplementing or fully managing their IT departments, depending on
            their needs, budget, and goals. By leveraging the expertise of an
            MSP, IT becomes a strategic asset rather than a cost center, helping
            businesses align their technology with overall objectives. We offer
            a wide range of services, from basic monitoring and alerts to
            full-fledged IT management and problem resolution.
          </p>
        </div>

        <div className="px-6 py-18 sm:px-6 sm:py-12 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-balance text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
              Share Files with ease.
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-pretty text-lg/8 text-gray-600">
              Protect your sensitive data with STS SFTP Cloud. Our advanced
              encryption and security measures ensure the confidentiality and
              integrity of your files.
            </p>
            <div className="my-2 flex items-center justify-center gap-x-6">
              <ScrollToTopLink
                to="/sftp-info"
                className="text-sm/6 font-semibold text-gray-900 hover:text-stsLight"
              >
                Learn more{" "}
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

        <div className="mx-auto max-w-5xl text-left px-6 lg:px-8">
          <p className="mt-8 text-gray-500">
            Our 24/7 Managed Help Desk Services ensure that your IT
            infrastructure is always operational, freeing your team to focus on
            core business activities. With both virtual and on-site support, we
            provide seamless assistance whenever you need it. Additionally, our
            Secure File Transfer Cloud Service allows you to securely send and
            receive files, ensuring that sensitive information is protected
            during transit. In today&apos;s fast-paced digital world, Managed
            Security Services are essential to safeguard your business from
            evolving cyber threats. Whether you&apos;re dealing with breaches or
            preventing future attacks, our expert team offers proactive
            solutions to protect your assets and ensure your business remains
            secure in the digital age.
          </p>
        </div>

        <div className="mx-auto max-w-5xl py-8  sm:py-16 lg:px-8">
          <div className="relative isolate overflow-hidden bg-gray-900 px-6 py-24 text-center shadow-2xl sm:rounded-3xl sm:px-16">
            <h2 className="text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              24/7 Personalized IT Support.
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-pretty text-lg/8 text-gray-300">
              We provide 24/7/365 technical support through our Help Desk Call
              Center, including emergency assistance after hours, weekends, and
              holidays.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <ScrollToTopLink
                to="/ticket-info"
                className="text-sm/6 font-semibold text-white"
              >
                Learn more{" "}
                <span
                  className="inline-block animate-horizontal-bounce"
                  aria-hidden="true"
                >
                  →
                </span>
              </ScrollToTopLink>
            </div>
            <svg
              viewBox="0 0 1024 1024"
              aria-hidden="true"
              className="absolute left-1/2 top-1/2 -z-10 size-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
            >
              <circle
                r={512}
                cx={512}
                cy={512}
                fill="url(#827591b1-ce8c-4110-b064-7cb85a0b1217)"
                fillOpacity="0.7"
              />
              <defs>
                <radialGradient id="827591b1-ce8c-4110-b064-7cb85a0b1217">
                  <stop stopColor="#0c3644" />
                  <stop offset={1} stopColor="#168991" />
                </radialGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </PageTemplate>
  );
}
