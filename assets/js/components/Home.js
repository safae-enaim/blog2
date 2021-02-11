// ./assets/js/components/Home.js
    
import React, {Component} from 'react';
import {Route, Switch,Redirect, Link, withRouter} from 'react-router-dom';
import Admin from './Admin';
import CreateArticle from './CreateArticle';

    
class Home extends Component {
    
    render() {
        return (
           <div>
               <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                   <Link className={"navbar-brand"} to={"/"}> My Blog Project </Link>
                   <div className="collapse navbar-collapse" id="navbarText">
                       <ul className="navbar-nav mr-auto">
                           <li className="nav-item">
                               <Link className={"nav-link"} to={"/articles"}> Articles </Link>
                           </li>
                      
    
                       </ul>
                   </div>
               </nav>
              
           </div>
        )
    }
}
    
export default Home;