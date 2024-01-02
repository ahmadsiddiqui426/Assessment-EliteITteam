import mongoose from "mongoose";

const connectDB = () => {
    mongoose.set('strictQuery', true)
    const username = encodeURIComponent("zebu888888");
    const password = encodeURIComponent("BatmanZ");
    const url = `mongodb+srv://${username}:${password}@cluster0.0s2ped1.mongodb.net/?retryWrites=true&w=majority`

    mongoose.connect(url)
        .then(() => console.log("MongoDB connected"))
        .catch((err) => console.log(err));
}

export default connectDB;