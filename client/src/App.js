import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useEffect, useRef } from "react";
import ConditionalRoute from './routes/conditionalRoute';
import { ChakraProvider } from '@chakra-ui/react'
import './App.css'
import Aos from 'aos';
import 'aos/dist/aos.css';
import theme from "./theme";
function App() {

  const animatedRef = useRef(false);
  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth;
      const disableValue = windowWidth <= 600 ? 0 : 600; // Change the threshold as needed
      Aos.init({
        disable: window.innerWidth <= 600 ? true : disableValue
      });
    };
    if (!animatedRef.current) {
      handleResize(); // Initial setup
      animatedRef.current = true;
    }
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  return (
    <div>
      <Routes>
        {/* <Route path="/adminlogin/*" element={<AdminLogin />} /> */}
        <Route path="/*" element={<Layout />} />
      </Routes>
    </div>
  );
}

function Layout() {
  return (
    <>
      <ChakraProvider theme={theme}>
        <ConditionalRoute />
      </ChakraProvider>
    </>
  );
}

export default App;

