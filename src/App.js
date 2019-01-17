import './utils/styles/main.scss';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './layouts/Home/Home';
import Apparel from './layouts/Apparel/Apparel';
import { headerLinks, socialIcons, footerInfo } from './config/home';

const App = () => {
    return (
        <div className="container">
            <BrowserRouter>
                <>
                    <Header headerLinks={ headerLinks }/>
                    <Switch>
                        <Route path="/" exact component={ Home } />
                        <Route path='/apparel' exact component={ Apparel } />
                    </Switch>
                    <Footer social={ socialIcons } footerInfo={ footerInfo }/>
                </>
            </BrowserRouter>
        </div>
    );
}

export default App;
