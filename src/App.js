import React from 'react';
import { connect } from 'react-redux';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import Login from './features/login/Login';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
    </Router>
  );
}

const mapStateToProps = (state) => ({
  user: state.auth
});

export default connect(mapStateToProps)(App);