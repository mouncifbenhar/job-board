import prisma from "../config/prisma.js";

class OffreRepository{
    async getAll(){
        return await prisma.offre.findMany({
            include:{
                entreprise:true,
                offre_technologie:{
                    include:{
                        technologie: true
                    }
                }
            }
        });
    }
}

export default OffreRepository;