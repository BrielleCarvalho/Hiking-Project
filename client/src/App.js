import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import './App.css';
import Form from './components/layout/Form';
import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";


function App() {
  return (
    <div className="App">
        <Router>
            <div className="App">
                <Navbar />
                <Route exact path="/register" component={Register} />
                <Route exact path="/login" component={Login} />
            </div>
        </Router>


        <Landing></Landing>


      <Form></Form>
    </div>
  );
}

export default App;
