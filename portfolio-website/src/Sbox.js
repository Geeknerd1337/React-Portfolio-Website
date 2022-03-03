import './App.scss';
import './Sbox.scss';


export function Sbox(){
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
          <iframe src="https://www.youtube.com/embed/HQ5XF7X28tE?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>   
       <text className="mainText">
         Speed-Dial was the first gamemode I designed and worked on. It's a top down send up of Hotline Miami with a focus on high energy combat.
       </text>
       <VidHolder cl="Sbox" title="Gr& Prix" link="https://www.youtube.com/embed/rfxfMZSpwOE" text="Gr& Prix was the first racing game I worked in in S&box. I spent a lot of time fine tuning the vehicle physics to feel both weighty and arcadey."/>
       <VidHolder cl="Sbox" title="Terry Squat Simulator" link="https://www.youtube.com/embed/qNJNvn0WZxM" text="Terry Squat Simulator was a satirical send up of 80s exercise workout videos. This project I made almost in it's entirety and I am extremely proud of the work on display."/>
      </div>
    )
  }
  

  export function VidHolder(props){
    return(
    <div className={props.cl}>
      <h1>{props.title}</h1>
       <div class="h_iframe" >
        <img class="ratio" src={require("./images/aspect.png")} />
          <iframe src={props.link} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>   
       <text className="mainText">
         {props.text}
       </text>  
    </div>
    )
  }

  export default Sbox;