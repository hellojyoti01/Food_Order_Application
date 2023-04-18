const mongoose = require("mongoose");
console.log(process.env.DB_URI);

mongoose.connect(process.env.DB_URI, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

//Sucefussaly connect
mongoose.connection.on("connected", () => {
	console.log(`DataBase Connection Sucefussaly `);
});

//disconnect
mongoose.connection.on("disconnect", () => {
	console.log(`Database Disconnected`);
});

//error
mongoose.connection.on("error", (e) => {
	console.log(`Some Error In Data Base ${e}`);
});

mongoose.connection.on("reconnecting", () => {
	console.log("Attempt to Reconnecting ");
});
