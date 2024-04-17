"use client";
import { useState, ChangeEvent, FormEvent } from "react";
import { usePathname } from "next/navigation";
import Alert from "@mui/material/Alert";
import RegulaminDialog from "../RegulaminDialog/RegulaminDialog";

const initialFormData = {
  name: "",
  phone: "",
  email: "",
  subject: "",
  message: "",
};

export default function ContactForm() {
  const [formData, setFormData] = useState(initialFormData);
  const [submitted, setSubmitted] = useState(false);
  const path = usePathname();
  const heading = path === "/kariera" ? "Aplikuj" : "Zleć projekt";

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
    console.log("Sending...");
    console.log(formData);

    fetch("/api/contact", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    }).then((res) => {
      console.log("Response received");
      if (res.status === 200) {
        console.log("Response succeeded!");
        setSubmitted(true);
        setFormData(initialFormData); //reset form
        // alert("Wiadomość została wysłana!");
        return <Alert severity="success">Wiadomość została wysłana</Alert>;
      }
    });
  };

  return (
    <div className="md:w-1/2">
      <h2 className="mb-4 text-2xl font-extrabold uppercase dark:text-stone-200">
        {heading}
      </h2>
      <form onSubmit={handleSubmit} className="flex flex-col" method="POST">
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Imię / Nazwa firmy"
          value={formData.name}
          onChange={handleChange}
          className="bg-gray-200 mb-4 py-2 px-4 rounded-sm"
          required
        />
        <input
          type="phone"
          id="phone"
          name="phone"
          placeholder="Telefon"
          value={formData.phone}
          onChange={handleChange}
          className="bg-gray-200 mb-4 py-2 px-4 rounded-sm"
          required
        />
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="bg-gray-200 mb-4 py-2 px-4 rounded-sm"
          required
        />
        <input
          type="text"
          id="subject"
          name="subject"
          placeholder="Temat"
          value={formData.subject}
          onChange={handleChange}
          className="bg-gray-200 mb-4 py-2 px-4 rounded-sm"
          required
        />
        <textarea
          id="message"
          name="message"
          placeholder="Wiadomość"
          value={formData.message}
          onChange={handleChange}
          className="bg-gray-200 mb-4 py-2 px-4 rounded-sm h-32"
          required
        ></textarea>
        <input
          type="submit"
          className="bg-green-700 text-white py-2 px-4 rounded-sm hover:bg-green-800 hover:cursor-pointer"
        />
        <p className="my-4 text-xs">
          * Klikając przycisk wyślij akceptujesz regulamin. <RegulaminDialog />
        </p>
      </form>
    </div>
  );
}
