// import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
// import { Head } from '@inertiajs/react';

// export default function Dashboard() {
//     return (
//         <AuthenticatedLayout>
//             <Head title="Dashboard" />

//             {/* Custom Animations - حطيت fadeIn بس */}
//             <style>{`
//                 @keyframes fadeIn {
//                     0% { opacity: 0; transform: translateY(20px); }
//                     100% { opacity: 1; transform: translateY(0); }
//                 }
//             `}</style>

//             <div className="py-12 bg-gradient-to-br from-gray-50 to-blue-50 min-h-screen">
//                 <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
//                     <div className="overflow-hidden bg-white/90 backdrop-blur-lg shadow-xl sm:rounded-xl border border-cyan-200/50 animate-[fadeIn_0.8s_ease-out]">
//                         <div className="p-8 text-gray-900">
//                             <div className="flex items-center space-x-4">
//                                 <div className="relative">
//                                     <svg 
//                                         className="w-12 h-12 text-cyan-500" 
//                                         fill="none" 
//                                         stroke="currentColor" 
//                                         viewBox="0 0 24 24"
//                                     >
//                                         <path 
//                                             strokeLinecap="round" 
//                                             strokeLinejoin="round" 
//                                             strokeWidth={2} 
//                                             d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" 
//                                         />
//                                     </svg>
//                                 </div>
//                                 <div>
//                                     <h3 className="text-2xl font-semibold text-gray-800">
//                                         Welcome Back!
//                                     </h3>
//                                     <p className="mt-1 text-gray-600">
//                                         You're logged in successfully. Enjoy your secure experience!
//                                     </p>
//                                 </div>
//                             </div>

//                             {/* Dashboard Stats */}
//                             <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
//                                 <div className="p-4 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-lg transition-all duration-300 hover:scale-105">
//                                     <p className="text-sm text-cyan-600">Status</p>
//                                     <p className="text-lg font-medium text-gray-800">Active</p>
//                                 </div>
//                                 <div className="p-4 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-lg transition-all duration-300 hover:scale-105">
//                                     <p className="text-sm text-cyan-600">Last Login</p>
//                                     <p className="text-lg font-medium text-gray-800">
//                                         {new Date().toLocaleDateString()}
//                                     </p>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </AuthenticatedLayout>
//     );
// }


import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, usePage } from '@inertiajs/react';

export default function Profile() {
    const { auth } = usePage().props; // Fetch user data from props
    const user = auth.user;

    // Function to handle profile picture click
    const handleProfilePictureClick = () => {
        alert("Profile picture upload is a feature coming soon!");
    };

    return (
        <AuthenticatedLayout>
            <Head title="Profile" />

            {/* Custom Animations - Keeping fadeIn for subtle entry */}
            <style>{`
                @keyframes fadeIn {
                    0% { opacity: 0; transform: translateY(20px); }
                    100% { opacity: 1; transform: translateY(0); }
                }
            `}</style>

            {/* Main container with a professional gradient background */}
            <div className="py-12 bg-gradient-to-br from-gray-100 to-blue-100 min-h-screen">
                <div className="mx-auto max-w-4xl sm:px-6 lg:px-8">
                    <div className="bg-white shadow-lg rounded-lg border border-gray-200 animate-[fadeIn_0.8s_ease-out]">
                        <div className="p-6 md:p-8">
                            {/* Header section with logo and welcome message */}
                            <div className="flex items-center space-x-4 border-b border-gray-200 pb-4">
                                <div className="relative">
                                    <svg 
                                        className="w-10 h-10 text-cyan-600" 
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
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900">
                                        Anti-Phishing Profile
                                    </h3>
                                    <p className="mt-1 text-sm text-gray-600">
                                        Hello, {user.name}. Your security details are below.
                                    </p>
                                </div>
                            </div>

                            {/* Profile Picture Placeholder */}
                            <div className="mt-6 flex justify-center">
                                <div 
                                    className="w-20 h-20 rounded-full bg-gray-100 border-2 border-cyan-500/40 flex items-center justify-center cursor-pointer hover:bg-gray-200 transition-colors duration-200"
                                    onClick={handleProfilePictureClick}
                                    title="Click to upload a profile picture (coming soon)"
                                >
                                    <svg 
                                        className="w-10 h-10 text-gray-400" 
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
                                </div>
                            </div>

                            {/* User Details Section */}
                            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
                                {/* Full Name Card */}
                                <div className="p-4 bg-gray-50 rounded-md border border-gray-200">
                                    <p className="text-xs font-medium text-cyan-700 uppercase tracking-wide">Full Name</p>
                                    <p className="mt-1 text-base font-semibold text-gray-900">{user.name}</p>
                                </div>

                                {/* Email Card */}
                                <div className="p-4 bg-gray-50 rounded-md border border-gray-200">
                                    <p className="text-xs font-medium text-cyan-700 uppercase tracking-wide">Email</p>
                                    <p className="mt-1 text-base font-semibold text-gray-900">{user.email}</p>
                                </div>

                                {/* Joined Date Card - Placeholder */}
                                <div className="p-4 bg-gray-50 rounded-md border border-gray-200">
                                    <p className="text-xs font-medium text-cyan-700 uppercase tracking-wide">Joined</p>
                                    <p className="mt-1 text-base font-semibold text-gray-900">
                                        {new Date().toLocaleDateString()} {/* Replace with actual date from backend */}
                                    </p>
                                </div>

                                {/* Account Status Card */}
                                <div className="p-4 bg-gray-50 rounded-md border border-gray-200">
                                    <p className="text-xs font-medium text-cyan-700 uppercase tracking-wide">Account Status</p>
                                    <p className="mt-1 text-base font-semibold text-gray-900">Verified</p>
                                </div>
                            </div>

                            {/* Edit Profile Button */}
                            <div className="mt-8 flex justify-end">
                                <a
                                    href={route('profile.edit')}
                                    className="inline-block px-6 py-2 bg-cyan-600 text-white text-sm font-medium rounded-md hover:bg-cyan-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2"
                                >
                                    Edit Profile
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}