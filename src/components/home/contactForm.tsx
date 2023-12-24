import React from "react";

import ArrowSquareIcon from "../icon/arrowSquareIcon";
import Input from "../ui/input";
import TextArea from "../ui/textarea";
import Button from "../ui/button";

function ContactForm() {
  return (
    <form className="w-full flex flex-col max-w-xl mx-auto">
      <div className="text-gray-70 text-3xl md:text-4xl lg:text-5xl font-medium">
        Contact Me
      </div>
      <Input placeholder="Name" className="mt-11" />
      <Input placeholder="Email" className="mt-4" />
      <TextArea placeholder="Message" className="mt-4" />
      <Button className="ml-auto mt-4 w-fit">Send</Button>
    </form>
  );
}

export default ContactForm;
