import './App.scss';
import './Contact.scss';

function Contact(){
    return(
      <div className="Contact">
        <div className="linksContainer">
            <Link linkName="Twitter" image={require("./images/TwitterLogo.png")} link="https://twitter.com/StaticLoFi"/>
            <Link linkName="GitHub" image={require("./images/GHLogo.png")} link="https://github.com/Geeknerd1337"/>
            <Link linkName="Itch" image={require("./images/ItchLogo.png")} link="https://joshomaton.itch.io/"/>
            <Link linkName="YouTube" image={require("./images/YTLogo.png")} link="https://www.youtube.com/c/joshomaton/featured"/>
            
        </div>
        <text className="mainText">
                You can contact me directly via my email{"\n"}{"\n"}
                </text>
                <a href="mailTo:joshuachristianwilson@gmail.com">joshuachristianwilson@gmail.com</a>
        <text className="mainText">
                {"\n"}{"\n"}
                I'm always looking for new opportunities for employment and collaboration, so don't be afraid to reach out.
        </text>
      </div>
    )
  }

  function Link(props){
      return(
          <div className="linkHolder">
              <img className="linkImage" src={props.image}/>
              <a href={props.link} className="hyper">{props.linkName}</a>
          </div>
      )
  }

  export default Contact;