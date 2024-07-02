import { useState } from 'react'
import '../styles/SearchBar.css'

export default function SearchBar({filterArray}) {
  const [searchInput, setSearchInput] = useState("")
  
  function handleChange(e) {
    setSearchInput(e.target.value)
    filterArray(e.target.value)
  }

  return (
    <div className='search-container'>
      <h1>Catálogo</h1>
      <input type='search' placeholder="Buscar..." className='search-input' value={searchInput} onChange={handleChange}/>
    </div>
  )

}