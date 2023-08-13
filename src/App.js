import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './screens/Home';
import Login from './screens/Login';
import Signup from './screens/Signup';
import Browse from './screens/Browse'
import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import About from './screens/About';
import Volunteers from './screens/Volunteers';


function App() {
  return (
    <Router >
      <div>
        <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/createuser" element={<Signup />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path='/browse' element={<Browse />} />
            <Route exact path='/volunteer' element={<Volunteers />} />
        </Routes> 
      </div>
    </Router>
  );
}

export default App;
