import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import AddUser from './components/AddUser';
import ShowUsers from './components/ShowUsers';
import EditUser from './components/EditUser';
import AppError from './components/AppError';
import NavBar from './components/NavBar';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='' element={<Home/>} />
        <Route path='/add' element={<AddUser/>} />
        <Route path='/show' element={<ShowUsers/>} />
        <Route path='/edit/:id' element={<EditUser/>} />
        <Route path='/*' element={<AppError/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
