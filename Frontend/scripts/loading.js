function loading (){
    const loading = document.querySelector('.loading');
    const loader = document.querySelector('.loader');
    const formCadastro = document.getElementById('formCadastro');
    const formLogin = document.getElementById('formLogin');
    if (formCadastro) formCadastro.style.display = 'none';
    if (formLogin) formLogin.style.display = 'none'
    loading.style.display = 'block';
    loader.style.display = 'block';


    setTimeout(function() {
        loading.classList.remove("loading");
        loader.classList.remove("loader");
        if (formCadastro){
            redirectCadastro();
        } else if (formLogin){
            redirectLoging();
        }
    }, 4580);
}

