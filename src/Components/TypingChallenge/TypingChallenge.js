import TestLetter from '../TestLetter/TestLetter';
import './TypingChallenge.css';

const TypingChallenge = ( { timeStarted, timeRemaining, testInfo, onChange } ) => {
    return <div>
        <div className="timer-wrapper">
            <p className='timer'>{(timeRemaining  < 10 && `00:0${timeRemaining}`) || `00:${timeRemaining}`}</p>
            <p className='timerText'>{!timeStarted && 'Start typing to start the test'}</p>
        </div>
        <div className="text-area">
            <div className="textarea-left">
                {
                    testInfo.map((letter, index) => <TestLetter key={index} individualLetter={letter} />)
                }
            </div>

            <div className="textarea-right">
                <textarea
                onChange={(e) => onChange(e.target.value)}
                className='textarea' placeholder='Start typing here'>

                </textarea>
            </div>  
        </div>
    </div>
}

export default TypingChallenge;