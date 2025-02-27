let current="light";


let mode=document.querySelector("#mode");
mode.addEventListener("click",()=>{
   if(current=="light"){
    current="dark";
    document.querySelector("body").style.backgroundColor="black";
   }else{
    current="light";
    document.querySelector("body").style.backgroundColor="white";
   }
   console.log(current);
})