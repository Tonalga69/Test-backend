const express= require("express"); 
const {createServer}= require("http")
const Routes= require("./index.routers.js");
const cors= require("cors"); 
 
//iniciar servidor express
const initServer= ()=>{
    
    const port=  process.env.PORT || 8000; 
    const app= express(); 
    
    const HTTPServer= createServer(app); 

     
    app.use("/api",Routes); 

    app.use(cors()); 
    app.use(express.urlencoded({
        extended: true
      }));
    app.use(express.json())
    app.use(express.static('public'));

    HTTPServer.listen(port, ()=>{
        console.log(`Server running at http://localhost:${port}`);
    }); 

}

module.exports=initServer; 