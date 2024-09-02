// pages/api/fetch-orders.js


import { getAuthHeader } from '@/helpers/auth-helpers';

const { config } = require('@/helpers/config');
const API_URL = config.api.baseUrl;

export default async function handler(req, res) {
    try {
        // Get the auth header with the token
        const headers = await getAuthHeader();

        // Extract query parameters
        const {
            page = 0,
            size = 10,
            sort = 'orderDate',
            type = 'desc'
        } = req.query;

        // Make the request to the backend API
        const response = await fetch(
            `http://localhost:8080/orders/getAllOrdersForSupervisor?page=${page}&size=${size}&sort=${sort}&type=${type}`,
            {
                method: 'GET',
                headers: headers
            }
        );

        if (!response.ok) {
            const errorText = await response.text();
            return res.status(response.status).json({ error: errorText });
        }

        const data = await response.json();
        return res.status(200).json(data);
    } catch (error) {
        console.error('Error fetching orders:', error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}
