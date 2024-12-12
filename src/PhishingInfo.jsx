import PageTemplate from "./helpers/PageTemplate";

export default function PhishingInfo() {
  return (
    <PageTemplate>
      <div className="mx-auto h-96 my-56 max-w-7xl sm:px-6 lg:px-8 flex flex-col items-center justify-center">
        <img src="/sts_meta_logo.jpg" alt="" style={{ width: "45%" }} />
        <div className="text-4xl font-bold mt-4">Coming soon!</div>
      </div>
    </PageTemplate>
  );
}
