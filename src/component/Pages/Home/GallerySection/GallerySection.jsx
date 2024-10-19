import image1 from '../../../../assets/image1.jpg'
import image2 from '../../../../assets/image2.jpg'
import image3 from '../../../../assets/image3.jpg'
import image4 from '../../../../assets/image4.jpg'
import image5 from '../../../../assets/image5.jpg'

const GallerySection = () => {
    return (
        <section className="text-white body-font">
            <div className="container px-5 py-24 mx-auto flex flex-wrap">
                {/* Title and Description */}
                <div className="flex w-full mb-20 flex-wrap">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font  lg:w-1/3 lg:mb-0 mb-4">
                        Master Cleanse Reliac Heirloom
                    </h1>
                    <p className="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base">
                        Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom.
                    </p>
                </div>

                {/* Image Gallery */}
                <div className="flex flex-wrap md:-m-2 -m-1">
                    {/* First Column */}
                    <div className="flex flex-wrap w-1/2">
                        <div className="md:p-2 p-1 w-1/2">
                            <img
                                alt="gallery"
                                className="w-full h-full object-cover object-center"
                                src={image1}
                            />
                        </div>
                        <div className="md:p-2 p-1 w-1/2">
                        <img
                                alt="gallery"
                                className="w-full h-full object-cover object-center"
                                src={image2}
                            />
                        </div>
                        <div className="md:p-2 p-1 w-full">
                        <img
                                alt="gallery"
                                className="w-full h-full object-cover object-center"
                                src={image3}
                            />
                        </div>
                    </div>

                    {/* Second Column */}
                    <div className="flex flex-wrap w-1/2">
                        <div className="md:p-2 p-1 w-full">
                        <img
                                alt="gallery"
                                className="w-full h-full object-cover object-center"
                                src={image4}
                            />
                        </div>
                        <div className="md:p-2 p-1 w-1/2">
                        <img
                                alt="gallery"
                                className="w-full h-full object-cover object-center"
                                src={image5}
                            />
                        </div>
                        <div className="md:p-2 p-1 w-1/2">
                        <img
                                alt="gallery"
                                className="w-full h-full object-cover object-center"
                                src={image1}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default GallerySection;
