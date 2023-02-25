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
// ------------------------------------------------image change part done-------------------------------------------------------------------///

let container=document.getElementById("container")
let buttoncontainer=document.getElementById("pagination-wrapper")
let select_filter=document.getElementById("select-filter")
let countpage=0
let LSdata=JSON.parse(localStorage.getItem("product"))||[]

async function fetchdata(page=1,url=`https://diamond-xuwq.onrender.com/Product?_limit=21&_page=${page}`){
    let data=await fetch(url);
    let count=(data.headers.get("X-Total-Count"))
    data=await data.json();
   
    rederdata(data)
    paggination(count)
    // console.log(container)
    // console.log(data)
}
fetchdata()

function rederdata(data){
    container.innerHTML=""
    let productlist=`${data.map((el)=>getcard(el.img,el.title,el.price,el.ratting,el.id)).join("")}`
    
    container.innerHTML=productlist
    let addtocart=document.querySelectorAll(".rating-div button")
    for(let i=0;i<addtocart.length;i++){
        addtocart[i].addEventListener("click",(e)=>{
            LSdata.push(e.target.dataset.productId)
            localStorage.setItem("product",JSON.stringify(LSdata))
        })
    }
    
}

function getcard(img,title,price,ratting,id){
     let card=`<div class='product-div'><div class='card-image-div'><img class='card-image' src=${img} alt='error'></div>
     <div class='price-div'><p>₹${price} </p> <p><img src="/logo/icons/copy.png" alt=''>view simmilar</p></div>
     <h4>Check delivery date ></h4>
     <p>${title}</p>
     <div class='rating-div'><p><img src="/logo/icons/star.png" alt=''> ${ratting}</p> <button data-product-id=${id}>Add to Cart</button></div>
     </div>` 

     return card
}

function paggination(page){
       let bt=Math.ceil(page/21)
       let arr=[]
       for(let i=1;i<=bt;i++){
        arr.push(`<button class='pagination-button' data-page-number='${i}'>${i}</button>`)
       }
       buttoncontainer.innerHTML=arr.join("")
    let button=document.querySelectorAll("#pagination-wrapper button")
    for(let key of  button){
        key.addEventListener("click",(e)=>{
            countpage=e.target.dataset.pageNumber
            // fetchdata(e.target.dataset.pageNumber)
            if(select_filter.value==="desc"){
                fetchdata(countpage,`https://diamond-xuwq.onrender.com/Product?_limit=21&_sort=price&_order=desc&_page=${countpage}`)
               
            }
            else if(select_filter.value==="asc"){
                fetchdata(countpage,`https://diamond-xuwq.onrender.com/Product?_limit=21&_sort=price&_order=asc&_page=${countpage}`)
            }
            else if(select_filter.value==="Rating"){
                fetchdata(countpage,`https://diamond-xuwq.onrender.com/Product?_limit=21&_sort=ratting&_order=desc&_page=${countpage}`)
            }else{
                 fetchdata(e.target.dataset.pageNumber)
            }
          key.classList.toggle("rahul")
            
            // console.log(e.target.dataset.pageNumber)
        })
    }
}
select_filter.addEventListener("click",()=>{
    if(select_filter.value==="desc"){
        fetchdata(countpage,`https://diamond-xuwq.onrender.com/Product?_limit=20&_sort=price&_order=desc&_page=${countpage}`)
       
    }
    else if(select_filter.value==="asc"){
        fetchdata(countpage,`https://diamond-xuwq.onrender.com/Product?_limit=20&_sort=price&_order=asc&_page=${countpage}`)
    }
    else if(select_filter.value==="Rating"){
        fetchdata(countpage,`https://diamond-xuwq.onrender.com/Product?_limit=20&_sort=ratting&_order=desc&_page=${countpage}`)
    }
});

// ---------------------------------------product id  add locala storage part start-----------------------------------------------////

// for(let i=0;i<addtocart.length;i++)
// console.log(addtocart.length)