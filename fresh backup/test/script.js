// Initialize Three.js scene
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ alpha: true });

renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Add rotating shapes
const shapes = [];
const shapeMaterial = new THREE.MeshStandardMaterial({ color: 0xff758c, metalness: 0.5, roughness: 0.5 });
const geometryTypes = [new THREE.TorusGeometry(5, 1, 16, 100), new THREE.SphereGeometry(3, 32, 32)];

for (let i = 0; i < 10; i++) {
    const geometry = geometryTypes[Math.floor(Math.random() * geometryTypes.length)];
    const shape = new THREE.Mesh(geometry, shapeMaterial);
    shape.position.set(
        (Math.random() - 0.5) * 50,
        (Math.random() - 0.5) * 50,
        (Math.random() - 0.5) * 50
    );
    shape.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI);
    shapes.push(shape);
    scene.add(shape);
}

// Add particles
const particleGeometry = new THREE.BufferGeometry();
// Reduce particle count for performance
const particleCount = 300; // Reduced from 500
const particlePositions = new Float32Array(particleCount * 3);

for (let i = 0; i < particleCount * 3; i++) {
    particlePositions[i] = (Math.random() - 0.5) * 100;
}

particleGeometry.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
const particleMaterial = new THREE.PointsMaterial({ color: 0xffffff, size: 0.5 });
const particles = new THREE.Points(particleGeometry, particleMaterial);
scene.add(particles);

// Add lighting
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);

const pointLight = new THREE.PointLight(0xff758c, 1);
pointLight.position.set(10, 10, 10);
scene.add(pointLight);

camera.position.z = 50;

// Animation loop
function animate() {
    requestAnimationFrame(animate);

    // Rotate shapes
    shapes.forEach(shape => {
        shape.rotation.x += 0.01;
        shape.rotation.y += 0.01;
    });

    // Render scene
    renderer.render(scene, camera);
}
animate();

// Handle window resize
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

// GSAP animations
gsap.from("header", { opacity: 0, y: -50, duration: 1 });
gsap.from(".hero h2, .hero p, .cta-button", {
    opacity: 0,
    y: 50,
    duration: 1,
    stagger: 0.3,
    delay: 0.5
});

gsap.from("#projects h2, .project", {
    opacity: 0,
    y: 50,
    duration: 1,
    stagger: 0.2,
    scrollTrigger: "#projects"
});

gsap.from("#contact h2, form", {
    opacity: 0,
    y: 50,
    duration: 1,
    stagger: 0.3,
    scrollTrigger: "#contact"
});

// Removed redundant animations for better performance
