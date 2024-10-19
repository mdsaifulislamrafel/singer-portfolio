import React from 'react';

const VideoSection = () => {
    return (
        <section className="bg-gray-100 py-8">
            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Our Videos</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Video 1 */}
                    <div className="w-full h-64 overflow-hidden rounded-lg shadow-lg">
                        <video className="w-full h-full object-cover" controls>
                            <source src="/public/vedio1.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                    {/* Video 2 */}
                    <div className="w-full h-64 overflow-hidden rounded-lg shadow-lg">
                        <video className="w-full h-full object-cover" controls>
                            <source src="/public/vedio2.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default VideoSection;
