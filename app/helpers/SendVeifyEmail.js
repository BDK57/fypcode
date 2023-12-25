import { sendEmail } from "./sendemaillink";
export async function sendVerifyEmail(email,userId){
    console.log("user is",userId)
    console.log("email",email)
    const url = `http://localhost:3000/user/verifyEmail/${userId}`;
    
    const verifyEmail = await sendEmail(
      email,
      "Banquet Bazaar",
      `click the following link to verify and setup you account: ${url}`
    );

    console.log("verify email is",verifyEmail);
    return verifyEmail

}