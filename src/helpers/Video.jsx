const Video = () => {
  // Array of image sources

  return (
    <div className="mt-8 sm:mt-12 xl:mx-auto xl:max-w-7xl xl:px-8">
      <video className="h-full w-full rounded-lg" controls autoPlay muted loop>
        <source
          src="/STS_VIDEO.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Video;

