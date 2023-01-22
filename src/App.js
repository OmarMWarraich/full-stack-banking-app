import React from 'react';
import { connect } from 'react-redux';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import Login from './features/login/Login';
import Register from './features/register/Register';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

const mapStateToProps = (state) => ({
  user: state.auth
});

export default connect(mapStateToProps)(App);