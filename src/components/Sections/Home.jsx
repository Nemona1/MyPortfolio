import React, { useState, useEffect } from 'react';
import Profile from '../../assets/Profile.jpg';

export default function Home() {
    const [currentSkill, setCurrentSkill] = useState(0);
    const [isVisible, setIsVisible] = useState(false);

    const skills = ['Full-Stack Development', 'React Applications', 'Modern Web Design', 'UI/UX Design', 'Problem Solving'];
    const stats = [
        { number: '50+', label: 'Projects Completed' },
        { number: '3+', label: 'Years Experience' },
        { number: '100%', label: 'Client Satisfaction' },
        { number: '24/7', label: 'Support' }
    ];

    const featuredProjects = [
        {
            id: 1,
            title: "E-Commerce Platform",
            description: "Full-stack e-commerce solution with React & modern technologies",
            image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop",
            tags: ["React", "Tailwind CSS", "JavaScript"],
            link: "#portfolio"
        },
        {
            id: 2,
            title: "Task Management App",
            description: "Collaborative project management tool with real-time features",
            image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop",
            tags: ["React", "Firebase", "Material UI"],
            link: "#portfolio"
        },
        {
            id: 3,
            title: "Weather Dashboard",
            description: "Real-time weather monitoring application with interactive charts",
            image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=500&h=300&fit=crop",
            tags: ["React", "API Integration", "Chart.js"],
            link: "#portfolio"
        }
    ];

    useEffect(() => {
        setIsVisible(true);
        const interval = setInterval(() => {
            setCurrentSkill((prev) => (prev + 1) % skills.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    const scrollToSection = (href) => {
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-100 via-transparent to-transparent"></div>
            
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                   <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-1">
                    <div className="w-full h-full bg-white rounded-full overflow-hidden">
                        <img
                        src={Profile}      // 👈 replace with your actual image path
                        alt="Nemona Hirko"
                        className="w-full h-full object-cover"
                        />
                    </div>
                    </div>


                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
                        Hi, I'm <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Nemona</span>
                    </h1>
                    
                    <div className="text-xl md:text-2xl lg:text-3xl text-gray-600 mb-8 h-16 flex items-center justify-center">
                        <span className="text-gray-500">I specialize in </span>
                        <span className="ml-2 text-blue-600 font-semibold min-w-[300px] text-left">
                            {skills[currentSkill]}
                        </span>
                    </div>
                    
                    <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed">
                        A passionate frontend developer creating digital solutions that make a difference. 
                        I transform complex ideas into functional, beautiful, and user-friendly applications 
                        using modern technologies.
                    </p>
                    
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <button
                            onClick={() => scrollToSection('#portfolio')}
                            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center"
                        >
                            View My Work
                            <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                        <button
                            onClick={() => scrollToSection('#contact')}
                            className="border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-medium py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center"
                        >
                            Get In Touch
                            <svg className="ml-2 w-5 h-5 group-hover:animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            
            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                <button
                    onClick={() => scrollToSection('#about')}
                    className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center hover:border-blue-600 transition-colors"
                >
                    <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 hover:bg-blue-600 transition-colors"></div>
                </button>
            </div>
        </section>
    );
}