import { motion } from "framer-motion";
import { Link } from "@inertiajs/react";

function Services() {
    const servicesData = [
        {
            id: 1,
            title: "URL Scanning",
            description: "Analyze URLs in real-time to neutralize phishing and malicious threats with precision.",
            image: "/assets/url.jpg",
            link: "/url-check",
        },
        {
            id: 2,
            title: "Phishing Email Detection",
            description: "Advanced algorithms detect phishing emails, safeguarding users from deceptive scams.",
            image: "/assets/email.jpg",
            link: "/url-check",
        },
        {
            id: 3,
            title: "Malware Detection",
            description: "Identify and eliminate malware threats embedded in websites or files instantly.",
            image: "/assets/malware.jpg",
            link: "#",
        },
        {
            id: 4,
            title: "Real-Time Alerts",
            description: "Instant notifications of phishing attempts, empowering rapid threat response.",
            image: "/assets/alert.jpg",
            link: "#",
        },
        {
            id: 5,
            title: "Phishing Simulation",
            description: "Simulate real-world phishing attacks to train and fortify your team’s defenses.",
            image: "/assets/simulation.jpg",
            link: "#",
        },
        {
            id: 6,
            title: "Training Content",
            description: "Cutting-edge resources to educate and empower users against phishing threats.",
            image: "/assets/training.jpg",
            link: "training",
        },
    ];

    const cardVariants = {
        offscreen: { y: 80, opacity: 0, rotateX: 10 },
        onscreen: { 
            y: 0, 
            opacity: 1,
            rotateX: 0,
            transition: { type: "spring", stiffness: 100, damping: 15, duration: 0.9 }
        }
    };

    return (
        <section id="services" className="relative py-24 bg-gradient-to-b from-gray-50 via-cyan-50 to-gray-50 overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-20 left-20 w-64 h-64 bg-cyan-300/10 rounded-full blur-2xl animate-[orbit_15s_infinite_linear]"></div>
                <div className="absolute bottom-20 right-20 w-80 h-80 bg-blue-300/10 rounded-full blur-2xl animate-[orbit_20s_infinite_linear_reverse]"></div>
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4gPGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4gPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTAgMGgyMDB2MjAwSDB6IiBvcGFjaXR5PSIwLjA1Ii8+IDxwYXRoIGQ9Ik0xMDAgMTAwIG0tNzUsMCBhNzUsNzUgMCAxLDAgMTUwLDAgYTc1LDc1IDAgMSwwIC0xNTAsMCIgc3Ryb2tlPSIjMjJkM2U2IiBzdHJva2Utd2lkdGg9IjAuNSIgc3Ryb2keLWRhc2hhcnJheT0iMSwxIiBvcGFjaXR5PSIwLjEiLz4gPC9nPiA8L3N2Zz4=')] opacity-5"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.5 }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
                        <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
                            Anti-Phishing Arsenal
                        </span>
                    </h2>
                    <p className="mt-2 text-gray-600 text-lg">Advanced Tools for a Secure Future</p>
                    <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full mx-auto mt-4 shadow-md shadow-cyan-500/20"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {servicesData.map((service, index) => (
                        <motion.div
                            key={service.id}
                            initial="offscreen"
                            whileInView="onscreen"
                            viewport={{ once: true, amount: 0.3 }}
                            variants={cardVariants}
                            whileHover={{ y: -10, rotate: 1, transition: { duration: 0.3 } }}
                            className="group relative"
                        >
                            {/* Glowing Edge */}
                            <div className="absolute -inset-2 bg-gradient-to-r from-cyan-400/40 via-blue-500/40 to-cyan-400/40 rounded-3xl blur-lg opacity-0 group-hover:opacity-60 transition-all duration-500"></div>
                            
                            <div className="relative h-full bg-white/95 backdrop-blur-sm rounded-3xl shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden border border-cyan-300/30">
                                <div className="overflow-hidden relative">
                                    <img
                                        className="w-full h-60 object-cover transform transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                                        src={service.image}
                                        alt={service.title}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-gray-800/20 via-transparent to-transparent"></div>
                                </div>
                                
                                <div className="p-6">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-cyan-600 transition-colors duration-300 drop-shadow-[0_1px_3px_rgba(34,211,238,0.3)]">
                                        {service.title}
                                    </h3>
                                    <p className="text-gray-700 mb-5 leading-relaxed text-sm font-light">
                                        {service.description}
                                    </p>
                                    <Link
                                        href={service.link}
                                        className="inline-flex items-center gap-2 text-cyan-600 font-medium hover:text-cyan-800 transition-colors duration-300 group/link"
                                    >
                                        <span>Engage Now</span>
                                        <svg
                                            className="w-5 h-5 transition-transform duration-300 group-hover/link:translate-x-2"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Custom Animations */}
            <style>{`
                @keyframes orbit {
                    0% { transform: translate(0, 0) rotate(0deg); }
                    100% { transform: translate(15px, 15px) rotate(360deg); }
                }
            `}</style>
        </section>
    );
}

export default Services;