import './TestLetter.css';

const TestLetter = ( { individualLetter} ) => {
    const { status } = individualLetter;
    const statusClass = {
        correct: 'test-correct',
        incorrect: 'test-incorrect',
        notAttempted: 'test-notAttempted'
    }[status];
    
    return <span className={`test-letter ${statusClass}`}>
        {individualLetter.textLetter}
    </span>
}

export default TestLetter;