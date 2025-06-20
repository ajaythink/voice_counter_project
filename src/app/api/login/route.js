import User from "@/app/models/user";
import Connection from "@/database/config";
import jwt from "jsonwebtoken";

export const POST = async (NextRequest) => {
  try {
    Connection();
    const body = await NextRequest.json();
    const { email, password } = body;
    if (!email || !password) {
      return new Response(
        JSON.stringify(
          { message: "Please fill all fields." },
          { status: 400, headers: { "Content-Type": "application/json" } }
        )
      );
    }
    console.log("email: ", email);
    const userExists = await User.findOne({ email: email });

    console.log("userExists: ", userExists);
    if (!userExists) {
      return new Response(JSON.stringify({ message: "User does not exists" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }
    if (userExists.password !== password) {
      return new Response(JSON.stringify({ message: "Invalid Credential" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }
    const tokenData = {
      id: userExists._id,
      email: userExists.email,
    };
    const token = jwt.sign(tokenData, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });

    return new Response(
      JSON.stringify({
        message: "Login successful",
        success: true,
        token,
        user: {
          id: userExists._id,
          name: userExists.name,
          email: userExists.email,
        },
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.log("Error in login: ", error.message);
    return new Response(
      JSON.stringify(
        { message: "Internal server error s" },
        { status: 500, headers: { "Content-Type": "application/json" } }
      )
    );
  }
};
