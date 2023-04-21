const {Router}= require("express"); 
const {createTaskValidator}= require("./middlewares/task.middleware"); 
const createTask= require("./controllers/createTask"); 

const router= Router();

router.post("/create", [createTaskValidator], createTask); 



module.exports= router; 