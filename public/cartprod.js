// var cartArray=[];
// var cartId=0;
// var retrieved=[];
// var userArray=[];
// var loginarray=[];

// var cartProducts=document.getElementById("CartProducts");

// var flag=0;
// function addProducttoDOM(newObj)
// {
//   //retrieved=JSON.parse(localStorage.adminproducts);
//  // getretrivedProducts();
//   console.log("addProducttodom.......");
//   console.log(retrieved);
//   console.log("----------------------------");
//   var listdiv1=document.createElement("div");
//   listdiv1.setAttribute("id",newObj.pid);
//   var ind=getProductIndex(newObj.pid);
//   var prodName=newObj.pname;
//   var prodDesc=newObj.pdesc;
//   var prodprice=newObj.pprice;
//   var prodquan=newObj.pquan;
//   var label1=document.createElement("h2");
//   var label2=document.createElement("h3");
//   var label3=document.createElement("h3");
//   var label4=document.createElement("h3");
//   label1.innerHTML="Product Name: "+prodName;
//   label2.innerHTML="Product Desc: "+prodDesc;
//   label3.innerHTML="Product Price: "+prodprice;
//   console.log(ind);
//   if(retrieved[ind].Prodquan>0)
//   label4.innerHTML="Product Quantity: "+prodquan;
//   else{
//   label4.innerHTML="Out of stock !";
//   label4.setAttribute("style","color:orange;");
//   flag++;
//       }
//   label1.setAttribute("style","font-size:1.5em; font-Family:sans-serif; margin-left:15px;");
//   label2.setAttribute("style","font-size:1.5em; font-Family:sans-serif; margin-left:15px;");
//   label3.setAttribute("style","font-size:1.5em; font-Family:sans-serif; margin-left:15px;");
//   label4.setAttribute("style","font-size:1.5em; font-Family:sans-serif; margin-left:15px;");

//   var deleteCart=document.createElement("button");
//   deleteCart.innerHTML="Delete Product";
//   deleteCart.setAttribute("id","deleteCart");
//   deleteCart.setAttribute("style","margin-left:15px");
//   deleteCart.setAttribute("style","margin-top:10px");
//   deleteCart.setAttribute("style","height:30px; color:black; background-color:grey; font-size: 12px; border:none; margin-left:10px; margin-top:30px;");

//   listdiv1.append(label1);
//   insertBlankLine(listdiv1);
//   listdiv1.append(label2);
//   insertBlankLine(listdiv1);
//   listdiv1.append(label3);
//   insertBlankLine(listdiv1);
//   listdiv1.append(label4);
//   insertBlankLine(listdiv1);
//   listdiv1.append(deleteCart);
//   insertBlankLine(listdiv1);
//   insertBlankLine(listdiv1);
//   insertBlankLine(listdiv1);
//   listdiv1.setAttribute("style","border:ridge");
//   cartProducts.append(listdiv1);

//   deleteCart.addEventListener("click",function(){
//     var target=event.target.parentNode;
//     var obj={
//       uid:userArray[userArray.length-1].username,
//       pid:target.id
//     }
//     deleteFromDataBase(obj);
//     var removeId=deleteFormCart(parseInt(target.id),userArray[userArray.length-1].username);
//     console.log(removeId);
//     removeFromArray(removeId);
    
//     updateDOM(target);
//   });
// }

// //*******************delete from database********************* */

// function deleteFromDataBase(obj){
  
//   var xhttp = new XMLHttpRequest();
//   xhttp.onreadystatechange = function() {
//   if (this.readyState == 4 && this.status == 200) {
   
//   }
// };
// xhttp.open("POST", "/cartdelete", true);
// xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

// xhttp.send("obj="+JSON.stringify(obj));
// }

// /*
// function getStoredProducts()
// {
// if(!localStorage.cartProduct)
// {
// localStorage.cartProduct=JSON.stringify([]);
// }
// else
// {
// cartArray=JSON.parse(localStorage.cartProduct);
// for(i=0;i<cartArray.length;i++)
// {
// var findId=checkId(cartArray[i].UserId);
// if(findId==true)
// addProducttoDOM(cartArray[i]);
// console.log(findId);
// }}}*/
// var activeUser="";
// function getStoredProducts()
// {

//   console.log("get stored product running");
  
// /*if(!localStorage.adminproducts)
// {
// localStorage.adminproducts=JSON.stringify([]);
// }
// else
// {
// ProdArray=JSON.parse(localStorage.adminproducts);
// ProdId=ProdArray[ProdArray.length-1].Prodid+1;
// */
// var xhttp=new XMLHttpRequest();
   
//     xhttp.onreadystatechange=()=>{
//     if(xhttp.readyState == 4 && xhttp.status == 200){
       
//       console.log("response text");
//       console.log(xhttp.responseText);
//       cartArray = JSON.parse(xhttp.responseText);
     
//      activeUser=loginarray[loginarray.length-1].username;

//     for(i=0;i<cartArray.length;i++)
//     {
//     //ar findId=checkId(cartArray[i].uid);
//     //if(findId==true)
//     if(cartArray[i].uid==activeUser)
//     addProducttoDOM(cartArray[i]);
//     //console.log(findId);
//   }

//   totalPrice(cartArray);
    
   

   

//     }
//   }
//   xhttp.open("GET", "/cartarray", true);
//   xhttp.send();  
 

     
 
// }




// /*function checkId(username)
// {
//   for(var i=0;i<userArray.length;i++)
//   {
//     if(userArray[i].username==username){
//     return true;}
//   }
//   return false;
// }*/


// function insertBlankLine(divi)
// {
//   var br=document.createElement("br");
//   divi.appendChild(br);
// }


// function getIndex(id)
// {
//   for(var i=0;i<cartArray.length;i++)
//   {
//     if(cartArray[i].pid==id)
//     {
//       return i;
//     }
//   }
// }

// function getProductIndex(id)
// {
//   for(var i=0;i<retrieved.length;i++)
//   {
//     if(retrieved[i].Prodid==id)
//     return i;
//   }
//   return 0;
// }


// function removeFromArray(id)
// {
//   if(flag!=0)
//   flag--;
//   cartArray.splice(id,1);
//   console.log(cartArray);
  
//    totalPrice(cartArray);
  
//   storeProducts(cartArray);
// }


// function updateDOM(target)
// {
  
 
//   target.parentNode.removeChild(target);
// }

// function storeProducts(CartArray)
// {
// localStorage.cartProduct=JSON.stringify(CartArray);
// }


// function checkOutUser()
// {
//   if(userArray.length==0)
//   {
//     alert("You need to Login first.");
//     location.href="file:///F:/JS/Products/login.html";
//   }
//   else
//   {
//    if(flag!=0)
//    {
//      alert("First Delete Out Of Stock Products !");
//      console.log(retrieved);
//    }
//    else if(!checkCart(userArray[userArray.length-1].username))
//    {
//      alert("Your Cart is empty.");
//    }
//    else if(quanEmpty())
//    {
//      alert("Some Products Are Out Of Stock !");
//      location.href="viewProducts.html";
//    }
//    else
//    {
//    //console.log(retrieved);
//    //cartArray=JSON.parse(localStorage.cartProduct);
//    for(var i=0;i<cartArray.length;i++)
//    {
//      console.log(cartArray);
//      var g=deleteFormCart(cartArray[i].pid,userArray[userArray.length-1].username);
//       if(g!=-1){
//        var ind=getProductIndex(cartArray[i].pid);
//        console.log("ind is "+ind);
//        retrieved[ind].Prodquan=retrieved[ind].Prodquan-cartArray[i].pquan;
//        cartArray.splice(g,1);
//        console.log(cartArray);
//        i--;
//      }
//   }

//    console.log(retrieved);
//    console.log(cartArray);
//    alert("Thankyou For Shopping With Us!");
//    //localStorage.cartProduct=JSON.stringify(cartArray);
//    //localStorage.adminproducts=JSON.stringify(retrieved);
//    updateProducts(retrieved);
//    emptyCart(activeUser);
   
//    location.href="file:///F:/JS/Products/viewProducts.html";
// }
// }
// }


// function deleteFormCart(id,username)
// {
//   console.log("passed id is---------"+id+"  username "+username);
//   for(var i=0;i<cartArray.length;i++)
//   {
//      if(cartArray[i].uid==username && cartArray[i].pid==id)
//      {
//        return i;
//      }
//   }
//   return -1;
// }


// function getSessionProducts()
// {
//   // if(sessionStorage.logarray)
//   // userArray=JSON.parse(sessionStorage.logarray);
//   // console.log(userArray);

//     // if(sessionStorage.logarray)
//   // userArray=JSON.parse(sessionStorage.logarray);
//   console.log("login array fetching..........");
  

// var xhttp=new XMLHttpRequest();
   
//     xhttp.onreadystatechange=()=>{
//     if(xhttp.readyState == 4 && xhttp.status == 200){
       
//       console.log("response text for login array-----------");
//       console.log(xhttp.responseText);
//       userArray = JSON.parse(xhttp.responseText);
    
//    console.log(userArray);


     
//     }
//    }

//   xhttp.open("GET", "/loginarray", true);
//   xhttp.send();  
 



// }


// function continueUser()
// {
//   location.href="viewProducts.html";
// }


// function checkCart(username)
// {
//   for(var i=0;i<cartArray.length;i++)
//   {
//     if(cartArray[i].uid==username)
//     return true;
//   }
//   return false;
// }



// function quanEmpty()
// {
//   //retrieved=JSON.parse(localStorage.adminproducts);
//   console.log(retrieved);
//   for(var i=0;i<cartArray.length;i++)
//   {
//     if(cartArray[i].uid==userArray[userArray.length-1].username)
//     {
//       for(var j=0;j<retrieved.length;j++)
//       {
//         if(retrieved[j].Prodid == cartArray[i].pid && retrieved[j].Prodquan<=0)
//         {
//           return true;
//         }
//       }
//     }
//   }
//   return false;
// }


// function totalPrice(cartArray)
// {
//   let totalprice=0;
//   console.log("cart array under tp");
//   console.log(cartArray);
//   for(var i=0;i<cartArray.length;i++)
//   {
//     if(cartArray[i].uid==activeUser)
//     totalprice=totalprice+(cartArray[i].pquan*cartArray[i].pprice);
//   }
//   var label=document.getElementById("total");
//   label.innerHTML="Total Price: "+totalprice;
// }



// function getretrivedProducts(){

//   console.log("get stored product running");
  

// var xhttp=new XMLHttpRequest();
   
//     xhttp.onreadystatechange=()=>{
//     if(xhttp.readyState == 4 && xhttp.status == 200){
       
//       console.log("response text");
//       console.log(xhttp.responseText);
//      retrieved = JSON.parse(xhttp.responseText);
     
//     }
//   }
//   xhttp.open("GET", "/array", true);
//   xhttp.send();  
 

     
 
// }


// function getloginarray(){
//   console.log("get stored product running");
  

//   var xhttp=new XMLHttpRequest();
     
//       xhttp.onreadystatechange=()=>{
//       if(xhttp.readyState == 4 && xhttp.status == 200){
         
//         console.log("response text");
//         console.log(xhttp.responseText);
//        loginarray = JSON.parse(xhttp.responseText);
       
//       }
//     }
//     xhttp.open("GET", "/loginarray", true);
//     xhttp.send();  
   
  
// }


// function updateProducts(retrieved)
// {
//   var xhttp = new XMLHttpRequest();
//     xhttp.onreadystatechange = function() {
//     if (this.readyState == 4 && this.status == 200) {
     
//     }
//   };
//   xhttp.open("POST", "/updateproducts", true);
//   xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

//   xhttp.send("productList="+JSON.stringify(retrieved));
// }

// function emptyCart(username)
// {
//   var xhttp = new XMLHttpRequest();
//   xhttp.onreadystatechange = function() {
//   if (this.readyState == 4 && this.status == 200) {
   
//   }
// };
// xhttp.open("POST", "/emptycart", true);
// xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

// xhttp.send("username="+JSON.stringify(username));
// }
var QueArray=[]
var ansArray=[]
function getStoredProducts(){
  console.log("get stored question running");
  

var xhttp=new XMLHttpRequest();
   
    xhttp.onreadystatechange=()=>{
    if(xhttp.readyState == 4 && xhttp.status == 200){
       
      console.log("response text");
      console.log(xhttp.responseText);
      QueArray = JSON.parse(xhttp.responseText);


   calculate();

    }
  }
  xhttp.open("GET", "/questionarray", true);
  xhttp.send();  
 

    
}

function getSessionProducts(){

  console.log("getting answer array");
  

  var xhttp=new XMLHttpRequest();
     
      xhttp.onreadystatechange=()=>{
      if(xhttp.readyState == 4 && xhttp.status == 200){
         
        console.log("response text");
        console.log(xhttp.responseText);
      ansArray= JSON.parse(xhttp.responseText);
     
  
    
         console.log("ans array");
         console.log(ansArray);  
      }
    }
    xhttp.open("GET", "/answerarray", true);
    xhttp.send();  
   
}

var max=0;

function total()
{
  console.log("total running");

  for(var i=0;i<QueArray.length;i++)
  {
    console.log(QueArray[i].marks);
      max=max+QueArray[i].marks;
  }
}

function getIndex(Queid)
{
  for(var i=0;i<ansArray.length;i++)
  {
    if(ansArray[i].Queid==Queid)
    return i;
  }
  return -1;
}

var sum=0;

function calculate(){
  total();

  for(var i=0;i<QueArray.length;i++)
  {
    var temp=getIndex(QueArray[i].Queid);
    if(temp!=-1)
    {
      if(ansArray[temp].answer==QueArray[i].ans)
      sum=sum+QueArray[i].marks;
    }
  }

  document.getElementById('result').innerHTML=sum+"/"+max;


}