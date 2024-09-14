document.addEventListener('DOMContentLoaded', function() {
  jarallax(document.querySelectorAll('.jarallax'), {
    speed: 0.5,
    disableParallax: /iPad|iPhone|iPod|Android/,
    disableVideo: /iPad|iPhone|iPod|Android/
    
  });
  
});


document.querySelectorAll('.faq').forEach(faq => {
  faq.addEventListener('click', function() {
    const perguntasGlobal = document.querySelector('.perguntas-global');
    perguntasGlobal.classList.add('animating');

    setTimeout(() => {
      perguntasGlobal.classList.remove('animating');
    }, 1000); // Tempo de transição ajustado conforme necessário
  });
});


