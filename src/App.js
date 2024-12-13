import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Features from './components/view/Features';
import About from './components/view/About';
import Home from './components/view/Home';
function App() {
  return (
   <div>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/features' element={<Features/>}/>
      </Routes>
      </BrowserRouter>
   </div>
  );
}

export default App;
