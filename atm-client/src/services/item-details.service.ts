import axios from 'axios';
import { ItemInfo } from '../models/ItemInfo';

/**
 * GET Item information by ID
 * @param itemId 
 * @returns 
 */
export function getItem(itemId: number) {
    // return axios.get('/item/' + itemId);
    return axios.get('/mocks/item.json');
}

/**
 * UPDATE Item information by ID
 * @param itemId 
 * @param itemInfo 
 * @returns 
 */
export function updateItem(itemId: number, itemInfo: ItemInfo) {
    return axios.put('/item/' + itemId, itemInfo);
}