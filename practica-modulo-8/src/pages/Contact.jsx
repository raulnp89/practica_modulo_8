import React from "react";
import Link from "next/link";

export default function ContactPage() {
  return (
    <div>
      <h1>Contacto</h1>
      <Link
        href={{
          pathname: "/",
        }}
      >
        Volver al inicio
      </Link>
    </div>
  );
}
