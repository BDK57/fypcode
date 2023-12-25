import { NextResponse } from "next/server";
import User from "@/app/models/userModel";
import { connect } from "@/app/configDb/configDb";
const crypto = require('crypto');
import bcrypt from "bcryptjs";

export const PUT = async (request,{params}) => {
    try {
        connect();
        console.log("paramsi",params)
        const { token } = params;

        const resetPasswordToken = crypto
          .createHash("sha256")
          .update(token)
          .digest("hex");
    
        console.log(`resetPassword:${resetPasswordToken}`)
    
        const user = await User.findOne({
          verifyToken: resetPasswordToken,
          verifyTokenExpiry: {
            $gt: Date.now(),
          },
        });
    
        console.log(`Time: ${Date.now()}`)
        if (!user){
            NextResponse.json({status:500,message:"Token expired Or in Invalid"})
        }
    
        const body = await request.json();
        const {password }= body;
        
        const hashedpass = await bcrypt.hash(password,10);

        const update = await User.findOneAndUpdate(
          { verifyToken: resetPasswordToken },
          { $set: { password:hashedpass, verifyToken: undefined, verifyTokenExpiry: undefined } }
        );
        if(update){
            return NextResponse.json({status:200,message:"Password has been updated successfully"})
        }
        return NextResponse.json({status:400,mesage:"THere is some error in Updating the password"})
    } catch (error) {
        return NextResponse.json({status:500,mesage:error})
    }
   
  }