import React from 'react';
import { BrowserRouter , Routes, Route} from 'react-router-dom'
import Home from '../Pages/Home';
import BetPage from '../Pages/BetPage';
import Footer from '../Components/Footer';
import GadgetsPage from '../Pages/GadgetsPage';
import NewsPage from '../Pages/NewsPage';
import Sign_In from '../auth/Sign_In';
import Sign_Up from '../auth/Sign_Up';
import Header from '../Components/Header';
import ForgotPassword from '../auth/ForgotPassword';
import ResetPassword from '../auth/ResetPassword';
import Profile from '../Pages/Profile';
import Sign_in from '../auth/admin/Sign_in';
import Sign_up from '../auth/admin/Sign_up';
import Reset_Password from '../auth/admin/Reset_Password';
import Forgot_Password from '../auth/admin/Forgot_Password';
import PageNotFound from '../PgaeNotFound/PageNotFound';

export default function AppRoutes() {
  return (
    <div>
        <BrowserRouter>
          <Header/>
            <Routes>
                <Route index element={<Home/>}/>
                <Route path='/' element={<Home/>}/>
                <Route path='/news' element={<NewsPage/>}/>
                <Route path='/gadgets' element={<GadgetsPage/>}/>
                <Route path='/bookings' element={<BetPage/>}/>
                <Route path='/profile' element={<Profile/>}/>

                {/* User Routes */}
                <Route path='/signin' element={<Sign_In/>}/>
                <Route path='/signup' element={<Sign_Up/>}/>
                <Route path='/forgot_password' element={<ForgotPassword/>}/>
                <Route path='/reset_password' element={<ResetPassword/>}/>

                {/* Admin Routes */}
                <Route path='/admin_signin' element={<Sign_in/>}/>
                <Route path='/admin_signup' element={<Sign_up/>}/>
                <Route path='/admin_forgot_password' element={<Forgot_Password/>}/>
                <Route path='/admin_reset_password' element={<Reset_Password/>}/>

                {/* 404 page */}
                <Route path='*' element={<PageNotFound/>}/>

            </Routes>
            <Footer/>
        </BrowserRouter>
    </div>
  )
}
