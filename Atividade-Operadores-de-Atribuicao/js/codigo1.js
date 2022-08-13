

function calculaMedia() {
    let nota1 = Number(document.getElementById('nota1').value)
    let nota2 = Number(document.getElementById('nota2').value)
    let nota3 = Number(document.getElementById('nota3').value)
    let writeMedia = document.getElementById('exibeMedia')

    let media
    
    if (nota1 < 0 || nota1 > 10 || nota2 < 0 || nota2 > 10 || nota3 < 0 || nota3 > 10 || nota1 == null || nota2 == null || nota3 == null) {
        alert('[ERRO]: A nota deve estar entre 0 e 10!')
    } else {
        media = (nota1 + nota2 + nota3) / 3  
        media >= 7 ? writeMedia.innerHTML = 'Aluno APROVADO!!!' : writeMedia.innerHTML = 'Aluno REPROVADO!'
        
        
    }

}
