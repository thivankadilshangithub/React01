import './App.css';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';
import { Fragment } from 'react';

import NameList from './components/pages/NameList/NameList';
import HeaderBar from './components/HeaderBar/HeaderBar';
import Home from './components/pages/Home/Home';
import About from './components/pages/About/About';



function App() {
  return (



<div>
<BrowserRouter>
    <Fragment>
        <HeaderBar />
        <Switch>
        <Route exact path='/' > <Home /></Route>
        <Route   path='/about'> <About /> </Route>
        <Route   path='/namelist'> <NameList /> </Route>
        </Switch>
        </Fragment>
      </BrowserRouter>
      </div>
  );
}

export default App;

