import { useState, useEffect } from 'react';
import { getPokemons, getPokemonByUrl } from '../services/pokeapi';
import PokemonCard from './PokemonCard';

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
    <div className="container mx-auto px-4 py-10 bg-red-600">
      <h2 className="text-3xl font-bold text-center mb-8">Pokédex</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {pokemons.map(p => (
          <PokemonCard key={p.id} pokemon={p} />
        ))}
      </div>
    </div>
  );
}
