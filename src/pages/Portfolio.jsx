import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import employee from '../../public/assets/employee.jpg';
import readme from '../../public/assets/readme.jpg';
import schedule from '../../public/assets/schedule.jpg';
import superhero from '../../public/assets/superhero.jpg';
import DPHeadshot from '../../public/assets/headshot.jpg';
import weather from '../../public/assets/weather.jpg';
import github from '../../public/assets/github.jpg';

const projectLinks = [
  { title: 'Weather App', img: weather, repo: 'https://github.com/dpair12/Weather-App' },
  { title: 'ReadMeGenerator', img: readme, repo: 'https://github.com/dpair12/ReadMe-Generator' },
  { title: 'Employee Tracker', img: employee, repo: 'https://github.com/dpair12/Employee-Tracker' },
  { title: 'Portfolio-V1', img: DPHeadshot, repo: 'https://github.com/dpair12/De-Sean-Pair-ePortfolio-Project' },
  { title: 'SuperHero Movie Finder', img: superhero, repo: 'https://github.com/msheliga1/pj1MultiAPISuperHeroMovies' },
  { title: 'Schedule Maker', img: schedule, repo: 'https://github.com/dpair12/Schedule-Manager' }
];

function Portfolio() {
    const [hoveredIndex, setHoveredIndex] = useState(null);
  
    return (
      <div className='pagebackground'>
        <div className='formatpage'>
          <h1 style={{ textAlign: "center", paddingTop: "25px" }}>Portfolio</h1>
          <Container style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', padding: "25px" }}>
            {projectLinks.map((project, index) => (
              <Card
                key={index}
                style={{ width: '35%', height: "50%", margin: '20px' }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <a href={project.repo} style={{ textDecoration: "none" }}>
                  <Card.Img src={hoveredIndex === index ? github : project.img} />
                  <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(255, 255, 255, 0.7)', display: 'flex', justifyContent: 'center', alignItems: 'center', opacity: 0, transition: 'opacity 0.3s' }}>
                    <p style={{ color: 'black', textAlign: 'center', fontWeight: 'bold', fontSize: '1.5rem' }}>View On Github</p>
                  </div>
                </a>
              
                  <Card.Body>
                    <Card.Title style={{ textAlign: "center", color: "black" }}>{project.title}</Card.Title>
                  </Card.Body>
      
              </Card>
            ))}
          </Container>
        </div>
      </div>
    );
  }
  
  export default Portfolio;