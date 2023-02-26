//---------------------------------
let ordertab = document.getElementById('order')
let producttab = document.getElementById('product')
let customertab = document.getElementById('customer')
let paymenttab = document.getElementById('payment')
let orderbutton = document.getElementById('orderbutton')
let productbutton = document.getElementById('productbutton');
let customerbutton = document.getElementById('customerbutton')
let paymentbutton = document.getElementById('paymentbutton')
let orderfilter = document.getElementById('orderfilter');
let productfilter = document.getElementById('productfilter');
let customerfilter = document.getElementById('customerfilter');
let paymentfilter = document.getElementById('paymentfilter')
let orderdiv = document.querySelector('#left_admininfo>:nth-child(1)');
let productAddOrUpdatebutton = document.getElementById('inputform_submitbutton');
// product page input tags 
let productname = document.getElementById('productname');
let productimg = document.getElementById("productimg");
let producttype = document.getElementById('producttype');
let productprice = document.getElementById('productprice')
let productid = document.getElementById('productid')
// checkbox is checked or not ;
let postrequest = document.getElementById('post');
let putrequest = document.getElementById('put')

let customerdatashow = document.getElementById('customerdatashow')
let productdatashow = document.getElementById('productdatashow');
let paymentdatashow = document.getElementById('paymentdatashow')
//-----------------------------------
// ordertab.style.display = 'none'
// producttab.style.display = 'none'
// customertab.style.display = 'none'
// paymenttab.style.display = 'none'

// will make order span in purple to show it acitve;
 if(screen.width<480){
    orderbutton.style.color = 'rgb(204, 49, 204)'
    orderbutton.style.fontSize = '10px'
    console.log('h')
 }else {
    orderbutton.style.color = 'rgb(204, 49, 204)'
    orderbutton.style.fontSize = '18px'
 }
 //console.log(screen.width<440)
orderbutton.addEventListener('click',()=>{
    ordertab.style.display = 'block'
    producttab.style.display = 'none'
    customertab.style.display = 'none'
    paymenttab.style.display = 'none'
    orderfilter.value = '';
    if(screen.width<480){
        orderbutton.style.color = 'rgb(204, 49, 204)'
    orderbutton.style.fontSize = '12px'
    productbutton.style.color = 'black'
    productbutton.style.fontSize = '10px'
    customerbutton.style.color = 'black'
    customerbutton.style.fontSize = '10px'
    paymentbutton.style.color = 'black'
    paymentbutton.style.fontSize = '10px'
     }else {
        orderbutton.style.color = 'rgb(204, 49, 204)'
    orderbutton.style.fontSize = '18px'
    productbutton.style.color = 'black'
    productbutton.style.fontSize = '16px'
    customerbutton.style.color = 'black'
    customerbutton.style.fontSize = '16px'
    paymentbutton.style.color = 'black'
    paymentbutton.style.fontSize = '16px'
     }
    
    console.log('order')
})

productbutton.addEventListener('click',()=>{
    fetchandgetdata()
    producttab.style.display = 'block'
    ordertab.style.display = 'none'
    customertab.style.display = 'none'
    paymenttab.style.display = 'none'
    productfilter.value = '';
    if(screen.width<480){
     productbutton.style.color = 'rgb(204, 49, 204)'
    productbutton.style.fontSize = '12px'
    orderbutton.style.color = 'black'
    orderbutton.style.fontSize = '10px'
    paymentbutton.style.color = 'black'
    paymentbutton.style.fontSize = '10px'
    customerbutton.style.color = 'black'
    customerbutton.style.fontSize = '10px'
     }else {
        productbutton.style.color = 'rgb(204, 49, 204)'
    productbutton.style.fontSize = '18px'
    orderbutton.style.color = 'black'
    orderbutton.style.fontSize = '16px'
    paymentbutton.style.color = 'black'
    paymentbutton.style.fontSize = '16px'
    customerbutton.style.color = 'black'
    customerbutton.style.fontSize = '16px'
     }
    
        console.log('product')
})


customerbutton.addEventListener('click',()=>{
    fetchandgetdatacustomer('https://diamond-xuwq.onrender.com/customerData');
    customertab.style.display = 'block'
    ordertab.style.display = 'none'
    producttab.style.display = 'none'
    paymenttab.style.display = 'none'
    customerfilter.value = '';
    if(screen.width<480){
        customerbutton.style.color = 'rgb(204, 49, 204)'
    customerbutton.style.fontSize = '12px'
    orderbutton.style.color = 'black'
    orderbutton.style.fontSize = '10px'
    productbutton.style.color = 'black'
    productbutton.style.fontSize = '10px'
    paymentbutton.style.color = 'black'
    paymentbutton.style.fontSize = '10px'
     }else {
        customerbutton.style.color = 'rgb(204, 49, 204)'
    customerbutton.style.fontSize = '18px'
    orderbutton.style.color = 'black'
    orderbutton.style.fontSize = '16px'
    productbutton.style.color = 'black'
    productbutton.style.fontSize = '16px'
    paymentbutton.style.color = 'black'
    paymentbutton.style.fontSize = '16px'
     }
    
        console.log('customer')
})


paymentbutton.addEventListener('click',()=>{
    fetchandgetdatapayment('https://diamond-xuwq.onrender.com/customerData')
    paymenttab.style.display = 'block'
    ordertab.style.display = 'none'
    producttab.style.display = 'none'
    customertab.style.display = 'none'
    paymentfilter.value = ""
    if(screen.width<480){
        paymentbutton.style.color = 'rgb(204, 49, 204)'
    paymentbutton.style.fontSize = '12px'
    orderbutton.style.color = 'black'
    orderbutton.style.fontSize = '10px'
    productbutton.style.color = 'black'
    productbutton.style.fontSize = '10px'
    customerbutton.style.color = 'black'
    customerbutton.style.fontSize = '10px'
     }else {
        paymentbutton.style.color = 'rgb(204, 49, 204)'
        paymentbutton.style.fontSize = '18px'
        orderbutton.style.color = 'black'
        orderbutton.style.fontSize = '16px'
        productbutton.style.color = 'black'
        productbutton.style.fontSize = '16px'
        customerbutton.style.color = 'black'
        customerbutton.style.fontSize = '16px'
     }
    
        console.log('payment')
})


// // Get the screen width and height
// var screenWidth = screen.width;
// var screenHeight = screen.height;

// // Display the screen size in the console
// console.log("Screen width: " + screenWidth + "px");
// console.log("Screen height: " + screenHeight + "px");

productAddOrUpdatebutton.addEventListener('click',(e)=>{
    e.preventDefault()
    console.log(postrequest.checked,putrequest.checked)
    if(postrequest.checked) {
        // we will do the post reqeust to server
        let id = (productid.value)
        let title = productname.value;
        let price = productprice.value;
        let type  = producttype.value;
        let img = productimg.value;
        let adminId = 35; 
        fetch(`https://diamond-xuwq.onrender.com/Product/${id}`,{
            method: 'PUT',
            headers:{"Content-Type": "application/json"},
            body: JSON.stringify({id,title,price,type,img,adminId})
        })
        .then((req)=> req.json())
        .then((data)=>{
            console.log(data);

            fetchandgetdata()
            
        })

        console.log('post')
    } else if(putrequest.checked){
        // we will do the put request ;
        let id = (productid.value)
        let title = productname.value;
        let price = productprice.value;
        let type  = producttype.value;
        let img = productimg.value;
        let adminId = 35; 
        fetch(`https://diamond-xuwq.onrender.com/Product`,{
            method: 'POST',
            headers:{"Content-Type": "application/json"},
            body: JSON.stringify({id,title,price,type,img,adminId})
        })
        .then((req)=> req.json())
        .then((data)=>{
            console.log(data);
            fetchandgetdata()
            
        })
        
    }
    
})

async function fetchandgetdata() {
    let req = await fetch(`https://diamond-xuwq.onrender.com/Product?adminId=35`)
    let data = await req.json();
    console.log(data);
    getcards(data)
}

//fetchandgetdata()


function getcards(data) {
    let cards = data.map((ele)=>{
        return getcard(ele.id,ele.title,ele.price,ele.ratting)
    }).join('')
    productdatashow.innerHTML = cards;

    let editbutton = document.querySelectorAll('.editbutton');

    for (let button of editbutton) {
        button.addEventListener('click',(e)=>{
            let id = (e.target.dataset.id)
            getprice(id,'button')
        })
    }



}

function getcard(id,name,price,ratting) {
    
    let  card = `
    <tr class="trows">
        <td>${name}</td>
        <td>Published</td>
        <td>${ratting}</td>
        <td>${price}</td>
        <td data-id=${id} class="editbutton">Edit</td>
    </tr>
    `
    return card;
}


async function fetchandgetdatacustomer(url) {
    let req = await fetch(url)
    let data = await req.json();
    //console.log(data);
    getcardscx(data)
}

fetchandgetdatacustomer('https://diamond-xuwq.onrender.com/customerData')


function getcardscx(data) {
    let cards = data.map((ele)=>{
        return getcardcx(ele.date,ele.name,ele.email,ele.order)
    }).join('')
    customerdatashow.innerHTML = cards;
}

function getcardcx(date,name,email,id) {
    let order = null;
    if(id=='TRUE'){
        order =   "Ordered"
    }else {
        order = "Not Ordered"
    }
   let  card = `
   <tr class="trows">
   <td>${date}</td>
   <td>${name}</td>
   <td>${email}</td>
   <td>${order}</td>
</tr>
   `
   return card;
}

customerfilter.addEventListener('change',()=>{
    console.log(customerfilter.value)
    if(customerfilter.value=='newCustomer'){
        fetchandgetdatacustomer(`https://diamond-xuwq.onrender.com/customerData?cx-type=new`)
    }else if(customerfilter.value=='loyalCustomer') {
        fetchandgetdatacustomer('https://diamond-xuwq.onrender.com/customerData?cx-type=loyal')
    }else{
        fetchandgetdatacustomer('https://diamond-xuwq.onrender.com/customerData?cx-type=inacitve')
    }
})






async function fetchandgetdatapayment(url) {
    let req = await fetch(url)
    let data = await req.json();
    console.log(data);
    getcardspay(data)
}

fetchandgetdatapayment('https://diamond-xuwq.onrender.com/customerData')

function getcardspay(data) {
    let cards = data.map((ele)=>{
        return getcardpay(ele.orderdata,ele.address,ele.productid)
    }).join('')
    paymentdatashow.innerHTML = cards;
}

let price = null;


function getcardpay(date,address,productid) {
    getprice(productid),'price';
    console.log(price)
   let  card = `
   <tr class="trows">
   <td>${date}</td>
   <td>${address}</td>
   <td>${price}</td>
   <td>${1}</td>
</tr>
   `
   return card;
}

async function getprice(id,type) {
  let req = await fetch(`https://diamond-xuwq.onrender.com/Product/${id}`)
  let data = await req.json()
 // console.log(data.price);
   if(type=='price'){
    price = data.price
   }else if(type=='button') {
     console.log(data);
     productname.value = data.title;
     productimg.value = data.img;
     productprice.value = data.price;
     producttype.value = data.type;
     productid.value = data.id
   }
}
