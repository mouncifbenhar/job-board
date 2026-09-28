import express from "express";
import EntrepriseController from "../controllers/EntrepriseController.js";

const router = express.Router();

const entrepriseController = new EntrepriseController();

router.post("/admin/entreprises", (req, res) => {
    entrepriseController.create(req, res);
});

export default router;
