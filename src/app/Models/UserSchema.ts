import { Schema, model } from "mongoose";

const userSchema = new Schema(
  {
    clerkUserId: {
      type: String,
      required: true,
      unique: true,
    },
    userEmail: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const User = model("user-model", userSchema);
