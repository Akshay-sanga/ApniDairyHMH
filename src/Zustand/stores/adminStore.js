import { create } from 'zustand'
import api from '../axiosConfig';

const adminStore = create((set, get) => ({
    // States
    admins: [],
    adminList: [],
    selectedAdminId: null,
    loading: false,
    error: null,

    // Actions
    fetchAdmins: async () => {
        console.log('🔄 fetchAdmins START');
        set({ loading: true, error: null });
        try {
            console.log('📡 Making API call to all-admin...');
            const response = await api.get('all-admin');
            console.log('✅ Admin Data Response:', response.data);

            if (response.data.status_code === 200) {
                const admins = response.data.data;
                console.log('📋 Admins list:', admins);

                const adminList = admins.map(admin => ({
                    label: admin.name,
                    value: admin.id.toString(),
                    adminData: admin,
                }));

                console.log('📋 Formatted adminList:', adminList);

                set({
                    admins,
                    adminList,
                    loading: false,
                });
            } else {
                console.error('❌ Unexpected response:', response.data);
                set({
                    error: 'Failed to fetch admins',
                    loading: false,
                });
            }
        } catch (error) {
            console.error('❌ Error fetching admins:', error);
            set({
                error: error.response?.data?.message || 'Failed to fetch admins',
                loading: false,
            });
        }
    },

    // ✅ ADD THIS - Set selected admin
    setSelectedAdmin: (adminId) => {
        console.log('🎯 Setting selected admin ID:', adminId);
        set({ selectedAdminId: adminId });
    },

    // ✅ ADD THIS - Get selected admin data
    getSelectedAdmin: () => {
        const { admins, selectedAdminId } = get();
        return admins.find(admin => admin.id.toString() === selectedAdminId);
    },

    // User Register
    registerUser: async (userData) => {
        console.log('🔄 registerUser START', userData);
        set({ loading: true, error: null });

        try {
            console.log('📡 Making API call to app-register-user...');

            // Prepare data for API
            const requestData = {
                name: userData.name,
                email: userData.email,
                password: userData.password,
                mobile: userData.mobile,
                account_number: userData.accountNo,
                admin_id: userData.selectedAdminId,
            };

            console.log('📤 Request data:', requestData);

            const response = await api.post('app-register-user', requestData);
            console.log('✅ Register User Response:', response.data);

            if (response.data.status_code === 200) {
                console.log('✅ User registered successfully');
                set({ loading: false });
                return {
                    status: true,
                    message: response.data.message,
                    data: response.data,
                };
            } else {
                set({ loading: false });
                return {
                    status: false,
                    message: response.data.message || 'Registration failed',
                };
            }
        } catch (error) {
            console.error('❌ Error registering user:', error);
            console.error('❌ Error response:', error.response?.data);

            const errorMessage = error.response?.data?.message ||
                error.response?.data?.errors ||
                'Failed to register user';

            set({
                error: errorMessage,
                loading: false,
            });

            // Return error for component to handle
            throw {
                message: errorMessage,
                response: error.response,
            };
        }
    },

    // ✅ ADD THIS - Clear selected admin
    clearSelectedAdmin: () => {
        set({ selectedAdminId: null });
    },

    // ✅ ADD THIS - Reset store
    resetStore: () => {
        set({
            admins: [],
            adminList: [],
            selectedAdminId: null,
            loading: false,
            error: null,
        });
    },
}));

export default adminStore;
