import axiosInstance from './axios.service';
import { ItemInfo } from '../models/ItemInfo';

/**
 * GET Items
 * @returns 
 */
export function getItems() {
    return axiosInstance.get<ItemInfo[]>('/dev/api/twins');
}
