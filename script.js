let quadro = {

    a1: '', a2:'', a3:'',
    b1: '', b2:'', b3:'',
    c1: '', c2:'', c3:''

}

let vez = '';
let mensagem = '';
let play = false;

document.querySelector('.reset').addEventListener('click', resetar);

document.querySelectorAll('.item').forEach(item => {

    item.addEventListener('click', itemClick);

} );

function itemClick(){

    let item = event.target.getAttribute('data-item');

    if(play && quadro[item] == ''){

        
        quadro[item] = vez;
        

        preencherQuadro();
        alternarJogador();

    }

}

function resetar(){
    
    mensagem = '';
    
    let jogador = Math.floor(Math.random() * 2);
    
    vez = (jogador == 0) ? 'x' : 'o';
    
    for(i in quadro){
        
        quadro[i] = '';
        
    }
    
    play = true;
    
    preencherQuadro();
    preencherInfo();
    
}

function preencherQuadro(){
    
    for(i in quadro){
        
        let item = document.querySelector(`div[data-item=${i}]`)



        item.innerHTML = `<span class="${quadro[i]}">${quadro[i]}</span>`;
        
    }

    verificaVencedor();
    
}

function preencherInfo(){
    
    document.querySelector('.vez').innerHTML = vez; 
    document.querySelector('.resultado').innerHTML = mensagem;
    
}

function verificaVencedor(){

    if(chekagem('x')){

        mensagem = '"X" venceu';
        play = false;

    }else if(chekagem('o')){

        mensagem = '"O" venceu';
        play = false;

    }
    else if(chekEmpate()){

        mensagem = 'Deu empate';
        play = false;

    }

}

function chekagem(jogador){

    let pos = [

        'a1,a2,a3',
        'b1,b2,b3',
        'c1,c2,c3',

        'a1,b1,c1',
        'a2,b2,c2',
        'a3,b3,c3',

        'a1,b2,c3',
        'a3,b2,c1'

    ]

    for(w in pos){

        let posArray = pos[w].split(',');
        let verificaArray = posArray.every(Option => quadro[Option] === jogador);
        
        if(verificaArray){

            return true;

        }

    }

    return false;

}

function chekEmpate(){

    for(i in quadro){

        if(quadro[i] == ''){

            return false;

        }

    }

    return true;

}

function alternarJogador(){

    if(vez == 'x'){

        vez = 'o';

    }else{

        vez = 'x';

    }

    preencherInfo();

}