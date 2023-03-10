import BannerImage from "../assets/banner.jpg";

const Banner = () => {
  return (
    <div className="max-w-[1640px] mx-auto p-4">
      <div className="max-h-[500px] relative">
        <div className="absolute w-full h-full text-gray-200 max-h-[500px] bg-black/40 flex flex-col justify-center">
          <h1 className=" px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold dark:text-white">
            The <span className="text-orange-500">Best</span>
          </h1>
          <h1 className=" px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold dark:text-white">
            <span className="text-orange-500">Foods</span> Delivered
          </h1>
        </div>
        <img
          className="w-full max-h-[500px] object-cover"
          src={BannerImage}
          alt="banner image"
        />
      </div>
    </div>
  );
};

export default Banner;
