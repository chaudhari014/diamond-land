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

  // for local Storage;

  let form = document.querySelector("form")
  let isd = document.getElementById("numbers")
  let email = document.getElementById("email")
  let fullname=document.getElementById("first")
  let male = document.getElementById("male")
  // let female = document.getElementById("female")
  // let iwe = document.getElementById("iwe")
  let fullname2 = document.getElementById("last")
  let password = document.getElementById("myInput")
  let mobileno = document.getElementById("mobileno")
  // let c_password = document.getElementById("myInput2")
  // let round = document.getElementById("round")

  let data = JSON.parse(localStorage.getItem("cart"));
  console.log(data)

  form.addEventListener("submit",function(e){
    e.preventDefault()
    if (data===null){
      data=[]
    }
    formdata = {
      isd : numbers.value,
      email : emails.value,
      fullname :first.value,
      fullname2 :last.value,
      myInput : password.value,
      mobileno : mobileno.value,
      // myInput2 : c_password.value,
      // round : round.value,
      male : male.id,
      female : female.id,
      iwe : iwe.id

    }
    console.log(formdata)
    data.push(formdata)
    localStorage.setItem("cart",JSON.stringify(data))
  })

