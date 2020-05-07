const express = require("express");
const graphqlHTTP = require("express-graphql");
const schema = require("./schema");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.use(express.static("public"));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "public", "index.html"));
});

mongoose
  .connect(
    process.env.MONODB_URI ||
      "mongodb+srv://Nikita:nikitadv@cluster0-dqps1.mongodb.net/PersonalWebsite?retryWrites=true&w=majority",
    { useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false }
  )
  .then(() => {
    app.listen(PORT, (err) => {
      err
        ? console.log(err)
        : console.log(`Server is started on port ${PORT}...`);
    });
  });
