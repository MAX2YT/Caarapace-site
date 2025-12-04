'use client'

import React, { useState } from 'react';

export function ContactForm() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Form submitted:', { firstName, lastName, email, subject, message });
        // Handle form submission logic here
    };

    return (
        <div className="flex flex-col lg:flex-row py-12 md:py-16">
            {/* Left Side - Solid Red Section */}
            <div className="flex-1 bg-[#BD0D46] flex items-center justify-center p-8 md:p-10">
                <div className="max-w-md">
                    <h1 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                        Let's Talk
                    </h1>
                    <p className="text-base mb-8 text-white/90 leading-relaxed">
                        Got questions? Ideas? Just wanna chat about your next project? We're here for it. Hit us up and let's make something happen.
                    </p>

                    {/* Contact Details */}
                    <div className="space-y-3">
                        <h2 className="text-xl font-bold mb-4 text-white">Contact Details</h2>

                        <div className="flex items-start gap-3 text-white">
                            <span className="font-semibold">Phone:</span>
                            <a href="tel:+11234567890" className="hover:text-white/80 transition-colors">
                                (123) 4567890
                            </a>
                        </div>

                        <div className="flex items-start gap-3 text-white">
                            <span className="font-semibold">Email:</span>
                            <a href="mailto:hello@caarapace.com" className="hover:text-white/80 transition-colors">
                                hello@caarapace.com
                            </a>
                        </div>

                        <div className="flex items-start gap-3 text-white">
                            <span className="font-semibold">Web:</span>
                            <a href="https://caarapace.com" className="hover:text-white/80 transition-colors">
                                caarapace.com
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Side - Form Section */}
            <div className="flex-1 bg-white flex items-center justify-center p-8 md:p-10">
                <div className="w-full max-w-md">
                    <form onSubmit={handleSubmit} className="space-y-5">
                        {/* Name Fields */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                                    First Name
                                </label>
                                <input
                                    type="text"
                                    id="firstName"
                                    value={firstName}
                                    onChange={(e) => setFirstName(e.target.value)}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#BD0D46] focus:border-[#BD0D46] outline-none transition-colors bg-white"
                                    placeholder="First Name"
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                                    Last Name
                                </label>
                                <input
                                    type="text"
                                    id="lastName"
                                    value={lastName}
                                    onChange={(e) => setLastName(e.target.value)}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#BD0D46] focus:border-[#BD0D46] outline-none transition-colors bg-white"
                                    placeholder="Last Name"
                                    required
                                />
                            </div>
                        </div>

                        {/* Email Field */}
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#BD0D46] focus:border-[#BD0D46] outline-none transition-colors bg-white"
                                placeholder="Email"
                                required
                            />
                        </div>

                        {/* Subject Field */}
                        <div>
                            <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                                Subject
                            </label>
                            <input
                                type="text"
                                id="subject"
                                value={subject}
                                onChange={(e) => setSubject(e.target.value)}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#BD0D46] focus:border-[#BD0D46] outline-none transition-colors bg-white"
                                placeholder="Subject"
                                required
                            />
                        </div>

                        {/* Message Field */}
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                                Message
                            </label>
                            <textarea
                                id="message"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                rows={4}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#BD0D46] focus:border-[#BD0D46] outline-none transition-colors resize-none bg-white"
                                placeholder="Type your message here."
                                required
                            />
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-full bg-[#BD0D46] hover:bg-[#9e0d3c] text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
