function calculaNota3() {
    let nota1 = Number(document.getElementById('nota1').value)
    let nota2 = Number(document.getElementById('nota2').value)
    let writeNota3 = document.getElementById('exibeNota3')

    let nota3
    
    if (nota1 < 0 || nota1 > 10 || nota2 < 0 || nota2 > 10 || nota1 == null || nota2 == null) {
        alert('[ERRO]: A nota deve estar entre 0 e 10!')
    } else {
        nota3  = 21 - (nota1 + nota2) 
        writeNota3.innerHTML = `Para passar com 7 de média então sua 3º nota deve ser: ${nota3}!`
        
        
    }
}