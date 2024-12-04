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
import BetKing from '../Pages/BetKing';
import XBet from '../Pages/XBet';
import Betano from '../Pages/Betano';
import MSport from '../Pages/MSport';
import PariMatch from '../Pages/PariMatch';
import Bet22 from '../Pages/Bet22';
import SportyBet from '../Pages/SportyBet';
import Bet9Ja from '../Pages/Bet9Ja';
import CloudinaryUpload from '../Pages/Cloudinary';
import Checkout_page from '../Pages/Checkout_page';
import Checkout from '../Pages/Checkout';
import Order from '../Pages/Order/CreateOrder';
import CreateOrder from '../Pages/Order/CreateOrder';
import DeleteOrder from '../Pages/Order/DeleteOrder';
import OrderList from '../Pages/Order/OrderList';
import Readmore from '../Pages/Readmore';

export default function AppRoutes() {
  return (
    <div>
        <Router>
          <Header/>
            <Routes>
                <Route exact element={<Home/>}/>
                <Route exact path='/' element={<Home/>}/>
                <Route path='/news' element={<NewsPage/>}/>
                <Route path='/readmore/:id' element={<Readmore/>}/>

                <Route path='/gadgets' element={<GadgetsPage/>}/>
                <Route path='/product-details/:id' element={<Details/>}/>
                {/* <Route path='/cloud' element={<CloudinaryUpload/>}/> */}
                <Route path='/checkout/:id' element={<Checkout_page/>}/>
                <Route path='/checkout' element={<Checkout/>}/>
                <Route path='/create-order' element={<CreateOrder/>}/>
                <Route path='/delete-order' element={<DeleteOrder/>}/>
                <Route path='/order-list' element={<OrderList/>}/>

                <Route element={<Private_Route/>}>
                  <Route path='/cart' element={<CartPage/>}/>
                  <Route path='/bookings' element={<BetPage/>}/>
                  <Route path='/profile/:id' element={<Profile/>}/>
                  <Route path='/bet9ja-betslips' element={<Bet9Ja/>}/>
                  <Route path='/betking-betslips' element={<BetKing/>}/>
                  <Route path='/xbet-betslips' element={<XBet/>}/>
                  <Route path='/batano-betslips' element={<Betano/>}/>
                  <Route path='/msport-betslips' element={<MSport/>}/>
                  <Route path='/parimatch-betslips' element={<PariMatch/>}/>
                  <Route path='/22bet-betslips' element={<Bet22/>}/>
                  <Route path='/sporty-betslips' element={<SportyBet/>}/>
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
