import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    fullname: {
      type: String,
      required: true,
      minLength: 4,
      maxLength: 20,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    purchasedBooks: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Book",
      },
    ],
    cart: [
  {
    book: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Book",
    },
    quantity: {
      type: Number,
      default: 1,
    },
  },
],

  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;
