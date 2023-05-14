import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComp from './components/NavbarComp';
import CarouselComp from './components/CarouselComp';
import { useState } from "react";


function App() {
  const [search, setSearch] = useState('spiderman');
  function handleChange(e) {
    setSearch(e.target.value);
  }
    return (
    <div className="App">
      <NavbarComp onChange={handleChange}/>      
      <CarouselComp searchTerm={search}/>
      </div>    
  );
}

export default App;
