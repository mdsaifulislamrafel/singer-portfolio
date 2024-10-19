import { FaDirections } from "react-icons/fa";
import videoSource from '../../../../assets/musige.mp4';
import { Link } from "react-router-dom";

const Banner = () => {
    const item = [
        {
            "title": "Title 1",
            "description": "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet."
        },
        {
            "title": "Title 2",
            "description": "Curabitur pretium tincidunt lacus. Nulla gravida orci a odio."
        },
        {
            "title": "Title 3",
            "description": "Donec varius enim nec eros. Proin id nisi eget turpis varius faucibus."
        },
        {
            "title": "Title 4",
            "description": "Aliquam erat volutpat. Curabitur tincidunt scelerisque arcu, ut feugiat erat egestas."
        },
        {
            "title": "Title 5",
            "description": "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae."
        },
        {
            "title": "Title 6",
            "description": "Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus."
        },
        {
            "title": "Title 7",
            "description": "Sed cursus turpis vitae tortor. Curabitur sodales ligula in libero."
        },
        {
            "title": "Title 8",
            "description": "Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh."
        },
        {
            "title": "Title 9",
            "description": "Aenean quam. In scelerisque sem at dolor. Maecenas mattis."
        },
        {
            "title": "Title 10",
            "description": "Pellentesque libero tortor, tincidunt et, tincidunt eget, semper nec, quam."
        }
    ]

    return (
        <div className="md:flex justify-around gap-8">
            {/* background video and content */}
            <div className="relative w-full h-[500px]">
                {/* Video Background */}
                <video
                    className="absolute inset-0 w-full h-full object-cover"
                    src={videoSource}
                    autoPlay
                    loop
                    muted
                />

                {/* Overlay Section */}
                <div className="absolute inset-0 bg-black opacity-40 z-0"></div>

                {/* Content Section */}
                <div className="container relative z-10 mx-auto flex  px-5 text-yellow-50 py-24 flex-col justify-center">
                    <div class="flex items-center justify-center my-4 w-full md:w-[25%] mx-auto md:mx-0">
                        <div class="border-t border-[#856b34] flex-grow mx-2"></div>
                        <span class="text-center text-white tracking-[8px]">Latest Video</span>
                        <div class="border-t border-[#856b34] flex-grow mx-2"></div>
                    </div>
                    {/* Text Section */}
                    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium">
                            Crazy For You
                        </h1>
                    </div>
                </div>
            </div>

            {/* Product item */}
            <div className="-mt-18 absolute -bottom-60  md:mt-0 flex flex-col w-full md:w-[600px] p-4 shadow-md rounded-md mb-4 md:mb-0 md:mr-4 z-20 overflow-hidden h-[75vh]">
                <div class="flex items-center justify-center my-4">
                    <div class="border-t border-[#856b34] flex-grow mx-2"></div>
                    <span class="text-center text-white tracking-[10px]">FEATURED</span>
                    <div class="border-t border-[#856b34] flex-grow mx-2"></div>
                </div>
                <div className="grid grid-cols-1 gap-4 p-4 overflow-y-auto">
                    {
                        item.map(song => <div className="p-4 flex flex-col justify-center bg-[#fff3] text-white rounded h-[130px] shadow">
                            <div className="flex justify-between">
                                <h3 className="font-bold text-lg">{song.title}</h3>
                            </div>
                            <p className="text-sm">
                                Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.
                            </p>
                        </div>)
                    }


                </div>
            </div>
        </div>
    );
};

export default Banner;
