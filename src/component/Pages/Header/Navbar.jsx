import { useState, useRef, useEffect, useContext } from 'react';
import { IoMdArrowDropdown } from 'react-icons/io';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Provider/AuthProvider';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [activeItem, setActiveItem] = useState(null);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const dropdownRef = useRef(null);
    const menuRef = useRef(null);

    const handleLogout = () => {
        logOut(); // Perform logout action
        toast.success('Logged out successfully'); // Show success toast
        setIsMenuOpen(false); // Close menu after logout
        setActiveItem(null); // Reset active dropdown
    };

    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setActiveItem(null);  // Close the dashboard dropdown if clicking outside
        }
        if (menuRef.current && !menuRef.current.contains(event.target)) {
            setIsMenuOpen(false);  // Close mobile menu if clicking outside
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <nav className="bg-[#eceadd] shadow-md fixed top-0 w-full z-50">
            <div className="w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo Section */}
                    <div className="flex items-center">
                        <Link to="/">
                            <span className="md:ml-2 text-sm md:text-2xl text-blue-950 font-bold">TAREK TURJO</span>
                        </Link>
                    </div>

                    {/* Responsive Menu Button */}
                    <div className="flex items-center sm:hidden">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
                            aria-label="Toggle menu"
                        >
                            <svg
                                className="h-6 w-6"
                                stroke="currentColor"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    className={isMenuOpen ? "hidden" : "block"}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16m-7 6h7"
                                />
                                <path
                                    className={isMenuOpen ? "block" : "hidden"}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                    </div>

                    {/* Desktop Links Section */}
                    <div className="hidden sm:flex sm:items-center sm:space-x-6">
                        <Link to="/" className="text-gray-800 hover:text-blue-600 transition duration-200 ease-in-out">
                            Home
                        </Link>
                        <Link to="/biography" className="text-gray-800 hover:text-blue-600 transition duration-200 ease-in-out">
                            Biography
                        </Link>
                        <Link to="/portfolio" className="text-gray-800 hover:text-blue-600 transition duration-200 ease-in-out">
                            Portfolio
                        </Link>
                        <Link to="/faq" className="text-gray-800 hover:text-blue-600 transition duration-200 ease-in-out">
                            FAQ
                        </Link>
                    </div>

                    {/* Desktop Contact Section */}
                    <div className="hidden sm:flex sm:items-center sm:space-x-4">
                        {user ? (
                            <div className="relative">
                                <button
                                    onClick={() => setActiveItem(activeItem === 'Dashboard' ? null : 'Dashboard')}
                                    className="flex items-center gap-1 text-gray-800 hover:text-blue-600 transition duration-200 ease-in-out"
                                >
                                    Dashboard <IoMdArrowDropdown className="text-2xl" />
                                </button>
                                {activeItem === 'Dashboard' && (
                                    <div ref={dropdownRef} className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md">
                                        <Link to="/order-list" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                                            Order list
                                        </Link>
                                        <button
                                            onClick={() => {
                                                setActiveItem(null);  // Close dropdown after logout
                                                handleLogout();
                                            }}
                                            className="block cursor-pointer px-4 py-2 text-gray-800 hover:bg-gray-100"
                                        >
                                            Log out
                                        </button>
                                    </div>
                                )}
                            </div>
                        ) : (
                            <Link to="/login" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                                Login
                            </Link>
                        )}
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <div ref={menuRef} className={`fixed inset-0 bg-white shadow-md transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out z-40`}>
                <div className="flex justify-between items-center px-4 py-3">
                    <span className="text-lg font-semibold">Menu</span>
                    <button
                        onClick={() => setIsMenuOpen(false)}
                        className="text-gray-400 hover:text-gray-500"
                        aria-label="Close menu"
                    >
                        <svg
                            className="h-6 w-6"
                            stroke="currentColor"
                            fill="none"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </button>
                </div>
                <div className="px-2 pt-2 pb-3 space-y-1">
                    <Link to="/" className="text-gray-800 hover:bg-gray-100 block px-3 py-2 rounded-md">
                        Home
                    </Link>
                    <Link to="/biography" className="text-gray-800 hover:bg-gray-100 block px-3 py-2 rounded-md">
                        Biography
                    </Link>
                    <Link to="/portfolio" className="text-gray-800 hover:bg-gray-100 block px-3 py-2 rounded-md">
                        Portfolio
                    </Link>
                    <Link to="/faq" className="text-gray-800 hover:bg-gray-100 block px-3 py-2 rounded-md">
                        FAQ
                    </Link>
                </div>
                <div className="px-2 pb-3 space-y-1">
                    <Link to="/login" className="relative inline-flex items-center justify-start inline-block px-5 py-3 overflow-hidden font-medium transition-all bg-blue-600 rounded-full hover:bg-white group">
                        <span className="absolute inset-0 border-0 group-hover:border-[25px] ease-linear duration-100 transition-all border-white rounded-full"></span>
                        <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-blue-600">Login</span>
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
