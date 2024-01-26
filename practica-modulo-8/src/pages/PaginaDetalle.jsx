import { PokemonDetail } from "@/components/pokemonDetail/PokemonDetailComponent";
import { useRouter } from "next/router";
import React from "react";
import Link from "next/link";
import { deletePokemonById } from "./api/pokemonFetch";
import { modifyName } from "./api/pokemonFetch";

export default function PaginaDetalle(pokemonId) {
  const router = useRouter();
  const { id } = router.query;
  const deletePokemon = () => {
    deletePokemonById(id);
    router.back();
  };
  return (
    <div className="contenedorDetalle">
      <h1 className="titleDetalle">Detalle del Pokemon</h1>

      <PokemonDetail pokemonId={id} />
      <div className="botones">
        <button onClick={deletePokemon}>Eliminar Pokemon</button>
        <button>
          <Link href={{ pathname: "/editPokemon" }} />
          Modificar Pokemon
        </button>
        <Link
          href={{
            pathname: "/",
          }}
        >
          Volver al inicio
        </Link>
      </div>
    </div>
  );
}
