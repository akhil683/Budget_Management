import connect from "@/lib/dbConnect";
import User from "@/models/User";
import { NextResponse } from "next/server";

//GET USER
export const GET = async () => {
  try {
    await connect();
    const users = await User.find();
    return new NextResponse(JSON.stringify(users), { status: 200 });
  } catch (e: any) {
    return new NextResponse(JSON.stringify("Something went Wrong !"), {
      status: 500,
    });
  }
};
