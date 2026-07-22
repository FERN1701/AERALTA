import { createBrowserRouter, Navigate } from 'react-router-dom';

import PublicLayout from '../layouts/PublicLayout'
import MainHome from '../pages/Public/MainHome';
import MainDestination from '../pages/Public/MainDestination';
import AboutUs from '../pages/Public/AboutUs';
import ContactUs from '../pages/Public/ContactUs';


import AdminLayout from '../layouts/AdminLayout'
import Dashboard from '../pages/Admin/Dashboard'
import AdminFleets from '../pages/Admin/Fleets'
import AdminAirports from '../pages/Admin/Airports'
import AdminBookings from '../pages/Admin/Bookings'
import AdminBookingDetails from '../pages/Admin/BookingDetails'
import AdminFlights from '../pages/Admin/Flights'
import AdminProfile from '../pages/Admin/Profile'

import PassengerLayout from '../layouts/PassengerLayout'
import PassengerDashboard from '../pages/passenger/Dashboard'
import PassengerProfile from '../pages/passenger/Profile'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <PublicLayout />,
        children: [
            { index: true, element: <MainHome /> },
            { path: 'destinations', element: <MainDestination /> },
            { path: 'about', element: <AboutUs /> },
            { path: 'contacts', element: <ContactUs /> },
        ],
    },

    {
        path: '/administrator',
        element: <AdminLayout />,
        children: [
            { index: true, element: <Dashboard /> },
            { path: 'fleets', element: <AdminFleets /> },
            { path: 'airports', element: <AdminAirports /> },
            { path: 'bookings', element: <AdminBookings /> },
            { path: 'booking-details', element: <AdminBookingDetails /> },
            // {
            //     path: "bookings/:bookingId",
            //     element: <AdminBookingDetails />
            // },
            
            { path: 'flights', element: <AdminFlights /> },
            { path: 'profile', element: <AdminProfile /> },
        ],
    },

    {
        path: '/myflight',
        element: <PassengerLayout />,
        children: [
            { index: true, element: <PassengerDashboard /> },
            { path: 'profile', element: <PassengerProfile /> },
            // { path: 'about', element: <AboutUs /> },
            // { path: 'contacts', element: <ContactUs /> },
        ],
    },
    

    { path: '*', element: <Navigate to="/" replace /> } 
]);
