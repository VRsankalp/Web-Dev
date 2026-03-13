const express = require("express");
const multer = require("multer");
const path = require("path");

const app = express();

// storage configuration
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "uploads/");
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ storage: storage });

// serve frontend
app.use(express.static("public"));

// image upload route
app.post("/upload", upload.single("image"), (req, res) => {
    res.json({
        message: "Image uploaded successfully",
        file: req.file
    });
});

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});