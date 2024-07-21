import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import LandingPage from './components/landingpage';
import AdminLogin from './components/admin/adminLogin';
import AdminPortal from './components/admin/admonPortal';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
      <Route element={<LandingPage />} path='/' />
      <Route element={<AdminLogin />} path='/adminLogin' />
      <Route element={<AdminPortal />} path='/adminPortal/*' />
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
