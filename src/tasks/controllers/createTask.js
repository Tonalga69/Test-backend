const { request, response } = require("express");

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const createTask = async (req = request, res = response) => {
  //in this case i won´t allow creating comments when creating a task
  const { body } = req;
  delete body.comments;

  const task = await prisma.task
    .create({
      data: {
        ...body,
      },
    })
    .catch((error) => console.error(error));

  if (!task) return res.status(400).json({ message: "Bad request" });

  return res.status(202).json({
    message: "created",
    data: task,
  });
};

module.exports = createTask;
