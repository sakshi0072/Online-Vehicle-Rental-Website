const express = require("express");
const Cors = require("cors");
const connectDB = require("./config/db");
const upload = require("./config/multer");
const userRoutes = require("./routes/userRoute");
// API config
const app = express();
const port = process.env.PORT || 8000;

// Middlewares
app.use(express.json());
app.use(Cors());

app.use('/user', userRoutes)




// Connect to MongoDB
connectDB();

// Image upload route
app.post("/imageupload", async (req, res) => {
  try {
    upload.single("avatar1")(req, res, function (err) {
      if (!req.file) {
        return res.status(400).send("Please select an image to upload.");
      } else if (err instanceof multer.MulterError) {
        return res.status(500).send(err.message);
      } else if (err) {
        return res.status(500).send(err.message);
      }
      res.status(200).send("Image uploaded successfully.");
    });
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error during file upload.");
  }
});

// Listener
app.listen(port, () => console.log(`Listening on localhost:${port}`));
