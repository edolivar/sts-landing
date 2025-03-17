import { XMarkIcon } from "@heroicons/react/20/solid";
import { useState, useEffect } from "react";

export default function Banner() {
  const [isVisible, setIsVisible] = useState(true);

  const hideBanner = () => {
    console.log("Banner is hidden");
    setIsVisible(false);
  };

  return (
    <>
      {isVisible ? (
        <div className="flex items-center gap-x-6 bg-stsDark px-6 py-2.5 sm:px-3.5 sm:before:flex-1">
          <p className="text-sm text-white">
            <strong className="font-semibold">Security Alert:</strong>
            <span className="mx-2">•</span>
            We have been made aware of a malicious actor attempting to
            impersonate us. Please be cautious and verify any communication
            claiming to be from us.
          </p>
          <div className="flex flex-1 justify-end">
            <button
              className="-m-3 p-3 focus-visible:outline-offset-[-4px]"
              onClick={hideBanner}
            >
              <span className="sr-only">Dismiss</span>
              <XMarkIcon aria-hidden="true" className="size-5 text-white" />
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
}
