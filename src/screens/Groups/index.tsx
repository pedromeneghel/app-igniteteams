import { Button } from "@components/Button";
import { GroupCard } from "@components/GroupCard";
import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { ListEmpty } from "@components/ListEmpty";
import { Loading } from "@components/Loading";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { groupsGetAll } from "@storage/group/groupsGetAll";
import { useCallback, useState } from "react";
import { Alert, FlatList } from "react-native";
import { Container } from "./styles";

export function Groups() {
  const [isLoading, setIsLoading] = useState(true);
  const [groups, setGroups] = useState(['Galera da Rocket', 'Galera da Efí', 'Vizinhos queridos Reserva'])
  const navigation = useNavigation();

  async function fetchGroups() {
    setIsLoading(true);
    try {
      setGroups(await groupsGetAll());
      setIsLoading(false);
    } catch (error) {
      Alert.alert('Turmas', 'Não foi possível carregar as turmas.');
      setIsLoading(false);
    }
  }

  function handleOpenGroup(group: string) {
    navigation.navigate('players', { group });
  }

  useFocusEffect(useCallback(() => {
    fetchGroups();
  }, []));

  return (
    <Container>
      <Header />

      <Highlight
        title="Turmas"
        subtitle="Jogue a sua turma"
      />

      {
        isLoading
          ? <Loading />
          :
          <FlatList
            data={groups}
            keyExtractor={item => item}
            renderItem={({ item }) => (
              <GroupCard
                title={item}
                onPress={() => handleOpenGroup(item)}
              />
            )
            }
            contentContainerStyle={groups.length === 0 && { flex: 1 }}
            ListEmptyComponent={() =>
              <ListEmpty message="Que tal cadastrar a primeira turma?" />
            }
            showsVerticalScrollIndicator={false}
          />
      }

      <Button
        title="Criar nova turma"
        onPress={() => navigation.navigate('newGroup')}
      />
    </Container>
  )
}