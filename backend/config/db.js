import mongoose from 'mongoose'
const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_DB_URL)
        console.log(`MongoDB connected: ${conn.connection.host}`)
    } catch (error) {
        console.log(error.message)
        process.exist(1);
    }
};

export default connectDB;