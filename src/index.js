import React from "react";
import ReactDom from "react-dom";
import App from "./components/app";
import storehouse from './store';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import {Provider} from 'react-redux';
import Product from './components/product';

ReactDom.render(
<Provider store={storehouse}>
    <Router>
        <Switch>
            <Route path="/" exact="true" component={App}/>
            <Route path="/view/:id" component={Product}/>

            
        </Switch>
    </Router>

</Provider>
,document.getElementById("root"));