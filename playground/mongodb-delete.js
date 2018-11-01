const {MongoClient,ObjectID}= require('mongodb');


MongoClient.connect('mongodb://localhost:27017/ToDoApp',(err,client)=>{

            if(err){
              return console.log('unable to connectt o mongodb server');
            }

            console.log('connected to  mongodb server');
            const db=client.db('ToDoApp');
            db.collection("users").deleteMany({name:"safwan"});
            db.collection("users").findOneAndDelete({_id: new ObjectID("5bd86a9b6eb22d4104b21e4d")}).then((res)=>{
              console.log(res); 


            });

/* db.collection("ToDos").deleteOne({text:"eat brk"}).then((res)=>{
              console.log(res); 


            },(err)=>{

              console.log('unable to delete'); 
            }) 
             */

            /* db.collection("ToDos").findOneAndDelete({completed: false}).then((res)=>{
              console.log(res); 


            },(err)=>{

              console.log('unable to delete'); 
            }) 

 */
            //client.close();
}
)
