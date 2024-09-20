
import './App.css'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'
import Home_Img from './Components/Home_Img/Home_Img'
import Category from './Components/Category/Category'


function App() {
 

  return (
    <>
        <Router>
    <Header/>
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        {/* <Route path="/Login" element={<Login />} />     */}
        {/* <Route path="/Category" element={<CategoryProducts />} />     */}
          
      </Routes>
        {/* <Home_Img></Home_Img> */}
        {/* <Category/> */}
    {/* <Footer/> */}
  </Router>







      {/* <Header/> */}
     
      {/* <Footer></Footer> */}
    </>
  )
}

export default App
