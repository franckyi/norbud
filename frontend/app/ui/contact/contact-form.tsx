"use client";
import { useState, ChangeEvent, FormEvent } from "react";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    //form submission here
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col md:w-1/2">
      <input
        type="text"
        name="name"
        placeholder="Imię / Nazwa firmy"
        value={formData.name}
        onChange={handleChange}
        className="bg-gray-200 mb-4 py-2 px-4 rounded-sm"
        required
      />
      <input
        type="phone"
        name="phone"
        placeholder="Telefon"
        value={formData.phone}
        onChange={handleChange}
        className="bg-gray-200 mb-4 py-2 px-4 rounded-sm"
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        className="bg-gray-200 mb-4 py-2 px-4 rounded-sm"
        required
      />
      <input
        type="text"
        name="subject"
        placeholder="Temat"
        value={formData.subject}
        onChange={handleChange}
        className="bg-gray-200 mb-4 py-2 px-4 rounded-sm"
        required
      />
      <textarea
        name="message"
        placeholder="Wiadomość"
        value={formData.message}
        onChange={handleChange}
        className="bg-gray-200 mb-4 py-2 px-4 rounded-sm h-32"
        required
      ></textarea>
      <button
        type="submit"
        className="bg-green-700 text-white py-2 px-4 rounded-sm hover:bg-green-800"
      >
        Wyślij
      </button>
    </form>
  );
}

export default ContactForm;
