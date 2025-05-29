import {
  BanknotesIcon,
  FingerPrintIcon,
  FlagIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/outline";
import PageTemplate from "./helpers/PageTemplate";
import { Helmet } from "react-helmet";

const features = [
  {
    name: "Multi-Factor Authentication (MFA)",
    description:
      "Duo’s MFA adds an extra layer of security by requiring users to verify their identity through multiple methods. This significantly reduces the risk of unauthorized access and ensures that only authorized personnel can access your systems.",
    icon: FingerPrintIcon,
  },
  {
    name: "Comprehensive Security",
    description:
      "Duo provides a holistic approach to security, offering features such as device health checks,adaptive authentication, and secure single sign-on (SSO). These capabilities help you maintain a secure environment and protect against potential threats.",
    icon: ShieldCheckIcon,
  },
  {
    name: "Compliance and Reporting",
    description:
      "Duo helps you meet regulatory requirements and provides detailed reporting to ensure compliance. Gain insights into user activity, authentication events, and potential security risks with Duo’s comprehensive reporting tools.",
    icon: FlagIcon,
  },
  {
    name: "Competitive Pricing",
    description:
      "As a volume reseller, we can leverage our buying power to bring you attractive pricing for your small to medium sized business.",
    icon: BanknotesIcon,
  },
];

export default function MFAInfo() {
  return (
    <PageTemplate>
      <Helmet>
        <title>STS - MFA</title>
        <meta name="description" content="Learn how Secure Tech Solutions helps businesses implement multi-factor authentication (MFA) to strengthen account security, prevent unauthorized access, and meet compliance requirements." /> </Helmet>

      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-5">
            <div className="col-span-2">
              <h2 className="text-base/7 font-semibold text-stsLight">
                Cisco DUO
              </h2>
              <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                Certified DUO Deployment Partners
              </p>
              <p className="mt-6 text-base/7 text-gray-600">
                In an era where cyber threats are constantly evolving,
                safeguarding your organization’s data and systems is more
                critical than ever. As a trusted Duo partner, we offer
                comprehensive security solutions that provide robust protection
                and peace of mind. Discover how Duo can enhance your security
                posture and keep your business safe.
              </p>
            </div>
            <dl className="col-span-3 grid grid-cols-1 gap-x-8 gap-y-10 text-base/7 text-gray-600 sm:grid-cols-2 lg:gap-y-16">
              {features.map((feature) => (
                <div key={feature.name} className="relative pl-9">
                  <dt className="font-semibold text-gray-900">
                    <feature.icon
                      aria-hidden="true"
                      className="absolute left-1 top-1 size-5 text-stsLight"
                    />
                    {feature.name}
                  </dt>
                  <dd className="mt-2">{feature.description}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </PageTemplate>
  );
}
