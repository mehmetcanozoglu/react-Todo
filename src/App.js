import React, { useState } from 'react'
import './App.css'

function App() {

  let [newItems, setNewItems] = useState("")
  let [Items, setItems] = useState([])

  function addItems() {

    if (!newItems) {
      alert("İnput alanı boş bırakılamaz");
      return;
    }
    let Item = {
      id: Math.floor(Math.random() * 1000),
      value: newItems
    }
    setItems(oldItems => [...oldItems, Item])
    setNewItems = ("")

  }

  function deleteItem(id) {
    let newArray = Items.filter(Item => Item.id !== id)
    setItems(newArray)
  }
  
  return (
    <div className='App'>
      <div className='container'>
        <h1>Todo list</h1>
        <input
          type='text'
          placeholder='Add An ıtem'
          value={newItems}
          onChange={(e) => setNewItems(e.target.value)}
        />
        <button onClick={() => addItems()}>Add</button>
        <ul>
          {Items.map(Item => {
            return <li key={Item.id}> {Item.value} <button onClick={() => deleteItem(Item.id)}>X</button>  </li>
          })}
        </ul>
      </div>
    </div>
  )
}
export default App