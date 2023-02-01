import { Document, Mongoose, model, Schema } from "mongoose";
import { iProduct } from "../interface/product";

interface productSchema extends Document, iProduct {}

const productSchema: Schema<productSchema> = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    price: { type: Number, required: true },
    productImage: { type: String, required: true },
    category: { type: String, required: true },
    rating: { type: Number, required: true },
  },
  {
    timestamps: true,
    versionKey: true,
  }
);

const productModel = model<productSchema>("product", productSchema);

export default productModel;
