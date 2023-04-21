const {Router}= require("express"); 
const {createTaskValidator}= require("./middlewares/task.middleware"); 
const createTask= require("./controllers/createTask"); 
const getTaskInfo= require("./controllers/getTaskInfo"); 
const deleteTask= require("./controllers/deleteTask"); 
const getShortTasks= require("./controllers/getAll_withShortInfo"); 

const router= Router();

router.post("/create", [createTaskValidator], createTask); 
router.get("/getTaskInfo/:id/:owner",getTaskInfo); 
router.delete("/delete/:id/:owner", deleteTask); 
router.get("/getShortTasks/:owner",getShortTasks)


module.exports= router; 