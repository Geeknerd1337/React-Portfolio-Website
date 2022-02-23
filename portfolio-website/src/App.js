import './App.css';

function App() {
  return (
    <div className="Main">
     <div className="Left">
     <Category title="Info"/>
      <Project title="About"/>
      <Project title="Github"/>
      <Project title="Contact"/>
     <Category title="Games"/>
      <Project title="Netscape Cybermind"/>
      <Project title="Misc. Games"/>
     <Category title="VFX"/>
      <Project title="HD ME"/>
      <Project title="DOT COM GUY"/>
      <Project title="Chip In The Streets"/>
     <Category title="Project Management"/>
      <Project title="Eagle One"/>

     </div>
     <div className="Right">
     </div>
    </div>
    
  );
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
    <div className="Project">
    <h2 className="headers">{props.title}</h2>
    </div>
  )
}


export default App;
