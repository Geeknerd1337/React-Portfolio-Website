import './App.scss';
import './Contact.scss';

function Contact(){
    return(
      <div className="Contact">
        <div className="linksContainer">
            <Link linkName="Twitter" image={require("./images/TwitterLogo.png")} link="https://twitter.com/StaticLoFi"/>
            <Link linkName="Twitter" image={require("./images/TwitterLogo.png")} link="https://twitter.com/StaticLoFi"/>
            <Link linkName="Twitter" image={require("./images/TwitterLogo.png")} link="https://twitter.com/StaticLoFi"/>
        </div>
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