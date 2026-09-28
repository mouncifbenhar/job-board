import express from "express";
import AdminController from "../controllers/AdminController.js";

const router = express.Router();

const adminController = new AdminController();

router.get("/admin", (req, res) => {
    adminController.index(req, res);
});


export default router;

