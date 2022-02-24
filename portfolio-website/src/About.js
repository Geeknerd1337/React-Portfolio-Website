import './App.scss';
import './About.scss';

function About(){
    return(
      <div className="About">
        <img className="profileImage" src={require("./images/Professional_Bad.png")}/>
        <h1>Josh Wilson</h1>
        <text className="mainText">
            &nbsp;&nbsp;&nbsp;&nbsp;Hello, and welcome to my digital portfolio!
            I am Joshua Wilson, a dedicated, motivated full-stack developer who specializes in a multitude of disciplines.
           {"\n\n"} Over the past ten years, I have been honing my skills in many different areas such as programming, game development, video eeffcts, and project management.
           {"\n\n"} I've worked on and released over 20 games and have been developing in a professional capacity for two years. I'm always eager to learn new skills and 
            experiment with new and exciting technologies.
            {"\n\n"} 
            Please, take a look around and view some of my work. If you like what you see, feel free to contact me via the links on my contact page.
            {"\n"}
            This website was created by myself using React.
        </text>
      </div>
    )
  }

  export default About;