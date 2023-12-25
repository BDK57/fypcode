import mongoose from "mongoose";
export async function connect() {
    try {
        mongoose.connect(process.env.MONGO_URL)
        const connection = mongoose.connection;
        connection.on('connected', () => {
            console.log("Connected Successfully")
        })

        connection.on('error', (err) => {
            console.log("Connected is not Successfully" + err)
        })
    } catch (error) {
        console.log(error)
    }
}

