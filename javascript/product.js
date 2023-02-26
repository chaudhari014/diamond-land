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
// let rahul_1=document.getElementById("rahul-1")
let rahul_2=document.getElementById("rahul-2")

let input_search=document.getElementById("input-search")
 console.log(input_search)
let searchbutton=document.getElementById("searchclick")

let low_number=document.getElementById("low-number")
let high_number=document.getElementById("high-number")
let pricefilter=document.getElementById("pricefilter")

let checkbox_product=document.querySelectorAll(".checkbox-product")
let obj={}

function checkboxfunction(data){
   let filterdata=data.filter((el)=>{
    return obj[el.type]
   })
   if(filterdata.length===0){
    fetchdata()
   }else{
    console.log(filterdata)
    rederdata(filterdata)
   }
}


function price_filter(data){
    let newfilter2=data.filter((el)=>{
        if(low_number.value<=el.price && high_number.value>=el.price){
            return true
        }else{
            return false
        }
    })
    rederdata(newfilter2)
}

function searchfunction(data){
    let newfilter=data.filter((el)=>{
          if((el.title.toUpperCase().includes(input_search.value.toUpperCase()))===true){
            return true
          }else{
            return false
          }
      })
      rederdata(newfilter)
    }
    async function fetchdata2(){
        let data=await fetch(`https://diamond-xuwq.onrender.com/Product`)
        data=await data.json()
        
        searchbutton.addEventListener("click",()=>{
            searchfunction(data)
            buttoncontainer.style.display="none"
        })

        pricefilter.addEventListener("click",()=>{
            price_filter(data)
            buttoncontainer.style.display="none"
           
        })  
        
        for(let i=0;i<checkbox_product.length;i++){
            checkbox_product[i].addEventListener("click",()=>{
                obj[checkbox_product[i].id]=checkbox_product[i].checked
                console.log(obj)
                checkboxfunction(data)
            })
        }

    }
    fetchdata2()

async function fetchdata(page=1,url=`https://diamond-xuwq.onrender.com/Product?_limit=21&_page=${page}`){
    let data=await fetch(url);
    let count=(data.headers.get("X-Total-Count"))
    data=await data.json();
    
    rederdata(data)
    paggination(count)
    rahul_2.innerText=LSdata.length
}
fetchdata()

function rederdata(data){
    container.innerHTML=""
    let productlist=`${data.map((el)=>getcard(el.img,el.title,el.price,el.ratting,el.id)).join("")}`
    
    container.innerHTML=productlist
    let addtocart=document.querySelectorAll(".rating-div button")
    for(let i=0;i<addtocart.length;i++){
        addtocart[i].addEventListener("click",(e)=>{
            if(matchitem(e.target.dataset.productId)){
                // addtocart[i].innerText="Product Already in Cart"
                alert("Item Already in Cart")
                
            }else{
                alert("Item Add to Cart")
                // addtocart[i].innerText="Product Add to Cart"
            // rahul_1.innerText=LSdata.length
            
            LSdata.push(e.target.dataset.productId)
            localStorage.setItem("product",JSON.stringify(LSdata))

            rahul_2.innerText=LSdata.length


            }
        })
    }
    
}
function matchitem(id){
    for(let i=0;i<LSdata.length;i++){
        if(id==LSdata[i]){
            return true
        }
    }
    return false
}

function getcard(img,title,price,ratting,id){
     let card=`<div class='product-div'><div class='card-image-div'><img class='card-image' src=${img} alt='error'></div>
     <div class='price-div'><p>₹${price.toLocaleString()} </p> <p><img src="/logo/icons/copy.png" alt=''>view simmilar</p></div>
     <h4>Check delivery date ></h4>
     <p>${title}</p>
     <div class='rating-div'><p><img src="/logo/icons/star.png" alt=''> ${ratting} ratting</p> <div><button data-product-id=${id}>Add to Cart</button></div></div>
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

// let cartbuttonshow = document.getElementById('cartbuttonshow');

//  cartbuttonshow.innerText = LSdata.length ;