// import { connect } from '@/configDb/configDb'
// import Hall from '@/models/HallMode'
import Hall from '@/app/models/HallMode';
import { connect } from '@/app/configDb/configDb';
import { NextResponse } from 'next/server';
export const GET = async (reques, { params }) => {
    try {
        console.log("asdansdl",params.id)
        connect();
        const Halldata = await Hall.findById(params.id)
        if(Halldata){
            return  NextResponse.json({data:Halldata,status:200})
        }        
        return  NextResponse.json({msg:"No hall with Specified Id",status:400})

    } catch (error) {
        return  NextResponse.json({Error:"Internal Server Error",  status: 500 });
    }
}


export const PATCH = async (request,{params}) => {
  try {

    await connect();
    console.log(params)
    const { vendorid, name, Description, capacity, coverimage, galleryImage, location, priceRange ,additonalDescription , city , Maplocation , VenueType , StaffMembers , ParkingSpaceAvailiable , ParkingSpace , Catering , Price , Amenities } = await request.json();
    console.log("vendor i",vendorid)
    const existingHall = await Hall.findById(params.id)
    console.log(existingHall)
    if(!existingHall){
        return  NextResponse.json({msg:"No hall has been found",status:404})
    }
   
    const updatedudata = await Hall.findByIdAndUpdate(params.id,{
        name: name,
            Description: Description,
            additonalDescription:additonalDescription,
            vendorid: vendorid,
            capacity: capacity,
            VenueType:VenueType,
            StaffMembers:StaffMembers,
            Catering:Catering,
            ParkingSpace:ParkingSpace,
            ParkingSpaceAvailiable:ParkingSpaceAvailiable,
            Price: Price,
            Amenities:Amenities,
            coverimage: coverimage,
            galleryImage: galleryImage,
            location: location,
            city:city,
            Maplocation:Maplocation,
            priceRange: priceRange

    },{new:true})
    if(updatedudata){
        return NextResponse.json({msg:"Hall data has been Updated",status:200})
    }

    return NextResponse.json({msg:"Hall data not Updated Try Agin!",status:404})
   
  } catch (error) {
    console.log("Error",error)
    return  NextResponse.json({error:"Internal Server Error",status:500})

  }
}


export const DELETE = async (request, { params }) => {
    try {
        console.log("delete",params.id)
        await connect()
        const data = await Hall.findByIdAndDelete(params.id);
        console.log("data",data)
        if(data){
            return NextResponse.json({msg:"Hall has been deleted successfully",status:200});
        }
        return NextResponse.json({msg:"Hall not Found",status:200});
    } catch (error) {
        console.log("err",error)
        return NextResponse.json({Error:"Error deleting prompt",status: 500});
    }
};