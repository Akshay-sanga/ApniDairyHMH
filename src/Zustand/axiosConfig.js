import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Your Mac's IP address
const API_BASE_URL = "https://dairy.productionhouse.store/api/";

// Log on startup
console.log('🌐 API configured with base URL:', API_BASE_URL);

const api = axios.create({
    baseURL: API_BASE_URL,
    timeout: 15000, // 15 seconds timeout
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    }
});

// Request interceptor - runs BEFORE sending request
api.interceptors.request.use(
    async (config) => {
        const fullUrl = `${config.baseURL}${config.url}`;
        console.log(`📤 API Request: ${config.method?.toUpperCase()} ${fullUrl}`);

        try {
            const token = await AsyncStorage.getItem('token');
            if (token) {
                config.headers.Authorization = `Bearer ${token}`;
                console.log('🔐 Token attached to request');
            } else {
                console.log('ℹ️ No token found in storage');
            }
        } catch (error) {
            console.error('❌ Error getting token from storage:', error);
        }

        return config;
    },
    (error) => {
        console.error('❌ Request setup error:', error);
        return Promise.reject(error);
    }
);

// Response interceptor - runs AFTER receiving response
api.interceptors.response.use(
    (response) => {
        console.log(`✅ Response: ${response.status} ${response.config.url}`);
        console.log('📦 Response data:', response.data);
        return response;
    },
    (error) => {
        console.error('❌ API Error:', error.message);

        // Network Error
        if (error.message === 'Network Error') {
            console.error('🚫 NETWORK ERROR - Troubleshooting:');
            console.error('1️⃣ Is Laravel running? Run: php artisan serve --host=0.0.0.0 --port=8000');
            console.error('2️⃣ Is IP correct?', API_BASE_URL);
            console.error('3️⃣ Are both devices on same WiFi?');
            console.error('4️⃣ Test in browser:', API_BASE_URL);
        }

        // Timeout Error
        if (error.code === 'ECONNABORTED') {
            console.error('⏱️ Request timeout - Server took too long to respond');
        }

        // Server Response Error
        if (error.response) {
            console.error('📛 Server responded with error:');
            console.error('Status:', error.response.status);
            console.error('Data:', error.response.data);
            console.error('Headers:', error.response.headers);
        }

        // Request was made but no response
        if (error.request) {
            console.error('📭 No response received from server');
            console.error('Request:', error.request);
        }

        return Promise.reject(error);
    }
);

export default api;
