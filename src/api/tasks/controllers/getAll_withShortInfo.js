const { request, response } = require("express");

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();


const getAll_withShortInfo= async(req= request, res= response)=>{
    try {
        const {owner}= req.params; 
        if(!owner && typeof owner!=="string") return res.status(400).json({message: "Bad request, owner field needed"});

        const tasks= await prisma.task.findMany({
            where:{
                owner: owner
            },
            select:{
                id: true, 
                status: true, 
                title: true, 
                owner: true, 
                description: true,
                completionDate: true
            }
        }); 

        return res.status(200).json(tasks); 
    } catch (error) {
        return res.status(500).json({message: "Internal server error"})
    }
}
module.exports= getAll_withShortInfo; 