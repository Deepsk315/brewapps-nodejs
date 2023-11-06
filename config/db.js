import mongoose from "mongoose";
import chalk from "chalk";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
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
