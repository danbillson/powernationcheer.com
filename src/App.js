import './utils/styles/main.scss';
import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import history from './history';

const App = () => {
    return (
        <div className="container">
            <Router history={ history }>
                <div>
                    <Header />
                    <Switch>
                        <Route path="/" exact component={ Home } />
                    </Switch>
                </div>
            </Router>
        </div>
    );
}

export default App;
