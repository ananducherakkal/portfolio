import nodemailer from "nodemailer";
import { signupEmailTemplate } from "./templates";

// Configure nodemailer
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID,
    pass: process.env.NEXT_PUBLIC_EMAIL_SERVICE_PASSWORD,
  },
});

export const sendMail = ({
  ...options
}: nodemailer.SendMailOptions): { error?: Error } => {
  const mailOptions: nodemailer.SendMailOptions = {
    from: process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID,
    ...options,
  };
  transporter.sendMail(mailOptions, (error) => {
    return { error };
  });
  return {};
};

type sendUserSignupEmailOptions = {
  name: string;
  email: string;
  message: string;
};
export const sendSignupMail = async (
  options: sendUserSignupEmailOptions
): Promise<{ error?: Error }> => {
  const { name, email, message } = options;

  const mailOptions: nodemailer.SendMailOptions = {
    from: {
      name: process.env.NEXT_PUBLIC_EMAIL_SERVICE_NAME as string,
      address: process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID as string,
    },
    to: process.env.NEXT_PUBLIC_EMAIL_SERVICE_RECEIVER as string,
    subject: "Contact me form portfolio",
    html: signupEmailTemplate({
      name: name,
      email: email,
      message: message,
    }),
  };
  return new Promise((resolve, reject) => {
    transporter.sendMail(mailOptions, (error: any) => {
      resolve(error);
    });
  });
};
