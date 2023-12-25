import { createTransport } from "nodemailer";

export const sendEmail = async (to, subject, text) => {
  try {
    const transporter = createTransport({
      service: "gmail",
      auth: {
        user: process.env.APP_MAIL,
        pass: process.env.APP_MAIL_PASS,
      },
    });


   const res =  await transporter.sendMail({
      to,
      subject,
      text,
      from: "banquetbazzar01@gmail.com",
    });

    return res.response;
    
  } catch (error) {
    console.log(error?.message);
  }
};