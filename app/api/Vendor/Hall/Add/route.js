import { NextResponse } from 'next/server';
import Vendor from '@/app/models/VendorModel';
import { connect } from '@/app/configDb/configDb';
import Hall from '@/app/models/HallMode';

export const POST = async (req) => {
    connect();
    const { vendorid, name, Description, capacity, coverimage, galleryImage, location, priceRange ,additonalDescription , city , Maplocation , VenueType , StaffMembers , ParkingSpaceAvailiable , ParkingSpace , Catering , Price , Amenities } = await req.json();

    try {

        const vendor = await Vendor.findOne({ _id: vendorid });
        console.log("vendor", vendor);

        console.log(galleryImage)

        if (!vendor) {
            return NextResponse.json({ status: 404, msg: "You have to be a Vendor in order to add halls" });
        }
        

        const newHall = await Hall.create({
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
        });

        console.log("Hall data is", newHall);

        if (newHall) {
            return NextResponse.json({ status: 200, msg: "Hall has been added" });
        }

        return NextResponse.json({ status: 400, msg: "Hall not added" });

    } catch (error) {
        return NextResponse.json({ status: 400, msg: error.message });
    }
};
