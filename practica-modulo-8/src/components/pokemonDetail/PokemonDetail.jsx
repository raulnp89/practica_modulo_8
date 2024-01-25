import PokemonList from "../pokemonList/PokemonList";
import Link from "next/link";

export function PokemonDetail({ pokemon }) {
  return (
    <li className="pokemonDetail">
      <Link to={"/PokemonList/" + pokemon.id}>
        <div>{pokemon.details}</div>
      </Link>
    </li>
  );
}
