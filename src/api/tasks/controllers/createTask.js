const { request, response } = require("express");

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const createTask = async (req = request, res = response) => {

  try {
    const { body } = req;
    const completionDate= new Date(body.completionDate)
  
    const task = await prisma.task
      .create({
        data: {
          ...body,
          completionDate
        },
      })
      .catch((error) => console.error(error));
  
    if (!task) return res.status(400).json({ message: "Bad request" });
  
    return res.status(201).json({
      data: task,
    });
    
  } catch (error) {
    res.status(500).json({message: "internal server error"}); 
  }
  //in this case i won´t allow creating comments when creating a task
};

module.exports = createTask;
