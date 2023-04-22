const { request, response } = require("express");

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getTaskInfo = async (req = request, res = response) => {
  try {
    const { id, owner } = req.params;
   

    const task = await prisma.task
      .findFirst({
        where: {
          id: id,
          owner
        },
      })
      .catch((error) => console.error(error));

    if (!task) return res.status(404).json({ message: "not found" });

    return res.status(200).json(task);
  } catch (error) {
    return res.status(500).json({ message: "internal server error" });
  }
};
module.exports = getTaskInfo;
