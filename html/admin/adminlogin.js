
     let loginBtn=document.getElementById("button1");
     console.log(loginBtn)
     


     loginBtn.addEventListener('click',(e)=>{
        console.log("hello")
        e.preventDefault()
        let username=document.querySelector("#username").value;
     let password=document.querySelector("#password").value;

       if(username && password) {
        fetch(`https://diamond-xuwq.onrender.com/admindata?name=${username}`).then((res)=>{
            return res.json();
           })
           .then((data)=>{
            console.log(data)
            if(data[0].password==password){
                window.location.href = "/html/admin/dashbord.html"
            }else{
                alert("Password is Incorrect")
            }
           })
       }else {
         alert("please Enter All Information")
       }
  
     })

     console.log(username=document.querySelector("#username"))