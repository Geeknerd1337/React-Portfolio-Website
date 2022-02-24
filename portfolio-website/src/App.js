import './App.scss';
import About from './About';
import React, { useState, useEffect, useRef } from "react";

//Basically render the 'intro' to the website
function App() {
  const [second, setSecond] = useState(0);
  const [dirs, addDirs] = useState("");

  //Tick up in seconds
  useEffect(() => {
    const interval = setTimeout(() =>{
      
      setSecond((second) => second + 1);
    }, 1)
    return () => clearInterval(interval);
  });

  useEffect(() => {
    if(second > 2250 && second < 3999){
      if(second % 25 == 0){
      addDirs((dirs) => dirs + makeDirectory(second) + "\n");
      }
    }

    if(second == 3999){
      addDirs((dirs) => "JoshOS v0.0.1(beta) is now loaded!\nEnjoy your stay in my React Portfolio!");
    }

    if(second < 2250){
      if(second == 100){
        addDirs((dirs) => dirs + "runCmd -r JoshWilsonOS '/portfolio/*'\n");
      }
      if(second == 500){
        addDirs((dirs) => dirs + "Loading JoshWilsonOS v0.0.1(beta)...\n");
      }
      if(second == 1000){
        addDirs((dirs) => dirs + "Fetching executable...\n");
      }

      if(second == 1500){
        addDirs((dirs) => dirs + "\nMounting Portfolio...\n\n");
      }
    }

  },[second])


  if(second < 4750){
    return <Startup directories={dirs} count={second}/>
  }else{
    return <MainApp/>
  }
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

  let ind = Math.floor(((currentCount - 2250)/(3999 - 2250)) * 7);

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
      <Project title="Github" onTabChange={setTab} tab={tab}/>
      <Project title="Contact" onTabChange={setTab} tab={tab} />
     <Category title="Games"/>
      <Project title="Netscape Cybermind" onTabChange={setTab} tab={tab}/>
      <Project title="Misc. Games" onTabChange={setTab} tab={tab}/>
     <Category title="VFX"/>
      <Project title="HD ME" onTabChange={setTab} tab={tab}/>
      <Project title="DOT COM GUY" onTabChange={setTab}  tab={tab}/>
      <Project title="Chip In The Streets" onTabChange={setTab} tab={tab}/>
     <Category title="Management" onTabChange={setTab} tab={tab}/>
      <Project title="Eagle One" onTabChange={setTab} tab={tab}/>

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

  return(
    <button className={props.tab == props.title ? "ProjectSelected" : "Project"} onClick={() => {props.onTabChange(props.title)}}>
    <h2 className="headers">{props.title}</h2>
    </button>
  )
}


export default App;
