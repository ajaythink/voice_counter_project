import mongoose from 'mongoose';

const connectDB = async () => {
  try{
    await mongoose.connect(process.env.VOICE_TRACKER_USER_DATA,{useNewUrlParser: true});
    console.log("DB connected successfully");
  }
  catch(error){   
    console.error("DB connection failed: ", error.message);
    // process.exit(1);

  }
}

export default connectDB;

// return new Response(JSON.stringify({ message: "Internal Server Error" }), {
//   status: 500,
// });