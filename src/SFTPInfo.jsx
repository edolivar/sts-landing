import PageTemplate from "./helpers/PageTemplate";
import {
  LockClosedIcon,
  EyeSlashIcon,
  CodeBracketIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/outline";

const features = [
  {
    name: "Encryption",
    description:
      "Files are encrypted when uploading and download, all communications with our servers are encrypted.",
    icon: LockClosedIcon,
  },
  {
    name: "Privacy",
    description:
      "No users can access files they shouldn’t. This privacy protection is at the heart of our secure file sharing service.",
    icon: EyeSlashIcon,
  },
  {
    name: "No additional software",
    description:
      "File sharing on any operating system, requiring only a standard web browser. Supports all FTP clients.",
    icon: CodeBracketIcon,
  },
  {
    name: "Notifications",
    description:
      "Email notifications are sent when shared files are accessed, or when files are uploaded.",
    icon: EnvelopeIcon,
  },
  // ...
];
export default function SFTPInfo() {
  return (
    <PageTemplate>
      <div className="overflow-hidden bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="lg:pr-8 lg:pt-4">
              <div className="lg:max-w-lg">
                <h2 className="text-base/7 font-semibold text-stsLight">
                  Share Files with ease
                </h2>
                <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                  Full Encryption
                </p>
                <p className="mt-6 text-lg/8 text-gray-600">
                  Protect your sensitive data with STS SFTP Cloud. Our advanced
                  encryption and security measures ensure the confidentiality
                  and integrity of your files.
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
                      </dt>{" "}
                      <dd className="inline">{feature.description}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
            <img
              alt="Product screenshot"
              src="/sftp_image.png"
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