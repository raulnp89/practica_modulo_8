import React from "react";
import Link from "next/link";

export default function ContactPage() {
  return (
    <div>
      <h1>Contacto</h1>
      <div>
        <h2>Nombre: Raul Navas</h2>
        <h3>Ocupación: Estudiante de React y Apasionado Entrenador Pokemon</h3>
        <h4>Historia:</h4>
        <p>
          Raul Navas, un joven estudiante de desarrollo web y aficionado a la
          programación en React, siempre tuvo un sueño desde su infancia:
          convertirse en el mejor entrenador Pokemon.
        </p>{" "}
        Nacido y criado en Pueblo Paleta, Raul creció rodeado de la maravilla y
        la emoción de las criaturas Pokemon. Su viaje comenzó cuando recibió su
        primer Pokemon, un Bulbasaur, de manos del Profesor Oak. Desde ese día,
        Raul y Bulbasaur se volvieron inseparables.
        <p>
          <p>
            Con cada batalla, Raul perfeccionaba sus habilidades como
            entrenador, pero también encontró una fascinación en el mundo de la
            programación. Decidió combinar sus dos pasiones: la programación y
            los Pokemon. Mientras estudiaba React y otras tecnologías web, Raul
            también entrenaba arduamente a sus Pokemon para convertirse en un
            maestro Pokemon de élite.
          </p>
          <p>
            En sus momentos de descanso entre líneas de código, Raul exploraba
            gimnasios, desafíos y participaba en torneos para fortalecer el
            vínculo con sus Pokemon y mejorar sus habilidades como entrenador.
            Con el tiempo, Raul se dio cuenta de que podía aprovechar sus
            habilidades de programación para crear aplicaciones y herramientas
            que beneficiarían a la comunidad de entrenadores Pokemon. Desde
            aplicaciones de seguimiento de Pokemon hasta plataformas de
            intercambio, Raul estaba decidido a contribuir al mundo Pokemon de
            maneras innovadoras.
          </p>
          Hoy, Raul Navas se presenta como una inspiración para la comunidad, un
          entrenador que equilibra su amor por los Pokemon con su pasión por la
          programación. Siempre está dispuesto a compartir sus conocimientos y
          experiencias con otros entrenadores y apasionados del desarrollo web.
          Si tienes alguna pregunta sobre Pokemon o React, ¡Raul Navas es el
          entrenador que estás buscando!
        </p>
      </div>

      <Link
        href={{
          pathname: "/",
        }}
      >
        <button>Volver al inicio</button>
      </Link>
    </div>
  );
}
