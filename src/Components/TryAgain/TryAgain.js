import './TryAgain.css';

const TryAgain = ( { words, characters, wpm, onTryAgain} ) => {
    return <div className='try-again-wrapper'>
        <h4>Test Results</h4>
        <p>Characters : {characters}</p>
        <p>Words : {words}</p>
        <p>Speed : {wpm} wpm</p>
        <button className='tryAgainButton' onClick={onTryAgain}>Try Again</button>
    </div>
}

export default TryAgain;

