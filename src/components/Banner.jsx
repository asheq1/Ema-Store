import BannerImg from "../assets/banner.jpeg"

const Banner = () => {
    return (
    <div className="bg-gray-100 p-8">
        <div className="container mx-auto flex flex-col md:flex-row items-center gap-x-1"> 
            {/* Left side: Heading and Button */}
            <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
                Welcome to Our Platform Discover amazing books
            </h1>
            <button className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition">
                View the List
            </button>
            </div>
        
            {/* Right side: Image */}
            <div className="flex-1 mt-6 md:mt-0 flex justify-center md:justify-end">
            <img
                src={BannerImg}
                alt="Banner"
                className="w-fit md:h-96 object-cover rounded-lg shadow-lg"
            />
            </div>
        </div>
    </div>   
    );
  };

export default Banner;