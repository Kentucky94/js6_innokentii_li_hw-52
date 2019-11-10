import React, {Component} from 'react';
import './App.css';
import { Button } from 'reactstrap';
import Circle from './Components/Circle/circle'

class App extends Component {
  state = {
      numbers: [0, 0, 0, 0, 0, 0]
  };

  generateNumbers = () => {
      const generateRandomNum = () => {
          const max = 36;
          const min = 5;
          return Math.floor(Math.random() * (max - min) + min);
      };

      const sortedGeneratedNums = () => {
          const array = [];

          while(array.length < 6){
              const nextNum = generateRandomNum();

              array.push(nextNum);

              array.sort(function(a, b){return a - b});

              for(let i = 0; i < array.length; i++){
                  if(array[i] === array[i - 1]){
                      array.splice(i, 1);
                  }
              }
          }

          return array;
      };

      this.setState({
          numbers: sortedGeneratedNums()
      })
  };

  render(){
    return (
        <div className="App">
          <div className="buttonContainer">
            <Button onClick={this.generateNumbers} color="success">Generate numbers</Button>{' '}
          </div>
          <div className="circleContainer">
            < Circle value={this.state.numbers[0]} />
            < Circle value={this.state.numbers[1]} />
            < Circle value={this.state.numbers[2]} />
            < Circle value={this.state.numbers[3]} />
            < Circle value={this.state.numbers[4]} />
            < Circle value={this.state.numbers[5]} />
          </div>
        </div>
    );
  }
}

export default App;
