'use client';
import React, { createContext, useState } from 'react';

export const BookingContext = createContext(null);

const BookingContextProvider = ({ children }) => {
  const [booking, setBooking] = useState(null);

  const value = {
    booking,
    setBooking,
  };

  return (
    <BookingContext.Provider value={value}>
      {children}
    </BookingContext.Provider>
  );
};

export default BookingContextProvider;