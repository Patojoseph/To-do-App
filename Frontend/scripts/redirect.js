function redirectCadastro (){
    const validation =  document.getElementById('cadastro_confirmacao');
    validation.style.display = 'block';

    const loading = document.querySelector('.loading');
    const loader = document.querySelector('.loader');
    const formCadastro = document.getElementById('formCadastro');
    const formLogin = document.getElementById('formLogin');
    const campos = document.querySelectorAll('.msg');
    if (formCadastro) formCadastro.style.display = 'none';
    if (formLogin) formLogin.style.display = 'none';
    loading.style.display = 'none';
    loader.style.display = 'none';
    campos.style.display = 'none';
}

function redirectCadastroLog (){
    window.location.href = './html/login.html';
}

function redirectLoging (){
    window.location.href = '../html/atividades.html';
}