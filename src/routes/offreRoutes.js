import express from "express";
import OfferController from "../controllers/OffreController.js";

const router = express.Router()

const OffreController = new OfferController();

router.get("/",(req,res)=> {OffreController.getAll(req,res)})
router.get("/offer_detail/:id",(req,res)=> {OffreController.getById(req,res)})
export default router