import {
  ArrowDownOnSquareIcon,
  ClipboardDocumentCheckIcon,
  ExclamationTriangleIcon,
  ShieldCheckIcon,
  UsersIcon,
  WifiIcon,
  LockClosedIcon,
  GlobeAltIcon,
  UserPlusIcon,
  UserGroupIcon,
  CloudIcon,
  PhoneIcon,
  ServerStackIcon,
  CircleStackIcon,
  CalendarDaysIcon,
  ComputerDesktopIcon,
} from "@heroicons/react/24/outline";

const solutions = [
  {
    name: "Cybersecurity",
    description:
      "Non quo aperiam repellendus quas est est. Eos aut dolore aut ut sit nesciunt. Ex tempora quia. Sit nobis consequatur dolores incidunt.",
    icon: LockClosedIcon,
  },
  {
    name: "Threat Protection",
    description:
      "Asperiores quia voluptatem dolorum quaerat. Doloremque velit placeat qui voluptas sit. Quod error accusantium ut doloribus. Id nemo praesentium minima.",
    icon: ShieldCheckIcon,
  },
  {
    name: "Network Security and Maintenance",
    description:
      "Vero eum voluptatem aliquid nostrum voluptatem. Vitae esse natus. Earum nihil deserunt eos quasi cupiditate. A inventore et molestiae natus.",
    icon: GlobeAltIcon,
  },
  {
    name: "O365/Azure Administration",
    description:
      "Et quod quaerat dolorem quaerat architecto aliquam accusantium. Ex adipisci et doloremque autem quia quam. Quis eos molestiae at iure impedit.",
    icon: UserPlusIcon,
  },
  {
    name: "End-User Support",
    description:
      "Quae voluptatem quam voluptatibus sint. Autem non officia sit dolorem dolorum impedit. Quis amet quo esse inventore. Ex optio rerum veniam reprehenderit.",
    icon: UserGroupIcon,
  },
  {
    name: "Cloud Migration",
    description:
      "Facere praesentium perferendis nisi labore ab distinctio. Vero fugiat sit dolores explicabo esse. Molestiae saepe repellendus soluta neque sunt.",
    icon: CloudIcon,
  },
  {
    name: "Incident Response",
    description:
      "Ut molestiae accusantium beatae iusto. Quis consequatur asperiores reprehenderit eius enim esse. Adipisci cum fuga explicabo alias veritatis.",
    icon: ShieldCheckIcon,
  },
  {
    name: "End User Compute Device Management",
    description:
      "Nobis aliquam doloremque consequatur exercitationem. Iure aut sit quas tempora minima. Ipsam soluta aut voluptatibus accusantium quia ut.",
    icon: ComputerDesktopIcon,
  },
  {
    name: "24/7 Help Desk Support",
    description:
      "Ut quo molestias error tempora sequi. Non voluptas est animi sapiente. Accusantium voluptate autem saepe sed.",
    icon: CalendarDaysIcon,
  },
  {
    name: "Data Security Regulatory Compliance",
    description:
      "Voluptatem eius soluta dolorum. Perferendis quasi a doloremque inventore aut velit alias.",
    icon: CircleStackIcon,
  },
  {
    name: "Data Services",
    description:
      "Ipsum pariatur ab quos aut. Placeat mollitia nobis in qui. Deleniti perferendis soluta architecto nihil.",
    icon: ServerStackIcon,
  },
  {
    name: "VoIP Phone Systems",
    description:
      "Quisquam atque velit eaque nihil numquam. Dolorem non numquam maiores beatae. Facilis rerum dolorum corporis exercitationem.",
    icon: PhoneIcon,
  },
];

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

import PageTemplate from "./helpers/PageTemplate";

export default function PlanningInfo() {
  return (
    <PageTemplate>
      <div className="bg-white py-8 sm:py-12">
        <div className="mb-8 mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <p className="text-base/7 font-semibold text-stsLight">
              The STS Advantage
            </p>
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
        {/*Integrated Solutions*/}
        <div className="mt-24 mb-8 mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <p className="mt-2 text-pretty text-xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
              Integrated Solutions for a Secure &amp; Connected Business
            </p>
            <p className="mt-6 text-base/7 text-gray-600">
              Experience the peace of mind that comes with knowing your business
              is protected. Connect, Communicate, &amp; Thrive with Managed IT
              Services from STS.
            </p>
          </div>
          <div>
            <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
              <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
                {solutions.map((feature) => (
                  <div key={feature.name} className="flex flex-col">
                    <dt className="flex items-center gap-x-3 text-base/7 font-semibold text-gray-900">
                      <feature.icon
                        aria-hidden="true"
                        className="size-5 flex-none text-stsLight"
                      />
                      {feature.name}
                    </dt>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>
    </PageTemplate>
  );
}
