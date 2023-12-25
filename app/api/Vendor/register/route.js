import User from '@/app/models/userModel';
import Vendor from '@/app/models/VendorModel';
import { connect } from '@/app/configDb/configDb';
import { NextResponse } from 'next/server';
// IMPORT prompt
export const POST = async (req) => {
    connect();
    const {userid,username,email , phone} = await req.json();

    try {
        const user = await User.findOne({_id:userid})
        console.log("user is",user)
        if(!user){
            return NextResponse.json({status:404,msg:"You have to Registered first"})
        }

        const vendoruser = await Vendor.create({
            username: username,
            email: email,
            phone:phone,
            userid:userid
        })
       
        
        console.log("vendor user is",vendoruser)
        if(vendoruser){
            const updateduserstatus = await User.findByIdAndUpdate(userid,{
                usertype:"vendor"
            },{new:true})
            console.log(updateduserstatus)
            if(updateduserstatus){
                return NextResponse.json({status:200,msg:"Vendor has beeen Registered",data:vendoruser})
            }
        }

        return NextResponse.json({status:400,msg:"Vendor not Added",})

        
    } catch (error) {
        console.log(error)
        return NextResponse.json({status:400,msg:"Vendor not Added"})
    }
} 