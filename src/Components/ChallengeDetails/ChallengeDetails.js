import './ChallengeDetails.css';

const ChallengeDetails = ( { count, placeholder } ) => {
    return <div className='challenge-details'>
        <h1>{count}</h1>
        <p>{placeholder}</p>
    </div>
}

export default ChallengeDetails