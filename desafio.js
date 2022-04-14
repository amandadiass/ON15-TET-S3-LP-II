let clienteLilit = [
    {produto: 'Bolsa pequena',valor: 49.0}, 
    {produto: 'Cinto preto', valor: 22.0}, 
    {produto: 'Jaqueta Jeans', valor: 300.0}, 
    {produto: 'Calça preta', valor: 100.0}, 
    {produto: 'Blusa simples', valor: 35.0}, 
    {produto: 'Calça jeans clara', valor: 130.0}, 
    {produto: 'Blusa preta gola alta', valor: 60.0}, 
    {produto: 'Short verde canelado', valor: 80.0}, 
    {produto: 'Salto agulha 39', valor: 250.0}, 
    {produto: 'Tênis casual preto', valor: 120.0}, 
    {produto: 'meia calça transparente', valor: 30.0}]

let clienteMedeia = [
    {produto: 'Camisa de lã', valor: 59.0},
    {produto: 'Calcinha de renda', valor: 20.0},
    {produto: 'Calça jeans clara', valor: 130.0},
    {produto: 'Camiseta cinza', valor: 36.0},
    {produto:  'Meia calça transparente', valor: 30.0}]

let clienteMoira = [
    {produto: 'Calça preta', valor: 100.0},
    {produto: 'Meias de personagens', valor: 40.0},
    {produto: 'Short verde canelado', valor: 80.0},
    {produto: 'Óculos escuro marrom', valor: 100.0},
    {produto: 'Jaqueta Jeans', valor: 300.0},
    {produto: 'Coturno preto tratorado', valor: 190.0},
    {produto: 'Camiseta de Anime', valor: 60.0},
    {produto: 'Sutiã com bojo', valor:50.0},
    {produto: 'Blusa simples', valor: 35.0},
    {produto: 'Vestido de festa azul', valor: 250.0},
    {produto: 'Saia social preta', valor: 80.0}]

    // RESOLUÇÃO

let processaCompra = function (cliente) {

    let valorTotal = 0.0;
    let valorFinal = 0.0; 
    let totalDesconto = 0.0;
  

    for (let produto of cliente) {
        valorTotal = valorTotal + produto.valor;
        
        if (produto.valor >= 50.0 && produto.valor < 80.0) {
            totalDesconto = totalDesconto + produto.valor * 0.05;
        }
        if (produto.valor >= 80.0 && produto.valor <= 100.0) {
            totalDesconto = totalDesconto + produto.valor * 0.1;
        }
        if (produto.valor >= 100.0 && produto.valor <= 200.0) {
            totalDesconto = totalDesconto + produto.valor *0.2
        }
        if (produto.valor >= 200.0)
         totalDesconto = totalDesconto + produto.valor *0.5;
    }
    valorFinal = valorTotal - totalDesconto
    
    console.log (`esse é o valor total da compra sem desconto ${valorTotal}`)
    console.log (`esse é o valor final com desconto ${valorFinal}`)
    console.log (`esse é o valor do desconto ${totalDesconto}`)

    // CUPOM 

    if (cliente.length > 10 || valorFinal > 800.0){
        console.log (`Parabéns, você ganhou um cupom de 50,00 reais para a próxima compra!`)
    }

 }
 console.log(`clienteLilit`)
processaCompra(clienteLilit) 
// console.log (`clienteMedeia`)
// processaCompra (clienteMedeia) 
// console.log (`clienteMoira`)
// processaCompra (clienteMoira) 
