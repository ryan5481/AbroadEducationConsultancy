import { Routes, Route } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useColorModeValue } from '@chakra-ui/react'
import '../App.css';
//User Routes
import Header from '../components/header/header';
import NavBar  from '../components/navigation/navbar'
import Home from "../pages/01-home.js"
import Services from "../pages/02-services.js"
import AboutUs from "../pages/03-aboutUs.js"
import Footer from '../components/footer/footer';



const ConditionalRoute = () => {
  const { userRole } = useSelector(state => state.user)
  if (userRole === 'admin') {
    return <AdminRoutes />
  } else {
    return <UserRoutes />
  }
}

const UserRoutes = () => {
  return (
    <>
      <Header />
      <NavBar zIndex={10} />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<Services />} />
      <Route path="/about-us" element={<AboutUs />} />
        {/* <Route path="/adminlogin" element={<AdminLogin />} />
        <Route path="/brochure" element={<Brochure />} /> */}
      </Routes>
      <Footer />
    </>
  )
}

const AdminRoutes = () => {
  return (
    <>
      {/* <AdminNavBar /> */}
      <Routes bg={useColorModeValue('purple.100', 'purple.800')}>
        {/* <Route path="/" element={<Home />} /> */}
        
      </Routes>
    </>
  )
}

export default ConditionalRoute





