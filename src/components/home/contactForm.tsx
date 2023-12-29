import React, { useState } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import Input from "../ui/input";
import TextArea from "../ui/textarea";
import Button from "../ui/button";
import { contactMe } from "@/services/sendMail";
import { toast } from "react-toastify";
import LoadingCircleIcon from "../icon/loadingCircleIcon";
import AirplaneIcon from "../icon/airplaneIcon";

const initialValues = {
  name: "",
  email: "",
  message: "",
};
const validationSchema = Yup.object().shape({
  name: Yup.string().required("required"),
  email: Yup.string().required("required").email("should be a valid email"),
  message: Yup.string().required("required"),
});

function ContactForm() {
  const [loading, setLoading] = useState(false);

  const onSubmit = async (values: typeof initialValues) => {
    setLoading(true);
    const success = await contactMe({
      name: values.name,
      email: values.email,
      message: values.message,
    });
    setLoading(false);
    if (success) {
      toast.success("Mail sent succesfully");
    } else {
      toast.error("Mail could not be sent!");
    }
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <form
      className="w-full flex flex-col max-w-xl mx-auto"
      onSubmit={formik.handleSubmit}
    >
      <div className="text-gray-70 text-3xl md:text-4xl lg:text-5xl font-medium">
        Contact Me
      </div>
      <Input
        name="name"
        placeholder="Name"
        className="mt-11"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.name}
        disabled={loading}
      />
      <div className="text-destructive text-sm h-4">
        {formik.touched.name && formik.errors.name}
      </div>
      <Input
        name="email"
        placeholder="Email"
        className="mt-4"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}
        disabled={loading}
      />
      <div className="text-destructive text-sm h-4">
        {formik.touched.email && formik.errors.email}
      </div>
      <TextArea
        name="message"
        placeholder="Message"
        className="mt-4"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.message}
        disabled={loading}
      />
      <div className="text-destructive text-sm h-4">
        {formik.touched.message && formik.errors.message}
      </div>
      <Button
        className="ml-auto mt-4 w-fit flex items-center space-x-2"
        disabled={loading}
      >
        <div>Send</div>
        <div className="w-4 h-4">
          {loading ? (
            <LoadingCircleIcon className="w-full h-full" />
          ) : (
            <AirplaneIcon className="w-full h-full" />
          )}
        </div>
      </Button>
    </form>
  );
}

export default ContactForm;
