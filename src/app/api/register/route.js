import Connection from "@/database/config";
import User from "@/app/models/user.js";

export const POST = async (NextRequest) => {
  try {
    Connection();
    const body = await NextRequest.json();
    const { name, email, password } = body;
    

    if (!name || !email || !password) {
      return new Response.json("All fields are required", { status: 400 });
    }
     
    const existingUser = await User.findOne({ email: email });
    if (existingUser) {
      return new Response(
        JSON.stringify(
          { message: "User already exists" },
          { status: 409, headers: { "Content-Type": "application/json" } }
        )
      );
    }
     
    const newUser = new User({
      name: name,
      email: email,
      password: password,
      createdAt: new Date(),
    });
     
    await newUser.save();
    return new Response(
      JSON.stringify({ message: "Registration successful" }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    console.log("Error in registration: ", error.message);
    return new Response(JSON.stringify({ message: "Internal Server Error" }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
};
