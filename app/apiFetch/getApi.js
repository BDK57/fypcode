import axios from "axios";


export const GetHalls = async (params) => {
    try {
        const data = await axios.get(params);
        if(data.status == 200){
            return data.data.data;
        }
    } catch (error) {
        return error;
    }
}


export const GET_SINGLEHALL  = async (params) => {
    try {
        const data = await axios.get(params);
        return data.data.data
    } catch (error) {
        return error;
    }
}


export const HallFavourite = async (params,title) => {
   try {
      const response = await axios.post(params)
      console.log("reponse is",response.data)
      if(response.data.status == 200){
        return response.data;
      }
      return response.data;
   } catch (error) {
      return error;
   }
}