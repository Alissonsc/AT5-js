function lerNomesIdadesSalarios() {

    let continuar = true;
    let contador = 0;
    let empregados = [];
    do {
        let empregado = [];
        contador++;
        let nome = prompt("Informe o Nome completo do funcionário:");
        nome = nome.trim();
        //Entra em Numeros e Nomes de 2 letras pra baixo
        while (isNaN(nome) === false || nome.indexOf(" ") < 3) {
            nome = prompt("Nome inválido, digite novamente o nome completo do funcionário:");
        }

        let pis = prompt("Informe o número do PIS do funcionário:");
        while (isNaN(pis) || pis.length !== 11 ) {
            idade = prompt("PIS inválido, digite novamente:");
        }

        let salario = prompt("Informe o Salário");
        while (isNaN(salario) === true || (parseFloat(salario) < 2000 || parseFloat(salario) > 20000)) {
            salario = prompt("Informe o Salário novamente:");
        }

        empregado["nome"] = nome;
        empregado["idade"] = parseInt(idade);
        empregado["salario"] = parseFloat(salario);

        empregados.push(empregado);

        if (contador < 5)
            continuar = true;
        else if (contador >= 5 && contador < 100)
            continuar = confirm("Deseja continuar o cadastro?");
        else
            continuar = false;


    } while (continuar === true);

    return empregados;

}
function exibirEmpreguetes(listaEmpregados) {

    let mensagem = "";
    for (let i = 0; i < listaEmpregados.length; i++) {
        let emp = listaEmpregados[i];
        mensagem += `
            Nome: ${emp["nome"]} <br/>
            Idade: ${emp["idade"]} anos <br/>
            Salário: R$ ${parseFloat(emp["salario"]).toFixed(2)} <br/>
            <br/><br/>
        `;
    }
    document.write(mensagem);
}

let lista = lerNomesIdadesSalarios();
exibirEmpreguetes(lista);

console.log(lista);