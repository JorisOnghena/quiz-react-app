import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import quiz from './quiz.png'

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <div class="container">
          <div class="row">
            <div class="col-md">
              <img src={quiz} alt="quiz logo" class="App-logo"></img>
            </div>
          </div>
          <div class="row">
            <div class="col-sm">             
            </div>
            <div class="col-md">
              <a href="/flags" class="btn btn-light btn-lg btn-block" role="button">Match flags with countries</a>   
              <a href="/about" class="btn btn-light btn-lg btn-block" role="button">About</a>       
            </div>
            <div class="col-sm">              
            </div>
          </div>
        </div>

      </header>
    </div>
  );
}

export default App;
