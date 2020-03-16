import React from 'react';
import Navigation from './components/Navigation.jsx';
import Routes from './components/Routes';
import { Jumbotron } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './css/homepage.scss'
import './css/navigation.scss';
import './css/resume.scss';
import './css/contact.scss';


function App() {
  return (
    <Jumbotron>
      <div className="App">
        <Navigation/>
        <Routes/>
      </div>
    </Jumbotron>
  );
}

export default App;
