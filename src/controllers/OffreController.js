import OffreRepository from "../repositories/OffreRepository.js";

class OfferController {
    constructor() {
        this.OffreRepository = new OffreRepository();
    }

    async getAll(req, res) {
        try {
            const offres = await this.OffreRepository.getAll();

            res.render("offres/index", {
                offres: offres
            })
        } catch (error) {
            console.error(error);
            res.status(500).send("error server")
        }
    }
    async getById(req, res) {
        try {
            const id = req.params.id
            const offre = await this.OffreRepository.getById(id);

            if (!offre) {
                return res.status(404).send("Offre not found")
            }

            return res.render("offres/offer_detail", {
                offre: offre
            })
        } catch (error) {
            console.error(error);
            res.status(500).send("error server")
        }
    }

}

export default OfferController