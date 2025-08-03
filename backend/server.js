// server.js
import dotenv from "dotenv";
dotenv.config(); // Load .env before anything else

import app from "./app.js";
import cloudinary from "cloudinary";

// Debug logs to check if .env variables are loaded
console.log("DEBUG ENV:");
console.log("PORT:", process.env.PORT);
console.log("MONGO_URI:", process.env.MONGO_URI);
console.log("CLOUDINARY_CLIENT_NAME:", process.env.CLOUDINARY_CLIENT_NAME);
console.log("JWT_SECRET from env:", process.env.JWT_SECRET);


// Cloudinary config
cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLIENT_NAME,
  api_key: process.env.CLOUDINARY_CLIENT_API,
  api_secret: process.env.CLOUDINARY_CLIENT_SECRET,
});

// Start server
app.listen(process.env.PORT || 5000, () => {
  console.log(`Server running at port ${process.env.PORT}`);
});
