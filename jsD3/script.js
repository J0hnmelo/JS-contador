/*input inicio id = i-inicio
input fim id = i-fim
input passo id = i-passo
function botao = calcular()
div resposta id = resposta
p cim  id = msg1
p baixo id = msg2
*/
function calcular(){
    var inicial = window.document.getElementById('i-inicio').value
    var final = window.document.getElementById('i-fim').value
    var passos = window.document.getElementById('i-passo').value
    var inicio = Number(inicial)
    var fim = Number(final)
    var passo = Number(passos)
    var mensagem1 = window.document.getElementById('msg1')
    var mensagem2 = window.document.getElementById('msg2')
    var resposta = ''

    if (inicio == 0 || fim == 0 || passo == 0) {
        window.alert('[ERROR] COMANDO INVALIDO')
        mensagem1.innerHTML = 'INSIRA TODOS OS VALORES CORRETAMENTE'
    }
    else {
        do {
            resposta  += `${inicio} <span>&#128073;</span>`
            inicio += passo  
        } while (inicio <= fim) {
        mensagem1.innerHTML = resposta + `<span>&#127988;</span>` 
        mensagem2.innerHTML = 'fim'
        }
      }  
} 