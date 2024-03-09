import { useState } from "react";
import { CompanyInfo } from "@/app/types/company-info";
import ContactSection from "./ContactSection";
import GoogleMap from "../common/map";

const contacts = {
  classes:
    "my-16 text-2xl font-extrabold text-center uppercase dark:text-stone-200",
  heading: "Skontaktuj się znami",
  btnClasses: "w-1/2 p-8 text-white hover:bg-green-800 uppercase",
};

interface SectionProps {
  companyInfo: CompanyInfo;
}

function ContactToggle({ companyInfo }: SectionProps) {
  const [isFormVisible, setIsFormVisible] = useState(true);
  const [isMapVisible, setIsMapVisible] = useState(false);

  function handleContactToggle(e) {
    if (e.target.textContent === "Kontakty") {
      console.log("clicked KONTAKTY");
      setIsFormVisible(true);
      setIsMapVisible(false);
    } else {
      setIsFormVisible(false);
      setIsMapVisible(true);
    }
  }
  return (
    <>
      <h2 id="contact-section" className={contacts.classes}>
        {contacts.heading}
      </h2>
      <div className="flex">
        <button
          type="button"
          className={`${contacts.btnClasses} bg-green-800 hover:bg-green-900`}
          onClick={handleContactToggle}
        >
          Kontakty
        </button>
        <button
          type="button"
          className={`${contacts.btnClasses} bg-green-700 hover:bg-green-600`}
          onClick={handleContactToggle}
        >
          Gdzie jesteśmy
        </button>
      </div>

      {isFormVisible && <ContactSection companyInfo={companyInfo} />}
      {isMapVisible && <GoogleMap />}
    </>
  );
}

export default ContactToggle;
