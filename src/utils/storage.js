import AsyncStorage from '@react-native-async-storage/async-storage';

/**
 * Get data from storage
 * @param {string} key - Storage key
 * @returns {Promise<any>} - Returns parsed object/array or string
 */
export const get = async (key) => {
    try {
        const value = await AsyncStorage.getItem(key);
        if (value !== null) {
            // Try to parse JSON, if fails return raw string
            try {
                return JSON.parse(value);
            } catch {
                return value;
            }
        }
        return null;
    } catch (error) {
        console.error(`Error getting ${key}:`, error);
        return null;
    }
};

/**
 * Set data in storage
 * @param {string} key - Storage key
 * @param {any} value - Value to store (string, object, array, number, boolean)
 * @returns {Promise<boolean>}
 */
export const set = async (key, value) => {

    try {
        const stringValue = typeof value === 'string' ? value : JSON.stringify(value);
        await AsyncStorage.setItem(key, stringValue);

        return true;
    } catch (error) {
        console.error(`Error setting ${key}:`, error);
        return false;
    }
};

/**
 * Remove single item from storage
 * @param {string} key - Storage key to remove
 * @returns {Promise<boolean>}
 */
export const remove = async (key) => {
    try {
        await AsyncStorage.removeItem(key);
        return true;
    } catch (error) {
        console.error(`Error removing ${key}:`, error);
        return false;
    }
};

/**
 * Clear all storage data
 * @returns {Promise<boolean>}
 */
export const clearAll = async () => {
    try {
        await AsyncStorage.clear();
        return true;
    } catch (error) {
        console.error('Error clearing storage:', error);
        return false;
    }
};
