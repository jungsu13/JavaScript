const form = document.querySelector('#contact-form')
const userName = document.querySelector('#username')
const email = document.querySelector('#email')
const message = document.querySelector('#message')
const dim = document.querySelector('.dim')
const modal = document.querySelector('.modal')
const closebtn = document.querySelector('.close_btn')
const inputs = document.querySelectorAll('input')


function sendmail (){
    form.addEventListener('submit',function(e){
        e.preventDefault()

        if(userName.value == '' || email.value == '' || message == ''){
            alert('이름,이메일,내용을 확인하세요')
            return
        }

        dim.classList.add('active')

        // emailjs.send("service_z2lb5xq","template_rdu9wdl");  내 이메일

        emailjs.sendForm('service_z2lb5xq','template_rdu9wdl',this)
        .then(()=> {
            console.log('SUCCESS!');
            modal.classList.add('active')
                   }, (error) => {
                    console.log('FAILED...', error);
                    }
            );
    })

    closebtn.addEventListener('click',()=>{
        modal.classList.remove('active')
        dim.classList.remove('active')

        inputs.forEach(input => { 
            input.value = ''
    
        })
        message.value = ''
    })
}

sendmail()

