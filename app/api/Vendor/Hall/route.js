import Hall from '@/app/models/HallMode';
import { connect } from '@/app/configDb/configDb';
import { NextResponse } from 'next/server';
export const GET = async () => {
  try {
   await connect();
    const Halldata = await Hall.find({}).select("-uid");
    console.log("hall data is",Halldata)
    if(Halldata){
        const response = {
            Halldata,
           status: 200,
        }; 
        return NextResponse.json({ data:Halldata });
    }
    return NextResponse.json({msg:"No halls yet been added To show",status:201})
  } catch (error) {
    return  NextResponse({status:500,msg:error})
  }
}

