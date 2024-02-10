import React, { useState } from 'react';

const ContactForm: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        //form submission here
        console.log(formData);
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col my-16">
            <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="bg-gray-200 mb-4 py-2 px-4 rounded-sm"
                required
            />
            <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="bg-gray-200 mb-4 py-2 px-4 rounded-sm"
                required
            />
            <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                className="bg-gray-200 mb-4 py-2 px-4 rounded-sm"
                required
            />
            <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                className="bg-gray-200 mb-4 py-2 px-4 rounded-sm h-32"
                required
            ></textarea>
            <button type="submit" className="bg-green-700 text-white py-2 px-4 rounded-sm hover:bg-green-800">
                Send Message
            </button>
        </form>
    );
};

export default ContactForm;
