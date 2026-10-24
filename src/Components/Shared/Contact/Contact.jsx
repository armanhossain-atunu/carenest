'use client';

import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { toast } from 'react-toastify';


const Contact = () => {
    return (
        <section className="py-20 bg-zinc-50 dark:bg-black relative overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-rose-100/40 dark:bg-rose-900/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-100/40 dark:bg-blue-900/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3 pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-sm font-bold tracking-widest text-teal-600 dark:text-teal-400 uppercase mb-3">Get In Touch</h2>
                    <h3 className="text-3xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-4">We're Here to Help</h3>
                    <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">Have questions about our care services? Want to join our team of verified caregivers? Reach out to us today.</p>
                </div>

                <div className="flex flex-col lg:flex-row gap-12 bg-white dark:bg-gray-900 rounded-3xl overflow-hidden shadow-2xl shadow-teal-500/5 border border-teal-50 dark:border-gray-800">

                    {/* Contact Info Side */}
                    <div className="w-full lg:w-2/5 bg-gradient-to-br from-teal-600 to-blue-700 text-white p-10 flex flex-col justify-between relative overflow-hidden">
                        {/* Blob */}
                        <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-white/10 rounded-full blur-2xl pointer-events-none"></div>
                        <div className="absolute top-10 right-10 w-32 h-32 bg-teal-400/20 rounded-full blur-xl pointer-events-none"></div>

                        <div className="relative z-10">
                            <h4 className="text-2xl font-bold mb-2">Contact Information</h4>
                            <p className="text-teal-100 mb-10">Our support team will get back to you within 24 hours.</p>

                            <div className="space-y-8">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-white/10 rounded-xl">
                                        <Phone className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <h5 className="font-semibold text-lg mb-1">Phone Call</h5>
                                        <p className="text-teal-100">+1 (800) 123-4567</p>
                                        <p className="text-teal-100/70 text-sm">Mon - Fri, 8am - 8pm EST</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-white/10 rounded-xl">
                                        <Mail className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <h5 className="font-semibold text-lg mb-1">Email Support</h5>
                                        <p className="text-teal-100">support@carenest.com</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-white/10 rounded-xl">
                                        <MapPin className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <h5 className="font-semibold text-lg mb-1">Headquarters</h5>
                                        <p className="text-teal-100">123 Caregiver Ave, Suite 400<br />New York, NY 10001</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form Side */}
                    <div className="w-full lg:w-3/5 p-10 md:p-14">
                        <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); toast.success("Thanks for contacting us! This is a demo form."); e.target.reset(); }}>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">First Name</label>
                                    <input required type="text" placeholder="John" className="w-full px-4 py-3 rounded-xl bg-zinc-50 dark:bg-gray-800 border border-zinc-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-500 transition-colors" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">Last Name</label>
                                    <input required type="text" placeholder="Doe" className="w-full px-4 py-3 rounded-xl bg-zinc-50 dark:bg-gray-800 border border-zinc-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-500 transition-colors" />
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">Email Address</label>
                                    <input required type="email" placeholder="john@example.com" className="w-full px-4 py-3 rounded-xl bg-zinc-50 dark:bg-gray-800 border border-zinc-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-500 transition-colors" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">Phone Number (Optional)</label>
                                    <input type="tel" placeholder="+1 (555) 000-0000" className="w-full px-4 py-3 rounded-xl bg-zinc-50 dark:bg-gray-800 border border-zinc-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-500 transition-colors" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">Subject</label>
                                <select className="w-full px-4 py-3 rounded-xl bg-zinc-50 dark:bg-gray-800 border border-zinc-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-500 transition-colors text-gray-600 dark:text-gray-300">
                                    <option>General Inquiry</option>
                                    <option>Require a Caregiver</option>
                                    <option>Apply to be a Caregiver</option>
                                    <option>Billing Support</option>
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">Message</label>
                                <textarea required rows="4" placeholder="How can we help you today?" className="w-full px-4 py-3 rounded-xl bg-zinc-50 dark:bg-gray-800 border border-zinc-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-500 transition-colors resize-none"></textarea>
                            </div>

                            <button type="submit" className="btn btn-primary w-full group shadow-lg flex items-center justify-center gap-2 text-white font-bold rounded-xl">
                                Send Message
                                <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
