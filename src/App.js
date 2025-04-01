
import './App.css';
import Header from './component/header';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Feature from './component/GiftLayout/Feature'
import Anytime from './component/GiftLayout/Anytime';
import Congratulation from './component/GiftLayout/Congratulation';
import Thanku from './component/GiftLayout/Thanku';
import Gift from './component/GiftLayout/Gift';
import OrderLayout from './component/OrderLayout/OrderLayout';
import Bestseller from './component/OrderLayout/Bestseller';
import Coffee from './component/OrderLayout/Coffee';
import Merchandise from './component/OrderLayout/Merchandise';
import Food from './component/OrderLayout/Food';
import Drinks from './component/OrderLayout/Drinks';
import Sellerorder from './component/OrderLayout/Sellerorder';
import Footer from './component/footer';
import HomeLayout from './component/HomeLayout/HomeLayout';
import Login from './component/Userdetails/Login';
import OrderList from './component/OrderLayout/OrderList';
import Learnmore from './component/HomeLayout/Learnmore';
import SignupForm from './component/Userdetails/SignupForm';
import GiftLayout from './component/GiftLayout/GiftLayout';






function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        {/* --------------------HOMEPAGE SECTION---------------------------- */}
        <Route path="/" element={<HomeLayout />} />
        <Route path="Learnmore" element={<Learnmore />} />
        <Route path="/Login" element={<Login />} />
        {/* --------------------GIFT SECTION---------------------------- */}
        <Route path="/Giftpage" element={<Gift />} />
        <Route path='/' element={<GiftLayout />} />
               <Route path="SignupForm" element={<SignupForm />} />
               <Route path="Feature" element={<Feature />} />
               <Route path="Anytime" element={<Anytime />} />
               <Route path="Congratulation" element={<Congratulation />} />
               <Route path="Thanku" element={<Thanku />} />
        {/* --------------------ORDER SECTION---------------------------- */}
        <Route path="/" element={<OrderLayout />} />
        <Route path="/OrderList" element={<OrderList />} />
        <Route path="/Bestseller" element={<Bestseller />} />
        <Route path="/Sellerorder" element={<Sellerorder />} />
        <Route path="/Coffee" element={<Coffee />} />
        <Route path="/Merchandise" element={< Merchandise />} />
        <Route path="/Food" element={<Food />} />
        <Route path="/Drinks" element={<Drinks />} />
        

      </Routes>
       < Footer /> 



    </BrowserRouter>
  );
}
export default App;
