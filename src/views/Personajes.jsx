import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import {Button, Container} from 'react-bootstrap'

const Personajes = () => {  
  const [id, setId] = useState("");
  const [pokemon, setPokemon]= useState([]);
  const navigate = useNavigate();

  async function obetenerPokemon(){
    const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151&offset=0');
    const data = await res.json();
    console.log(data)
  setPokemon(data.results)
  }  
  
  useEffect(()=>{
    obetenerPokemon();
  },[]);

  

const irAPersonajes = () => {
navigate(`/pokemons/${id}`);
};


  return (
    <div className="bpokemon mt-5 " >
     <Container>
<h1 style={{color: 'yellow'}}>Elige tu Pokemón</h1>
<select
className="me-2" name="id" id="id" onChange={(e) => setId(e.target.value)}>
<option value="">Pokemón</option>
  {
    pokemon.map((p)=><option key={p.id} value={p.id}>{p.name}</option>)
  }
</select>
<Button onClick={()=> irAPersonajes() }>Detalle</Button>
</Container>
</div>
  )
}

export default Personajes