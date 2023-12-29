import { sendContactMeMail } from "@/utils/sendMail";

export async function POST(request: Request, response: Response) {
  try {
    const req = await request.json();
    const { name, email, message } = req;

    const response = await sendContactMeMail({ name, email, message });

    if (response?.error) {
      return new Response("Something went wrong", {
        status: 500,
      });
    }

    return new Response("Mail send succesfully", {
      status: 200,
    });
  } catch (error) {
    console.log("errro", error);
    return new Response(`Something went wrong! ${JSON.stringify(error)}`, {
      status: 500,
    });
  }
}
