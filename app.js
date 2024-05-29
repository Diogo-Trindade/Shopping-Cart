var totalGeral;

limpar();

function adicionar() {
    var produto = document.getElementById('produto').value;
    var valorUnidade = parseFloat(produto.split('R$')[1]);
    var nomeProduto = produto.split('-')[0];
    var quantidade = parseInt(document.getElementById('quantidade').value);
       
    var precoUnidade = quantidade * valorUnidade;
    
    var carrinho = document.getElementById('lista-produtos');
    
    if (quantidade === '' || isNaN(quantidade) || produto.trim() === '') {
      alert("Produto ou Quantidade estão com valores inválidos !");
      return; 
  }
    carrinho.innerHTML += `<section class="carrinho__produtos__produto">
    <span class="texto-azul">${quantidade}x</span>${nomeProduto}<span class="texto-azul">R$${precoUnidade}</span>
  </section>`;

    // Atualizando o totalGeral corretamente
    totalGeral = totalGeral + precoUnidade;

    var campoTotal = document.getElementById('valor-total');

    // Atualizando o valor total com HTML
    campoTotal.textContent = `R$ ${totalGeral}`;
    document.getElementById('quantidade').value = 0;

}



function limpar(){
totalGeral = 0;
document.getElementById('lista-produtos').innerHTML = "";
document.getElementById('valor-total').textContent = 0;
}