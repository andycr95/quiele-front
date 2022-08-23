import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import HomePage from './pages/HomePage/index.js';
import WalletPage from './pages/WalletPage/index.js';
import NotFoundPage from './pages/NotFoundPage';
import LoginPage from './pages/LoginPage';
import TransaciontPage from './pages/TransaciontPage';
import SettingsPage from './pages/SettingsPage';
import StatiticsPage from './pages/StatiticsPage';
import ProfilePage from './pages/ProfilePage';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/wallet" element={<WalletPage/>} />
          <Route path="/transactions" element={<TransaciontPage/>} />
          <Route path="/settings" element={<SettingsPage/>} />
          <Route path="/statitics" element={<StatiticsPage/>} />
          <Route path="/login" element={<LoginPage/>} />
          <Route path="/users">
            <Route path=":id" element={<ProfilePage/>} />
          </Route>
          <Route path="/me" element={<ProfilePage/>} />
          <Route path="*" element={<NotFoundPage/>} />
        </Routes>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
