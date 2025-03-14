import Navbar from '@/Components/Navbar';
import { Head } from '@inertiajs/react';
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function UrlCheck() {
    const [url, setUrl] = useState('');
    const [result, setResult] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleUrlCheck = () => {
        if (!url.trim()) {
            setResult({ status: 'error', message: 'Please enter a valid URL to scan.' });
            return;
        }

        setLoading(true);
        setResult(null);

        // Simulated async check (replace with actual API call in production)
        setTimeout(() => {
            const isSafe = !url.toLowerCase().includes('phishing');
            setResult({
                status: isSafe ? 'safe' : 'unsafe',
                message: isSafe
                    ? 'This URL is secure and safe to use.'
                    : 'Alert: Potential phishing threat detected!',
            });
            setLoading(false);
        }, 1500);
    };

    // Animation Variants
    const cardVariants = {
        hidden: { opacity: 0, y: 50, scale: 0.95 },
        visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.8, ease: 'easeOut' } },
    };

    const resultVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
    };

    return (
        <div className="min-h-screen bg-gray-900 text-white">
            <Head title="URL Scanner - AntiPhishing Command" />

            {/* Navbar */}
            <Navbar />

            {/* Main Content */}
            <div className="pt-20 pb-16 min-h-screen bg-gradient-to-br from-gray-900 via-cyan-950 to-blue-900 flex items-center justify-center relative overflow-hidden">
                {/* Background Effects */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="w-96 h-96 bg-cyan-500/10 rounded-full absolute top-0 left-0 blur-3xl animate-pulse"></div>
                    <div className="w-80 h-80 bg-blue-500/10 rounded-full absolute bottom-0 right-0 blur-3xl animate-pulse delay-1000"></div>
                </div>

                <motion.div
                    className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 relative z-10"
                    initial="hidden"
                    animate="visible"
                    variants={cardVariants}
                >
                    <div className="bg-gray-800/90 backdrop-blur-md shadow-2xl rounded-2xl border border-cyan-500/30 p-8">
                        {/* Top Accent Bar */}
                        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-cyan-600 to-blue-900" />

                        {/* Header */}
                        <div className="flex items-center space-x-6 mb-8">
                            <svg
                                className="w-14 h-14 text-cyan-400"
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
                            <h1 className="text-4xl font-extrabold text-white tracking-tight">
                                URL Scanner
                            </h1>
                        </div>

                        {/* Description */}
                        <p className="mt-4 text-lg text-cyan-200 leading-relaxed max-w-prose font-mono">
                            Deploy our state-of-the-art scanner to analyze URLs and neutralize phishing threats in real-time. Enter a link below to secure your digital perimeter.
                        </p>

                        {/* Input and Button */}
                        <div className="mt-10 space-y-6">
                            <input
                                type="text"
                                placeholder="https://example.com"
                                value={url}
                                onChange={(e) => setUrl(e.target.value)}
                                className="w-full p-5 text-white bg-gray-700/50 border border-cyan-500/50 rounded-xl shadow-inner focus:outline-none focus:ring-2 focus:ring-cyan-600 focus:border-transparent transition-all duration-300 placeholder-cyan-400/70 disabled:bg-gray-600/50 disabled:cursor-not-allowed"
                                disabled={loading}
                            />
                            <button
                                onClick={handleUrlCheck}
                                className="w-full px-6 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 text-white text-lg font-semibold rounded-xl shadow-lg hover:from-cyan-700 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 transition-all duration-300 disabled:bg-gray-600 disabled:cursor-not-allowed relative overflow-hidden"
                                disabled={loading}
                            >
                                <span className="relative z-10">
                                    {loading ? 'Scanning...' : 'Scan URL'}
                                </span>
                                {loading && (
                                    <div className="absolute inset-0 bg-cyan-500/20 animate-[scan_1.5s_infinite]" />
                                )}
                                <style>{`
                                    @keyframes scan {
                                        0% { transform: translateX(-100%); }
                                        100% { transform: translateX(100%); }
                                    }
                                `}</style>
                            </button>
                        </div>

                        {/* Result Display */}
                        {result && (
                            <motion.div
                                className={`mt-8 p-6 rounded-xl border shadow-md ${
                                    result.status === 'safe'
                                        ? 'bg-green-900/30 border-green-500/50'
                                        : result.status === 'unsafe'
                                        ? 'bg-red-900/30 border-red-500/50'
                                        : 'bg-yellow-900/30 border-yellow-500/50'
                                }`}
                                initial="hidden"
                                animate="visible"
                                variants={resultVariants}
                            >
                                <div className="flex items-center space-x-4">
                                    <svg
                                        className={`w-8 h-8 ${
                                            result.status === 'safe'
                                                ? 'text-green-400'
                                                : result.status === 'unsafe'
                                                ? 'text-red-400'
                                                : 'text-yellow-400'
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
                                        className={`text-lg font-semibold ${
                                            result.status === 'safe'
                                                ? 'text-green-300'
                                                : result.status === 'unsafe'
                                                ? 'text-red-300'
                                                : 'text-yellow-300'
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