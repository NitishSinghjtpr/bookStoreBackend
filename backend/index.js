import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import bookRoute from "./Route/book.route.js";
import userRoute from './Route/user.route.js'

import cors from "cors";

dotenv.config();        // 1️⃣ Load environment variables

const app = express();  // 2️⃣ Create express app

app.use(cors());        // 3️⃣ Middlewares
app.use(express.json());

connectDB();            // 4️⃣ Connect Database (after env loaded)

// 5️⃣ Routes
app.get("/", (req, res) => {
  res.send("Hello World");
});

//defining routes
app.use("/book", bookRoute);
app.use("/user",userRoute); 

// 6️⃣ Start Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running at port: ${PORT}`);
});
