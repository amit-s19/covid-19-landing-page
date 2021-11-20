
import React, {useState} from 'react';
import './App.css';
import Home from './components/pages/HomePage/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/pages/Footer.js/Footer';
import tabContext from './components/TabContext';

function App() {
  const [tab, setTab] = useState("overview");
  return (
    <tabContext.Provider value={{ tab, setTab }}>
      <Router>
        <Navbar />
        <Switch>
          <Route path='*' exact component={Home} />
        </Switch>
        <Footer />
      </Router>
    </tabContext.Provider>
  );
}

export default App;
