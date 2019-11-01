import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import quiz from './quiz.png'
import Flags from './components/pages/Flags';
import About from './components/pages/About';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">

          <Route exact path="/" render={props => (
              <React.Fragment>
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
              </React.Fragment>
            )
          } />         

          <Route path="/flags" component={Flags} />
          <Route path="/about" component={About} />

        </header>
      </div>
    </Router>
  );
}

export default App;
