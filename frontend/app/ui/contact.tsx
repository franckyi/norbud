"use client"
import React from 'react';
import ContactForm from './contact-form'; 


const ContactSection: React.FC = () => {
    return (
        <section className="bg-gray-100 py-12 px-4 md:px-0">
            <div className="max-w-6xl mx-auto md:flex items-center">
                <div className="md:w-1/2 mb-8 md:mb-0">
                    <div className="flex items-center mb-4">
                        <p className="text-gray-800">street address</p>
                    </div>
                </div>
                <div className="md:w-1/2">
                    <ContactForm />
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
