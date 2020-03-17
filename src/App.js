import React from 'react';
import Navigation from './components/Navigation.jsx';
import Routes from './components/Routes';
import { Jumbotron } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/homepage.scss'
import './css/navigation.scss';
import './css/resume.scss';


function App() {
  return (
    <Jumbotron>
      <div>
        <Navigation/>
        <Routes/>
      </div>
    </Jumbotron>
  );
}

export default App;
