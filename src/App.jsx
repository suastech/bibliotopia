import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Libro from './pages/Libro'
import Contacto from './pages/Contacto'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import NotFound from './pages/NotFound'

function App() {

return (
  <div>
    <Navbar/>
    <div className='main-page'>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/libro/:bookId' element={<Libro/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contactar' element={<Contacto/>} />
        <Route path='*' element={<NotFound/>} />
      </Routes>
    </div>

    <Footer/>
  </div>       
)
}

export default App
