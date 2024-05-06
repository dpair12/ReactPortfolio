import React from 'react';
import '../components/GeneralPageSetUp/index.css';

function Home() {
  return (
    <div className='pagebackground' style={{ paddingTop: "20px" }}>
      <div className='circular--portrait'>
        <img src="../../public/DPHeadshot.jpg" alt="Photo of De'Sean Pair Wearing Navy Jacket" />
      </div>
      <div className='formatpage'>
        <h1 style={{ paddingTop: "20px", textAlign: "center" }}>About Me</h1>
        <p style={{ paddingBottom: "40px", marginTop: "30px", marginLeft: "100px", marginRight: "100px" }}>
          Hello, my name is De'Sean Pair. I am a creative, outside of the box thinker that's always searching for the next opportunity that can allow me to innovate something. From producing creative assets to providing marketing consultation, I enjoy taking on tasks that enable me to look at things from a different angle to find a solution.
        </p>
        <div id="education" style={{ marginLeft: "85px" }}>
          <h2 style={{ paddingBottom: "20px", textAlign: "left" }}>Education</h2>
          <h3 style={{ textAlign: "left" }}>University of Richmond - Coding Boot Camp</h3>
          <h4 style={{ textAlign: "left" }}>November 2023 - Present</h4>
          <p style={{ paddingBottom: "30px", textAlign: "left" }}>Enrolled in Coding BootCamp to learn basics of web design and software development.</p>
          <h3 style={{ textAlign: "left" }}>eMarketing Institute</h3>
          <h4 style={{ textAlign: "left" }}>November 2021</h4>
          <p style={{ paddingBottom: "30px", textAlign: "left" }}>Obtained a Social Media Marketing Certification while taking a course as part of my curriculum at Virginia Union University.</p>
          <h3 style={{ textAlign: "left" }}>Virginia Union University</h3>
          <h4 style={{ textAlign: "left" }}>September 2019 - May 2023</h4>
          <p style={{ paddingBottom: "30px", textAlign: "left" }}>Obtained a Bachelor of Arts Degree in Mass Communications with a minor in Marketing. Earned an overall 3.9 overall GPA and ranked in Top 13 for Class of 2023.</p>
        </div>
      </div>
    </div>
  );
}

export default Home;