import './App.scss';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/layout';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element = {<Layout/>}>
        <Route index element = {<Home/>}></Route>
        <Route path="/about" element ={<About/>}></Route>
        <Route path="/contact" element ={<Contact/>}></Route>
        <Route path="/portfolio" element={<Portfolio/>}></Route>
        </Route>
        
      </Routes>
    </>
   
  )
}

export default App;
