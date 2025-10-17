import React, { useState } from 'react';

export default function Portfolio() {
    const [activeFilter, setActiveFilter] = useState('all');

    const filters = [
        { key: 'all', label: 'All Projects' },
        { key: 'react', label: 'React' },
        { key: 'javascript', label: 'JavaScript' },
        { key: 'web', label: 'Web Apps' }
    ];

    const projects = [
        {
            id: 1,
            title: "E-Commerce Platform",
            description: "Full-stack e-commerce solution with React & modern technologies with admin dashboard and payment integration.",
            image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop",
            tags: ["React", "Tailwind CSS", "JavaScript", "API"],
            category: ["react", "javascript", "web"],
            link: "#",
            featured: true
        },
        {
            id: 2,
            title: "Task Management App",
            description: "Collaborative project management tool with real-time updates and team collaboration features.",
            image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop",
            tags: ["React", "Firebase", "Material UI", "Real-time"],
            category: ["react", "web"],
            link: "#",
            featured: true
        },
        {
            id: 3,
            title: "Weather Dashboard",
            description: "Real-time weather monitoring application with interactive charts and location-based forecasts.",
            image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=500&h=300&fit=crop",
            tags: ["React", "API Integration", "Chart.js", "Geolocation"],
            category: ["react", "javascript"],
            link: "#",
            featured: false
        },
        {
            id: 4,
            title: "Social Media Dashboard",
            description: "Dashboard for tracking social media metrics and engagement analytics with beautiful visualizations.",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop",
            tags: ["React", "Chart.js", "API", "Dashboard"],
            category: ["react", "web"],
            link: "#",
            featured: false
        }
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
                                    ? 'bg-primary-600 text-white shadow-lg'
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
                        {filteredProjects.map((project, index) => (
                            <div 
                                key={project.id}
                                className="card p-6 group"
                            >
                                {/* Featured Badge */}
                                {project.featured && (
                                    <div className="absolute top-4 right-4 z-10">
                                        <span className="bg-yellow-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                                            Featured
                                        </span>
                                    </div>
                                )}
                                
                                <div className="relative overflow-hidden rounded-lg mb-4">
                                    <img 
                                        src={project.image} 
                                        alt={project.title}
                                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
                                </div>
                                
                                <div className="p-2">
                                    <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="text-gray-600 mb-4 leading-relaxed">
                                        {project.description}
                                    </p>
                                    
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.tags.map(tag => (
                                            <span key={tag} className="px-3 py-1 bg-primary-100 text-primary-600 text-sm rounded-full">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                    
                                    <button className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium group/link">
                                        View Project
                                        <svg className="ml-1 w-4 h-4 group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
}