import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getPokemonByUrl } from '../services/pokeapi';

export default function PokemonPage() {
  const { name } = useParams();
  const navigate = useNavigate();
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const data = await getPokemonByUrl(`https://pokeapi.co/api/v2/pokemon/${name}`);
      setPokemon(data);
    }
    fetchData();
  }, [name]);

  if (!pokemon) return <div className="text-center mt-10">Cargando...</div>;

  return (
    <div className="max-w-md mx-auto p-4 text-center">
      <h1 className="text-3xl font-bold capitalize mb-4">{pokemon.name}</h1>
      <img src={pokemon.sprites?.front_default} alt={pokemon.name} className="mx-auto" />
      <p className="text-gray-600">ID: {pokemon.id}</p>
      <p className="text-sm mt-2">Altura: {pokemon.height} | Peso: {pokemon.weight}</p>

      <button
        onClick={() => navigate(-1)}
        className="mt-6 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
      >
        ← Volver
      </button>
    </div>
  );
}
