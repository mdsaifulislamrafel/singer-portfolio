import Banner from "../Banner/Banner";
import GallerySection from "../GallerySection/GallerySection";
import MagicianOfMelody from "../MagicianOfMelody/MagicianOfMelody";
import MusicProfile from "../MusicProfile/MusicProfile";
import Whatsapp from "../Whatsapp/Whatsapp";


const Home = () => {
    return (
        <div className="mt-16">
            <Banner />
            <div className="mt-[90%] md:mt-[30%]">
                <MagicianOfMelody />
                <MusicProfile />
                <GallerySection />
                <Whatsapp />
            </div>
        </div>
    );
};

export default Home;