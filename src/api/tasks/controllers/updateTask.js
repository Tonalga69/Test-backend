const { request, response } = require("express");

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();



const updateTask= async(req= request, res= response)=>{
    try {

        const {owner, id }= req.params;

        const {body} = req; 
        if(body.completionDate)
        body.completionDate= new Date(body.completionDate)

        const task= await prisma.task.findFirst({
            where:{
                id: id, 
                owner: owner
            }, 
            select: {id: true}}).catch(error=>console.error(error)); 
    
        if(!task) return res.status(404).json({message: "not found"}); 

        const updatedtask = await prisma.task.update({
            where:{
                id: id
            }, 
            data:{
                ...body
            }
        }).catch(error=> console.error(error)); 

        if(!updatedtask) return res.status(400).json({message: "something went wrong"}); 

        return res.status(200).json(updatedtask)

    } catch (error) {
        res.status(500).json({message: "internal server error"}); 

    }
}
module.exports= updateTask; 
