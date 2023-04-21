const { body } = require("express-validator");
const { CompletionStatus } = require("@prisma/client");

const tasksValidator = [
  body("status", "status is needed").not().isEmpty(),
  body("status", "status is a String").isString(),
  body("title", "title is needed").not().isEmpty(),
  body("title", "status is a String").isString(),
  body("description", "description is needed").not().isEmpty(),
  body("description", "description is a String").isString(),
  body("completionDate", "comletionDate is needed").not().isEmpty(),
  body("completionDate", "description is a Date").isDate(),
  body("tags", "tags if defined must be a string").optional().isString(),
  body("responsible", "responsible if define must be a string").optional().isString(),
  statusValidator,
];

const statusValidator = (req, res, next) => {
  try {
    const { status } = req.body;
    if (!CompletionStatus[status]) {
      const error = new Error(
        `status is must have a valid status ${CompletionStatus.Finished, CompletionStatus.Ongoing, CompletionStatus.Pending}`
      );
      error.status = 400; // bad request
      next(error);
    }

    next();
  } catch (error) {
    console.error(error);
  }
};


module.exports = { tasksValidator, statusValidator};
