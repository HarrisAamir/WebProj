import './App.css';
import Login from "./components/Login"
import AdminDashboard from './components/Dashboard';
import Chart from './components/chart';

import 'bootstrap/dist/css/bootstrap.min.css'; // Import the Bootstrap CSS
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
   <>
    <Router>
      <Routes>
        <Route path="/login" element={<Login/>} />
        <Route path="/" element={<h1>Hello</h1>} />
        <Route path="/home" element={<AdminDashboard/>} />
        <Route path="/chart" element={<Chart/>} />
      </Routes>
    </Router>
   </>
  );
}
export default App;
