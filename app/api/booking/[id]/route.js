import { NextResponse } from "next/server";
import mongoose from "mongoose";
import { connect } from '@/app/configDb/configDb';
import Booking from '@/app/models/Booking';
import User from '@/app/models/userModel';
import {getTokendata} from '@/app/helpers/getTokendata';
import {sendEmail} from '@/app/helpers/sendemaillink';
import Hall from '@/app/models/HallMode';
export async function POST(request, { params }) {
  try {
    await connect();
    console.log("phaaaaaalllll id",params.id)
    const { hallId, userId, date, eventType, capacity, description} = await request.json();
    
    const createdBooking = await Booking.create({
      hallId:hallId,
      userId:userId,
      date:date,
      eventType:eventType,
      capacity:capacity,
  });
    console.log("created booking s",createdBooking)
    if (!createdBooking)
      return NextResponse.json({ status: 400, error: "failed to book" });
    

    // console.log(`hallId: ${hallId}`);
    const ObjectId = mongoose.Types.ObjectId;
    const hallObjectId = new ObjectId(hallId);
    const details = await Hall.aggregate([
      {
        $match: {
          _id: hallObjectId,
        },
      },
      {
        $lookup: {
          from: "vendors", 
          localField: "vendorid",
          foreignField: "_id",
          as: "vendorDetails",
        },
      },
    ]);

    console.log("details",details[0])

    // console.log("details",details)
    // //get user details of person who has booked the hall
    const user = await User.findOne({ _id: userId });
    console.log("user",user)
    //used the aggregate functin to get vendor details via hall model
    const vendorEmail = details[0].vendorDetails[0].email;
    let emailSent = await sendEmail(
      vendorEmail,
      "Booking Confirmation",
      `We hope this message finds you well.

    We are delighted to inform you that a new booking has been made for ${createdBooking.date} at ${details[0].name}. This booking has been confirmed and your services have been requested by our valued customer.
    
    Details of the booking:
    
    Event: ${createdBooking.eventType}
    Date: ${createdBooking.date}
    Venue: ${details[0].name}
    Customer Name: ${user.username}
    Contact Information: ${user.email}`
    );

    if (!emailSent)
      return NextResponse.json({
        status: 400,
        error: "failed to send confirmation email to vendor",
      });

    //success email to user
    emailSent = await sendEmail(
      user.email,
      "Acknowledgement Request Forwarded",
      `
      Dear ${user.username},

      I hope this message finds you well.

      I wanted to inform you that your request for booking has been duly acknowledged and forwarded to our associated vendor for their immediate attention and necessary action. 
      We highly value your request and are committed to ensuring its timely and effective resolution.
      Details of the booking:
    
      Event: ${createdBooking.eventType}
      Date: ${createdBooking.date}
      Venue: ${details[0].name}`
    );

    if (!emailSent)
      return NextResponse.json({
        status: 400,
        error: "failed to send confirmation email to user",
      });

    return NextResponse.json({
      status: 200,
      message:
        "succesfully requested, now wait until the vendor has confirmed the booking",
    });
  } catch (error) {
    console.log("errr",error)
    return NextResponse.json({ status: 400, error: error.message });
  }
}



export async function GET(request, { params }) {
  try {
    await connect();

    console.log("params",params)
    const hallId = params.id;

    const bookings = await Booking.find({
      hallId: hallId,
      confirmed: "true",
    }).select("date");

    if (!bookings || bookings==[])
      return NextResponse.json({ status: 404, error: "no bookings found" });
    
    console.log(bookings)
    return NextResponse.json({ status: 200, dates: bookings });

  } catch (error) {
    return NextResponse.json({ status: 400, error: error.message });
  }
}
