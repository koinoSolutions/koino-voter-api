/* eslint-disable */
const functions = require("firebase-functions");

const express = require("express");
// SET UP EXPRESS APP
const app = express();

app.get("/", (req, res) => {
  res.status(200).send({ data: "wordly hellos" });
});

exports.app = functions.https.onRequest(app);
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");

// });
