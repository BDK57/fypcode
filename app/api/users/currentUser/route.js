import { getTokendata } from "@/app/helpers/getTokendata";
import { connect } from "@/app/configDb/configDb";
import User from "@/app/models/userModel";
import { NextRequest, NextResponse } from "next/server";
connect()
export async function GET(request) {
    try {
        const currentUserid = await getTokendata(request)
        console.log("currentUserid" + currentUserid)
        const user = await User.findOne({ _id: currentUserid }).select('-password');
        return NextResponse.json({
            message: "User Found",
            data: user
        })
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 400 })
    }
}