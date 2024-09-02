import { getAuthHeader } from '@/helpers/auth-helpers';

const { config } = require('@/helpers/config');

const API_URL = config.api.baseUrl;

export const fetchOrders = async (
    page = 0,
    size = 5,
    sort = 'orderDate',
    type = 'desc'
) => {
    const qs = `page=${page}&size=${size}&sort=${sort}&type=${type}`;
    try {
        const response = await fetch(
            `${API_URL}/orders/getAllOrdersForSupervisor?${qs}`,
            {
                method: 'GET',
                headers: await getAuthHeader()
            }
        );

        console.log('RESPONSE STATUS:', response.status);

        // Return the response object so it can be handled by the caller
        return response;
    } catch (error) {
        console.error('Error during fetchOrders:', error);
        throw error; // Re-throw the error to be handled by the caller
    }
};