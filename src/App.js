import React from 'react';
import './App.css';
import Header from './components/Header';
import { Route, Switch } from 'react-router-dom';
import HomePage from './HomePage/HomePage'
import ServicesPage from './ServicesPage/ServicesPage'
import PortfolioPage from './PortfolioPage/PortfolioPage'
import TestimonialPage from './TestimonialPage/TestimonialPage'
import Page404 from './components/Page404'


function App() {


  return (
    <div>
      <Header/>
      <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/services" component={ServicesPage} />
          <Route exact path="/portfolio" component={PortfolioPage} />
          <Route exact path="/testimonial" component={TestimonialPage} />
          <Route component = {Page404}/>
      </Switch>

    </div>
  );
}

export default App;
