//ハンバーガーメニュー
hamburger = document.getElementById('menuButton');
nav = document.getElementById('nav');
addEventListener('click', function() {
  hamburger.classList.toggle('active'),
  nav.classList.toggle('active')
});