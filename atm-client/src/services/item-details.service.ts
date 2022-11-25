import axiosInstance from './axios.service';
import { ItemInfo } from '../models/ItemInfo';

/**
 * GET Item information by ID
 * @param itemId 
 * @returns 
 */
export function getItem(itemId: number | string) {
    return axiosInstance.get<ItemInfo>('/dev/api/twins');
}

/**
 * UPDATE Item information by ID
 * @param itemId 
 * @param itemInfo 
 * @returns 
 */
export function updateItem(itemId: number | string, itemInfo: ItemInfo) {
    return axiosInstance.post('/dev/api/twins', itemInfo);
}
