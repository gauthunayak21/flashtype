import TestContainer from '../TestContainer/TestContainer';
import './ChallengeSection.css';

const ChallengeSection = ({ words, characters, wpm, selectedParagraph, timeStarted, timeRemaining, testInfo, onChange, onTryAgain}) => {
    return (
      <div className="challeng-wrapper">
        <h1 className="challeng-header">Take a speed Test now!</h1>
        <TestContainer
          wpm={wpm}
          words={words}
          characters={characters}
          selectedParagraph={selectedParagraph}
          timeStarted={timeStarted}
          timeRemaining={timeRemaining}
          testInfo={testInfo}
          onChange={onChange}
          onTryAgain={onTryAgain}
        />
      </div>
    );
}

export default ChallengeSection;