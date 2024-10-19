import image3 from '../../../assets/image3.jpg';

const Biography = () => {
    return (
        <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-gray-100 p-4">
            {/* Image Section */}
            <div className="md:w-1/3 w-full p-4">
                <img
                    src={image3}
                    alt="Syed Real performing"
                    className="rounded-lg shadow-lg w-full object-cover"
                />
            </div>

            {/* Biography Content Section */}
            <div className="md:w-2/3 w-full p-4 bg-white rounded-lg shadow-lg">
                <h1 className="text-4xl font-bold mb-4 text-purple-700">Biography</h1>
                <p className="text-lg text-gray-700 mb-4">
                    <strong>Syed Real</strong> is a Bangladeshi singer and one of the finest guitarists.
                    Son of <strong>Abu Syed MD. Iqbal Hossain</strong> (father) and <strong>Nur Akter</strong> (mother),
                    he sings predominantly in <span className="text-blue-600">Bengali</span>, <span className="text-green-600">Hindi</span>, and English,
                    but has also performed in various other Bengali languages. He is the recipient of two <span className="text-red-600">National Awards</span> from Bangladesh Prime Minister <span className="text-blue-600">Sheikh Hasina</span>.
                </p>
                <p className="text-lg text-gray-700 mb-4">
                    He is often cited as one of the best singers of the youth generation in Bangladesh and West Bengal, India.
                    Syed Real began his career by participating in the contemporary reality show <span className="text-indigo-600">Channel i Shera Kontho</span> in 2014, and <span className="text-indigo-600">Power Voice</span>.
                </p>
                <p className="text-lg text-gray-700 mb-4">
                    He began his music training at a very young age at home. His father was his first Guru, and he received further training in <span className="text-purple-600">Nazrul Sangeet</span> and <span className="text-purple-600">Bengali classical music</span> from renowned musicians.
                </p>
            </div>
        </div>
    );
};

export default Biography;
