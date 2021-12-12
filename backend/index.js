const express = require("express");
const connectDB = require("./config/db");
const userRoutes = require("./routes/UserRoutes");
const imageUploadRoutes = require("./routes/ImageUploadRoutes");
const dotenv = require("dotenv");
const { notFound, errorHandler } = require("./middleWares/ErrorMiddleware");
var cors = require("cors");

const app = express();
connectDB(); //connet to database
const PORT = process.env.PORT || 5000; // port that is use for backend
app.use(cors());
app.use(express.json());
dotenv.config(); //include .env variables

app.use("/api/users", userRoutes); // user routes for login,register,updateprofile,getuserinfo
app.use("/api/imageUpload", imageUploadRoutes); // upload images for users
app.get("/", (req, res) => {
  res.send("API is running.....");
});
app.use("/Images", express.static("userImage")); // make userImage folder static to show images in frontend

// -------------------------- error handling--------------------------
app.use(notFound);
app.use(errorHandler);

app.listen(PORT, console.log(`Server on ${PORT}`));
