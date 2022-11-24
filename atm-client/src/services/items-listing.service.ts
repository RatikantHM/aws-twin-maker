import axios from 'axios';
import { ItemInfo } from '../models/ItemInfo';

/**
 * GET Items
 * @returns 
 */
export function getItems() {
    return axios.get<ItemInfo[]>('/mocks/items.json');
}
