import Navbar from '@/Components/Navbar';
import { Head, Link } from '@inertiajs/react';
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function SocialSimulation() {
    const [step, setStep] = useState(1);
    const [score, setScore] = useState(0);
    const [result, setResult] = useState(null);
    const totalSteps = 3;

    const simulationData = [
        {
            message: "Hey, it’s Ahmed. I’m stuck and need $50. Send it to this PayPal link.",
            isPhishing: true,
            explanation: "Unsolicited money requests, even from 'friends,' are often scams."
        },
        {
            message: "This is your boss. Send me the client list ASAP via email.",
            isPhishing: true,
            explanation: "Sudden urgent requests from authority figures without verification are suspicious."
        },
        {
            message: "Hi, it’s Sara from HR. Your meeting is rescheduled to 2 PM.",
            isPhishing: false,
            explanation: "No sensitive info requested, and it’s a normal work-related message."
        },
    ];

    const handleChoice = (userChoice) => {
        const currentSimulation = simulationData[step - 1];
        const isCorrect = (userChoice === 'phishing') === currentSimulation.isPhishing;
        setResult({
            isCorrect,
            message: isCorrect ? 'Correct! Well spotted.' : 'Incorrect. Check the explanation.',
        });
        setScore((prev) => prev + (isCorrect ? 20 : 0));
    };

    const nextStep = () => {
        if (step < totalSteps) {
            setStep(step + 1);
            setResult(null);
        }
    };

    const containerVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
    };

    const resultVariants = {
        hidden: { opacity: 0, scale: 0.9 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
    };

    return (
        <div className="min-h-screen bg-gray-900 text-white">
            <Head title="Social Engineering Simulation - AntiPhishing" />
            <Navbar />

            <div className="pt-20 pb-16 min-h-screen bg-gradient-to-br from-gray-900 via-cyan-950 to-blue-900 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="w-96 h-96 bg-cyan-500/10 rounded-full absolute top-0 left-0 blur-3xl animate-pulse"></div>
                    <div className="w-80 h-80 bg-blue-500/10 rounded-full absolute bottom-0 right-0 blur-3xl animate-pulse delay-1000"></div>
                </div>

                <motion.div
                    className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 relative z-10"
                    initial="hidden"
                    animate="visible"
                    variants={containerVariants}
                >
                    <div className="bg-gray-800/90 backdrop-blur-md shadow-2xl rounded-2xl border border-cyan-500/30 p-8">
                        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-cyan-600 to-blue-900" />

                        <div className="flex items-center space-x-6 mb-8">
                            <svg className="w-14 h-14 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                            </svg>
                            <div>
                                <h1 className="text-4xl font-extrabold text-white tracking-tight">Social Engineering Simulation</h1>
                                <p className="mt-2 text-lg text-cyan-200 font-mono">Step {step} of {totalSteps} | Score: {score}</p>
                            </div>
                        </div>

                        <p className="mb-6 text-lg text-gray-300">Analyze the message below. Is it safe or a phishing attempt?</p>

                        <div className="p-6 bg-gray-700/50 rounded-xl border border-cyan-500/20 mb-8">
                            <p className="mt-4 text-gray-200 whitespace-pre-line">{simulationData[step - 1].message}</p>
                        </div>

                        {!result && (
                            <div className="flex justify-center space-x-6 mb-8">
                                <button onClick={() => handleChoice('safe')} className="px-6 py-3 bg-gradient-to-r from-green-600 to-green-500 text-white font-semibold rounded-xl shadow-md hover:from-green-700 hover:to-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-all duration-300">Safe</button>
                                <button onClick={() => handleChoice('phishing')} className="px-6 py-3 bg-gradient-to-r from-red-600 to-red-500 text-white font-semibold rounded-xl shadow-md hover:from-red-700 hover:to-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-all duration-300">Phishing</button>
                            </div>
                        )}

                        {result && (
                            <motion.div className={`p-6 rounded-xl border ${result.isCorrect ? 'bg-green-900/30 border-green-500/50' : 'bg-red-900/30 border-red-500/50'}`} initial="hidden" animate="visible" variants={resultVariants}>
                                <div className="flex items-center space-x-4">
                                    <svg className={`w-8 h-8 ${result.isCorrect ? 'text-green-400' : 'text-red-400'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={result.isCorrect ? 'M5 13l4 4L19 7' : 'M6 18L18 6M6 6l12 12'} />
                                    </svg>
                                    <div>
                                        <p className={`text-lg font-semibold ${result.isCorrect ? 'text-green-300' : 'text-red-300'}`}>{result.message}</p>
                                        <p className="mt-2 text-gray-300">{simulationData[step - 1].explanation}</p>
                                    </div>
                                </div>
                            </motion.div>
                        )}

                        {result && (
                            <div className="mt-8 flex justify-center space-x-4">
                                {step < totalSteps ? (
                                    <button onClick={nextStep} className="px-6 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-semibold rounded-xl shadow-md hover:from-cyan-700 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 transition-all duration-300">Next Simulation</button>
                                ) : (
                                    <Link href="/simulation/results" className="px-6 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-semibold rounded-xl shadow-md hover:from-cyan-700 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 transition-all duration-300">View Results</Link>
                                )}
                            </div>
                        )}
                    </div>
                </motion.div>
            </div>
        </div>
    );
}