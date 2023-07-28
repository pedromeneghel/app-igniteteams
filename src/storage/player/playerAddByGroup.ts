import AsyncStorage from '@react-native-async-storage/async-storage';
import { PLAYER_COLLECTION } from '@storage/storageConfig';
import { AppError } from '@utils/AppError';
import { PlayerStorageDTO } from './PlayerStorareDTO';
import { playersGetByGroup } from './playersGetByGroup';

export async function playerAddByGroup(newPlayer: PlayerStorageDTO, group: string) {
  try {
    const storagedPlayers = await playersGetByGroup(group);
    const playerAlreadyExistis = storagedPlayers.filter(player => player.name === newPlayer.name);

    if (playerAlreadyExistis.length > 0) {
      throw new AppError('Essa pessoa já está adiciona em um time aqui.');
    }

    const storage = JSON.stringify([...storagedPlayers, newPlayer]);

    await AsyncStorage.setItem(`${PLAYER_COLLECTION}-${group}`, storage);
  } catch (error) {
    throw error;
  }
}