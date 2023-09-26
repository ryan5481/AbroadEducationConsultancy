import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import ConditionalRoute from './routes/conditionalRoute';
import { ChakraProvider } from '@chakra-ui/react'
import './App.css'
import Aos from 'aos';
import 'aos/dist/aos.css';
import theme from "./theme";

function App() {
  useEffect(() => {
    Aos.init({
      // Add your AOS initialization options here
    });
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
