import './App.scss';
import './Netscape.scss';

function Netscape(){
    return(
      <div className="Netscape">
       <h1>Netscape Cybermind</h1>
       <iframe width="560" height="315" src="https://www.youtube.com/embed/-XqcwH6TYDc" title="Netscape Cybermind Gameplay Trailer" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
       <text className="mainText">
        Netscape Cybermind is a Half-Life inspired retro first person shooter taking place in 90s cyberspace. 
        Use experimental VR technology to fight your way through an almagam of human percption and networks called the Netscape. You will meet characters, explore beautiful and well crafted levels, and engage in high energy heart pounding combat that harkens back to 90s shooters.
        {'\n'}{'\n'}
        To begin your journey, please view the following VR training seminar provided by the Ehlers corporation.
       </text>
       <iframe width="320" height="240" src="https://www.youtube.com/embed/rCHZuheN2t8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
    )
  }

  export default Netscape;