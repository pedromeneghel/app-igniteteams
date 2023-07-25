import { Header } from "@components/Header";
import { Container } from "./styles";
import { Highlight } from "@components/Highlight";
import { Button } from "@components/Button";

export function Players() {
  return (
    <Container>
      <Header showBackButton></Header>
      <Highlight title="Nome da turma" subtitle="Adicione a galera e separe os times" />
      <Button title="Remover turma" type="SECONDARY" />
    </Container>
  )
}