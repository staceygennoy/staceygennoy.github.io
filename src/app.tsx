import React, { FunctionComponent } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Home } from './home/home';
import { Header } from './header/header';
import { Footer } from './footer/footer';
import { Work } from './work/work';
import { About } from './about/about';

// ts stands for typescript, tsx is JavaScript and HTML
export const App: FunctionComponent = () => {
  return (
    <Router>
      <Header />
      <Route path="/" exact component={Home} />
      <Route path="/work" exact component={Work} />
      <Route path="/about" exact component={About} />
      <Footer />
    </Router>
  );
};
