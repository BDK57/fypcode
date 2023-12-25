
import { NextResponse } from "next/server";
import User from "@/app/models/userModel";
import { connect } from "@/app/configDb/configDb";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export async function POST(request) {
    await connect();
    try {
        const body = await request.json();

        const { email, password } = body;

        const user = await User.findOne({ email });
        console.log("user",user)
        if (!user || user == null || user == undefined) {
            return NextResponse.json({status:400,error:"User doesnot exists"})
        }
        

        if(!user.isVerified) return NextResponse.json({status:401,error:'email is not verified. Verify the link sent to your email!!!'})
        const valid = await bcrypt.compare(password, user.password);
          
        console.log("valid is",valid)
        if (!valid) {
            return NextResponse.json({status:401,error:"Invalid credentials"})
        }

        
        
        const tokenData = {
            id: user._id,
            username: user.username,
            email: user.email,
        };

        console.log("sssyat",tokenData)
        const token = await jwt.sign(tokenData, process.env.JWT_TOKEN_SECRET, {
            expiresIn: "1d",
        });
        const response = NextResponse.json({
            message: "Logged in successfully",
            status: 200,
            user
    });

        response.cookies.set("token", token, { httpOnly: true });
        return response;
    } catch (error) {
        console.log(error);
        return NextResponse.json({ error: error.message ,status: 500 });
    }
}