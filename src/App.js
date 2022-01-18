import React from 'react';
import './App.css';
import ChallengeSection from './Components/ChallengeSection/ChallengeSection';
import Footer from './Components/Footer/Footer';
import Landing from './Components/Landing/Landing';
import Nav from './Components/Nav/Nav';

const url = 'http://metaphorpsum.com/paragraphs/1/9';
const totalTime = 60
const defaultState = {
  selectedParagraph: 'Hello World',
  timeStarted: false,
  timeRemaining: totalTime,
  words: 0,
  characters: 0,
  wpm: 0,
  testInfo: []
}
class App extends React.Component {
  state = defaultState;

  componentDidMount () {
    this.fecthData();
  }

  fecthData = () => {
    fetch(url)
    .then(response => response.text())
    .then(data => {
      const selectedParagraph = data.split("");
      const testInfo = selectedParagraph.map( letter => {
        return {
          textLetter : letter,
          status: "notAttempted"
        }
      })
  
      this.setState({
        ...defaultState,
        selectedParagraph: data,
        testInfo
      })
    })
  }

  handleInputChange = (inputVal) => {
    console.log(inputVal);
    !this.state.timeStarted && this.setTimer();
    const characters = inputVal.length;
    const words = inputVal.split(" ").length;
    const index = characters - 1;

    if(index < 0) {
      this.setState({
        testInfo: [ {
          testLetter: this.state.testInfo[0].testLetter,
          status: "notAttempted"
        },
        ...this.state.testInfo.slice(1)
      ],
      characters,
      words
      })

      return;
    }

    if(index > this.state.selectedParagraph.length) {
      this.setState({ characters, words});
      return;
    }

    const testInfo = this.state.testInfo;
    if(!(index === this.state.selectedParagraph.length - 1)) {
      testInfo[index + 1].status = "notAttempted";
    }

    const isCorrect = inputVal[index] === testInfo[index].testLetter;

    testInfo[index].status = isCorrect ? 'correct' : 'incorrect';

    this.setState({
      testInfo,
      words,
      characters
    })
  }

  setTimer = () => {
    this.setState( { timeStarted: true });
    const timer = setInterval(() => {
      if(this.state.timeRemaining > 0) {
        const timeSpent = totalTime - this.state.timeRemaining;
        const wpm = timeSpent > 0 ? (this.state.words / timeSpent ) * totalTime : 0;
        this.setState({timeRemaining: this.state.timeRemaining - 1,
        wpm: wpm})
      } else {
        clearInterval(timer);
      }
    }, 1000)
  }

  tryAgain = () => {
    this.fecthData();
  }

  render() {

    return(
    <div className="App">
      <Nav />

      <Landing />

      <ChallengeSection
        words={this.state.words}
        characters={this.state.characters}
        wpm={this.state.wpm}
        selectedParagraph={this.state.selectedParagraph}
        timeStarted= {this.state.timeStarted}
        timeRemaining={this.state.timeRemaining}
        testInfo={this.state.testInfo}
        onChange={this.handleInputChange}
        onTryAgain={this.tryAgain}
      />
      <Footer />
    </div>
    )};
}

export default App

