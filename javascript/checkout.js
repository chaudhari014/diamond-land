//--------------------------------------------
let homeselectedbutton = document.getElementById('home')
let officeselectedbutton = document.getElementById('office')
let loginbar = document.getElementById('logininfo');
let loginbarblack = document.querySelector('#loginbar >div:nth-child(1)');
let loginbarbutton = document.querySelector('#loginbar >div:nth-child(2) button');
let giftbarbutton = document.querySelector('#giftmessage_div5 button');
let giftbar = document.getElementById('giftmessagearea');
let giftbarblack = document.querySelector('#giftmessage>div:nth-child(1)');
let addressbar = document.getElementById('addressinfodiv2');
let paymentbar = document.getElementById('paymetntypebox')
let paymentbar2 = document.getElementById('paymentbararea')
let paymentbutton = document.getElementById('paymentmodebutton');
let addressblack = document.querySelector('#addressinfo >div:nth-child(1)');
let payamountbutton = document.getElementById('payamountbutton');
let gifttextarea = document.getElementById('gifttextarea');
let upiinput = document.getElementById('upiinput');
let cartshow = document.getElementById('purchasedatashow');
let totalcxhastopay = document.getElementById('totalcxhastopay');
let extraoff = document.getElementById('extra3');
let cartdiscount = document.getElementById('cartdiscount');
let subtotal = document.getElementById('subtotal')
let sign = (localStorage.getItem('sign')) || false;
let address = localStorage.getItem('address') || false;
let accesstoken = localStorage.getItem('accesstoken') || false;
//---------------------------------------------
let LSdata=JSON.parse(localStorage.getItem("product"))||[]

//---------------------------------------------
homeselectedbutton.addEventListener('click',()=>{
    homeselectedbutton.style.backgroundColor = '#8863FB';
    homeselectedbutton.style.color = 'white'
    officeselectedbutton.style.backgroundColor = 'white';
    officeselectedbutton.style.color = 'black'
})


officeselectedbutton.addEventListener('click',()=>{
    officeselectedbutton.style.backgroundColor = '#8863FB';
    officeselectedbutton.style.color = 'white'
    homeselectedbutton.style.backgroundColor = 'white';
    homeselectedbutton.style.color = 'black'
    console.log('h')
})


if(1) {
    loginbar.style.display='none'
    loginbarblack.style.backgroundColor = 'green'
    loginbarblack.style.padding = '0px';

}else{
   giftbar.style.display='none'
   addressbar.style.display='none'
   paymentbar.style.display='none'
    paymentbar2.style.display='none';
    sign = true;
    localStorage.setItem('sign',JSON.stringify(sign) )
    address = false;
    localStorage.setItem('address',address)

}


// check if sign is T/F; if true that mean cx. have enter the message or cx. don't want to enter message;


 console.log(sign)
if(sign=='true') {
    console.log(sign);
    giftbar.style.display='none'
    giftbarblack.style.backgroundColor = 'green'
    giftbarblack.style.padding = '0px';
}



giftbarbutton.addEventListener('click',()=>{
    
   if(gifttextarea.value) {
     setTimeout(() => {
        giftbar.style.display='none'
        giftbarblack.style.backgroundColor = 'green'
        giftbarblack.style.padding = '0px';
         sign = true;
         localStorage.setItem('sign',JSON.stringify(sign) )
     }, 1000);
   }else if(sign){
        alert('You can Enter Message for your Beloved');

   }
})

giftbarblack.addEventListener('click',()=>{
    giftbar.style.display='block'
    giftbarblack.style.backgroundColor = 'black'
        giftbarblack.style.padding = '4px';
        sign = false;
        localStorage.setItem('sign',JSON.stringify(sign) )
})



paymentbutton.addEventListener('click',function(){
    //-------------------------------------------
// address details
let addressobj = {};
let first = document.getElementById('firstname').value;
let last = document.getElementById('lastname').value;
let street = document.getElementById('street').value;
let additionalinfo = document.getElementById('additionalinfo').value;
let pincode = document.getElementById('pincode').value;
let city = document.getElementById('city').value;
let mobile = document.getElementById('moblienumber').value;
let state = document.getElementById('state').value;

let name = `${first} ${last}`
  if(street=='' || additionalinfo =='') {
    addressobj= {name,pincode,city,mobile,state};
    console.log(addressobj)
  }else{
    addressobj  = {name,street,additionalinfo,pincode,city,mobile,state}
    console.log(addressobj)
  }

  if(addressobj.mobile) {
      setTimeout(() => {
        addressbar.style.display='none'
        addressblack.style.backgroundColor = 'green'
        addressblack.style.padding = '0px';
         address = true;
        localStorage.setItem('address',address)
      }, 1000);
  }else{
    alert('Please Enter All Details')
  }
})

addressblack.addEventListener('click',()=>{
    addressbar.style.display='block'
    addressblack.style.backgroundColor = 'black'
    addressblack.style.padding = '4px';
    address = false;
    localStorage.setItem('address',address)
})

if(address=='true'){
    addressbar.style.display='none'
    addressblack.style.backgroundColor = 'green'
    addressblack.style.padding = '0px';
}


//payment button

payamountbutton.addEventListener('click',()=>{
    if(upiinput.value.includes('@')) {
        alert('Congratualtion You have made a successfully Payment')
        window.location.href = "/html/congratualtion.html"
    }else {
        alert('Please Enter the Valid UPI ID')
    }
})

// collect the cartdata from localStorage and append in the checkoutpage



function fetchingFromLS(){
  for (let i=0; i<LSdata.length; i++) {
    fetchandrender(LSdata[i]);
   // console.log(cartdata[i])
}

}

fetchingFromLS()


async function fetchandrender(id){
    let request = await fetch(`https://diamond-xuwq.onrender.com/Product/${id}`);
    let data = await request.json();

    //console.log(data);
    displaydata(data)
}




let past = null;

function displaydata(ele) {
  // cartshow.innerHTML = null;
  let total = 0; 

    total+=ele.price;

     let cards = getcards(ele.img,ele.price,ele.title,ele.ratting,ele.id)

    cartshow.innerHTML += cards; 
    

    let selecttags = document.querySelectorAll('.quantity');
    //console.log(total);
    for(let selects of selecttags) {
        selects.addEventListener('change',(e)=>{
            let quantityval = selects.value;
            let prices = e.target.dataset.price;
            let newtotal = (prices-1*quantityval);
           
            console.log(past)
            if(past==null) {
                total+=newtotal;
            }else{
                total-=((past-1)*prices);
                console.log(total,past-1,prices);
                total+=(quantityval-1)*prices;

                console.log(total,quantityval-1,prices);
            }
            subtotal.innerText = total;
            let discountval = (total*0.1).toFixed(1)
            let discount = total-(total*0.1).toFixed(1)
            cartdiscount.innerText = discountval;
            let extraval = (discount*0.03).toFixed(1)
            extra3 = discount-(discount*0.03).toFixed(1)
            extraoff.innerText = extraval;
            totalcxhastopay.innerText = extra3.toLocaleString();
            //totalcxhastopay.innerText = total;
            past = selects.value;
            payamountbutton.innerText = "₹ "+  extra3.toLocaleString();
            
        })

    }
    console.log('print')
            subtotal.innerText = total;
            let discountval = (total*0.1).toFixed(1)
            let discount = total-(total*0.1).toFixed(1)
            cartdiscount.innerText = discountval;
            let extraval = (discount*0.03).toFixed(1)
            extra3 = discount-(discount*0.03).toFixed(1)
            extraoff.innerText = extraval;
            totalcxhastopay.innerText = extra3.toLocaleString();
            payamountbutton.innerText = "₹ "+ extra3.toLocaleString();

    let buttons = document.querySelectorAll('.cards button')

    for (let button of buttons) {
        button.addEventListener('click',(e)=>{
          total=0;
          subtotal.innerText = total;
          let discountval = (total*0.1).toFixed(1)
          let discount = total-(total*0.1).toFixed(1)
          cartdiscount.innerText = discountval;
          let extraval = (discount*0.03).toFixed(1)
          extra3 = discount-(discount*0.03).toFixed(1)
          extraoff.innerText = extraval;
          totalcxhastopay.innerText = extra3.toLocaleString();
          payamountbutton.innerText = "₹ "+ extra3.toLocaleString();
        

            removeele(e.target.dataset.id)
        })
    }
  
}


function getcards(img,price,title,ratting,id) {
    let cards = `
    <div data-id=${id} class="cards">
  <div>
    <img src=${img} alt="diamondLand">
  </div>
  <div>
    <div>
      <h2>${title}</h2>
    <span>Quantity:</span>
    <select name="number" class="quantity" data-price=${price}>
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
        </select>
        <button data-id=${id}>Buy Later</button>
        </div>
     <div>
      <h5>Delivery by -2nd to 3rd Mar</h5>
      <h3>₹${price}</h3>
     </div>
  </div>
</div>
    `
    return cards;
}



function removeele(id) {
    console.log(id)
  let newdata = LSdata.filter((ele)=>{
    return id!==ele;
  })

    LSdata = newdata;
    console.log(LSdata,newdata)
    localStorage.setItem('product',JSON.stringify(LSdata));
    let cartbuttonshow = document.getElementById('cartbuttonshow');
    //console.log(LSdata)
 cartbuttonshow.innerText = LSdata.length ;
 
    cartshow.innerHTML = null;
     fetchingFromLS();

}



let cartbuttonshow = document.getElementById('cartbuttonshow');
 console.log(LSdata)
 cartbuttonshow.innerText = LSdata.length ;

