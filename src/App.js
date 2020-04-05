import React from 'react';
import Navigation from './components/Navigation.jsx';
import { Jumbotron } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/reset.scss'
import './css/portfolioPage.scss'
import './css/navigation.scss';
import './css/resumePage.scss';
import './css/contactPage.scss';



function App() {
  return (
    <Jumbotron>
      <div>
        <Navigation/>
      </div>
    </Jumbotron>
  );
}

export default App;
