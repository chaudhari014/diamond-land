function myFunction() {
    var x = document.getElementById("myInput");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }


function Toggle() {
    var x = document.getElementById("myInput2");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }


  
let IsdNumber=document.getElementById("numbers")
let MobNumber=document.getElementById("mobileno")
let Email=document.getElementById("emails")
let FirstName=document.getElementById("first")
let LastName=document.getElementById("last")
let Password=document.getElementById("myInput")
let Gender=document.getElementById("Gender")



let RegisterBtn=document.getElementById("Registerbtn")

RegisterBtn.addEventListener("click",function(e){
  alert("Register Successfully")
  e.preventDefault();


let isd=IsdNumber.value
let mob=MobNumber.value;
let email=Email.value;
let First=FirstName.value;
let last=LastName.value;
let Pass=Password.value;
let gender=Gender.value;


registerusers(isd,mob,email,First,last,Pass,gender)


})


  //pass obj value inside a function;

  function registerusers(isd,mob,email,First,last,Pass,gender){

    fetch("https://diamond-xuwq.onrender.com/customerData",{
    method : 'POST',
    body:JSON.stringify({
    name:`${First} ${last}`,
    isd:isd,
    Mob:mob,
    
    Gender:gender,
    pass:Pass,
email:email
    }),
     headers : {
      'Content-type':'application/json',
     }
    })
  }