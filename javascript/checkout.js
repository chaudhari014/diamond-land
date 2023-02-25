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
let sign = localStorage.getItem('sign') || true;
let address = localStorage.getItem('address') || false;
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
let accesskey = 1;

if(accesskey) {
    loginbar.style.display='none'
    loginbarblack.style.backgroundColor = 'green'
    loginbarblack.style.padding = '0px';

}else{
    giftbar.style.display='none'
    addressbar.style.display='none'
    paymentbar.style.display='none'
    paymentbar2.style.display='none'
}
// check if sign is T/F; if true that mean cx. have enter the message or cx. don't want to enter message;

if(sign!=='true') {
    console.log(sign);
    giftbar.style.display='none'
    giftbarblack.style.backgroundColor = 'green'
    giftbarblack.style.padding = '0px';
}



giftbarbutton.addEventListener('click',()=>{
    
   if(gifttextarea.value || sign==false) {
     setTimeout(() => {
        giftbar.style.display='none'
        giftbarblack.style.backgroundColor = 'green'
        giftbarblack.style.padding = '0px';
         sign = false;
        localStorage.setItem('sign',sign)
     }, 1000);
   }else if(sign){
        alert('You can Enter Message for your Beloved');
        sign = false;
   }
})

giftbarblack.addEventListener('click',()=>{
    giftbar.style.display='block'
    giftbarblack.style.backgroundColor = 'black'
        giftbarblack.style.padding = '4px';
    sign=true;
    localStorage.setItem('sign',sign)
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
        alert('good')
    }else {
        alert('bad')
    }
})