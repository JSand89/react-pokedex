import { useState, useEffect } from 'react';
import { getPokemons, getPokemonByUrl } from '../services/pokeapi';
import PokemonCard from './Pokemoncard';

export default function PokemonList() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const basicList = await getPokemons(12);
      const fullData = await Promise.all(
        basicList.map(p => getPokemonByUrl(p.url))
      );
      setPokemons(fullData);
    }
    fetchData();
  }, []);

  return (
    <div className="container py-5">
      <h2 className="text-center mb-4">Pokédex</h2>
      <div className="row g-4">
        {pokemons.map(p => (
          <div key={p.id} className="col-md-3">
            <PokemonCard pokemon={p} />
          </div>
        ))}
      </div>
    </div>
  );
}
