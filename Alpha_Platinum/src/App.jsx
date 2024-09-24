
import './App.css'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'

import Header from './Components/Header/Header'
import Home from './Components/Home/Home'
import Category from './Components/Category/Category'
import Footer from './Components/Footer/Footer'
import FilterCategory from './Components/Category/FilterCategory'
import FilterDetails from './Components/Category/FilterDetails'


function App() {
 

  return (
    <>
        <Router>
    <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        {/* <Route path="/Login" element={<Login />} />     */}
        {/* <Route path="/Category" element={<Category />} />     */}
        {/* <Route path="/FilterCategory" element={<FilterCategory />} />     */}
          
      </Routes>
      
       <FilterDetails></FilterDetails>
    <Footer/>
  </Router>







      {/* <Header/> */}
     
      {/* <Footer></Footer> */}
    </>
  )
}

export default App
