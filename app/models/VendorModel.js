import mongoose from 'mongoose'
import { Schema } from 'mongoose'
const VendorSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "Please enter your username"],
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    userid:{
        type: Schema.Types.ObjectId, 
        ref: 'users' 
    },
    phone:{
        type:Number
    },
    Address:{
        type:String
    }
})


const Vendor = mongoose.models.vendor || mongoose.model("vendor", VendorSchema)
export default Vendor