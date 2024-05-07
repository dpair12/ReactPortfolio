import GitHubLogo from '../../../public/GitHubLogo.png';
import LinkedInLogo from '../../../public/LinkedInLogo.svg';
import EmailIcon from '../../../public/EmailIcon.svg';

function SocialIcons() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center'}}>
      <a href="https://github.com/dpair12"><img style={{width: "50px", height:"50px", margin:"15px"}} src={GitHubLogo} alt="GitHub Logo" /></a>
      <a href="https://www.linkedin.com/in/de-sean-pair-b558661b6/"><img style={{width: "50px", height:"50px", margin:"15px"}} src={LinkedInLogo} alt="LinkedIn Logo" /></a>
      <a href="mailto:deseanpair12@gmail.com"><img style={{width: "50px", height:"50px", margin:"15px"}} src={EmailIcon} alt="Email Icon" /></a>
    </div>
  );
}

export default SocialIcons;