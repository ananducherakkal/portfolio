import { SendMail } from "@/types/sendMail";

export const contactMe = async (options: SendMail) => {
  await fetch("contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(options),
  });
};
