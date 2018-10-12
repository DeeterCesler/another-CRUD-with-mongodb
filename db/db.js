const mongoose = require("mongoose");

const connectionString = "mongodb://localhost"

mongoose.connect(connectionString);

mongoose.connection.on("connected", () => {
    console.log(`mongoose connected at ${connectionString}`);
});

mongoose.connection.on("disconnected", () => {
    console.log("mongoose disconnected");
});

mongoose.connection.on("error", (err) => {
    console.log(`mongoose error: ${err}`);
});