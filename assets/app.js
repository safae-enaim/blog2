
import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Switch, withRouter } from 'react-router-dom';
import './css/app.css';
import './css/bootstrap.min.css';
import Admin from './js/components/Admin';
import CreateArticle from './js/components/CreateArticle';
import Home from './js/components/Home';


const App = () => {


    return (
            <React.StrictMode>
                <HashRouter>
                    <Switch>
                        <Route path="/home" component={Home}/>
                        <Route path='/admin' component={Admin}/>
                        <Route path='/createArticle' component={CreateArticle}/>


                    </Switch>
                </HashRouter>
            </React.StrictMode>
    );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);