import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Navigation from "./components/navbar";
import Home from "./pages/home";
import comparison from "./pages/comparison";
import timeline from "./pages/timeline";
import 'bootstrap/dist/css/bootstrap.min.css';
import pageFooter from './components/footer';


function App() {
  return (
    <BrowserRouter>
    <Navigation></Navigation>
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/comparison' element={<comparison />}></Route>
      <Route path='/timeline' element={<timeline />}></Route>
    </Routes>
    <pageFooter></pageFooter>
    </BrowserRouter>
  );
}

export default App;
