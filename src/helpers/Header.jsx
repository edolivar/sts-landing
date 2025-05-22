import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import PropTypes from "prop-types";

import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from "@headlessui/react";

import {
  Bars3Icon,
  CursorArrowRaysIcon,
  XMarkIcon,
  CpuChipIcon,
  FingerPrintIcon,
  CubeTransparentIcon,
  ServerStackIcon,
} from "@heroicons/react/24/outline";

import {
  ChevronDownIcon,
  QuestionMarkCircleIcon,
  EnvelopeIcon,
} from "@heroicons/react/20/solid";
import Banner from "./Banner";

const services = [
  {
    name: "IT Solutions & Planning",
    description: "Optimizing IT, Empowering Success.",
    href: "/plan-info",
    icon: CubeTransparentIcon,
  },
  {
    name: "Cybersecurity Awareness Training",
    description: "Protect your business.",
    href: "/cyber-info",
    icon: CursorArrowRaysIcon,
  },
  {
    name: "Managed Services",
    description: "Streamline your operations.",
    href: "/managed-info",
    icon: ServerStackIcon,
  },
  {
    name: "Asset Management",
    description: "Simplify device tracking.",
    href: "/assetmgmt-info",
    icon: CpuChipIcon,
  },
  {
    name: "MFA",
    description: "Certified DUO Deployment Partners.",
    href: "/mfa-info",
    icon: FingerPrintIcon,
  },
];

const callsToAction = [
  {
    name: "FAQs",
    href: "#faqs", // The ID of the section you want to scroll to
    icon: QuestionMarkCircleIcon,
    action: (navigate, location) => {
      // Ensure the page is loaded first, then scroll to the section
      if (location.pathname === "/") {
        // If on the home page, just scroll to the section
        document.querySelector("#faqs")?.scrollIntoView({ behavior: "smooth" });
      } else {
        // Navigate to the home page and then scroll after a slight delay
        navigate("/", { replace: true }); // Navigate to the home page
        setTimeout(() => {
          document
            .querySelector("#faqs")
            ?.scrollIntoView({ behavior: "smooth" });
        }, 300); // Wait for the page to load before scrolling
      }
    },
  },
  {
    name: "Contact us",
    href: "mailto:info@stsit.biz",
    icon: EnvelopeIcon,
    action: () => {
      // Open the email client with the specified address
      window.location.href = "mailto:info@stsit.biz";
    },
  },
];

export default function Header({ styles }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <header className={`relative ${styles ? styles : ""} z-10`}>
      <Banner />
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
      >
        <div className="flex lg:flex-1">
          <Link to="/" className="mr-5 p-1">
            <span className="sr-only">Secure Tech Solutions</span>
            <img alt="" src="/sts_cat_icon.svg" className="h-24 w-auto" />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          <Popover className="relative">
            <PopoverButton className="flex items-center gap-x-1 pl-1 text-lg font-semibold text-stsDark hover:text-stsLight">
              Services
              <ChevronDownIcon
                aria-hidden="true"
                className="size-5 flex-none text-gray-400"
              />
            </PopoverButton>

            <PopoverPanel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
              <div className="p-4">
                {services.map((item) => (
                  <div
                    key={item.name}
                    className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-gray-50"
                  >
                    <div className="flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                      <item.icon
                        aria-hidden="true"
                        className="size-6 text-gray-600 group-hover:text-stsLight"
                      />
                    </div>
                    <div className="flex-auto">
                      <Link
                        to={item.href}
                        className="block font-semibold text-gray-900"
                      >
                        {item.name}
                        <span className="absolute inset-0" />
                      </Link>
                      <p className="mt-1 text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                {callsToAction.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => item.action(navigate, location)}
                    className="flex items-center justify-center gap-x-2.5 p-3 text-sm/6 font-semibold text-gray-900 hover:bg-gray-100 group"
                  >
                    <item.icon
                      aria-hidden="true"
                      className="size-5 flex-none text-gray-400 group-hover:text-stsLight"
                    />
                    {item.name}
                  </button>
                ))}
              </div>
            </PopoverPanel>
          </Popover>

          <Link to="/about" className="text-base font-semibold text-stsDark hover:text-stsLight">
            About STS
          </Link>
          <a
            href="https://ticket.securetechsolutions.biz/"
            target="_blank"
            className="text-base font-semibold text-stsDark hover:text-stsLight"
          >
            Ticket Portal
          </a>
          <a
            href="http://ftp.securetechsolutions.biz"
            target="_blank"
            className="text-base font-semibold text-stsDark hover:text-stsLight"
          >
            SFTP Portal
          </a>
          <a
            href="https://sts-elearning.com/"
            target="_blank"
            className="text-base font-semibold text-stsDark hover:text-stsLight"
          >
            eLearning
          </a>
          <a
            href="https://remote.securetechsolutions.biz"
            target="_blank"
            className="text-base font-semibold text-stsDark hover:text-stsLight"
          >
            Remote Desktop
          </a>
        </PopoverGroup>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end"></div>
      </nav>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link to="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Secure Tech Solutions</span>
              <img alt="" src="/sts_favicon.svg" className="h-8 w-auto" />
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3">
                  <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">
                    Services
                    <ChevronDownIcon
                      aria-hidden="true"
                      className="size-5 flex-none group-data-[open]:rotate-180"
                    />
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2 space-y-2">
                    {services.map((item) => (
                      <button
                        key={item.name}
                        onClick={() => navigate(item.href)}
                        className="flex items-center justify-center gap-x-2.5 p-3 text-sm/6 font-semibold text-gray-900 group"
                      >
                        <item.icon
                          aria-hidden="true"
                          className="size-5 flex-none text-gray-400 group-hover:text-stsLight"
                        />
                        {item.name}
                      </button>
                    ))}
                    {callsToAction.map((item) => (
                      <button
                        key={item.name}
                        onClick={() => item.action(navigate, location)}
                        className="flex items-center justify-center gap-x-2.5 p-3 text-sm/6 font-semibold text-gray-900 group"
                      >
                        <item.icon
                          aria-hidden="true"
                          className="size-5 flex-none text-gray-400 group-hover:text-stsLight"
                        />
                        {item.name}
                      </button>
                    ))}
                  </DisclosurePanel>
                </Disclosure>
                <Link
                  to="/about"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  About STS
                </Link>
                <a
                  href="https://ticket.securetechsolutions.biz/"
                  target="_blank"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  Ticket Portal
                </a>
                <a
                  href="http://ftp.securetechsolutions.biz"
                  target="_blank"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  SFTP Portal
                </a>
                <a
                  href="https://sts-elearning.com/"
                  target="_blank"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  eLearning
                </a>
                <a
                  href="https://remote.securetechsolutions.biz"
                  target="_blank"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  Remote Desktop
                </a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}

Header.propTypes = {
  styles: PropTypes.string,
};
