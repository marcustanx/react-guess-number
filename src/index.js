import React from 'react';
import ReactDom from 'react-dom';
import './RandomNumGame.css';
import './RandomNumGameFunct';

class RandNumGame extends React.Component {

  constructor(props) {
    super(props);
  }
  render() {
    return (
        <div id="bodyArea">
          <h1>Number Guessing Game</h1>
          <div id="statusArea1" />
          <div id="statusArea2" />
          <div id="statusArea3" />
          <form>
            <input type="number" id="userGuess" />
          </form>
          <div id="buttonArea" className="button">Start</div>
          <div id="historyArea">
            <h2>Your Previous Guesses</h2>
            <table>
              <tr>
                <th>Lowest</th>
                <th>Highest</th>
              </tr>
              <tr>
                <td id="histLow" />
                <td id="histHigh" />
              </tr>
            </table>
            <ol id="historyList" />
          </div>
          <br />

        <div id="footerArea"> This is created by Marcus Tan to practise basic coding, including React.</div>
        </div>
    );
  }
}

ReactDom.render(<RandNumGame />, document.getElementById("game"));

export default RandNumGame;
