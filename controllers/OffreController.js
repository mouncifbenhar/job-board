import OffreRepository from "../repositories/OffreRepository.js";

class OffreController {

    constructor() {
        this.offreRepository = new OffreRepository();
    }

    async index(req, res) {
        const offres = await this.offreRepository.getAll();

        res.render("offers/index", {
            offres: offres
        });
    }
}

export default OffreController;