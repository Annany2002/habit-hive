import { connect } from "mongoose";

export async function connectToDB() {
  try {
    await connect(process.env.MONGO_URL as string);
    console.log("Db connected");
  } catch (error) {
    console.log(error);
  }
}
