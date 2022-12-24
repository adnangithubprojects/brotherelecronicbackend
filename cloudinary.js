import cloudinary from "cloudinary"
cloudinary.config({
  cloud: {
    cloudName: process.env.CLOUD_NAME,
    apikey: process.env.API_KEY,
    apiscret: process.env.API_SECRET,

  }
});