import DPResume from '../../public/DPResume.pdf'

function Resume () {

 const handleDownload = () => {
        // Add the path to your resume file here
        const resumeFilePath = DPResume;
        const link = document.createElement('a');
        link.href = resumeFilePath;
        link.setAttribute('download', 'DeSeanPair_Resume.pdf');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
};

return (
<>
<div className="pagebackground">
<div className="formatpage">
<h1 style={{textAlign:"center", paddingTop:"20px"}}>Resume</h1>
<h4 style={{textAlign:"left", marginTop:"30px", paddingBottom: "40px", textDecoration:"underline"}} onClick={handleDownload}>Download My Resume</h4>
<h2 style={{textAlign:"left", paddingBottom: "20px"}}>Front End Skills</h2>
<h4 style={{textAlign:"left"}}>HTML - Advanced</h4>
<h4 style={{textAlign:"left"}}>CSS - Advanced</h4>
<h4 style={{textAlign:"left", paddingBottom: "30px"}}>React - Intermediate</h4>
<h2 style={{textAlign:"left", paddingBottom: "20px"}}>Back End Skills</h2>
<h4 style={{textAlign:"left"}}>SQL - Advanced</h4>
<h4 style={{textAlign:"left"}}>APIs - Advanced</h4>
<h4 style={{textAlign:"left", paddingBottom: "30px"}}>MongoDB - Proficient</h4>
<h2 style={{textAlign:"left", paddingBottom: "20px"}}>Other Skills</h2>
<h4 style={{textAlign:"left"}}>Marketing - Advanced</h4>
<h4 style={{textAlign:"left"}}>Graphic Design - Advanced</h4>
<h4 style={{textAlign:"left"}}>Videoography - Advanced</h4>
<h4 style={{textAlign:"left", paddingBottom: "40px"}}>Project Management - Advanced</h4>
</div>
</div>
</>
);
}

export default Resume;