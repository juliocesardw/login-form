if(document.querySelector('.formulario')){

    const inputs = document.querySelectorAll('.form-control');
    const btnPass = document.querySelector('.btn-pass');

    for (let i = 0; i < inputs.length; i++) {
        
        inputs[i].addEventListener('focusout',()=>{
            cambiarEstado(inputs[i]);
        });
        
    }

    
    function cambiarEstado(inputValor){
        if(inputValor.value.length > 0){
            inputValor.classList.add('input-active');
        }
        else{
            inputValor.classList.remove('input-active');
        }  
    }

    btnPass.addEventListener('click',()=>{

        const inputPassword=document.querySelector('.password');

        if(inputPassword.type==="password"){

            //cambiamos el tipo password a text
            inputPassword.setAttribute('type','text');

            //removemos la clase del icono
            btnPass.classList.remove('fa-eye-slash');

            //remplazmos por otro icono
            btnPass.classList.add('fa-eye');


        }else{

            inputPassword.setAttribute('type','password');
            btnPass.classList.remove('fa-eye');
            btnPass.classList.add('fa-eye-slash'); 
            
        }
    })

    
}