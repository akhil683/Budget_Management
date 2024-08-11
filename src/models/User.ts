import mongoose, { Document, Schema, Model, model, models } from "mongoose";

const UserSchema = new Schema(
  {
    email: { type: "string", required: true, unique: true },
    username: { type: "string", required: true, unique: true },
    password: { type: "string", required: true, unique: true },
  },
  {
    timestamps: true,
  },
);
const User = models.User || model("User", UserSchema);
export default User;

// Define an interface representing a document in MongoDB
// interface IUser extends Document {
//   username: string;
//   email: string;
//   subscription: string;
//   budgets: string[];
// }

// Define the Mongoose schema for the User model
// const UserSchema: Schema = new Schema(
//   {
//     username: { type: String, required: true },
//     email: { type: String, required: true },
//     subscription: { type: String, required: true },
//     budgets: { type: [String], required: true },
//   },
//   {
//     timestamps: true,
//   },
// );

// Export the model and attach the interface
// const User: Model<IUser> =
//   mongoose.models.User || model<IUser>("User", UserSchema);
//
// export default User;
