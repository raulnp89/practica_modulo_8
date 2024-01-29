import { PokemonDetail } from "@/components/pokemonDetail/PokemonDetailComponent";
import { useRouter } from "next/router";
import React, { useState } from "react";
import Link from "next/link";
import { deletePokemonById } from "./api/pokemonFetch";
import ChangeName from "@/components/editPokemon/EditPokemonComponent";





export default function PaginaDetalle(pokemonId) {
  const router = useRouter();
  const { id } = router.query;
  const deletePokemon = () => {
    deletePokemonById(id);
    router.back();
  };
  const [showChangeName, setShowChangeName] = useState(false);
  const toggleChangeName = () => {
    setShowChangeName(!showChangeName);
  };

  return (
    <div className="contenedorDetalle">
      <div className="botones">
        <div>
          {showChangeName ? (
            <ChangeName pokemonId={id} toggleChangeName={toggleChangeName} />
          ) : (
            <>
              <PokemonDetail pokemonId={id} />
              <h1 className="titleDetalle">Detalle del Pokemon</h1>
              <button onClick={toggleChangeName}>Modificar Pokemon</button>
              <button onClick={deletePokemon}>Eliminar Pokemon</button>
            </>
          )}
        </div>

        <button>
          <Link
            href={{
              pathname: "/",
            }}
          >
            Volver al inicio
          </Link>
        </button>
      </div>
    </div>
  );
}
// ----------------------------------------------------------
// export default function PokemonDetallePage() {
//   const router = useRouter();
//   const { id } = router.query;

//   const [showChangeName, setShowChangeName] = useState(false);

//   const deletePokemon = () => {
//     deletePokemonById(id);
//     router.back();
//   };

//   const toggleChangeName = () => {
//     setShowChangeName(!showChangeName);
//   };

//   return (
//     <div className="paginaDetalle">
//       <div className="cabecera">
//         <h2 className="title">Detalles del Pokémon</h2>
//       </div>

//       {showChangeName ? (
//         <ChangeNameComponent
//           pokemonId={id}
//           toggleChangeName={toggleChangeName}
//         />
//       ) : (
//         <div>
//           <PokemonDetailsComponent pokemonId={id} />

//           <div className="botones">
//             <button className="editar" onClick={toggleChangeName}>
//               Editar Nombre
//             </button>
//             <button className="delete" onClick={deletePokemon}>
//               Eliminar Pokemon
//             </button>
//           </div>
//         </div>
//       )}

//       <div>
//         <button className="inicio">
//           <Link href={{ pathname: "/" }}>Inicio</Link>
//         </button>
//       </div>
//     </div>
//   );
// }