const { body, param} = require("express-validator");
const { CompletionStatus } = require("@prisma/client");
const {haveErrors}= require("../../../utils/globalValidations")

const createTaskValidator = [
  body("status", "status is needed").not().isEmpty(),
  body("status", "status is a String").isString(), 
  body("status").custom(statusValidator).withMessage(`status must have a valid status ${CompletionStatus.Finished +" or "+ CompletionStatus.Ongoing +" or "+CompletionStatus.Pending}`),
  body("title", "title is needed").not().isEmpty(),
  body("owner", "owner is needed").not().isEmpty(),
  body("owner", "owner is string").isString(),
  body("title", "status is a String").isString(),
  body("description", "description is needed").not().isEmpty(),
  body("description", "description is a String").isString(),
  body("completionDate", "comletionDate is needed").not().isEmpty(),
  body("completionDate", "description is a Date").isDate(),
  body("tags", "tags if defined must be a string").optional().isString(),
  body("responsible", "responsible if defined must be a string").optional().isString(),
  body("comments", "comments if defined is a String").optional().isString(), 

   haveErrors
];


const updateTaskValidator=[
  body("status").optional().custom(statusValidator).withMessage(`status must have a valid status ${CompletionStatus.Finished +" or "+ CompletionStatus.Ongoing +" or "+CompletionStatus.Pending}`),
  body("owner", "cannot upddate owner").isEmpty(),
  body("id", "cannot upddate id").isEmpty(),
  body("title", "title if defined must be a string").optional().isString(),
  body("description", "description if defined must be a string").optional().isString(),
  body("completionDate", "description if defined must be a Date").optional().isDate(),
  body("tags", "tags if defined must be a string").optional().isString(),
  body("responsible", "responsible if defined must be a string").optional().isString(),
   haveErrors
];

const commonValidator=[
  param("id", "id required").not().isEmpty(), 
  param("id", "id must be a string").isString(),
  param("owner", "owner required").not().isEmpty(), 
  param("owner", "owner must be a string").isString(),
  haveErrors
]

function statusValidator (status){
  try {
    if(status)
     return (CompletionStatus[status])

     return false

  } catch (error) {
    console.error(error);

    return false; 
  }
};


module.exports = { createTaskValidator, statusValidator, updateTaskValidator, commonValidator};
