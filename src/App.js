// import logo from './logo.svg';
// eslint-disable-next-line
import { Outlet } from 'react-router';
import './App.css';
import Home from './pages/home';

export default function App() {
  return (
    <>
      <Home />
      <Outlet />
    </>
  );
}
