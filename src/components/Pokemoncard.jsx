import { Link } from 'react-router-dom';

export default function PokemonCard({ pokemon }) {
  return (
    <Link to={`/pokemon/${pokemon.name}`}>
      <div className="bg-white rounded-lg shadow hover:shadow-xl p-4 text-center">
        <img src={pokemon.sprites?.front_default} alt={pokemon.name} className="w-24 h-24 mx-auto" />
        <h2 className="capitalize font-bold mt-2">{pokemon.name}</h2>
      </div>
    </Link>
  );
}
