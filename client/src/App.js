import React from 'react';
import './elements/App.css';
import Navigation from './components/Navigation.js';
import LandingPage from './components/LandingPage.js';
import Students from './components/Students.js';
import Rentals from './components/Rentals.js';
import StudentDetail from './components/StudentDetail.js';
import Housing from './components/Housing.js';
import { Switch, Route } from 'react-router-dom';

const App = () => {
    return (
        <div>
            <Navigation />
            <Switch>
                <Route exact path="/"   component={ LandingPage } />
                <Route path="/students" component={ Students }    />
                <Route path="/rentals"  component={ Rentals }     />
                <Route path="/housing"  component={ Housing }     />
                <Route path="/studentDetail" render={ rProps => <StudentDetail {...rProps} />} />
            </Switch>
        </div>
    );
};

export default App;