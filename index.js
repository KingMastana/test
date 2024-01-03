const express = require("express");
const Firestore = require("@google-cloud/firestore");

const db = new Firestore();
const app = express();
app.use(express.json());
const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log("Mastana REST API listening on port ", port);
});

app.get("/:breed", async (req, res) => {
  const breed = req.params.breed;
  const query = db.collection("dogs").where("name", "==", breed);
  const querySnapshot = await query.get();
  if (querySnapshot.size > 0) {
    res.json(querySnapshot.docs[0].data());
  } else {
    res.json({ status: "Not found!" });
  }
});
