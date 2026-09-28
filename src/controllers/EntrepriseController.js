import EntrepriseRepository from "../repositories/EntrepriseRepository.js";

class EntrepriseController {

    constructor() {
        this.entrepriseRepository = new EntrepriseRepository();
    }

    async create(req, res) {

        try {

            const company_name = req.body.company_name;

            await this.entrepriseRepository.create(company_name);

            res.redirect("/admin");

        } catch (error) {

            console.error(error);

            res.status(500).send("error server");

        }

    }

}

export default EntrepriseController;

