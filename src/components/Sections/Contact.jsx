import React from 'react';

export default function Contact() {
    const contactInfo = [
        {
            icon: '📧',
            title: 'Email 1',
            value: 'nimona2024hirko@gmail.com',
            link: 'mailto:nimona2024hirko@gmail.com'
        },
         {
            icon: '📧',
            title: 'Email 2',
            value: 'nemona2025hirko@gmail.com',
            link: 'mailto:nemona2025hirko@gmail.com'
        },
        {
            icon: '📱',
            title: 'Phone 1',
            value: '+251 948418527',
            link: 'tel:+251948418527'
        },
        {
            icon: '📱',
            title: 'Phone 2',
            value: '+251 928242794',
            link: 'tel:+251928242794'
        },
        {
            icon: '📍',
            title: 'Location',
            value: 'Available Worldwide',
            link: '#'
        }
    ];

    const socialLinks = [
        {
            name: 'Telegram 1',
            icon: '📱',
            link: 'https://t.me/zimita2025',
            color: 'hover:bg-blue-100 hover:text-blue-600'
        },
         {
            name: 'Telegram 2',
            icon: '📱',
            link: 'https://t.me/zimita2024',
            color: 'hover:bg-blue-100 hover:text-blue-600'
        },
        {
            name: 'Instagram',
            icon: '📸',
            link: 'https://instagram.com/yourusername',
            color: 'hover:bg-pink-100 hover:text-pink-600'
        },
        {
            name: 'WhatsApp',
            icon: '💬',
            link: 'https://wa.me/251948418527',
            color: 'hover:bg-green-100 hover:text-green-600'
        },
        {
            name: 'Facebook',
            icon: '👥',
            link: 'https://facebook.com/youruserna',
            color: 'hover:bg-blue-100 hover:text-blue-600'
        },
        {
            name: 'GitHub',
            icon: '💻',
            link: 'https://github.com/Nemona1',
            color: 'hover:bg-gray-100 hover:text-gray-800'
        }
    ];

    return (
        <section id="contact" className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Let's connect! Reach out to me through any of these platforms.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Information */}
                    <div className="space-y-8">
                        <div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">Let's work together</h3>
                            <p className="text-gray-600 leading-relaxed mb-6">
                                I'm always excited to hear about new projects and opportunities. Whether you need a 
                                complete web application, frontend development, or just some technical advice, I'm here to help.
                            </p>
                            <p className="text-gray-600 leading-relaxed">
                                Feel free to reach out through any of the platforms below. I typically respond within 24 hours!
                            </p>
                        </div>

                        <div className="space-y-4">
                            {contactInfo.map((info, index) => (
                                <a
                                    key={index}
                                    href={info.link}
                                    className="flex items-center p-4 bg-white rounded-lg hover:bg-blue-50 transition-colors duration-200 group shadow-md"
                                >
                                    <div className="text-2xl mr-4 group-hover:scale-110 transition-transform duration-200">
                                        {info.icon}
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                                            {info.title}
                                        </h4>
                                        <p className="text-gray-600">{info.value}</p>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Social Links */}
                    <div className="space-y-8">
                        <div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">Connect With Me</h3>
                            <p className="text-gray-600 leading-relaxed mb-6">
                                Follow me on social media or send me a message directly through these platforms.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                            {socialLinks.map((social, index) => (
                                <a
                                    key={index}
                                    href={social.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`flex flex-col items-center justify-center p-6 bg-white rounded-lg transition-all duration-200 transform hover:scale-105 shadow-md ${social.color}`}
                                >
                                    <div className="text-3xl mb-2">
                                        {social.icon}
                                    </div>
                                    <span className="font-medium text-gray-900 text-center">{social.name}</span>
                                </a>
                            ))}
                        </div>

                        {/* Quick Message */}
                        <div className="bg-white rounded-lg p-6 shadow-md">
                            <h4 className="text-lg font-semibold text-gray-900 mb-3">Quick Message</h4>
                            <p className="text-gray-600 text-sm mb-4">
                                Prefer to send a quick message? Click any platform above to start a conversation!
                            </p>
                            <div className="flex items-center text-sm text-gray-500">
                                <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
                                Available for new projects
                            </div>
                        </div>
                    </div>
                </div>

                {/* Call to Action */}
                <div className="text-center mt-16">
                    <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
                        <h3 className="text-2xl font-bold mb-4">Ready to Start Your Project?</h3>
                        <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                            Let's discuss your ideas and create something amazing together. I'm just a message away!
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <a
                                href="https://t.me/zimita2025"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-blue-50 transition-all duration-200 transform hover:scale-105 inline-flex items-center"
                            >
                                📱 Message on Telegram 1
                            </a>

                             <a
                                href="https://t.me/zimita2024"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-blue-50 transition-all duration-200 transform hover:scale-105 inline-flex items-center"
                            >
                                📱 Message on Telegram 2
                            </a>
                            <a
                                href="https://wa.me/251948418527"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-blue-50 transition-all duration-200 transform hover:scale-105 inline-flex items-center"
                            >
                                💬 Chat on WhatsApp
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}