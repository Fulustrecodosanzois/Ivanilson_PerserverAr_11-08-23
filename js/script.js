document.addEventListener("DOMContentLoaded", function () {
    // Seletor do botão "Enviar"
    const enviarBtn = document.querySelector(".enviar-btn");
  
    enviarBtn.addEventListener("click", function (e) {
      e.preventDefault();
  
      // Coletar dados do formulário
      const nome = document.querySelector(".nome").value;
      const telefone = document.querySelector(".telefone").value;
      const mensagem = document.querySelector(".mensagem").value;
  
      // Formatar a mensagem para envio no WhatsApp
      const mensagemFormatada = `Seja Bem Vindo(a)!%0A%0A**Informações do Contato**%0A%0A*Nome:* ${nome}%0A*Telefone:* ${telefone}%0A%0A*Mensagem:*%0A${mensagem}`;
  
      // Número de telefone para o qual você deseja enviar a mensagem via WhatsApp
      const numeroWhatsApp = "5598987189453";
  
      // URL do WhatsApp com a mensagem formatada
      const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${mensagemFormatada}`;
  
      // Abre uma nova aba ou janela do navegador para enviar a mensagem via WhatsApp
      window.open(urlWhatsApp);
    });
  });
  

