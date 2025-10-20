/*é no model que fazemos a consulta para o banco de dados
ex:SELECT * FROM bruxos; porém estamos usando o PRISMA que abstrai o comando SQL*/

import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient();


export const findAll = async () => {
    return await prisma.bruxo.findMany({
        orderBy: { nome: 'asc'}
    })
}

//Crio variavel find by id e ja exporto
export const findById = async (id) => {
    return await prisma.bruxo.findUnique({
        whre: { id: Number(id) }
    });
}