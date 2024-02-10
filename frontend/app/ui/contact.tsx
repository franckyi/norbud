"use client";
import React from 'react';
import ContactForm from './contact-form';

interface CompanyInfo {
    acf: {
        name: string;
        street: string;
        cap: string;
        city: string;
        nip: string;
        regon: string;
        krs: string;
        email: string;
        facebook: string;
        linkedin: string;
        website: string;
    }
}

interface ContactProps {
    companyInfo: CompanyInfo;
}

const Contact: React.FC<ContactProps> = ({ companyInfo }) => { 
    console.log(companyInfo);

    return (
        <section className="bg-gray-100 py-12 px-4 md:px-0">
            <div className="max-w-6xl mx-auto md:flex items-center">
                <div className="md:w-1/2 mb-8 md:mb-0">
                    <div className="flex items-center mb-4">
                        <p className="text-gray-800">{companyInfo.acf.name}</p>
                    </div>
                </div>
                <div className="md:w-1/2">
                    <ContactForm />
                </div>
            </div>
        </section>
    );
};

export default Contact;
