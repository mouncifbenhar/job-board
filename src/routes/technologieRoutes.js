import express from "express";
import TechnologieController from "../controllers/TechnologieController.js";

const router = express.Router();

const technologieController = new TechnologieController();

router.post("/admin/technologies", (req, res) => {
    technologieController.create(req, res);
});

export default router;

