# Test-backend
 This project represents a basic API using express.js 





POST "api/create"
//example 
            body:{
            "title": "Eat some chocolate",
            "description": "Just dummy description", 
            "completionDate": "2023-05-12", //DATE
            "status": "Pending",            //Pending Ongoing Finished
            "tags": "HouseChores",  
            "responsible": "SomeOne",
            "owner": "ME",
            "comments": "Hello, this it´s a comment"
            }

            response {
            "id": "5201430b-bc06-458d-aa54-04b16b4cff4a"
            "title": "Eat some chocolate",
            "description": "Just dummy description", 
            "completionDate": "2023-04-12T00:00:00.000Z", //DATE
            "status": "Pending",            //Pending Ongoing Finished
            "tags": "HouseChores",  
            "responsible": "SomeOne",
            "owner": "ME",
            "comments": "Hello, this it´s a comment"
            }

GET    "api/getTaskInfo/:owner/:id"
            owner: the name of who wrote the task 
            id: id of task 
            example of api/getTaskInfo/ME/5201430b-bc06-458d-aa54-04b16b4cff4a
           

            response {
                        "id": "5201430b-bc06-458d-aa54-04b16b4cff4a"
                        "title": "Eat some chocolate",
                        "description": "Just dummy description", 
                        "completionDate": "2023-04-12T00:00:00.000Z", //DATE
                        "status": "Pending",            //Pending Ongoing Finished
                        "tags": "HouseChores",  
                        "responsible": "SomeOne",
                        "owner": "ME",
                        "comments": "Hello, this it´s a comment"
                        }

DELETE "api/delete/:owner/:id"
            owner: the name of who wrote the task 
            id: id of task 
            Note: you cannot delete a task where owner and id task does not match
            returns deleted task

            example of api/delete/ME/5201430b-bc06-458d-aa54-04b16b4cff4a
            response {
                        "id": "5201430b-bc06-458d-aa54-04b16b4cff4a"
                        "title": "Eat some chocolate",
                        "description": "Just dummy description", 
                        "completionDate": "2023-04-12T00:00:00.000Z", //DATE
                        "status": "Pending",            //Pending Ongoing Finished
                        "tags": "HouseChores",  
                        "responsible": "SomeOne",
                        "owner": "ME",
                        "comments": "Hello, this it´s a comment"
                        }


GET    "api/getShortTasks/:owner"
        id: id of task 
        example of api/getShortTasks/ME

        response [
                    {
                    "id": "5201430b-bc06-458d-aa54-04b16b4cff4a"
                    "title": "Eat some chocolate",
                    "description": "Just dummy description", 
                    "completionDate": "2023-04-12T00:00:00.000Z", //DATE
                    "status": "Pending",            //Pending Ongoing Finished
                    "owner": "ME",
                    }, 
                    {
                        ...
                    }
                ]
PUT    "api/update/:owner/:id"
            owner: the name of who wrote the task 
            id: id of task 
            Note: you update a task where owner and id task does not match
            returns updated task

            All field are optional when updating task 

            id and owner cannot be changed

            example of api/update/ME/5201430b-bc06-458d-aa54-04b16b4cff4a


            body{
            "title": "Eat some tamales",
            "description": "Just dummy description",
            "completionDate": "2023-04-12",
            "status": "Finished",
            "tags": "HouseChores",
            "responsible": "SomeOne",
            "comments": "I love tamales"
            }

            response {
            "id": "5201430b-bc06-458d-aa54-04b16b4cff4a",
            "status": "Finished",
            "owner": "ME",
            "title": "Eat some tamales",
            "description": "Just dummy description",
            "completionDate": "2023-04-12T00:00:00.000Z",
            "comments": "I love tamales",
            "tags": "HouseChores",
            "responsible": "Someone"
            }
