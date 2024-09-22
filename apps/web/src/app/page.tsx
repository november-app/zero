import Link from "next/link";

export default function Home() {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <header className="bg-white shadow-lg">
                <div className="container mx-auto px-4 py-6 flex justify-between items-center">
                    <h1 className="text-2xl font-bold text-indigo-600">CollegeAppOrg</h1>
                    <nav>
                        <Link className="text-gray-600 hover:text-indigo-600 mr-6" href="/login">
                            Login
                        </Link>
                        <Link className="text-indigo-600 hover:text-indigo-800 font-semibold" href="/signup">
                            Sign Up
                        </Link>
                    </nav>
                </div>
            </header>

            {/* Main Content */}
            <main className="flex flex-col items-center text-center py-16 px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
                    Organize Your College Applications
                </h2>
                <p className="mt-4 text-lg text-gray-600 max-w-xl">
                    A minimalist, easy-to-use tool to manage your college applications, essays, and deadlines in one
                    place. Stay on track and stress-free.
                </p>

                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                    <Link
                        className="px-6 py-3 bg-indigo-600 text-white rounded-lg font-medium text-lg hover:bg-indigo-700 transition"
                        href="/signup">
                        Get Started
                    </Link>
                    <Link
                        className="px-6 py-3 bg-transparent border border-indigo-600 text-indigo-600 rounded-lg font-medium text-lg hover:bg-indigo-50 transition"
                        href="/demo">
                        Try a Demo
                    </Link>
                </div>
            </main>

            {/* Features Section */}
            <section className="bg-white py-12">
                <div className="container mx-auto text-center">
                    <h3 className="text-2xl font-bold text-gray-800">Why Choose CollegeAppOrg?</h3>
                    <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="p-6 shadow-lg rounded-lg">
                            <h4 className="text-xl font-semibold text-indigo-600">Essay Editor</h4>
                            <p className="mt-2 text-gray-600">
                                Write and organize your college essays with ease, all in one place.
                            </p>
                        </div>
                        <div className="p-6 shadow-lg rounded-lg">
                            <h4 className="text-xl font-semibold text-indigo-600">Application Tracker</h4>
                            <p className="mt-2 text-gray-600">
                                Track application deadlines and submission statuses effortlessly.
                            </p>
                        </div>
                        <div className="p-6 shadow-lg rounded-lg">
                            <h4 className="text-xl font-semibold text-indigo-600">Recommendation Letters</h4>
                            <p className="mt-2 text-gray-600">
                                Manage your letter of recommendation requests seamlessly.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
