const tela = document.querySelector(".display");

function calcular() {
 try {
    tela.value = eval(tela.value)
 } catch (error){
    tela.value = "Erro"
 };
};

function adicionar(valor) {
    tela.value += valor;
}