import { DocumentTextIcon, LockClosedIcon } from "@heroicons/react/24/outline";
import PageTemplate from "./helpers/PageTemplate";

const features = [
  {
    name: "Device Management",
    description:
      " Empower your organization with comprehensive asset visibility. Effortlessly track the lifecycle of your assets, from initial deployment to final return. Gain real-time insights into asset status, location, and maintenance history. Streamline asset management and optimize resource allocation with our user-friendly platform.",
    icon: LockClosedIcon,
  },
  {
    name: "License Management",
    description:
      " Efficiently track and manage your software licenses, ensuring optimal utilization and compliance. Receive timely email notifications for expiring licenses, allowing you to proactively renew and avoid potential disruptions.",
    icon: DocumentTextIcon,
  },
];

export default function AssetManagementInfo() {
  return (
    <PageTemplate>
      <div className="overflow-hidden bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="lg:pr-8 lg:pt-4">
              <div className="lg:max-w-lg">
                <h2 className="text-base/7 font-semibold text-stsLight">
                  Asset Management
                </h2>
                <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                  Streamline device management.
                </p>
                <p className="mt-6 text-lg/8 text-gray-600">
                  Our team of certified technicians has extensive experience in
                  handling a wide range of hardware. From servers and
                  workstations to networking equipment and peripherals, we
                  ensure that your hardware is configured and maintained to the
                  highest standards
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
              src="/asset_image.png"
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
