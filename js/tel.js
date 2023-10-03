  // Use o seletor de classe para o campo de telefone
  const telefoneInput = document.querySelector('.telefone');

  // Adicione um ouvinte de evento de input para o campo de telefone
  telefoneInput.addEventListener('input', function () {
    // Remove todos os caracteres não numéricos do valor do campo de telefone
    const telefoneValue = this.value.replace(/\D/g, '');
  
    // Formate o número de telefone
    let formattedTelefone = '';
  
    if (telefoneValue.length >= 2) {
      formattedTelefone = '(' + telefoneValue.substring(0, 2) + ') ';
    }
  
    if (telefoneValue.length > 2) {
      formattedTelefone += telefoneValue.substring(2, 3) + ' ';
    }
  
    if (telefoneValue.length >= 7) {
      formattedTelefone += telefoneValue.substring(3, 7) + ' ';
    }
  
    if (telefoneValue.length > 7) {
      formattedTelefone += telefoneValue.substring(7, 11);
    }
  
    // Define o valor formatado de volta no campo de telefone
    this.value = formattedTelefone;
  });
  