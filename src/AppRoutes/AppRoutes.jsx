import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
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
import PageNotFound from '../PgaeNotFound/PageNotFound';
import Details from '../Pages/Details';
import CartPage from '../Pages/CartPage';
import Private_Route from '../Components/privateRoute/Private_Route';

export default function AppRoutes() {
  return (
    <div>
        <Router>
          <Header/>
            <Routes>
                <Route exact element={<Home/>}/>
                <Route exact path='/' element={<Home/>}/>
                <Route path='/news' element={<NewsPage/>}/>

                <Route path='/gadgets' element={<GadgetsPage/>}/>
                <Route path='/product-details/:id' element={<Details/>}/>
                <Route path='/cart' element={<CartPage/>}/>
                <Route element={<Private_Route/>}>
                  <Route path='/bookings' element={<BetPage/>}/>
                </Route>
                <Route element={<Private_Route/>}>
                  <Route path='/profile/:id' element={<Profile/>}/>
                </Route>

                {/* User Routes */}
                <Route path='/signin' element={<Sign_In/>}/>
                <Route path='/signup' element={<Sign_Up/>}/>
                <Route path='/forgot_password' element={<ForgotPassword/>}/>
                <Route path='/reset_password' element={<ResetPassword/>}/>
                
                {/* 404 page */}
                <Route path='*' element={<PageNotFound/>}/>

            </Routes>
            <Footer/>
        </Router>
    </div>
  )
}
