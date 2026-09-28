import express from "express";
import offreRoute from "./src/routes/offreRoutes.js";
import entrepriseRoute from "./src/routes/entrepriseRoutes.js";
import adminRoute from "./src/routes/adminRoutes.js";
import technologieRoute from "./src/routes/technologieRoutes.js";
const app = express();

app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.set("views","./views")
app.use(offreRoute);
app.use(entrepriseRoute);
app.use(adminRoute);
app.use(technologieRoute);



app.listen(3400, () => {
    console.log("Server running on port 3400");
});