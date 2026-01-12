document.addEventListener("DOMContentLoaded", () => {
  console.log("Pega Essa Promo - Landing Page carregada");
  
  // Adicione interações aqui se necessário
  const benefitCards = document.querySelectorAll('.benefit-card');
  const storeCards = document.querySelectorAll('.store-card');
  
  // Adiciona efeito de clique nos cards
  benefitCards.forEach(card => {
    card.addEventListener('click', () => {
      card.style.transform = 'scale(0.98)';
      setTimeout(() => {
        card.style.transform = '';
      }, 150);
    });
  });
  
  // Animações de entrada
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);
  
  // Observa os elementos para animação
  document.querySelectorAll('.benefit-card, .store-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(el);
  });
});

document.addEventListener("DOMContentLoaded", function () {
        const whatsappIcon = document.getElementById("whatsapp-icon");
        const whatsappMessage = document.getElementById("whatsapp-message");
    
        // Função para fazer o ícone do WhatsApp dar bounce a cada 3 segundos
        setInterval(() => {
            whatsappIcon.classList.add("bounce");
            setTimeout(() => {
                whatsappIcon.classList.remove("bounce");
            }, 500); // Remove o efeito bounce após 0.5s
        }, 3000); // Repete a cada 3 segundos
    
        // Função para exibir a mensagem a cada 10s e escondê-la após 4s
        function showMessage() {
            whatsappMessage.classList.add("show");
    
            setTimeout(() => {
                whatsappMessage.classList.remove("show");
            }, 4000); // Esconde a mensagem após 4 segundos
        }
    
        // Inicia o loop da mensagem
        showMessage(); // Exibe a mensagem imediatamente ao carregar
        setInterval(showMessage, 12000); // Faz o ciclo da mensagem a cada 10 segundos
    });