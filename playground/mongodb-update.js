const {MongoClient,ObjectID}= require('mongodb');


MongoClient.connect('mongodb://localhost:27017/ToDoApp',(err,client)=>{

            if(err){
              return console.log('unable to connectt o mongodb server');
            }

            console.log('connected to  mongodb server');
            const db=client.db('ToDoApp');
            
            db.collection("users").findOneAndUpdate({_id: new ObjectID("5bda226a64dfc26e703d77d7")},{
              $set :{

                name: 'adel abogdera+++'
              },
              $inc: {
                age:5

              }


            },{
              returnOriginal: false
            }).then((res)=>{
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
