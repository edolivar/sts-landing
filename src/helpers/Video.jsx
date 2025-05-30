const Video = () => {
  return (
    <div className="mt-8 sm:mt-12 xl:mx-auto xl:max-w-7xl xl:px-8">
      {/* Mobile: autoplay & muted, no controls */}
      <video
        className="block sm:hidden h-full w-full rounded-lg"
        autoPlay
        muted
        loop
        playsInline // Helps autoplay work on iOS Safari
      >
        <source src="/STS_VIDEO.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Desktop: autoplay & muted, with controls */}
      <video
        className="hidden sm:block h-full w-full rounded-lg"
        autoPlay
        muted
        loop
        controls
        playsInline
      >
        <source src="/STS_VIDEO.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Video;

