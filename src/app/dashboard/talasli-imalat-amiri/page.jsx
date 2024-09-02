import TalasliPage from '@/components/dashboard/talasli-imalat-amiri/talasli';
import { fetchOrders } from '@/services/order-service';
import React from 'react';

const Talasli = async ({ searchParams }) => {
    const currentPage = parseInt(searchParams.currentPage, 10) || 0;
    const sortBy = searchParams.sortBy || 'orderDate';
    const sortOrder = searchParams.sortOrder || 'desc';

    // Fetch the orders data based on the dynamic parameters
    const res = await fetchOrders(currentPage, 10, sortBy, sortOrder);
    // Ensure that res is a proper Response object and use res.json() only if it is
    
        const data = await res.json(); // This converts the response to JSON
        if (res.status !== 200) {
            // Handle the error as needed
            return <div>Error: {res.statusText}</div>;
        }
        return (
            <>
                <TalasliPage
                    data={data}
                    currentPage={currentPage}
                    sortBy={sortBy}
                    sortOrder={sortOrder}
                />
            </>
        );
    
};

export default Talasli;
