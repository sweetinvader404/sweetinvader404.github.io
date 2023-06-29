const canvas = document.querySelector("#neural-network"),
  context = canvas.getContext("2d");
let width, height;
const numParticles = 110,
  particleRadius = 2,
  maxDistance = 100,
  lineWidth = 0.2,
  particles = [],
  resizeCanvas = () => {
    (width = window.innerWidth),
      (height = window.innerHeight),
      (canvas.width = width),
      (canvas.height = height);
  },
  initializeParticles = () => {
    for (let t = 0; t < 110; t++)
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: Math.random() - 0.5,
        vy: Math.random() - 0.5
      });
  },
  updateParticles = () => {
    for (let t = 0; t < 110; t++) {
      let e = particles[t];
      (e.x += e.vx),
        (e.y += e.vy),
        e.x < 0 && (e.x += width),
        e.x > width && (e.x -= width),
        e.y < 0 && (e.y += height),
        e.y > height && (e.y -= height);
    }
  },
  renderParticles = () => {
    context.clearRect(0, 0, width, height), (context.lineWidth = 0.2);
    for (let t = 0; t < 110; t++) {
      let e = particles[t];
      for (let i = t + 1; i < 110; i++) {
        let a = particles[i],
          n = e.x - a.x,
          r = e.y - a.y,
          l = n * n + r * r;
        if (l < 1e4) {
          let c = 1 - l / 1e4;
          (context.strokeStyle = `rgba(255, 255, 255, ${c})`),
            context.beginPath(),
            context.moveTo(e.x, e.y),
            context.lineTo(a.x, a.y),
            context.stroke();
        }
      }
      (context.fillStyle = "#fff"),
        context.beginPath(),
        context.arc(e.x, e.y, 2, 0, 2 * Math.PI),
        context.fill();
    }
  },
  animate = () => {
    updateParticles(), renderParticles(), requestAnimationFrame(animate);
  },
  startAnimation = () => {
    resizeCanvas(), initializeParticles(), animate();
  },
  throttle = (t, e) => {
    let i;
    return () => {
      i ||
        (i = setTimeout(() => {
          t(), (i = null);
        }, e));
    };
  };
window.addEventListener("resize", throttle(startAnimation, 200)),
  startAnimation();
