import express from "express";
import offreRoute from "./src/routes/offreRoutes.js";

const app = express();

app.set("view engine", "ejs");
app.set("views","./views")
app.use(offreRoute);

app.listen(3000, () => {
    console.log("Server running on port 3000");
});