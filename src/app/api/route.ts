import dbConnect from "@/lib/dbConnect";
// import bcrypt from "bcryptjs";
// import UserModel from "@/model/User";

export async function POST(request: Request) {
  await dbConnect();
  try {
    const { username, email, password } = await request.json();
    const existingUserVerifiedByUsername = await UserModel.findOne({
      username,
      isVerified: true,
    });
    if (existingUserVerifiedByUsername) {
      return Response.json(
        {
          success: false,
          message: "Username is already taken !",
        },
        { status: 400 },
      );
    }
  } catch (e) {
    console.log(e);
  }
}
