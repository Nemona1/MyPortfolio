import React from 'react';

export default function About() {
    const experiences = [
        {
            year: "2022 - Present",
            role: "Frontend Developer",
            company: "Freelance",
            description: "Building modern web applications for various clients using React, and modern web technologies."
        },
        {
            year: "2021 - 2022",
            role: "Web Developer",
            company: "Digital Solutions Inc.",
            description: "Developed responsive web interfaces and implemented modern UI/UX designs."
        },
        {
            year: "2020 - 2021",
            role: "Junior Developer",
            company: "Tech Agency",
            description: "Created interactive web components and assisted in frontend development projects."
        }
    ];

    return (
        <section id="about" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Hero Section */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Passionate developer with a love for creating digital solutions that make a difference.
                    </p>
                </div>

                {/* Content Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
                    {/* Text Content */}
                    <div>
                        <h3 className="text-3xl font-bold text-gray-900 mb-6">My Journey</h3>
                        <div className="space-y-4 text-gray-600 leading-relaxed">
                            <p>
                                Hello! I'm Nemona, a frontend developer with a passion for creating 
                                innovative web solutions. My journey in web development started 3 years ago, 
                                and since then I've been constantly learning and adapting to new technologies.
                            </p>
                            <p>
                                I specialize in building modern, responsive web applications using React 
                                and modern CSS frameworks. I believe in writing clean, maintainable code 
                                and creating user experiences that are both beautiful and functional.
                            </p>
                            <p>
                                When I'm not coding, you can find me exploring new technologies, contributing 
                                to open-source projects, or sharing my knowledge with the developer community.
                            </p>
                        </div>
                    </div>
                    
                    {/* Skills/Stats */}
                    <div className="bg-gray-50 rounded-2xl p-8">
                        <h3 className="text-2xl font-bold text-gray-900 mb-6">What I Do</h3>
                        <div className="space-y-4">
                            {[
                                "Frontend Web Development",
                                "Responsive Design Implementation",
                                "Modern UI/UX Development",
                                "Performance Optimization",
                                "Cross-browser Compatibility",
                                "Web Accessibility"
                            ].map((skill, index) => (
                                <div key={index} className="flex items-center">
                                    <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                    <span className="text-gray-700">{skill}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Experience Section */}
                <div>
                    <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">Experience</h3>
                    <div className="space-y-8">
                        {experiences.map((exp, index) => (
                            <div key={index} className="card p-6">
                                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                                    <h4 className="text-xl font-semibold text-gray-900">{exp.role}</h4>
                                    <span className="text-primary-600 font-medium">{exp.year}</span>
                                </div>
                                <p className="text-gray-600 mb-2">{exp.company}</p>
                                <p className="text-gray-700">{exp.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}