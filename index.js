import express from "express";
import "dotenv/config";
import { connectDB } from "./config/db.js";
import firstControllerRoutes from "./routes/firstControllerRoutes.js";

const app = express();
const port = process.env.PORT || 5000;
connectDB()

//for next day

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//next day


app.use("/api/first", firstControllerRoutes);


app.listen(port, () => {
  console.log(`server is running at: ${port}`);
});
