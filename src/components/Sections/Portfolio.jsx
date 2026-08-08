import React, { useState } from 'react';

export default function Portfolio() {
    const [activeFilter, setActiveFilter] = useState('all');

    const filters = [
        { key: 'all', label: 'All Projects' },
        { key: 'react', label: 'React' },
        { key: 'nextjs', label: 'Next.js' },
        { key: 'fullstack', label: 'Full-Stack' },
        { key: 'flutter', label: 'Flutter' }
    ];

    const projects = [
        {
            id: 1,
            title: "Mikias Building Materials",
            description: "Enterprise web application for building materials suppliers with real-time Telegram notifications, role-based access control, and comprehensive business management.",
            image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=500&h=300&fit=crop",
            tags: ["Next.js", "Prisma", "PostgreSQL", "Telegram API", "RBAC"],
            category: ["nextjs", "fullstack"],
            link: "https://mikias-building-materials-jdihv8vkd-nemona1s-projects.vercel.app/",
            github: "https://github.com/Nemona1/mikias-building-materials",
            featured: true
        },
        {
            id: 2,
            title: "Nemo Auth Next.js",
            description: "Enterprise-grade authentication and authorization system for Next.js applications with RBAC, 2FA, admin settings, and comprehensive security logging.",
            image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=500&h=300&fit=crop",
            tags: ["Next.js", "JWT", "2FA", "Prisma", "Security"],
            category: ["nextjs", "fullstack"],
            link: "https://www.npmjs.com/package/nemo-auth-nextjs",
            github: "https://github.com/Nemona1/nemo-auth-nextjs",
            featured: true
        },
        {
            id: 3,
            title: "E-Commerce Platform (Laravel + React)",
            description: "Full-stack e-commerce solution built with Laravel backend and React frontend, featuring advanced inventory management, payment integration, and admin dashboard.",
            image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop",
            tags: ["React", "Laravel", "PHP", "MySQL", "Payment Integration"],
            category: ["react", "fullstack"],
            link: "#",
            featured: false
        },
        {
            id: 4,
            title: "Flutter Mobile Application",
            description: "Cross-platform mobile application built with Flutter, featuring modern UI/UX, real-time data synchronization, and seamless API integration.",
            image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=500&h=300&fit=crop",
            tags: ["Flutter", "Dart", "REST API", "Firebase", "Cross-platform"],
            category: ["flutter"],
            link: "#",
            featured: false
        },
        {
            id: 5,
            title: "Confidential Enterprise Project",
            description: "Large-scale enterprise application for a confidential client, featuring complex business logic, advanced security measures, and scalable architecture. Details available upon request.",
            image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=500&h=300&fit=crop",
            tags: ["React", "Node.js", "PostgreSQL", "Enterprise", "Confidential"],
            category: ["react", "fullstack"],
            link: "#",
            featured: false,
            confidential: true
        },
        
    ];

    const filteredProjects = activeFilter === 'all' 
        ? projects 
        : projects.filter(project => project.category.includes(activeFilter));

    return (
        <section id="portfolio" className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">My Portfolio</h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        A collection of projects that showcase my skills and passion for development.
                    </p>
                </div>

                {/* Filter Section */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {filters.map((filter) => (
                        <button
                            key={filter.key}
                            onClick={() => setActiveFilter(filter.key)}
                            className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                                activeFilter === filter.key
                                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg transform scale-105'
                                    : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md'
                            }`}
                        >
                            {filter.label}
                        </button>
                    ))}
                </div>

                {/* Projects Grid */}
                {filteredProjects.length === 0 ? (
                    <div className="text-center py-12">
                        <p className="text-xl text-gray-600">No projects found for this filter.</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredProjects.map((project) => (
                            <div 
                                key={project.id}
                                className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden group relative"
                            >
                                {/* Featured Badge */}
                                {project.featured && (
                                    <div className="absolute top-4 right-4 z-10">
                                        <span className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-white px-3 py-1 rounded-full text-xs font-medium shadow-lg">
                                            ⭐ Featured
                                        </span>
                                    </div>
                                )}
                                
                                {/* Confidential Badge */}
                                {project.confidential && (
                                    <div className="absolute top-4 left-4 z-10">
                                        <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 rounded-full text-xs font-medium shadow-lg">
                                            🔒 Confidential
                                        </span>
                                    </div>
                                )}
                                
                                <div className="relative overflow-hidden">
                                    <img 
                                        src={project.image} 
                                        alt={project.title}
                                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    
                                    {/* GitHub Link */}
                                    {project.github && (
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110"
                                            aria-label="View on GitHub"
                                        >
                                            <svg className="w-5 h-5 text-gray-800" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                                            </svg>
                                        </a>
                                    )}
                                </div>
                                
                                <div className="p-6">
                                    <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                                        {project.description}
                                    </p>
                                    
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.tags.map(tag => (
                                            <span key={tag} className="px-3 py-1 bg-blue-50 text-blue-600 text-xs rounded-full font-medium">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                    
                                    {project.confidential ? (
                                        <button 
                                            onClick={() => window.location.href = '#contact'}
                                            className="inline-flex items-center text-purple-600 hover:text-pink-600 font-medium transition-colors"
                                        >
                                            Request Details
                                            <svg className="ml-1 w-4 h-4 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                            </svg>
                                        </button>
                                    ) : (
                                        <a 
                                            href={project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center text-blue-600 hover:text-purple-600 font-medium group/link transition-colors"
                                        >
                                            View Project
                                            <svg className="ml-1 w-4 h-4 group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                            </svg>
                                        </a>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
}