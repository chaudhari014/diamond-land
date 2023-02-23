//--------------------------------------------
let homeselectedbutton = document.getElementById('home')
let officeselectedbutton = document.getElementById('office')


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