import TryAgain from '../TryAgain/TryAgain';
import TypingChallengeContainer from '../TypingChallengeContainer/TypingChallengeContainer';
import './TestContainer.css';

const TestContainer = ( { words, characters, wpm, selectedParagraph, timeStarted, timeRemaining, testInfo, onChange, onTryAgain} ) => {
    return (
      <div className="test-wrapper">
          {
              timeRemaining > 0 ? (        
              <TypingChallengeContainer
                words={words}
                characters={characters}
                wpm={wpm}
                selectedParagraph={selectedParagraph}
                timeStarted={timeStarted}
                timeRemaining={timeRemaining}
                testInfo={testInfo}
                onChange={onChange}
              />) : (<TryAgain words={words} characters={characters} wpm={wpm} onTryAgain={onTryAgain} />)
          }
      </div>
    );
}

export default TestContainer;