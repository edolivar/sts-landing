const featuredTestimonial = {
  body: "STS has been an indispensable partner for our growing business. As seasoned contractors with decentralized offices and equipment across multiple LA construction sites, we rely on their white-glove service and flexibility. STS guided us in building a scalable, cloud-based IT infrastructure, providing hardware, software, security, and access support. They excel at both resolving tech issues for our staff and advising on strategic planning for our management team. Their patient, kind approach emphasizes teamwork and personalized service, making them essential to our aggressive growth model. We're grateful to have them as our trusted IT professionals.",
  author: {
    name: "Boyd Team",
    handle: "Boyd Contracting Inc",
    imageUrl: "/STSCustomerLogos/Boyd_Logo.png",
  },
};

const testimonials = [
  [
    [
      {
        body: "Working with STS has been hugely beneficial for our company. We can focus on our work and business without worrying about tech, systems, or networking. Their team is very knowledgeable, professional, and responsive. We highly recommend Gus and his team to anyone looking for a great partner!",
        author: {
          name: "KT Kim",
          handle: "Solinco",
          imageUrl: "/STSCustomerLogos/Solinco_Logo_Small.png",
        },
      },
      // More testimonials...
      {
        body: "Our firm has been working with STS for years, relying on them for a wide range of IT services, including network setup, network security, IT support, and workstation setup. Gus is always available, day or night, and his efficiency helps minimize any disruptions to our daily operations. Our security is his top priority—he has helped us implement and roll out security measures that allow us to proactively address potential threats, giving us peace of mind.",
        author: {
          name: "PLG Team",
          handle: "Protection Law Group",
          imageUrl: "/STSCustomerLogos/PLG_Logo.png",
        },
      },
    ],
    [
      {
        body: "I have been using Gus and STS for all of my computing and cybersecurity needs for over five years. As an insurance agency, I understand how crucial cybersecurity is. In today's digital environment, one wrong move could cost your business tens of thousands of dollars. I highly recommend STS to protect you and your clients' online presence.",
        author: {
          name: "Joel Versh",
          handle: "Farmers​ Insurance",
          imageUrl: "/STSCustomerLogos/Farmers_Logo.png",
        },
      },
      // More testimonials...
    ],
  ],
  [
    [
      {
        body: "Working with STS LLC has been a game-changer for our IT needs. They are incredibly responsive, knowledgeable, and always on top of things. They follow through on their commitments and ensure that every request is handled efficiently. Their structured system for IT requests is seamless and easy to use, making our workflow much smoother. It's refreshing to have a team that not only knows their stuff but also truly cares about providing excellent support. We highly recommend STS!",
        author: {
          name: "Veronica Doering",
          handle: "Summit Advisors LA",
          imageUrl: "/STSCustomerLogos/Summit_Logo_Small.png",
        },
      },
      // More testimonials...
    ],
    [
      {
        body: "We have been working with STS for several years. Gus and his team have been instrumental in updating our network and cybersecurity while taking care of our general IT needs, allowing us to focus on our day-to-day business. Gus is very knowledgeable and responds to our inquiries quickly. We have recommended and will continue to recommend STS.",
        author: {
          name: "Gavin Withey",
          handle: "Withey & Co Inc",
          imageUrl: "",
        },
      },
      // More testimonials...
      {
        body: "Our relationship with STS has been transformational for our architecture firm. Their team has consistently demonstrated professionalism and responsiveness. Before our partnership, technology management was a constant source of frustration and distraction. However, they have completely changed our relationship with our network hardware, systems, and software. Their expertise and proactive approach have turned IT from a recurring headache into something we rarely even need to think about.",
        author: {
          name: "K. Ben Loescher",
          handle: "AIA | ICC | LEED AP",
          imageUrl: "/STSCustomerLogos/LMA_Logo.jpg",
        },
      },
    ],
  ],
];
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Testimonials() {
  return (
    <div className="relative isolate bg-white pb-8 pt-20">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-1/2 -z-10 -translate-y-1/2 transform-gpu overflow-hidden opacity-30 blur-3xl"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="ml-[max(50%,38rem)] aspect-[1313/771] w-[82.0625rem] bg-gradient-to-tr from-stsLight to-stsDark"
        />
      </div>
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 -z-10 flex transform-gpu overflow-hidden pt-32 opacity-25 blur-3xl sm:pt-40 xl:justify-end"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="ml-[-22rem] aspect-[1313/771] w-[82.0625rem] flex-none origin-top-right rotate-[30deg] bg-gradient-to-tr from-stsLight to-stsDark xl:ml-0 xl:mr-[calc(50%-12rem)]"
        />
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base/7 font-semibold text-stsLight">
            Testimonials
          </h2>
          <p className="mt-2 text-balance text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
            We have worked with many of amazing companies
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 grid-rows-1 gap-8 text-sm/6 text-gray-900 sm:mt-20 sm:grid-cols-2 xl:mx-0 xl:max-w-none xl:grid-flow-col xl:grid-cols-4">
          <figure className="rounded-2xl bg-white shadow-lg ring-1 ring-gray-900/5 sm:col-span-2 xl:col-start-2 xl:row-end-1">
            <blockquote className="p-6 text-lg font-semibold tracking-tight text-gray-900 sm:p-12 sm:text-xl/8">
              <p>{`“${featuredTestimonial.body}”`}</p>
            </blockquote>
            <figcaption className="flex flex-wrap items-center gap-x-4 gap-y-4 border-t border-gray-900/10 px-6 py-4 sm:flex-nowrap">
              <img
                alt=""
                src={featuredTestimonial.author.imageUrl}
                className="w-20 flex-none"
              />
              <div className="flex-auto">
                <div className="font-semibold">
                  {featuredTestimonial.author.name}
                </div>
                <div className="text-gray-600">{`@${featuredTestimonial.author.handle}`}</div>
              </div>
            </figcaption>
          </figure>
          {testimonials.map((columnGroup, columnGroupIdx) => (
            <div
              key={columnGroupIdx}
              className="space-y-8 xl:contents xl:space-y-0"
            >
              {columnGroup.map((column, columnIdx) => (
                <div
                  key={columnIdx}
                  className={classNames(
                    (columnGroupIdx === 0 && columnIdx === 0) ||
                      (columnGroupIdx === testimonials.length - 1 &&
                        columnIdx === columnGroup.length - 1)
                      ? "xl:row-span-2"
                      : "xl:row-start-1",
                    "space-y-8"
                  )}
                >
                  {column.map((testimonial) => (
                    <figure
                      key={testimonial.author.handle}
                      className="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-gray-900/5"
                    >
                      <blockquote className="text-gray-900">
                        <p>{`“${testimonial.body}”`}</p>
                      </blockquote>
                      <figcaption className="mt-6 flex items-center gap-x-4">
                        {testimonial.author.imageUrl ? (
                          <img
                            alt=""
                            src={testimonial.author.imageUrl}
                            className="w-12"
                          />
                        ) : null}
                        <div>
                          <div className="font-semibold">
                            {testimonial.author.name}
                          </div>
                          <div className="text-gray-600">{`@${testimonial.author.handle}`}</div>
                        </div>
                      </figcaption>
                    </figure>
                  ))}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
