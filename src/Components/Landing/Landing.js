import Typewriter from 'typewriter-effect';
import './Landing.css';
import flash from '../../assets/flash.png'

const Landing = () => {
    return (
      <div className='wrapper'>
        <div className='wrapper-text'>
          <h1 className='landing-name'>Can you type</h1>
          <Typewriter
            options={{
              strings: ["Fast?", "Correct?", "Quick?"],
              autoStart: true,
              loop: true,
            }}
          />
        </div>

        <img className='image-wrapper' src={flash} alt="placeholder" />
      </div>
    );
}

export default Landing;