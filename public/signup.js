var userArray=[];
var userId=0;



function signup()
{
  var name=document.getElementById("name").value;
  var username=document.getElementById("Username").value;
  var email=document.getElementById("email").value;
  var password=document.getElementById("Password").value;
  var obj={
    name:name,
    username:username,
    email:email,
    password:password
  }
  var valid=validate(obj);
  console.log(userArray);
  if(valid==1)
  {
    alert("SignUp Successfull");
    location.href="login.html?";
  }
}



function validate(obj)
{
  if(obj.name==""||obj.username==""||obj.email==""||obj.password=="")
  {
    alert("Please Fill All The Empty Fields");
    return 0;
  }
  if(obj.password.length<9)
  {
    alert("Password Length Must Be Greater Than 8 Characters");
    return 0;
  }
  if(!obj.email.includes("@")||!obj.email.includes(".com"))
  {
    alert("Invalid Email");
    return 0;
  }
  if(userArray.length==0)
  {
    userArray.push(obj);
    console.log(userArray);
    storeProducts(userArray);
    userId++;
    return 1;
  }
  else
  {
    var f=0;
    for(var i=0;i<userArray.length;i++)
    {
      if(userArray[i].username==obj.username)
      {
        f=1;
        break;
      }
    }
    if(f==1)
    {
      alert("Username Already Exist");
      return 0;
    }
    else
    {
      userArray.push(obj);
      userId++;
      console.log(userArray);
      storeProducts(userArray);
      return 1;
    }
  }
}





function storeProducts(ProdArray)
{
/*console.log(ProdArray);
localStorage.adminproducts=JSON.stringify(ProdArray);*/

var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
   
    }
  };
  xhttp.open("POST", "/adduser", true);
  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhttp.send("userList="+JSON.stringify(ProdArray));
}

function getStoredProducts()
{


console.log("get stored product running");
  

var xhttp=new XMLHttpRequest();
   
    xhttp.onreadystatechange=()=>{
    if(xhttp.readyState == 4 && xhttp.status == 200){
       
      console.log("response text");
      console.log(xhttp.responseText);
      userArray = JSON.parse(xhttp.responseText);
     
    }
   }
  xhttp.open("GET", "/adduser", true);
  xhttp.send();  
 

 

}
