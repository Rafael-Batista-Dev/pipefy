import React from "react";

import { Container, Label } from "./styles";

export default function Card() {
  return (
    <Container>
      <header>
        <Label color="#7159C1" />
      </header>
      <p>Fazer a migração completa de servidor</p>
      <img
        src="https://avatars3.githubusercontent.com/u/59888617?s=120&v=4"
        alt=""
      />
    </Container>
  );
}
