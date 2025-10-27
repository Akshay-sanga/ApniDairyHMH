import { get } from '../utils/storage';

export const isAuth = async () => {
    const token = await get('token');
    return !!token;
};