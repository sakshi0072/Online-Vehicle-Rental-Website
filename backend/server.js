// import express, { Router } from "express";
const express = require("express");
// import mongoose from "mongoose";
const mongoose = require("mongoose");
// import  {dirname} from "path";
const path = require("path");
// import Cors from "cors";
const Cors = require("cors");
// import multer from "multer";
const multer = require("multer");

// import driver from "./Driverdb.js";
const driver = require("./Driverdb.js");
const Vehicle = require("./VehicleDb.js");
const sign = require("./signDb.js");

//api config
const app = express();
const port = process.env.PORT || 8000;
const connection_url =
  "mongodb+srv://root:root@cluster0.ruwt9jl.mongodb.net/?retryWrites=true&w=majority";

//Middlewares
app.use(express.json());
app.use(Cors());

//DB config
mongoose.connect(connection_url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//API Endpoints
app.get("/", (req, res) => res.status(200).send("Hello!!!"));

app.post("/drivers", (req, res) => {
  const DriverInfo = req.body;

  driver.create(DriverInfo, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});

app.get("/drivers", (req, res) => {
  driver.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});

app.post("/sign", (req, res) => {
  const signInfo = req.body;

  sign.create(signInfo, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});

app.get("/sign", (req, res) => {
  sign.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});

app.get("/login", (req, res) =>{
  sign.findOne({Email:req.body.Email})
  .then()
  .catch((e) =>{
    res.status(404).send({
      message: "Email not Found",
      e
    })
    alert('Email Not Found')
  })
})


app.post("/Vehicle", (req, res) => {
  const VehicleInfo = req.body;

  Vehicle.create(VehicleInfo, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});

app.get("/Vehicle", (req, res) => {
  Vehicle.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});

const storage1 = multer.diskStorage({
  destination: path.join(__dirname, "./uploads/", "Photo"),
  filename: function (req, file, cb) {
    // null as first argument means no error
    cb(null, Date.now() + "-" + file.originalname);
  },
});

app.post("/imageupload", async (req, res) => {
  try {
    // 'avatar' is the name of our file input field in the HTML form

    let upload = multer({ storage: storage1 }).single("avatar1");

    upload(req, res, function (err) {
      // req.file contains information of uploaded file
      // req.body contains information of text fields

      if (!req.file) {
        return res.send("Please select an image to upload");
      } else if (err instanceof multer.MulterError) {
        return res.send(err);
      } else if (err) {
        return res.send(err);
      }

    });
  } catch (err) {
    console.log(err);
  }
});


//Listener
app.listen(port, () => console.log(`Listining on localhost: ${port}`));
