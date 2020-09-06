import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Main from './pages/Main';
import Income from './pages/Income';
import Expenses from './pages/Expenses';

import Nav from './components/Nav';
import Footer from './components/Footer';



function App() {
  return (
    <>
      <Nav />
      <Switch>
        <Route exact path='/' component={Main} />
        <Route path='/income' component={Income} />
        <Route path='/expenses' component={Expenses} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
