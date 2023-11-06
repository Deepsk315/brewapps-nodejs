import mongoose from "mongoose";
import chalk from "chalk";

const connectDB = async () => {
  const mongo_uri =
    "mongodb+srv://deepsk3697:sOSiglmkvRYLQxod@cluster0.mdvtrct.mongodb.net/?retryWrites=true&w=majority";
  try {
    const conn = await mongoose.connect(mongo_uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(chalk.blue(`MongoDB Connected: ${conn.connection.host}`));
  } catch (err) {
    console.log(chalk.red(`Error: ${err.message}`));
    process.exit(1);
  }
};

export default connectDB;
