import React from 'react';

export default function Services() {
    const services = [
        {
            icon: '💻',
            title: 'Web Development',
            description: 'Custom web applications built with modern technologies like React, Vue.js, and modern CSS frameworks.',
            features: ['Responsive Design', 'Performance Optimization', 'SEO Friendly', 'Cross-browser Compatibility']
        },
        {
            icon: '📱',
            title: 'Mobile-First Design',
            description: 'Responsive designs that work perfectly on all devices, with mobile-first approach.',
            features: ['Mobile Optimization', 'Touch-friendly UI', 'Fast Loading', 'Progressive Web Apps']
        },
        {
            icon: '🎨',
            title: 'UI/UX Design',
            description: 'Beautiful and intuitive user interfaces that provide exceptional user experience.',
            features: ['User Research', 'Wireframing', 'Prototyping', 'Design Systems']
        },
        {
            icon: '⚡',
            title: 'Performance Optimization',
            description: 'Fast and efficient web applications with optimized loading times and smooth interactions.',
            features: ['Code Splitting', 'Lazy Loading', 'Image Optimization', 'Bundle Optimization']
        }
    ];

    const process = [
        {
            step: '01',
            title: 'Discovery & Planning',
            description: 'We discuss your requirements, goals, and create a detailed project plan.'
        },
        {
            step: '02',
            title: 'Design & Prototyping',
            description: 'Create wireframes and prototypes to visualize the final product.'
        },
        {
            step: '03',
            title: 'Development',
            description: 'Build your application using the latest technologies and best practices.'
        },
        {
            step: '04',
            title: 'Testing & Delivery',
            description: 'Thorough testing and smooth delivery of your completed project.'
        }
    ];

    const scrollToSection = (href) => {
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section id="services" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">My Services</h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Comprehensive web development services to bring your ideas to life with modern technologies and best practices.
                    </p>
                </div>
                
                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-20">
                    {services.map((service, index) => (
                        <div key={index} className="card p-6 group hover:border-primary-200 border-2 border-transparent">
                            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                                {service.title}
                            </h3>
                            <p className="text-gray-600 mb-4 leading-relaxed">
                                {service.description}
                            </p>
                            <ul className="space-y-2">
                                {service.features.map((feature, featureIndex) => (
                                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                                        <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Process Section */}
                <div className="text-center mb-16">
                    <h3 className="text-3xl font-bold text-gray-900 mb-4">My Process</h3>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        A structured approach to ensure your project's success from start to finish.
                    </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {process.map((step, index) => (
                        <div key={index} className="text-center group">
                            <div className="w-16 h-16 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-full flex items-center justify-center text-white font-bold text-xl mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                                {step.step}
                            </div>
                            <h4 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                                {step.title}
                            </h4>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
