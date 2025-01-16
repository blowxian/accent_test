export default function Home() {
    return (
        <div className="bg-black text-gray-300 font-sans min-h-screen">
            <header className="bg-gray-800 text-gray-100 p-6 shadow-md">
                <h1 className="text-4xl font-bold text-center" style={{ color: "rgb(223, 207, 153)" }}>
                    AccentTest: Your Personal Accent Training Platform
                </h1>
                <p className="text-center mt-2 text-gray-400">
                    Welcome to <strong>AccentTest</strong>, your comprehensive accent training companion for perfecting pronunciation.
                </p>
            </header>

            <main className="max-w-5xl mx-auto p-6">
                {/* Introduction Section */}
                <section id="introduction" className="mb-12">
                    <h2 className="text-3xl font-bold mb-4" style={{ color: "rgb(223, 207, 153)" }}>Professional Accent Training</h2>
                    <p className="mb-4">
                        AccentTest combines professional accent coaching techniques with cutting-edge technology to help you perfect 
                        your pronunciation and reduce your accent. Whether you're a business professional, student, or language enthusiast, 
                        our platform provides the tools and expertise you need.
                    </p>
                    <p>
                        Ready to transform your accent? Start with our <a href="https://accent-test.com" 
                        className="text-yellow-500 hover:text-yellow-400 underline">professional accent analysis</a>.
                    </p>
                </section>

                {/* Key Features Section */}
                <section id="features" className="mb-12">
                    <h2 className="text-3xl font-bold mb-4" style={{ color: "rgb(223, 207, 153)" }}>Training Features</h2>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>Expert-designed accent training methods and coaching resources</li>
                        <li>Personalized feedback and recommendations for improvement</li>
                        <li>AI-powered tools for real-time accent training</li>
                        <li>Access to professional accent coaches and specialists</li>
                        <li>Detailed progress tracking and analytics</li>
                    </ul>
                </section>

                {/* Training Tools Section */}
                <section id="tools" className="mb-12">
                    <h2 className="text-3xl font-bold mb-4" style={{ color: "rgb(223, 207, 153)" }}>Training Tools</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-gray-800 p-4 rounded-lg">
                            <h3 className="text-xl font-bold mb-2">Accent Coach AI</h3>
                            <p>Personal AI-powered assistant for real-time accent training and feedback.</p>
                        </div>
                        <div className="bg-gray-800 p-4 rounded-lg">
                            <h3 className="text-xl font-bold mb-2">Pronunciation Trainer</h3>
                            <p>Advanced system for perfecting your speech patterns and sounds.</p>
                        </div>
                        <div className="bg-gray-800 p-4 rounded-lg">
                            <h3 className="text-xl font-bold mb-2">Practice Sessions</h3>
                            <p>Structured training modules designed by professional accent coaches.</p>
                        </div>
                        <div className="bg-gray-800 p-4 rounded-lg">
                            <h3 className="text-xl font-bold mb-2">Speech Analysis</h3>
                            <p>Get instant feedback on your pronunciation and accent patterns.</p>
                        </div>
                    </div>
                </section>

                {/* Resources Section */}
                <section id="resources" className="mb-12">
                    <h2 className="text-3xl font-bold mb-4" style={{ color: "rgb(223, 207, 153)" }}>Training Resources</h2>
                    <p className="mb-4">
                        Access our comprehensive suite of accent training resources:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>
                            <a href="https://accent-test.com" 
                            className="text-yellow-500 hover:text-yellow-400 underline">
                                Professional Accent Training & Analysis
                            </a>
                        </li>
                        <li>
                            <a href="https://accentguesser.co" 
                            className="text-yellow-500 hover:text-yellow-400 underline">
                                Personalized Accent Coaching
                            </a>
                        </li>
                        <li>
                            <a href="https://boldvoice.com" 
                            className="text-yellow-500 hover:text-yellow-400 underline">
                                Expert Accent Coaching Platform
                            </a>
                        </li>
                    </ul>
                </section>

                {/* Community Section */}
                <section id="community" className="mb-12">
                    <h2 className="text-3xl font-bold mb-4" style={{ color: "rgb(223, 207, 153)" }}>Join Our Community</h2>
                    <p>
                        Connect with accent coaches, language experts, and fellow learners. Share your progress, 
                        get professional feedback, and access exclusive training resources to accelerate your 
                        accent improvement journey.
                    </p>
                </section>
            </main>

            <footer className="bg-gray-800 text-gray-400 p-6 text-center">
                <p>&copy; {new Date().getFullYear()} AccentTest - Professional Accent Training Platform. All rights reserved.</p>
            </footer>
        </div>
    )
} 