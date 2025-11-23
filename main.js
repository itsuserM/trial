const buttons = document.querySelectorAll('.button');

buttons.forEach(btn => {
  btn.addEventListener('mouseenter', () => {
    btn.style.boxShadow = "0 0 20px hsl(0, 85%, 55% / 0.7), 0 0 40px hsl(0, 75%, 45% / 0.4)";
    btn.style.transition = "all 0.3s ease";
  });
  btn.addEventListener('mouseleave', () => {
    btn.style.boxShadow = "none";
  });
});

const cards = document.querySelectorAll('.card');

cards.forEach((card, index) => {
  setTimeout(() => {
    card.style.transition = "all 0.3s ease";
    card.style.boxShadow = "0 0 20px hsl(0, 85%, 55% / 0.5)";
    setTimeout(() => {
      card.style.boxShadow = "none";
    }, 600);
  }, index * 200);
});
