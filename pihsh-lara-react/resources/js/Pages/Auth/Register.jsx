import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';
import Navbar from '@/Components/Navbar';
import { useState } from 'react';

export default function Register() {
    const [agreedToTerms, setAgreedToTerms] = useState(false); // State لتتبع موافقة المستخدم

    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    const submit = (e) => {
        e.preventDefault();
        if (!agreedToTerms) {
            alert("Please agree to the Terms of Use before registering.");
            return;
        }
        post(route('register'), {
            onFinish: () => reset('password', 'password_confirmation'),
        });
    };

    return (
        <>
            <Head title="Register" />
            <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 flex flex-col pt-10">
                <Navbar />
                <div className="flex-grow flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8">
                    <div className="w-full max-w-md bg-white shadow-2xl rounded-xl p-8 transform transition-all duration-300 hover:shadow-3xl">
                        {/* Logo Section */}
                        <div className="flex justify-center mb-8">
                            <div className="relative flex items-center space-x-2 group">
                                <div className="relative">
                                    <div className="absolute -inset-2 bg-cyan-400/20 rounded-full blur-lg animate-[pulse_3s_infinite]" />
                                    <div className="relative bg-cyan-500 p-2 rounded-full transition-transform duration-500 group-hover:scale-110">
                                        <svg
                                            className="w-8 h-8 text-white animate-[bounce_2s_infinite]"
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
                                <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-900">
                                    Anti<span className="font-extrabold">Phishing</span>
                                </h1>
                            </div>
                        </div>

                        {/* Form */}
                        <form onSubmit={submit} className="space-y-6">
                            {/* Name Field */}
                            <div>
                                <InputLabel
                                    htmlFor="name"
                                    value="Name"
                                    className="text-gray-800 font-medium"
                                />
                                <TextInput
                                    id="name"
                                    name="name"
                                    value={data.name}
                                    className="mt-2 block w-full rounded-lg border-gray-200 bg-gray-50 text-gray-900 focus:ring-2 focus:ring-cyan-300 focus:border-cyan-500 transition-all duration-300 shadow-sm"
                                    autoComplete="name"
                                    isFocused={true}
                                    onChange={(e) => setData('name', e.target.value)}
                                    required
                                />
                                <InputError message={errors.name} className="mt-2 text-red-600 text-xs" />
                            </div>

                            {/* Email Field */}
                            <div>
                                <InputLabel
                                    htmlFor="email"
                                    value="Email"
                                    className="text-gray-800 font-medium"
                                />
                                <TextInput
                                    id="email"
                                    type="email"
                                    name="email"
                                    value={data.email}
                                    className="mt-2 block w-full rounded-lg border-gray-200 bg-gray-50 text-gray-900 focus:ring-2 focus:ring-cyan-300 focus:border-cyan-500 transition-all duration-300 shadow-sm"
                                    autoComplete="username"
                                    onChange={(e) => setData('email', e.target.value)}
                                    required
                                />
                                <InputError message={errors.email} className="mt-2 text-red-600 text-xs" />
                            </div>

                            {/* Password Field */}
                            <div>
                                <InputLabel
                                    htmlFor="password"
                                    value="Password"
                                    className="text-gray-800 font-medium"
                                />
                                <TextInput
                                    id="password"
                                    type="password"
                                    name="password"
                                    value={data.password}
                                    className="mt-2 block w-full rounded-lg border-gray-200 bg-gray-50 text-gray-900 focus:ring-2 focus:ring-cyan-300 focus:border-cyan-500 transition-all duration-300 shadow-sm"
                                    autoComplete="new-password"
                                    onChange={(e) => setData('password', e.target.value)}
                                    required
                                />
                                <InputError message={errors.password} className="mt-2 text-red-600 text-xs" />
                            </div>

                            {/* Confirm Password Field */}
                            <div>
                                <InputLabel
                                    htmlFor="password_confirmation"
                                    value="Confirm Password"
                                    className="text-gray-800 font-medium"
                                />
                                <TextInput
                                    id="password_confirmation"
                                    type="password"
                                    name="password_confirmation"
                                    value={data.password_confirmation}
                                    className="mt-2 block w-full rounded-lg border-gray-200 bg-gray-50 text-gray-900 focus:ring-2 focus:ring-cyan-300 focus:border-cyan-500 transition-all duration-300 shadow-sm"
                                    autoComplete="new-password"
                                    onChange={(e) => setData('password_confirmation', e.target.value)}
                                    required
                                />
                                <InputError message={errors.password_confirmation} className="mt-2 text-red-600 text-xs" />
                            </div>

                            {/* Terms of Use Checkbox */}
                            <div className="flex items-start space-x-3">
                                <input
                                    type="checkbox"
                                    id="terms"
                                    checked={agreedToTerms}
                                    onChange={(e) => setAgreedToTerms(e.target.checked)}
                                    className="mt-1 h-5 w-5 text-cyan-600 border-gray-300 rounded focus:ring-cyan-500 transition-all duration-200"
                                />
                                <label htmlFor="terms" className="text-sm text-gray-700">
                                    I agree to the{" "}
                                    <Link
                                        href="/terms-of-use"
                                        className="text-cyan-600 hover:text-cyan-800 underline font-medium transition-colors duration-200"
                                    >
                                        Terms of Use
                                    </Link>
                                    . By registering, I confirm that I have read and understood the terms governing the use of AntiPhishing services.
                                </label>
                            </div>

                            {/* Actions */}
                            <div className="flex items-center justify-between">
                                <Link
                                    href={route('login')}
                                    className="text-sm text-cyan-600 hover:text-cyan-800 underline transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 rounded-md"
                                >
                                    Already registered?
                                </Link>
                                <PrimaryButton
                                    className={`ml-4 px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg shadow-md hover:from-cyan-600 hover:to-blue-700 focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 transition-all duration-300 ${
                                        processing || !agreedToTerms ? 'opacity-60 cursor-not-allowed' : ''
                                    }`}
                                    disabled={processing || !agreedToTerms} // Disable إذا مفيش موافقة
                                >
                                    Register
                                </PrimaryButton>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}