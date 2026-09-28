import OffreRepository from "../repositories/OffreRepository.js";
class AdminController {

    constructor(){
       this.OffreRepository = new OffreRepository()
    }
    
    index(req, res) {

        res.render("Admin/index");

    }

async getAll(req, res) {

        try {

            const offres = await this.OffreRepository.getAll();

            res.render("Admin/index", {
                offres: offres
            });

        } catch (error) {

            console.error(error);

            res.status(500).send("error server");

        }

    }
}

export default AdminController;

