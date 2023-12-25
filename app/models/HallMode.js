import mongoose from 'mongoose'
import { Schema } from 'mongoose'
const HallSchema = new mongoose.Schema({
    name: {
        type: String,
        unique:true
    },
    Description: {
        type: String,
    },
    additonalDescription:{
        type:String,
    },
    city:{
        type:String,
    },
    Maplocation:{
        type:String,
    },
    VenueType:{
        type:String,
    },
    StaffMembers:[
        {type : String , "default" : [] }
    ],
    ParkingSpaceAvailiable:{
        type:Boolean,
        default:false,
    },
    
    ParkingSpace:{
      type:Number,
    },
    Catering:{
      type:String,
    },
    location:{
        type:String
    },
    vendorid:{
        type: Schema.Types.ObjectId, 
        ref: 'vendor' 
    },
    capacity:{
        type:Number,
    },
    Price:{
        type:Number,
    },
    
    galleryImage:[{
        type:Object,
    }],

    Amenities:[
        {type : String , "default" : [] }
    ],
    
    wheelchairAccessible: {
            type:Boolean,
            default:false,
        
    },

})


const Hall = mongoose.models.Halls || mongoose.model("Halls", HallSchema)
export default Hall