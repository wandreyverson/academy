import NavBar from '../components/navBar/navBar'
import './App.css'
import { Routes, Route } from "react-router-dom";
import Sobre from '../pages/sobre/sobre';
import Contato from '../pages/contato/contato';
import Home from './home/home';

export default function HomePage() {
  return (
    <>
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/contato" element={<Contato />} />
      </Routes>
    </>
  );
}
