import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Navigation from "./components/navbar";
import Home from "./pages/home";
import Comparison from "./pages/comparison";
import Timeline from "./pages/timeline";
import 'bootstrap/dist/css/bootstrap.min.css';

import FOG from 'vanta/src/vanta.fog';
import { useEffect } from 'react';
import VantaBackground from './VantaBackground'

function App() {

  return (
    <BrowserRouter>
      <Navigation></Navigation>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/comparison' element={<Comparison />}></Route>
        <Route path='/timeline' element={<Timeline />}></Route>
      </Routes>

    </BrowserRouter>
  );
}

export default App;
