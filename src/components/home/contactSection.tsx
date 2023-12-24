import React from "react";
import ContactForm from "./contactForm";
import ContactInfo from "./contactInfo";

function ContactSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 p-10 md:px-24 md:py-16">
      <ContactForm />
      <ContactInfo />
    </div>
  );
}

export default ContactSection;
