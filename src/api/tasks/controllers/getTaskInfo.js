const { request, response } = require("express");

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getTaskInfo = async (req = request, res = response) => {
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
        include: {
          comments: true,
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
