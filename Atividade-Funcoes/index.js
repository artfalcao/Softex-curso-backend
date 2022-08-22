function funcao1() {
    const $div_central = document.getElementById('div-central')
    $div_central.innerHTML = `
    <img src="./img1.jpg" alt="img1" style="width: 400px; margin: auto;">
    `
}


let soma = (a, b) => {
    return a + b
}


function funcao2 () {
    const $num1 = Number(document.getElementById('num1').value)
    const $num2 = Number(document.getElementById('num2').value)
    const $resultado = document.getElementById('resultado')
    
    let resultado = soma($num1, $num2)

    $resultado.innerHTML = resultado

    return resultado
}

