import image2 from '../../../../assets/image2.jpg'
import image3 from '../../../../assets/image3.jpg'

const MusicProfile = () => {
    return (
        <div className="bg-gray-100 p-8">
            <div className="container mx-auto flex flex-col md:flex-row gap-10 items-start justify-between">
                {/* Text Section */}
                <div className="w-full md:w-1/2">
                    <h2 className="text-lg md:text-xl font-bold text-gray-900 mb-2">
                        <span className="text-blue-600">Syed Real</span> has been
                        <span className="text-blue-600"> excelling in music</span> since a really tender age!
                    </h2>
                    <h3 className="text-xl font-semibold mt-4">Genres</h3>
                    <ul className="list-disc pl-6 mt-2 space-y-2">
                        <li>
                            <a href="#" className="text-blue-600 hover:underline">Filmi</a>
                        </li>
                        <li>
                            <a href="#" className="text-blue-600 hover:underline">Sufi</a>
                        </li>
                        <li>
                            <a href="#" className="text-blue-600 hover:underline">Western classical music</a>
                        </li>
                        <li>
                            <a href="#" className="text-blue-600 hover:underline">Nazrul Sangit</a>
                        </li>
                        <li>
                            <a href="#" className="text-blue-600 hover:underline">Pop</a>
                        </li>
                        <li>
                            <a href="#" className="text-blue-600 hover:underline">EDM</a>
                        </li>
                        <li>
                            <a href="#" className="text-blue-600 hover:underline">Ghazal</a>
                        </li>
                        <li>
                            <a href="#" className="text-blue-600 hover:underline">Indian classical</a>
                        </li>
                    </ul>
                </div>

                {/* Image Section */}
                <div className="w-full md:w-1/2 flex flex-col md:flex-row items-center gap-4">
                    <img
                        alt="gallery"
                        className="w-full h-auto md:w-[300px] md:h-[400px] object-cover object-center"
                        src={image2}
                    />
                    <img
                        alt="gallery"
                        className="w-full h-auto md:w-[300px] md:h-[400px] object-cover object-center"
                        src={image3}
                    />
                </div>
            </div>
        </div>
    );
};

export default MusicProfile;
