import {
  ArrowDownOnSquareIcon,
  ClipboardDocumentCheckIcon,
  ExclamationTriangleIcon,
  ShieldCheckIcon,
  UsersIcon,
  WifiIcon,
} from "@heroicons/react/24/outline";
import PageTemplate from "./helpers/PageTemplate";

const features = [
  {
    name: "Vulnerability Assessments",
    description:
      "Our experts identify weaknesses in your network, systems, and applications, providing actionable recommendations to enhance security and reduce risks.",
    href: "#vulnerability-assessments",
    icon: ClipboardDocumentCheckIcon,
  },
  {
    name: "Penetration Testing",
    description:
      "Simulated cyberattacks are conducted to test the strength of your systems, helping us identify vulnerabilities before hackers can exploit them.",
    href: "#penetration-testing",
    icon: ArrowDownOnSquareIcon,
  },
  {
    name: "Security Audits & Compliance",
    description:
      "We ensure your organization meets industry standards and regulatory requirements, identifying gaps to keep your business compliant and avoid penalties.",
    href: "#security-audits-compliance",
    icon: ShieldCheckIcon,
  },
  {
    name: "Network Security",
    description:
      "We implement strong network security measures such as firewalls and intrusion detection systems to protect your organization from unauthorized access and cyber threats.",
    href: "#network-security",
    icon: WifiIcon,
  },

  {
    name: "Simulated Phishing Campaigns",
    description:
      "We offer simulated phishing campaigns via email and SMS, followed by training to help employees recognize and respond to cyber threats.",
    href: "#simulated-phishing-campaigns",
    icon: ExclamationTriangleIcon,
  },
  {
    name: "Incident Response",
    description:
      "Our team is available 24/7 to assist with security incidents, helping contain breaches, minimize damage, and restore operations quickly.",
    href: "#incident-response",
    icon: UsersIcon,
  },
];

export default function CyberInfo() {
  return (
    <PageTemplate>
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl lg:text-balance">
              Comprehensive Cybersecurity Solutions to Safeguard Your Business
            </p>
            <p className="mt-6 text-md text-gray-600">
              In today’s ever-evolving digital landscape, securing your business
              is essential. With the rise of cyber threats, having a robust
              cybersecurity strategy is vital. At Secure Tech Solutions, we
              provide comprehensive cybersecurity services tailored to your
              organization’s unique needs.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              {features.map((feature) => (
                <div key={feature.name} className="flex flex-col">
                  <dt className="flex items-center gap-x-3 text-base/7 font-semibold text-gray-900">
                    <feature.icon
                      aria-hidden="true"
                      className="size-5 flex-none text-stsLight"
                    />
                    {feature.name}
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base/7 text-gray-600">
                    <p className="flex-auto">{feature.description}</p>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </PageTemplate>
  );
}
