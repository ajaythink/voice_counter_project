import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name:{
    type: String,
    required: true,
  },
  email:{
    type:String,
    required: true,
    unique: true,
  },
  password:{
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const User = mongoose.models.voiceusers || mongoose.model("voiceusers", userSchema);

export default User;