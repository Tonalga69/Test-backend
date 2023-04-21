const { body } = require("express-validator");
const { CompletionStatus } = require("@prisma/client");
const {haveErrors}= require("../../../utils/globalValidations")

const createTaskValidator = [
  body("status", "status is needed").not().isEmpty(),
  body("status", "status is a String").isString(), 
  body("status").custom(statusValidator).withMessage(`status must have a valid status ${CompletionStatus.Finished +" or "+ CompletionStatus.Ongoing +" or "+CompletionStatus.Pending}`),
  body("title", "title is needed").not().isEmpty(),
  body("title", "status is a String").isString(),
  body("description", "description is needed").not().isEmpty(),
  body("description", "description is a String").isString(),
  body("completionDate", "comletionDate is needed").not().isEmpty(),
  body("completionDate", "description is a Date").isDate(),
  body("tags", "tags if defined must be a string").optional().isString(),
  body("responsible", "responsible if define must be a string").optional().isString(),
   haveErrors
];

function statusValidator (status){
  try {
    if(status)
    console.log(status);
     return (CompletionStatus[status])

     return false

  } catch (error) {
    console.error(error);

    return false; 
  }
};


module.exports = { createTaskValidator, statusValidator};
