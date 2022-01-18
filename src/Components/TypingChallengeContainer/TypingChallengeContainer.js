import ChallengeDetails from "../ChallengeDetails/ChallengeDetails";
import TypingChallenge from "../TypingChallenge/TypingChallenge";
import './TypingChallengeContainer.css'

const TypingChallengeContainer = ({ words, characters, wpm, selectedParagraph, timeStarted, timeRemaining, testInfo, onChange}) => {
    return (
      <>
        <div className="challenge-details-wrapper">
          <ChallengeDetails count={words} placeholder="Words" />
          <ChallengeDetails count={characters} placeholder="Characters" />
          <ChallengeDetails count={wpm} placeholder="wpm" />
        </div>
        <TypingChallenge
          selectedParagraph={selectedParagraph}
          timeStarted={timeStarted}
          timeRemaining={timeRemaining}
          testInfo={testInfo}
          onChange={onChange}
        />
      </>
    );
}

export default TypingChallengeContainer;