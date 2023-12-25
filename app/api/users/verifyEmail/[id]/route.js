import { NextResponse } from "next/server"; 
import { connect } from "@/app/configDb/configDb";
import User from "@/app/models/userModel";
export async function POST(request, { params }) {
  await connect();
  try {
    const { id } = params;

    const user = await User.findOneAndUpdate({ _id: id }, { $set: { isVerified: true } });
    if (!user) return NextResponse.json({ status: 401, error: 'Failed to verify the user' });

    return NextResponse.json({ status: 200, message: 'Email verified' });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ status: 500, error: error.message });
  }
}