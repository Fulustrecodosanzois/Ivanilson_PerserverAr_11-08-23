document.addEventListener("DOMContentLoaded", function () {
    // Seletor do botão "Enviar"
    const enviarBtn = document.querySelector(".enviar-btn");
  
    enviarBtn.addEventListener("click", function (e) {
      e.preventDefault();
  
      // Coletar dados do formulário
      const nome = document.querySelector(".nome").value;
      const telefone = document.querySelector(".telefone").value;
      const mensagem = document.querySelector(".mensagem").value;
      const escolha = document.querySelector(".escolha").value
  
      // Formatar a mensagem para envio no WhatsApp
      const mensagemFormatada = `Seja Bem Vindo(a)!%0A%0A**Informações do Contato**%0A%0A*Nome:* ${nome}%0A%0A*Telefone:* ${telefone}%0A%0A*Tipo de Serviço:* ${escolha}%0A%0A*Mensagem:*%0A%0A${mensagem}`;
  
      // Número de telefone para o qual você deseja enviar a mensagem via WhatsApp
      const numeroWhatsApp = "5598987189453";
  
      // URL do WhatsApp com a mensagem formatada
      const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${mensagemFormatada}`;
  
      // Abre uma nova aba ou janela do navegador para enviar a mensagem via WhatsApp
      window.open(urlWhatsApp);
      console.log(mensagemFormatada)
    });
  });
  



  function enviarWhatsApp() {
    const servicoSelecionado = document.getElementById("escolha").value;
    const numeroDestino = 'SEU_NUMERO_DE_TELEFONE'; // Substitua pelo seu número de telefone com o código do país (exemplo: +5511999999999)
    
    // Monta a mensagem com a escolha do serviço
    const mensagem = `Olá, gostaria de agendar um serviço de ${servicoSelecionado}.`;

    // Cria o link do WhatsApp com a mensagem
    const linkWhatsApp = `https://api.whatsapp.com/send?phone=${numeroDestino}&text=${encodeURIComponent(mensagem)}`;

    // Abre o link no WhatsApp
    window.open(linkWhatsApp);
}