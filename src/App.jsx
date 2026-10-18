import { useState } from 'react'
import ProductList from './components/ProductList'
import './App.css' // For simple styling

function App() {
  // showProducts: Should the list be visible? Initially false (hidden).
  // setShowProducts: The function to update this state.
  const [showProducts, setShowProducts] = useState(false)
  
  // name: The name entered by the user. Initially empty.
  // setName: The function to update the name.
  const [name, setName] = useState('')

  return (
    <div>
      <h1>React Product Dashboard</h1>
      
      {/* Name input area (Controlled Input) */}
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

      {/* When the button is clicked, showProducts is toggled (true becomes false, false becomes true) */}
      <button onClick={() => setShowProducts(!showProducts)}>
        {showProducts ? "Hide Products" : "Show Products"}
      </button>

      {/* If showProducts is true (meaning the button was clicked), display the ProductList component */}
      {showProducts && <ProductList />}
    </div>
  )
}

export default App


