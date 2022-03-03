import './App.scss';
import About from './About';
import Contact from './Contact';
import Netscape from './Netscape';
import Games from './Games';
import {Sbox, VidHolder} from './Sbox.js';
import useSound from 'use-sound';

import React, { useState, useEffect, useRef, useMemo } from "react";

//Basically render the 'intro' to the website
function App() {
  const [second, setSecond] = useState(0);
  const [dirs, addDirs] = useState("");
  const [started, setStarted] = useState(false);

  const [playLoad] = useSound(
    '/sounds/load.mp3',
    { volume: 0.25 }
  );

  const [playEnter] = useSound(
    '/sounds/enterkey.mp3',
    { volume: 0.25 }
  );

  //Tick up in seconds
  useEffect(() => {
    const interval = setTimeout(() =>{
      if(started){
        setSecond((second) => second + 1);
        console.log(started);
      }
    }, [started])
    return () => clearInterval(interval);
  });


  useEffect(() => {
    if(second > 1000 && second < 2000){
      if(second % 5 == 0){
      addDirs((dirs) => dirs + makeDirectory(second) + "\n");
      }
    }

    if(second == 2000){
      addDirs((dirs) => "JoshOS v0.0.1(beta) is now loaded!\nEnjoy your stay in my React Portfolio!");
    }

    if(second < 1000){
 

      if(second == 100){
        addDirs((dirs) => dirs + "runCmd -r JoshWilsonOS '/portfolio/*'\n");
      }
      if(second == 200){
        addDirs((dirs) => dirs + "Loading JoshWilsonOS v0.0.1(beta)...\n");
      }
      if(second == 500){
        addDirs((dirs) => dirs + "Fetching executable...\n");
      }

      if(second == 1000){
        addDirs((dirs) => dirs + "\nMounting Portfolio...\n\n");
      }
    }

  },[second])


  if(second < 2500){
    if(started){
    return <Startup directories={dirs} count={second}/>
    }else{
      return <StartupWithButton set={() => {
        setStarted(true);
        playEnter();
        playLoad();
      }
      }/>
    }
  }else{
    return <MainApp/>
  }
}

function StartupWithButton(props){

  return(
    <div className="StartupWithButton">
      <button className="startbutton" onClick={props.set}>POWER</button>
    </div>
  )
}

function makeDirectory(currentCount) {
  let result           = '';
  let characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let charactersLength = characters.length;
  let length = Math.floor(Math.random() * 10) + 1;

  let dirs = [
    "C:/user/Josh Wilson/games/",
    "C:/user/Josh Wilson/vfx/",
    "C:/user/Josh Wilson/project management/",
    "C:/system/JoshOS/binaries/",
    "C:/system/JoshOS/coreFiles/",
    "C:/system/JoshOS/libraries/",
    "C:/system/JoshOS/programs/"
  ]
  
  let files = [
    ".cs",
    ".mp4",
    ".sheet",
    ".dll",
    ".pdb",
    ".lib",
    ".exe"
  ]

  let ind = Math.floor(((currentCount - 1000)/(1000)) * 7);

  result += dirs[ind];
  

  for ( let i = 0; i < length; i++ ) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
 }
 return result + files[ind];
}

//Draw a series of 'directories' to the screen
function Startup(props){
  const messagesEndRef = useRef(null);


  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({ behavior: "auto" });
  };
  useEffect(scrollToBottom, [props.count]);

  

  return(
    <div className="Startup">
      <div className="StartText">
        {props.directories}
        <div className="reference" ref={messagesEndRef} />
      </div>
    </div>
  )

  
}

//Draw the tab categories and the relevant opened tab
function MainApp(){
  const[tab, setTab] = useState("About");
  
  return (
    <div className="Main">
     <div className="Left">
     <Category title="Info"/>
      <Project title="About" onTabChange={setTab} tab={tab}/>
      <Project title="Contact" onTabChange={setTab} tab={tab} />
     <Category title="Games"/>
      <Project title="Netscape Cybermind" onTabChange={setTab} tab={tab}/>
      <Project title="S&box" onTabChange={setTab} tab={tab}/>
      <Project title="Misc. Games" onTabChange={setTab} tab={tab}/>
     <Category title="VFX"/>
      <Project title="HD ME" onTabChange={setTab} tab={tab}/>
      <Project title="DOT COM GUY" onTabChange={setTab}  tab={tab}/>
      <Project title="Chip In The Streets" onTabChange={setTab} tab={tab}/>


     </div>
     <div className="Right">
       <PageFactory tab={tab}/>
     </div>
    </div>
    
  );
}

//Return the appropriate page to draw
function PageFactory(props){
    switch(props.tab){
      case "About":
        return <About/>
      break;
      case "Contact":
        return <Contact/>
      break;
      case "Netscape Cybermind":
        return <Netscape/>
      break;
      case "S&box":
        return <Sbox/>
      break;
      case "Misc. Games":
        return <Games/>
      break;
      case "HD ME":
        return <VidHolder cl="Vids" title="HD ME" link="https://www.youtube.com/embed/CagKjOtKbq4" text="HD ME was my first foray into legitimate video effects. This essentially helped me find my creative voice. The song was written by myself and my friend Will. The entirety of the video was filmed in front of a green bed sheet nailed to my closet, but I'm still proud of how well it turned out." />
      break;
      case "DOT COM GUY":
        return (
        <div className="vids">
        <VidHolder cl="Vids" title="DOT COM GUY" link="https://www.youtube.com/embed/8WPKzuzy9UQ" text="Dot Com Guy was the sequel to HD ME created in the summer of 2021. Its the culmination of every skill I had learned since HD ME and it's currently the work I'm most proud of. The entire production was an absolute crazy fest of song production, video effects, filming, and direction."/>
        <VidHolder cl="Vids" title="BEHIND THE SCENES" link="https://www.youtube.com/embed/gMuhhkZHsg8" text="This was a look into the process I took to rotoscope out silver fabric. Light your green screens properly, kids."/>
        </div>
        )
      break;
      case "Chip In The Streets":
          return <VidHolder cl="Vids" title="CHIP IN THE STREETS" link="https://www.youtube.com/embed/hU6x51tL-WA" text="For a while I had a (now deceased) news personality by the name of Chip Chadley. I only did a short number of projects with this character but was happy with how this video turned out. This was during a time when I tried to have a cinematic beginning or end to all my videos."/>
      break;
      default:
        return <EmptyPage/>
    }
}



function EmptyPage(){
  return(
    <h1>This is an empty page</h1>
  )
}

function Category(props){
  return(
    <div className="Title">
    <h1 className="headers">{props.title}</h1>
    </div>
  )
}

function Project(props){
  const [playOn] = useSound(
    '/sounds/key.mp3',
    { volume: 0.25 }
  );

  const [enter] = useSound(
    '/sounds/enterkey.mp3',
    { volume: 0.25 }
  );

  return(
    <button className={props.tab == props.title ? "ProjectSelected" : "Project"} onMouseEnter={playOn} onClick={() => {
      props.onTabChange(props.title);
      enter();
      }}>
    <h2 className="headers">{props.title}</h2>
    </button>
  )
}





export default App;
