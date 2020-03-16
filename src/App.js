import React from 'react';
import Navigation from './components/Navigation.jsx';
import Routes from './components/Routes';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './css/homepage.scss'
import './css/navigation.scss';
import './css/resume.scss';
import './css/contact.scss';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <Routes/>
    </div>
  );
}

export default App;
