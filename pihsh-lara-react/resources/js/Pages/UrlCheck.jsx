import Navbar from '@/Components/Navbar';
import { Head } from '@inertiajs/react';
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function UrlCheck() {
    const [url, setUrl] = useState('');
    const [result, setResult] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleUrlCheck = () => {
        if (!url) {
            setResult({ status: 'error', message: 'Please enter a URL to check.' });
            return;
        }

        setLoading(true);
        setResult(null);

        setTimeout(() => {
            const isSafe = !url.toLowerCase().includes('phishing');
            setResult({
                status: isSafe ? 'safe' : 'unsafe',
                message: isSafe
                    ? 'This URL appears to be safe.'
                    : 'Warning: This URL may be a phishing threat!',
            });
            setLoading(false);
        }, 1000);
    };

    // Animation Variants
    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
    };

    return (
        <div className="min-h-screen bg-gray-100">
            {/* Head component for setting the page title */}
            <Head title="URL Safety Check - AntiPhishing" />

            {/* Navbar */}
            <Navbar />

            {/* Main content */}
            <div className="pt-16 min-h-screen bg-gradient-to-br from-gray-100 via-cyan-50 to-blue-200 flex items-center justify-center">
                <motion.div
                    className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8"
                    initial="hidden"
                    animate="visible"
                    variants={cardVariants}
                >
                    <div className="bg-white/90 backdrop-blur-md shadow-xl rounded-2xl border border-cyan-300/50 p-8 relative overflow-hidden">
                        {/* Top accent bar */}
                        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-cyan-600 to-blue-900" />

                        {/* Header with logo and title */}
                        <div className="flex items-center space-x-6 mb-6">
                            <svg
                                className="w-12 h-12 text-cyan-600"
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
                            <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">
                                URL Safety Checker
                            </h1>
                        </div>

                        {/* Description */}
                        <p className="mt-4 text-base text-gray-600 leading-relaxed max-w-prose">
                            Safeguard your digital presence with our advanced URL analysis tool. Enter any URL below to detect potential phishing threats and ensure your safety online.
                        </p>

                        {/* URL Input and Button Section */}
                        <div className="mt-8 space-y-6">
                            <input
                                type="text"
                                placeholder="https://example.com"
                                value={url}
                                onChange={(e) => setUrl(e.target.value)}
                                className="w-full p-5 text-gray-800 bg-gray-50 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-cyan-600 focus:border-transparent transition-all duration-300 placeholder-gray-400 disabled:bg-gray-200"
                                disabled={loading}
                            />
                            <button
                                onClick={handleUrlCheck}
                                className="w-full px-6 py-4 bg-cyan-600 text-white text-lg font-semibold rounded-xl shadow-md hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-600 focus:ring-offset-2 transition-all duration-300 disabled:bg-cyan-400 disabled:cursor-not-allowed"
                                disabled={loading}
                            >
                                {loading ? 'Analyzing...' : 'Analyze URL'}
                            </button>
                        </div>

                        {/* Result Display */}
                        {result && (
                            <motion.div
                                className={`mt-8 p-6 rounded-xl border ${
                                    result.status === 'safe'
                                        ? 'bg-green-50 border-green-200'
                                        : result.status === 'unsafe'
                                        ? 'bg-red-50 border-red-200'
                                        : 'bg-yellow-50 border-yellow-200'
                                }`}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                <div className="flex items-center space-x-3">
                                    <svg
                                        className={`w-6 h-6 ${
                                            result.status === 'safe'
                                                ? 'text-green-600'
                                                : result.status === 'unsafe'
                                                ? 'text-red-600'
                                                : 'text-yellow-600'
                                        }`}
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d={
                                                result.status === 'safe'
                                                    ? 'M5 13l4 4L19 7'
                                                    : result.status === 'unsafe'
                                                    ? 'M6 18L18 6M6 6l12 12'
                                                    : 'M12 9v3m0 3h.01'
                                            }
                                        />
                                    </svg>
                                    <p
                                        className={`text-base font-medium ${
                                            result.status === 'safe'
                                                ? 'text-green-700'
                                                : result.status === 'unsafe'
                                                ? 'text-red-700'
                                                : 'text-yellow-700'
                                        }`}
                                    >
                                        {result.message}
                                    </p>
                                </div>
                            </motion.div>
                        )}
                    </div>
                </motion.div>
            </div>
        </div>
    );
}