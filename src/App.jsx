import { useEffect, useState } from 'react'
import './App.css'
import Search from './components/search/search';
import Cat from './components/cat/Cat';

function App() {
// Steitai
  const [cats, setsCats] = useState([]);
  // cats - tuscias array kuri nustatysim su setsCats kaip gausim duomenis
  // setsCats - ivedame duomenis(nustatome)

  const [search, setSearch] = useState(false)

  const handleSearch = (data) => {
    setSearch(data)
  }

 useEffect(() =>{
  if(search){
    try {
      fetch(`https://api.thecatapi.com/v1/images/search?breed_ids=${search}`)
      .then(respone => respone.json())
      .then(data => setsCats(data))
    }catch (err) {
      console.log('err', err)
    }
  }
 },[search]) // <- isimetame search kad visada naudotu naujus duomenis.
  return (
    
    <div className="container">
      {/* Nusiunciu duomenis i search */}
      <Search onSearch={handleSearch}/>
      {cats?.map((cat) =>
        <Cat key={cat.id} url={cat.url}/>
  
      )}
    </div> 

  )
  
}

export default App
