
import { NextResponse } from "next/server";
import User from "@/app/models/userModel";
import { connect } from "@/app/configDb/configDb";
import { sendEmail } from "@/app/helpers/sendemaillink";
const crypto = require('crypto')
export async function POST(request) {
    await connect();
    try {
        const body  = await request.json();
        console.log("in body is",body)
        const {email} = body;
        console.log("email is",email)
        const user = await User.findOne({ email });
        if (!user) return NextResponse.json({status:400,message:"User not Found"})
    
        const resetToken = crypto.randomBytes(20).toString("hex");
        console.log("reset token",resetToken)
        const verifyToken = crypto
          .createHash("sha256")
          .update(resetToken)
          .digest("hex");
      
        const verifyTokenExpiry = Date.now() + 15 * 6 * 1000;
       
        const url = `http://localhost:3000/user/reset-password/${resetToken}`;
    
        await User.findOneAndUpdate(
          { email:user.email },
          {
            $set: {
              verifyToken: verifyToken,
              verifyTokenExpiry: verifyTokenExpiry,
            },
          }
        );
       const verfyemail =  await sendEmail(
          user.email,
          "Banquet Bazaar",
          `click the following link to reset the password: ${url}`
        );

        if(verfyemail){
            return NextResponse.json({status:200,message:"Link has been sent to Your email"})
        }

        return NextResponse.json({status:400,message:"There is some problem in sending the link"})
    
        
      } catch (error) {
        console.log("error",error)
        return NextResponse.json({status:500,message:error})
      }
}