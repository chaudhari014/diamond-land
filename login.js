

let data = JSON.parse(localStorage.getItem("cart"))

let cont = document.getElementById("email")

let a = document.getElementById("last")

let button = document.getElementById("continue")

button.addEventListener("click",()=> {
    if (cont==data.email){
        alert ("Login successfull")
     }else{
        alert ("incorrect email")
     }
  


    //  if (cont==data.email){
    //     alert ("Login successfull")
    //  }else{
    //     alert ("incorrect email")
    //  }
})