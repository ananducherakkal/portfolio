import React from "react";
import ContactForm from "./contactForm";
import ContactInfo from "./contactInfo";

interface IContactSection {}

const ContactSection = React.forwardRef<HTMLDivElement, IContactSection>(
  (props, ref) => {
    return (
      <div
        className="grid grid-cols-1 md:grid-cols-2 p-7 md:px-24 md:py-16"
        ref={ref}
      >
        <ContactForm />
        <ContactInfo />
      </div>
    );
  }
);
ContactSection.displayName = "ContactSection";

export default ContactSection;
