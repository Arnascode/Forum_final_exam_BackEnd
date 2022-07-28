import { useState } from 'react';
// import reactLogo from './assets/react.svg';

// import { Route, Switch } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
// import ProtectedRoute from './components/ProtectedRoutes';
// import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';

function App() {
  return (
    <div className='App'>
      <Header />
      {/* <Switch> */}
      {/* <Route path={'/register'}> */}
      <RegisterPage />
      {/* </Route> */}
      {/* <Route path={'/login'}>
          <LoginPage />
        </Route>
        <ProtectedRoute exact path={'/'}>
          <HomePage />
        </ProtectedRoute> */}
      {/* </Switch> */}
      <Footer />
    </div>
  );
}

export default App;
