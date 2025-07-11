//isso vai fazer mais sentido quando tiver como fazer as consultas no banco de dados, ent por enquanto eu vou fazer uma validação simples.

//ainda precisar ver quais campos vai ser utilizado para a validação.
function validation(){
    
    const campos = document.querySelectorAll('.inpt')
    let validation = true;
    
    function nomeAtv(){
        const regex = /^[a-zA-Z0-9_ +]+$/;
        if(!regex.test(campos[0].value)){
            validation = false;
            //menagem de erro para o usuário 
        }
    }

    function dataAtv(){
        //validação de data
    }

    function horaAtv(){
        //validação de hora
    }

    nomeAtv();
    dataAtv();
    horaAtv();
    return validation;
}
