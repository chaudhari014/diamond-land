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

//-------------------------------------------


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

giftbarbutton.addEventListener('click',()=>{
    
    giftbar.style.display='none'
    giftbarblack.style.backgroundColor = 'green'
    giftbarblack.style.padding = '0px';
})