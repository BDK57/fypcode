import { getTokendata } from "@/app/helpers/getTokendata";
import { NextResponse } from "next/server";
import User from "@/app/models/userModel";
import { connect } from "@/app/configDb/configDb";
export const POST = async (request,{params}) => {
  try {
    await connect();
    console.log("paramsi",params)
    const userId = await getTokendata(request);

    const checkuser = await User.findOne({ _id: userId });
    console.log(checkuser)
    if(checkuser.favourites.length>0){
      if (checkuser.favourites.includes(params.id)) {
        return NextResponse.json({
          status: 400,
          message: "ID already exists in favorites",
        });
      }
    }
   

    const user = await User.findOneAndUpdate(
      { _id: userId },
      { $push: { favourites: { $each: [params.id] } } },
      { new: true }
    );
    console.log(user);
    if (!user)
      return NextResponse.json({
        status: 400,
        message: "failed to add to favourites",
      });
    return NextResponse.json({ status: 200, message: "added to favourites" , data:user });
  } catch (error) {
    console.log("nnn",error)
    return NextResponse.json({ status: 400, error: error.message });
  }
}

