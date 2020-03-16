import React from 'react';
import { Route} from 'react-router-dom';
import Portfolio from './Portfolio.jsx';
import Contact from './Contact.jsx';
import Resume from './Resume.jsx';

const Routes = () => {
    return (
        <>
            <Route exact path='/portfolio' component={Portfolio}/>
            <Route exact path='/contact' component={Contact}/>
            <Route exact path='/resume' component={Resume}/>
        </>
    )
}

export default Routes;