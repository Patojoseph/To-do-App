//função de validação do cadastro de novos usuários
function validarCadastro(){
    //selecionar os campos necessários
    const campos = document.querySelectorAll('.inpt');
    const span = document.querySelectorAll('.span_required');
    let validation = true;

    //validação do apelido
    function apelido(){
        // regex para verificar o nome
        const regex = /^[a-zA-Z0-9_]+$/;
        if (campos[0].value == '' || !regex.test(campos[0].value)){
            validation = false;
            //para testes
            console.log('Apelido incorreto' + campos[0].value);
            span[0].style.display = 'block';
            campos[0].style.border = '2px solid red';
            campos[0].style.color = 'red';
        } else {
            //para testes
            console.log('Apelido aprovado')
            span[0].style.display = 'none';
            campos[0].style.border = '2px solid #3F3F46';
            campos[0].style.color = '#ffffff';
        }
    }

    function email(){
        //regex para verificar o formato do email
        const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if(campos[1].value == '' || !regex.test(campos[1].value)){
            validation = false;
            //para testes 
            console.log('Email invalido' + campos[1].value)
            span[1].style.display = 'block';
            campos[1].style.border = '2px solid red';
            campos[1].style.color = 'red';
        } else {
            //para testes
            console.log('Email valido')
            span[1].style.display = 'none';
            campos[1].style.border = '2px solid #3F3F46';
            campos[1].style.color = '#ffffff';
        }
    }

    function senha (){
        //verificar se a senha tem mais de 8 caracteres
        if(campos[2].value.length < 8){
            validation = false;
            //para teste
            console.log('Senha invalida' + campos[2].value);
            span[2].style.display = 'block';
            campos[2].style.border = '2px solid red';
            campos[2].style.color = 'red';
        } else {
            //para teste
            console.log('Senha valida');
            span[2].style.display = 'none';
            campos[2].style.border = '2px solid #3F3F46';
            campos[2].style.color = '#ffffff';
        }
    }

    function confSenha (){
        if(campos[3].value != campos[2].value){
            validation = false;
            //para teste
            console.log('As senhas tem que ser iguais');
            span[3].style.display = 'block';
            campos[3].style.border = '2px solid red';
            campos[3].style.color = 'red';
        } else {
            //para teste
            console.log('As senhas são iguais');
            span[3].style.display = 'none';
            campos[3].style.border = '2px solid #3F3F46';
            campos[3].style.color = '#ffffff';
        }
    }

    function termos (){
        if(!document.getElementById("termos").checked){
            validation = false;
            //para teste
            console.log('Termos não aceitos');
        } else {
            console.log('Termos aceitos');
        }
    }

    apelido();
    email();
    senha();
    confSenha();
    termos();

    return validation;
};

//funçao de validação de login
function validarLogin(){
    const campos = document.querySelectorAll('.inpt');
    const span = document.querySelectorAll('.span_required');
    let validation = true;

    function email (){
        const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!regex.test(campos[0].value)){
            validation = false;
            span[0].style.display = 'block';
            campos[0].style.border = '2px solid red';
            campos[0].style.color = 'red';
        } else {
            span[0].style.display = 'none';
            campos[0].style.border = '2px solid #3F3F46';
            campos[0].style.color = '#ffffff';
        }
    };

    function senha (){
        if(campos[1].value.length < 8){
            validation = false;
            span[1].style.display = 'block';
            campos[1].style.border = '2px solid red';
            campos[1].style.color = 'red';
        } else {
            span[1].style.display = 'none';
            campos[1].style.border = '2px solid #3F3F46';
            campos[1].style.color = '#ffffff';
        }
    }

    email();
    senha();

    return validation;
};

//executa a validação do cadastro
document.addEventListener('DOMContentLoaded', () => {
    const formCadastro = document.getElementById('formCadastro');
    const formLogin = document.getElementById('formLogin');

    if (formCadastro) {
        formCadastro.addEventListener('submit', (e) =>{
            validarCadastro();
            if (!validarCadastro()){
                e.preventDefault();
            } else {
                e.preventDefault();
                loading();
            };
        })
    }

    if (formLogin){
        formLogin.addEventListener('submit', (e) => {
            validarLogin();
            if(!validarLogin()){
                e.preventDefault();
            } else {
                e.preventDefault();
                loading();
            }
        })
    }
})