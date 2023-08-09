import Navbar from './components/Nabvar/NavBar'
import ItemListContainer from './components/ItemListContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Contact from './components/Contact'
import ItemDetailContainer from './components/ItemDetailContainer'
import Services from './components/Services'
import Cart from './components/Cart'
import CartContext from './context/CartContext'

function App() {

  return (

    <BrowserRouter>
      <CartContext>
        <Navbar />
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/contact/' element={<Contact />} />
            <Route exact path='/services/' element={<Services />} />
            <Route exact path='/cart/' element={<Cart />} />
            <Route exact path='/category/:category' element={<ItemListContainer />} /> 
            <Route exact path="/item/:id" element={<ItemDetailContainer />} /> 
          </Routes>
      </CartContext>
    </ BrowserRouter>
  )
  }

export default App
