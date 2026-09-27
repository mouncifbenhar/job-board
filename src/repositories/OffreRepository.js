import prisma from "../config/prisma.js";

class OffreRepository{
    async getAll(){
        return await prisma.offre.findMany();
    }
}

export default OffreRepository;