import mongoose from "mongoose";


const mongoURL =
  "mongodb+srv://user:test1234@cluster0.nggbetm.mongodb.net/test";
export const db2 = async () => {
  try {
    mongoose.connect(mongoURL);
    console.log("connections is Sucessful");
  } catch (error) {
    console.log(error);
  }
};
