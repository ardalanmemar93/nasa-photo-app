# NASA PHOTO APP

# 


The NASA Photo App offers users a captivating exploration of the cosmos by harnessing the power of the NASA API. This innovative application provides a daily dose of awe-inspiring content, featuring the Astronomy Picture of the Day (APOD) alongside insightful articles. Users can delve into the mysteries of the universe through stunning visuals captured by NASA's vast array of space telescopes, rovers, and satellites. Whether it's the breathtaking beauty of distant galaxies, the intricate details of our solar system, or the latest breakthroughs in space exploration, the NASA Photo App serves as a portal to the wonders of outer space. With each visit, users embark on a journey of discovery, gaining a deeper understanding of the cosmos and the remarkable achievements of humanity in the realm of space science and exploration.

# A live build can be found [here](https://nasa-dailey-photo-04f716fe02dd.herokuapp.com/content/new).

## Tools

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![Javascript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![git](https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white)
![github](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)
![VSCode](https://img.shields.io/badge/Visual_Studio_Code-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
![NPM](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Trello](https://img.shields.io/badge/Trello-%23026AA7.svg?style=for-the-badge&logo=Trello&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Heroku](https://img.shields.io/badge/heroku-%23430098.svg?style=for-the-badge&logo=heroku&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)

#### Maintained
![maintaned](https://img.shields.io/badge/Maintained%3F-yes-green.svg)

## Nasa Photo App

"NASA Explorer" is a groundbreaking web application aimed at uniting space enthusiasts through a distinctive fusion of cosmic exploration, daily highlights, and interactive user engagement. Here's a breakdown of the app's key features:

1. **User Authentication:**
   - Effortless sign-up and login procedures offer users personalized entry into the application, ensuring a secure and tailored experience.
   - Robust authentication measures guarantee the privacy and security of user accounts.

2. **Daily Cosmic Delight:**
   - A captivating feature highlighting NASA's Astronomy Picture of the Day (APOD) ensures users receive a daily dose of celestial wonders.
   - Users can immerse themselves in stunning visuals captured by NASA's cutting-edge space telescopes, rovers, and satellites.

3. **Articles:**
   - Explore insightful articles accompanying each daily image, providing context, scientific explanations, and fascinating details about the universe's marvels.
   - Delve into the latest breakthroughs in space exploration and gain a deeper understanding of cosmic phenomena.


4. **Interactive History Page:**
   - Engage with a comprehensive history page that tracks past daily highlights, allowing users to revisit their favorite cosmic moments.
   - Navigate through an archive of APODs, creating a personalized cosmic journey through time.

"NASA Explorer" serves as a virtual portal to the cosmos, fostering a community of space enthusiasts eager to explore the wonders of the universe together. With a perfect blend of visual appeal, educational content, and interactive features, the application invites users to embark on a daily adventure of discovery in the vast expanse of outer space.


 Dailey Content 

![nasa Wireframe](/public/images/nasa-photo.png)




## Features
- User-Friendly Front-End Interface
- Interactive About page
- Visually Engaging Elements
- Usesd Tailwind CSS
- Background Images
- User Authentication 
- API integration

## Technologies used

"NASA Explorer" is a full-stack MERN (MongoDB, Express.js, React.js, Node.js) application that seamlessly combines powerful technologies to offer a captivating cosmic exploration experience. The back-end, powered by Node.js and Express.js, ensures efficient server-side operations, handling user requests and managing data flow with precision. MongoDB, a NoSQL database, is employed to store and retrieve user data, daily highlights, and historical records, providing flexibility and scalability.

On the front-end, React.js takes center stage, offering a dynamic and responsive user interface. The component-based architecture of React enables the creation of interactive and visually engaging UI elements, ensuring an immersive experience for users as they delve into the wonders of the universe.

User authentication is a crucial aspect of the application, and JWT (JSON Web Tokens) are employed to securely manage user sessions. This industry-standard authentication protocol enhances the overall security of the application, providing users with a personalized and protected space within "NASA Explorer."

The application's dynamic content is sourced in real-time from NASA's API, offering users the Astronomy Picture of the Day (APOD) along with associated articles. This integration ensures that users receive the latest and most accurate information directly from NASA, enriching their exploration of the cosmos.

To complete the technological ensemble, the application is designed with a responsive layout, ensuring a consistent and visually pleasing experience across various devices. CSS frameworks like Bootstrap or Tailwind CSS may be employed to achieve a polished and user-friendly interface.

In essence, "NASA Explorer" harnesses the power of the MERN stack, fortified with JWT for user authentication and seamlessly integrated with NASA's API, to deliver a comprehensive and secure platform for space enthusiasts to embark on a daily cosmic journey.

## Challenges

Building "NASA Explorer" presented several challenges, each requiring thoughtful solutions to ensure a smooth and engaging user experience. Here are some of the key challenges encountered during the development process:

1. **Real-Time Data Integration:**
   - One of the primary challenges was integrating real-time data from NASA's API. Ensuring a seamless flow of daily highlights, including the Astronomy Picture of the Day (APOD) and associated articles, required meticulous handling of API requests and responses. Adapting to potential changes in the API structure and maintaining consistent data updates posed ongoing challenges.

2. **User Authentication and Security:**
   - Implementing secure user authentication with JWT added complexity to the project. Safeguarding user data and ensuring secure communication between the client and server were paramount. Addressing potential vulnerabilities and staying abreast of best practices in web security were ongoing considerations throughout development.


3. **Handling Large Media Files:**
   - Rendering high-resolution images and multimedia content, especially when dealing with NASA's visually stunning space imagery, posed challenges related to page load times and bandwidth. Strategies for efficient media handling and optimization were crucial to maintaining a smooth user experience.

4. **User Engagement and Retention:**
   - Keeping users engaged on a daily basis was a challenge. Designing features to encourage return visits, such as personalized user history and interactive elements, required strategic thinking. Balancing educational content with an entertaining and user-friendly interface became an ongoing consideration.


Addressing these challenges required a combination of technical expertise, strategic planning, and continuous adaptation throughout the development lifecycle. By overcoming these obstacles, "NASA Explorer" emerged as a robust and engaging platform for space enthusiasts to explore the wonders of the cosmos.

## Favorite Function
- The `fetchData` function is a pivotal part of the NASA photo app, managing data retrieval for the Astronomy Picture of the Day (APOD) from the NASA API. It first validates the API key and sets a loading state for ongoing data fetching. The function then uses Axios to fetch APOD details such as title, explanation, date, and image URL. Following this, it checks if the data already exists in the MongoDB database and saves it if not. The function concludes by fetching the updated data from the database, updating the component's state (`apodData`). Robust error handling distinguishes Axios-specific errors and other types, with errors logged for debugging. The loading state is set to `false` in the `finally` block, signaling the completion of the data-fetching process. Overall, `fetchData` ensures the app displays the latest APOD content, handling errors gracefully.



```js
 const fetchData = async () => {
    try {
      if (!API_KEY) {
        console.error('API key is undefined. Make sure to set REACT_APP_API_KEY in your environment variables.');
        return;
      }

      setLoading(true);

      // Fetch data from NASA API
      const nasaResponse = await axios.get('https://api.nasa.gov/planetary/apod', {
        params: {
          api_key: API_KEY,
        },
      });

      // Check if the data already exists in the database
      const existingData = await axios.get('/api/apod', {
        params: {
          date: nasaResponse.data.date,
        },
      });

      if (existingData.data.length === 0) {
        // Save the data to MongoDB only if it doesn't exist
        await axios.post('/api/apod', {
          title: nasaResponse.data.title,
          explanation: nasaResponse.data.explanation,
          date: nasaResponse.data.date,
          imageUrl: nasaResponse.data.hdurl || nasaResponse.data.url,
        });
      }

      // Fetch data from your database
      const dbResponse = await axios.get('/api/apod');

      setApodData(dbResponse.data[0]);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        // Axios error (network error, timeout, etc.)
        console.error('Axios error:', error.message);
      } else {
        // Other types of errors
        console.error('Error fetching APOD data:', error);
      }
    } finally {
      setLoading(false);
    }
  };
```
- The `AboutPage` component in the NASA photo app is a visually engaging representation of our solar system, crafted with HTML5 canvas and React. Using the useRef and useEffect hooks, this component delivers an interactive display of the sun and planets, each with unique characteristics like color, size, and orbital speed. The animation seamlessly depicts planetary movement and moon rotations, creating an immersive and educational experience for users.

Efficiently handling canvas rendering and animation logic, this component adjusts dynamically to window resizing, ensuring proper alignment and proportions of celestial bodies. The sun's positioning is dynamically centered both horizontally and vertically, enhancing the visual appeal and accuracy of the solar system representation. This piece of code epitomizes the fusion of creativity and technology, offering users a captivating journey through our cosmic neighborhood within a web application. The `AboutPage` showcases the synergy of React's declarative approach with HTML5 canvas for creating interactive and visually stunning web experiences.


```js

const AboutPage = () => {
  const canvasRef = useRef(null);
  const isResizing = useRef(false);

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
      { name: 'Mars', radius: 9, distance: 170, angle: 0, speed: 0.015, color: 'red', moons: [
          { name: 'Phobos', radius: 1, distance: 15, angle: 0, speed: 0.2, color: 'gray' },
          { name: 'Deimos', radius: 1, distance: 25, angle: 0, speed: 0.15, color: 'lightgray' },
        ],
      },
      {
        name: 'Jupiter',
        radius: 18,
        distance: 230,
        angle: 0,
        speed: 0.008,
        color: 'brown',
        rings: { innerRadius: 20, outerRadius: 25, color: 'rgba(150, 75, 0, 0.5)' },
        moons: [
          { name: 'Io', radius: 2, distance: 30, angle: 0, speed: 0.08, color: 'lightyellow' },
          { name: 'Europa', radius: 2, distance: 40, angle: 0, speed: 0.06, color: 'lightblue' },
        ],
      },
      { name: 'Saturn', radius: 15, distance: 290, angle: 0, speed: 0.006, color: 'gold', moons: [
          { name: 'Titan', radius: 3, distance: 35, angle: 0, speed: 0.1, color: 'orange' },
        ],
      },
      { name: 'Uranus', radius: 12, distance: 360, angle: 0, speed: 0.004, color: 'lightblue', moons: [
          { name: 'Miranda', radius: 1, distance: 15, angle: 0, speed: 0.12, color: 'lightgray' },
        ],
      },
      { name: 'Neptune', radius: 10, distance: 430, angle: 0, speed: 0.002, color: 'darkblue', moons: [
          { name: 'Triton', radius: 2, distance: 25, angle: 0, speed: 0.09, color: 'lightblue' },
        ],
      },
    ];

    const drawGlow = () => {
      ctx.shadowBlur = 20;
      ctx.shadowColor = sun.glow;
    };

    const drawRings = (x, y, rings) => {
      ctx.beginPath();
      ctx.arc(x, y, rings.outerRadius, 0, 2 * Math.PI, false);
      ctx.arc(x, y, rings.innerRadius, 0, 2 * Math.PI, true);
      ctx.fillStyle = rings.color;
      ctx.fill();
      ctx.closePath();
    };

    const drawMoon = (planet, moon, planetX, planetY) => {
      const moonX = planetX + moon.distance * Math.cos(moon.angle);
      const moonY = planetY + moon.distance * Math.sin(moon.angle);

      ctx.beginPath();
      ctx.arc(moonX, moonY, moon.radius, 0, 2 * Math.PI);
      ctx.fillStyle = moon.color;
      ctx.fill();
      ctx.closePath();

      moon.angle += moon.speed;
    };

    const drawPlanet = (planet) => {
      const x = canvas.width / 2 + planet.distance * Math.cos(planet.angle);
      const y = canvas.height / 2 + planet.distance * Math.sin(planet.angle);

      ctx.beginPath();
      ctx.arc(x, y, planet.radius, 0, 2 * Math.PI);
      ctx.fillStyle = planet.color;
      ctx.fill();
      ctx.closePath();

      // Draw moons if the planet has them
      if (planet.moons) {
        planet.moons.forEach((moon) => {
          drawMoon(planet, moon, x, y);
        });
      }

      // Draw rings if the planet has them
      if (planet.rings) {
        drawRings(x, y, planet.rings);
      }
    };

    const drawSolarSystem = () => {
      if (!isResizing.current) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    
        // Draw sun glow
        drawGlow();
        sun.x = canvas.width / 2;  // Center the sun horizontally
        sun.y = canvas.height / 2; // Center the sun vertically
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
      }
    };
  

    drawSolarSystem();

    window.addEventListener('resize', () => {
      isResizing.current = true;
      // Reset rotation angles when resizing
      planets.forEach((planet) => {
        planet.angle = 0;
      });
      setTimeout(() => {
        isResizing.current = false;
      }, 500); // Delay the reset of the resizing flag to prevent rapid animation
    });

    return () => {
      window.removeEventListener('resize', drawSolarSystem);
    };
  }, []);

  return <canvas ref={canvasRef} style={{ width: '100%', height: '100%' }}></canvas>;
};


```

## Future
- [ ] Mobile support
- [ ] Adding more articles 
- [ ] Adding a comment section
- [ ] Adding the user detaile in the comments
- [ ] Adding the functionality so that the user can favourite articles
- [ ] Expand on the overall design
- [ ] Refactor code 


