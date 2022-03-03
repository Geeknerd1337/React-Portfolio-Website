import './App.scss';
import './Sbox.scss';

function Sbox(){
    return(
      <div className="Sbox">
       <img className="linkImage" src={require("./images/SboxLogo.png")} />
       <h1>What is S&box?</h1>
       <text className="mainText">
        S&box is a spiritual successor to Facepunch Studio's Gmod. It is a game framework built upon the top of Valve's proprietary Source 2 Engine and is currently in development.
        Over the last year I, with a team of almost 20 people, have worked on gamemodes within this framework in order to test and stretch this engine to it's limits.
        {'\n'}{'\n'}
        Here are some examples of my work
       </text>
       <h1>Speed-Dial</h1>
       <div class="h_iframe" >
        <img class="ratio" src={require("./images/aspect.png")} />
          <iframe src="https://www.youtube.com/embed/HQ5XF7X28tE?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div class="h_iframe" >
        <img class="ratio" src={require("./images/aspect.png")} />
          <iframe src="https://www.youtube.com/embed/HQ5XF7X28tE?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
       
       <text className="mainText">
         Speed-Dial was the first gamemode I designed and worked on. It's a top down send up of Hotline Miami with a focus on high energy combat.
       </text>
        
        
      </div>
    )
  }

  export default Sbox;