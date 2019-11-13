var userArray=[]
var Name=document.getElementById("name");
var Logout=document.getElementById("logout");


function getSessionProducts()
{
  
  console.log("login array fetching..........");
  

var xhttp=new XMLHttpRequest();
   
    xhttp.onreadystatechange=()=>{
    if(xhttp.readyState == 4 && xhttp.status == 200){
       
      console.log("response text for login array-----------");
      console.log(xhttp.responseText);
      userArray = JSON.parse(xhttp.responseText);
   
     

  if(userArray.length!=0)
{
  console.log("loggedin is calling---------");
loggedIn();

}
     
    }
   }

  xhttp.open("GET", "/loginarray", true);
  xhttp.send();  
 


}


function loggedIn()
{
  
 //console.log(userArray);
 //************************************ */
  Name.innerHTML="hello "+ userArray[userArray.length-1].username;
  Name.setAttribute("href","#");
  //************************** */
 

  //***************************************** *
  Logout.innerHTML="Logout";
  




  Logout.addEventListener("click",function(){

setSession("logout");

  
  });
 
}