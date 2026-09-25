import db from "../config/db.js";
import Offre from "../models/Offre.js";

class OffreRepository {

    async getAll() {
        const [rows] = await db.query("SELECT * FROM offre");

        return rows.map(row => new Offre(
            row.id,
            row.title,
            row.ville,
            row.type_contrat,
            row.date_publication,
            row.description_courte,
            row.description_longue,
            row.profil_recherche,
            row.lien_candidature,
            row.email_contact,
            row.entreprise_id
        ));
    }

}

export default OffreRepository;