// script.js

// Menu toggle
const menuToggle = document.getElementById('menu-toggle');
const nav = document.querySelector('nav');

menuToggle.addEventListener('click', () => {
  nav.classList.toggle('active');
});

// Barra de pesquisa
const searchInput = document.getElementById('searchInput');
const clearBtn = document.getElementById('clearBtn');
const jogos = document.querySelectorAll('.jogo');

searchInput.addEventListener('input', () => {
  const filter = searchInput.value.toLowerCase();
  jogos.forEach(jogo => {
    const title = jogo.querySelector('h4').textContent.toLowerCase();
    if(title.includes(filter)){
      jogo.style.display = '';
    } else {
      jogo.style.display = 'none';
    }
  });
});

clearBtn.addEventListener('click', () => {
  searchInput.value = '';
  jogos.forEach(jogo => jogo.style.display = '');
});

