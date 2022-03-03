import './App.scss';
import './Games.scss';
import {Sbox, VidHolder} from './Sbox.js';

function Games(){
    return(
      <div className="Games">
        <VidHolder cl="Games" title="Entropy: Desert Colony System" link="https://www.youtube.com/embed/KOtKccehJ-I" text="Entropy: DCS was one of my first Unity games. You play as a prisoner sentenced to the task of setting up a colony on a dangerous alien planet.  It was my first experimentation into a slower paced, relaxed game."/>
        <VidHolder cl="Games" title="Entropy 2" link="https://www.youtube.com/embed/XM_zswCsia0" text="Entropy 2 was the first game I ever worked on in Unity. It was a sequel to a short jam game I made of the same name and moved all the mechanics to 3D. It was probably the start of my foray into 3D games."/>
        <VidHolder cl="Games" title="Memory Of Fall" text ="Memory Of Fall is a short game where you walk around and discover secrets. I made it for halloween one year as a way to get some exercise making hand painted textures." link="https://www.youtube.com/embed/nYV3aueqtbQ"/>
        <VidHolder cl="Games" link="https://www.youtube.com/embed/3L-mRy4EKkY" title="FILCH" text="FILCH was a game I made as a bit of a challenge to myself. I got a school assignment in an intro programming course to make a simple text based game involving Filch, but decided to try and use my skills to make an actual game out of the assignment. For what it's worth, my little stunt did work and I got an A."/>
        <VidHolder cl="Games" link="https://www.youtube.com/embed/9zVQ5gCl-Io" title="Zixels 2" text="The sequel to my one off wave based shooter zixels. This was made for a gamejam and I managed to create a survival game within just about two weeks."/>
        <VidHolder cl="Games" link="https://www.youtube.com/embed/TtQeb-I4B-8" title="Wizard's Tyranny" text="Wizard's Tyranny was an RPG made in two weeks for Jamcraft 5. We ended up placing second in that jam for this charming open world RPG."/>
        <VidHolder cl="Games" link="https://www.youtube.com/embed/EM0X97ROZXw" title="Galactic Gunsmith" text="Galactic Gunsmith was an open world procedurally generated gun crafting sci-fi RPG. We placed first in this jam."/>
      </div>
    )
  }


export default Games;