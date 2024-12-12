export default function NotFound() {
  return (
    <>
      <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="py-16">
          <img src="/sts_meta_logo.jpg" alt="STS" height={570} width={270} />
        </div>
        <div className="text-center">
          <p className="text-base font-semibold text-stsLight">404</p>
          <h1 className="mt-4 text-balance text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl">
            Page not found
          </h1>
          <p className="mt-6 text-pretty text-lg font-medium text-gray-500 sm:text-xl/8">
            Sorry, we couldn’t find the page you’re looking for.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="/"
              className="relative rounded px-5 py-2.5 overflow-hidden group bg-stsLight relative hover:bg-gradient-to-r hover:from-stsDark hover:to-stsDark text-white hover:ring-2 hover:ring-offset-2 hover:ring-stsDark transition-all ease-out duration-300"
            >
              <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
              <span className="relative">Go back home</span>
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
