const {Router}= require("express"); 
const {createTaskValidator, updateTaskValidator, commonValidator}= require("./middlewares/task.middleware"); 
const createTask= require("./controllers/createTask"); 
const getTaskInfo= require("./controllers/getTaskInfo"); 
const deleteTask= require("./controllers/deleteTask"); 
const getShortTasks= require("./controllers/getAll_withShortInfo"); 
const updatetask= require("./controllers/updateTask"); 

const router= Router();

router.post("/create", [createTaskValidator], createTask); 
router.get("/getTaskInfo/:owner/:id",[commonValidator], getTaskInfo); 
router.delete("/delete/:owner/:id",[commonValidator], deleteTask); 
router.get("/getShortTasks/:id",getShortTasks)
router.put("/update/:owner/:id", [commonValidator, updateTaskValidator],updatetask )

module.exports= router; 