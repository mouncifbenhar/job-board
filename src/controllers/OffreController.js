import OffreRepository from "../repositories/OffreRepository.js";
import EntrepriseRepository from "../repositories/EntrepriseRepository.js";
import TechnologieRepository from "../repositories/TechnologieRepository.js";

class OfferController {

    constructor() {

        this.OffreRepository = new OffreRepository();

        this.entrepriseRepository = new EntrepriseRepository();

        this.technologieRepository = new TechnologieRepository();

    }


    async getAll(req, res) {

        try {

            const offres = await this.OffreRepository.getAll();

            res.render("offres/index", {
                offres: offres
            });

        } catch (error) {

            console.error(error);

            res.status(500).send("error server");

        }

    }


    async getById(req, res) {

        try {

            const id = req.params.id;

            const offre =
                await this.OffreRepository.getById(id);


            if (!offre) {

                return res.status(404).send("Offre not found");

            }


            return res.render("offres/offer_detail", {
                offre: offre
            });

        } catch (error) {

            console.error(error);

            res.status(500).send("error server");

        }

    }


    async showCreateForm(req, res) {

        try {

            const entreprises =
                await this.entrepriseRepository.getAll();


            const technologies =
                await this.technologieRepository.getAll();


            res.render("offres/offer_form", {

                entreprises: entreprises,
                technologies: technologies

            });

        } catch (error) {

            console.error(error);

            res.status(500).send("error server");

        }

    }
    async create(req, res) {
    try {

        const data = {
            title: req.body.title,
            ville: req.body.ville,
            type_contrat: req.body.type_contrat,
            date_publication: new Date(req.body.date_publication),
            description_courte: req.body.description_courte,
            description_longue: req.body.description_longue,
            profil_recherche: req.body.profil_recherche,
            lien_candidature: req.body.lien_candidature,
            email_contact: req.body.email_contact,
            entreprise_id: Number(req.body.entreprise_id)
        };

        let technologiesIds = req.body["technologies[]"];

        if (!technologiesIds) {
            technologiesIds = [];
        }

        if (!Array.isArray(technologiesIds)) {
            technologiesIds = [technologiesIds];
        }

        technologiesIds = technologiesIds.map(id => Number(id));

        await this.OffreRepository.create(data, technologiesIds);

        res.redirect("/offres/offer_form");

    } catch (error) {
        console.error(error);
        res.status(500).send("error server");
    }
}

}

export default OfferController;

