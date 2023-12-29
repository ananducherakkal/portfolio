import { sendSignupMail } from "@/utils/sendMail";

export async function POST(request: Request, response: Response) {
  try {
    const req = await request.json();
    const { name, email, message } = req;

    const some = await sendSignupMail({ name, email, message });
    console.log("sdfffffffffffff", some);

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
