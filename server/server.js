/* var mongoose=require('mongoose')
mongoose.Promise=global.Promise;
mongoose.connect('mongodb://localhost:27017/ToDoApp'); */

var express =require('express')
var bodyParser=require('body-parser')


var {mongoose}=require('./db/mongoose')
var {Todo}=require('./models/todo')
var {user}=require('./models/user')


var app=express();

app.use(bodyParser.json())
app.post('/todos',(req,res)=>{

  var todo= new Todo({
    text:req.body.text


  });

todo.save().then((doc)=>{
  res.send(doc);
},(e)=>{
res.status(400).send(e);
})

})
 app.listen(3000,()=>{
  console.log('started on port 3000');
});


/*  var newToDo= new Todo({
  text:"swimming class"

});

newToDo.save().then((doc)=>{
  console.log('saved Todo',JSON.stringify(doc,undefined,2));
},(err)=>{

console.log('unable to save data',err);
})  */



/* var user= new user({
email:"abougdera@gmail.com"

})

user.save().then((doc)=>{
  console.log('saved user',JSON.stringify(doc,undefined,2));
},(err)=>{

console.log('unable to save data',err);
}) 
 */
/* var newToDo2= new Todo({
  text:"feed cat",
  completed: true,
  completedAt: 123
  
  });

  newToDo2.save().then((doc)=>{
    console.log('saved Todo',JSON.stringify(doc,undefined,2));
  },(err)=>{
  
  console.log('unable to save data',err);
  }) */