import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/home/Home';
import Contact from './pages/contact/contact';
import Services from './pages/services/Services';
import AboutUs from './pages/us/AboutUs';


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/Home' element={<Home />} />
          <Route path='/AboutUs' element={<AboutUs />} />
          <Route path='/Contact' element={<Contact />} />
          <Route path='/Services' element={<Services />} />
          <Route path='/details1' element={<Home />} />
          <Route path='/details2' element={<Home />} />
          <Route path='/*' element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
