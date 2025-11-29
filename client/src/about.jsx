import headshot from './headshot.jpg';
export default function About() {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <h2>About</h2>
      <img src={headshot} alt="headshot" width='270px' height='350px'/>
      <h3>Hello, my name is Kerrick Shiu.</h3>
      <p>I am a student at Centennial College's Health Informatics Technology program. I am interested in implementing technology in the health space to improve healthcare outcomes and enhance patient care. My dream is to make use of computer science with healthcare to make a positive impact for society as a whole.</p>
      <p>During my free time, I like to play video games, play guitar, hang out with friends and learn about various topics including computer hardware, history and much more!</p>
      <h3><a href="https://docs.google.com/document/d/1IjUAjomxTN7X34YSwoVMuS8W1SbGhwTKo-fgPSbqzzQ/edit?usp=sharing">For a copy of my resume, click here!</a></h3>
    </div>
  );
}