import { useState } from 'react'
import ProductList from './components/ProductList'

function App() {
  const [showProducts, setShowProducts] = useState(false)
  const [name, setName] = useState('')

  return (
    <div>
      <h1>React Product Dashboard</h1>
      
      <div>
        <label>Name: </label>
        <input 
          type="text" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          placeholder="Enter your name here"
        />
      </div>

      <p>Hello, {name}</p>

      <button onClick={() => setShowProducts(!showProducts)}>
        {showProducts ? "Hide Products" : "Show Products"}
      </button>

      {showProducts && <ProductList />}
    </div>
  )
}

export default App


