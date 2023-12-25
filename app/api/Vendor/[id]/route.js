import { NextResponse } from 'next/server';
import { connect } from '@/app/configDb/configDb';
import Vendor from '@/app/models/VendorModel';
export const GET = async (reques, { params }) => {
    try {
        console.log("user id is",params.id)
        connect();
        const vendordata = await Vendor.find({userid:params.id})
        if(vendordata){
            return  NextResponse.json({data:vendordata,status:200})
        }        
        return  NextResponse.json({msg:"NOt found",status:400})

    } catch (error) {
        return  NextResponse.json({Error:"Internal Server Error",  status: 500 });
    }
}
