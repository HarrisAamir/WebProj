import './App.css';
import Login from "./components/Login"
import Topbar from './components/Topbar';
import Navbar from './components/Navbar';
//import 'bootstrap/dist/css/bootstrap.min.css'; // Import the Bootstrap CSS
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ChatComponent from './components/Chat';
import Restaurant from './components/Resturant';
import Customers from './components/Customers';
import Store from './components/Store';
import Orders from './components/Orders';
import { createContext, useState } from 'react';
export const LoginContext = createContext();
function App() {
  const [logedIn, setLogedIn]= useState(false)
  return (
    <LoginContext.Provider value={{logedIn,setLogedIn}}>
    <Router>
    <Topbar/>
    <Navbar/> 
      <Routes>
        <Route path="/login" element={<Login/>} />
        <Route path="/" element={<Login/>} />
        <Route path="/chat" element={<ChatComponent/>} />
        <Route path="/Admin/ManageResturant" element={<Restaurant/>} />
        <Route path="/Admin/ManageCustomers" element={<Customers/>} />
        <Route path="/Admin/ManageGrocceryStore" element={<Store/>} />
        <Route path="/Admin/ManageOrders" element={<Orders/>} />
      </Routes>
    </Router>
    </LoginContext.Provider>
  );
}
export default App;
