import BookingContextProvider from '@/Context/booking.context';
import UserContextProvider from '@/Context/users.context';
import React from 'react';

const Providers = ({ children }) => {
    return (

        <UserContextProvider>
            <BookingContextProvider>
                {children}
            </BookingContextProvider>
        </UserContextProvider>

    );
};

export default Providers;