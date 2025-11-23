const canvas = document.getElementById("neon-bg");
const ctx = canvas.getContext("2d");

let width = canvas.width = window.innerWidth;
let height = canvas.height = window.innerHeight;

const numDots = 80;
const maxDistance = 150;

const dots = Array.from({ length: numDots }, () => ({
  x: Math.random() * width,
  y: Math.random() * height,
  vx: (Math.random() - 0.5) * 0.7,
  vy: (Math.random() - 0.5) * 0.7,
  radius: Math.random() * 2 + 1
}));

function draw() {
  ctx.clearRect(0, 0, width, height);

  for (let i = 0; i < dots.length; i++) {
    for (let j = i + 1; j < dots.length; j++) {
      const dx = dots[i].x - dots[j].x;
      const dy = dots[i].y - dots[j].y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < maxDistance) {
        ctx.strokeStyle = `rgba(255,28,28,${1 - dist / maxDistance})`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(dots[i].x, dots[i].y);
        ctx.lineTo(dots[j].x, dots[j].y);
        ctx.stroke();
      }
    }
  }

  dots.forEach(dot => {
    ctx.fillStyle = "rgba(255,28,28,0.9)";
    ctx.shadowColor = "#ff1c1c";
    ctx.shadowBlur = 8;
    ctx.beginPath();
    ctx.arc(dot.x, dot.y, dot.radius, 0, Math.PI * 2);
    ctx.fill();

    // Move dots
    dot.x += dot.vx;
    dot.y += dot.vy;

    // Bounce off walls
    if (dot.x < 0 || dot.x > width) dot.vx *= -1;
    if (dot.y < 0 || dot.y > height) dot.vy *= -1;
  });

  requestAnimationFrame(draw);
}

draw();

window.addEventListener("resize", () => {
  width = canvas.width = window.innerWidth;
  height = canvas.height = window.innerHeight;
});
