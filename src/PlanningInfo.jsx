import PageTemplate from "./helpers/PageTemplate";
import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from "@heroicons/react/20/solid";

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
            <p className="text-base/7 font-semibold text-stsLight">STS</p>
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
                    expertise and support made all the difference!.”
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
                Our comprehensive IT consulting services start with strategic
                planning, where we evaluate your current IT infrastructure to
                identify optimization opportunities. From there, we provide
                tailored solutions with actionable recommendations customized to
                meet your specific business needs. To ensure long-term success,
                our team offers expert support with ongoing guidance and
                assistance for seamless operations.
              </p>
              <ul role="list" className="mt-8 max-w-xl space-y-8 text-gray-600">
                <li className="flex gap-x-3">
                  <LockClosedIcon
                    aria-hidden="true"
                    className="mt-1 size-5 flex-none text-stsLight"
                  />
                  <span>
                    <strong className="font-semibold text-gray-900">
                      Cybersecurity Solutions.
                    </strong>{" "}
                    Protect your business with advanced security measures.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <CloudArrowUpIcon
                    aria-hidden="true"
                    className="mt-1 size-5 flex-none text-stsLight"
                  />
                  <span>
                    <strong className="font-semibold text-gray-900">
                      Cloud Optimization.
                    </strong>{" "}
                    Leverage modern technology to streamline processes.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <ServerIcon
                    aria-hidden="true"
                    className="mt-1 size-5 flex-none text-stsLight"
                  />
                  <span>
                    <strong className="font-semibold text-gray-900">
                      Database Management.
                    </strong>{" "}
                    Ensure reliable and efficient data access.
                  </span>
                </li>
              </ul>
              <p className="mt-8">
                We focus on empowering your business with cutting-edge IT
                solutions designed for efficiency and growth. Whether it’s
                securing your digital assets, optimizing cloud workflows, or
                ensuring seamless database operations, our team is committed to
                delivering results. By aligning technology with your unique
                goals, we help you stay ahead in today’s dynamic business
                landscape. Together, we can build a robust IT foundation that
                drives innovation and success.
              </p>
              <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
                No IT Team? No Problem.
              </h2>
              <p className="mt-6">
                If your business doesn’t have an in-house IT team, we’ve got you
                covered. At Secure Tech Solutions, we manage everything from
                crafting a strategic plan to implementing effective IT
                solutions. Our dedicated experts ensure your technology
                infrastructure is optimized and seamlessly integrated, giving
                you the freedom to focus on what you do best—growing and
                managing your business. We take care of the details, so you can
                stay focused on achieving your goals.
              </p>
            </div>
          </div>
        </div>
      </div>
    </PageTemplate>
  );
}
