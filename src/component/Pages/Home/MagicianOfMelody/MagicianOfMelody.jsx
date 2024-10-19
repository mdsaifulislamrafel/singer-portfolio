import image1 from '../../../../assets/image1.jpg'

const MagicianOfMelody = () => {
    return (
        <div className="bg-[#2c2e48] text-white flex flex-col md:flex-row items-center p-6 md:p-12">
            {/* Image Section */}
            <div className="md:w-1/2 w-full flex justify-center mb-6 md:mb-0">
                
                <img
                    alt="gallery"
                    className="rounded-md shadow-lg object-cover h-[300px] w-full md:w-auto object-center"
                    src={image1}
                />
            </div>

            {/* Text Section */}
            <div className="md:w-1/2 w-full text-center md:text-left">
                <h1 className="text-4xl font-bold mb-4">
                    The Magician of Melody
                </h1>
                <p className="text-lg">
                    <strong>Syed Real</strong>'s fans named him The Magician of Melody.
                    Real is often compared to singer <strong>Arijit Singh</strong> for
                    similar voice texture and tone.
                </p>
            </div>
        </div>
    );
}

export default MagicianOfMelody;
