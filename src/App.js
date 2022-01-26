import './App.css';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import TopNav from './components/Header/NavTop';
import BottomNav from './components/Header/NavBottom';

function App() {
  return (
    <Router>
    <div className="app">
    
      <TopNav/>
      <BottomNav/>
  

        {/* Header */}
        {/* Body */}
        
     
    </div>
    </Router>
  );
}

export default App;
