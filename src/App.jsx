import Navbar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import CartWidget from './components/CartWidget'

function App() {
  return (
    <>
      <Navbar />
      <ItemListContainer
        greeting="PRE-ENTREGA1 con REACT"
      />
      <CartWidget />
    </>
  )
}

export default App
