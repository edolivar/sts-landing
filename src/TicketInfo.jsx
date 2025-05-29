import PageTemplate from "./helpers/PageTemplate";
import { Helmet } from "react-helmet";
import {
  ComputerDesktopIcon,
  GlobeAltIcon,
  LockClosedIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";

const features = [
  {
    name: "Intrusion Detection",
    description:
      " Our advanced intrusion detection system alerts our engineers to potential breach attempts, allowing us to quickly mitigate and prevent large-scale issues.",
    icon: LockClosedIcon,
  },
  {
    name: "24/7 Network Monitoring",
    description:
      " Our continuous network monitoring ensures your infrastructure is always protected, reducing downtime and enhancing productivity for your business",
    icon: GlobeAltIcon,
  },
  {
    name: "Comprehensive Support",
    description:
      " We offer end-to-end support for all your end-user computing needs, including hardware and software management, troubleshooting, and user assistance. Our team of experts is always iready to resolve any issues promptly and efficiently.",
    icon: UserGroupIcon,
  },
  {
    name: "Hardware Support",
    description:
      " Our team of certified technicians has extensive experience in handling a wide range of hardware. From servers and workstations to networking equipment and peripherals, we ensure that your hardware is configured and maintained to the highest standards.",
    icon: ComputerDesktopIcon,
  },
  // ...
];

export default function TicketInfo() {
  return (
    <PageTemplate>
      <Helmet>
        <title>STS - Ticket</title>
        <meta name="description" content="Get support with Secure Tech Solutions’ ticketing system. Submit, track, and manage your IT and cybersecurity service requests efficiently for fast resolution." />
      </Helmet>
      <div className="overflow-hidden bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="lg:pr-8 lg:pt-4">
              <div className="lg:max-w-lg">
                <h2 className="text-base/7 font-semibold text-stsLight">
                  Need IT Support
                </h2>
                <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                  24/7 Personalized IT Support
                </p>
                <p className="mt-6 text-lg/8 text-gray-600">
                  We offer 24/7/365 technical support via our Help Desk Call
                  Center, ensuring that help is always just a call away. We also
                  provide emergency support after hours, on weekends, and on
                  holidays, so you’re never left without assistance when you
                  need it most.
                </p>
                <dl className="mt-10 max-w-xl space-y-8 text-base/7 text-gray-600 lg:max-w-none">
                  {features.map((feature) => (
                    <div key={feature.name} className="relative pl-9">
                      <dt className="inline font-semibold text-gray-900">
                        <feature.icon
                          aria-hidden="true"
                          className="absolute left-1 top-1 size-5 text-stsLight"
                        />
                        {feature.name}
                      </dt>
                      <dd className="inline">{feature.description}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
            <img
              alt="Product screenshot"
              src="/ticket_image.png"
              width={2432}
              height={1442}
              className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
            />
          </div>
        </div>
      </div>
    </PageTemplate>
  );
}
