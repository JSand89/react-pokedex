export default function PokemonCard({ pokemon }) {
  return (
    <div className="card text-center">
      <img
        src={pokemon.sprites?.front_default}
        className="card-img-top p-3"
        alt={pokemon.name}
      />
      <div className="card-body">
        <h5 className="card-title text-capitalize">{pokemon.name}</h5>
        <p className="card-text">ID: {pokemon.id}</p>
      </div>
    </div>
  );
}
