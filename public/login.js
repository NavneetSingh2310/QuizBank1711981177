var checkArray=[];
var logInArray=[];
var logId=0;
var flag=0;
function signup()
{
  location.href="signup.html";
}


function login()
{

  var username=document.getElementById("username").value;
  var password=document.getElementById("password").value;
  if(username=="chitkara" && password=="cuhplogin"){
    alert("Login Successfull");
    var obj={
      username:"Admin",
      password:password


    }
    logInArray.push(obj);
    storeFlag(logInArray);
  

   setSession(username);
   location.href='AdminPannel.html';
  
}

  else if(username!=""&&password!="")
  {
    for(var i=0;i<checkArray.length;i++)
    {
      flag=0;
      if(username==checkArray[i].username&&password==checkArray[i].password)
      {
        flag=1;
        logId=i;
        break;
      }
    }
    if(flag==0)
    {
      console.log(checkArray);
      alert("Username Or Password Do Not Match!");
    }
    else
    {
      console.log(logInArray);
      alert("Login Successfull");
      logInArray.push(checkArray[logId]);
      storeFlag(logInArray);
      setSession(username);
      location.href="middle.html";
    }
  }
  else
  {
    alert("Fill All The Empty Fields");
  }

}

function storeFlag(logInArray)
{
  // sessionStorage.logarray=JSON.stringify(logInArray);
  // console.log(logInArray);
  var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
   
    }
  };
  xhttp.open("POST", "/loginarray", true);
  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhttp.send("logarray="+JSON.stringify(logInArray));
}

function getStoredProducts()
  {
  /*if(!localStorage.userInfo)
  {
  localStorage.userInfo=JSON.stringify([]);
  }
  else
  {
  checkArray=JSON.parse(localStorage.userInfo);
  console.log(checkArray);
  }*/

  console.log("get stored product running");
  

var xhttp=new XMLHttpRequest();
   
    xhttp.onreadystatechange=()=>{
    if(xhttp.readyState == 4 && xhttp.status == 200){
       
      console.log("response text");
      console.log(xhttp.responseText);
      checkArray = JSON.parse(xhttp.responseText);
     
    }
   }
  xhttp.open("GET", "/adduser", true);
  xhttp.send();  
 


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

