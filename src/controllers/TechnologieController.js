import TechnologieRepository from "../repositories/TechnologieRepository.js";

class TechnologieController {

    constructor() {
        this.technologieRepository = new TechnologieRepository();
    }

    async create(req, res) {

        try {

            const technologie_name = req.body.technologie_name;

            await this.technologieRepository.create(technologie_name);

            res.redirect("/admin");

        } catch (error) {

            console.error(error);

            res.status(500).send("error server");

        }

    }

}

export default TechnologieController;

