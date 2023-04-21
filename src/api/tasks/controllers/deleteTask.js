const { request, response } = require("express");

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const deleteTask = async (req = request, res = response) => {
  try {
    const { id, owner } = req.params;
    if (!id || typeof id !== "string" || !owner || typeof id !== "string")
      return res.status(400).json({ message: "bad request" });

    const task = await prisma.task
      .findFirst({
        where: {
          id: id,
          owner 
        },
      })
      .catch((error) => console.error(error));

    if (!task) return res.status(404).json({message: "not found"});

    const deletedTask= await prisma.task.delete({
      where:{
        id: id
      }
    }); 

    return res.status(204).json(deletedTask); 
  } catch (error) {
    return res.status(500).json({ message: "internal server error" });
  }
};
module.exports= deleteTask; 
