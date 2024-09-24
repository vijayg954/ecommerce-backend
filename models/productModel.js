import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String, required: true },
  image: { type: Array, required: true },
  subCategory: { type: String, required: true },
  sizes: { type: Array, required: true },
  bestSeller: { type: Boolean, required: true },
  date: { type: Number, required: true },
},
{timestamps:true});
const ProductModel = mongoose.model("Product", productSchema);
// const ProductModel = mongoose.models.product || mongoose.model("Product", productSchema);
export default ProductModel;
