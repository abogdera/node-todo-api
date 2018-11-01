const {MongoClient,ObjectID}= require('mongodb');


MongoClient.connect('mongodb://localhost:27017/ToDoApp',(err,client)=>{

            if(err){
              return console.log('unable to connectt o mongodb server');
            }

            console.log('connected to  mongodb server');
            const db=client.db('ToDoApp');

            db.collection('users').find({

              name: 'safwan'
            }).toArray().then((docs1)=>{
              console.log('Users');
              console.log(JSON.stringify(docs1,undefined,2));

            },(err)=>{
              console.log("unable to fetch todos",err);

              
            }); 

            db.collection('ToDos').find().count().then((count)=>{
              console.log(`Todos: ${count}`);
              //console.log(JSON.stringify(count,undefined,2));

            },(err)=>{
              console.log("unable to fetch todos",err);

              
            });

            //client.close();
}
)
