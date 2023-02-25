let change_image_arr=["https://assets.cltstatic.com/images/responsive/DefaultBanner_Desktop.webp","https://banner.caratlane.com/live-images/4320a30823014770b49d6c35ba3508c9.jpg","https://banner.caratlane.com/live-images/10c2cf82f2ad425b960f2587933652a7.jpg","https://banner.caratlane.com/live-images/dab8c9bccb50479fbad968e7ea6ea450.webp","https://banner.caratlane.com/live-images/2f288a36fca243239f60f94730c6b49c.webp"]
let change_image=document.getElementById("change-images")
let forword_button=document.getElementById("forword-button")
let backword_button=document.getElementById("backword-button")
let settime=0
change_image.src=change_image_arr[settime]
forword_button.addEventListener("click",()=>{
    console.log(settime)
    settime++
    if(settime>=change_image_arr.length){
        settime=0;
    }
    change_image.src=change_image_arr[settime]
})
backword_button.addEventListener("click",()=>{
    console.log(settime)
    settime--
    if(settime<0){
        settime=change_image_arr.length-1;
    }
    change_image.src=change_image_arr[settime]
})

setInterval(()=>{
    if(settime===change_image_arr.length){
        settime=0;
    }
    
    change_image.src=change_image_arr[settime]
    
   
    settime++
},4000)

