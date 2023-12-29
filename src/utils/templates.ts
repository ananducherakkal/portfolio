type ContactMeTemplate = {
  name: string;
  email: string;
  message: string;
};
export const contactMeTemplate = ({
  name,
  email,
  message,
}: ContactMeTemplate) => {
  return `<div
    style="
      background-color: rgb(220, 255, 243);
      font-family: Arial, Helvetica, sans-serif;
      height: 100vh;
      padding: 20px 10px;
      box-sizing: border-box;
    "
  >
    <div
      style="
        width: full;
        max-width: 600px;
        margin: 0 auto;
        background-color: white;
        padding: 80px 40px;
        height: 400px;
      "
    >
      <div style="width: 100%; word-wrap: break-word">
        <div style="text-transform: capitalize"><strong>Name:</strong> ${name}</div>
        <br />
        <div><strong>Email:</strong> ${email}</div>
        <br />
        <div><strong>Message:</strong> ${message}</div>
      </div>
      <br />
      <br />
    </div>
  </div>`;
};
