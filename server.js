var express = require('express');
const mongoose = require('mongoose');
const app = express();
mongoose.connect("mongodb://localhost:27017/QuizBank");
app.use(express.urlencoded())
var bodyParser=require('body-parser');
//const url=require("url");
var session=require('express-session');
app.use(express.json());
app.use(express.static('public'));
app.use(session({'secret':'fghvcdhshhgvjhfsbhvvh746ghjb',saveUninitialized:true,resave:true}));
var flag=0;

app.set('view engine', 'ejs');
//mongoose.connect("mongodb://localhost:27017/ecom",{ useNewUrlParser: true },{ useUnifiedTopology: true } );//connection with database
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

mongoose.connection.on('error', (err) => {
  console.log('DB connection Error');
});

mongoose.connection.on('connected', (err) => {
  console.log('DB connected');
});

mongoose.set('useFindAndModify', false);

var Schema=mongoose.Schema;

let Users=new Schema({
    name:String,
    username:String,
    password:String,
    email:String,
    
});

let Logedinuser=new Schema({
  
    username:String,
    password:String,
   
    
});

let Questions=new Schema({
    Queid:Number,
    question:String,
    option1:String,
    option2:String,
    option3:String,
    option4:String,
    marks:Number,
    ans:String
});

let Ans=new Schema({


    Queid:Number,
    answer:String
    
    })
  
    var ans = mongoose.model("Answers",Ans);

var user = mongoose.model('users', Users);
var logedinuser = mongoose.model('logedinuser', Logedinuser);
var que = mongoose.model('questions',Questions);

app.post('/questionarray',(req,res) => {
    console.log("running it");
  var len=JSON.parse(req.body.questionsList).length;
     var sData=new que();
     sData.Queid=JSON.parse(req.body.questionsList)[len-1].Queid+1;
  sData.question=JSON.parse(req.body.questionsList)[len-1].question;
  sData.option1=JSON.parse(req.body.questionsList)[len-1].option1;
 
   sData.option2=JSON.parse(req.body.questionsList)[len-1].option2;
     sData.option3=JSON.parse(req.body.questionsList)[len-1].option3;
     sData.option4=JSON.parse(req.body.questionsList)[len-1].option4;
     sData.marks=JSON.parse(req.body.questionsList)[len-1].marks;
     sData.ans=JSON.parse(req.body.questionsList)[len-1].ans;
 
  sData.save(function(err)
 {
 if(err)
     {
         console.log("Error");
     }
     res.redirect('/AdminPannel.html');
 });        
 });

 app.get('/questionarray',(req,res)=>{
    console.log('running it');
    que.find({},function(err,docs){
        if(err)
            {
                console.log("error");
            }
        console.log(docs);
        res.send(docs);
       
    });
  });

  app.post('/delete',(req,res)=>{

    console.log("question--------------------: "+JSON.parse(req.body.question));
   
     que.findOneAndRemove({'question':JSON.parse(req.body.question)}, function(err){
         if (err){
             throw err;
             
         }
         console.log('deleted');
     });
   });


   app.post('/update',(req,res)=>{
   
    //console.log(JSON.parse(req.body.obj));
    var ob=(JSON.parse(req.body.obj));
    console.log(ob);
       console.log("update is running in server file");

    var myquery = { question: ob.question };
  var newvalues = { $set: { question: ob.question, option1:ob.option1,option2:ob.option2,option3:ob.option3,option4:ob.option4,marks:ob.marks } };
   
    que.updateOne(myquery, newvalues, function(err, res) {
    if (err) throw err;
        else
    console.log("1 document updated");

  });
});

app.get("/",function(req,res)
       {
    res.sendFile(__dirname+"/login.html");
});

app.get("/login.html",function(req,res)
       {
    res.sendFile(__dirname+"/login.html");
});

app.get("/signup.html",function(req,res)
       {
    res.sendFile(__dirname+"/signup.html");
});

app.get("/adminpannel.html",function(req,res)
       {
           if(flag==1)
    res.sendFile(__dirname+"/AdminPannel.html");
    else res.redirect('login.html');
});

app.get("/middle.html",function(req,res)
       {
           if(flag2==1)
    res.sendFile(__dirname+"/middle.html");
    else res.redirect('login.html');
    
});

app.get("/CartProducts.html",function(req,res)
       {
           
    res.sendFile(__dirname+"/CartProducts.html");
    
    
});

app.post('/adduser',(req,res)=>{
    var len=JSON.parse(req.body.userList).length;
    var sData=new user();
    sData.name=JSON.parse(req.body.userList)[len-1].name;
    sData.username=JSON.parse(req.body.userList)[len-1].username;
    sData.email=JSON.parse(req.body.userList)[len-1].email;
    sData.password=JSON.parse(req.body.userList)[len-1].password;

    sData.save(function(err)
 {
 if(err)
     {
         console.log("Error");
     }
     res.redirect('/login.html');
 });
})


app.get('/adduser',(req,res)=>{
    console.log('running it');
    user.find({},function(err,docs){
        if(err)
            {
                console.log("error");
            }
        console.log(docs);
        res.send(docs);
       
    });
  });

  app.get('/loginarray',(req,res)=>{
    console.log('running it');
    logedinuser.find({},function(err,docs){
        if(err)
            {
                console.log("error");
            }
        console.log(docs);
        res.send(docs);
       
    });
  });

  app.get('/answerarray',(req,res)=>{
    console.log('running it');
    ans.find({},function(err,docs){
        if(err)
            {
                console.log("error");
            }
        console.log(docs);
        res.send(docs);
       
    });
  });

  
app.post('/loginarray',(req,res)=>{
  

    var len=JSON.parse(req.body.logarray).length;
    var sData=new logedinuser();
     if(JSON.parse(req.body.logarray)[len-1].username=='chitkara')
     flag=1;

     console.log("login array flag is: "+flag);
    sData.username=JSON.parse(req.body.logarray)[len-1].username;
    
    sData.password=JSON.parse(req.body.logarray)[len-1].password;

    sData.save(function(err)
 {
 if(err)
     {
         console.log("Error");
     }
     res.redirect('/viewProducts.html');
 });
})

var flag=0;
var flag2=0;
app.post('/setSession',(req,res)=>{
    
     req.session.username=JSON.parse(req.body.username);
    

    if(req.session.username=='chitkara'){
        flag=1;
        
    }
    else if(req.session.username=='logout'){
        flag2=0;
        flag=0;
    }
    else {
        flag=0;
        flag2=1;
    }
})


app.post('/answerarray',(req,res) => {
    console.log("running it");
    var len=JSON.parse(req.body.productList).length;
       var sData=new ans();
       sData.Queid=JSON.parse(req.body.productList)[len-1].Queid;
       sData.answer=JSON.parse(req.body.productList)[len-1].answer;
   
   
    sData.save(function(err)
   {
   if(err)
       {
           console.log("Error");
       }
       res.redirect('#');
  
   });    
   });
   
   app.get("/test.html",function(req,res)
       {
    res.sendFile(__dirname+"/viewProducts.html");
});

app.post('/answerupdate',(req,res)=>{
   
    //console.log(JSON.parse(req.body.obj));
    var ob=(JSON.parse(req.body.obj));
       

    var myquery = { Queid: ob.Queid };
  var newvalues = { $set: { answer: ob.answer} };
   
    ans.updateOne(myquery, newvalues, function(err, res) {
    if (err) throw err;
        else
    console.log("1 document updated");

  });
});
   
  app.listen(3000);