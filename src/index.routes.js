const {Router}= require("express")
const router = Router(); 

const tasksPath= require("./api/tasks/tasks.routes"); 

//main routes
router.use("/tasks", tasksPath); 




module.exports=router; 