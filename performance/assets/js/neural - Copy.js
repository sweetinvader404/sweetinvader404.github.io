// Setup canvas
const canvas = document.querySelector("#neural-network");
const context = canvas.getContext("2d");
let width, height;

// Neural network parameters
const numParticles = 110; // Increase the number of particles
const particleRadius = 2;
const maxDistance = 100;
const lineWidth = 0.2; // Adjust the line width

// Array to hold particles
const particles = [];

// Resize canvas to fit the window
const resizeCanvas = () => {
  width = window.innerWidth;
  height = window.innerHeight;
  canvas.width = width;
  canvas.height = height;
};

// Initialize particles
const initializeParticles = () => {
  for (let i = 0; i < numParticles; i++) {
    particles.push({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: Math.random() - 0.5,
      vy: Math.random() - 0.5,
    });
  }
};

// Update particle positions
const updateParticles = () => {
  for (let i = 0; i < numParticles; i++) {
    const particle = particles[i];
    particle.x += particle.vx;
    particle.y += particle.vy;

    // Wrap around edges
    if (particle.x < 0) particle.x += width;
    if (particle.x > width) particle.x -= width;
    if (particle.y < 0) particle.y += height;
    if (particle.y > height) particle.y -= height;
  }
};

// Render particles
const renderParticles = () => {
  context.clearRect(0, 0, width, height);
  context.lineWidth = lineWidth; // Set the line width

  for (let i = 0; i < numParticles; i++) {
    const particle = particles[i];

    for (let j = i + 1; j < numParticles; j++) {
      const otherParticle = particles[j];
      const dx = particle.x - otherParticle.x;
      const dy = particle.y - otherParticle.y;
      const distanceSq = dx * dx + dy * dy;

      if (distanceSq < maxDistance * maxDistance) {
        const alpha = 1 - distanceSq / (maxDistance * maxDistance);
        context.strokeStyle = `rgba(255, 255, 255, ${alpha})`;
        context.beginPath();
        context.moveTo(particle.x, particle.y);
        context.lineTo(otherParticle.x, otherParticle.y);
        context.stroke();
      }
    }

    context.fillStyle = "#fff";
    context.beginPath();
    context.arc(particle.x, particle.y, particleRadius, 0, Math.PI * 2);
    context.fill();
  }
};

// Animation loop
const animate = () => {
  updateParticles();
  renderParticles();
  requestAnimationFrame(animate); // Use requestAnimationFrame for smoother animation
};

// Initialize and start animation
const startAnimation = () => {
  resizeCanvas();
  initializeParticles();
  animate(); // Start the animation loop
};

// Resize canvas when window size changes
window.addEventListener("resize", startAnimation);

// Start animation
startAnimation();
