// components/SpaceBackground/SpaceBackground.jsx
import { useEffect, useRef } from "react";

const SpaceBackground = () => {
  const canvasRef = useRef(null);
  const starsRef = useRef([]);
  const planetsRef = useRef([]);
  const animationRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Create stars
    const createStars = () => {
      starsRef.current = [];
      const starCount = 200;

      for (let i = 0; i < starCount; i++) {
        starsRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 2 + 0.5,
          speed: Math.random() * 0.5 + 0.1,
          brightness: Math.random() * 0.5 + 0.3,
          pulseSpeed: Math.random() * 0.05 + 0.02,
          twinkle: Math.random() > 0.7,
        });
      }
    };

    // Create planets
    const createPlanets = () => {
      planetsRef.current = [
        {
          x: canvas.width * 0.2,
          y: canvas.height * 0.3,
          radius: 15,
          color: "#ff6b6b",
          speed: 0.02,
          angle: Math.random() * Math.PI * 2,
          orbitRadius: 80,
        },
        {
          x: canvas.width * 0.8,
          y: canvas.height * 0.7,
          radius: 12,
          color: "#4ecdc4",
          speed: 0.03,
          angle: Math.random() * Math.PI * 2,
          orbitRadius: 60,
        },
        {
          x: canvas.width * 0.6,
          y: canvas.height * 0.2,
          radius: 8,
          color: "#45b7d1",
          speed: 0.04,
          angle: Math.random() * Math.PI * 2,
          orbitRadius: 40,
        },
      ];
    };

    const animate = () => {
      ctx.fillStyle = "rgba(3, 7, 30, 0.1)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw and update stars
      starsRef.current.forEach((star) => {
        star.x -= star.speed;
        if (star.x < -10) {
          star.x = canvas.width + 10;
          star.y = Math.random() * canvas.height;
        }

        // Twinkle effect
        if (star.twinkle) {
          star.brightness += star.pulseSpeed;
          if (star.brightness > 1 || star.brightness < 0.3) {
            star.pulseSpeed *= -1;
          }
        }

        // Draw star
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${star.brightness})`;
        ctx.fill();

        // Draw star glow for larger stars
        if (star.radius > 1) {
          ctx.beginPath();
          ctx.arc(star.x, star.y, star.radius * 3, 0, Math.PI * 2);
          const gradient = ctx.createRadialGradient(
            star.x,
            star.y,
            star.radius,
            star.x,
            star.y,
            star.radius * 3
          );
          gradient.addColorStop(0, `rgba(255, 255, 255, ${star.brightness * 0.3})`);
          gradient.addColorStop(1, "rgba(255, 255, 255, 0)");
          ctx.fillStyle = gradient;
          ctx.fill();
        }
      });

      // Draw and update planets
      planetsRef.current.forEach((planet) => {
        planet.angle += planet.speed;
        const centerX = planet.x;
        const centerY = planet.y;

        // Draw orbit path (subtle)
        ctx.beginPath();
        ctx.arc(centerX, centerY, planet.orbitRadius, 0, Math.PI * 2);
        ctx.strokeStyle = "rgba(255, 255, 255, 0.1)";
        ctx.stroke();

        // Calculate planet position
        const planetX = centerX + Math.cos(planet.angle) * planet.orbitRadius;
        const planetY = centerY + Math.sin(planet.angle) * planet.orbitRadius;

        // Draw planet glow
        const glowGradient = ctx.createRadialGradient(
          planetX,
          planetY,
          0,
          planetX,
          planetY,
          planet.radius * 3
        );
        glowGradient.addColorStop(0, `${planet.color}40`);
        glowGradient.addColorStop(1, "transparent");

        ctx.beginPath();
        ctx.arc(planetX, planetY, planet.radius * 3, 0, Math.PI * 2);
        ctx.fillStyle = glowGradient;
        ctx.fill();

        // Draw planet
        ctx.beginPath();
        ctx.arc(planetX, planetY, planet.radius, 0, Math.PI * 2);
        ctx.fillStyle = planet.color;
        ctx.fill();

        // Planet shine effect
        ctx.beginPath();
        ctx.arc(
          planetX - planet.radius * 0.3,
          planetY - planet.radius * 0.3,
          planet.radius * 0.4,
          0,
          Math.PI * 2
        );
        ctx.fillStyle = "rgba(255, 255, 255, 0.3)";
        ctx.fill();
      });

      // Draw shooting stars occasionally
      if (Math.random() < 0.002) {
        drawShootingStar();
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    const drawShootingStar = () => {
      const x = canvas.width;
      const y = Math.random() * canvas.height * 0.3;
      const length = 50 + Math.random() * 50;

      const draw = () => {
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x - length, y + length * 0.3);
        ctx.strokeStyle = "rgba(255, 255, 255, 0.8)";
        ctx.lineWidth = 2;
        ctx.stroke();

        // Glow effect
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x - length, y + length * 0.3);
        ctx.strokeStyle = "rgba(100, 200, 255, 0.4)";
        ctx.lineWidth = 6;
        ctx.stroke();
      };

      draw();
    };

    createStars();
    createPlanets();
    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none -z-10"
    />
  );
};

export default SpaceBackground;