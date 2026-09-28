import prisma from "../config/prisma.js";

class EntrepriseRepository {

    async create(company_name) {

        return await prisma.entreprise.create({
            data: {
                company_name: company_name
            }
        });

    }
    async getAll() {

    return await prisma.entreprise.findMany({
        orderBy: {
            company_name: "asc"
        }
    });

    }

}

export default EntrepriseRepository;
