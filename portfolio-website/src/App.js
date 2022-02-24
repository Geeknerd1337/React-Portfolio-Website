import './App.scss';
import React, { useState, useEffect, useRef } from "react";

function App() {
  const [second, setSecond] = useState(0);
  const [dirs, addDirs] = useState("");

  //Tick up in seconds
  useEffect(() => {
    const interval = setTimeout(() =>{
      setSecond((second) => second + 1);
    }, 100)
    return () => clearInterval(interval);
  });

  useEffect(() => {
    addDirs((dirs) => dirs + {second} + " Hello world!\n");
  },[second])

  if(second < 100){
    return <Startup directories={dirs} count={second}/>
  }else{
    return <MainApp/>
  }
}

function Startup(props){
  const messagesEndRef = useRef(null);
  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
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
     <Category title="Project Management" onTabChange={setTab} tab={tab}/>
      <Project title="Eagle One" onTabChange={setTab} tab={tab}/>
    <h1>{tab}</h1>
     </div>
     <div className="Right">
       <PageFactory tab={tab}/>
     </div>
    </div>
    
  );
}

function PageFactory(props){
    switch(props.tab){
      case "About":
        return <AboutPage/>
      break;
      default:
        return <EmptyPage/>
    }
}

function AboutPage(){
  return(
    <h1>This is where will put some info</h1>
  )
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
