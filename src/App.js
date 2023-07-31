import './App.css';
import { Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Login from './components/login';
import Dashboard from './pages/Dashboard';
import CustomerDetails from './pages/customerDetails';
import Services from './pages/Services';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/homepage" element={<Homepage/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/customerDetails" element={<CustomerDetails/>}/>
        <Route path="/services" element={<Services/>}/>
      </Routes>
    </div>
  );
}

export default App;
