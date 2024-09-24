import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    cartData: { type: Object, default: {} },
  },
  { minimize: false }
);

const UserModel = mongoose.model("User", userSchema);
// const UserModel =mongoose.models.user || mongoose.model("User", productSchema);

export default UserModel;
