var CartArray=[];
var retrievedArray=[];
var CartId=0;
var userArray=[];
var showListProducts=document.getElementById("showListProducts");
var showname=document.getElementById("Show");
var Name=document.getElementById("name");




function addProducttoDOM(newObj)
{
  var listdiv1=document.createElement("div");
  listdiv1.setAttribute("id",newObj.Prodid);
  var question=newObj.question;
  var option1=newObj.option1;
  var option2=newObj.option2;
  var option3=newObj.option3;
  var option4=newObj.option4;
  var label1=document.createElement("h2");
  var label2=document.createElement("h4");
  var label3=document.createElement("h4");
  var label4=document.createElement("h4");
  var label5=document.createElement("h4");
  var pid=newObj.Queid;
  label1.innerHTML="Que."+pid+" "+question;
  label2.innerHTML="A: "+option1;
  label3.innerHTML="B: "+option2;
  label4.innerHTML="C: "+option3;
  label5.innerHTML="D: "+option4;
 
  
  var inputQuan=document.createElement("input");
  inputQuan.setAttribute("placeholder","  Enter Answer");
  inputQuan.setAttribute("type","text");
  inputQuan.setAttribute("style","margin:left:5px; width: 15%; height:5%;  margin-top:8px; margin-left:2px;");
  inputQuan.setAttribute("id","inputQuan");
 

  var addToCart=document.createElement("button");
  addToCart.innerHTML="Submit Answer";
  addToCart.setAttribute("id","addToCart");
  addToCart.setAttribute("style","height:30px; color:black; background-color:darkslategray; font-size: 12px; border:none; margin-left:10px; ");

  listdiv1.append(label1);
  insertBlankLine(listdiv1);
  listdiv1.append(label2);
  insertBlankLine(listdiv1);
  listdiv1.append(label3);
  insertBlankLine(listdiv1);
  listdiv1.append(label4);
  insertBlankLine(listdiv1);
  listdiv1.append(label5);
  insertBlankLine(listdiv1);
  listdiv1.append(inputQuan);
  listdiv1.append(addToCart);
  insertBlankLine(listdiv1);
  insertBlankLine(listdiv1);
  insertBlankLine(listdiv1);
  showListProducts.appendChild(listdiv1);

addToCart.addEventListener("click",function()
{
 
  
    var target=event.target.parentNode;
    var quantity=inputQuan.value;
    if(quantity=="")
    {
      alert("Enter Response");
    }
    else
    {
    var flag=validate(quantity);
    if(flag==true)
    {
      var CartObj={
        // uid:userArray[userArray.length-1].username,
        // pid:newObj.Prodid,
        // pname:prodName,
        // pdesc:prodDesc,
        // pprice:prodprice,
        // pquan:quantity
        Queid:newObj.Queid,
        answer:quantity
      }
      console.log(CartObj);
      alert("Answer added to Array");
     
    var temp = checkIndex(CartArray,newObj.Queid);
    console.log(userArray);
    if(temp != -1)
    {
      CartArray.splice(temp,1,CartObj);
      console.log(CartArray);
      updateCart(CartObj);
    }
    else if(temp == -1)
    {
      CartArray.push(CartObj);
      CartId++;
      console.log(CartArray);
      storeProducts(CartArray);
    }

    }
}

});

}


function getCartProducts()
{
  // if(!localStorage.cartProduct)
  // {
  //   localStorage.cartProduct=JSON.stringify([]);
  // }
  // else
  // {
  //   CartArray=JSON.parse(localStorage.cartProduct);
  //   console.log(CartArray);
  // }

  console.log("getting answer array");
  

  var xhttp=new XMLHttpRequest();
     
      xhttp.onreadystatechange=()=>{
      if(xhttp.readyState == 4 && xhttp.status == 200){
         
        console.log("response text");
        console.log(xhttp.responseText);
       CartArray= JSON.parse(xhttp.responseText);
     
  
    
         console.log("cart array");
         console.log(CartArray);  
      }
    }
    xhttp.open("GET", "/answerarray", true);
    xhttp.send();  
   
  
       
}





function getStoredProducts()
{

  console.log("get stored product running");
  

var xhttp=new XMLHttpRequest();
   
    xhttp.onreadystatechange=()=>{
    if(xhttp.readyState == 4 && xhttp.status == 200){
       
      console.log("response text");
      console.log(xhttp.responseText);
      retrievedArray = JSON.parse(xhttp.responseText);
   

   
    
    console.log(retrievedArray);
    console.log("-----------------------------")

// for(i=0;i<retrievedArray.length;i++)
//   {
//   addProducttoDOM(retrievedArray[i]);
//   }

getDom(retrievedArray,0);
    }
  }
  xhttp.open("GET", "/questionarray", true);
  xhttp.send();  
 

     
 
}

var start=0;
function next(){
  
  if(start<retrievedArray.length-2)
  {
    start=start+2;
    console.log("start is----"+start);
    showListProducts.innerHTML="";

  
  getDom(retrievedArray,start);
  }
}

function getDom(retrievedArray,start)
{
  
  for(var i=start;i<start+2;i++)
  {
    if(i<=retrievedArray.length-1)
    addProducttoDOM(retrievedArray[i]);
  }
}

function back(){

 if(start>=2)
 { 
   start=start-2;
   showListProducts.innerHTML="";
   console.log("back start is......."+start);
   backDom(retrievedArray,start);
 }
}

function backDom(retrievedArray,start){
  for(var i=start;i<start+2;i++){

    addProducttoDOM(retrievedArray[i]);
  }
}
 


function getSessionProducts()
{
  // if(sessionStorage.logarray)
  // userArray=JSON.parse(sessionStorage.logarray);
  console.log("login array fetching..........");
  

var xhttp=new XMLHttpRequest();
   
    xhttp.onreadystatechange=()=>{
    if(xhttp.readyState == 4 && xhttp.status == 200){
       
      console.log("response text for login array-----------");
      console.log(xhttp.responseText);
      userArray = JSON.parse(xhttp.responseText);
      console.log("{{{{{{{{{{{{{{{{{{{{{{{{{");
   console.log(userArray);

      console.log("::::::::::::::::::::::::::");
  console.log(userArray);
  console.log("-----------------------");

  if(userArray.length!=0)
{
  console.log("loggedin is calling---------");
loggedIn();

}
     
    }
   }

  xhttp.open("GET", "/loginarray", true);
  xhttp.send();  
 

// if(userArray.length==0)
// {
// sessionStorage.logarray=JSON.stringify([]);

// }

}


function insertBlankLine(divi)
{
  var br=document.createElement("br");
  divi.appendChild(br);
}



function validate(enteredquan)
{
  // if(enteredquan==""){
  // alert("Fill Quantity");
  // return false;}
  // else if(parseInt(enteredquan)<=0)
  // {
  //   alert("Invalid Quantity");
  //   return false;
  // }
  // else if(parseInt(enteredquan)>parseInt(prodquan))
  // {
  //   alert("Quantity Should Be Less Than or Equal To "+prodquan);
  //   return false;
  // }
  if(enteredquan=='A' || enteredquan=='B'|| enteredquan=="C"||enteredquan=="D")
  return true;
  else
  { 
    alert("Enter valid answer A,B,C or D");
    return false;}
}


function checkIndex(CartArray,id)
{
  
  for(var i=0;i<CartArray.length;i++)
  {
    if( CartArray[i].Queid == id)
    {
      
      return i;
    }
  }
  return -1;
}


function storeProducts(CartArray)
{
//localStorage.cartProduct=JSON.stringify(CartArray);
console.log("storeing answer array");
var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
   
    }
  };
  xhttp.open("POST", "/answerArray", true);
  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhttp.send("productList="+JSON.stringify(CartArray));

}



function check()
{
  
    // if(CartArray.length==0)
    // alert("Add some Products");
    // else
    // location.href="CartProducts.html";

    location.href='CartProducts.html';
    
 
}


function getProductIndex(id)
{
  for(var i=0;i<retrievedArray.length;i++)
  {
    if(retrievedArray[i].Prodid==id)
    return i;
  }
  return 0;
}

var logInArray=[];


function loggedIn()
{
  
 //console.log(userArray);
 //************************************ */
  Name.innerHTML="hello "+ userArray[userArray.length-1].username;
  Name.setAttribute("href","#");
  //************************** */
 

  //***************************************** *
  //Logout.innerHTML="Logout";
  




//   Logout.addEventListener("click",function(){

// setSession("logout");

  
//   });
 
}

function setSession(username){

  var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
   
    }
  };
  xhttp.open("POST", "/setSession", true);
  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhttp.send("username="+JSON.stringify(username));
}


function checkUser(username)
{
  for(var i=0;i<CartArray.length;i++)
  {
    if(CartArray[i].UserId==username)
    {
      return true;
    }
  }
  return false;
}

function updateCart(obj){

  console.log("update cart working");
  console.log(obj);
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
   
  }
};
xhttp.open("POST", "/answerupdate", true);
xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

xhttp.send("obj="+JSON.stringify(obj));
}