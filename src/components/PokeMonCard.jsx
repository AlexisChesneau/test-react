import PropTypes from "prop-types";

function MyCardPokemon({pokemon}) {
  console.log(pokemon);
  return (
    <figure>
      {pokemon.imgSrc ? <img src={pokemon.imgSrc} alt={pokemon.name} /> : <p>???</p>}
      <figcaption>{pokemon.name}</figcaption>
    </figure>
  );
}

MyCardPokemon.propTypes = {
  pokemon: PropTypes.shape({
  name: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  }).isRequired,
}

export default MyCardPokemon;