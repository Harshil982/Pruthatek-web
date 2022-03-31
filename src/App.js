import React from 'react';
import './App.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Engagement from './Components/Engagement';
import QualityManagement from './Components/QualityManagement';
import BusinessContinuty from './Components/BusinessContinuty';

function App(props) {
  return (
    <>
      <Router>
        <Route path="/Quality-Management" component={QualityManagement} exact />
        <Route path="/Business-continutiy" component={BusinessContinuty} exact />
        <Route path="/Engagement-models" component={Engagement} exact />
      </Router>
    </>
  );
}

export default App;