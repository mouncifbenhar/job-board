import express from "express";
import offreRoute from "./router/offreRoutes.js";

const app = express();

app.set("view engine", "ejs");
app.use(offreRoute);

app.listen(3000, () => {
    console.log("Server running on port 3000");
});