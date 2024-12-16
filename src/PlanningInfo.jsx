import {
  ArrowTrendingDownIcon,
  UserIcon,
  LockClosedIcon,
  ShieldCheckIcon,
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

const features = [
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

import PageTemplate from "./helpers/PageTemplate";

export default function PlanningInfo() {
  return (
    <PageTemplate>
      <div className="relative isolate overflow-hidden bg-white pt-14 sm:py-32">
        <div
          aria-hidden="true"
          className="absolute -top-80 left-[max(6rem,33%)] -z-10 transform-gpu blur-3xl sm:left-1/2 md:top-20 lg:ml-20 xl:top-3 xl:ml-56"
        >
          <div
            style={{
              clipPath:
                "polygon(63.1% 29.6%, 100% 17.2%, 76.7% 3.1%, 48.4% 0.1%, 44.6% 4.8%, 54.5% 25.4%, 59.8% 49.1%, 55.3% 57.9%, 44.5% 57.3%, 27.8% 48%, 35.1% 81.6%, 0% 97.8%, 39.3% 100%, 35.3% 81.5%, 97.2% 52.8%, 63.1% 29.6%)",
            }}
            className="aspect-[801/1036] w-[50.0625rem] bg-gradient-to-tr from-stsLight to-stsDark opacity-30"
          />
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <p className="text-base/7 font-semibold text-stsLight">
              The STS Advantage
            </p>
            <h1 className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
              Optimize Your IT Workflow
            </h1>
            <p className="mt-6 text-xl/8 text-gray-700">
              Achieve greater efficiency and success with tailored IT strategies
              designed to align your technology with your business goals.
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:mt-10 lg:max-w-none lg:grid-cols-12">
            <div className="relative lg:order-last lg:col-span-5">
              <svg
                aria-hidden="true"
                className="absolute -top-[40rem] left-1 -z-10 h-[64rem] w-[175.5rem] -translate-x-1/2 stroke-gray-900/10 [mask-image:radial-gradient(64rem_64rem_at_111.5rem_0%,white,transparent)]"
              >
                <defs>
                  <pattern
                    id="e87443c8-56e4-4c20-9111-55b82fa704e3"
                    width={200}
                    height={200}
                    patternUnits="userSpaceOnUse"
                  >
                    <path d="M0.5 0V200M200 0.5L0 0.499983" />
                  </pattern>
                </defs>
                <rect
                  fill="url(#e87443c8-56e4-4c20-9111-55b82fa704e3)"
                  width="100%"
                  height="100%"
                  strokeWidth={0}
                />
              </svg>
              <figure className="border-l border-stsLight pl-8">
                <blockquote className="text-xl/8 font-semibold tracking-tight text-gray-900">
                  <p>
                    “Secure Tech Solutions transformed our IT infrastructure,
                    delivering unmatched reliability and efficiency. Their
                    expertise and support made all the difference!”
                  </p>
                </blockquote>
                <figcaption className="mt-8 flex gap-x-4">
                  <img
                    alt=""
                    src="/anthony.jpg"
                    className="mt-1 size-10 flex-none rounded-full bg-gray-50"
                  />
                  <div className="text-sm/6">
                    <div className="font-semibold text-gray-900">Anthony</div>
                    <div className="text-gray-600">@anthony</div>
                  </div>
                </figcaption>
              </figure>
            </div>
            <div className="max-w-xl text-base/7 text-gray-700 lg:col-span-7">
              <p>
                Empower your employees to become your first line of defense
                against cyberattacks. Our comprehensive cyber awareness training
                program combines engaging learning modules with realistic
                phishing simulations to build a strong human firewall within
                your organization. Our goal is to boost your Cybersecurity
                posture with Phishing and Social Engineering Tests:
              </p>
              <ul role="list" className="mt-8 max-w-xl space-y-8 text-gray-600">
                <li className="flex gap-x-3">
                  <ShieldCheckIcon
                    aria-hidden="true"
                    className="mt-1 size-5 flex-none text-stsLight"
                  />
                  <span>
                    <strong className="font-semibold text-gray-900">
                      Strengthen Your Human Firewall
                    </strong>{" "}
                    Cyber Awareness Testing &amp; Training.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <ArrowTrendingDownIcon
                    aria-hidden="true"
                    className="mt-1 size-5 flex-none text-stsLight"
                  />
                  <span>
                    <strong className="font-semibold text-gray-900">
                      Reduce Your Risk
                    </strong>{" "}
                    Experience Realistic Cyber Threats with Simulated Attacks.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <LockClosedIcon
                    aria-hidden="true"
                    className="mt-1 size-5 flex-none text-stsLight"
                  />
                  <span>
                    <strong className="font-semibold text-gray-900">
                      Elevate Your Security
                    </strong>{" "}
                    Comprehensive Cyber Awareness Training &amp; Testing.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <UserIcon
                    aria-hidden="true"
                    className="mt-1 size-5 flex-none text-stsLight"
                  />
                  <span>
                    <strong className="font-semibold text-gray-900">
                      Human-Centered Security
                    </strong>{" "}
                    Train &amp; Test Your Employees to Recognize Cyber Threats.
                  </span>
                </li>
              </ul>
              <p className="mt-8">
                We will help you build a culture of security within your
                organization. Our cost-effective programs foster a proactive
                approach to cybersecurity by empowering employees to be vigilant
                and report suspicious activity.
              </p>
            </div>
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
                {features.map((feature) => (
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
