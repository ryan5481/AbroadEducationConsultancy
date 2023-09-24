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
import StudyDestination from '../pages/04-studyDestinations';
import StudyInUsa from '../pages/04.1-studyInUsa';
import StudyInUk from '../pages/04.2-studyInUk';
import StudyInAustralia from '../pages/04.3-studyInAustralia'
import StudyInCanada from '../pages/04.4-studyInCanada'
import StudyInNz from '../pages/04.5-studyInNz'
import StudyInEurope from '../pages/04.6-studyInEurope'
import Gallery from '../pages/05-gallery';
import TestPrepration from '../pages/06-testPreparation';
import PTE from '../pages/06.1-PTE';
import IELTS from '../pages/06.2-IELTS';
import TOEFL from '../pages/06.3-TOEFL';
import GRE from '../pages/06.4-GRE';
import SAT from '../pages/06.4-SAT';
import ContactUs from '../pages/07-contactUs';



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
      <Route path="/study-destination" element={<StudyDestination />} />
      <Route path="/study-in-usa" element={<StudyInUsa />} />
      <Route path="/study-in-united-kingdom" element={<StudyInUk />} />
      <Route path="/study-in-australia" element={<StudyInAustralia />} />
      <Route path="/study-in-canada" element={<StudyInCanada />} />
      <Route path="/study-in-new-zealand" element={<StudyInNz />} />
      <Route path="/study-in-europe" element={<StudyInEurope />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/test-preparation" element={<TestPrepration />} />
      <Route path="/pte-test" element={<PTE />} />
      <Route path="/ielts-test" element={<IELTS />} />
      <Route path="/toefl-test" element={<TOEFL />} />
      <Route path="/gre-test" element={<GRE />} />
      <Route path="/sat-test" element={<SAT />} />
      <Route path="/contact-us" element={<ContactUs />} />
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





