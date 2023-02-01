import { Document, model, Schema } from "mongoose";
import { iUser } from "../interface/user";
import isEmail from "validator/lib/isEmail";

interface userSchema extends Document, iUser {}

const userSchema: Schema<userSchema> = new Schema(
  {
    name: {
      type: String,
      required: [true, "Please Enter Your name"],
    },
    email: {
      type: String,
      lowercase: true,
      required: [true, "Please enter Your email"],
      unique: true,
      trim: true,
      validate: [isEmail, "Please Provide A vaild Email"],
    },
    passowrd: {
      type: String,
      required: [true, "Please Enter A password"],
      minlength: 6,
    },
    confirmPassword: {
      type: String,
      required: [true, "Please Enter A password"],
      minlength: 6,
    },
    cart: [
      {
        items: {
          products: Schema.Types.ObjectId,
          ref: "product",
        },
        quantity: Number,
      },
    ],
  },
  {
    versionKey: true,
    timestamps: true,
  }
);

export default model<userSchema>("AuthSet06", userSchema);
