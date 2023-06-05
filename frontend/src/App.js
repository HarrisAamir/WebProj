import './App.css';
import Login from "./components/Login"
import AdminDashboard from './components/Dashboard';
import Topbar from './components/topbar';
import Navbar from './components/navbar';
// import 'bootstrap/dist/css/bootstrap.min.css'; // Import the Bootstrap CSS
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
   <>
   <Topbar/>
   <Navbar/>
    <Router>
      <Routes>
        <Route path="/login" element={<Login/>} />
        <Route path="/" element={<Login/>} />
        <Route path="/Admin" element={<AdminDashboard/>} />
      </Routes>
    </Router>
   </>
  );
}
export default App;
