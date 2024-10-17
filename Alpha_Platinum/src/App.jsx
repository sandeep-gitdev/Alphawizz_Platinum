
import './App.css'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'; 

import Header from './Components/Header/Header'

import Home from './Components/Home/Home'
import Category from './Components/Category/Category'
import Footer from './Components/Footer/Footer'
import FilterCategory from './Components/Category/FilterCategory'
import FilterDetails from './Components/Category/FilterDetails'
import ShoppingCart from './Components/Products/ShoppingCart'
import ContactUs from './Components/Footer/ContactUs'
import About_Us from './Components/Footer/About_Us'
import CategoryAll from './Components/Category/CategoryAll'
import Products from './Components/Products/Products'
import Term_condition from './Components/Footer/Term_condition'
import Privacy_Policy from './Components/Footer/Privacy_Policy'
import Add_To_Card from './Components/Products/AddCard'

function App() {
 

  return (
    <>
     <Router>
      <ToastContainer/>
         <Header/>
      <Routes>
      <Route path='/' element={<Home/>} />       
        <Route path="/Category" element={<Category />} />    
        <Route path="/CategoryAll" element={ <CategoryAll/>} />  
        <Route path="/Prouducts" element={ <Products/>} />  
        <Route path="/FilterCategory" element={<FilterCategory />} />
        <Route path="/FilterDetails" element={<FilterDetails />} />    
        <Route path='/ShoppingCart' element={<ShoppingCart/>} /> 
        <Route path='/ContactUs' element={<ContactUs/>} /> 
        <Route path='/About_Us' element={<About_Us/>} /> 
        <Route path='/Term_condition' element={<Term_condition/>} /> 
        <Route path='/Privacy_Policy' element={<Privacy_Policy/>} /> 
        <Route path='/Add_To_Card' element={<Add_To_Card/>} /> 
     

      </Routes>                               
    <Footer/>

  </Router>
    </>
  )
}

export default App
