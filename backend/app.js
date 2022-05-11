const express = require('express');
const { port } = require('./config.json');

const app = express();
console.log(__dirname);
app.use("/", express.static("../frontend/public"));

app.use("/", (req, res, next) => {
    return res.sendFile("./index.html", {root: "../frontend/public/html"})
})

app.listen(port, () => console.log(`App listening at http://localhost:${port}`));