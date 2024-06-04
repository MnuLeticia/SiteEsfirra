function sendwhatsapp(){
  let nome = document.getElementById('nome').value;
  let quantidadePedidos = document.getElementById('quantidadePedidos').value;
  let formaPagamento = document.getElementById('formaPagamento').value;
  let duvidas = document.getElementById('duvidas').value;
  if(nome && quantidadePedidos && formaPagamento){
    let mensagem = ` Nome: ${nome} \n Quantidade de esfirras: ${quantidadePedidos} \n Pagamento: ${formaPagamento}  `;
    let numeroWhatsApp = '5518997293116';
    // Criei o link para enviar via WhatsApp
    let linkWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagem)}`;
    // Abri o link no WhatsApp
    window.open(linkWhatsApp);
  }else if(nome && duvidas){
    let mensagem = `Nome: ${nome}\nDúvidas ou Sugestões: ${duvidas}`;
    let numeroWhatsApp = '5518997293116';
    // Criei o link para enviar via WhatsApp
    let linkWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagem)}`;
    // Abri o link no WhatsApp
    window.open(linkWhatsApp);
  }
  }
  