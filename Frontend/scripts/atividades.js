//aqui vai ter todas as funcionalidades que uma atividade poder ter.

function check (){
   let atividades = document.querySelectorAll('.atividade');
   atividades.forEach((atv)=>{
        const check = atv.querySelector('.check');
        const checked = atv.querySelector('.checked');
        const nome = atv.querySelector('.nomeAtv');
        const data = atv.querySelector('.datahoraAtv');

        check.addEventListener('click', () => {
            check.style.display = 'none';
            checked.style.display = 'inline-block';
            nome.style = 'text-decoration: line-through;';
            data.style = 'text-decoration: line-through;';

        })

        checked.addEventListener('click', () => {
            check.style.display = 'inline-block';
            checked.style.display ='none';
            nome.style = 'text-decoration: none;';
            data.style = 'text-decoration: none;';
        })
   })
}

function editar (){
    const atividades = document.querySelectorAll('.atividade');

    atividades.forEach((atv) => {
        const nomeEl = atv.querySelector('.nomeAtv');
        const dataEl = atv.querySelector('.dataAtv');
        const horaEl = atv.querySelector('.horaAtv');
        const icon = atv.querySelector('.bi-pencil');

        icon.addEventListener('click', () => {
            const nome = nomeEl.textContent.trim();
            const data = dataEl.textContent.trim();
            const hora = horaEl.textContent.trim();

            document.getElementById('inpt_atvnome').value = nome;
            document.getElementById('inpt_atvdata').value = converterData(data);
            document.getElementById('inpt_atvhora').value = converterHora(hora);

            console.log(`Editando: ${nome}, ${data}, ${hora}`);
        });
    });
}

function excluir (){
    const atividades = document.querySelectorAll('.atividade');
    atividades.forEach((atv) =>{
        const icon = atv.querySelector('.bi-trash');
        icon.addEventListener('click', () =>{
            atv.remove();
        })
    })
}

function converterData(texto) {
    const dia = texto.match(/\d+/)?.[0];
    if (!dia) return '';

    const hoje = new Date();
    const ano = hoje.getFullYear();
    const mes = String(hoje.getMonth() + 1).padStart(2, '0');
    const diaFormatado = String(dia).padStart(2, '0');

    return `${ano}-${mes}-${diaFormatado}`;
}


// Função para converter "08h00" para "08:00"
function converterHora(texto) {
    return texto.replace('h', ':');
}

document.addEventListener('DOMContentLoaded', () => {
    check();
    editar();
    excluir();
});