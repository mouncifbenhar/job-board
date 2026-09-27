import OffreRepository from "../repositories/OffreRepository.js";

class OfferController {
    constructor(){
        this.OffreRepository = new OffreRepository();
    }

    async getAll(req ,res){
        try{
          const offres = await this.OffreRepository.getAll();

          res.render("offres/index",{
            offres: offres
          })
        }catch(error){
            console.error(error);
            res.status(500).send("error server")
        }
    }

}

export default OfferController