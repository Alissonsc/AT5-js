function lerNomesIdadesSalarios() {
    let continuar = true;
    let contador = 0;
    let empregados = [];

    do {
        let empregado = {};
        contador++;

        let nome = prompt("Informe o Nome completo do funcionário:");
        nome = nome.trim();

        while (nome.length < 3 || !isNaN(nome) || nome.indexOf(" ") < 3) {
            nome = prompt("Nome inválido, digite novamente o nome completo do funcionário:");
        }

        let pis = prompt("Informe o número do PIS do funcionário:");
        while (isNaN(pis) || pis.length !== 11) {
            pis = prompt("PIS inválido, digite novamente:");
        }

        let idade = prompt("Informe a Idade do funcionário:");
        while (isNaN(idade) || parseInt(idade) < 18 || parseInt(idade) > 100) {
            idade = prompt("Idade inválida, digite novamente:");
        }

        let salario = prompt("Informe o valor da hora trabalhada:");
        while (isNaN(salario) || (parseFloat(salario) < 20 || parseFloat(salario) > 500)) {
            salario = prompt("Valor inválido, tente novamente:");
        }

        let horasTrabalhadas = prompt("Informe a quantidade de horas trabalhadas no mês:");
        while (isNaN(horasTrabalhadas) || parseFloat(horasTrabalhadas) < 20 || parseFloat(horasTrabalhadas) > 200) {
            horasTrabalhadas = prompt("Período inválido, digite novamente:");
        }

        empregado["nome"] = nome;
        empregado["pis"] = pis;
        empregado["idade"] = parseInt(idade);
        empregado["salario"] = parseFloat(salario);
        empregado["horasTrabalhadas"] = parseFloat(horasTrabalhadas);
        empregado["salarioBruto"] = empregado["salario"] * empregado["horasTrabalhadas"];
        empregado["inss"] = calcularINSS(empregado["salarioBruto"]);
        empregado["iss"] = empregado["salarioBruto"] * 0.05;
        let salarioAposDescontos = empregado["salarioBruto"] - empregado["inss"] - empregado["iss"];
        empregado["irpf"] = calcularIRPF(salarioAposDescontos);
        empregado["salarioLiquido"] = salarioAposDescontos - empregado["irpf"];

        empregados.push(empregado);

        if (contador < 5)
            continuar = true;
        else if (contador >= 5 && contador < 50)
            continuar = confirm("Deseja continuar o cadastro?");
        else
            continuar = false;

    } while (continuar);

    return empregados;
}

function calcularINSS(salarioBruto) {
    let inss = 0;

    if (salarioBruto <= 1500.99) {
        inss = salarioBruto * 0.075;
    } else if (salarioBruto <= 3000.99) {
        inss = salarioBruto * 0.09;
    } else if (salarioBruto <= 5000.99) {
        inss = salarioBruto * 0.12;
    } else {
        inss = salarioBruto * 0.14;
    }

    return inss;
}

function calcularIRPF(salario) {
    let irpf = 0;

    if (salario <= 1500.99) {
        irpf = 0;
    } else if (salario <= 2000.99) {
        irpf = salario * 0.075;
    } else if (salario <= 3000.99) {
        irpf = salario * 0.15;
    } else if (salario <= 4000.99) {
        irpf = salario * 0.225;
    } else {
        irpf = salario * 0.275;
    }

    return irpf;
}

function exibirEmpreguetes(listaEmpregados) {
    let mensagem = "";
    for (let i = 0; i < listaEmpregados.length; i++) {
        let emp = listaEmpregados[i];
        mensagem += `
            Nome: ${emp["nome"]} <br/>
            PIS: ${emp["pis"]} <br/>
            Idade: ${emp["idade"]} anos <br/>
            Salário por hora: R$ ${emp["salario"].toFixed(2)} <br/>
            Horas Trabalhadas: ${emp["horasTrabalhadas"]} horas <br/>
            Salário Bruto: R$ ${emp["salarioBruto"].toFixed(2)} <br/>
            Desconto do INSS: R$ ${emp["inss"].toFixed(2)} <br/>
            Desconto do ISS: R$ ${emp["iss"].toFixed(2)} <br/>
            Desconto do IRPF: R$ ${emp["irpf"].toFixed(2)} <br/>
            Salário Líquido: R$ ${emp["salarioLiquido"].toFixed(2)} <br/>
            <br/><br/>
        `;
    }
    document.write(mensagem);
}

let lista = lerNomesIdadesSalarios();
exibirEmpreguetes(lista);

console.log(lista);