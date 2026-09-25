import express from "express";
import OffreController from "../controllers/OffreController.js";

const offreRoute = express.Router();

const offreController = new OffreController();

offreRoute.get("/offers", (req, res) => {
    offreController.index(req, res);
});

export default offreRoute;