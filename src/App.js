import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './components/pages/Home'
import Merch from './components/pages/Merch';
import SignUp from './components/pages/SignUp';
import Articles from './components/pages/Articles';
import AboutUs from './components/pages/AboutUs';


function App() {
  return (
    <>
      
      <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact Component={Home} />
        <Route path='/aricles' Component={Articles} />
        <Route path='/merch' Component={Merch} />
        <Route path='/sign-up' Component={SignUp} />
        <Route path='/about us' Component={AboutUs}/>
      </Routes>
      </Router>
    </>
  );
}

export default App;
