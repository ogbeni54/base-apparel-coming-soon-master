const form = document.querySelector('.form1');
const warn = document.querySelector('.feedback');
const error1 = document.querySelector('#error1');
// const success = document.querySelector('.success');
// const wn = document.querySelector('.warning');



const mail = form.email;
const mailTest = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/

mail.addEventListener('keyup',()=>{
   setTimeout(()=>{ if(mailTest.test(mail.value)){
    mail.setAttribute('class', 'success');
}else{
    mail.setAttribute('class', 'warn');
    // console.log('Halleluyah');
    
}},100)
   

});

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    
    if(!mailTest.test(mail.value)){
        // warn.style = 'display: block';
        warn.textContent = 'Wrong email, please try again later';
        warn.style = 'color:red';
        error1.style = 'display: block';
        
    }else{
        // warn.style = 'display: block';
        warn.textContent = 'Valid email address Thanks for contacting us'
        warn.style = 'color:green';
        error1.style = 'display: none';
    }

    // console.log('We are safe');
});