

import React, { useState, useEffect } from 'react';
import { Box, Image, Center, Grid } from '@chakra-ui/react';
import { motion } from "framer-motion";
import axios from 'axios';
const baseUrl = process.env.REACT_APP_BASE_URL

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
};



const Services = () => {
  const [imageData, setImageData] = useState([]);

  useEffect(() => {
    const fetchImageData = async () => {
      try {
        const res = await axios.get(`${baseUrl}/get-services-images`);
        const data = await res.data.data
        setImageData(data);
      } catch (error) {
        console.error('Error fetching image data:', error);
      }
    };
    fetchImageData();
  }, []);

  const imageVariants = {
    initial: { opacity: 0, scale: 0 },
    animate: { opacity: 1, scale: 1 },
  };

  return(<div style={{
    display:"flex",
  justifContent:"center",
  alignItems:"center",
  height:"100vh"
  }} >
    {imageData.map((imageUrl, index) => (
        <motion.img
          src={require(`../../uploads/serviceImages/${imageUrl.serviceImage}`)}
          alt={imageUrl.imageTitle}
          key={index}
          initial="initial"
          animate="animate"
          variants={imageVariants}
          style={{
            width:"200px",
            margin:"10px"
          }}
        />
     
        ))}
  </div>)
}

export default Services

