'use client';
import BookingContextProvider from '@/Context/booking.context';
import UserContextProvider from '@/Context/users.context';
import React from 'react';
import { SessionProvider } from 'next-auth/react';

const Providers = ({ children }) => {
    return (
        <SessionProvider>
            <UserContextProvider>
                <BookingContextProvider>
                    {children}
                </BookingContextProvider>
            </UserContextProvider>
        </SessionProvider>
    );
};

export default Providers;