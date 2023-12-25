import mongoose, { SchemaType } from "mongoose";
import { Schema } from "mongoose";
const bookingSchema = new mongoose.Schema({
  hallId: {
    type:Schema.Types.ObjectId,
    ref:'Halls',
  },
  userId: {
    type:Schema.Types.ObjectId,
    ref:'users',
  },
  date: { type: Date, required: true },
  eventType: { type: String },
  capacity: { type: Number },
  price: { type: Number },
  description: { type: String },
  catering: { type: String },
  confirmed: { type: String, default: 'pending' },
});

const Booking = mongoose.models.Booking || mongoose.model("Booking", bookingSchema);
export default Booking;