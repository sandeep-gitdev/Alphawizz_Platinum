
import './App.css'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'

import Header from './Components/Header/Header'

import Home from './Components/Home/Home'
import Category from './Components/Category/Category'
import Footer from './Components/Footer/Footer'
import FilterCategory from './Components/Category/FilterCategory'
import FilterDetails from './Components/Category/FilterDetails'
import ShoppingCart from './Components/Products/ShoppingCart'
import ImageMagnify from './ImageMagnify'
import ContactUs from './Components/Footer/ContactUs'
import About_Us from './Components/Footer/About_Us'
import CategoryAll from './Components/Category/CategoryAll'
import Products from './Components/Products/Products'
import Term_condition from './Components/Footer/Term_condition'
import Privacy_Policy from './Components/Footer/Privacy_Policy'

function App() {
 

  return (
    <>
        <Router>
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

      </Routes>
                    
                   

              {/* <ContactUs></ContactUs>
                <About_Us></About_Us> */}
         {/* <ShoppingCart></ShoppingCart> */}
         {/* <ImageMagnify></ImageMagnify> */}
    <Footer/>
  </Router>







      {/* <Header/> */}
     
      {/* <Footer></Footer> */}
    </>
  )
}

export default App
