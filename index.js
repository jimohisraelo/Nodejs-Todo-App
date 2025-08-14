const express = require("express");

const PORT = 4444;

const app =  express();

app.set("view engine", "ejs");

app.listen(PORT, () => {
    console.log(`Serve is running on port ${PORT}`);
});