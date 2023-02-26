


let url=`https://diamond-xuwq.onrender.com/customerData`;
     let username=document.querySelector("#email");
     let password=document.querySelector("#password");
     let loginBtn=document.querySelector("form");
     console.log("hello")
     

     loginBtn.addEventListener("submit",(e)=>{
        e.preventDefault();
       fetch(url).then((res)=>{
        return res.json();
       }).then((data)=>{
        console.log(data)
     let user=data.filter((ele)=>{
        return ele.email==username.value
     }) 
     
        if(user[0]==undefined){
            alert("Wrong Credentials")
        }else {
         // console.log(user[0].pass,password.value)
           if(user[0].pass==password.value){
            alert("Login Success")
            window.location.assign("index.html")
           }else  {
            alert("Wrong Password");
          email.value=null;
           }        
        }
       })
     })


   
     