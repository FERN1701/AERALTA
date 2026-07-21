import { useState } from 'react'
import { Routes, Route, Link } from "react-router-dom";
import PublicLayout from './layouts/PublicLayout'
import MainHome from './pages/Public/MainHome';
import MainDestination from './pages/Public/MainDestination';
import AboutUs from './pages/Public/AboutUs';
import ContactUs from './pages/Public/ContactUs';

import AdminLayout from './layouts/AdminLayout'
import Dashboard from './pages/Admin/Dashboard'
function App() {
  
  return (
    <>
          <Routes>
            <Route path="/" element={<PublicLayout />}>
                <Route index element={<MainHome />} />
                 <Route path="destinations" element={<MainDestination />} /> 
                <Route path="about" element={<AboutUs />} />
                <Route path="contacts" element={<ContactUs />} />
            </Route>
            <Route path="/administrator" element={<AdminLayout />}>
              <Route index element={<Dashboard />} />
              {/*   <Route path="users" element={<Users />} /> */}

          </Route>

          </Routes>

    </> 
  )
}

export default App
