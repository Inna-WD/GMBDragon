const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 3000;

app.use("/core", express.static(path.join(__dirname, "core")));
app.use("/", express.static(path.join(__dirname, "src")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "/src/index.html"));
});

app.listen(port, () => console.log(`Web app up and running on port: ${port}!`));
