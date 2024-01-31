import React, { useEffect, useRef } from 'react';

const AboutPage = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const sun = { x: canvas.width / 2, y: canvas.height / 2, radius: 30, color: 'yellow', glow: 'orange' };
    const planets = [
      { name: 'Mercury', radius: 5, distance: 60, angle: 0, speed: 0.05, color: 'gray' },
      { name: 'Venus', radius: 8, distance: 90, angle: 0, speed: 0.03, color: 'orange' },
      {
        name: 'Earth',
        radius: 10,
        distance: 130,
        angle: 0,
        speed: 0.02,
        color: 'blue',
        moons: [
          { name: 'Moon', radius: 2, distance: 20, angle: 0, speed: 0.1, color: 'lightgray' },
        ],
      },
      { name: 'Mars', radius: 9, distance: 170, angle: 0, speed: 0.015, color: 'red' },
      {
        name: 'Jupiter',
        radius: 18,
        distance: 230,
        angle: 0,
        speed: 0.008,
        color: 'brown',
        moons: [
          { name: 'Io', radius: 2, distance: 30, angle: 0, speed: 0.08, color: 'lightyellow' },
          { name: 'Europa', radius: 2, distance: 40, angle: 0, speed: 0.06, color: 'lightblue' },
        ],
      },
      { name: 'Saturn', radius: 15, distance: 290, angle: 0, speed: 0.006, color: 'gold' },
      { name: 'Uranus', radius: 12, distance: 360, angle: 0, speed: 0.004, color: 'lightblue' },
      { name: 'Neptune', radius: 10, distance: 430, angle: 0, speed: 0.002, color: 'darkblue' },
    ];

    const drawGlow = () => {
      ctx.shadowBlur = 20;
      ctx.shadowColor = sun.glow;
    };

    const drawPlanet = (planet) => {
      const x = sun.x + planet.distance * Math.cos(planet.angle);
      const y = sun.y + planet.distance * Math.sin(planet.angle);

      ctx.beginPath();
      ctx.arc(x, y, planet.radius, 0, 2 * Math.PI);
      ctx.fillStyle = planet.color;
      ctx.fill();
      ctx.closePath();

      // Draw moons if the planet has them
      if (planet.moons) {
        planet.moons.forEach((moon) => {
          drawMoon(planet, moon);
        });
      }
    };

    const drawMoon = (planet, moon) => {
      const planetX = sun.x + planet.distance * Math.cos(planet.angle);
      const planetY = sun.y + planet.distance * Math.sin(planet.angle);

      const moonX = planetX + moon.distance * Math.cos(moon.angle);
      const moonY = planetY + moon.distance * Math.sin(moon.angle);

      ctx.beginPath();
      ctx.arc(moonX, moonY, moon.radius, 0, 2 * Math.PI);
      ctx.fillStyle = moon.color;
      ctx.fill();
      ctx.closePath();

      moon.angle += moon.speed;
    };

    const drawSolarSystem = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw sun glow
      drawGlow();
      ctx.beginPath();
      ctx.arc(sun.x, sun.y, sun.radius + 5, 0, 2 * Math.PI);
      ctx.fillStyle = sun.glow;
      ctx.fill();
      ctx.closePath();

      // Reset shadow
      ctx.shadowBlur = 0;

      // Draw sun
      ctx.beginPath();
      ctx.arc(sun.x, sun.y, sun.radius, 0, 2 * Math.PI);
      ctx.fillStyle = sun.color;
      ctx.fill();
      ctx.closePath();

      // Draw planets and their moons
      planets.forEach((planet) => {
        drawPlanet(planet);
        planet.angle += planet.speed;
      });

      requestAnimationFrame(drawSolarSystem);
    };

    drawSolarSystem();

    window.addEventListener('resize', drawSolarSystem);

    return () => {
      window.removeEventListener('resize', drawSolarSystem);
    };
  }, []);

  return <canvas ref={canvasRef} style={{ width: '100%', height: '100%' }}></canvas>;
};

export default AboutPage;
