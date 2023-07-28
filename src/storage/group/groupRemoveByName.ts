import AsyncStorage from '@react-native-async-storage/async-storage';
import { GROUP_COLLECTION, PLAYER_COLLECTION } from '@storage/storageConfig';
import { groupsGetAll } from './groupsGetAll';

export async function groupRemoveByName(groupToRemove: string) {
  try {
    const storedGroups = await groupsGetAll();
    const groups = JSON.stringify(storedGroups ? storedGroups.filter((group: string) => group !== groupToRemove) : []);

    await AsyncStorage.setItem(GROUP_COLLECTION, groups);
    await AsyncStorage.removeItem(`${PLAYER_COLLECTION}-${groupToRemove}`);
  } catch (error) {
    throw error;
  }
}

