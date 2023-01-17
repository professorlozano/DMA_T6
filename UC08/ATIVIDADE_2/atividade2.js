let lista = []
let opcao = 's'

while (opcao == 's')
{
    let nome = prompt("Digite o nome do participante: ")
    let idade = prompt("Digite a idade do participante: ")

    if(idade > 18)
    {
        if(lista.length < 100)
        {
            alert("Cadastro efetuado com sucesso!!!")
            lista.push(nome)
        }
        else
        {
            alert("Cadastro não permitido, pois a lista está cheia")
        }  
    }
    else
    {
        alert("Cadastro não permitido pela idade")
    }

    opcao = prompt("Deseja cadastrar outro participante? (s ou n")
}

i = 0
while(i < lista.length)
{
    console.log(lista[i])
    i++
}