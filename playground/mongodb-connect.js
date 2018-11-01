//const MongoClient= require('mongodb').MongoClient;
const {MongoClient,ObjectID}= require('mongodb');


MongoClient.connect('mongodb://localhost:27017/ToDoApp',(err,client)=>{

            if(err){
              return console.log('unable to connectt o mongodb server');
            }

            console.log('connected to  mongodb server');
            const db=client.db('ToDoApp');

            /* db.collection('ToDos').insertOne({
              text:'homework 1',
              completed:false
            
            },(err,res)=>{
              if(err){
                return console.log('unable to insert data',err);
              }

                console.log(JSON.stringify(res.ops,undefined,2));

            })
 */


            /* db.collection('users').insertOne({
            
              name:'sohib4 ',
              age:28,
              location:"8111 e yale ave "
            
            },(err,res)=>{
              if(err){
                return console.log('unable to insert data',err);
              }

                console.log(JSON.stringify(res.ops[0]._id.getTimestamp(),undefined,2));

            }) */

            client.close();
}
)
