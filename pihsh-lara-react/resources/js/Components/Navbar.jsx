// import { useState, useEffect, useRef } from "react";
// import { Link } from "@inertiajs/react";

// const Navbar = () => {
//     const [isOpen, setIsOpen] = useState(false);
//     const [userMenuOpen, setUserMenuOpen] = useState(false);
//     const [isScrolled, setIsScrolled] = useState(false);
//     const mobileMenuRef = useRef();

//     useEffect(() => {
//         const handleScroll = () => setIsScrolled(window.scrollY > 0);
//         window.addEventListener("scroll", handleScroll);
//         return () => window.removeEventListener("scroll", handleScroll);
//     }, []);

//     useEffect(() => {
//         if (!isOpen) setUserMenuOpen(false);
//     }, [isOpen]);

//     useEffect(() => {
//         const handleClickOutside = (event) => {
//             if (isOpen && mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
//                 setIsOpen(false);
//             }
//         };

//         document.addEventListener("mousedown", handleClickOutside);
//         return () => document.removeEventListener("mousedown", handleClickOutside);
//     }, [isOpen]);

//     return (
//         <nav className={`fixed w-full z-50 ${
//             isScrolled 
//                 ? "backdrop-blur-lg bg-blue-900/85 shadow-xl backdrop:blur-lg" 
//                 : "bg-blue-900"
//         } transition-all duration-300`}>

//             {/* Custom Animations */}
//             <style>{`
//                 @keyframes logoGlow {
//                     0% { transform: scale(1); opacity: 0.4; }
//                     50% { transform: scale(1.8); opacity: 0.1; }
//                     100% { transform: scale(1); opacity: 0.4; }
//                 }
//                 @keyframes shieldFloat {
//                     0%, 100% { transform: translateY(0) rotate(0deg); }
//                     30% { transform: translateY(-6px) rotate(5deg); }
//                     70% { transform: translateY(4px) rotate(-3deg); }
//                 }
//                 @keyframes textShine {
//                     from { background-position: 0% 50%; }
//                     to { background-position: 200% 50%; }
//                 }
//             `}</style>

//             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//                 <div className="flex justify-between h-20 items-center">
//                     {/* Logo Section */}
//                     <div className="flex-shrink-0 flex items-center space-x-3 group">
//                         <div className="relative">
//                             <div className="absolute -inset-2 bg-cyan-500/30 rounded-full blur-xl animate-[logoGlow_4s_ease-in-out_infinite]" />
//                             <div className="absolute inset-0 bg-cyan-500/20 rounded-full animate-[logoGlow_3s_ease-in-out_infinite]" />
//                             <div className="relative bg-cyan-500 p-2 rounded-full transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-[360deg]">
//                                 <svg 
//                                     className="w-8 h-8 text-white animate-[shieldFloat_6s_ease-in-out_infinite]" 
//                                     fill="none" 
//                                     stroke="currentColor" 
//                                     viewBox="0 0 24 24"
//                                 >
//                                     <path 
//                                         strokeLinecap="round" 
//                                         strokeLinejoin="round" 
//                                         strokeWidth={2} 
//                                         d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" 
//                                     />
//                                 </svg>
//                             </div>
//                         </div>
//                         <Link 
//                             href="/" 
//                             className="text-2xl font-bold text-transparent bg-clip-text bg-[linear-gradient(90deg,_#fff_20%,_#7dd3fc_50%,_#fff_80%)] bg-[length:200%_auto] hover:animate-[textShine_2s_linear_infinite] transition-all"
//                         >
//                             Anti<span className="font-extrabold">Phishing</span>
//                         </Link>
//                     </div>

//                     {/* Desktop Navigation */}
//                     <div className="hidden md:flex space-x-10 items-center">
//                         <Link href="/" className="relative text-gray-300 hover:text-cyan-400 group transition-colors duration-300">
//                             Home
//                             <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-cyan-400 group-hover:w-full transition-all duration-300 ease-out"></span>
//                         </Link>
//                         <a href="#about" className="relative text-gray-300 hover:text-cyan-400 group transition-colors duration-300">
//                             About
//                             <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-cyan-400 group-hover:w-full transition-all duration-300 ease-out"></span>
//                         </a>
//                         <a href="#services" className="relative text-gray-300 hover:text-cyan-400 group transition-colors duration-300">
//                             Services
//                             <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-cyan-400 group-hover:w-full transition-all duration-300 ease-out"></span>
//                         </a>
//                         <a href="#contact" className="relative text-gray-300 hover:text-cyan-400 group transition-colors duration-300">
//                             Contact
//                             <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-cyan-400 group-hover:w-full transition-all duration-300 ease-out"></span>
//                         </a>
//                     </div>

//                     {/* Desktop User Menu */}
//                     <div 
//                         className="hidden md:flex items-center relative"
//                         onMouseEnter={() => setUserMenuOpen(true)}
//                         onMouseLeave={() => setUserMenuOpen(false)}
//                     >
//                         <button className="relative transition-transform duration-300 hover:scale-105">
//                             <div className="relative w-10 h-10 rounded-full border-2 border-cyan-400/30 hover:border-cyan-400 transition-colors duration-300">
//                                 <svg 
//                                     className="w-full h-full p-1 text-gray-300" 
//                                     fill="none" 
//                                     stroke="currentColor" 
//                                     viewBox="0 0 24 24"
//                                 >
//                                     <path 
//                                         strokeLinecap="round" 
//                                         strokeLinejoin="round" 
//                                         strokeWidth={2} 
//                                         d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" 
//                                     />
//                                 </svg>
//                                 <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 rounded-full border-2 border-blue-900"></div>
//                             </div>
//                         </button>

//                         <div className={`absolute right-0 mt-28 w-48 bg-gray-700 backdrop-blur-lg rounded-lg shadow-2xl overflow-hidden transition-all duration-300 transform ${
//                             userMenuOpen ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-2 scale-95"
//                         }`}>
//                             <div className="p-2 space-y-1">
//                                 <UserMenuItem href={route('dashboard')} icon="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z">
//                                     Profile
//                                 </UserMenuItem>
//                                 <UserMenuItem to="/settings" icon="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z">
//                                     Settings
//                                 </UserMenuItem>
//                                 <UserMenuItem to="/logout" icon="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1">
//                                     Logout
//                                 </UserMenuItem>
//                             </div>
//                         </div>
//                     </div>

//                     {/* Mobile Menu Button */}
//                     <div className="flex md:hidden items-center">
//                         <button 
//                             onClick={() => setIsOpen(!isOpen)} 
//                             className="p-2 rounded-lg hover:bg-cyan-500/10 transition-colors flex items-center justify-center w-12 h-12"
//                         >
//                             <svg className="w-7 h-7 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                 {isOpen ? (
//                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//                                 ) : (
//                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
//                                 )}
//                             </svg>
//                         </button>
//                     </div>
//                 </div>
//             </div>

//             {/* Mobile Menu */}
//             <div 
//                 className={`md:hidden ${isScrolled ? 'bg-blue-900/85 backdrop:blur-lg' : 'bg-blue-900'} overflow-hidden transition-all duration-300 ${
//                     isOpen ? "max-h-screen" : "max-h-0"
//                 }`}
//                 ref={mobileMenuRef}
//             >
//                 <div className="px-4 pt-2 pb-4 space-y-2">
//                     <Link to="/" className="block px-4 py-3 text-gray-300 hover:bg-cyan-500/10 rounded-lg transition-colors">
//                         Home
//                     </Link>
//                     <a href="#about" className="block px-4 py-3 text-gray-300 hover:bg-cyan-500/10 rounded-lg transition-colors">
//                         About
//                     </a>
//                     <a href="#services" className="block px-4 py-3 text-gray-300 hover:bg-cyan-500/10 rounded-lg transition-colors">
//                         Services
//                     </a>
//                     <a href="#contact" className="block px-4 py-3 text-gray-300 hover:bg-cyan-500/10 rounded-lg transition-colors">
//                         Contact
//                     </a>

//                     <div className="pt-4">
//                         <div className="px-4 space-y-4">
//                             <button 
//                                 onClick={() => setUserMenuOpen(!userMenuOpen)} 
//                                 className="w-full text-left"
//                             >
//                                 <div className="flex items-center space-x-3 hover:bg-cyan-500/10 p-3 rounded-lg transition-colors">
//                                     <div className="relative w-10 h-10 rounded-full border-2 border-cyan-400/30">
//                                         <svg 
//                                             className="w-full h-full p-1 text-gray-300" 
//                                             fill="none" 
//                                             stroke="currentColor" 
//                                             viewBox="0 0 24 24"
//                                         >
//                                             <path 
//                                                 strokeLinecap="round" 
//                                                 strokeLinejoin="round" 
//                                                 strokeWidth={2} 
//                                                 d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" 
//                                             />
//                                         </svg>
//                                         <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 rounded-full border-2 border-blue-900"></div>
//                                     </div>
//                                     <div>
//                                         <p className="text-sm font-medium text-cyan-400">John Doe</p>
//                                         <p className="text-xs text-cyan-400/70">Verified Account</p>
//                                     </div>
//                                 </div>
//                             </button>

//                             <div className={`space-y-2 pl-4 ml-2 overflow-hidden transition-all duration-300 ${
//                                 userMenuOpen ? "max-h-96" : "max-h-0"
//                             }`}>
//                                 <UserMenuItem to="/profile" icon="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z">
//                                     Profile
//                                 </UserMenuItem>
//                                 <UserMenuItem to="/settings" icon="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z">
//                                     Settings
//                                 </UserMenuItem>
//                                 <UserMenuItem to="/logout" icon="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1">
//                                     Logout
//                                 </UserMenuItem>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </nav>
//     );
// };

// const UserMenuItem = ({ href, icon, children }) => (
//     <Link href={href} className="flex items-center px-4 py-3 text-gray-300 hover:bg-cyan-500/10 rounded-lg transition-colors">
//         <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={icon} />
//         </svg>
//         {children}
//     </Link>
// );

// export default Navbar;

import { useState, useEffect, useRef } from "react";
import { Link, usePage, router } from "@inertiajs/react";
import { motion } from "framer-motion";

const Navbar = ({ bgColor }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [userMenuOpen, setUserMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const mobileMenuRef = useRef();
    const { props } = usePage(); // Access Inertia page props

    // Extract user name from auth prop
    const userName = props.auth?.user?.name || "Guest"; // Fallback to "Guest" if not logged in

    // Logout handler
    const handleLogout = () => {
        router.post(route('logout'), {}, {
            onSuccess: () => {
                setIsOpen(false); // Close mobile menu
                setUserMenuOpen(false); // Close user menu
            },
        });
    };

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 0);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        if (!isOpen) setUserMenuOpen(false);
    }, [isOpen]);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (isOpen && mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [isOpen]);

    // Animation Variants
    const navVariants = {
        initial: { y: -50, opacity: 0 },
        animate: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
    };

    const linkVariants = {
        hover: { scale: 1.05, color: "#7dd3fc", transition: { duration: 0.3 } },
    };

    const menuVariants = {
        open: { opacity: 1, height: "auto", transition: { duration: 0.4, ease: "easeOut" } },
        closed: { opacity: 0, height: 0, transition: { duration: 0.4, ease: "easeIn" } },
    };

    return (
        <motion.nav
            className={`fixed w-full z-50 top-0 ${isScrolled
                ? "bg-gray-900/95 shadow-lg backdrop-blur-md"
                : "bg-gray-900/90 backdrop-blur-sm"
                } transition-all duration-300`}
            initial="initial"
            animate="animate"
            variants={navVariants}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    {/* Logo Section */}
                    <motion.div
                        className="flex-shrink-0 flex items-center space-x-2 group"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="relative">
                            <motion.div
                                className="absolute -inset-2 bg-cyan-400/30 rounded-full blur-lg"
                                animate={{ scale: [1, 1.1, 1] }}
                                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                            />
                            <div className="relative bg-cyan-400 p-1.5 rounded-full">
                                <svg
                                    className="w-6 h-6 text-white"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                                    />
                                </svg>
                            </div>
                        </div>
                        <Link
                            href="/"
                            className="text-xl font-bold text-white hover:text-cyan-300 transition-colors duration-300"
                        >
                            Anti<span className="font-extrabold">Phishing</span>
                        </Link>
                    </motion.div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex space-x-8 items-center">
                        {["Home", "About", "Services", "Contact"].map((item, index) => (
                            <motion.div key={index} whileHover="hover" variants={linkVariants}>
                                <Link
                                    href={item === "Home" ? "/" : `#${item.toLowerCase()}`}
                                    className="text-blue-100 hover:text-cyan-300 transition-colors duration-300 relative group"
                                >
                                    {item}
                                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-300 group-hover:w-full transition-all duration-300 ease-out" />
                                </Link>
                            </motion.div>
                        ))}
                    </div>

                    {/* Desktop User Menu */}
                    <div
                        className="hidden md:flex items-center relative"
                        onMouseEnter={() => setUserMenuOpen(true)}
                        onMouseLeave={() => setUserMenuOpen(false)}
                    >
                        <motion.button
                            className="relative w-10 h-10 rounded-full border-2 border-cyan-400/50 hover:border-cyan-300 transition-all duration-300"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <svg
                                className="w-full h-full p-1 text-blue-100"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                />
                            </svg>
                            <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 rounded-full border-2 border-blue-800" />
                        </motion.button>

                        <motion.div
                            className="absolute right-0 top-12 w-48 bg-gray-900/95 rounded-lg shadow-xl overflow-hidden border border-cyan-400/20 backdrop-blur-md"
                            initial={{ opacity: 0, y: 10, scale: 0.95 }}
                            animate={{
                                opacity: userMenuOpen ? 1 : 0,
                                y: userMenuOpen ? 0 : 10,
                                scale: userMenuOpen ? 1 : 0.95,
                            }}
                            transition={{ duration: 0.3 }}
                        >
                            <div className="p-2 space-y-1">
                                <UserMenuItem href={route("dashboard")} icon="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z">
                                    Profile
                                </UserMenuItem>
                                <UserMenuItem href="/settings" icon="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z">
                                    Settings
                                </UserMenuItem>
                                <button
                                    onClick={handleLogout}
                                    className="w-full text-left flex items-center px-4 py-2 text-blue-100 hover:bg-cyan-400/20 hover:text-cyan-300 rounded-lg transition-colors"
                                >
                                    <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                                    </svg>
                                    Log Out
                                </button>
                            </div>
                        </motion.div>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="flex md:hidden items-center">
                        <motion.button
                            onClick={() => setIsOpen(!isOpen)}
                            className="p-2 rounded-lg hover:bg-cyan-400/20 transition-colors"
                            whileTap={{ scale: 0.9 }}
                        >
                            <svg className="w-6 h-6 text-cyan-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                {isOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                                )}
                            </svg>
                        </motion.button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <motion.div
                className={`md:hidden bg-gray-900/95 shadow-lg overflow-hidden`}
                variants={menuVariants}
                animate={isOpen ? "open" : "closed"}
                ref={mobileMenuRef}
            >
                <div className="px-4 pt-2 pb-4 space-y-2">
                    {["Home", "About", "Services", "Contact"].map((item, index) => (
                        <Link
                            key={index}
                            href={item === "Home" ? "/" : `#${item.toLowerCase()}`}
                            className="block px-4 py-2 text-blue-100 hover:bg-cyan-400/20 hover:text-cyan-300 rounded-lg transition-colors"
                            onClick={() => setIsOpen(false)}
                        >
                            {item}
                        </Link>
                    ))}

                    <div className="pt-4 border-t border-blue-700">
                        <button
                            onClick={() => setUserMenuOpen(!userMenuOpen)}
                            className="w-full text-left flex items-center space-x-3 p-3 hover:bg-cyan-400/20 rounded-lg transition-colors"
                        >
                            <div className="relative w-8 h-8 rounded-full border-2 border-cyan-400/50">
                                <svg
                                    className="w-full h-full p-1 text-blue-100"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                    />
                                </svg>
                                <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-400 rounded-full border-2 border-blue-800" />
                            </div>
                            <div>
                                <p className="text-sm font-medium text-white">{userName}</p>
                                <p className="text-xs text-blue-200">
                                    {userName === "Guest" ? "Not Logged In" : "Verified Account"}
                                </p>
                            </div>
                        </button>

                        <motion.div
                            className="space-y-2 pl-4 ml-2 overflow-hidden"
                            variants={menuVariants}
                            animate={userMenuOpen ? "open" : "closed"}
                        >
                            <UserMenuItem href="/profile" icon="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z">
                                Profile
                            </UserMenuItem>
                            <UserMenuItem href="/settings" icon="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z">
                                Settings
                            </UserMenuItem>
                            <button
                                onClick={handleLogout}
                                className="w-full text-left flex items-center px-4 py-2 text-blue-100 hover:bg-cyan-400/20 hover:text-cyan-300 rounded-lg transition-colors"
                            >
                                <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                                </svg>
                                Logout
                            </button>
                        </motion.div>
                    </div>
                </div>
            </motion.div>
        </motion.nav>
    );
};

const UserMenuItem = ({ href, icon, children }) => (
    <Link
        href={href}
        className="flex items-center px-4 py-2 text-blue-100 hover:bg-cyan-400/20 hover:text-cyan-300 rounded-lg transition-colors"
    >
        <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={icon} />
        </svg>
        {children}
    </Link>
);

export default Navbar;