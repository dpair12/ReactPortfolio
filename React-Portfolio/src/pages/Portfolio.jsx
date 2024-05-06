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
                <a href={project.app} style={{ textDecoration: "none" }}>
                  <Card.Body>
                    <Card.Title style={{ textAlign: "center", color: "black" }}>{project.title}</Card.Title>
                  </Card.Body>
                </a>
              </Card>
            ))}
          </Container>
        </div>
      </div>
    );
  }
  
  export default Portfolio;