var QueArray=[];
var QueId=0;
var currentId=0;
var temp=1;
var targetParent;
var editParent;
var divAddProduct = document.getElementById("divAddProduct");
var divListProducts = document.getElementById("divListProducts");
var aAddProduct = document.getElementById("aAddProduct");

aAddProduct.addEventListener("click",function(){
  createNewProductPanel();
  aAddProduct.setAttribute("style","visibility:hidden");
});

function createNewProductPanel()
{
  if(temp==1)
  {
  temp=0;

  var h2=document.createElement("h2");
  h2.setAttribute("id","h2");
  h2.innerHTML="Enter Details";
  h2.setAttribute("style","text-decoration:underline");
   

  var div1=document.createElement("div");
  div1.setAttribute("id","div1");
  var question=document.createElement("textarea");
  question.setAttribute("id","question");
  question.setAttribute("placeholder","Enter Question Statement");
 
  
  div1.appendChild(question);
  insertBlankLine(div1);
  insertBlankLine(div1);


  var div2=document.createElement("div");
  div2.setAttribute("id","div2");
  var option1=document.createElement("input");
 option1.setAttribute("id","option1");
  option1.setAttribute("placeholder","Enter option 1");
 
  div2.appendChild(option1);
  insertBlankLine(div2);
  insertBlankLine(div2);


  var div3=document.createElement("div");
  div3.setAttribute("id","div3");
  var option2=document.createElement("input");
  
  option2.setAttribute("id","option2");
  option2.setAttribute("placeholder","Enter option 2");
  div3.appendChild(option2);
  insertBlankLine(div3);
  insertBlankLine(div3);

 var div4=document.createElement("div");
 div4.setAttribute("id","div4");
 var option3=document.createElement("input");

 option3.setAttribute("id","option3");
 option3.setAttribute("placeholder","Enter option 3");
 div4.appendChild(option3);
 insertBlankLine(div4);
 insertBlankLine(div4);

 var div6=document.createElement("div");
 div6.setAttribute("id","div6");
 var option4=document.createElement("input");

 option4.setAttribute("id","option4");
 option4.setAttribute("placeholder","Enter option 4");
 div6.appendChild(option4);
 insertBlankLine(div6);
 insertBlankLine(div6);

 var div7=document.createElement("div");
 div7.setAttribute("id","div7");
 var marks=document.createElement("input");

 marks.setAttribute("id","marks");
 marks.setAttribute("placeholder","Enter marks");
 div7.appendChild(marks);
 insertBlankLine(div7);
 insertBlankLine(div7);

 var div8=document.createElement("div");
 div8.setAttribute("id","div8");
 var ans=document.createElement("input");

 ans.setAttribute("id","ans");
 ans.setAttribute("placeholder","Correct Option");
 div8.appendChild(ans);
 insertBlankLine(div8);
 insertBlankLine(div8);



var div5=document.createElement("div");
div5.setAttribute("id","div5");
var submitButton=document.createElement("button");
submitButton.setAttribute("id","submitButton");
submitButton.setAttribute("style","margin-left:5px");
submitButton.innerHTML="Submit";
submitButton.addEventListener("click",function()
{
  var flag=validation();
  if(flag==true){
  addProducttoArray();
   }
   else
   alert("All fields required......");
});

var cancelButton=document.createElement("button");
cancelButton.setAttribute("id","cancelButton");
cancelButton.setAttribute("style","margin-left:20px");
cancelButton.innerHTML="Cancel";
cancelButton.addEventListener("click",function(){
removeFields();
});

var saveButton=document.createElement("button");
saveButton.setAttribute("id","saveButton");
saveButton.setAttribute("style","margin-left:20px");
saveButton.setAttribute("style","visibility:hidden");
saveButton.addEventListener("click",function(){
var newObject={
  // queid:currentId,
  // Prodname:document.getElementById("ProdName").value,
  // Proddesc:document.getElementById("ProdDesc").value,
  // Prodprice:document.getElementById("ProdPrice").value,
  // Prodquan:document.getElementById("ProdQuan").value
  Queid:currentId ,
  question:document.getElementById("question").value,
  option1:document.getElementById("option1").value,
  option2:document.getElementById("option2").value,
  option3:document.getElementById("option3").value,
  option4:document.getElementById("option4").value,
  marks:document.getElementById("marks").value
}
replaceInArray(newObject);
console.log("new----------");
console.log(newObject);
updateDom(newObject);
clearPannel();
});
saveButton.innerHTML="Save";
div5.append(submitButton);
div5.append(cancelButton);
div5.append(saveButton);

divAddProduct.append(h2);
divAddProduct.append(div1);
divAddProduct.append(div2);
divAddProduct.append(div3);
divAddProduct.append(div4);
divAddProduct.append(div6);
divAddProduct.append(div7);
divAddProduct.append(div8);
divAddProduct.append(div5);
}
}

function insertBlankLine(divi)
{
  var br=document.createElement("br");
  divi.appendChild(br);
}

//******************************validation function*********************************** */
function validation()
{
  var Question=document.getElementById("question").value;
  var Option1=document.getElementById("option1").value;
  var Option2=document.getElementById("option2").value;
  var Option3=document.getElementById("option3").value;
  var Option4=document.getElementById("option4").value;
  var Marks=document.getElementById("marks").value;
  var ans=document.getElementById("ans").value;
  if(Question == ""||Option1 == ""||Option2 == ""||Option3==""||Option4==""||Marks==""||ans==""){
  return false;}
  else
  return true;
}

//****************add to product array function*********************** */
function addProducttoArray()
{
  var QueObject={
  Queid:QueId,
  question:document.getElementById("question").value,
  option1:document.getElementById("option1").value,
  option2:document.getElementById("option2").value,
  option3:document.getElementById("option3").value,
  option4:document.getElementById("option4").value,
  marks:document.getElementById("marks").value,
  ans:document.getElementById("ans").value
  }
  QueArray.push(QueObject);
  storeProducts(QueArray);
console.log("objecct is----------");
console.log(QueObject);
 addProducttoDOM(QueObject,1);

  clearPannel();
  QueId++;
  
}

//******clear pannel function*************** */
function clearPannel()
{
temp=1;
divAddProduct.removeChild(h2);
divAddProduct.removeChild(div1);
divAddProduct.removeChild(div2);
divAddProduct.removeChild(div3);
divAddProduct.removeChild(div4);
divAddProduct.removeChild(div6);
divAddProduct.removeChild(div7);
divAddProduct.removeChild(div8);
divAddProduct.removeChild(div5);
aAddProduct.setAttribute("style","visibility:visible; inline-size: 200px; margin-left: 40%;");
}

//*********add to DOM function******************* */
function addProducttoDOM(ProdObj,flag2)
{
var listdiv1=document.createElement("div");
var question=ProdObj.question;
var option1=ProdObj.option1;
var option2=ProdObj.option2;
var option3=ProdObj.option3;
var option4=ProdObj.option4;
var marks=ProdObj.marks;
var queid=ProdObj.Queid;
var ans=ProdObj.ans;
 if(flag2==1)
 queid=queid+1;

var Question=document.createElement("h2");
var Option1=document.createElement("h3");
var Option2=document.createElement("h3");
var Option3=document.createElement("h3");
var Option4=document.createElement("h3");
var Marks=document.createElement("h3");
var Ans=document.createElement("h3");
Question.innerHTML=" Que."+queid+": "+question;
Option1.innerHTML="A: "+option1;
Option2.innerHTML="B: "+option2;
Option3.innerHTML="C: "+option3;
Option4.innerHTML="C: "+option4;
Marks.innerHTML="Marks : "+marks;
Ans.innerHTML="Correct Answer :"+ans;

Ans.setAttribute("style","color:green");


var editButton=document.createElement("button");
editButton.setAttribute("id","editButton");
editButton.setAttribute("style","margin-left:3px");
editButton.setAttribute("style","margin-top:5px");
editButton.innerHTML="Edit";

var deleteButton=document.createElement("button");
deleteButton.setAttribute("id","deleteButton");
deleteButton.setAttribute("style","margin-top:5px");
deleteButton.setAttribute("style","margin-left:10px");
deleteButton.innerHTML="Delete";

listdiv1.append(Question);

listdiv1.append(Option1);

listdiv1.append(Option2);

listdiv1.append(Option3);
listdiv1.append(Option4);
listdiv1.append(Marks);
listdiv1.append(Ans);
insertBlankLine(listdiv1);

listdiv1.append(editButton);
listdiv1.append(deleteButton);



insertBlankLine(listdiv1);
insertBlankLine(listdiv1);
divListProducts.append(listdiv1);
console.log(QueArray);

editButton.addEventListener("click",function(){
editFunction(question,option1,option2,option3,option4,marks,ans,ProdObj);
});

deleteButton.addEventListener("click",function(){
  
  deleteFunction(ProdObj);
 // deleteFromDataBase(ProdObj);

});
}

//************removing object from array*************** */
function removeFromProductsArray(id)
{
  QueArray.splice(id,1);
  console.log(QueArray);
 
}

//*******************insert into fields during edit function*********** */

function insertIntoFields(question,option1,option2,option3,option4,marks,ans)
{
  var que=document.getElementById("question");
  var op1=document.getElementById("option1");
  var op2=document.getElementById("option2");
  var op3=document.getElementById("option3");
  var op4=document.getElementById("option4");
  var mrks=document.getElementById("marks");
  var Ans=document.getElementById("ans");
  que.value=question;
  op1.value=option1;
  op2.value=option2;
  op3.value=option3;
  op4.value=option4;
  mrks.value=marks;
  Ans.value=ans;
  
}


function updateDom(ProdObj)
{
 var listdiv1=document.createElement("div");
// var prodName=ProdObj.Prodname;
// var prodDesc=ProdObj.Proddesc;
// var prodprice=ProdObj.Prodprice;
// var prodquan=ProdObj.Prodquan;
// var prodid=ProdObj.Prodid;
// //prodid=prodid+1;

var question=ProdObj.question;
var option1=ProdObj.option1;
var option2=ProdObj.option2;
var option3=ProdObj.option3;
var option4=ProdObj.option4;
var marks=ProdObj.marks;
var ans=ProdObj.ans;
var queid=ProdObj.Queid;
//queid=queid+1;

// var pname=document.createElement("h2");
// var pdesc=document.createElement("h4");
// var pprice=document.createElement("h4");
// var pquan=document.createElement("h4");
// pname.innerHTML=prodid+"# Product Name: "+prodName;
// pdesc.innerHTML="Product Description: "+prodDesc;
// pprice.innerHTML="Product Price: "+prodprice;
// pquan.innerHTML="Product Quantity: "+prodquan;
console.log("queid is----");
console.log(ProdObj.Queid);

var Question=document.createElement("h2");
var Option1=document.createElement("h3");
var Option2=document.createElement("h3");
var Option3=document.createElement("h3");
var Option4=document.createElement("h3");
var Marks=document.createElement("h3");
var Ans=document.createElement("h3");
Question.innerHTML="Que."+queid+" "+question;
Option1.innerHTML="A: "+option1;
Option2.innerHTML="B: "+option2;
Option3.innerHTML="C: "+option3;
Option4.innerHTML="D: "+option4;
Marks.innerHTML="Marks : "+marks;
Ans.innerHTML="Correct Option: "+ans;


var editButton=document.createElement("button");
editButton.setAttribute("id","editButton");
editButton.setAttribute("style","margin-left:3px");
editButton.setAttribute("style","margin-top:5px");
editButton.innerHTML="Edit";

var deleteButton=document.createElement("button");
deleteButton.setAttribute("id","deleteButton");
deleteButton.setAttribute("style","margin-top:5px");
deleteButton.setAttribute("style","margin-left:10px");
deleteButton.innerHTML="Delete";

// listdiv1.append(pname);

// listdiv1.append(pdesc);

// listdiv1.append(pprice);

// listdiv1.append(pquan);
listdiv1.append(Question);

listdiv1.append(Option1);

listdiv1.append(Option2);

listdiv1.append(Option3);
listdiv1.append(Option4);
listdiv1.append(Marks);
listdiv1.append(Ans);
insertBlankLine(listdiv1);

listdiv1.append(editButton);
listdiv1.append(deleteButton);



insertBlankLine(listdiv1);
insertBlankLine(listdiv1);

divListProducts.append(listdiv1);
 editParent.parentNode.replaceChild(listdiv1,editParent);

  editButton.addEventListener("click",function(){
    editFunction(question,option1,option2,option3,option4,marks,ans,ProdObj);
  });
  deleteButton.addEventListener("click",function(){
  deleteFunction(ProdObj);
  
  });
}


function getProductIndex(id)
{
  for (var i = 0; i < QueArray.length; i++)
	{
      if (QueArray[i].Queid == id)
			return i;
  }
}


function replaceInArray(newObj)
{
  for(var i=0;i<QueArray.length;i++)
  {
    if(QueArray[i].Queid==newObj.Queid)
    {
      QueArray[i]=newObj;
    }
  }
  console.log(QueArray);
  
  updateDatabase(newObj);
}

//*********local storage functions**************** */

function storeProducts(QueArray)
{
/*console.log(ProdArray);
localStorage.adminproducts=JSON.stringify(ProdArray);*/

var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
   
    }
  };
  xhttp.open("POST", "/questionarray", true);
  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhttp.send("questionsList="+JSON.stringify(QueArray));
}





function getStoredProducts()
{

  console.log("get stored question running");
  

var xhttp=new XMLHttpRequest();
   
    xhttp.onreadystatechange=()=>{
    if(xhttp.readyState == 4 && xhttp.status == 200){
       
      console.log("response text");
      console.log(xhttp.responseText);
      QueArray = JSON.parse(xhttp.responseText);
     //console.log(ProdArray);
    QueId = QueArray[QueArray.length-1].Queid;

   
    
    console.log(QueArray);
    console.log("-----------------------------")

    //console.log("name "+QueArray[0].name);
for(i=0;i<QueArray.length;i++)
  {
  addProducttoDOM(QueArray[i],0);
  }
    }
  }
  xhttp.open("GET", "/questionarray", true);
  xhttp.send();  
 

     
 
}



function editFunction(question,option1,option2,option3,option4,marks,ans,ProdObj)
{
  editParent=event.target.parentNode;
  createNewProductPanel();
  aAddProduct.setAttribute("style","visibility:hidden");
  document.getElementById("submitButton").setAttribute("style","visibility:hidden");
  document.getElementById("cancelButton").setAttribute("style","visibility:hidden");
  document.getElementById("saveButton").setAttribute("style","visibility:visible");
  insertIntoFields(question,option1,option2,option3,option4,marks,ans);
  currentId=ProdObj.Queid;
}


function deleteFunction(ProdObj)
{
  targetParent = event.target.parentNode;
  console.log(ProdObj.Queid);
  removeFromProductsArray(getProductIndex(ProdObj.Queid));
  deleteFromDataBase(ProdObj.question);
  targetParent.parentNode.removeChild(targetParent);
  
  
}
//********************************************json******************************************
/*var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange=function()
{
    // readyState 4 means the request is done.
    // status 200 is a successful return.
    if (xhttp.readyState == 4 && xhttp.status == 200)
    {
      //document.getElementById("users").innerHTML = xhttp.responseText; // 'This is the output.'
      var ProdArray = JSON.parse( xhttp.responseText) ;
      for(var i=0;i<ProdArray.length;i++)
      {
          addProducttoDOM(ProdArray[i]);
      }
      }
    }
`
`

  function loadDoc()
{
  xhttp.open("GET", "/products");
  xhttp.send();
}*/

var userArray=[];
function checkLogin()
{
  if(sessionStorage.logarray)
   
  userArray=JSON.parse(sessionStorage.logarray);

  if(userArray.length!=0){
    loggedIn();
  }
  
}

var Name=document.getElementById("name");
var Logout=document.getElementById("logout");

function loggedIn()
{
  


  //************************************ */
  Name.innerHTML="Hello "+userArray[0].name+"";
  Name.setAttribute("href","#");
  //************************** */
 

  //***************************************** *
  Logout.innerHTML="Logout";
  



  Logout.addEventListener("click",function(){
  sessionStorage.logarray=JSON.stringify([]);
  });
 
}

function deleteFromDataBase(question){
  console.log("product to be deleted is with id----"+question)
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
   
  }
};
xhttp.open("POST", "/delete", true);
xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

xhttp.send("question="+JSON.stringify(question));
}

function updateDatabase(obj){
  console.log("update running..");
  var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
     
    }
  };
  xhttp.open("POST", "/update", true);
  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

  xhttp.send("obj="+JSON.stringify(obj));
}

function logOut()
{
  setSession("logout");
  location.href="login.html";
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
