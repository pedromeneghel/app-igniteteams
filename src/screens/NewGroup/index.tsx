import { Button } from "@components/Button";
import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { Input } from "@components/Input";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { Container, Content, Icon } from "./styles";
import { groupCreate } from "@storage/group/groupCreate";
import { AppError } from "@utils/AppError";
import { Alert } from "react-native";

export function NewGroup() {
  const [group, setGroup] = useState('')
  const navigation = useNavigation();

  async function handleNewGroup() {
    try{
      if(group.trim().length <=2) {
        return Alert.alert('Ops', 'Informe o nome da turma.');
      }

      await groupCreate(group);

      navigation.navigate('players', { group });
    } catch (error: any) {
      if(error instanceof AppError) {
        Alert.alert('Ops', error.message);
      } else {
        Alert.alert('Ops', 'Algo deu errado, por favor tente novamente mais tarde.')
      }
    }
  }

  return (
    <Container>
      <Header showBackButton />
      <Content>
        <Icon />
        <Highlight title="Nova turma" subtitle="Crie a turma para adicionar as pessoas" />
        <Input
          placeholder="Nome da turma"
          onChangeText={setGroup}
          onSubmitEditing={handleNewGroup}
          returnKeyType="done"
        />
        <Button
          title="Criar"
          style={{ marginTop: 20 }}
          onPress={handleNewGroup}
        />
      </Content>
    </Container>
  )
}