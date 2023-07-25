import { Header } from "@components/Header";
import { Container } from "./styles";
import { Highlight } from "@components/Highlight";
import { Button } from "@components/Button";
import { ButtonIcon } from "@components/ButtonIcon";
import { Input } from "@components/Input";
import { Form } from "@components/ButtonIcon/styles";

export function Players() {
  return (
    <Container>
      <Header showBackButton />

      <Highlight 
        title="Nome da turma" 
        subtitle="Adicione a galera e separe os times" 
      />

      <Form>
        <Input
          placeholder="Nome da pessoa"
          autoCorrect={false}
        />

        <ButtonIcon 
          icon="add" 
        />
      </Form>

      <Button 
        title="Remover turma" 
        type="SECONDARY" 
      />
    </Container>
  )
}